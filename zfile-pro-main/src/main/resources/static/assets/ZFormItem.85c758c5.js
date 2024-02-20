import{S as q}from"./index.b1a3ab43.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";import{r as x,c as d,a as b,f as $,y as l,i as c,o as w,a6 as Z,g as E,u as g,A as I,l as k,Y as A}from"./index.a81894c3.js";const j={class:"z-form"},R={class:"space-y-8 divide-y divide-gray-200"},S={class:"z-form-body"},B={class:"z-form-title text-lg leading-6 font-medium text-gray-900"},O={class:"z-form-sub-title mt-2 max-w-3xl text-sm text-gray-500"},V={class:"z-form-footer"},C={class:"pt-5"},N={class:"flex justify-end"},D={name:"ZForm"},M=Object.assign(D,{props:{model:Object,rules:Object},setup(p,{expose:h}){const t=p;let u=x({}),m=x([]),i=d(()=>{const e={};return m.value.forEach(({prop:s,required:n,label:o})=>{if(n&&(e[s]=[{required:!0,message:`${o}\u4E0D\u80FD\u4E3A\u7A7A`}]),t.rules[s]===void 0){console.debug(`prop \u4E3A ${s} \u7684 FormItem \u6821\u9A8C\u89C4\u5219\u4E0D\u5B58\u5728, \u8DF3\u8FC7.`);return}if(!Array.isArray(t.rules[s])){console.warn(`prop \u4E3A ${s} \u7684 FormItem \u6821\u9A8C\u89C4\u5219\u4E0D\u5B58\u5728\u6216\u8005\u5176\u503C\u4E0D\u662F\u6570\u7EC4`),e[s]=[{required:!0}];return}e[s]=t.rules[s]}),e}),_=d(()=>m.value.reduce((e,{prop:s})=>{let n=s.split(".");if(n.length>1){let o=t.model;for(;n.length>=1;){let f=n.shift();o[f]!==void 0&&(o=o[f])}e[s]=o}else e[s]=t.model[s];return e},{}));const v=e=>{new q(i.value).validate(_.value,n=>{let o={};n&&n.length?n.forEach(({message:f,field:F})=>{o[F]=f}):o={},u.value=o,e(Object.keys(o).length===0)})},y=e=>{e&&(m.value=[...m.value,e])},r=e=>{e&&(m.value=m.value.filter(({prop:s})=>s!==e.prop))};let a=d(()=>t.rules);return h({validate:v,formAddField:y,formRemoveField:r,rulesArray:a,formError:u}),(e,s)=>(b(),$("form",j,[l("div",R,[l("div",S,[l("div",null,[l("h3",B,[c(e.$slots,"form-title",{},void 0,!0)]),l("p",O,[c(e.$slots,"form-sub-title",{},void 0,!0)])]),c(e.$slots,"default",{},void 0,!0)]),l("div",V,[l("div",C,[l("div",N,[c(e.$slots,"footer",{},void 0,!0)])])])])]))}});var Q=z(M,[["__scopeId","data-v-c597957c"]]);const T={class:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"},U=["for"],Y={class:"mt-1 sm:mt-0 sm:col-span-2"},G={class:"empty:mt-0 mt-2 text-sm max-w-2xl text-gray-400 z-form-item-tips"},H={class:"empty:mt-0 mt-2 text-sm text-red-500"},J={__name:"ZFormItem",props:{required:Boolean,prop:String,label:String},setup(p){const{proxy:h}=A(),t=p;let u=d(()=>{let r=i.value.rulesArray;return r?r[t.prop]:[]}),m=d(()=>{if(t.required)return!0;if(u.value)for(let r=0;r<u.value.length;r++){let a=u.value[r].required;if(typeof a=="boolean")return!0;if(typeof a=="function")return a()}return!1}),i=d(()=>{let r=h.$parent;for(;r.$options.name!=="ZForm";)r=r.parent;return r});d(()=>t.prop&&i.value.formError[t.prop]||"");const _=(r,a)=>{i.value[r](a)};let v=x();w(()=>{t.prop&&_("formAddField",{prop:t.prop,required:t.required,label:t.label,el:v.value})}),Z(()=>{_("formRemoveField",{prop:t.prop})});const y=r=>{let a=r.target.value,e={},s={};u.value&&(e[t.prop]=u.value,s[t.prop]=a),new q(e).validate(s,o=>{o&&o.length?o.forEach(({message:f,field:F})=>{i.value.formError[t.prop]=f}):i.value.formError[t.prop]=""})};return(r,a)=>(b(),$("div",{ref_key:"zFormItem",ref:v,class:E([g(i).formError[t.prop]?"is-error":"is-success","z-form-item mt-6 sm:mt-5 space-y-6 sm:space-y-5"])},[l("div",T,[p.label?(b(),$("label",{key:0,for:t.prop,class:E([g(m)?"required":"not-required","block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"])},I(p.label),11,U)):k("",!0),l("div",Y,[l("div",{class:"input max-w-2xl flex rounded-md z-form-item-input",onInput:y},[c(r.$slots,"default",{},void 0,!0)],32),l("p",G,[c(r.$slots,"tips",{},void 0,!0)]),l("p",H,I(g(i).formError[t.prop]),1)])])],2))}};var W=z(J,[["__scopeId","data-v-22eef9f0"]]);export{W as Z,Q as a};