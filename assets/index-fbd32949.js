import{D as J,d as xe,L as fe,a as pe,C as je,r as c,j as e,B as T,T as q,b as p,c as b,e as E,f as C,I,O as u,g as ve,h as Te,i as Se,S as ye,k as F,l as w,m as X,n as S,F as Ce,o as Ie,p as k,q as Z,G as we,s as be,t as Ee,u as Fe,v as He,w as H,x as R,y as D,z as Oe,A as Re,E as De,H as ke,J as V,K as Ae,M as Me,N as Pe,R as Le,P as _e}from"./vendor-77f71cf8.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();const Ne={hours:60,minutes:1};function Ge(t,n,r){const s=Q(n,r);return t.plusMinutes(s)}function Q(t,n){return Ne[t]*n}function Be(t,n,r){const s=fe.of(pe.ofEpochDay(0),t),i=Q(n,r),a=s.plusMinutes(i);return je.DAYS.between(s.toLocalDate(),a.toLocalDate())}function $(t,n){return n.isBefore(t)?1:0}var v=(t=>(t.H12="24h",t.H24="12h",t))(v||{});const ze=J.ofPattern("h:mm[ ]a").withLocale(xe.Locale.US),Ve=J.ofPattern("H:mm");function We(t){return t==="12h"?Ve:ze}function Ye({time:t,isEditable:n,formatter:r,onTimeChange:s,integrateWithCalendar:i,changeDateOnTextInput:a}){const o=t.format(r),[l,d]=c.useState(o),[j,g]=c.useState("");c.useEffect(()=>{d(t.format(r))},[t,r]);function m(f){const y=f.target.value;if(d(y),i&&a)try{$(t,W(y,r))!==0?g("Date will be set to tomorrow"):g("")}catch{g("")}}function h(){try{const f=W(l,r);s(f),g("")}catch{d(t.format(r))}}function x(f){f.key==="Enter"&&f.target.blur()}return e.jsx(e.Fragment,{children:n?e.jsx(T,{display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(q,{variant:"standard",value:l,sx:{marginBottom:"16px",width:"210px","& input":{textAlign:"center",fontSize:"3rem"}},onChange:m,onBlur:h,onKeyDown:x,helperText:j})}):e.jsx(p,{variant:"h3",align:"center",color:"text.primary",children:o})})}function W(t,n){const r=t.toUpperCase();return b.parse(r,n)}const ee="v1.1.1 (dev build)",te="dev.vijexa.owlclock/changelogModal",ne="dev.vijexa.owlclock/infoModal",A="dev.vijexa.owlclock/settingsModal";function Ke({isGm:t,lastReadChangelogVersion:n}){const r=n==="1.1.1";return e.jsxs(e.Fragment,{children:[e.jsx(E,{title:"OwlClock🦉 (dev)",titleTypographyProps:{sx:{fontSize:"1.125rem",fontWeight:"bold",lineHeight:"32px",color:"text.primary"}},action:e.jsxs(e.Fragment,{children:[e.jsx(C,{arrow:!0,title:"Changelog",children:e.jsx(I,{onClick:()=>u.modal.open({id:te,url:"/#/changelog",hidePaper:!0,fullScreen:!0}),children:e.jsx(ve,{color:"primary",variant:"dot",invisible:r,children:e.jsx(Te,{})})})}),e.jsx(C,{arrow:!0,title:"Information",children:e.jsx(I,{onClick:()=>u.modal.open({id:ne,url:"/#/info",hidePaper:!0,fullScreen:!0}),children:e.jsx(Se,{})})}),e.jsx(C,{arrow:!0,title:"Settings",children:e.jsx(I,{onClick:()=>u.modal.open({id:A,url:"/#/settings?isGm="+t,hidePaper:!0,fullScreen:!0}),children:e.jsx(ye,{})})})]})}),e.jsx(F,{variant:"middle"})]})}function Ue({history:t,onTimeChange:n,onFavorite:r}){return e.jsx(e.Fragment,{children:e.jsx(w,{direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",useFlexGap:!0,spacing:1,children:t.map((s,i)=>e.jsxs(X,{size:"small",variant:"outlined",children:[e.jsxs(S,{sx:{width:"fit-content"},onClick:()=>n(s.unit,s.inputValue),children:[s.inputValue," ",s.unit[0]]}),e.jsx(S,{variant:s.isFavorite?"contained":"outlined",onClick:()=>r(i,!s.isFavorite),children:e.jsx(Ce,{fontSize:"small"})})]},i))})})}function Je({onTimeChange:t}){const[n,r]=c.useState("1"),[s,i]=c.useState("1"),a=l=>()=>{t(l,parseInt(n))};function o(){const l=parseInt(n);if(isNaN(l)||l===0)r(s);else{const d=l.toString();i(d),r(d)}}return e.jsx(e.Fragment,{children:e.jsxs(w,{direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",rowGap:"8px",spacing:1,children:[e.jsx(q,{id:"outlined-basic",variant:"outlined",type:"number",size:"small",label:"Add",sx:{width:"80px"},value:n,onChange:l=>r(l.target.value),onBlur:o}),e.jsxs(X,{variant:"outlined",children:[e.jsx(S,{onClick:a("hours"),children:"Hours"}),e.jsx(S,{onClick:a("minutes"),children:"Minutes"})]})]})})}const re="lastReadChangelogVersion";function se(){return localStorage.getItem(re)??""}function qe(t){localStorage.setItem(re,t)}const ie="timeFormat",ae="historySize",oe="integrateWithCalendar",le="changeDateOnTextInput",ce="favorites";function M(){const t=localStorage.getItem(ie);if(t===v.H12||t===v.H24)return t;{const n=navigator.language;return Intl.DateTimeFormat(n,{hour:"numeric"}).resolvedOptions().hour12?v.H12:v.H24}}function P(){const t=localStorage.getItem(ae);if(t){const n=parseInt(t);if(!isNaN(n))return n}return 5}function Xe(){const t=localStorage.getItem(ce);if(t)try{const n=JSON.parse(t);if(Array.isArray(n))return n}catch{return[]}return[]}function L(){return localStorage.getItem(oe)==="true"}function _(){return localStorage.getItem(le)==="true"}function Ze(t){localStorage.setItem(ce,JSON.stringify(t))}function Qe(t,n,r,s){localStorage.setItem(ie,t),localStorage.setItem(ae,n.toString()),localStorage.setItem(oe,r.toString()),localStorage.setItem(le,s.toString())}const N="dev.vijexa.owlclock/time",$e="com.battle-system.calendar-integrate/data";function de(t,n,r){const s={[N]:{time:t.toString(),verificationTimestamp:Date.now()}};return r?u.room.setMetadata({...s,[$e]:{Increment:n,Timestamp:Date.now()}}):u.room.setMetadata(s)}function et(){const t=c.useRef(null),n=c.useRef(null),[r,s]=c.useState(b.parse("00:00")),[i,a]=c.useState(0),[o,l]=c.useState([]),[d,j]=c.useState(!1),[g,m]=c.useState(M()),[h,x]=c.useState(P()),[f,y]=c.useState(L()),[B,ue]=c.useState(_()),[he,ge]=c.useState(se());c.useEffect(()=>at(s,l,j,m,x,y,ue,ge,t,n),[]);const O=We(g);c.useEffect(()=>it(r,i,a,s,O),[r,i,O]);const z=st(r,o,l,h,f),me=rt(r,f,B);return e.jsxs(w,{ref:t,direction:"column",height:"100vh",children:[e.jsx(Ke,{isGm:d,lastReadChangelogVersion:he}),e.jsxs(w,{ref:n,direction:"column",spacing:2,sx:{padding:"16px 8px",overflowY:"auto",flexShrink:1},children:[e.jsx(Ye,{time:r,isEditable:d,formatter:O,onTimeChange:me,integrateWithCalendar:f,changeDateOnTextInput:B}),d?e.jsxs(e.Fragment,{children:[e.jsx(Je,{time:r,onTimeChange:z}),e.jsx(Ue,{history:o,onFavorite:nt(o,l),onTimeChange:z})]}):e.jsx(e.Fragment,{})]})]})}function tt(t,n){let r=t.length-n;return t.reduceRight((s,i)=>r>0&&!i.isFavorite?(r--,s):[i,...s],[])}function nt(t,n){return(r,s)=>{const a={...t[r],isFavorite:s},o=[...t];o.splice(r,1,a),n(o);const l=o.filter(d=>d.isFavorite);Ze(l)}}function rt(t,n,r){return s=>{const i=n&&r?$(t,s):0;de(s,i,n).then(()=>{})}}function st(t,n,r,s,i){return(a,o)=>{const l=Ge(t,a,o),d=i?Be(t,a,o):0;de(l,d,i).then(()=>{});const g=n.findIndex(m=>m.unit===a&&m.inputValue===o)>=0?n:[...n,{unit:a,inputValue:o,isFavorite:!1}];g.length>s?r(tt(g,s)):r(g)}}function it(t,n,r,s,i){return u.room.onMetadataChange(a=>{const o=a[N];if(o&&t.toString()!==o.time&&o.verificationTimestamp>n){const l=b.parse(o.time);s(l),r(o.verificationTimestamp),u.notification.show("You feel the passage of time... "+l.format(i))}})}function at(t,n,r,s,i,a,o,l,d,j){const g=new ResizeObserver(()=>{var h;let m=0;(h=d.current)==null||h.childNodes.forEach(x=>{m+=x.scrollHeight}),u.action.setHeight(m+1)});return g.observe(j.current),u.room.getMetadata().then(m=>{const h=m[N];h&&t(b.parse(h.time));const x=Xe();x&&n(x)}),u.player.getRole().then(m=>{m==="GM"&&r(!0)}),window.addEventListener("storage",function(){s(M()),i(P()),a(L()),o(_()),l(se())}),()=>g.unobserve(document.body)}function G({modalId:t,children:n}){return e.jsx(T,{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",onMouseDown:()=>u.modal.close(t),children:e.jsx(Ie,{sx:{boxShadow:"none",maxWidth:"400px",maxHeight:"70vh",margin:"16px",overflowY:"auto"},onMouseDown:r=>r.stopPropagation(),children:n})})}function ot(){return qe("1.1.1"),e.jsxs(G,{modalId:te,children:[e.jsx(E,{title:"OwlClock🦉 Changelog",titleTypographyProps:{sx:{fontSize:"1.125rem",fontWeight:"bold",lineHeight:"32px",color:"text.primary"}}}),e.jsx(F,{variant:"middle"}),e.jsxs(k,{children:[e.jsxs(p,{color:"text.secondary",children:["Current version: ",ee]}),e.jsx("br",{}),e.jsx(p,{variant:"h5",children:"v1.1.1"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Added changelog page"}),e.jsx("li",{children:"Improved responsiveness on smaller screens"}),e.jsx("li",{children:"Fixed an issue where dragging slider in settings outside the modal closed it"})]}),e.jsx(p,{variant:"h5",children:"v1.1.0"}),e.jsx("ul",{children:e.jsx("li",{children:'Implemented integration with "Calendar!" extension'})}),e.jsx(p,{variant:"h5",children:"v1.0.0"}),e.jsx("ul",{children:e.jsx("li",{children:"Initial release"})})]})]})}function lt(){return e.jsxs(G,{modalId:ne,children:[e.jsx(E,{title:"OwlClock🦉 Information",titleTypographyProps:{sx:{fontSize:"1.125rem",fontWeight:"bold",lineHeight:"32px",color:"text.primary"}}}),e.jsx(F,{variant:"middle"}),e.jsxs(k,{children:[e.jsx(p,{children:"This extension provides a simple way to keep track of in-game time during the day."}),e.jsx("br",{}),e.jsx(p,{children:'You can edit the time directly by editing it in the text field, or by using the "Add" field and "Hours"/"Minutes" buttons. The time will be saved in room data. Only GM can edit the time. You can switch between 24-hour and 12-hour time format in the settings.'}),e.jsx("br",{}),e.jsx(p,{children:'There is an integration with the "Calendar!" extension! You can enable it in "OwlClock" settings. It will change the date when time passes midnight.'}),e.jsx("br",{}),e.jsxs(p,{children:["If there are any bugs, feel free to ",e.jsx("a",{href:"https://github.com/vijexa/owlclock/issues/new",target:"_blank",children:"open an issue"})," on GitHub. Contributions are welcome!"]})]}),e.jsxs(Z,{children:[e.jsx(S,{startIcon:e.jsx(we,{}),sx:{color:"text.primary",marginLeft:"8px"},href:"https://github.com/vijexa/owlclock",target:"_blank",children:"GitHub"}),e.jsx(T,{marginLeft:"auto",marginRight:"16px",children:e.jsx(p,{color:"text.secondary",children:ee})})]})]})}function ct({children:t}){const[n,r]=c.useState(!1);return c.useEffect(()=>{u.isAvailable&&u.onReady(()=>r(!0))},[]),n?e.jsx(e.Fragment,{children:t}):u.isAvailable?e.jsx(T,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",children:e.jsx(be,{color:"secondary"})}):e.jsx(T,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",sx:{backgroundColor:"#0d1117"},children:e.jsxs(p,{fontSize:"1.5rem",color:"#c9d1d9",padding:"16px",children:["This is not a standalone website, but an extension for ",e.jsx("a",{href:"https://owlbear.rodeo",children:"owlbear.rodeo"})," VTT. More info ",e.jsx("a",{href:"https://github.com/vijexa/owlclock",children:"here"}),". Extension manifest ",e.jsx("a",{href:"./manifest.json",children:"here"}),"."]})})}function dt(t){return He({palette:t?{mode:t.mode==="LIGHT"?"light":"dark",text:t.text,primary:t.primary,secondary:t.secondary,background:t==null?void 0:t.background}:void 0,shape:{borderRadius:16},components:{MuiButtonBase:{defaultProps:{disableRipple:!0}}}})}function ut({children:t}){const[n,r]=c.useState(void 0);return c.useEffect(()=>{const s=i=>{r(dt(i))};return u.theme.getTheme().then(s),u.theme.onChange(s)},[]),n?e.jsx(Ee,{theme:n,children:t}):e.jsx(Fe,{})}const Y=H(R)({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:"8px"}),K=H(D)({marginBottom:"8px"}),U=H(Oe)({paddingLeft:"12px",paddingRight:"12px"}),ht=H(Z)({justifyContent:"center"});function gt(){const[t]=Re(),[n,r]=c.useState(t.get("isGm")==="true"),[s,i]=c.useState(M()),[a,o]=c.useState(P()),[l,d]=c.useState(L()),[j,g]=c.useState(_());c.useEffect(()=>{l||g(!1)},[l]),c.useEffect(()=>{u.player.getRole().then(h=>r(h==="GM"))},[]);function m(h,x){const f=x??v.H24;i(f)}return e.jsxs(G,{modalId:A,children:[e.jsx(E,{title:"OwlClock🦉 Settings",titleTypographyProps:{sx:{fontSize:"1.125rem",fontWeight:"bold",lineHeight:"32px",color:"text.primary"}}}),e.jsx(F,{variant:"middle"}),e.jsxs(k,{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(R,{fullWidth:!0,children:[e.jsx(K,{children:"Time Format"}),e.jsxs(De,{exclusive:!0,size:"small",fullWidth:!0,color:"primary",value:s,onChange:m,children:[e.jsx(U,{value:v.H24,children:"24h"}),e.jsx(U,{value:v.H12,children:"12h"})]})]}),n?e.jsxs(e.Fragment,{children:[e.jsxs(R,{fullWidth:!0,children:[e.jsx(K,{children:"History Size"}),e.jsx(T,{padding:"0 8px",children:e.jsx(ke,{value:a,marks:!0,min:1,max:10,valueLabelDisplay:"auto",onChange:(h,x)=>o(x)})})]}),e.jsxs(Y,{fullWidth:!0,children:[e.jsx(V,{checked:l,onChange:h=>d(h.target.checked)}),e.jsx(D,{focused:!1,children:'Integrate with "Calendar!"?'})]}),e.jsxs(Y,{fullWidth:!0,disabled:!l,children:[e.jsx(V,{checked:j,onChange:h=>g(h.target.checked)}),e.jsx(D,{focused:!1,children:"Change date on text input?"}),e.jsx(C,{arrow:!0,title:"This option enables date change also on text input. It will assume that if you enter time before current time, you must mean the next day. A hint will appear when applying the time will advance the date. Example: entering 8:00 when current time is 23:00 will trigger date change.",children:e.jsx(I,{children:e.jsx(Ae,{})})})]})]}):e.jsx(e.Fragment,{})]}),e.jsx(ht,{children:e.jsx(S,{variant:"outlined",onClick:()=>mt(s,a,l,j),children:"Save"})})]})}function mt(t,n,r,s){Qe(t,n,r,s),u.modal.close(A)}const xt=Me([{path:"/",element:e.jsx(et,{})},{path:"/changelog",element:e.jsx(ot,{})},{path:"/info",element:e.jsx(lt,{})},{path:"/settings",element:e.jsx(gt,{})}]);Pe.createRoot(document.getElementById("root")).render(e.jsx(Le.StrictMode,{children:e.jsx(ct,{children:e.jsx(ut,{children:e.jsx(_e,{router:xt})})})}));
