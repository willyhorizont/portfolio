(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{229:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/lat-long-scrapper",function(){return t(1610)}])},608:function(e,l,t){"use strict";var o=t(5893),r=t(6336),n=function(e){var l=e.children;return(0,o.jsx)("main",{style:{minHeight:"100vh",padding:"4rem 0",flex:1,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,o.jsx)(r.Z,{maxWidth:"lg",children:l})})};l.Z=n},3188:function(e,l,t){"use strict";t.d(l,{Ay:function(){return r},GW:function(){return o},Gy:function(){return n}});var o="/portfolio",r={lat:-2.473888688444448,lng:117.88879998609853},n={south:-22.667232559414682,west:85.06165154859853,north:18.02837509829607,east:150.71594842359852}},8739:function(e,l){"use strict";l.Z={night:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}],retro:[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}]}},1610:function(e,l,t){"use strict";t.r(l);var o=t(5893),r=t(9008),n=t.n(r),i=t(1163),a=t(7294),d=t(1953),s=t(3311),u=t(8739),c=t(3188),y=t(608),p=new s.aN({apiKey:"AIzaSyAraptFbVXN4LZi66o7tDbrvEti1a8gVeo",language:"id-ID",version:"weekly",libraries:["places"]}),v=function(){var e,l=(0,a.useRef)(null),t=(0,a.useRef)(),r=(0,a.useState)(null),s=r[0],v=r[1],f=(0,i.useRouter)().query,m=f.katakunci,g=f.kondisi,T=function(e){13===e.keyCode&&v(null)};return(0,a.useEffect)(function(){p.load().then(function(e){var o=new e.maps.Map(t.current,{center:c.Ay,zoom:4,mapTypeControl:!1,disableDefaultUI:!0,mapTypeId:"roadmap",styles:u.Z.night,gestureHandling:"greedy",restriction:{latLngBounds:c.Gy,strictBounds:!1}}),r=new e.maps.places.SearchBox(l.current,{componentRestrictions:{country:"id"}});o.addListener("bounds_changed",function(){r.setBounds(o.getBounds())});var n=[];r.addListener("places_changed",function(){var t,i,a,d,s,u,c,y,p,f,T,x,h,b,w,k,j,_,C,L,D,R=l.current.value.toLowerCase(),B=r.getPlaces();if(0!==B.length){if(n.forEach(function(e){return e.setMap(null)}),n=[],B.length>1){var E=new e.maps.LatLngBounds;if(B.forEach(function(l){var t,r,i,a,d,s;if(!(null==l?void 0:l.geometry)||!(null==l?void 0:null===(t=l.geometry)||void 0===t?void 0:t.location)){alert("Tidak ada detail tersedia untuk: ".concat(null==l?void 0:l.name));return}n.push(new e.maps.Marker({map:o,title:null==l?void 0:l.name,position:null==l?void 0:null===(r=l.geometry)||void 0===r?void 0:r.location})),(null==l?void 0:null===(i=l.geometry)||void 0===i?void 0:i.viewport)&&E.union(null==l?void 0:null===(d=l.geometry)||void 0===d?void 0:d.viewport),(null==l?void 0:null===(a=l.geometry)||void 0===a?void 0:a.viewport)||E.extend(null==l?void 0:null===(s=l.geometry)||void 0===s?void 0:s.location)}),o.fitBounds(E),R===m){var G=B.filter(function(e){var l,t,o,r,n,i,a,d;return"startsWith"===g?null==e?void 0:null===(l=e.name)||void 0===l?void 0:null===(t=l.toLowerCase)||void 0===t?void 0:null===(o=t.call(l))||void 0===o?void 0:null===(r=o.startsWith)||void 0===r?void 0:r.call(o,R):null==e?void 0:null===(n=e.name)||void 0===n?void 0:null===(i=n.toLowerCase)||void 0===i?void 0:null===(a=i.call(n))||void 0===a?void 0:null===(d=a.includes)||void 0===d?void 0:d.call(a,R)}).map(function(e){var l,t,o,r,n,i;return{name:null==e?void 0:e.name,lat:null==e?void 0:null===(l=e.geometry)||void 0===l?void 0:null===(t=l.location)||void 0===t?void 0:null===(o=t.lat)||void 0===o?void 0:o.call(t),lng:null==e?void 0:null===(r=e.geometry)||void 0===r?void 0:null===(n=r.location)||void 0===n?void 0:null===(i=n.lng)||void 0===i?void 0:i.call(n),id:null==e?void 0:e.place_id}});v((null==G?void 0:G.length)===0?null:G)}return}var I=B[0];if(!(null==I?void 0:I.geometry)||!(null==I?void 0:null===(t=I.geometry)||void 0===t?void 0:t.location)){alert("Tidak ada detail tersedia untuk: ".concat(null==I?void 0:I.name));return}if((null==I?void 0:null===(i=I.geometry)||void 0===i?void 0:i.viewport)&&o.fitBounds(null==I?void 0:null===(a=I.geometry)||void 0===a?void 0:a.viewport),o.setCenter(null==I?void 0:null===(d=I.geometry)||void 0===d?void 0:d.location),n.push(new e.maps.Marker({map:o,title:null==I?void 0:I.name,position:null==I?void 0:null===(s=I.geometry)||void 0===s?void 0:s.location})),R===m&&"startsWith"===g&&(null==I?void 0:null===(u=I.name)||void 0===u?void 0:null===(c=u.toLowerCase)||void 0===c?void 0:null===(y=c.call(u))||void 0===y?void 0:null===(p=y.startsWith)||void 0===p?void 0:p.call(y,R))){v([{name:null==I?void 0:I.name,lat:null==I?void 0:null===(k=I.geometry)||void 0===k?void 0:null===(j=k.location)||void 0===j?void 0:null===(_=j.lat)||void 0===_?void 0:_.call(j),lng:null==I?void 0:null===(C=I.geometry)||void 0===C?void 0:null===(L=C.location)||void 0===L?void 0:null===(D=L.lng)||void 0===D?void 0:D.call(L),id:null==I?void 0:I.place_id}]);return}R===m&&v([{name:null==I?void 0:I.name,lat:null==I?void 0:null===(f=I.geometry)||void 0===f?void 0:null===(T=f.location)||void 0===T?void 0:null===(x=T.lat)||void 0===x?void 0:x.call(T),lng:null==I?void 0:null===(h=I.geometry)||void 0===h?void 0:null===(b=h.location)||void 0===b?void 0:null===(w=b.lng)||void 0===w?void 0:w.call(b),id:null==I?void 0:I.place_id}])}})}).catch(function(e){return alert("Gagal memuat google maps karena: ",e)})},[g]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n(),{children:[(0,o.jsx)("title",{children:"Lat Long Scrapper"}),(0,o.jsx)("meta",{name:"description",content:"Google Maps API Places SearchBox Lat Long Scrapper"}),(0,o.jsx)("link",{rel:"icon",href:"".concat(c.GW,"/favicon.ico")})]}),(0,o.jsx)(y.Z,{children:(0,o.jsxs)(d.Z,{sx:{display:"flex",position:"relative",flexDirection:"column"},children:[(0,o.jsx)("div",{style:{zIndex:1,borderRadius:"8px",flexGrow:1,width:"calc(100% - 16px)",position:"absolute",top:"8px",left:0,right:0,margin:"0 auto",backgroundColor:"black"},children:(0,o.jsx)("input",{ref:l,onKeyDown:T,placeholder:"Masukkan Alamat",autoComplete:"false",type:"text",id:"pacInputRef",name:"pacInputRef",style:{fontSize:"1.6rem",padding:"4px",borderRadius:"8px",color:"white",width:"100%"}})}),(0,o.jsx)("div",{className:"map",id:"mapRef",style:{height:"70vh",width:"100%",borderRadius:"8px",border:"1px solid",borderColor:"divider"},ref:t}),null!==s&&(0,o.jsxs)("div",{id:"hasilSearch",children:[(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"row",columnGap:"8px",justifyContent:"space-between"},children:[(0,o.jsx)("div",{style:{flex:1},children:"Nama"}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"row",flex:1,justifyContent:"space-between"},children:[(0,o.jsx)("div",{children:"Lat"}),(0,o.jsx)("div",{children:"Lng"})]})]}),null==s?void 0:null===(e=s.map)||void 0===e?void 0:e.call(s,function(e){return(0,o.jsxs)("div",{id:"satuObj",style:{display:"flex",flexDirection:"row",columnGap:"8px",justifyContent:"space-between"},children:[(0,o.jsx)("div",{id:"namaObj",style:{flex:1},children:null==e?void 0:e.name}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"row",flex:1,justifyContent:"space-between"},children:[(0,o.jsx)("div",{id:"latObj",children:null==e?void 0:e.lat}),(0,o.jsx)("div",{id:"lngObj",children:null==e?void 0:e.lng})]})]},null==e?void 0:e.id)})]})]})})]})};l.default=v}},function(e){e.O(0,[959,774,888,179],function(){return e(e.s=229)}),_N_E=e.O()}]);