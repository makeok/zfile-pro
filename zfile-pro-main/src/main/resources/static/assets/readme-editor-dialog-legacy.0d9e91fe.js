!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(r){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),u=new G(n||[]);return a(i,"_invoke",{value:O(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var y="suspendedStart",d="executing",v="completed",g={};function m(){}function b(){}function w(){}var x={};s(x,c,(function(){return this}));var j=Object.getPrototypeOf,L=j&&j(j(N([])));L&&L!==o&&i.call(L,c)&&(x=L);var E=w.prototype=m.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,r){function n(o,a,u,c){var l=p(e[o],e,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==t(s)&&i.call(s,"__await")?r.resolve(s.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(s).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function O(t,e,n){var o=y;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=k(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=p(t,e,n);if("normal"===l.type){if(o=n.done?v:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function k(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function V(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=w,a(E,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:b,configurable:!0}),b.displayName=s(w,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,f,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},_(S.prototype),s(S.prototype,l,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new S(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(E),s(E,f,"Generator"),s(E,c,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(V),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),V(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;V(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}System.register(["./index-legacy.559a5434.js","./base-legacy.ba5b7a3a.js","./dialog-legacy.b24d0286.js","./overlay-legacy.110f33bb.js","./button-legacy.96a0013c.js","./index-legacy.bd66d165.js","./scroll-legacy.0e94e88d.js","./focus-trap-legacy.a75696a1.js","./refs-legacy.e7e7383f.js","./event-legacy.d3c9bc11.js"],(function(t,n){"use strict";var o,i,a,u,c,l,f,s,h,p,y,d,v,g;return{setters:[function(t){o=t.ao,i=t.aq,a=t.r,u=t.o,c=t.a,l=t.b,f=t.e,s=t.y,h=t.j,p=t.z,y=t.u,d=t.ae},function(t){v=t.x},function(t){g=t.E},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var m={class:"dialog-footer"};t("default",{__name:"readme-editor-dialog",props:{visible:{type:Boolean,required:!0},title:{type:String,default:""},modelValue:{type:String,default:""}},emits:["update:modelValue","update:visible"],setup:function(t,b){var w=b.emit,x=o((function(){return new Promise((function(t,o){var a;(a=e().mark((function r(){var a,u,c;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i((function(){return n.import("./base-editor-legacy.7be0d950.js").then((function(t){return t.b}))}),void 0);case 3:return a=e.sent,e.next=6,i((function(){return n.import("./base-editor-legacy.f6d2a876.js")}),void 0);case 6:return e.next=8,i((function(){return n.import("./vuepress-legacy.64bbc2ed.js")}),void 0);case 8:return e.next=10,i((function(){return n.import("./vuepress-legacy.fe5317fd.js").then((function(t){return t.v}))}),void 0);case 10:return u=e.sent,e.next=13,i((function(){return n.import("./prism-legacy.ed5df4ff.js").then((function(t){return t.p}))}),void 0);case 13:c=e.sent,a.use(u,{Prism:c}),t(a),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),o(e.t0);case 21:case"end":return e.stop()}}),r,null,[[0,18]])})),function(){var t=this,e=arguments;return new Promise((function(n,o){var i=a.apply(t,e);function u(t){r(i,n,o,u,c,"next",t)}function c(t){r(i,n,o,u,c,"throw",t)}u(void 0)}))})()}))})),j=a(""),L=t,E=w;u((function(){j.value=L.modelValue}));var _=function(){E("update:visible",!1)},S=function(){E("update:modelValue",j.value),E("update:visible",!1)};return function(t,e){var r=v,n=g;return c(),l(n,{modelValue:true,"onUpdate:modelValue":e[1]||(e[1]=function(t){return function(t){throw new TypeError('"'+t+'" is read-only')}("isShow")}),"destroy-on-close":!0,onClose:_,title:L.title,"show-close":!1,draggable:"",top:"5vh",width:"80%"},{footer:f((function(){return[s("span",m,[h(r,{onClick:_},{default:f((function(){return[p("取消")]})),_:1}),h(r,{type:"primary",onClick:S},{default:f((function(){return[p("保存")]})),_:1})])]})),default:f((function(){return[h(y(x),{modelValue:y(j),"onUpdate:modelValue":e[0]||(e[0]=function(t){return d(j)?j.value=t:null}),height:"70vh"},null,8,["modelValue"])]})),_:1},8,["title"])}}})}}}))}();