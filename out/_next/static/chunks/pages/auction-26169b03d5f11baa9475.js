(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836],{1873:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{m:function(){return AuctionFTcard}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67294),react_countdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(98130),axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9669),axios__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__),react_icons_gi__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2585),_Forms_BidForm__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(87823),recoil__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2804),_atoms__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(63569),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(43196),react_icons_fa__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(89583),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(85893),AuctionFTcard=function AuctionFTcard(_ref){var ft=_ref.ft,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),colors=_useState[0],setColors=_useState[1],id="_"+Math.random().toString(36).substr(2,9),user=(0,recoil__WEBPACK_IMPORTED_MODULE_4__.sJ)(_atoms__WEBPACK_IMPORTED_MODULE_5__.KL),apiLink=(0,recoil__WEBPACK_IMPORTED_MODULE_4__.sJ)(_atoms__WEBPACK_IMPORTED_MODULE_5__.H3),_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isBidding=_useState2[0],setIsBidding=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("=="),randomUID=_useState3[0],setRandomUID=_useState3[1],randomUIDGen=function(_){var e=Math.round(Math.random()*(_.max-(_.min||0))),t=(0,_utils__WEBPACK_IMPORTED_MODULE_6__.s3)(e);setRandomUID(t)};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(apiLink,"api/set/").concat(ft.set)).then((function(_){var e=_.data;setInterval((function(){randomUIDGen(e.set)}),1e3)}))}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://ipfs.io/ipfs/".concat(ft.script,"?").concat(randomUID)).then((function(_ref3){var data=_ref3.data,code="(//".concat(data,'\n)("').concat(randomUID,'")'),SVG=eval(code);document.getElementById("image-".concat(ft.set,"-").concat(id,"-auction"))&&(document.getElementById("image-".concat(ft.set,"-").concat(id,"-auction")).innerHTML=SVG.HTML)}))}),[randomUID]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://ipfs.io/ipfs/".concat(ft.script,"?").concat(randomUID)).then((function(_ref4){var data=_ref4.data,code="(//".concat(data,'\n)("').concat(randomUID,'")'),SVG=eval(code);setColors([SVG.set.Color1,SVG.set.Color2])}))}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"border shadow-xl h-auto border-transparent bg-gray-700 rounded-xl  text-white flex flex-col",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1",{className:"text-center w-full rounded-t-xl font-black py-2 text-xl",style:{background:"linear-gradient(".concat(colors[0]," 30%, ").concat(colors[1],")")},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_countdown__WEBPACK_IMPORTED_MODULE_1__.ZP,{date:Date.parse(ft.time)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"py-5 text-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"bg-gray-700 absolute top-0 w-full h-full bg-opacity-70 flex justify-center items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.g_g,{size:60,color:"#fff"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"image-".concat(ft.set,"-").concat(id,"-auction"),className:"w-1/2 mx-auto"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1",{className:"text-xl font-semibold text-center",children:ft.set}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"px-2 sm:px-4 py-4 w-full flex flex-col text-center justify-between items-center gap-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{children:[ft.bidder&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h1",{children:["Bidder: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("strong",{children:ft.bidder})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h1",{children:["Price:"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("strong",{children:[parseFloat((ft.price.amount/Math.pow(10,ft.price.precision)).toString()).toFixed(ft.price.precision)," "]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h1",{children:["Bids: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("strong",{children:ft.bids})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button",{disabled:!user,onClick:function(){return user&&setIsBidding(!0)},className:"px-6 py-2 rounded-xl flex items-center gap-2 ".concat(!user&&"cursor-not-allowed"),style:{background:"linear-gradient(".concat(colors[0]," 30%, ").concat(colors[1],")")},children:["Bid",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_gi__WEBPACK_IMPORTED_MODULE_9__.gnI,{})]})]})]}),isBidding&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Forms_BidForm__WEBPACK_IMPORTED_MODULE_3__.A,{kind:"ft",set:ft.set,uid:ft.uid,handleClose:function(){return setIsBidding(!1)}})]})}},37757:function(_,e,t){"use strict";t.r(e);var r=t(67294),n=t(11163),a=t(53421),c=t(9669),s=t.n(c),i=t(1873),o=t(63569),E=t(2804),u=t(85893);e.default=function(){var _=(0,n.useRouter)(),e=(0,E.sJ)(o.H3),t=(0,r.useState)(!0),c=t[0],d=t[1],l=(0,r.useState)([]),D=l[0],M=l[1],P=(0,r.useState)([]),O=P[0],f=P[1];return(0,r.useEffect)((function(){(D===[]||O===[])&&_.push("/")}),[D]),(0,r.useEffect)((function(){s().get("".concat(e,"api/auctions")).then((function(_){var e=_.data.result;M(e)})),s().get("".concat(e,"api/mintauctions")).then((function(_){var e=_.data.result;f(e)}))}),[]),(0,u.jsxs)("div",{className:"mx-10 my-4",children:[(0,u.jsx)("title",{children:"Auction house"}),(0,u.jsxs)("div",{className:"flex justify-center",children:[(0,u.jsx)("button",{onClick:function(){return d(!0)},className:"p-2 ".concat(c&&"bg-gray-800"," rounded-l-full bg-gray-700 text-white transition-all"),children:"NFTs"}),(0,u.jsx)("button",{onClick:function(){return d(!1)},className:"p-2 ".concat(!c&&"bg-gray-800"," rounded-r-full bg-gray-700 text-white transition-all"),children:"FTs"})]}),(0,u.jsx)("h1",{className:"text-white mt-10 mb-5 text-3xl font-semibold",children:"Auction house"}),c?(0,u.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-5",children:D&&D.map((function(_){return(0,u.jsx)(a.JB,{nft:_},_.uid)}))}):O&&(0,u.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-5",children:O&&O.map((function(_){return(0,u.jsx)(i.m,{ft:_},_.uid)}))})]})}},61410:function(_,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auction",function(){return t(37757)}])}},function(_){_.O(0,[774,888,179],(function(){return e=61410,_(_.s=e);var e}));var e=_.O();_N_E=e}]);