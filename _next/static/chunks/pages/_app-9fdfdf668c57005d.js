(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(2698)}])},1210:function(e,t){"use strict";function o(e,t,o,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;o(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,a=o(7273).Z,l=r(o(7294)),u=o(6273),i=o(2725),c=o(3462),f=o(1018),s=o(7190),d=o(1210),p=o(8684),v={};function y(e,t,o,n){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,n)).catch(function(e){});var r=n&&void 0!==n.locale?n.locale:e&&e.locale;v[t+"%"+o+(r?"%"+r:"")]=!0}}var h=l.default.forwardRef(function(e,t){var o,r,h=e.href,b=e.as,g=e.children,_=e.prefetch,x=e.passHref,j=e.replace,m=e.shallow,C=e.scroll,O=e.locale,M=e.onClick,L=e.onMouseEnter,P=e.onTouchStart,w=e.legacyBehavior,E=void 0===w?!0!==Boolean(!1):w,R=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=g,E&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));var k=!1!==_,T=l.default.useContext(c.RouterContext),S=l.default.useContext(f.AppRouterContext);S&&(T=S);var I=l.default.useMemo(function(){var e=n(u.resolveHref(T,h,!0),2),t=e[0],o=e[1];return{href:t,as:b?u.resolveHref(T,b):o||t}},[T,h,b]),N=I.href,U=I.as,B=l.default.useRef(N),D=l.default.useRef(U);E&&(r=l.default.Children.only(o));var H=E?r&&"object"==typeof r&&r.ref:t,Z=n(s.useIntersection({rootMargin:"200px"}),3),A=Z[0],K=Z[1],F=Z[2],G=l.default.useCallback(function(e){(D.current!==U||B.current!==N)&&(F(),D.current=U,B.current=N),A(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[U,H,N,F,A]);l.default.useEffect(function(){var e=K&&k&&u.isLocalURL(N),t=void 0!==O?O:T&&T.locale,o=v[N+"%"+U+(t?"%"+t:"")];e&&!o&&y(T,N,U,{locale:t})},[U,N,K,O,k,T]);var z={ref:G,onClick:function(e){E||"function"!=typeof M||M(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,a,i,c,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(o)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:c,scroll:i}):t[r?"replace":"push"](o,{forceOptimisticNavigation:!s})};f?l.default.startTransition(v):v()}}(e,T,N,U,j,m,C,O,Boolean(S),k)},onMouseEnter:function(e){E||"function"!=typeof L||L(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!k&&S)&&u.isLocalURL(N)&&y(T,N,U,{priority:!0})},onTouchStart:function(e){E||"function"!=typeof P||P(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!k&&S)&&u.isLocalURL(N)&&y(T,N,U,{priority:!0})}};if(!E||x||"a"===r.type&&!("href"in r.props)){var W=void 0!==O?O:T&&T.locale,X=T&&T.isLocaleDomain&&d.getDomainLocale(U,W,T.locales,T.domainLocales);z.href=X||p.addBasePath(i.addLocale(U,W,T&&T.defaultLocale))}return E?l.default.cloneElement(r,z):l.default.createElement("a",Object.assign({},R,z),o)});t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,c=e.disabled||!l,f=n(r.useState(!1),2),s=f[0],d=f[1],p=n(r.useState(null),2),v=p[0],y=p[1];return r.useEffect(function(){if(l){if(!c&&!s&&v&&v.tagName){var e,n,r,f,p,y,h;return n=function(e){return e&&d(e)},p=(f=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=i.find(function(e){return e.root===o.root&&e.margin===o.margin});if(n&&(t=u.get(n)))return t;var r=new Map;return t={id:o,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e),elements:r},i.push(o),u.set(o,t),t}(r={root:null==t?void 0:t.current,rootMargin:o})).id,y=f.observer,(h=f.elements).set(v,n),y.observe(v),function(){if(h.delete(v),y.unobserve(v),0===h.size){y.disconnect(),u.delete(p);var e=i.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&i.splice(e,1)}}}}else if(!s){var b=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(b)}}},[v,c,o,t,s]),[y,s,r.useCallback(function(){d(!1)},[])]};var r=o(7294),a=o(9311),l="function"==typeof IntersectionObserver,u=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(2648).Z)(o(7294)),r=n.default.createContext(null);t.AppRouterContext=r;var a=n.default.createContext(null);t.LayoutRouterContext=a;var l=n.default.createContext(null);t.GlobalLayoutRouterContext=l;var u=n.default.createContext(null);t.TemplateContext=u},2698:function(e,t,o){"use strict";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o.r(t),o.d(t,{default:function(){return f}});var r=o(5893),a=o(7294),l=o(1664),u=o.n(l),i=function(){var e=(0,a.useState)();return e[0],e[1],(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:{position:"sticky",padding:"4px",backgroundColor:"#121212"},children:(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",columnGap:"8px"},children:[(0,r.jsx)(u(),{href:"/",children:"Willy Horizont's Portfolio"}),(0,r.jsx)(u(),{href:"/utils/longlat-to-latlong",children:"Longlat to Latlong"}),(0,r.jsx)(u(),{href:"/utils/file-url-to-base64",children:"File Url to Base64"})]})})})},c=function(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),t]})};o(906);var f=function(e){var t=e.Component,o=e.pageProps;return(0,r.jsx)(c,{children:(0,r.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){n(e,t,o[t])})}return e}({},o))})}},906:function(){},1664:function(e,t,o){e.exports=o(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(387)}),_N_E=e.O()}]);