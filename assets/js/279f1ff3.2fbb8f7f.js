"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[611],{5404:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=e(7462),r=e(3366),s=(e(7294),e(3905)),o=["components"],a={sidebar_position:0},p="net/http",u={unversionedId:"integrations/http",id:"integrations/http",isDocsHomePage:!1,title:"net/http",description:"Package net/http",source:"@site/docs/integrations/http.md",sourceDirName:"integrations",slug:"/integrations/http",permalink:"/httpin/integrations/http",editUrl:"https://github.com/ggicci/httpin/edit/documentation/docs/docs/integrations/http.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"custom \ud83d\udd0c",permalink:"/httpin/directives/custom"},next:{title:"go-chi/chi",permalink:"/httpin/integrations/gochi"}},c=[{value:"Chain httpin&#39;s Middlware to your http.Handler(s)",id:"chain-httpins-middlware-to-your-httphandlers",children:[],level:2}],h={toc:c};function d(t){var n=t.components,e=(0,r.Z)(t,o);return(0,s.kt)("wrapper",(0,i.Z)({},h,e,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"nethttp"},"net/http"),(0,s.kt)("p",null,"Package ",(0,s.kt)("a",{parentName:"p",href:"https://pkg.go.dev/net/http#Handler"},"net/http")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"provides HTTP client and server implementations.")),(0,s.kt)("h2",{id:"chain-httpins-middlware-to-your-httphandlers"},"Chain httpin's Middlware to your http.Handler(s)"),(0,s.kt)("p",null,"We recommend using ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/justinas/alice"},"justinas/alice")," to chain your middlewares."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:"{4,10}","{4,10}":!0},'// Bind input vs. handler.\nfunc init() {\n    http.Handle("/users", alice.New(\n        httpin.NewInput(ListUsersInput{}),\n    ).ThenFunc(ListUsers))\n}\n\n// Get your input instance with only ONE LINE of code.\nfunc ListUsers(rw http.ResponseWriter, r *http.Request) {\n    input := r.Context().Value(httpin.Input).(*ListUsersInput)\n\n    // Do sth.\n}\n')))}d.isMDXComponent=!0}}]);