(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{98173:function(n,e,t){"use strict";t.r(e);var c=t(80318),s=t(9669),i=t.n(s),a=t(67294),u=t(2804),l=t(63569),r=t(95276),o=t.n(r),f=t(63628),h=t(37039),m=t(85893),p=new(o());e.default=function(){var n=(0,a.useState)(),e=n[0],t=n[1],s=(0,a.useState)([]),r=s[0],o=s[1],d=(0,u.FV)(l.H3),_=(0,c.Z)(d,2),x=_[0],v=_[1],N=(0,h.$G)().t;return(0,a.useEffect)((function(){o([]),i().get("".concat(x,"api/mirrors")).then((function(n){var e=n.data,c=[];e.apis.forEach((function(n){n.api_url.includes(n.node)&&c.push(n)})),t(c)}))}),[]),(0,a.useEffect)((function(){var n=[];e?(e.forEach((function(e){p.ping(e.api_url).catch((function(t){n.push({value:e.api_url,label:"".concat(t,"ms | ").concat(e.node," | ").concat(e.api_url),pingTime:t})}))})),o(n.sort((function(n,e){return n.pingTime<e.pingTime?1:-1})))):o(e)}),[e]),(0,m.jsx)("div",{className:"text-white text-3xl",children:(0,m.jsxs)("div",{className:"mx-10 my-10",children:[(0,m.jsx)("h1",{className:"my-5",children:N("settings")}),(0,m.jsxs)("div",{className:"w-full mx-2 sm:w-1/2",children:[(0,m.jsx)("h1",{className:"text-2xl",children:N("APIlink")}),(0,m.jsx)(f.ZP,{className:"my-1 text-sm h-3 text-black",placeholder:N("select"),options:r,onChange:function(n){v(n.value)}})]})]})})}},19471:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return t(98173)}])}},function(n){n.O(0,[279,774,888,179],(function(){return e=19471,n(n.s=e);var e}));var e=n.O();_N_E=e}]);