import{l as u,b as d}from"./admin-setting.1db20681.js";import{bc as n}from"./index.a81894c3.js";import{b as m}from"./unit.5ed4b9cd.js";import{E as r}from"./request.88c6336a.js";function k(){const{data:e,loading:t,reload:s}=n(u,{formatResult:a=>{let i=a.data;return i.linkExpireTimes=JSON.parse(i.linkExpireTimes),i}}),{loading:l,run:o}=n(d,{manual:!0,onSuccess(){r({message:"\u4FDD\u5B58\u6210\u529F",type:"success"})}});return{data:e,dataLoading:t,reload:s,saveData:()=>{e.value.linkExpireTimes=e.value.linkExpireTimes.filter(a=>{if(a.value&&a.unit)return a.seconds=m(a),!0}),e.value.linkExpireTimes=JSON.stringify(e.value.linkExpireTimes),e.value.directLinkPrefix?o(e.value).then(()=>{s()}):r.warning("\u76F4\u94FE\u524D\u7F00\u4E0D\u80FD\u4E3A\u7A7A")},saveLoading:l}}export{k as u};