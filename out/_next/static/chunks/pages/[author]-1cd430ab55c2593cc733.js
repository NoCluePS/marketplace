(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[446],{84110:function(e){e.exports=function(){"use strict";return function(e,t,n){e=e||{};var i=t.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(e,t,n,r){return i.fromToBase(e,t,n,r)}n.en.relativeTime=r,i.fromToBase=function(t,i,s,a,o){for(var l,u,c,d=s.$locale().relativeTime||r,f=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=f.length,h=0;h<p;h+=1){var y=f[h];y.d&&(l=a?n(t).diff(s,y.d,!0):s.diff(t,y.d,!0));var m=(e.rounding||Math.round)(Math.abs(l));if(c=l>0,m<=y.r||!y.r){m<=1&&h>0&&(y=f[h-1]);var v=d[y.l];o&&(m=o(""+m)),u="string"==typeof v?v.replace("%d",m):v(m,i,y.l,c);break}}if(i)return u;var x=c?d.future:d.past;return"function"==typeof x?x(u):x.replace("%s",u)},i.to=function(e,t){return s(e,t,this,!0)},i.from=function(e,t){return s(e,t,this)};var a=function(e){return e.$u?n.utc():n()};i.toNow=function(e){return this.to(a(this),e)},i.fromNow=function(e){return this.from(a(this),e)}}}()},97076:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var i=n(9669),r=n.n(i),s=n(11163),a=n(67294),o=n(2804),l=n(63569),u=n(45051),c=n(87893),d=n(83789),f=n(47320),p=n(60590),h=n.n(p),y=n(27484),m=n.n(y),v=n(84110),x=n.n(v),g=n(79352),b=n(5434),_=n(85893);m().extend(x()),m()().format();var w=function(e){var t=e.post,n=(0,a.useState)([]),i=n[0],r=n[1],o=(0,a.useState)(""),l=o[0],u=o[1],c=(0,a.useState)(null),p=c[0],y=c[1],m=(0,a.useState)(null),v=m[0],x=m[1],w=(0,a.useState)(!1),j=w[0],P=w[1],S=(0,s.useRouter)();return(0,a.useEffect)((function(){h().api.getContent(t.author,t.permlink,(function(e,t){e&&console.log(e),console.log(t),y(t)}))}),[]),(0,a.useEffect)((function(){if(p){var e=JSON.parse(p.json_metadata);x(e)}}),[p]),(0,a.useEffect)((function(){var e=v;if(console.log(v),e)if(e.app.includes("3speak")){P(!0);var t="https://ipfs.io/ipfs/"+e.video.info.ipfs,n="https://ipfs.io/ipfs/"+e.video.info.ipfsThumbnail;n&&t&&r((function(e){return[].concat((0,d.Z)(e),[{file:t,image:n}])}))}else{var i;(i=e.image&&Array.isArray(e.image)?e.image[0]:"string"==typeof e.image?e.image:e.Hash360&&(e.Hash360,1)?"https://ipfs.io/ipfs/".concat(e.Hash360):"https://www.dlux.io/img/dlux-sdk.png")&&"https"!==i.substr(0,5)&&(i="https://www.dlux.io/img/dlux-sdk.png"),u(i)}}),[v]),v&&(0,_.jsxs)("div",{className:"relative border-2 text-white py-1 sm:p-3 rounded-xl h-full border-gray-800 bg-gray-600 w-full flex flex-col items-center justify-center",children:[j?(0,_.jsx)("div",{className:"w-full flex justify-center",children:(0,_.jsx)(f.Z,{className:"rounded-xl w-4/5",playerId:"my-unique-id",playerScript:"https://cdn.jwplayer.com/libraries/HT7Dts3H.js",playlist:i})}):(0,_.jsx)("div",{className:"flex justify-center w-full",children:(0,_.jsx)("img",{src:l,className:"w-4/5",alt:"appPhoto"})}),(0,_.jsx)("h1",{className:"text-center text-xl my-2 max-w-md font-bold",children:p.root_title}),(0,_.jsxs)("div",{className:"flex justify-between w-full",children:[(0,_.jsxs)("div",{className:"flex items-center gap-1",children:[(0,_.jsx)(g.iB2,{}),(0,_.jsxs)("h1",{children:["(",p.active_votes.length,")"]})]}),(0,_.jsxs)("div",{onClick:function(){return S.push("/@".concat(p.author,"/").concat(p.permlink))},className:"flex items-center gap-1 cursor-pointer hover:text-gray-300",children:[(0,_.jsx)(b.Hlg,{}),(0,_.jsx)("h1",{children:"Comment"})]})]})]})},j=n(45155),P=function(){var e=new c.Client(["https://api.hive.blog","https://api.hivekings.com","https://anyx.io","https://api.openhive.network"]),t=(0,s.useRouter)().query.author,n=(0,a.useState)(""),i=n[0],d=n[1],f=(0,a.useState)([]),p=f[0],h=f[1],y=(0,a.useState)(null),m=y[0],v=y[1],x=(0,a.useState)(""),b=(x[0],x[1]),P=(0,o.sJ)(l.H3);return(0,a.useEffect)((function(){t&&"@"===t.substr(0,1)?d(t.substr(1,t.length)):d(t)}),[t]),(0,a.useEffect)((function(){if(i){r().get("".concat(P,"api/pfp/").concat(i)).then((function(e){var t=e.data;b(t.result[0])}));var t={tag:i,limit:10};e.database.getDiscussions("blog",t).then((function(e){h(e)})),e.database.getAccounts([i]).then((function(e){e[0]&&(console.log(JSON.parse(e[0].posting_json_metadata).profile),v(JSON.parse(e[0].posting_json_metadata).profile))}))}}),[i]),(0,_.jsxs)("div",{className:"flex flex-col text-white my-10 mx-2 sm:mx-10",children:[(0,_.jsx)("div",{className:"flex flex-col items-center w-full",children:(0,_.jsxs)("div",{className:"relative overflow-hidden border-2 text-white p-5 rounded-xl border-gray-800 ".concat(null!==m&&void 0!==m&&m.cover_image?"bg-black":"bg-gray-600"," flex flex-col sm:flex-row items-center h-full sm:items-start gap-3 w-full"),children:[(0,_.jsxs)("div",{className:"flex flex-col items-center justify-center z-10",children:[m&&(0,_.jsx)("img",{height:165,width:165,src:m.profile_image?m.profile_image:u.$8,alt:"profile"}),(0,_.jsx)("h1",{className:"text-xl mb-2",children:t})]}),m&&(0,_.jsxs)("div",{className:"z-40 mx-5 my-auto",children:[(0,_.jsx)("h1",{className:"text-2xl mt-2",children:null===m||void 0===m?void 0:m.name}),(0,_.jsxs)("div",{className:"flex items-center gap-2",children:[(0,_.jsx)(g.IIZ,{}),(0,_.jsx)("h1",{children:m.about})]}),(0,_.jsxs)("div",{className:"flex items-center gap-2",children:[(0,_.jsx)(g.l65,{}),(0,_.jsx)("h1",{children:m.location})]}),m.website&&(0,_.jsx)("a",{target:"_blank",href:m.website,children:(0,_.jsxs)("div",{className:"flex items-center gap-2 hover:text-gray-300",children:[(0,_.jsx)(g.Utb,{}),(0,_.jsx)("h1",{children:"https://www."===m.website.substr(0,12)?m.website.substr(12,m.website.length):m.website})]})})]}),m&&(0,_.jsxs)("div",{className:"sm:absolute z-20 right-7 bottom-6 flex gap-3",children:[m.facebook&&(0,_.jsx)("a",{target:"_blank",href:"https://www.facebook.com/"+m.facebook,className:"hover:text-gray-300",children:(0,_.jsx)(j.kKz,{size:25})}),m.instagram&&(0,_.jsx)("a",{target:"_blank",className:"hover:text-gray-300",href:"https://www.instagram.com/"+m.instagram,children:(0,_.jsx)(j.Z8w,{size:25})}),m.github&&(0,_.jsx)("a",{target:"_blank",className:"hover:text-gray-300",href:"https://www.github.com/"+m.github,children:(0,_.jsx)(j.lfl,{size:25})}),m.linkedin&&(0,_.jsx)("a",{target:"_blank",className:"hover:text-gray-300",href:"https://www.linkedin.com/"+m.linkedin,children:(0,_.jsx)(j.juy,{size:25})}),m.twitter&&(0,_.jsx)("a",{target:"_blank",className:"hover:text-gray-300",href:"https://www.twitter.com/"+m.twitter,children:(0,_.jsx)(j.Xai,{size:25})})]}),m&&m.cover_image&&(0,_.jsx)("img",{className:"absolute top-0 left-0 z-0 w-full pb-1 opacity-40",src:m.cover_image,width:120,height:120,alt:"coverPhoto"})]})}),(0,_.jsxs)("div",{className:"text-center",children:[(0,_.jsx)("h1",{className:"my-3 font-bold text-xl",children:"BLOG"}),(0,_.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5 w-full my-4",children:p.map((function(e){return(0,_.jsx)(w,{post:e},e.permlink)}))})]})]})}},18977:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[author]",function(){return n(97076)}])},42804:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=c(n(34171)),r=c(n(96359)),s=c(n(99569)),a=c(n(98886)),o=c(n(78454)),l=c(n(56565)),u=c(n(84515));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return{onAdPlay:i.default.bind(e),onBeforePlay:r.default.bind(e),onFullScreen:s.default.bind(e),onMute:a.default.bind(e),onPlay:o.default.bind(e),onTime:l.default.bind(e),onVideoLoad:u.default.bind(e)}}},34171:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){this.state.adHasPlayed?this.props.onAdResume(e):(this.props.onAdPlay(e),this.setState({adHasPlayed:!0}))}},96359:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.getPlaylistItem();this.state.hasPlayed||this.state.adHasPlayed||"function"!==typeof this.props.generatePrerollUrl||t.playAd(this.props.generatePrerollUrl(n))}},99569:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.fullscreen?this.props.onEnterFullScreen(e):this.props.onExitFullScreen(e)}},98886:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.mute?this.props.onMute(e):this.props.onUnmute(e)}},78454:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){"autostart"===e.playReason?(this.setState({hasPlayed:!0}),this.props.onAutoStart(e)):!this.state.hasPlayed||"buffering"!==e.oldstate&&"paused"!==e.oldstate?(this.props.onPlay(e),this.setState({hasPlayed:!0})):this.props.onResume(e)}},56565:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=this.state.hasFired,n=e.position,i=e.duration,r=!1;this.props.onTime(e),!t.threeSeconds&&n>3&&(this.props.onThreeSeconds(),t.threeSeconds=!0,r=!0),!t.tenSeconds&&n>10&&(this.props.onTenSeconds(),t.tenSeconds=!0,r=!0),!t.thirtySeconds&&n>30&&(this.props.onThirtySeconds(),t.thirtySeconds=!0,r=!0),!t.twentyFivePercent&&n/i*100>25&&(this.props.onTwentyFivePercent(),t.twentyFivePercent=!0,r=!0),!t.fiftyPercent&&n/i*100>50&&(this.props.onFiftyPercent(),t.fiftyPercent=!0,r=!0),!t.seventyFivePercent&&n/i*100>75&&(this.props.onSeventyFivePercent(),t.seventyFivePercent=!0,r=!0),!t.ninetyFivePercent&&n/i*100>95&&(this.props.onNinetyFivePercent(),t.ninetyFivePercent=!0,r=!0),r&&this.setState({hasFired:t})}},84515:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){this.setState({hasFired:{}}),this.props.onVideoLoad(e)}},19090:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){},i={aspectRatio:"inherit",file:"",isAutoPlay:void 0,isMuted:void 0,onAdPlay:n,onAdResume:n,onAdSkipped:n,onAdComplete:n,onEnterFullScreen:n,onExitFullScreen:n,onMute:n,onUnmute:n,onAutoStart:n,onResume:n,onPlay:n,onClose:n,onReady:n,onError:n,onAdPause:n,onPause:n,onVideoLoad:n,onOneHundredPercent:n,onThreeSeconds:n,onTenSeconds:n,onThirtySeconds:n,onTwentyFivePercent:n,onFiftyPercent:n,onSeventyFivePercent:n,onNinetyFivePercent:n,onTime:n,onBuffer:n,onBufferChange:n,playlist:"",useMultiplePlayerScripts:!1};t.default=i},53817:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.onload||function(){};return function(){n(),t()}}},4080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t;if("on"===e.slice(0,2)){var n=e.slice(2),i=(t=n,Array.isArray(t)?t:Array.from(t)),r=i[0],s=i.slice(1);return""+r.toLowerCase()+s.join("")}return null}},87890:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e){var t=e.aspectRatio,i=e.customProps,r=void 0===i?{}:i,s=e.file,a=e.generatePrerollUrl,o=e.image,l=e.isAutoPlay,u=e.isMuted,c=e.licenseKey,d=e.playlist,f=!!a,p={};return c&&(p.key=c),d?p.playlist=d:s&&(p.file=s),t&&"inherit"!==t&&(p.aspectratio=t),f&&(p.advertising={client:"googima",admessage:"Ad \u2014 xxs left",autoplayadsmuted:!0}),"undefined"!==typeof l&&(p.autostart=!!l),"undefined"!==typeof u&&(p.mute=!!u),o&&(p.image=o),n(p,r)}},7512:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=n(4080),s=(i=r)&&i.__esModule?i:{default:i};t.default=function(e){var t=e.component,n=e.player,i=e.playerOpts;n.setup(i);var r={};Object.keys(t.props).forEach((function(e){var n=(0,s.default)(e);n&&(r[n]=t.props[e])})),r.adPlay=t.eventHandlers.onAdPlay,r.beforeComplete=t.props.onOneHundredPercent,r.beforePlay=function(e){t.eventHandlers.onBeforePlay(e,n)},r.fullscreen=t.eventHandlers.onFullScreen,r.mute=t.eventHandlers.onMute,r.play=t.eventHandlers.onPlay,r.playlistItem=t.eventHandlers.onVideoLoad,r.time=t.eventHandlers.onTime,Object.keys(r).forEach((function(e){n.on(e,r[e])}))}},12876:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.context,n=e.onLoadCallback,i=e.scriptSrc,r=e.uniqueScriptId,s=t.createElement("script");s.id=r,s.src=i,s.onload=n,t.head.appendChild(s)}},40648:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.jwplayer&&t.jwplayer(e);n&&n.remove()}},57668:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=e.context,n=e.playerId,i=t.__JW_PLAYER_CONFIGS__=t.__JW_PLAYER_CONFIGS__||{},r=i[n];r?t.jwplayer.defaults=r:i[n]=t.jwplayer.defaults}},84606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=n(45697),s=(i=r)&&i.__esModule?i:{default:i};var a={aspectRatio:s.default.oneOf(["inherit","1:1","16:9"]),className:s.default.string,customProps:s.default.object,file:s.default.string,generatePrerollUrl:s.default.func,image:s.default.string,isAutoPlay:s.default.bool,isMuted:s.default.bool,licenseKey:s.default.string,onAdPause:s.default.func,onAdPlay:s.default.func,onAdResume:s.default.func,onAdSkipped:s.default.func,onAdComplete:s.default.func,onAutoStart:s.default.func,onEnterFullScreen:s.default.func,onError:s.default.func,onExitFullScreen:s.default.func,onFiftyPercent:s.default.func,onMute:s.default.func,onNinetyFivePercent:s.default.func,onOneHundredPercent:s.default.func,onPause:s.default.func,onPlay:s.default.func,onReady:s.default.func,onResume:s.default.func,onSeventyFivePercent:s.default.func,onTenSeconds:s.default.func,onThirtySeconds:s.default.func,onThreeSeconds:s.default.func,onTwentyFivePercent:s.default.func,onUnmute:s.default.func,onVideoLoad:s.default.func,onBuffer:s.default.func,onBufferChange:s.default.func,playerId:s.default.string.isRequired,playerScript:s.default.string.isRequired,playlist:s.default.oneOfType([s.default.string,s.default.array]),useMultiplePlayerScripts:s.default.bool};t.default=a},47320:function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(67294),s=m(r),a=m(n(69590)),o=m(n(42804)),l=m(n(53817)),u=m(n(87890)),c=m(n(7512)),d=m(n(12876)),f=m(n(40648)),p=m(n(57668)),h=m(n(19090)),y=m(n(84606));function m(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={adHasPlayed:!1,hasPlayed:!1,hasFired:{}},n.eventHandlers=(0,o.default)(n),n.uniqueScriptId="jw-player-script",e.useMultiplePlayerScripts&&(n.uniqueScriptId+="-"+e.playerId),n.videoRef=null,n._initialize=n._initialize.bind(n),n._setVideoRef=n._setVideoRef.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){var e=!!window.jwplayer,t=document.getElementById(this.uniqueScriptId),n=this.props.useMultiplePlayerScripts;n||!e?n&&t?this._initialize():t?t.onload=(0,l.default)(t,this._initialize):(0,d.default)({context:document,onLoadCallback:this._initialize,scriptSrc:this.props.playerScript,uniqueScriptId:this.uniqueScriptId}):this._initialize()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.file!==e.file,n=!(0,a.default)(this.props.playlist,e.playlist);return t||n}},{key:"componentDidUpdate",value:function(){window.jwplayer&&window.jwplayer(this.videoRef)&&this._initialize()}},{key:"componentWillUnmount",value:function(){(0,f.default)(this.videoRef,window)}},{key:"_initialize",value:function(){var e=this.props,t=e.playerId;e.useMultiplePlayerScripts&&(0,p.default)({context:window,playerId:t});var n=window.jwplayer(this.videoRef);if(n){var i=(0,u.default)(this.props);(0,c.default)({component:this,player:n,playerOpts:i})}}},{key:"_setVideoRef",value:function(e){this.videoRef=e}},{key:"render",value:function(){return s.default.createElement("div",{className:this.props.className},s.default.createElement("div",{id:this.props.playerId,ref:this._setVideoRef}))}}]),t}(r.Component);v.defaultProps=h.default,v.displayName="ReactJWPlayer",v.propTypes=y.default,t.Z=v}},function(e){e.O(0,[720,937,158,774,888,179],(function(){return t=18977,e(e.s=t);var t}));var t=e.O();_N_E=t}]);