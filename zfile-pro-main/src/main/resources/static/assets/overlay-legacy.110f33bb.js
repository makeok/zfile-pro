!function(){function e(o){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(o)}function o(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function t(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(o){n(e,o,l[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(l,o))}))}return e}function n(o,t,n){var l;return l=function(o,t){if("object"!=e(o)||!o)return o;var n=o[Symbol.toPrimitive];if(void 0!==n){var l=n.call(o,t||"default");if("object"!=e(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(o)}(t,"string"),(t="symbol"==e(l)?l:String(l))in o?Object.defineProperty(o,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[t]=n,o}var l=document.createElement("style");l.innerHTML=".el-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2000;height:100%;background-color:var(--el-overlay-color-lighter);overflow:auto}.el-overlay .el-overlay-root{height:0}\n",document.head.appendChild(l),System.register(["./base-legacy.ba5b7a3a.js","./event-legacy.d3c9bc11.js","./index-legacy.bd66d165.js","./focus-trap-legacy.a75696a1.js","./index-legacy.559a5434.js"],(function(e){"use strict";var o,l,r,u,a,c,i,f,s,d,p,y,v,b,g,m,O,S,h,j;return{setters:[function(e){o=e.b,l=e.n,r=e.d,u=e.z,a=e.A,c=e.e,i=e.B,f=e.g,s=e.D,d=e.F,p=e.G},function(e){y=e.U},function(e){v=e.b},function(e){b=e.i},function(e){g=e.r,m=e.c,O=e.w,S=e.W,h=e.o,j=e.Y}],execute:function(){var C=e("d",o({center:Boolean,alignCenter:Boolean,closeIcon:{type:l},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}));e("a",{close:function(){return!0}}),e("b",o(t(t({},C),{},{appendToBody:Boolean,appendTo:{type:r(String),default:"body"},beforeClose:{type:r(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}))),e("c",n(n(n({open:function(){return!0},opened:function(){return!0},close:function(){return!0},closed:function(){return!0}},y,(function(e){return u(e)})),"openAutoFocus",(function(){return!0})),"closeAutoFocus",(function(){return!0}))),e("u",(function(e,o){var t,n=j().emit,l=a().nextZIndex,r="",u=c(),C=c(),w=g(!1),B=g(!1),D=g(!1),P=g(null!=(t=e.zIndex)?t:l()),x=void 0,F=void 0,A=i("namespace",s),I=m((function(){var o={},t="--".concat(A.value,"-dialog");return e.fullscreen||(e.top&&(o["".concat(t,"-margin-top")]=e.top),e.width&&(o["".concat(t,"-width")]=f(e.width))),o})),k=m((function(){return e.alignCenter?{display:"flex"}:{}}));function E(){if(null==F||F(),null==x||x(),e.openDelay&&e.openDelay>0){var o=d((function(){return N()}),e.openDelay);x=o.stop}else N()}function z(){if(null==x||x(),null==F||F(),e.closeDelay&&e.closeDelay>0){var o=d((function(){return T()}),e.closeDelay);F=o.stop}else T()}function L(){e.beforeClose?e.beforeClose((function(e){e||(B.value=!0,w.value=!1)})):z()}function N(){p&&(w.value=!0)}function T(){w.value=!1}return e.lockScroll&&v(w),O((function(){return e.modelValue}),(function(t){t?(B.value=!1,E(),D.value=!0,P.value=b(e.zIndex)?l():P.value++,S((function(){n("open"),o.value&&(o.value.scrollTop=0)}))):w.value&&z()})),O((function(){return e.fullscreen}),(function(e){o.value&&(e?(r=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=r)})),h((function(){e.modelValue&&(w.value=!0,D.value=!0,E())})),{afterEnter:function(){n("opened")},afterLeave:function(){n("closed"),n(y,!1),e.destroyOnClose&&(D.value=!1)},beforeLeave:function(){n("close")},handleClose:L,onModalClick:function(){e.closeOnClickModal&&L()},close:z,doClose:T,onOpenAutoFocus:function(){n("openAutoFocus")},onCloseAutoFocus:function(){n("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&L()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:u,bodyId:C,closed:B,style:I,overlayDialogStyle:k,rendered:D,visible:w,zIndex:P}}))}}}))}();