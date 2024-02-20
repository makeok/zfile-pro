var Ul=Object.defineProperty,Yl=Object.defineProperties;var Xl=Object.getOwnPropertyDescriptors;var Tl=Object.getOwnPropertySymbols;var Zl=Object.prototype.hasOwnProperty,Jl=Object.prototype.propertyIsEnumerable;var Ll=(e,l,t)=>l in e?Ul(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,bl=(e,l)=>{for(var t in l||(l={}))Zl.call(l,t)&&Ll(e,t,l[t]);if(Tl)for(var t of Tl(l))Jl.call(l,t)&&Ll(e,t,l[t]);return e},El=(e,l)=>Yl(e,Xl(l));var $l=(e,l,t)=>new Promise((v,f)=>{var d=r=>{try{m(t.next(r))}catch(S){f(S)}},u=r=>{try{m(t.throw(r))}catch(S){f(S)}},m=r=>r.done?v(r.value):Promise.resolve(r.value).then(d,u);m((t=t.apply(e,l)).next())});import{q as Fe,c as p,t as Se,aH as Ne,w as R,u as w,Y as yl,d as Ie,S as Re,aB as Cl,a6 as xl,W as K,D as we,E as Ol,a as b,f as $,i as j,y as k,A as x,g as y,h as J,r as z,o as Sl,l as B,n as oe,s as Ml,K as te,b4 as Oe,b5 as hl,L as Wl,H as _l,aC as en,p as Fl,Z,aE as ln,j as de,e as T,b as W,T as Vl,O as We,P as gl,C as F,b6 as nn,a7 as Dl,m as Pl}from"./index.a81894c3.js";import{b as Nl}from"./request.88c6336a.js";import{E as on,a as tn,b as an}from"./popper.34e4046d.js";import{i as rn,E as sn}from"./index.9dce3cd8.js";import{E as un}from"./scrollbar.b58c5e8b.js";import{E as dn,t as cn}from"./tag.be7f307a.js";import{aq as pn,Q as N,a as ce,e as Rl,_ as He,f as wl,y as fn,$ as vn,ap as mn,j as bn,v as hn,G as gn,k as yn,i as Cn,m as Kl,E as On,n as zl,ah as Sn,w as wn,c as Hl}from"./base.9447ff7a.js";import{U as _,C as Ql}from"./event.807e9a54.js";import{s as In}from"./scroll.c1d55f52.js";import{b as Tn,i as kl,C as Ln}from"./index.3b295ed4.js";import{t as En,d as Al}from"./debounce.ff28d2f1.js";import{i as $n}from"./validator.4f1297a1.js";var ql=1/0,Mn=17976931348623157e292;function Vn(e){if(!e)return e===0?e:0;if(e=En(e),e===ql||e===-ql){var l=e<0?-1:1;return l*Mn}return e===e?e:0}function Dn(e){var l=Vn(e),t=l%1;return l===l?t?l-t:l:0}function Pn(e,l,t,v){for(var f=e.length,d=t+(v?1:-1);v?d--:++d<f;)if(l(e[d],d,e))return d;return-1}var Kn=Math.max,zn=Math.min;function kn(e,l,t){var v=e==null?0:e.length;if(!v)return-1;var f=v-1;return t!==void 0&&(f=Dn(t),f=t<0?Kn(v+f,0):zn(f,v-1)),Pn(e,Tn(l),f,!0)}const An=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),qn=e=>pn[e||"default"],jl=Symbol("ElSelectGroup"),Qe=Symbol("ElSelect");function Bn(e,l){const t=Fe(Qe),v=Fe(jl,{disabled:!1}),f=p(()=>Se(e.value)),d=p(()=>t.props.multiple?g(t.props.modelValue,e.value):I(e.value,t.props.modelValue)),u=p(()=>{if(t.props.multiple){const c=t.props.modelValue||[];return!d.value&&c.length>=t.props.multipleLimit&&t.props.multipleLimit>0}else return!1}),m=p(()=>e.label||(f.value?"":e.value)),r=p(()=>e.value||e.label||""),S=p(()=>e.disabled||l.groupDisabled||u.value),h=yl(),g=(c=[],C)=>{if(f.value){const i=t.props.valueKey;return c&&c.some(O=>Ne(N(O,i))===N(C,i))}else return c&&c.includes(C)},I=(c,C)=>{if(f.value){const{valueKey:i}=t.props;return N(c,i)===N(C,i)}else return c===C},E=()=>{!e.disabled&&!v.disabled&&(t.hoverIndex=t.optionsArray.indexOf(h.proxy))};R(()=>m.value,()=>{!e.created&&!t.props.remote&&t.setSelected()}),R(()=>e.value,(c,C)=>{const{remote:i,valueKey:O}=t.props;if(Object.is(c,C)||(t.onOptionDestroy(C,h.proxy),t.onOptionCreate(h.proxy)),!e.created&&!i){if(O&&Se(c)&&Se(C)&&c[O]===C[O])return;t.setSelected()}}),R(()=>v.disabled,()=>{l.groupDisabled=v.disabled},{immediate:!0});const{queryChange:L}=Ne(t);return R(L,c=>{const{query:C}=w(c),i=new RegExp(An(C),"i");l.visible=i.test(m.value)||e.created,l.visible||t.filteredOptionsCount--},{immediate:!0}),{select:t,currentLabel:m,currentValue:r,itemSelected:d,isDisabled:S,hoverItem:E}}const Wn=Ie({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const l=ce("select"),t=Rl(),v=p(()=>[l.be("dropdown","item"),l.is("disabled",w(m)),{selected:w(u),hover:w(g)}]),f=Re({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:d,itemSelected:u,isDisabled:m,select:r,hoverItem:S}=Bn(e,f),{visible:h,hover:g}=Cl(f),I=yl().proxy;r.onOptionCreate(I),xl(()=>{const L=I.value,{selected:c}=r,i=(r.props.multiple?c:[c]).some(O=>O.value===I.value);K(()=>{r.cachedOptions.get(L)===I&&!i&&r.cachedOptions.delete(L)}),r.onOptionDestroy(L,I)});function E(){e.disabled!==!0&&f.groupDisabled!==!0&&r.handleOptionSelect(I)}return{ns:l,id:t,containerKls:v,currentLabel:d,itemSelected:u,isDisabled:m,select:r,hoverItem:S,visible:h,hover:g,selectOptionClick:E,states:f}}}),Fn=["id","aria-disabled","aria-selected"];function Nn(e,l,t,v,f,d){return we((b(),$("li",{id:e.id,class:y(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:l[0]||(l[0]=(...u)=>e.hoverItem&&e.hoverItem(...u)),onClick:l[1]||(l[1]=J((...u)=>e.selectOptionClick&&e.selectOptionClick(...u),["stop"]))},[j(e.$slots,"default",{},()=>[k("span",null,x(e.currentLabel),1)])],42,Fn)),[[Ol,e.visible]])}var Il=He(Wn,[["render",Nn],["__file","option.vue"]]);const Rn=Ie({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=Fe(Qe),l=ce("select"),t=p(()=>e.props.popperClass),v=p(()=>e.props.multiple),f=p(()=>e.props.fitInputWidth),d=z("");function u(){var m;d.value=`${(m=e.selectWrapper)==null?void 0:m.offsetWidth}px`}return Sl(()=>{u(),Nl(e.selectWrapper,u)}),{ns:l,minWidth:d,popperClass:t,isMultiple:v,isFitInputWidth:f}}});function Hn(e,l,t,v,f,d){return b(),$("div",{class:y([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:oe({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(b(),$("div",{key:0,class:y(e.ns.be("dropdown","header"))},[j(e.$slots,"header")],2)):B("v-if",!0),j(e.$slots,"default"),e.$slots.footer?(b(),$("div",{key:1,class:y(e.ns.be("dropdown","footer"))},[j(e.$slots,"footer")],2)):B("v-if",!0)],6)}var Qn=He(Rn,[["render",Hn],["__file","select-dropdown.vue"]]);function jn(e){const{t:l}=wl();return Re({options:new Map,cachedOptions:new Map,disabledOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,prefixWidth:11,mouseEnter:!1,focused:!1})}const Gn=(e,l,t)=>{const{t:v}=wl(),f=ce("select");fn({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},p(()=>e.suffixTransition===!1));const d=z(null),u=z(null),m=z(null),r=z(null),S=z(null),h=z(null),g=z(null),I=z(null),E=z(),L=Ml({query:""}),c=Ml(""),C=z([]);let i=0;const{form:O,formItem:G}=vn(),je=p(()=>!e.filterable||e.multiple||!l.visible),U=p(()=>e.disabled||(O==null?void 0:O.disabled)),Te=p(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!U.value&&l.inputHovering&&n}),Le=p(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),Ge=p(()=>f.is("reverse",Le.value&&l.visible&&e.suffixTransition)),pe=p(()=>(O==null?void 0:O.statusIcon)&&(G==null?void 0:G.validateState)&&mn[G==null?void 0:G.validateState]),Ee=p(()=>e.remote?300:0),fe=p(()=>e.loading?e.loadingText||v("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||v("el.select.noMatch"):l.options.size===0?e.noDataText||v("el.select.noData"):null),M=p(()=>{const n=Array.from(l.options.values()),o=[];return C.value.forEach(a=>{const s=n.findIndex(V=>V.currentLabel===a);s>-1&&o.push(n[s])}),o.length>=n.length?o:n}),Ue=p(()=>Array.from(l.cachedOptions.values())),Ye=p(()=>{const n=M.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),ee=bn(),Xe=p(()=>["small"].includes(ee.value)?"small":"default"),Ze=p({get(){return l.visible&&fe.value!==!1},set(n){l.visible=n}});R([()=>U.value,()=>ee.value,()=>O==null?void 0:O.size],()=>{K(()=>{H()})}),R(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n,e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(l.currentPlaceholder="")}),R(()=>e.modelValue,(n,o)=>{e.multiple&&(H(),n&&n.length>0||u.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",X(l.query))),ve(),e.filterable&&!e.multiple&&(l.inputLength=20),!kl(n,o)&&e.validateEvent&&(G==null||G.validate("change").catch(a=>hn()))},{flush:"post",deep:!0}),R(()=>l.visible,n=>{var o,a,s,V,D;n?((a=(o=r.value)==null?void 0:o.updatePopper)==null||a.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,(V=(s=m.value)==null?void 0:s.focus)==null||V.call(s),e.multiple?(D=u.value)==null||D.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),X(l.query),!e.multiple&&!e.remote&&(L.value.query="",Oe(L),Oe(c)))):(e.filterable&&(te(e.filterMethod)&&e.filterMethod(""),te(e.remoteMethod)&&e.remoteMethod("")),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Je(),K(()=>{u.value&&u.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),t.emit("visible-change",n)}),R(()=>l.options.entries(),()=>{var n,o,a;if(!gn)return;(o=(n=r.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&H();const s=((a=g.value)==null?void 0:a.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!yn(e.modelValue)||!Array.from(s).includes(document.activeElement))&&ve(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Me()},{flush:"post"}),R(()=>l.hoverIndex,n=>{Cn(n)&&n>-1?E.value=M.value[n]||{}:E.value={},M.value.forEach(o=>{o.hover=E.value===o})});const H=()=>{K(()=>{var n,o;if(!d.value)return;const a=d.value.$el.querySelector("input");i=i||(a.clientHeight>0?a.clientHeight+2:0);const s=h.value,V=getComputedStyle(a).getPropertyValue(f.cssVarName("input-height")),D=Number.parseFloat(V)||qn(ee.value||(O==null?void 0:O.size)),A=ee.value||D===i||i<=0?D:i;!(a.offsetParent===null)&&(a.style.height=`${(l.selected.length===0?A:Math.max(s?s.clientHeight+(s.clientHeight>A?6:0):0,A))-2}px`),l.visible&&fe.value!==!1&&((o=(n=r.value)==null?void 0:n.updatePopper)==null||o.call(n))})},X=n=>$l(void 0,null,function*(){if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(te(e.filterMethod)||te(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,K(()=>{var o,a;l.visible&&((a=(o=r.value)==null?void 0:o.updatePopper)==null||a.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&K(()=>{if(!U.value){const o=u.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,$e()}H()}),e.remote&&te(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):te(e.filterMethod)?(e.filterMethod(n),Oe(c)):(l.filteredOptionsCount=l.optionsCount,L.value.query=n,Oe(L),Oe(c)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(yield K(),Me())}}),$e=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=u.value.value?"":l.cachedPlaceHolder)},Me=()=>{const n=M.value.filter(s=>s.visible&&!s.disabled&&!s.states.groupDisabled),o=n.find(s=>s.created),a=n[0];l.hoverIndex=me(M.value,o||a)},ve=()=>{var n;if(e.multiple)l.selectedLabel="";else{const a=Ve(e.modelValue);(n=a.props)!=null&&n.created?(l.createdLabel=a.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=a.currentLabel,l.selected=a,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(a=>{o.push(Ve(a))}),l.selected=o,K(()=>{H()})},Ve=n=>{let o;const a=hl(n).toLowerCase()==="object",s=hl(n).toLowerCase()==="null",V=hl(n).toLowerCase()==="undefined";for(let Q=l.cachedOptions.size-1;Q>=0;Q--){const q=Ue.value[Q];if(a?N(q.value,e.valueKey)===N(n,e.valueKey):q.value===n){o={value:n,currentLabel:q.currentLabel,isDisabled:q.isDisabled};break}}if(o)return o;const D=a?n.label:!s&&!V?n:"",A={value:n,currentLabel:D};return e.multiple&&(A.hitState=!1),A},Je=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>M.value.findIndex(a=>N(a,n)===N(o,n)))):l.hoverIndex=-1:l.hoverIndex=M.value.findIndex(o=>ue(o)===ue(l.selected))},300)},xe=()=>{var n,o;_e(),(o=(n=r.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&H()},_e=()=>{var n;l.inputWidth=(n=d.value)==null?void 0:n.$el.offsetWidth},el=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,X(l.query))},ll=Al(()=>{el()},Ee.value),nl=Al(n=>{X(n.target.value)},Ee.value),le=n=>{kl(e.modelValue,n)||t.emit(Ql,n)},De=n=>kn(n,o=>!l.disabledOptions.has(o)),ol=n=>{if(n.code!==Kl.delete){if(n.target.value.length<=0&&!he()){const o=e.modelValue.slice(),a=De(o);if(a<0)return;o.splice(a,1),t.emit(_,o),le(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}},ie=(n,o)=>{const a=l.selected.indexOf(o);if(a>-1&&!U.value){const s=e.modelValue.slice();s.splice(a,1),t.emit(_,s),le(s),t.emit("remove-tag",o.value)}n.stopPropagation(),re()},Pe=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(!Wl(o))for(const a of l.selected)a.isDisabled&&o.push(a.value);t.emit(_,o),le(o),l.hoverIndex=-1,l.visible=!1,t.emit("clear"),re()},Ke=n=>{var o;if(e.multiple){const a=(e.modelValue||[]).slice(),s=me(a,n.value);s>-1?a.splice(s,1):(e.multipleLimit<=0||a.length<e.multipleLimit)&&a.push(n.value),t.emit(_,a),le(a),n.created&&(l.query="",X(""),l.inputLength=20),e.filterable&&((o=u.value)==null||o.focus())}else t.emit(_,n.value),le(n.value),l.visible=!1;tl(),!l.visible&&K(()=>{ae(n)})},me=(n=[],o)=>{if(!Se(o))return n.indexOf(o);const a=e.valueKey;let s=-1;return n.some((V,D)=>Ne(N(V,a))===N(o,a)?(s=D,!0):!1),s},tl=()=>{const n=u.value||d.value;n&&(n==null||n.focus())},ae=n=>{var o,a,s,V,D;const A=Array.isArray(n)?n[0]:n;let Q=null;if(A!=null&&A.value){const q=M.value.filter(Be=>Be.value===A.value);q.length>0&&(Q=q[0].$el)}if(r.value&&Q){const q=(V=(s=(a=(o=r.value)==null?void 0:o.popperRef)==null?void 0:a.contentRef)==null?void 0:s.querySelector)==null?void 0:V.call(s,`.${f.be("dropdown","wrap")}`);q&&In(q,Q)}(D=I.value)==null||D.handleScroll()},be=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n),n.disabled&&l.disabledOptions.set(n.value,n)},il=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},al=n=>{n.code!==Kl.backspace&&he(!1),l.inputLength=u.value.value.length*15+20,H()},he=n=>{if(!Array.isArray(l.selected))return;const o=De(l.selected.map(s=>s.value)),a=l.selected[o];if(!!a)return n===!0||n===!1?(a.hitState=n,n):(a.hitState=!a.hitState,a.hitState)},rl=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,K(()=>X(o));else{const a=o[o.length-1]||"";l.isOnComposition=!rn(a)}},sl=()=>{K(()=>ae(l.selected))},ul=n=>{l.focused||((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),l.focused=!0,t.emit("focus",n))},re=()=>{var n,o;l.visible?(n=u.value||d.value)==null||n.focus():(o=d.value)==null||o.focus()},dl=()=>{var n,o,a;l.visible=!1,(n=d.value)==null||n.blur(),(a=(o=m.value)==null?void 0:o.blur)==null||a.call(o)},Y=n=>{var o,a,s;((o=r.value)==null?void 0:o.isFocusInsideContent(n))||((a=S.value)==null?void 0:a.isFocusInsideContent(n))||((s=g.value)==null?void 0:s.contains(n.relatedTarget))||(l.visible&&ge(),l.focused=!1,t.emit("blur",n))},se=n=>{Pe(n)},ge=()=>{l.visible=!1},ye=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},ze=n=>{n&&!l.mouseEnter||U.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!r.value||!r.value.isFocusInsideContent())&&(l.visible=!l.visible),re())},cl=()=>{l.visible?M.value[l.hoverIndex]&&Ke(M.value[l.hoverIndex]):ze()},ue=n=>Se(n.value)?N(n.value,e.valueKey):n.value,ke=p(()=>M.value.filter(n=>n.visible).every(n=>n.disabled)),pl=p(()=>e.multiple?l.selected.slice(0,e.maxCollapseTags):[]),Ce=p(()=>e.multiple?l.selected.slice(e.maxCollapseTags):[]),Ae=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!ke.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=M.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&Ae(n),K(()=>ae(E.value))}},fl=()=>{l.mouseEnter=!0},qe=()=>{l.mouseEnter=!1},vl=(n,o)=>{var a,s;ie(n,o),(s=(a=S.value)==null?void 0:a.updatePopper)==null||s.call(a)},ml=p(()=>({maxWidth:`${w(l.inputWidth)-32-(pe.value?22:0)}px`,width:"100%"}));return{optionList:C,optionsArray:M,hoverOption:E,selectSize:ee,handleResize:xe,debouncedOnInputChange:ll,debouncedQueryChange:nl,deletePrevTag:ol,deleteTag:ie,deleteSelected:Pe,handleOptionSelect:Ke,scrollToOption:ae,readonly:je,resetInputHeight:H,showClose:Te,iconComponent:Le,iconReverse:Ge,showNewOption:Ye,collapseTagSize:Xe,setSelected:ve,managePlaceholder:$e,selectDisabled:U,emptyText:fe,toggleLastOptionHitState:he,resetInputState:al,handleComposition:rl,onOptionCreate:be,onOptionDestroy:il,handleMenuEnter:sl,handleFocus:ul,focus:re,blur:dl,handleBlur:Y,handleClearClick:se,handleClose:ge,handleKeydownEscape:ye,toggleMenu:ze,selectOption:cl,getValueKey:ue,navigateOptions:Ae,handleDeleteTooltipTag:vl,dropMenuVisible:Ze,queryChange:L,groupQueryChange:c,showTagList:pl,collapseTagList:Ce,selectTagsStyle:ml,reference:d,input:u,iOSInput:m,tooltipRef:r,tagTooltipRef:S,tags:h,selectWrapper:g,scrollbar:I,handleMouseEnter:fl,handleMouseLeave:qe}};var Un=Ie({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:t}){let v=[];function f(d,u){if(d.length!==u.length)return!1;for(const[m]of d.entries())if(d[m]!=u[m])return!1;return!0}return()=>{var d,u;const m=(d=l.default)==null?void 0:d.call(l),r=[];function S(h){!Array.isArray(h)||h.forEach(g=>{var I,E,L,c;const C=(I=(g==null?void 0:g.type)||{})==null?void 0:I.name;C==="ElOptionGroup"?S(!Wl(g.children)&&!Array.isArray(g.children)&&te((E=g.children)==null?void 0:E.default)?(L=g.children)==null?void 0:L.default():g.children):C==="ElOption"?r.push((c=g.props)==null?void 0:c.label):Array.isArray(g.children)&&S(g.children)})}return m.length&&S((u=m[0])==null?void 0:u.children),f(r,v)||(v=r,t("update-options",r)),m}}});const Bl="ElSelect",Yn=Ie({name:Bl,componentName:Bl,components:{ElInput:sn,ElSelectMenu:Qn,ElOption:Il,ElOptions:Un,ElTag:dn,ElScrollbar:un,ElTooltip:on,ElIcon:On},directives:{ClickOutside:Ln},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:$n},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:tn.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:zl,default:_l},fitInputWidth:Boolean,suffixIcon:{type:zl,default:en},tagType:El(bl({},cn.type),{default:"info"}),validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:an,default:"bottom-start"},ariaLabel:{type:String,default:void 0}},emits:[_,Ql,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const t=ce("select"),v=ce("input"),{t:f}=wl(),d=Rl(),u=jn(e),{optionList:m,optionsArray:r,hoverOption:S,selectSize:h,readonly:g,handleResize:I,collapseTagSize:E,debouncedOnInputChange:L,debouncedQueryChange:c,deletePrevTag:C,deleteTag:i,deleteSelected:O,handleOptionSelect:G,scrollToOption:je,setSelected:U,resetInputHeight:Te,managePlaceholder:Le,showClose:Ge,selectDisabled:pe,iconComponent:Ee,iconReverse:fe,showNewOption:M,emptyText:Ue,toggleLastOptionHitState:Ye,resetInputState:ee,handleComposition:Xe,onOptionCreate:Ze,onOptionDestroy:H,handleMenuEnter:X,handleFocus:$e,focus:Me,blur:ve,handleBlur:Ve,handleClearClick:Je,handleClose:xe,handleKeydownEscape:_e,toggleMenu:el,selectOption:ll,getValueKey:nl,navigateOptions:le,handleDeleteTooltipTag:De,dropMenuVisible:ol,reference:ie,input:Pe,iOSInput:Ke,tooltipRef:me,tagTooltipRef:tl,tags:ae,selectWrapper:be,scrollbar:il,queryChange:al,groupQueryChange:he,handleMouseEnter:rl,handleMouseLeave:sl,showTagList:ul,collapseTagList:re,selectTagsStyle:dl}=Gn(e,u,l),{inputWidth:Y,selected:se,inputLength:ge,filteredOptionsCount:ye,visible:ze,selectedLabel:cl,hoverIndex:ue,query:ke,inputHovering:pl,currentPlaceholder:Ce,menuVisibleOnFocus:Ae,isOnComposition:fl,options:qe,cachedOptions:vl,optionsCount:ml,prefixWidth:n}=Cl(u),o=p(()=>{const P=[t.b()],ne=w(h);return ne&&P.push(t.m(ne)),e.disabled&&P.push(t.m("disabled")),P}),a=p(()=>[t.e("tags"),t.is("disabled",w(pe))]),s=p(()=>[t.b("tags-wrapper"),{"has-prefix":w(n)&&w(se).length}]),V=p(()=>[t.e("input"),t.is(w(h)),t.is("disabled",w(pe))]),D=p(()=>[t.e("input"),t.is(w(h)),t.em("input","iOS")]),A=p(()=>[t.is("empty",!e.allowCreate&&Boolean(w(ke))&&w(ye)===0)]),Q=p(()=>({maxWidth:`${w(Y)>123&&w(se).length>e.maxCollapseTags?w(Y)-123:w(Y)-75}px`})),q=p(()=>({marginLeft:`${w(n)}px`,flexGrow:1,width:`${w(ge)/(w(Y)-32)}%`,maxWidth:`${w(Y)-42}px`}));Fl(Qe,Re({props:e,options:qe,optionsArray:r,cachedOptions:vl,optionsCount:ml,filteredOptionsCount:ye,hoverIndex:ue,handleOptionSelect:G,onOptionCreate:Ze,onOptionDestroy:H,selectWrapper:be,selected:se,setSelected:U,queryChange:al,groupQueryChange:he})),Sl(()=>{u.cachedPlaceHolder=Ce.value=e.placeholder||(()=>f("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Ce.value=""),Nl(be,I),e.remote&&e.multiple&&Te(),K(()=>{const P=ie.value&&ie.value.$el;if(!!P&&(Y.value=P.getBoundingClientRect().width,l.slots.prefix)){const ne=P.querySelector(`.${v.e("prefix")}`);n.value=Math.max(ne.getBoundingClientRect().width+11,30)}}),U()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(_,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(_,"");const Be=p(()=>{var P,ne;return(ne=(P=me.value)==null?void 0:P.popperRef)==null?void 0:ne.contentRef});return{isIOS:Sn,onOptionsRendered:P=>{m.value=P},prefixWidth:n,selectSize:h,readonly:g,handleResize:I,collapseTagSize:E,debouncedOnInputChange:L,debouncedQueryChange:c,deletePrevTag:C,deleteTag:i,handleDeleteTooltipTag:De,deleteSelected:O,handleOptionSelect:G,scrollToOption:je,inputWidth:Y,selected:se,inputLength:ge,filteredOptionsCount:ye,visible:ze,selectedLabel:cl,hoverIndex:ue,query:ke,inputHovering:pl,currentPlaceholder:Ce,menuVisibleOnFocus:Ae,isOnComposition:fl,options:qe,resetInputHeight:Te,managePlaceholder:Le,showClose:Ge,selectDisabled:pe,iconComponent:Ee,iconReverse:fe,showNewOption:M,emptyText:Ue,toggleLastOptionHitState:Ye,resetInputState:ee,handleComposition:Xe,handleMenuEnter:X,handleFocus:$e,focus:Me,blur:ve,handleBlur:Ve,handleClearClick:Je,handleClose:xe,handleKeydownEscape:_e,toggleMenu:el,selectOption:ll,getValueKey:nl,navigateOptions:le,dropMenuVisible:ol,reference:ie,input:Pe,iOSInput:Ke,tooltipRef:me,popperPaneRef:Be,tags:ae,selectWrapper:be,scrollbar:il,wrapperKls:o,tagsKls:a,tagWrapperKls:s,inputKls:V,iOSInputKls:D,scrollbarKls:A,selectTagsStyle:dl,nsSelect:t,tagTextStyle:Q,inputStyle:q,handleMouseEnter:rl,handleMouseLeave:sl,showTagList:ul,collapseTagList:re,tagTooltipRef:tl,contentId:d,hoverOption:S}}}),Xn=["disabled","autocomplete","aria-activedescendant","aria-controls","aria-expanded","aria-label"],Zn=["disabled"],Jn={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function xn(e,l,t,v,f,d){const u=Z("el-tag"),m=Z("el-tooltip"),r=Z("el-icon"),S=Z("el-input"),h=Z("el-option"),g=Z("el-options"),I=Z("el-scrollbar"),E=Z("el-select-menu"),L=ln("click-outside");return we((b(),$("div",{ref:"selectWrapper",class:y(e.wrapperKls),onMouseenter:l[22]||(l[22]=(...c)=>e.handleMouseEnter&&e.handleMouseEnter(...c)),onMouseleave:l[23]||(l[23]=(...c)=>e.handleMouseLeave&&e.handleMouseLeave(...c)),onClick:l[24]||(l[24]=J((...c)=>e.toggleMenu&&e.toggleMenu(...c),["stop"]))},[de(m,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:T(()=>{var c,C;return[k("div",{class:"select-trigger",onMouseenter:l[20]||(l[20]=i=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=i=>e.inputHovering=!1)},[e.multiple?(b(),$("div",{key:0,ref:"tags",tabindex:"-1",class:y(e.tagsKls),style:oe(e.selectTagsStyle),onClick:l[15]||(l[15]=(...i)=>e.focus&&e.focus(...i))},[e.collapseTags&&e.selected.length?(b(),W(Vl,{key:0,onAfterLeave:e.resetInputHeight},{default:T(()=>[k("span",{class:y(e.tagWrapperKls)},[(b(!0),$(We,null,gl(e.showTagList,i=>(b(),W(u,{key:e.getValueKey(i),closable:!e.selectDisabled&&!i.isDisabled,size:e.collapseTagSize,hit:i.hitState,type:e.tagType,"disable-transitions":"",onClose:O=>e.deleteTag(O,i)},{default:T(()=>[k("span",{class:y(e.nsSelect.e("tags-text")),style:oe(e.tagTextStyle)},x(i.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128)),e.selected.length>e.maxCollapseTags?(b(),W(u,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:T(()=>[e.collapseTagsTooltip?(b(),W(m,{key:0,ref:"tagTooltipRef",disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:T(()=>[k("span",{class:y(e.nsSelect.e("tags-text"))},"+ "+x(e.selected.length-e.maxCollapseTags),3)]),content:T(()=>[k("div",{class:y(e.nsSelect.e("collapse-tags"))},[(b(!0),$(We,null,gl(e.collapseTagList,i=>(b(),$("div",{key:e.getValueKey(i),class:y(e.nsSelect.e("collapse-tag"))},[de(u,{class:"in-tooltip",closable:!e.selectDisabled&&!i.isDisabled,size:e.collapseTagSize,hit:i.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:O=>e.handleDeleteTooltipTag(O,i)},{default:T(()=>[k("span",{class:y(e.nsSelect.e("tags-text")),style:oe({maxWidth:e.inputWidth-75+"px"})},x(i.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(b(),$("span",{key:1,class:y(e.nsSelect.e("tags-text"))},"+ "+x(e.selected.length-e.maxCollapseTags),3))]),_:1},8,["size","type"])):B("v-if",!0)],2)]),_:1},8,["onAfterLeave"])):B("v-if",!0),e.collapseTags?B("v-if",!0):(b(),W(Vl,{key:1,onAfterLeave:e.resetInputHeight},{default:T(()=>[k("span",{class:y(e.tagWrapperKls),style:oe(e.prefixWidth&&e.selected.length?{marginLeft:`${e.prefixWidth}px`}:"")},[(b(!0),$(We,null,gl(e.selected,i=>(b(),W(u,{key:e.getValueKey(i),closable:!e.selectDisabled&&!i.isDisabled,size:e.collapseTagSize,hit:i.hitState,type:e.tagType,"disable-transitions":"",onClose:O=>e.deleteTag(O,i)},{default:T(()=>[k("span",{class:y(e.nsSelect.e("tags-text")),style:oe({maxWidth:e.inputWidth-75+"px"})},x(i.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],6)]),_:1},8,["onAfterLeave"])),e.filterable&&!e.selectDisabled?we((b(),$("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=i=>e.query=i),type:"text",class:y(e.inputKls),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:oe(e.inputStyle),role:"combobox","aria-activedescendant":((c=e.hoverOption)==null?void 0:c.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:l[1]||(l[1]=(...i)=>e.handleFocus&&e.handleFocus(...i)),onBlur:l[2]||(l[2]=(...i)=>e.handleBlur&&e.handleBlur(...i)),onKeyup:l[3]||(l[3]=(...i)=>e.managePlaceholder&&e.managePlaceholder(...i)),onKeydown:[l[4]||(l[4]=(...i)=>e.resetInputState&&e.resetInputState(...i)),l[5]||(l[5]=F(J(i=>e.navigateOptions("next"),["prevent"]),["down"])),l[6]||(l[6]=F(J(i=>e.navigateOptions("prev"),["prevent"]),["up"])),l[7]||(l[7]=F((...i)=>e.handleKeydownEscape&&e.handleKeydownEscape(...i),["esc"])),l[8]||(l[8]=F(J((...i)=>e.selectOption&&e.selectOption(...i),["stop","prevent"]),["enter"])),l[9]||(l[9]=F((...i)=>e.deletePrevTag&&e.deletePrevTag(...i),["delete"])),l[10]||(l[10]=F(i=>e.visible=!1,["tab"]))],onCompositionstart:l[11]||(l[11]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onCompositionupdate:l[12]||(l[12]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onCompositionend:l[13]||(l[13]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onInput:l[14]||(l[14]=(...i)=>e.debouncedQueryChange&&e.debouncedQueryChange(...i))},null,46,Xn)),[[nn,e.query]]):B("v-if",!0)],6)):B("v-if",!0),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(b(),$("input",{key:1,ref:"iOSInput",class:y(e.iOSInputKls),disabled:e.selectDisabled,type:"text"},null,10,Zn)):B("v-if",!0),de(S,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=i=>e.selectedLabel=i),type:"text",placeholder:typeof e.currentPlaceholder=="function"?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:y([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,role:"combobox","aria-activedescendant":((C=e.hoverOption)==null?void 0:C.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropMenuVisible,label:e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=F(J(i=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=F(J(i=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),F(J(e.selectOption,["stop","prevent"]),["enter"]),F(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=F(i=>e.visible=!1,["tab"]))]},Dl({suffix:T(()=>[e.iconComponent&&!e.showClose?(b(),W(r,{key:0,class:y([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:T(()=>[(b(),W(Pl(e.iconComponent)))]),_:1},8,["class"])):B("v-if",!0),e.showClose&&e.clearIcon?(b(),W(r,{key:1,class:y([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:T(()=>[(b(),W(Pl(e.clearIcon)))]),_:1},8,["class","onClick"])):B("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:T(()=>[k("div",Jn,[j(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","aria-activedescendant","aria-controls","aria-expanded","label","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]}),content:T(()=>[de(E,null,Dl({default:T(()=>[we(de(I,{id:e.contentId,ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:y(e.scrollbarKls),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:T(()=>[e.showNewOption?(b(),W(h,{key:0,value:e.query,created:!0},null,8,["value"])):B("v-if",!0),de(g,{onUpdateOptions:e.onOptionsRendered},{default:T(()=>[j(e.$slots,"default")]),_:3},8,["onUpdateOptions"])]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Ol,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(b(),$(We,{key:0},[e.$slots.empty?j(e.$slots,"empty",{key:0}):(b(),$("p",{key:1,class:y(e.nsSelect.be("dropdown","empty"))},x(e.emptyText),3))],64)):B("v-if",!0)]),_:2},[e.$slots.header?{name:"header",fn:T(()=>[j(e.$slots,"header")])}:void 0,e.$slots.footer?{name:"footer",fn:T(()=>[j(e.$slots,"footer")])}:void 0]),1024)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[L,e.handleClose,e.popperPaneRef]])}var _n=He(Yn,[["render",xn],["__file","select.vue"]]);const eo=Ie({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const l=ce("select"),t=z(!0),v=yl(),f=z([]);Fl(jl,Re(bl({},Cl(e))));const d=Fe(Qe);Sl(()=>{f.value=u(v.subTree)});const u=r=>{const S=[];return Array.isArray(r.children)&&r.children.forEach(h=>{var g;h.type&&h.type.name==="ElOption"&&h.component&&h.component.proxy?S.push(h.component.proxy):(g=h.children)!=null&&g.length&&S.push(...u(h))}),S},{groupQueryChange:m}=Ne(d);return R(m,()=>{t.value=f.value.some(r=>r.visible===!0)},{flush:"post"}),{visible:t,ns:l}}});function lo(e,l,t,v,f,d){return we((b(),$("ul",{class:y(e.ns.be("group","wrap"))},[k("li",{class:y(e.ns.be("group","title"))},x(e.label),3),k("li",null,[k("ul",{class:y(e.ns.b("group"))},[j(e.$slots,"default")],2)])],2)),[[Ol,e.visible]])}var Gl=He(eo,[["render",lo],["__file","option-group.vue"]]);const ho=wn(_n,{Option:Il,OptionGroup:Gl}),go=Hl(Il);Hl(Gl);export{go as E,ho as a};