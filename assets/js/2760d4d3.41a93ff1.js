"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[554],{8674:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return g}});var n=i(7462),r=i(3366),o=(i(7294),i(3905)),a=["components"],s={sidebar_position:2},l="gorilla/mux \ud83e\udd8d",u={unversionedId:"integrations/gorilla",id:"integrations/gorilla",isDocsHomePage:!1,title:"gorilla/mux \ud83e\udd8d",description:"gorilla/mux is",source:"@site/docs/integrations/gorilla.md",sourceDirName:"integrations",slug:"/integrations/gorilla",permalink:"/httpin/integrations/gorilla",editUrl:"https://github.com/ggicci/httpin/edit/documentation/docs/docs/integrations/gorilla.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"go-chi/chi",permalink:"/httpin/integrations/gochi"},next:{title:"gin-gonic/gin \ud83e\udd64",permalink:"/httpin/integrations/gin"}},c=[{value:"path Directive by <code>mux.Vars</code>",id:"path-directive-by-muxvars",children:[],level:2}],p={toc:c};function g(t){var e=t.components,i=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gorillamux-"},"gorilla/mux \ud83e\udd8d"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/gorilla/mux"},"gorilla/mux")," is"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A powerful HTTP router and URL matcher for building Go web servers")),(0,o.kt)("h2",{id:"path-directive-by-muxvars"},"path Directive by ",(0,o.kt)("inlineCode",{parentName:"h2"},"mux.Vars")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"{4}","{4}":!0},'func init() {\n    // Register a directive named "path" to retrieve values from `mux.Vars`,\n    // i.e. decode path variables.\n    httpin.UseGorillaMux("path", mux.Vars)\n}\n\ntype GetPostOfUserInput struct {\n    Username string `in:"path=username"` // equivalent to `mux.Vars(r)["username"]`\n    PostID   int64  `in:"path=pid"`\n}\n')))}g.isMDXComponent=!0}}]);