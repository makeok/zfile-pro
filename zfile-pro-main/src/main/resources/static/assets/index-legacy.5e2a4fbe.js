!function(){var e=document.createElement("style");e.innerHTML=".el-button[data-v-7666d571],.el-input[data-v-7666d571] input{height:35px}\n",document.head.appendChild(e),System.register(["./base-legacy.ba5b7a3a.js","./loading-legacy.a92cda73.js","./ZFormItem-legacy.eb663a6a.js","./input-legacy.d4357d07.js","./tooltip-legacy.7c89f687.js","./popper-legacy.2c9263bf.js","./image-viewer-legacy.11fe20ca.js","./button-legacy.96a0013c.js","./radio-legacy.c0dc2361.js","./switch-legacy.23086081.js","./index-legacy.559a5434.js","./admin-setting-legacy.05018def.js","./vue3-clipboard.esm-bundler-legacy.3ad9a827.js","./request-legacy.a1774e71.js","./index-legacy.7381ad7d.js","./route-block-legacy.9534e494.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./index-legacy.dafda260.js","./directive-legacy.1a2f693e.js","./index-legacy.e449b062.js","./focus-trap-legacy.a75696a1.js","./debounce-legacy.078b4aef.js","./scroll-legacy.0e94e88d.js","./event-legacy.d3c9bc11.js","./validator-legacy.df5a4111.js","./index-legacy.bd66d165.js"],(function(e){"use strict";var n,t,o,i,u,a,l,c,r,f,d,s,y,g,m,v,p,V,b,j,k,_,h,C,M,x,w,A,S,B,E,F,T,L,U;return{setters:[function(e){n=e.x},function(){},function(e){t=e.Z,o=e.a},function(){},function(){},function(e){i=e.E},function(e){u=e.E},function(){},function(e){a=e.E},function(e){l=e.E},function(e){c=e.r,r=e.bc,f=e.w,d=e.u,s=e.D,y=e.a,g=e.b,m=e.e,v=e.z,p=e.j,V=e.a7,b=e.f,j=e.bm,k=e.l,_=e.af,h=e.ag,C=e.y},function(e){M=e.c,x=e.v,w=e.l,A=e.d},function(e){S=e.t},function(e){B=e.E},function(e){E=e.E},function(e){F=e.b},function(e){T=e._},function(e){L=e.E},function(e){U=e.v},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var D=c({});function z(){var e=r(w,{formatResult:function(e){return e.data}}),n=e.data,t=e.reload,o=r(A,{manual:!0,onSuccess:function(){B({message:"保存成功",type:"success"})}}),i=o.loading,u=o.run,a=function(){M().then((function(e){D.value=e.data}))};return{data:n,reload:t,saveData:function(){u(n.value)},saveLoading:i,load2FAInfo:a,twoFAData:D,copyTwoFASecret:function(){S(D.value.secret).then((function(){B.success("复制成功")}))},verifyCodeAndBind:function(){x(D.value).then((function(e){B.success("绑定成功"),t()}))},rebind:function(){n.value.loginVerifySecret="",a()},cancelBind:function(){E.confirm("是否确认取消绑定，确认后将自动恢复为图形验证码","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success",callback:function(e){"confirm"===e&&(n.value.loginVerifySecret="",n.value.loginVerifyMode="image")}})},validBind:function(){E.prompt("请输入双因素认证 APP 中的验证码","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputValidator:function(e){return!!e},inputErrorMessage:"验证码不能为空."}).then((function(e){var t=e.value,o={secret:n.value.loginVerifySecret,code:t};x(o).then((function(){B.success("验证成功")}))}))}}}var I=function(e){return _("data-v-7666d571"),e=e(),h(),e},q=I((function(){return C("b",null,"Google 身份验证器",-1)})),P=I((function(){return C("b",null,"Microsoft Authenticator",-1)})),Z=I((function(){return C("br",null,null,-1)})),G={key:0,class:"w-full"},H={key:1},R={__name:"index",setup:function(e){var c=z(),r=c.data,_=c.saveData,h=c.saveLoading,C=c.load2FAInfo,M=c.twoFAData,x=c.copyTwoFASecret,w=c.verifyCodeAndBind,A=c.rebind,S=c.cancelBind,B=c.validBind;return f((function(){var e;return null===(e=r.value)||void 0===e?void 0:e.loginVerifyMode}),(function(e,n){"off"!==e&&"image"!==e||!n||_(),"2fa"!==e||r.value.loginVerifySecret||C()})),f((function(){var e;return null===(e=r.value)||void 0===e?void 0:e.showLogin}),(function(e,n){e!==n&&void 0!==n&&_()})),function(e,c){var f=l,_=t,E=a,F=n,T=u,D=i,z=L,I=o,R=U;return d(r)?s((y(),g(I,{key:0,model:d(r)},{"form-title":m((function(){return[v(" 安全设置 ")]})),"form-sub-title":m((function(){return[v(" 此处设置可保护您的站点安全 ")]})),default:m((function(){return[p(_,{label:"是否显示登录入口"},{tips:m((function(){return[v(" 启用后，会在门户显示后台登录入口，请根据自身情况选择是否启用 ")]})),default:m((function(){return[p(f,{modelValue:d(r).showLogin,"onUpdate:modelValue":c[0]||(c[0]=function(e){return d(r).showLogin=e})},null,8,["modelValue"])]})),_:1}),p(_,{label:"登录验证方式"},V({default:m((function(){return[p(E,{modelValue:d(r).loginVerifyMode,"onUpdate:modelValue":c[1]||(c[1]=function(e){return d(r).loginVerifyMode=e}),label:"off"},{default:m((function(){return[v("不启用登录验证")]})),_:1},8,["modelValue"]),p(E,{modelValue:d(r).loginVerifyMode,"onUpdate:modelValue":c[2]||(c[2]=function(e){return d(r).loginVerifyMode=e}),label:"image"},{default:m((function(){return[v("启用图片验证码")]})),_:1},8,["modelValue"]),p(E,{modelValue:d(r).loginVerifyMode,"onUpdate:modelValue":c[3]||(c[3]=function(e){return d(r).loginVerifyMode=e}),label:"2fa"},{default:m((function(){return[v("启用双因素认证")]})),_:1},8,["modelValue"])]})),_:2},["image"===d(r).loginVerifyMode?{name:"tips",fn:m((function(){return[v(" 图片验证码也可能会被识别，不能完全抵挡暴力破解。 ")]})),key:"0"}:void 0,"2fa"===d(r).loginVerifyMode?{name:"tips",fn:m((function(){return[v(" 双因素认证可完美保护登录认证，可使用任意支持 2FA 认证的软件，如 "),q,v("、"),P,v(" 等软件. "),Z]})),key:"1"}:void 0]),1024),"2fa"===d(r).loginVerifyMode?(y(),g(_,{key:0,label:"双因素认证密钥"},V({default:m((function(){var e;return[d(r).loginVerifySecret?(y(),b("div",G,[p(F,{size:"small",type:"primary",onClick:d(A)},{default:m((function(){return[v("重新绑定")]})),_:1},8,["onClick"]),p(F,{size:"small",type:"primary",onClick:d(S)},{default:m((function(){return[v("取消绑定")]})),_:1},8,["onClick"]),p(F,{size:"small",type:"primary",onClick:d(B)},{default:m((function(){return[v("验证绑定")]})),_:1},8,["onClick"])])):(y(),b("div",H,[p(T,{onClick:d(C),src:null===(e=d(M))||void 0===e?void 0:e.qrcode},null,8,["onClick","src"]),p(z,{readonly:"",modelValue:d(M).secret,"onUpdate:modelValue":c[4]||(c[4]=function(e){return d(M).secret=e})},{append:m((function(){return[p(D,{class:"item",effect:"dark",content:"复制",placement:"bottom"},{default:m((function(){return[p(F,{onClick:d(x),icon:d(j)},null,8,["onClick","icon"])]})),_:1})]})),_:1},8,["modelValue"])]))]})),_:2},[d(r).loginVerifySecret?void 0:{name:"tips",fn:m((function(){return[v(" 可扫描上方二维码或复制下方密钥到支持双因素认证的软件中添加。 ")]})),key:"0"}]),1024)):k("",!0),"2fa"!==d(r).loginVerifyMode||d(r).loginVerifySecret?k("",!0):(y(),g(_,{key:1,label:"双因素认证验证码"},{tips:m((function(){return[v(" 请绑定双因素认证软件后，输入显示的验证码进行绑定 ")]})),default:m((function(){return[p(z,{modelValue:d(M).code,"onUpdate:modelValue":c[5]||(c[5]=function(e){return d(M).code=e})},null,8,["modelValue"]),p(F,{onClick:d(w),type:"primary"},{default:m((function(){return[v("验证并绑定")]})),_:1},8,["onClick"])]})),_:1}))]})),_:1},8,["model"])),[[R,d(h)]]):k("",!0)}}};"function"==typeof F&&F(R);e("default",T(R,[["__scopeId","data-v-7666d571"]]))}}}))}();