package httpin

import (
	"context"
	"net/http"
)

// Middleware is a constructor for making a chain, which acts as a list of
// http.Handler constructors. We recommend using
// https://github.com/justinas/alice to chain your HTTP middleware functions
// and the app handler.
type Middleware func(http.Handler) http.Handler

func NewInput(inputStruct interface{}) Middleware {
	core, err := New(inputStruct)
	if err != nil {
		panic(err)
	}

	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
			// Here we read the request and decode it to fill our structure.
			// Once failed, the request should end here.
			input, err := core.ReadRequest(r)
			if err != nil {
				http.Error(rw, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
				return
			}

			// We put the `input` to the request's context, and it will pass to the next hop.
			ctx := context.WithValue(r.Context(), Input, input)
			next.ServeHTTP(rw, r.WithContext(ctx))
		})
	}
}
