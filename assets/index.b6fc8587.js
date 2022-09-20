var $e=Object.defineProperty,qe=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var Ae=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable;var Oe=(t,o,a)=>o in t?$e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,A=(t,o)=>{for(var a in o||(o={}))Je.call(o,a)&&Oe(t,a,o[a]);if(Ae)for(var a of Ae(o))Ve.call(o,a)&&Oe(t,a,o[a]);return t},H=(t,o)=>qe(t,Ue(o));import{u as Ye,a as Xe,s as we,M as Ze,c as Qe,r as u,j as i,T as et,b as e,C as tt,B as nt,d as at,I as se,e as rt,f as te,D as ot,g as it,h as lt,i as st,L as ge,k as Z,l as ct,m as Q,n as Ie,o as be,p as dt,q as Ge,t as ut,v as k,w as Re,x as ht,y as mt,z as pt,F as I,A as de,P as gt,S as R,E as v,G as z,H as F,J as O,K as B,N as $,O as M,Q as D,R as x,U as ft,V as Ct,W as yt,X as ae,Y as re,Z as J,_ as Se,$ as pe,a0 as _t,a1 as ke,a2 as X,a3 as We,a4 as ie,a5 as le,a6 as ee,a7 as vt,a8 as Ke,a9 as bt,aa as St,ab as Ee,ac as Ne,ad as xt,ae as wt,af as kt,ag as Tt,ah as At,ai as q}from"./vendor.3962a6c3.js";const Ot=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))p(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&p(m)}).observe(document,{childList:!0,subtree:!0});function a(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function p(n){if(n.ep)return;n.ep=!0;const c=a(n);fetch(n.href,c)}};Ot();const K=()=>Ye(),V=Xe,ce=240,It=we("main",{shouldForwardProp:t=>t!=="open"})(({theme:t,open:o})=>A({flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:`-${ce}px`},o&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0})),Et=we(Ze,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:o})=>A({transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},o&&{width:`calc(100% - ${ce}px)`,marginLeft:`${ce}px`,transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})})),De=we("div")(({theme:t})=>H(A({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{justifyContent:"flex-end"}));function Nt(t){const o=K(),a=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,p=Qe({palette:{mode:a?"dark":"light"}}),[n,c]=u.exports.useState(!0),m=V(w=>w.user.authed),h=()=>{c(!0)},_=()=>{c(!1)};let C;m?C={"/":{label:"Intro",icon:e(Ie,{})},"/accommodation":{label:"Accommodation",icon:e(be,{})},"/attendees":{label:"Attendees",icon:e(dt,{})},"/groups":{label:"Groups",icon:e(Ge,{})},"/config":{label:"Config",icon:e(ut,{})}}:C={"/":{label:"Intro",icon:e(Ie,{})}};const f="/"+window.location.pathname.split("/")[1],[b,E]=u.exports.useState(C[f].label),P=w=>{const j=C[w];E(j.label),o(k(w))};return i(et,{theme:p,children:[e(tt,{}),i(nt,{sx:{display:"flex"},children:[e(Et,{position:"fixed",open:n,children:i(at,{children:[e(se,{color:"inherit","aria-label":"open drawer",onClick:h,edge:"start",sx:A({mr:2},n&&{display:"none"}),children:e(rt,{})}),e(te,{variant:"h6",noWrap:!0,component:"div",children:b})]})}),i(ot,{sx:{width:ce,flexShrink:0,"& .MuiDrawer-paper":{width:ce,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:n,children:[e(De,{children:e(se,{onClick:_,children:p.direction==="ltr"?e(it,{}):e(lt,{})})}),e(st,{}),e(ge,{children:Object.keys(C).map(w=>i(Z,{button:!0,onClick:()=>P(w),children:[e(ct,{children:C[w].icon}),e(Q,{primary:C[w].label})]},w))})]}),i(It,{open:n,children:[e(De,{}),t.children]})]})]})}const Dt={authed:!!localStorage.getItem("TOKEN")},ze=Re({name:"user",initialState:Dt,reducers:{login(t){t.authed=!0},logout(t){t.authed=!1}}}),{login:Pt,logout:W}=ze.actions;var jt=ze.reducer;const Lt={config:{}},Fe=Re({name:"config",initialState:Lt,reducers:{setConfig(t,o){t.config=o.payload}}}),{setConfig:Gt}=Fe.actions;var Rt=Fe.reducer;const{createReduxHistory:Wt,routerMiddleware:Kt,routerReducer:zt}=ht({history:mt()}),Te=pt({reducer:{router:zt,user:jt,config:Rt},middleware:[Kt]}),Ft=Wt(Te),T=window.location.hostname=="localhost"?"http://localhost:8000/":"https://api.reg.furcation.org.uk/",Mt=window.location.protocol+"//"+window.location.host;function Ht(){return fetch(T+"auth/o/keycloak/?"+new URLSearchParams({redirect_uri:Mt}),{method:"GET",credentials:"include"})}function Bt(t,o){return fetch(T+"auth/o/keycloak/",{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({state:t,code:o})})}function $t(){return fetch(T+"auth/users/",{method:"GET",credentials:"include",headers:{Authorization:"Token "+localStorage.getItem("TOKEN")}})}function qt(t){return fetch(T+"auth/users/"+t,{method:"GET",credentials:"include",headers:{Authorization:"Token "+localStorage.getItem("TOKEN")}})}function Ut(t){return fetch(T+"auth/users/"+t.id+"/",{method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("TOKEN")},body:JSON.stringify(t)})}function Me(){return fetch(T+"accommodation/",{method:"GET",credentials:"include",headers:{Authorization:"Token "+localStorage.getItem("TOKEN")}})}function Jt(t){return fetch(T+"accommodation/"+t+"/",{method:"GET",credentials:"include",headers:{Authorization:"Token "+localStorage.getItem("TOKEN")}})}function Vt(t){return fetch(T+"accommodation/",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("TOKEN")},body:JSON.stringify(t)})}function Yt(t){return fetch(T+"accommodation/"+t.id+"/",{method:"DELETE",credentials:"include",headers:{Authorization:"Token "+localStorage.getItem("TOKEN")}})}function Xt(t){return fetch(T+"accommodation/"+t.id+"/",{method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("TOKEN")},body:JSON.stringify(t)})}function He(){return fetch(T+"groups/",{method:"GET",credentials:"include",headers:{Authorization:"Token "+localStorage.getItem("TOKEN")}})}function xe(t){return fetch(T+"groups/"+t+"/",{method:"GET",credentials:"include",headers:{Authorization:"Token "+localStorage.getItem("TOKEN")}})}function Zt(t){return fetch(T+"groups/"+t.id+"/",{method:"DELETE",credentials:"include",headers:{Authorization:"Token "+localStorage.getItem("TOKEN")}})}function Qt(t){return fetch(T+"auth/users/"+t.id+"/",{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("TOKEN")}})}function en(t,o){return fetch(T+"groups/"+t.id+"/",{method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("TOKEN")},body:JSON.stringify({owner:{id:o,nickname:""}})})}function oe(t){return fetch(T+"groups/"+t.id+"/",{method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("TOKEN")},body:JSON.stringify(t)})}function Be(){return fetch(T+"config/",{method:"GET",credentials:"include",headers:{Authorization:"Token "+localStorage.getItem("TOKEN")}})}function tn(t){return fetch(T+"config/"+t.id+"/",{method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("TOKEN")},body:JSON.stringify({value:t.value})})}function nn(){const t=K(),o=V(m=>m.user.authed),[a,p]=u.exports.useState("");return u.exports.useEffect(()=>{const m=new URLSearchParams(window.location.search),h=m.get("state"),_=m.get("code");!o&&h&&_&&Bt(h,_).then(C=>{C.status==201?C.json().then(f=>{localStorage.setItem("TOKEN",f.access),t(Pt())}):C.json().then(f=>{p("Login flow expired, please login again."),console.log(f)})})},[]),i(I,{children:[a?e(de,{severity:"error",children:a}):null,i(gt,{variant:"outlined",sx:{my:{xs:3,md:6},p:{xs:2,md:3}},children:[e(te,{variant:"h6",color:"inherit",children:"Welcome to Furcation Registation Admin Panel"}),i(te,{variant:"body1",color:"inherit",paragraph:!0,children:["Welcome to the admin panel here you can view and edit attendees and groups for maintainance or resolving issues. For any issues please contact us:",e("br",{}),e("br",{}),"Registration - reg@furcation.org.uk",e("br",{}),"IT - it@furcation.org.uk"]}),o?e(R,{spacing:2,alignItems:"center",children:e(v,{color:"error",variant:"contained",sx:{minWidth:{sm:400,xs:"100%"}},onClick:()=>{t(W()),localStorage.removeItem("TOKEN")},children:"Logout"})}):e(R,{spacing:2,alignItems:"center",children:e(v,{variant:"contained",sx:{minWidth:{sm:400,xs:"100%"}},onClick:()=>{Ht().then(m=>{m.status==200?m.json().then(h=>{window.location.href=h.authorization_url}):m.json().then(h=>{p("Error while contacting Keycloak, please try again or contact tech."),console.log(h)})})},children:"Login with Keycloak"})})]})]})}function an(t){const o=K(),[a,p]=u.exports.useState([]),[n,c]=u.exports.useState("");u.exports.useEffect(()=>{He().then(h=>{h.status==200?h.json().then(_=>{p(_.results.filter(C=>C.users.length<8)),c("0")}):h.status==401&&(o(k("/")),o(W()),localStorage.removeItem("TOKEN"))})},[]);const m=h=>{c(h.target.value)};return i(z,{open:t.open,onClose:()=>t.handleClose(null),children:[e(F,{children:"Pick a group"}),a?i(I,{children:[e(O,{children:e(B,{value:n,label:"Group",fullWidth:!0,variant:"standard",margin:"dense",onChange:m,children:a.map((h,_)=>i($,{value:_,children:[h.owner.nickname,"'s Group"]},_))})}),i(M,{children:[e(v,{onClick:()=>t.handleClose(null),children:"Close"}),e(v,{onClick:()=>t.handleClose(a[parseInt(n)]),children:"Confirm"})]})]}):null]})}function rn(t){const o=K(),[a,p]=u.exports.useState({}),[n,c]=u.exports.useState(null),[m,h]=u.exports.useState(null),[_,C]=u.exports.useState("1990-01-01"),[f,b]=u.exports.useState(0),[E,P]=u.exports.useState(!1),[w,j]=u.exports.useState(!1);u.exports.useEffect(()=>{qt(t.userId).then(s=>{s.status==200?s.json().then(S=>{c(S),C(S.date_of_birth),S.group&&xe(S.group).then(N=>{N.status==200&&N.json().then(U=>{h(U)})})}):s.status==401?(o(k("/")),o(W()),localStorage.removeItem("TOKEN")):s.json().then(S=>{p(S)})})},[]);const r=JSON.parse(V(s=>s.config.config.HOODIE_SIZES||"[]")),d=JSON.parse(V(s=>s.config.config.EXTRA_DAYS||"[]")),L=JSON.parse(V(s=>s.config.config.LODGE_EXTRA_DAYS||"[]")),l=JSON.parse(V(s=>s.config.config.SPONSOR_PRICE||"[]")),y=JSON.parse(V(s=>s.config.config.STAFF_DISCOUNT||"[]")),ue=()=>{let s=0;if(n&&m&&m.accommodation){s=m.accommodation.prices[m.users.length-1]||0;const S=m.accommodation.is_lodge?L:d;n.email.endsWith("@furcation.org.uk")&&(s-=y);let N=0,U=0;m.users.map(me=>{me.is_early&&(N+=1),me.is_late&&(U+=1)}),n.is_early&&(s+=S[N-1]),n.is_late&&(s+=S[U-1]),n.is_sponsor&&(s+=l),s+=Number(n.adjustments)}return s},G=s=>{n&&(n[s.target.name]=s.target.value,c(A({},n)))},fe=()=>{j(!0)},Ce=()=>{n&&Qt(n).then(s=>{s.status==204&&(t.handleDeleted(n),t.handleClose())})},Y=s=>{n&&(n[s.target.name]=s.target.checked,c(A({},n)))},ye=s=>{n&&(n.hoodie_size=s.target.value,c(A({},n)))},ne=s=>{const S=new Date(s),N=S.getFullYear()+"-"+("0"+(S.getMonth()+1)).slice(-2)+"-"+("0"+S.getDate()).slice(-2);C(N),n&&(n.date_of_birth=N)},_e=()=>{if(n){b(1);const s=A({},n);s.phone_number=he(s.phone_number),s.ice_phone=he(s.ice_phone),delete s.group,Ut(s).then(S=>{console.log(S.status),S.status==200?S.json().then(N=>{b(2),c(N),C(N.date_of_birth),N.group&&xe(N.group).then(U=>{U.status==200&&U.json().then(me=>{h(me)})})}):S.status==401?(o(k("/")),o(W()),localStorage.removeItem("TOKEN")):S.status==400&&(b(0),S.json().then(N=>{console.log(N),p(N)}))})}},he=s=>(s=s.replaceAll(" ",""),s.charAt(0)==="0"?"+44"+s.substring(1):s),ve=()=>{P(!0)},g=s=>{n&&s&&(s.users.push({id:n.id,nickname:n.nickname,fully_paid:!1,is_early:!1,is_late:!1}),oe(s).then(S=>{S.status==200&&(c(H(A({},n),{group:s})),h(s))})),P(!1)};return i(I,{children:[i(z,{open:t.open,onClose:t.handleClose,scroll:"body",children:[e(F,{children:"Attendee "}),n?i(I,{children:[i(O,{children:[i(D,{children:["Badge Number:"," ",n.badge_override?n.badge_override+" (Overridden from "+n.id+")":n.id]}),e(x,{required:!0,name:"full_name",label:"Full (Legal) Name",value:n.full_name,onChange:G,autoComplete:"fullname",error:Object.prototype.hasOwnProperty.call(a,"full_name"),helperText:a.full_name,fullWidth:!0,variant:"standard",margin:"dense"}),e(x,{required:!0,name:"nickname",label:"Badge Name (Nickname/Furry Name)",value:n.nickname,onChange:G,autoComplete:"nickname",error:Object.prototype.hasOwnProperty.call(a,"nickname"),helperText:a.nickname,fullWidth:!0,variant:"standard",margin:"dense"}),e(x,{required:!0,name:"email",label:"Email",value:n.email,onChange:G,autoComplete:"email",error:Object.prototype.hasOwnProperty.call(a,"email"),helperText:a.email,fullWidth:!0,variant:"standard",margin:"dense"}),e(ft,{dateAdapter:Ct,children:e(yt,{label:"Date of Birth",value:_,onChange:ne,inputFormat:"yyyy-MM-dd",mask:"____-__-__",renderInput:s=>e(x,H(A({},s),{required:!0,error:Object.prototype.hasOwnProperty.call(a,"date_of_birth"),helperText:a.date_of_birth,fullWidth:!0,variant:"standard",margin:"dense"}))})}),e(x,{required:!0,multiline:!0,rows:4,name:"address",label:"Address",value:n.address,onChange:G,error:Object.prototype.hasOwnProperty.call(a,"address"),helperText:a.address,fullWidth:!0,variant:"standard",margin:"dense"}),e(x,{required:!0,type:"tel",name:"phone_number",label:"Phone Number",autoComplete:"phone",value:n.phone_number,onChange:G,error:Object.prototype.hasOwnProperty.call(a,"phone_number"),helperText:a.phone_number,fullWidth:!0,variant:"standard",margin:"dense"}),e(x,{multiline:!0,rows:4,name:"medical_details",label:"Any medical details we should know? (optional)",value:n.medical_details||"",onChange:G,error:Object.prototype.hasOwnProperty.call(a,"medical_details"),helperText:a.medical_details,fullWidth:!0,variant:"standard",margin:"dense"}),e(x,{required:!0,name:"ice_name",label:"ICE Name",value:n.ice_name,onChange:G,autoComplete:"ice_name",error:Object.prototype.hasOwnProperty.call(a,"ice_name"),helperText:a.ice_name,fullWidth:!0,variant:"standard",margin:"dense"}),e(x,{required:!0,name:"ice_phone",label:"ICE Phone",value:n.ice_phone,onChange:G,autoComplete:"ice_phone",error:Object.prototype.hasOwnProperty.call(a,"ice_phone"),helperText:a.ice_phone,fullWidth:!0,variant:"standard",margin:"dense"}),e(ae,{control:e(re,{name:"is_fursuiter",checked:n.is_fursuiter,onChange:Y}),label:"Fursuiter"}),e(ae,{control:e(re,{name:"is_early",checked:n.is_early,onChange:Y}),label:"Early"}),e(ae,{control:e(re,{name:"is_late",checked:n.is_late,onChange:Y}),label:"Late"}),e(ae,{control:e(re,{name:"is_sponsor",checked:n.is_sponsor,onChange:Y}),label:"Sponsor"}),e(J,{shrink:!0,children:"Hoodie Size"}),e(B,{value:n.hoodie_size,fullWidth:!0,variant:"standard",margin:"dense",label:"Hoodie Size",onChange:ye,children:r.map(s=>e($,{value:s,children:e(te,{color:"text.primary",children:s})},s))}),e(x,{name:"badge_override",label:"Badge Number Override",value:n.badge_override,onChange:G,autoComplete:"badge_override",error:Object.prototype.hasOwnProperty.call(a,"badge_override"),helperText:a.badge_override,fullWidth:!0,variant:"standard",margin:"dense"}),e(x,{name:"paid",label:"Amount paid",value:n.paid,onChange:G,autoComplete:"paid",type:"number",error:Object.prototype.hasOwnProperty.call(a,"paid"),InputProps:{endAdornment:e(Se,{position:"end",children:"p"})},helperText:a.paid,fullWidth:!0,variant:"standard",margin:"dense"}),e(x,{name:"adjustments",label:"Bill adjustments",value:n.adjustments,onChange:G,autoComplete:"adjustments",type:"number",error:Object.prototype.hasOwnProperty.call(a,"adjustments"),InputProps:{endAdornment:e(Se,{position:"end",children:"p"})},helperText:a.adjustments,fullWidth:!0,variant:"standard",margin:"dense"})]}),e(O,{children:i(D,{children:["Total Bill: \xA3",(ue()/100).toFixed(2)]})}),e(O,{children:i(D,{children:["Left to pay: \xA3",((ue()-n.paid)/100).toFixed(2)]})}),e(O,{children:e(x,{multiline:!0,rows:4,name:"internal_notes",label:"Internal Notes",value:n.internal_notes||"",onChange:G,error:Object.prototype.hasOwnProperty.call(a,"internal_notes"),helperText:a.internal_notes,fullWidth:!0,variant:"standard",margin:"dense"})}),e(O,{children:m?i(D,{children:["Group:"," ",i(pe,{to:"/groups/"+m.id,children:[m.owner.nickname,"'s Group"]})]}):i(D,{sx:{"& button":{m:1}},children:["No group",e(v,{size:"small",variant:"contained",color:"primary",onClick:ve,children:"Add to a group"})]})}),i(M,{children:[e(v,{onClick:t.handleClose,children:"Close"}),e(v,{color:"error",onClick:fe,children:"Delete"}),e(_t,{loading:f==1,color:f==2?"success":"primary",onClick:_e,children:f==2?"Saved!":"Save Changes"})]})]}):null]}),E?e(an,{open:!0,handleClose:g}):null,i(z,{open:w,onClose:t.handleClose,children:[e(F,{children:"Delete Attendee"}),e(O,{children:e(D,{children:"Are you sure you want to delete this attendee?"})}),i(M,{children:[e(v,{onClick:t.handleClose,children:"Cancel"}),e(v,{onClick:Ce,color:"error",variant:"contained",children:"Delete"})]})]})]})}function Pe(){const t=K(),o=["Not Filtered","Yes","No"],{id:a}=ke(),[p,n]=u.exports.useState(""),[c,m]=u.exports.useState({is_early:"Not Filtered",is_late:"Not Filtered",is_sponsor:"Not Filtered",is_active:"Yes",is_staff:"Not Filtered",is_admin:"No"}),[h,_]=u.exports.useState([]),[C,f]=u.exports.useState("");u.exports.useEffect(()=>{b()},[]);const b=()=>{$t().then(l=>{l.status==200?l.json().then(y=>{_(y.results)}):l.status==401?(t(k("/")),t(W()),localStorage.removeItem("TOKEN")):l.json().then(()=>{n("Error while retrieving attendees.  Please try again or contact tech.")})})},E=l=>{_(h.filter(()=>l.id!==l.id))},P=l=>{t(k("/attendees/"+l.id))},w=()=>{t(k("/attendees")),b()},j=l=>{f(l.target.value)},r=l=>{console.log(l.target.name+": "+l.target.value),c[l.target.name]=l.target.value,m(A({},c))},d=l=>l.toLowerCase().includes(C.toLowerCase()),L=l=>{let y=!0;return y=c.is_early==o[0]?y:c.is_early==o[1]?y&&l.is_early:y&&!l.is_early,y=c.is_late==o[0]?y:c.is_late==o[1]?y&&l.is_late:y&&!l.is_late,y=c.is_sponsor==o[0]?y:c.is_sponsor==o[1]?y&&l.is_sponsor:y&&!l.is_sponsor,y=c.is_staff==o[0]?y:c.is_staff==o[1]?y&&l.email.endsWith("@furcation.org.uk"):y&&!l.email.endsWith("@furcation.org.uk"),y=c.is_active==o[0]?y:c.is_active==o[1]?y&&l.is_active:y&&!l.is_active,y=c.is_admin==o[0]?y:c.is_admin==o[1]?y&&l.is_staff:y&&!l.is_staff,y};return i(I,{children:[p?e(de,{severity:"error",children:p}):null,e(x,{fullWidth:!0,id:"outlined-basic",label:"Search",variant:"outlined",onChange:j}),i(X,{sx:{width:"20ch",p:{xs:2,md:3}},children:[e(J,{sx:{p:{xs:3,md:4}},children:"Early"}),e(B,{value:c.is_early,label:"Early",name:"is_early",onChange:r,children:o.map(l=>e($,{value:l,children:l},l))})]}),i(X,{sx:{width:"20ch",p:{xs:2,md:3}},children:[e(J,{sx:{p:{xs:3,md:4}},children:"Late"}),e(B,{value:c.is_late,label:"Late",name:"is_late",onChange:r,children:o.map(l=>e($,{value:l,children:l},l))})]}),i(X,{sx:{width:"20ch",p:{xs:2,md:3}},children:[e(J,{sx:{p:{xs:3,md:4}},children:"Sponsor"}),e(B,{value:c.is_sponsor,label:"Sponsor",name:"is_sponsor",onChange:r,children:o.map(l=>e($,{value:l,children:l},l))})]}),i(X,{sx:{width:"20ch",p:{xs:2,md:3}},children:[e(J,{sx:{p:{xs:3,md:4}},children:"Active"}),e(B,{value:c.is_active,label:"Active",name:"is_active",onChange:r,children:o.map(l=>e($,{value:l,children:l},l))})]}),i(X,{sx:{width:"20ch",p:{xs:2,md:3}},children:[e(J,{sx:{p:{xs:3,md:4}},children:"Staff"}),e(B,{value:c.is_staff,label:"Staff",name:"is_staff",onChange:r,children:o.map(l=>e($,{value:l,children:l},l))})]}),i(X,{sx:{width:"20ch",p:{xs:2,md:3}},children:[e(J,{sx:{p:{xs:3,md:4}},children:"Admin"}),e(B,{value:c.is_admin,label:"Admin",name:"is_admin",onChange:r,children:o.map(l=>e($,{value:l,children:l},l))})]}),e(se,{"aria-label":"download",href:T+"auth/users.csv",sx:{p:{xs:4,md:5}},children:e(We,{})}),e(ge,{children:h.filter(l=>(d(l.full_name)||d(l.nickname)||d(l.email)||d(l.id+"")||d(l.badge_override))&&L(l)).map((l,y)=>e(Z,{children:i(ie,{onClick:()=>P(l),children:[e(le,{children:l.badge_image?e(ee,{src:"https://storage.googleapis.com/reggie-badges/"+l.badge_image}):e(ee,{children:e(vt,{})})}),e(Q,{primary:l.nickname,secondary:l.full_name+" - "+l.email+" - #"+(l.badge_override?l.badge_override+" (Overridden from "+l.id+")":l.id)})]})},y))}),a?e(rn,{open:!0,handleClose:w,userId:a,handleDeleted:E}):null]})}function on(t){const o=K(),[a,p]=u.exports.useState([]),[n,c]=u.exports.useState("");u.exports.useEffect(()=>{Me().then(h=>{h.status==200?h.json().then(_=>{p(_.results.filter(C=>C.min_capacity<=t.groupSize&&C.max_capacity>=t.groupSize)),c("0")}):h.status==401&&(o(k("/")),o(W()),localStorage.removeItem("TOKEN"))})},[]);const m=h=>{c(h.target.value)};return i(z,{open:t.open,onClose:()=>t.handleClose(null),children:[e(F,{children:"Pick accommodation"}),a?i(I,{children:[e(O,{children:e(B,{value:n,label:"Accommodation",fullWidth:!0,variant:"standard",margin:"dense",onChange:m,children:a.map((h,_)=>e($,{value:_,children:h.name},_))})}),i(M,{children:[e(v,{onClick:()=>t.handleClose(null),children:"Close"}),e(v,{onClick:()=>t.handleClose(a[parseInt(n)]),children:"Confirm"})]})]}):null]})}function ln(t){const o=K(),[a,p]=u.exports.useState(null),[n,c]=u.exports.useState(0),[m,h]=u.exports.useState(!1),[_,C]=u.exports.useState(""),[f,b]=u.exports.useState(!1),[E,P]=u.exports.useState(!1),[w,j]=u.exports.useState(!1);u.exports.useEffect(()=>{xe(t.groupId).then(g=>{g.status==200?g.json().then(s=>{p(s),C(s.internal_notes)}):g.status==401&&(o(k("/")),o(W()),localStorage.removeItem("TOKEN"))})},[]);const r=g=>{c(g)},d=()=>{c(0)},L=()=>{a&&(a.users=a.users.filter(g=>g.id!==n),oe(a).then(g=>{g.status==200&&g.json().then(s=>{p(s),c(0)})}))},l=()=>{h(!0)},y=()=>{h(!1)},ue=()=>{a&&Zt(a).then(g=>{g.status==204&&(t.handleDeleted(a),o(k("/groups")))})},G=g=>{a&&en(a,g).then(s=>{s.json().then(S=>p(S))})},fe=g=>{a&&C(g.target.value)},Ce=()=>{a&&(a.internal_notes=_,oe(a).then(g=>{g.status==200&&g.json().then(s=>{b(!0),p(s),C(s.internal_notes)})}))},Y=g=>{if(g.claimed_at){const s=new Date(g.claimed_at);return Math.round(Math.abs((s.getTime()-new Date().getTime())/864e5))}return 0},ye=()=>{j(!0)},ne=()=>{j(!1)},_e=()=>{a&&(a.accommodation=null,oe(a).then(g=>{g.status==200&&p(A({},a))}),ne())},he=()=>{P(!0)},ve=g=>{a&&g&&(a.accommodation=g,oe(a).then(s=>{s.status==200&&p(H(A({},a),{accommodation:g}))})),P(!1)};return i(I,{children:[i(z,{open:t.open,onClose:t.handleClose,scroll:"body",children:[e(F,{children:"Group"}),a?i(I,{children:[e(O,{children:i(D,{children:["Group ID: ",t.groupId]})}),e(O,{children:i(D,{sx:{"& button":{m:1}},children:["Owner:"," ",e(pe,{to:"/attendees/"+a.owner.id,children:a.owner.nickname+(a.owner.fully_paid?" (Paid)":" (Not paid)")}),e(v,{size:"small",variant:"contained",color:"error",onClick:l,children:"Disband Group"})]})}),a.users.filter(g=>g.id!==a.owner.id).map((g,s)=>e(O,{children:i(D,{sx:{"& button":{m:1}},children:[e(pe,{to:"/attendees/"+g.id,children:g.nickname+(g.fully_paid?" (Paid)":" (Not paid)")}),e(v,{size:"small",variant:"contained",color:"error",onClick:()=>r(g.id),children:"Remove from group"}),e(v,{size:"small",variant:"contained",color:"primary",onClick:()=>G(g.id),children:"Make group owner"})]})},s)),e(O,{children:i(R,{children:[e(x,{multiline:!0,rows:4,name:"internal_notes",label:"Internal Notes",value:_||"",onChange:fe,fullWidth:!0,variant:"standard",margin:"dense"}),e(v,{color:f?"success":"primary",onClick:Ce,children:f?"Saved!":"Save internal notes"})]})}),i(O,{children:[a.accommodation?i(D,{sx:{"& button":{m:1}},children:["Accommodation:"," ",e(pe,{to:"/accommodation/"+a.accommodation.id,children:a.accommodation.name}),e(v,{size:"small",variant:"contained",color:"error",onClick:ye,children:"Remove accommodation"}),e("br",{}),"Claimed ",Y(a)," days ago"]}):i(D,{sx:{"& button":{m:1}},children:["No accommodation",e(v,{size:"small",variant:"contained",color:"primary",onClick:he,children:"Add accommodation"})]}),e(on,{open:E,groupSize:a.users.length,handleClose:ve})]}),e(M,{children:e(v,{onClick:t.handleClose,children:"Close"})})]}):null]}),e(z,{open:w,onClose:ne,children:a?i(I,{children:[e(F,{children:"Remove from group"}),e(O,{children:e(D,{children:"Are you sure?"})}),i(M,{children:[e(v,{onClick:ne,children:"Close"}),e(v,{onClick:_e,children:"Remove from group"})]})]}):null}),e(z,{open:!!n,onClose:d,children:a?i(I,{children:[e(F,{children:"Remove from group"}),e(O,{children:e(D,{children:"Are you sure?"})}),i(M,{children:[e(v,{onClick:d,children:"Close"}),e(v,{onClick:L,children:"Remove from group"})]})]}):null}),e(z,{open:m,onClose:y,children:a?i(I,{children:[e(F,{children:"Disband group"}),e(O,{children:e(D,{children:"Are you sure?"})}),i(M,{children:[e(v,{onClick:y,children:"Close"}),e(v,{onClick:ue,children:"Disband group"})]})]}):null})]})}function je(){const t=K(),{id:o}=ke(),[a,p]=u.exports.useState(""),[n,c]=u.exports.useState([]),[m,h]=u.exports.useState("");u.exports.useEffect(()=>{He().then(r=>{r.status==200?r.json().then(d=>{console.log(d),c(d.results)}):r.status==401?(t(k("/")),t(W()),localStorage.removeItem("TOKEN")):r.json().then(d=>{p("Error while retrieving groups.  Please try again or contact tech."),console.log(d)})})},[]);const _=r=>{t(k("/groups/"+r.id))},C=()=>{t(k("/groups"))},f=r=>{h(r.target.value)},b=r=>r.accommodation&&r.accommodation.name.toLowerCase().includes(m.toLowerCase())||r.owner.nickname.toLowerCase().includes(m.toLowerCase()),E=r=>{for(const d of r.users)if(!d.fully_paid)return!0;return!1},P=r=>{c(n.filter(d=>r.id!==d.id))},w=r=>{if(r.claimed_at){const d=new Date(r.claimed_at);return Math.round(Math.abs((d.getTime()-new Date().getTime())/864e5))}return 0},j=r=>r.accommodation?E(r)?" (Unpaid for "+w(r)+" days)":" (Paid)":"";return i(I,{children:[a?e(de,{severity:"error",children:a}):null,e(x,{fullWidth:!0,id:"outlined-basic",label:"Search",variant:"outlined",onChange:f}),e(se,{"aria-label":"download",href:T+"groups.csv",sx:{p:{xs:4,md:5}},children:e(We,{})}),e(ge,{children:n.filter(r=>b(r)).map((r,d)=>e(Z,{children:i(ie,{onClick:()=>_(r),children:[e(le,{children:e(ee,{children:e(Ge,{})})}),e(Q,{primary:r.owner.nickname+"'s group",secondary:r.users.length+" member(s)"+j(r)})]})},d))}),o?e(ln,{open:!0,handleClose:C,groupId:o,handleDeleted:P}):null]})}function sn(){const t=K(),[o,a]=u.exports.useState(""),[p,n]=u.exports.useState([]),[c,m]=u.exports.useState(-1);u.exports.useEffect(()=>{Be().then(f=>{f.status==200?f.json().then(b=>{n(b.results)}):f.status==401?(t(k("/")),t(W()),localStorage.removeItem("TOKEN")):f.json().then(b=>{a("Error while retrieving config.  Please try again or contact tech."),console.log(b)})})},[]);const h=f=>{p[parseInt(f.target.name)].value=f.target.value,n([...p])},_=f=>{tn(p[f]).then(b=>{b.status==200?m(f):b.json().then(E=>{a("Error while retrieving config.  Please try again or contact tech."),console.log(E)})})},C={SIGNUP_MODE:"Current signup page restriction.  Set to 0 for signup closed, 1 for staff-only and 2 for signup open.",RECAPTCHA_MIN_SCORE:"Minimum required ReCAPTCHA assessment score, 0 is fail, 1 is success.  If in doubt, set to 0.3",INTRO_TEXT:"Message displayed on the registration site homepage.",CLAIM_MODE:"Current accommodation claim restriction.  Set to 0 for claim unavailable, 1 for staff-only and 2 for open to all.",SPONSOR_PRICE:"The price to sponsor in pence.",STAFF_DISCOUNT:"The discount staff receive in pence.",LODGE_EXTRA_DAYS:"The price in pence for extra days for lodges as JSON array of 8 prices.  Enter just null for no price.",EXTRA_DAYS:"The price in pence for extra days as JSON array of 8 prices.  Enter just null for no price."};return i(R,{direction:"column",spacing:2,children:[o?e(de,{severity:"error",children:o}):null,p.map((f,b)=>i(R,{direction:"row",alignItems:"center",spacing:2,children:[e(te,{children:f.id}),e(x,{name:""+b,label:"Value",multiline:!0,maxRows:4,value:f.value,onChange:h}),e(te,{width:400,children:C[f.id]}),e(v,{variant:"contained",color:c==b?"success":"primary",onClick:()=>_(b),children:c==b?"Saved!":"Save"})]},b))]})}function cn(t){const o=K(),[a,p]=u.exports.useState(!1),[n,c]=u.exports.useState(),m=Ke.createRef();u.exports.useEffect(()=>{t.isNew?c({id:crypto.randomUUID(),name:"",min_capacity:1,max_capacity:2,availability:0,prices:[null,null,null,null,null,null,null,null],is_lodge:!1,internal_notes:""}):Jt(t.accommodationId).then(r=>{r.status==200?r.json().then(d=>{c(d)}):r.status==401&&(o(k("/")),o(W()),localStorage.removeItem("TOKEN"))})},[]);const h=r=>{n&&c(H(A({},n),{[r.target.name]:r.target.value}))},_=r=>{if(n){const d=[...n.prices];for(let L=0;L<8;L++)(L+1<n.min_capacity||L+1>n.max_capacity)&&(d[L]=null);c(H(A({},n),{prices:d,[r.target.name]:r.target.value}))}},C=r=>{n&&c(H(A({},n),{[r.target.name]:r.target.checked}))},f=r=>{if(n){const d=parseInt(r.target.name.substring(r.target.name.indexOf("_")+1)),L=[...n.prices];L[d-1]=parseInt(r.target.value),c(H(A({},n),{prices:L}))}},b=()=>{p(!0)},E=()=>{p(!1)},P=()=>{n&&Yt(n).then(r=>{r.status==204&&(t.handleDeleted(n),o(k("/accommodation")))})},w=()=>{n&&m.current&&m.current.reportValidity()&&(t.isNew?Vt(n):Xt(n)).then(d=>{(d.status==200||d.status==201)&&(t.handleUpdated(),o(k("/accommodation")))})},j=()=>{n&&n.id&&navigator.clipboard.writeText(n.id)};return i(I,{children:[i(z,{open:t.open,onClose:t.handleClose,scroll:"body",children:[i(R,{direction:"row",alignItems:"center",minWidth:"558px",children:[i(F,{children:[t.isNew?"Create ":null,"Accommodation"]}),n&&!t.isNew?i(D,{children:["ID: ",n.id,e(bt,{title:"Copy",children:e(se,{"aria-label":"copy",onClick:j,children:e(St,{})})})]}):null]}),n?i(I,{children:[e(O,{children:i(R,{component:"form",ref:m,spacing:2,children:[e(x,{name:"name",onChange:h,label:"Accommodation Name",value:n.name,required:!0}),e(ae,{control:e(re,{name:"is_lodge",checked:n.is_lodge,onChange:C}),label:"Is lodge?"}),i(R,{direction:"row",spacing:2,alignItems:"center",justifyContent:"left",children:[e(x,{fullWidth:!0,required:!0,name:"min_capacity",onChange:_,label:"Minimum Occupancy",type:"number",inputProps:{inputMode:"numeric",pattern:"[0-9]*",min:1,max:8},value:n.min_capacity}),e(x,{fullWidth:!0,required:!0,name:"max_capacity",onChange:_,label:"Maximum Occupancy",type:"number",inputProps:{inputMode:"numeric",pattern:"[0-9]*",min:1,max:8},value:n.max_capacity}),e(x,{fullWidth:!0,required:!0,name:"availability",onChange:h,label:"Availability",type:"number",inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:n.availability})]}),e(R,{direction:"row",children:e(Ee,{container:!0,spacing:2,children:n.prices.map((r,d)=>d+1>=(n.min_capacity||1)&&d+1<=(n.max_capacity||8)&&d+1>=1&&d+1<=8?e(Ee,{item:!0,xs:6,children:e(x,{fullWidth:!0,required:!0,label:"Price for "+(d+1),name:"price_"+(d+1),value:r||"",onChange:f,type:"number",InputProps:{endAdornment:e(Se,{position:"end",children:"p"})}})},d):null)})}),e(x,{fullWidth:!0,name:"internal_notes",onChange:h,label:"Internal Notes",value:n.internal_notes,multiline:!0})]})}),i(M,{children:[t.isNew?e(I,{children:e(v,{onClick:w,children:"Create"})}):i(I,{children:[e(v,{onClick:w,children:"Save"}),e(v,{color:"error",onClick:b,children:"Delete"})]}),e(v,{onClick:t.handleClose,children:"Close"})]})]}):null]}),e(z,{open:a,onClose:E,children:n&&!t.isNew?i(I,{children:[e(F,{children:"Delete Accommodation"}),e(O,{children:e(D,{children:"Are you sure?"})}),i(M,{children:[e(v,{onClick:E,children:"Close"}),e(v,{onClick:P,children:"Delete"})]})]}):null})]})}function Le(){const t=K(),{id:o}=ke(),[a,p]=u.exports.useState(""),[n,c]=u.exports.useState([]),[m,h]=u.exports.useState("");u.exports.useEffect(()=>{_()},[]);const _=()=>{Me().then(r=>{r.status==200?r.json().then(d=>{c(d.results)}):r.status==401?(t(k("/")),t(W()),localStorage.removeItem("TOKEN")):r.json().then(d=>{p("Error while retrieving groups.  Please try again or contact tech."),console.log(d)})})},C=r=>{t(k("/accommodation/"+r.id))},f=()=>{t(k("/accommodation/new"))},b=()=>{t(k("/accommodation"))},E=r=>{h(r.target.value)},P=r=>r.toLowerCase().includes(m.toLowerCase()),w=r=>{c(n.filter(d=>r.id!==d.id))},j=()=>{_()};return i(I,{children:[a?e(de,{severity:"error",children:a}):null,e(x,{fullWidth:!0,id:"outlined-basic",label:"Search",variant:"outlined",onChange:E}),i(ge,{children:[e(Z,{children:i(ie,{onClick:()=>f(),children:[e(le,{children:e(ee,{children:e(Ne,{})})}),e(Q,{primary:"Create New"})]})}),n.filter(r=>P(r.name)).map((r,d)=>e(Z,{children:i(ie,{onClick:()=>C(r),children:[e(le,{children:e(ee,{children:e(be,{})})}),e(Q,{primary:r.name,secondary:i(R,{direction:"row",spacing:4,alignItems:"center",justifyContent:"left",children:[i(R,{direction:"row",spacing:1,alignItems:"center",children:[e(xt,{}),i("span",{children:[r.min_capacity,"-",r.max_capacity]})]}),i(R,{direction:"row",spacing:1,alignItems:"center",children:[e(be,{}),e("span",{children:r.availability+" ("+(r.availability-r.occupied)+" remaining)"})]})]})})]})},d)),e(Z,{children:i(ie,{onClick:()=>f(),children:[e(le,{children:e(ee,{children:e(Ne,{})})}),e(Q,{primary:"Create New"})]})})]}),o?e(cn,{open:!0,handleClose:b,accommodationId:o,handleDeleted:w,handleUpdated:j,isNew:o=="new"}):null]})}wt.render(e(Ke.StrictMode,{children:e(kt,{store:Te,children:e(Nt,{children:e(Tt,{history:Ft,children:i(At,{children:[e(q,{path:"/",element:e(nn,{})}),e(q,{path:"/accommodation",element:e(Le,{})}),e(q,{path:"/accommodation/:id",element:e(Le,{})}),e(q,{path:"/attendees",element:e(Pe,{})}),e(q,{path:"/attendees/:id",element:e(Pe,{})}),e(q,{path:"/groups",element:e(je,{})}),e(q,{path:"/groups/:id",element:e(je,{})}),e(q,{path:"/config",element:e(sn,{})})]})})})})}),document.getElementById("root"));Be().then(t=>{t.status==200&&t.json().then(o=>{const a={};o.results.map(p=>{a[p.id]=p.value}),Te.dispatch(Gt(a))})});
