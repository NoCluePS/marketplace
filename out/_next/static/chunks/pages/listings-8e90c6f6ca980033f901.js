(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{74856:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{S:function(){return FTCard}});var _Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(83789),_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(30266),_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(80318),_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(809),_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9669),axios__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(43196),react_icons_fa__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(89583),recoil__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2804),_atoms__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(63569),next_router__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11163),next_export_i18n__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(37039),_Forms_FTBuy__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(60405),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(85893),FTCard=function FTCard(_ref){var ft=_ref.ft,set=ft.set,script=ft.script,_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),colors=_useState[0],setColors=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),buy=_useState2[0],setBuy=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("=="),randomUID=_useState3[0],setRandomUID=_useState3[1],_useRecoilState=(0,recoil__WEBPACK_IMPORTED_MODULE_4__.FV)(_atoms__WEBPACK_IMPORTED_MODULE_5__.D2),_useRecoilState2=(0,_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__.Z)(_useRecoilState,2),_braodcasts=_useRecoilState2[0],setBroadcasts=_useRecoilState2[1],user=(0,recoil__WEBPACK_IMPORTED_MODULE_4__.sJ)(_atoms__WEBPACK_IMPORTED_MODULE_5__.KL),apiLink=(0,recoil__WEBPACK_IMPORTED_MODULE_4__.sJ)(_atoms__WEBPACK_IMPORTED_MODULE_5__.H3),prefix=(0,recoil__WEBPACK_IMPORTED_MODULE_4__.sJ)(_atoms__WEBPACK_IMPORTED_MODULE_5__.uo),router=(0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(),_useTranslation=(0,next_export_i18n__WEBPACK_IMPORTED_MODULE_7__.$G)(),t=_useTranslation.t,id="_"+Math.random().toString(36).substr(2,9),randomUIDGen=function(_){var e=Math.round(Math.random()*(_.max-(_.min||0))),t=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.s3)(e);setRandomUID(t)};(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(apiLink,"api/set/").concat(set)).then((function(_){var e=_.data;setInterval((function(){randomUIDGen(e.set)}),1e3)}))}),[]);var handleTakeBack=function(){var _=(0,_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__.Z)(_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark((function _(){var e;return _Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap((function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,_utils__WEBPACK_IMPORTED_MODULE_3__.pU)({set:ft.set,uid:ft.uid,kind:"ft"},user.name,prefix);case 2:(e=_.sent)&&e.success&&setBroadcasts((function(_){return[].concat((0,_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_12__.Z)(_),[e])}));case 4:case"end":return _.stop()}}),_)})));return function(){return _.apply(this,arguments)}}();return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://ipfs.io/ipfs/".concat(script,"?").concat(randomUID)).then((function(_ref4){var data=_ref4.data,code="(//".concat(data,'\n)("').concat(randomUID,'")'),SVG=eval(code);document.getElementById("image-".concat(set,"-").concat(id))&&(document.getElementById("image-".concat(set,"-").concat(id)).innerHTML=SVG.HTML)}))}),[randomUID]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://ipfs.io/ipfs/".concat(ft.script,"?").concat(randomUID)).then((function(_ref5){var data=_ref5.data,code="(//".concat(data,'\n)("').concat(ft.uid,'")'),SVG=eval(code);setColors([SVG.set.Color1,SVG.set.Color2])}))}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"border shadow-xl h-auto border-transparent bg-gray-700 rounded-xl  text-white flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1",{className:"text-center w-full rounded-t-xl font-black py-2 text-xl",style:{background:"linear-gradient(to bottom,  ".concat(colors[0]," 0%,").concat(colors[1]," 100%)")},children:set}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"py-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"bg-gray-700 absolute top-0 w-full h-full bg-opacity-70 flex justify-center items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__.g_g,{size:60,color:"#fff"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{id:"image-".concat(set,"-").concat(id),className:"w-1/2 mx-auto"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"px-5 py-4 w-full flex flex-col justify-between items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h1",{className:"hover:text-gray-300 cursor-pointer",onClick:function(){return router.push("/@".concat(ft.by))},children:[t("by"),": ",ft.by]}),ft.qty&&1!==ft.qty&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h1",{children:[t("availible"),": ",ft.qty]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h1",{children:[t("price"),":"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("strong",{children:parseFloat((+ft.price.amount/Math.pow(10,ft.price.precision)).toString()).toFixed(ft.price.precision)})]}),ft.by!==(null===user||void 0===user?void 0:user.name)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button",{onClick:function(){return user&&setBuy(!0)},className:"px-6 py-2 mt-2 rounded-xl flex items-center gap-2 ".concat(!user&&"cursor-not-allowed"),style:{background:"linear-gradient(to bottom,  ".concat(colors[0]," 0%,").concat(colors[1]," 100%)")},children:[t("buy"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__.ZXh,{})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:handleTakeBack,className:"px-3 py-2 mt-2 rounded-xl flex items-center gap-2 ".concat(!user&&"cursor-not-allowed"),style:{backgroundColor:"orange"},children:t("takeBack")})]}),buy&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Forms_FTBuy__WEBPACK_IMPORTED_MODULE_8__.V,{handleClose:function(){return setBuy(!1)},ft:ft})]})}},60405:function(_,e,t){"use strict";t.d(e,{V:function(){return O}});var r=t(83789),a=t(30266),s=t(80318),n=t(809),o=t.n(n),c=t(67294),i=t(53990),u=t(2804),l=t(63569),d=t(43196),E=t(70173),m=t(94649),p=t(37039),D=t(63628),f=t(45051),x=t(9669),P=t.n(x),M=t(85893),O=function(_){var e=_.ft,t=_.handleClose,n=(0,c.useState)(),x=n[0],O=n[1],b=(0,u.FV)(l.D2),h=(0,s.Z)(b,2),U=(h[0],h[1]),g=(0,c.useState)("DLUX"),C=g[0],k=g[1],T=(0,c.useState)(1),y=T[0],B=T[1],I=(0,c.useState)(1),L=I[0],v=I[1],W=(0,u.sJ)(l.KL),R=(0,u.sJ)(l.uo),A=(0,u.sJ)(l.H3),K=(0,u.sJ)(l.db),j=(0,p.$G)().t,w=function(){var _=(0,a.Z)(o().mark((function _(){var t,a;return o().wrap((function(_){for(;;)switch(_.prev=_.next){case 0:if("DLUX"!==C){_.next=7;break}return _.next=3,(0,d.ev)(W.name,x,R);case 3:(t=_.sent)&&t.success&&U((function(_){return[].concat((0,r.Z)(_),[t])})),_.next=11;break;case 7:return _.next=9,(0,d.Yr)({amount:"".concat(x.price," ").concat(C),memo:"NFT "+e.set+":"+e.uid},W.name,K);case 9:(a=_.sent)&&a.success&&U((function(_){return[].concat((0,r.Z)(_),[a])}));case 11:case"end":return _.stop()}}),_)})));return function(){return _.apply(this,arguments)}}(),S=function(_){return"HIVE"===_?y:L};return(0,c.useEffect)((function(){x&&w()}),[x]),(0,c.useEffect)((function(){P().get("".concat(A,"dex")).then((function(_){var e=_.data;B(e.markets.hive.tick),v(e.markets.hbd.tick)}))}),[]),(0,M.jsx)("div",{className:"fixed  top-0 left-0 flex justify-center items-center h-screen w-screen bg-gray-700 bg-opacity-75 z-50",children:(0,M.jsxs)("div",{className:" p-8 bg-gray-700 rounded-xl border-4 border-gray-800 relative",children:[(0,M.jsx)("button",{className:"m-2 absolute top-0 right-0",children:(0,M.jsx)(i.sQZ,{size:15,color:"#fff",opacity:100,onClick:t})}),(0,M.jsx)("h1",{className:"text-xl text-center whitespace-nowrap mb-2",children:"How many?"}),(0,M.jsxs)("h1",{className:"text-xl text-center whitespace-nowrap",children:[j("availible"),": ",e.qty]}),(0,M.jsx)(m.J9,{initialValues:{qty:1},validate:function(_){var t=_.qty,r={};return e.qty&&e.qty<t&&(r.qty="Not enough availible"),r},onSubmit:function(_,r){var a=_.qty,s=r.setSubmitting;O({price:parseFloat(parseFloat((+e.price.amount/Math.pow(10,e.price.precision)).toString()).toFixed(e.price.precision))*a*("DLUX"===C?1:S(C)),set:e.set,uid:e.uid?e.uid:void 0,currency:C,qty:a}),s(!1),t()},children:function(_){var t=_.values,r=_.errors,a=_.touched,s=_.handleChange,n=_.handleBlur,o=_.handleSubmit;return(0,M.jsx)("form",{onSubmit:o,children:(0,M.jsxs)("div",{className:"flex flex-col justify-center gap-5 text-white",children:[(0,M.jsx)(E.y,{errors:r.qty,handleBlur:n,handleChange:s,name:"qty",type:"number",touched:a.qty,value:t.qty}),(0,M.jsxs)("div",{children:[(0,M.jsx)("h1",{className:"mb-1",children:"Currency"}),(0,M.jsx)(D.ZP,{styles:f.XR,defaultValue:{value:"DLUX",label:"DLUX"},onChange:function(_){k(_.value)},options:[{value:"DLUX",label:"DLUX"},{value:"HIVE",label:"HIVE"},{value:"HBD",label:"HBD"}]})]}),(0,M.jsxs)("button",{type:"submit",className:"rounded-lg border border-white py-1 w-2/3 px-2 bg-gray-500 focus:ring-4 mx-auto focus:outline-none focus:ring-gray-700",children:[parseFloat(parseFloat((+e.price.amount/Math.pow(10,e.price.precision)).toString()).toFixed(e.price.precision))*t.qty*("DLUX"===C?1:S(C))," ",C]})]})})}})]})})}},36423:function(_,e,t){"use strict";t.r(e);var r=t(30266),a=t(809),s=t.n(a),n=t(67294),o=t(11163),c=t(2407),i=t(74856),u=t(9669),l=t.n(u),d=t(2804),E=t(63569),m=t(37039),p=t(85893);e.default=function(){var _=(0,n.useState)(!0),e=_[0],t=_[1],a=(0,n.useState)([]),u=a[0],D=a[1],f=(0,n.useState)([]),x=f[0],P=f[1],M=(0,o.useRouter)(),O=(0,d.sJ)(E.H3),b=(0,m.$G)().t;return u===[]&&M.push("/"),(0,n.useEffect)((function(){(function(){var _=(0,r.Z)(s().mark((function _(){return s().wrap((function(_){for(;;)switch(_.prev=_.next){case 0:l().get("".concat(O,"api/sales")).then((function(_){var e=_.data.result;D(e)})),l().get("".concat(O,"api/mintsales")).then((function(_){var e=_.data.result;P(e)}));case 2:case"end":return _.stop()}}),_)})));return function(){return _.apply(this,arguments)}})()()}),[]),(0,p.jsxs)("div",{className:"mx-10 my-4 text-white font-medium",children:[(0,p.jsx)("title",{children:"Listings"}),(0,p.jsxs)("div",{className:"flex justify-center",children:[(0,p.jsx)("button",{onClick:function(){return t(!0)},className:"p-2 ".concat(e&&"bg-gray-800"," rounded-l-full bg-gray-700 text-white transition-all"),children:"NFTs"}),(0,p.jsx)("button",{onClick:function(){return t(!1)},className:"p-2 ".concat(!e&&"bg-gray-800"," rounded-r-full bg-gray-700 text-white transition-all"),children:"FTs"})]}),(0,p.jsx)("h1",{className:"text-white mt-10 mb-5 text-3xl font-semibold",children:b("listings")}),e?u&&(0,p.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-2 gap-5",children:u.map((function(_){return(0,p.jsx)(c.yC,{nft:_},_.uid)}))}):x&&(0,p.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-2 gap-5",children:x.map((function(_){return(0,p.jsx)(i.S,{ft:_},_.uid)}))})]})}},35352:function(_,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listings",function(){return t(36423)}])}},function(_){_.O(0,[628,774,888,179],(function(){return e=35352,_(_.s=e);var e}));var e=_.O();_N_E=e}]);