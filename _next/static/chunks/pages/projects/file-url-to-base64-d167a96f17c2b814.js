(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[377],{4771:function(r,e,t){"use strict";var n=t(67);e.Z=n.Z},7960:function(r,e,t){"use strict";function n(r,e){"function"==typeof r?r(e):r&&(r.current=e)}t.d(e,{Z:function(){return n}})},6600:function(r,e,t){"use strict";var n=t(7294);let a="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;e.Z=a},3633:function(r,e,t){"use strict";t.d(e,{Z:function(){return o}});var n=t(7294),a=t(6600);function o(r){let e=n.useRef(r);return(0,a.Z)(()=>{e.current=r}),n.useCallback((...r)=>(0,e.current)(...r),[])}},67:function(r,e,t){"use strict";t.d(e,{Z:function(){return o}});var n=t(7294),a=t(7960);function o(r,e){return n.useMemo(()=>null==r&&null==e?null:t=>{(0,a.Z)(r,t),(0,a.Z)(e,t)},[r,e])}},2268:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/file-url-to-base64",function(){return t(9251)}])},608:function(r,e,t){"use strict";var n=t(5893),a=t(6336),o=function(r){var e=r.children;return(0,n.jsx)("main",{style:{minHeight:"100vh",padding:"4rem 0",flex:1,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,n.jsx)(a.Z,{maxWidth:"lg",children:e})})};e.Z=o},3188:function(r,e,t){"use strict";t.d(e,{Ay:function(){return a},GW:function(){return n},Gy:function(){return o}});var n="/portfolio",a={lat:-2.473888688444448,lng:117.88879998609853},o={south:-22.667232559414682,west:85.06165154859853,north:18.02837509829607,east:150.71594842359852}},9251:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return W}});var n=t(7568),a=t(655),o=t(5893),i=t(7294),s=t(918),l=t(3366),u=t(7462),c=t(6010),f=t(4780),d=t(917),b=t(1796),m=t(6622),p=t(2097),v=t(1719),g=t(8884),h=t(4867),Z=t(1588);function x(r){return(0,h.Z)("MuiLinearProgress",r)}(0,Z.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);let y=["className","color","value","valueBuffer","variant"],w=r=>r,C,j,k,P,_,$,B=(0,d.F4)(C||(C=w`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),R=(0,d.F4)(j||(j=w`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),S=(0,d.F4)(k||(k=w`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),I=r=>{let{classes:e,variant:t,color:n}=r,a={root:["root",`color${(0,m.Z)(n)}`,t],dashed:["dashed",`dashedColor${(0,m.Z)(n)}`],bar1:["bar",`barColor${(0,m.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,m.Z)(n)}`,"buffer"===t&&`color${(0,m.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,f.Z)(a,x,e)},L=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,b.$n)(r.palette[e].main,.62):(0,b._j)(r.palette[e].main,.5),N=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver(r,e){let{ownerState:t}=r;return[e.root,e[`color${(0,m.Z)(t.color)}`],e[t.variant]]}})(({ownerState:r,theme:e})=>(0,u.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:L(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"})),F=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver(r,e){let{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,m.Z)(t.color)}`]]}})(({ownerState:r,theme:e})=>{let t=L(e,r.color);return(0,u.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,d.iv)(P||(P=w`
    animation: ${0} 3s infinite linear;
  `),S)),M=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver(r,e){let{ownerState:t}=r;return[e.bar,e[`barColor${(0,m.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>(0,u.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,d.iv)(_||(_=w`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),B)),O=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver(r,e){let{ownerState:t}=r;return[e.bar,e[`barColor${(0,m.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>(0,u.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:L(e,r.color),transition:"transform .4s linear"}),({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,d.iv)($||($=w`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),R)),q=i.forwardRef(function(r,e){let t=(0,g.Z)({props:r,name:"MuiLinearProgress"}),{className:n,color:a="primary",value:i,valueBuffer:s,variant:f="indeterminate"}=t,d=(0,l.Z)(t,y),b=(0,u.Z)({},t,{color:a,variant:f}),m=I(b),v=(0,p.Z)(),h={},Z={bar1:{},bar2:{}};if(("determinate"===f||"buffer"===f)&&void 0!==i){h["aria-valuenow"]=Math.round(i),h["aria-valuemin"]=0,h["aria-valuemax"]=100;let x=i-100;"rtl"===v.direction&&(x=-x),Z.bar1.transform=`translateX(${x}%)`}if("buffer"===f&&void 0!==s){let w=(s||0)-100;"rtl"===v.direction&&(w=-w),Z.bar2.transform=`translateX(${w}%)`}return(0,o.jsxs)(N,(0,u.Z)({className:(0,c.Z)(m.root,n),ownerState:b,role:"progressbar"},h,{ref:e},d,{children:["buffer"===f?(0,o.jsx)(F,{className:m.dashed,ownerState:b}):null,(0,o.jsx)(M,{className:m.bar1,ownerState:b,style:Z.bar1}),"determinate"===f?null:(0,o.jsx)(O,{className:m.bar2,ownerState:b,style:Z.bar2})]}))});var A=t(9630),E=t(4874),D=t(196),T=t(9008),z=t.n(T),X=t(7881),G=t(3188),U=t(608),W=function(){var r,e=(0,i.useState)(""),t=e[0],l=e[1],u=(0,i.useState)(""),c=u[0],f=u[1],d=(0,i.useState)(!1),b=d[0],m=d[1],p=(r=(0,n.Z)(function(r){var e,t,n,o,i,s;return(0,a.__generator)(this,function(n){switch(n.label){case 0:m(!0),l(r.target.value),e=new AbortController,n.label=1;case 1:return n.trys.push([1,4,5,6]),[4,D.Z.get(r.target.value,{responseType:"blob",signal:e.signal})];case 2:return t=n.sent(),[4,(0,X.Z)(t.data)];case 3:return f(n.sent()),[3,6];case 4:if(o=n.sent(),e.signal.aborted)return[2];if(!(null==o?void 0:o.response))return f("File url not responding."),[2];return f((null===(i=o.response)||void 0===i?void 0:null===(s=i.data)||void 0===s?void 0:s.message)||o.message),[3,6];case 5:return m(!1),[7];case 6:return[2]}})}),function(e){return r.apply(this,arguments)});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(z(),{children:[(0,o.jsx)("title",{children:"File Url To Base64"}),(0,o.jsx)("meta",{name:"description",content:"file url string to base64 string"}),(0,o.jsx)("link",{rel:"icon",href:"".concat(G.GW,"/favicon.ico")})]}),(0,o.jsx)(U.Z,{children:(0,o.jsxs)(s.Z,{elevation:3,sx:{padding:"8px"},children:[b&&(0,o.jsx)(q,{}),(0,o.jsx)(A.Z,{variant:"h3",textAlign:"center",gutterBottom:!0,children:"File Url String To Base64"}),(0,o.jsx)(A.Z,{textAlign:"center",children:"File url string"}),(0,o.jsx)(E.Z,{variant:"outlined",value:t,onChange:p,sx:{width:"100%"}}),(0,o.jsx)(A.Z,{textAlign:"center",children:"Base64 string result"}),(0,o.jsx)(E.Z,{value:c,minRows:10,maxRows:20,multiline:!0,style:{width:"100%",borderRadius:"8px",backgroundColor:"#091929",color:"#ddd"}})]})})]})}},7881:function(r,e){"use strict";var t=function(r){return new Promise(function(e,t){var n=new FileReader;n.onend=t,n.onabort=t,n.onload=function(){return e(n.result)},n.readAsDataURL(new Blob([r],{type:r.type}))})};e.Z=t},220:function(r,e,t){"use strict";var n=t(7294);e.Z=n.createContext(null)},5068:function(r,e,t){"use strict";function n(r,e){return(n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,e){return r.__proto__=e,r})(r,e)}function a(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,n(r,e)}t.d(e,{Z:function(){return a}})}},function(r){r.O(0,[689,611,774,888,179],function(){return r(r.s=2268)}),_N_E=r.O()}]);