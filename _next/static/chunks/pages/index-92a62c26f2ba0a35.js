(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3678)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,o=i(4941).Z,a=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,s=e.src,c=e.sizes,g=e.unoptimized,p=void 0!==g&&g,x=e.priority,S=void 0!==x&&x,N=e.loading,k=e.lazyRoot,E=e.lazyBoundary,I=e.className,L=e.quality,R=e.width,O=e.height,C=e.style,q=e.objectFit,P=e.objectPosition,H=e.onLoadingComplete,D=e.placeholder,W=void 0===D?"empty":D,B=e.blurDataURL,M=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),V=d.useContext(h.ImageConfigContext),Z=d.useMemo(function(){var e=v||V||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return r({},e,{allSizes:t,deviceSizes:i})},[V]),F=c?"responsive":"intrinsic";"layout"in M&&(M.layout&&(F=M.layout),delete M.layout);var T=z;if("loader"in M){if(M.loader){var U=M.loader;T=function(e){e.config;var t=l(e,["config"]);return U(t)}}delete M.loader}var G="";if(function(e){var t;return"object"==typeof e&&(w(e)||void 0!==e.src)}(s)){var Q=w(s)?s.default:s;if(!Q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(B=B||Q.blurDataURL,G=Q.src,(!F||"fill"!==F)&&(O=O||Q.height,R=R||Q.width,!Q.height||!Q.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}s="string"==typeof s?s:G;var J=!S&&("lazy"===N||void 0===N);(s.startsWith("data:")||s.startsWith("blob:"))&&(p=!0,J=!1),y.has(s)&&(J=!1),Z.unoptimized&&(p=!0);var X=o(d.useState(!1),2),K=X[0],Y=X[1],$=o(m.useIntersection({rootRef:void 0===k?null:k,rootMargin:E||"200px",disabled:!J}),3),ee=$[0],et=$[1],ei=$[2],en=!J||et,eo={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},er=!1,es=j(R),ec=j(O),el=j(L),ed=Object.assign({},C,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:q,objectPosition:P}),eu="blur"!==W||K?{}:{backgroundSize:q||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===F)eo.display="block",eo.position="absolute",eo.top=0,eo.left=0,eo.bottom=0,eo.right=0;else if(void 0!==es&&void 0!==ec){var ef=ec/es,em=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===F?(eo.display="block",eo.position="relative",er=!0,ea.paddingTop=em):"intrinsic"===F?(eo.display="inline-block",eo.position="relative",eo.maxWidth="100%",er=!0,ea.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(es,"%27%20height=%27").concat(ec,"%27/%3e")):"fixed"===F&&(eo.display="inline-block",eo.position="relative",eo.width=es,eo.height=ec)}var eh={src:b,srcSet:void 0,sizes:void 0};en&&(eh=_({config:Z,src:s,unoptimized:p,layout:F,width:es,quality:el,sizes:c,loader:T}));var eg=s,ep="imagesizes";ep="imageSizes";var ev=(n(i={},"imageSrcSet",eh.srcSet),n(i,ep,eh.sizes),n(i,"crossOrigin",M.crossOrigin),i),ey=d.default.useLayoutEffect,eb=d.useRef(H),ex=d.useRef(s);d.useEffect(function(){eb.current=H},[H]),ey(function(){ex.current!==s&&(ei(),ex.current=s)},[ei,s]);var ew=r({isLazy:J,imgAttributes:eh,heightInt:ec,widthInt:es,qualityInt:el,layout:F,className:I,imgStyle:ed,blurStyle:eu,loading:N,config:Z,unoptimized:p,placeholder:W,loader:T,srcString:eg,onLoadingCompleteRef:eb,setBlurComplete:Y,setIntersection:ee,isVisible:en,noscriptSizes:c},M);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:eo},er?d.default.createElement("span",{style:ea},t?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,d.default.createElement(A,Object.assign({},ew))),S?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+eh.src+eh.srcSet+eh.sizes,rel:"preload",as:"image",href:eh.srcSet?void 0:eh.src},ev))):null)};var r=i(6495).Z,s=i(2648).Z,c=i(1598).Z,l=i(7273).Z,d=c(i(7294)),u=s(i(5443)),f=i(9309),m=i(7190),h=i(9977);i(3794);var g=i(2392);function p(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/portfolio/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},y=new Set,b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,a=new URL("".concat(t.path).concat(p(i))),r=a.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),o&&r.set("q",o.toString()),a.href}],["cloudinary",function(e){var t,i=e.config,n=e.src,o=e.width,a=["f_auto","c_limit","w_"+o,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(a).concat(p(n))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(p(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(e){return void 0!==e.default}function _(e){var t=e.config,i=e.src,n=e.unoptimized,o=e.layout,r=e.width,s=e.quality,c=e.sizes,l=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var o=e.deviceSizes,r=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(n);l)c.push(parseInt(l[2]));if(c.length){var l,d,u=.01*(d=Math).min.apply(d,a(c));return{widths:r.filter(function(e){return e>=o[0]*u}),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map(function(e){return r.find(function(t){return t>=e})||r[r.length-1]}))),kind:"x"}}(t,r,o,c),u=d.widths,f=d.kind,m=u.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:u.map(function(e,n){return"".concat(l({config:t,src:i,quality:s,width:e})," ").concat("w"===f?e:n+1).concat(f)}).join(", "),src:l({config:t,src:i,quality:s,width:u[m]})}}function j(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function z(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=x.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function S(e,t,i,n,o,a){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(y.add(t),"blur"===n&&a(!0),null==o?void 0:o.current)){var i=e.naturalWidth,r=e.naturalHeight;o.current({naturalWidth:i,naturalHeight:r})}}))}var A=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,o=e.layout,a=e.className,s=e.imgStyle,c=e.blurStyle,u=e.isLazy,f=e.placeholder,m=e.loading,h=e.srcString,g=e.config,p=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,x=e.setIntersection,w=e.onLoad,j=e.onError,z=(e.isVisible,e.noscriptSizes),A=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return m=u?"lazy":m,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":o,className:a,style:r({},s,c),ref:d.useCallback(function(e){x(e),(null==e?void 0:e.complete)&&S(e,h,o,f,y,b)},[x,h,o,f,y,b,]),onLoad:function(e){S(e.currentTarget,h,o,f,y,b),w&&w(e)},onError:function(e){"blur"===f&&b(!0),j&&j(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},A,_({config:g,src:h,unoptimized:p,layout:o,width:i,quality:n,sizes:z,loader:v}),{decoding:"async","data-nimg":o,style:s,className:a,loading:m}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3678:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return u}});var n=i(5893),o=i(9008),a=i.n(o),r=i(5675),s=i.n(r),c=i(3188),l=i(214),d=i.n(l);function u(){return(0,n.jsxs)("div",{className:d().container,children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"christian willy horizont portfolio"}),(0,n.jsx)("link",{rel:"icon",href:"".concat(c.G,"/favicon.ico")})]}),(0,n.jsxs)("main",{className:d().main,children:[(0,n.jsx)("h1",{className:d().title,children:"Willy Horizont's Portfolio"}),(0,n.jsxs)("p",{className:d().description,children:["Fullstack javascript developer"," "]}),(0,n.jsxs)("div",{className:d().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",className:d().card,children:[(0,n.jsx)("h2",{children:"Documentation →"}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",className:d().card,children:[(0,n.jsx)("h2",{children:"Learn →"}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,n.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:d().card,children:[(0,n.jsx)("h2",{children:"Examples →"}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:d().card,children:[(0,n.jsx)("h2",{children:"Deploy →"}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,n.jsx)("footer",{className:d().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Made with ❤️"," ",(0,n.jsx)("span",{className:d().logo,children:(0,n.jsx)(s(),{src:"".concat(c.G,"/vercel.svg"),alt:"Vercel Logo",width:72,height:16})})]})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,i){e.exports=i(5443)},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);