"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[131],{5180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>f,toc:()=>i});var r=n(4848),s=n(8453);const o={sidebar_position:6},c="Luau Types",f={id:"tutorial/extras/luau-types",title:"Luau Types",description:"Refx provides strict types for Luau users.",source:"@site/docs/tutorial/extras/luau-types.md",sourceDirName:"tutorial/extras",slug:"/tutorial/extras/luau-types",permalink:"/refx/docs/tutorial/extras/luau-types",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Extras",permalink:"/refx/docs/category/extras"}},a={},i=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"luau-types",children:"Luau Types"}),"\n",(0,r.jsxs)(t.p,{children:["Refx provides strict types for Luau users. ",(0,r.jsx)("br",{}),"\nThe correct way of typing your effect can be seen here:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:'local refx = require(path.to.refx)\n\ntype myEffectImpl = {\n    __index: myEffectImpl,\n    DoSomething: (myEffect) -> (), -- methods of your effect\n}\n\ntype myEffectFields = {\n    SomeField: number, -- fields of your effect\n}\n\ntype myEffect = refx.Effect<myEffectImpl, myEffectFields, number, string> \n-- everything after first two arguments will be put into variadic generic parameter and used\n-- as a tuple of arguments you pass to .new()\n\nlocal myEffect = refx.CreateEffect("myEffect") :: refx.EffectImpl<myEffectImpl, myEffectFields, number, string>\n\nfunction myEffect:OnStart(num, str)\n    print("myEffect just started! \ud83d\ude05")\nend\n\nfunction myEffect:DoSomething()\n    print("Do something")\nend\n\nreturn myEffect\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>f});var r=n(6540);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function f(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);