(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[970],{5132:function(e,t){"use strict";var r,n,o,l;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return f},ACTION_NAVIGATE:function(){return u},ACTION_PREFETCH:function(){return c},ACTION_REFRESH:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return s},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return p}});let i="refresh",u="navigate",a="restore",s="server-patch",c="prefetch",f="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=r||(r={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(l=n||(n={})).fresh="fresh",l.reusable="reusable",l.expired="expired",l.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2842:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8796),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3765:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let n=r(8754),o=r(1757),l=r(5893),i=o._(r(7294)),u=n._(r(3935)),a=n._(r(494)),s=r(885),c=r(4666),f=r(8261);r(9784);let d=r(7171),p=n._(r(7124)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,n,o,l,i){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function b(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}let m=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:u,width:a,decoding:s,className:c,style:f,fetchPriority:d,placeholder:p,loading:h,unoptimized:m,fill:y,onLoadRef:v,onLoadingCompleteRef:C,setBlurComplete:_,setShowAltText:w,sizesInput:E,onLoad:j,onError:P,...x}=e;return(0,l.jsx)("img",{...x,...b(d),loading:h,width:a,height:u,decoding:s,"data-nimg":y?"fill":"1",className:c,style:f,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&g(e,p,v,C,_,m,E))},[r,p,v,C,_,P,m,E,t]),onLoad:e=>{g(e.currentTarget,p,v,C,_,m,E)},onError:e=>{w(!0),"empty"!==p&&_(!0),P&&P(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...b(r.fetchPriority)};return t&&u.default.preload?(u.default.preload(r.src,n),null):(0,l.jsx)(a.default,{children:(0,l.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(d.RouterContext),n=(0,i.useContext)(f.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=h||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:u,onLoadingComplete:a}=e,g=(0,i.useRef)(u);(0,i.useEffect)(()=>{g.current=u},[u]);let b=(0,i.useRef)(a);(0,i.useEffect)(()=>{b.current=a},[a]);let[v,C]=(0,i.useState)(!1),[_,w]=(0,i.useState)(!1),{props:E,meta:j}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:v,showAltText:_});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{...E,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:g,onLoadingCompleteRef:b,setBlurComplete:C,setShowAltText:w,sizesInput:e.sizes,ref:t}),j.priority?(0,l.jsx)(y,{isAppRouter:!r,imgAttributes:E}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3500:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return C}});let n=r(8754),o=r(5893),l=n._(r(7294)),i=r(4813),u=r(5853),a=r(5058),s=r(5782),c=r(8878),f=r(7171),d=r(3068),p=r(1487),h=r(2842),g=r(1412),b=r(5132),m=new Set;function y(e,t,r,n,o,l){if(l||(0,u.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}(async()=>l?e.prefetch(t,o):e.prefetch(t,r,n))().catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let C=l.default.forwardRef(function(e,t){let r,n;let{href:a,as:m,children:C,prefetch:_=null,passHref:w,replace:E,shallow:j,scroll:P,locale:x,onClick:O,onMouseEnter:S,onTouchStart:R,legacyBehavior:T=!1,...I}=e;r=C,T&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let M=l.default.useContext(f.RouterContext),k=l.default.useContext(d.AppRouterContext),A=null!=M?M:k,N=!M,z=!1!==_,L=null===_?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:D,as:F}=l.default.useMemo(()=>{if(!M){let e=v(a);return{href:e,as:m?v(m):e}}let[e,t]=(0,i.resolveHref)(M,a,!0);return{href:e,as:m?(0,i.resolveHref)(M,m):t||e}},[M,a,m]),U=l.default.useRef(D),$=l.default.useRef(F);T&&(n=l.default.Children.only(r));let K=T?n&&"object"==typeof n&&n.ref:t,[B,G,H]=(0,p.useIntersection)({rootMargin:"200px"}),V=l.default.useCallback(e=>{($.current!==F||U.current!==D)&&(H(),$.current=F,U.current=D),B(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[F,K,D,H,B]);l.default.useEffect(()=>{A&&G&&z&&y(A,D,F,{locale:x},{kind:L},N)},[F,D,G,x,z,null==M?void 0:M.locale,A,N,L]);let W={ref:V,onClick(e){T||"function"!=typeof O||O(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,o,i,a,s,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?l.default.startTransition(d):d()}(e,A,D,F,E,j,P,x,N)},onMouseEnter(e){T||"function"!=typeof S||S(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&(z||!N)&&y(A,D,F,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:L},N)},onTouchStart:function(e){T||"function"!=typeof R||R(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&(z||!N)&&y(A,D,F,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:L},N)}};if((0,s.isAbsoluteUrl)(F))W.href=F;else if(!T||w||"a"===n.type&&!("href"in n.props)){let e=void 0!==x?x:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,h.getDomainLocale)(F,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);W.href=t||(0,g.addBasePath)((0,c.addLocale)(F,e,null==M?void 0:M.defaultLocale))}return T?l.default.cloneElement(n,W):(0,o.jsx)("a",{...I,...W,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1487:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),o=r(6078),l="function"==typeof IntersectionObserver,i=new Map,u=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,s=a||!l,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(l){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),i.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),i.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},885:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(9784);let n=r(1946),o=r(4666);function l(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r;let u,a,s,{src:c,sizes:f,unoptimized:d=!1,priority:p=!1,loading:h,className:g,quality:b,width:m,height:y,fill:v=!1,style:C,overrideSrc:_,onLoad:w,onLoadingComplete:E,placeholder:j="empty",blurDataURL:P,fetchPriority:x,decoding:O="async",layout:S,objectFit:R,objectPosition:T,lazyBoundary:I,lazyRoot:M,...k}=e,{imgConf:A,showAltText:N,blurComplete:z,defaultLoader:L}=t,D=A||o.imageConfigDefault;if("allSizes"in D)u=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);u={...D,allSizes:e,deviceSizes:t}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=k.loader||L;delete k.loader,delete k.srcSet;let U="__next_img_default"in F;if(U){if("custom"===u.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(S){"fill"===S&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(C={...C,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!f&&(f=t)}let $="",K=i(m),B=i(y);if("object"==typeof(r=c)&&(l(r)||void 0!==r.src)){let e=l(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,s=e.blurHeight,P=P||e.blurDataURL,$=e.src,!v){if(K||B){if(K&&!B){let t=K/e.width;B=Math.round(e.height*t)}else if(!K&&B){let t=B/e.height;K=Math.round(e.width*t)}}else K=e.width,B=e.height}}let G=!p&&("lazy"===h||void 0===h);(!(c="string"==typeof c?c:$)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,G=!1),u.unoptimized&&(d=!0),U&&c.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(d=!0),p&&(x="high");let H=i(b),V=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:T}:{},N?{}:{color:"transparent"},C),W=z||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:K,heightInt:B,blurWidth:a,blurHeight:s,blurDataURL:P||"",objectFit:V.objectFit})+'")':'url("'+j+'")',q=W?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},Y=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:l,sizes:i,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,i),c=a.length-1;return{sizes:i||"w"!==s?i:"100vw",srcSet:a.map((e,n)=>u({config:t,src:r,quality:l,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:l,width:a[c]})}}({config:u,src:c,unoptimized:d,width:K,quality:H,sizes:f,loader:F});return{props:{...k,loading:G?"lazy":h,fetchPriority:x,width:K,height:B,decoding:O,className:g,style:{...V,...q},sizes:Y.sizes,srcSet:Y.srcSet,src:_||Y.src},meta:{unoptimized:d,priority:p,placeholder:j,fill:v}}}},1946:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:l,objectFit:i}=e,u=n?40*n:t,a=o?40*o:r,s=u&&a?"viewBox='0 0 "+u+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},1128:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return u}});let n=r(8754),o=r(885),l=r(3765),i=n._(r(7124));function u(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=l.Image},7124:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},9008:function(e,t,r){e.exports=r(494)},5675:function(e,t,r){e.exports=r(1128)},1664:function(e,t,r){e.exports=r(3500)},1163:function(e,t,r){e.exports=r(7253)},6929:function(e,t,r){"use strict";let n;var o=r(7294);function l(e){return t=>!!t.type&&t.type.tabsRole===e}let i=l("Tab"),u=l("TabList"),a=l("TabPanel");function s(e,t){return o.Children.map(e,e=>null===e?null:i(e)||u(e)||a(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,o.cloneElement)(e,{...e.props,children:s(e.props.children,t)}):e)}var c=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(n&&(n+=" "),n+=t);return n};function f(e){let t=0;return!function e(t,r){return o.Children.forEach(t,t=>{null!==t&&(i(t)||a(t)?r(t):t.props&&t.props.children&&"object"==typeof t.props.children&&(u(t)&&r(t),e(t.props.children,r)))})}(e,e=>{i(e)&&t++}),t}function d(e){return e&&"getAttribute"in e}function p(e){return d(e)&&e.getAttribute("data-rttab")}function h(e){return d(e)&&"true"===e.getAttribute("aria-disabled")}let g=e=>{let t=(0,o.useRef)([]),r=(0,o.useRef)([]),l=(0,o.useRef)();function d(t,r){if(t<0||t>=m())return;let{onSelect:n,selectedIndex:o}=e;n(t,o,r)}function g(e){let t=m();for(let r=e+1;r<t;r++)if(!h(y(r)))return r;for(let t=0;t<e;t++)if(!h(y(t)))return t;return e}function b(e){let t=e;for(;t--;)if(!h(y(t)))return t;for(t=m();t-- >e;)if(!h(y(t)))return t;return e}function m(){let{children:t}=e;return f(t)}function y(e){return t.current[`tabs-${e}`]}function v(e){let t=e.target;do if(C(t)){if(h(t))return;d([].slice.call(t.parentNode.children).filter(p).indexOf(t),e);return}while(null!=(t=t.parentNode))}function C(e){if(!p(e))return!1;let t=e.parentElement;do{if(t===l.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}let{children:_,className:w,disabledTabClassName:E,domRef:j,focus:P,forceRenderTabPanel:x,onSelect:O,selectedIndex:S,selectedTabClassName:R,selectedTabPanelClassName:T,environment:I,disableUpDownKeys:M,disableLeftRightKeys:k,...A}=e;return o.createElement("div",Object.assign({},A,{className:c(w),onClick:v,onKeyDown:function(t){let{direction:r,disableUpDownKeys:n,disableLeftRightKeys:o}=e;if(C(t.target)){let{selectedIndex:l}=e,i=!1,u=!1;("Space"===t.code||32===t.keyCode||"Enter"===t.code||13===t.keyCode)&&(i=!0,u=!1,v(t)),(o||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(n||38!==t.keyCode&&"ArrowUp"!==t.code)?(o||39!==t.keyCode&&"ArrowRight"!==t.code)&&(n||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(l=function(){let e=m();for(;e--;)if(!h(y(e)))return e;return null}(),i=!0,u=!0):(36===t.keyCode||"Home"===t.code)&&(l=function(){let e=m();for(let t=0;t<e;t++)if(!h(y(t)))return t;return null}(),i=!0,u=!0):(l="rtl"===r?b(l):g(l),i=!0,u=!0):(l="rtl"===r?g(l):b(l),i=!0,u=!0),i&&t.preventDefault(),u&&d(l,t)}},ref:e=>{l.current=e,j&&j(e)},"data-rttabs":!0}),function(){let l=0,{children:c,disabledTabClassName:f,focus:d,forceRenderTabPanel:p,selectedIndex:h,selectedTabClassName:g,selectedTabPanelClassName:b,environment:v}=e;r.current=r.current||[];let C=r.current.length-m(),_=(0,o.useId)();for(;C++<0;)r.current.push(`${_}${r.current.length}`);return s(c,e=>{let c=e;if(u(e)){let l=0,u=!1;null==n&&function(e){let t=e||("undefined"!=typeof window?window:void 0);try{n=!!(void 0!==t&&t.document&&t.document.activeElement)}catch(e){n=!1}}(v);let a=v||("undefined"!=typeof window?window:void 0);n&&a&&(u=o.Children.toArray(e.props.children).filter(i).some((e,t)=>a.document.activeElement===y(t))),c=(0,o.cloneElement)(e,{children:s(e.props.children,e=>{let n=`tabs-${l}`,i=h===l,a={tabRef:e=>{t.current[n]=e},id:r.current[l],selected:i,focus:i&&(d||u)};return g&&(a.selectedClassName=g),f&&(a.disabledClassName=f),l++,(0,o.cloneElement)(e,a)})})}else if(a(e)){let t={id:r.current[l],selected:h===l};p&&(t.forceRender=p),b&&(t.selectedClassName=b),l++,c=(0,o.cloneElement)(e,t)}return c})}())};g.defaultProps={className:"react-tabs",focus:!1},g.propTypes={};let b=e=>null===e.selectedIndex?1:0,m=(e,t)=>{},y=e=>{let{children:t,defaultFocus:r,defaultIndex:n,focusTabOnClick:l,onSelect:i}=e,[u,a]=(0,o.useState)(r),[s]=(0,o.useState)(b(e)),[c,d]=(0,o.useState)(1===s?n||0:null);if((0,o.useEffect)(()=>{a(!1)},[]),1===s){let e=f(t);(0,o.useEffect)(()=>{null!=c&&d(Math.min(c,Math.max(0,e-1)))},[e])}m(e,s);let p={...e};return p.focus=u,p.onSelect=(e,t,r)=>{("function"!=typeof i||!1!==i(e,t,r))&&(l&&a(!0),1===s&&d(e))},null!=c&&(p.selectedIndex=c),delete p.defaultFocus,delete p.defaultIndex,delete p.focusTabOnClick,o.createElement(g,p,t)};y.propTypes={},y.defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},y.tabsRole="Tabs";let v=e=>{let{children:t,className:r,...n}=e;return o.createElement("ul",Object.assign({},n,{className:c(r),role:"tablist"}),t)};v.tabsRole="TabList",v.propTypes={},v.defaultProps={className:"react-tabs__tab-list"};let C="react-tabs__tab",_={className:C,disabledClassName:`${C}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${C}--selected`},w=e=>{let t=(0,o.useRef)(),{children:r,className:n,disabled:l,disabledClassName:i,focus:u,id:a,selected:s,selectedClassName:f,tabIndex:d,tabRef:p,...h}=e;return(0,o.useEffect)(()=>{s&&u&&t.current.focus()},[s,u]),o.createElement("li",Object.assign({},h,{className:c(n,{[f]:s,[i]:l}),ref:e=>{t.current=e,p&&p(e)},role:"tab",id:`tab${a}`,"aria-selected":s?"true":"false","aria-disabled":l?"true":"false","aria-controls":`panel${a}`,tabIndex:d||(s?"0":null),"data-rttab":!0}),r)};w.propTypes={},w.tabsRole="Tab",w.defaultProps=_;let E="react-tabs__tab-panel",j={className:E,forceRender:!1,selectedClassName:`${E}--selected`},P=e=>{let{children:t,className:r,forceRender:n,id:l,selected:i,selectedClassName:u,...a}=e;return o.createElement("div",Object.assign({},a,{className:c(r,{[u]:i}),role:"tabpanel",id:`panel${l}`,"aria-labelledby":`tab${l}`}),n||i?t:null)};P.tabsRole="TabPanel",P.propTypes={},P.defaultProps=j}}]);