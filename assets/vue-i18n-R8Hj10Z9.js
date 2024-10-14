import{a as y,i as U,b as d,c as N,d as T,s as Rt,g as Y,e as vt,m as P,D as We,f as p,h as R,j as q,k as V,u as j,l as Q,N as Ot,n as ht,o as kt,C as Nt,p as K,q as Z,r as pt,t as ge,v as be,w as yt,x as Pt,y as Mt,z as de,A as Ee,M as Ie,B as Le,E as Fe,F as Te,G as Re,H as Ct,I as Dt,J as Ve,K as St,L as At,O as Wt,P as ve,Q as Vt,R as Ut}from"./@intlify-DqB41OTx.js";import{j as oe,k as Ue,e as xt,f as G,w as te,F as xe,i as $t,l as wt,p as Ht,b as jt,q as B,r as Gt,s as Yt,u as Bt,T as Xt}from"./@vue-Bqiq1hBZ.js";/*!
  * vue-i18n v10.0.4
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const Jt="10.0.4";function zt(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Y().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Y().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Y().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Y().__INTLIFY_PROD_DEVTOOLS__=!1)}const v={UNEXPECTED_RETURN_TYPE:Nt,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:30,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_COMPATIBLE_LEGACY_VUE_I18N:33,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function h(e,...t){return vt(e,null,void 0)}const ae=P("__translateVNode"),ne=P("__datetimeParts"),re=P("__numberParts"),$e=P("__setPluralRules"),we=P("__injectWithOption"),se=P("__dispose");function X(e){if(!N(e))return e;for(const t in e)if(Z(e,t))if(!t.includes("."))N(e[t])&&X(e[t]);else{const c=t.split("."),l=c.length-1;let a=e,r=!1;for(let s=0;s<l;s++){if(c[s]in a||(a[c[s]]={}),!N(a[c[s]])){r=!0;break}a=a[c[s]]}r||(a[c[l]]=e[t],delete e[t]),N(a[c[l]])&&X(a[c[l]])}return e}function ce(e,t){const{messages:c,__i18n:l,messageResolver:a,flatJson:r}=t,s=R(c)?c:p(l)?{}:{[e]:{}};if(p(l)&&l.forEach(i=>{if("locale"in i&&"resource"in i){const{locale:u,resource:m}=i;u?(s[u]=s[u]||{},K(m,s[u])):K(m,s)}else d(i)&&K(JSON.parse(i),s)}),a==null&&r)for(const i in s)Z(s,i)&&X(s[i]);return s}function He(e){return e.type}function je(e,t,c){let l=N(t.messages)?t.messages:{};"__i18nGlobal"in c&&(l=ce(e.locale.value,{messages:l,__i18n:c.__i18nGlobal}));const a=Object.keys(l);a.length&&a.forEach(r=>{e.mergeLocaleMessage(r,l[r])});{if(N(t.datetimeFormats)){const r=Object.keys(t.datetimeFormats);r.length&&r.forEach(s=>{e.mergeDateTimeFormat(s,t.datetimeFormats[s])})}if(N(t.numberFormats)){const r=Object.keys(t.numberFormats);r.length&&r.forEach(s=>{e.mergeNumberFormat(s,t.numberFormats[s])})}}}function Oe(e){return Bt(Xt,null,e,0)}const he="__INTLIFY_META__",ke=()=>[],Kt=()=>!1;let Ne=0;function pe(e){return(t,c,l,a)=>e(c,l,B()||void 0,a)}const qt=()=>{const e=B();let t=null;return e&&(t=He(e)[he])?{[he]:t}:null};function ie(e={}){const{__root:t,__injectWithOption:c}=e,l=t===void 0,a=e.flatJson,r=Q?Gt:Yt;let s=T(e.inheritLocale)?e.inheritLocale:!0;const i=r(t&&s?t.locale.value:d(e.locale)?e.locale:We),u=r(t&&s?t.fallbackLocale.value:d(e.fallbackLocale)||p(e.fallbackLocale)||R(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:i.value),m=r(ce(i.value,e)),E=r(R(e.datetimeFormats)?e.datetimeFormats:{[i.value]:{}}),b=r(R(e.numberFormats)?e.numberFormats:{[i.value]:{}});let f=t?t.missingWarn:T(e.missingWarn)||q(e.missingWarn)?e.missingWarn:!0,L=t?t.fallbackWarn:T(e.fallbackWarn)||q(e.fallbackWarn)?e.fallbackWarn:!0,O=t?t.fallbackRoot:T(e.fallbackRoot)?e.fallbackRoot:!0,k=!!e.fallbackFormat,M=V(e.missing)?e.missing:null,A=V(e.missing)?pe(e.missing):null,C=V(e.postTranslation)?e.postTranslation:null,x=t?t.warnHtmlMessage:T(e.warnHtmlMessage)?e.warnHtmlMessage:!0,$=!!e.escapeParameter;const w=t?t.modifiers:R(e.modifiers)?e.modifiers:{};let H=e.pluralRules||t&&t.pluralRules,_;_=(()=>{l&&ve(null);const n={version:Jt,locale:i.value,fallbackLocale:u.value,messages:m.value,modifiers:w,pluralRules:H,missing:A===null?void 0:A,missingWarn:f,fallbackWarn:L,fallbackFormat:k,unresolving:!0,postTranslation:C===null?void 0:C,warnHtmlMessage:x,escapeParameter:$,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};n.datetimeFormats=E.value,n.numberFormats=b.value,n.__datetimeFormatters=R(_)?_.__datetimeFormatters:void 0,n.__numberFormatters=R(_)?_.__numberFormatters:void 0;const o=pt(n);return l&&ve(o),o})(),j(_,i.value,u.value);function ee(){return[i.value,u.value,m.value,E.value,b.value]}const Be=G({get:()=>i.value,set:n=>{i.value=n,_.locale=i.value}}),Xe=G({get:()=>u.value,set:n=>{u.value=n,_.fallbackLocale=u.value,j(_,i.value,n)}}),Je=G(()=>m.value),ze=G(()=>E.value),Ke=G(()=>b.value);function qe(){return V(C)?C:null}function Qe(n){C=n,_.postTranslation=n}function Ze(){return M}function et(n){n!==null&&(A=pe(n)),M=n,_.missing=A}const D=(n,o,g,I,S,z)=>{ee();let W;try{__INTLIFY_PROD_DEVTOOLS__&&yt(qt()),l||(_.fallbackContext=t?Pt():void 0),W=n(_)}finally{__INTLIFY_PROD_DEVTOOLS__,l||(_.fallbackContext=void 0)}if(g!=="translate exists"&&U(W)&&W===Mt||g==="translate exists"&&!W){const[Tt,La]=o();return t&&O?I(t):S(Tt)}else{if(z(W))return W;throw h(v.UNEXPECTED_RETURN_TYPE)}};function me(...n){return D(o=>Reflect.apply(Ee,null,[o,...n]),()=>de(...n),"translate",o=>Reflect.apply(o.t,o,[...n]),o=>o,o=>d(o))}function tt(...n){const[o,g,I]=n;if(I&&!N(I))throw h(v.INVALID_ARGUMENT);return me(o,g,y({resolvedMessage:!0},I||{}))}function at(...n){return D(o=>Reflect.apply(Fe,null,[o,...n]),()=>Le(...n),"datetime format",o=>Reflect.apply(o.d,o,[...n]),()=>Ie,o=>d(o))}function nt(...n){return D(o=>Reflect.apply(Re,null,[o,...n]),()=>Te(...n),"number format",o=>Reflect.apply(o.n,o,[...n]),()=>Ie,o=>d(o))}function rt(n){return n.map(o=>d(o)||U(o)||T(o)?Oe(String(o)):o)}const st={normalize:rt,interpolate:n=>n,type:"vnode"};function lt(...n){return D(o=>{let g;const I=o;try{I.processor=st,g=Reflect.apply(Ee,null,[I,...n])}finally{I.processor=null}return g},()=>de(...n),"translate",o=>o[ae](...n),o=>[Oe(o)],o=>p(o))}function ot(...n){return D(o=>Reflect.apply(Re,null,[o,...n]),()=>Te(...n),"number format",o=>o[re](...n),ke,o=>d(o)||p(o))}function ct(...n){return D(o=>Reflect.apply(Fe,null,[o,...n]),()=>Le(...n),"datetime format",o=>o[ne](...n),ke,o=>d(o)||p(o))}function it(n){H=n,_.pluralRules=H}function ut(n,o){return D(()=>{if(!n)return!1;const g=d(o)?o:i.value,I=fe(g),S=_.messageResolver(I,n);return Ct(S)||Dt(S)||d(S)},()=>[n],"translate exists",g=>Reflect.apply(g.te,g,[n,o]),Kt,g=>T(g))}function _t(n){let o=null;const g=Ve(_,u.value,i.value);for(let I=0;I<g.length;I++){const S=m.value[g[I]]||{},z=_.messageResolver(S,n);if(z!=null){o=z;break}}return o}function mt(n){const o=_t(n);return o??(t?t.tm(n)||{}:{})}function fe(n){return m.value[n]||{}}function ft(n,o){if(a){const g={[n]:o};for(const I in g)Z(g,I)&&X(g[I]);o=g[n]}m.value[n]=o,_.messages=m.value}function gt(n,o){m.value[n]=m.value[n]||{};const g={[n]:o};if(a)for(const I in g)Z(g,I)&&X(g[I]);o=g[n],K(o,m.value[n]),_.messages=m.value}function bt(n){return E.value[n]||{}}function dt(n,o){E.value[n]=o,_.datetimeFormats=E.value,ge(_,n,o)}function Et(n,o){E.value[n]=y(E.value[n]||{},o),_.datetimeFormats=E.value,ge(_,n,o)}function It(n){return b.value[n]||{}}function Lt(n,o){b.value[n]=o,_.numberFormats=b.value,be(_,n,o)}function Ft(n,o){b.value[n]=y(b.value[n]||{},o),_.numberFormats=b.value,be(_,n,o)}Ne++,t&&Q&&(te(t.locale,n=>{s&&(i.value=n,_.locale=n,j(_,i.value,u.value))}),te(t.fallbackLocale,n=>{s&&(u.value=n,_.fallbackLocale=n,j(_,i.value,u.value))}));const F={id:Ne,locale:Be,fallbackLocale:Xe,get inheritLocale(){return s},set inheritLocale(n){s=n,n&&t&&(i.value=t.locale.value,u.value=t.fallbackLocale.value,j(_,i.value,u.value))},get availableLocales(){return Object.keys(m.value).sort()},messages:Je,get modifiers(){return w},get pluralRules(){return H||{}},get isGlobal(){return l},get missingWarn(){return f},set missingWarn(n){f=n,_.missingWarn=f},get fallbackWarn(){return L},set fallbackWarn(n){L=n,_.fallbackWarn=L},get fallbackRoot(){return O},set fallbackRoot(n){O=n},get fallbackFormat(){return k},set fallbackFormat(n){k=n,_.fallbackFormat=k},get warnHtmlMessage(){return x},set warnHtmlMessage(n){x=n,_.warnHtmlMessage=n},get escapeParameter(){return $},set escapeParameter(n){$=n,_.escapeParameter=n},t:me,getLocaleMessage:fe,setLocaleMessage:ft,mergeLocaleMessage:gt,getPostTranslationHandler:qe,setPostTranslationHandler:Qe,getMissingHandler:Ze,setMissingHandler:et,[$e]:it};return F.datetimeFormats=ze,F.numberFormats=Ke,F.rt=tt,F.te=ut,F.tm=mt,F.d=at,F.n=nt,F.getDateTimeFormat=bt,F.setDateTimeFormat=dt,F.mergeDateTimeFormat=Et,F.getNumberFormat=It,F.setNumberFormat=Lt,F.mergeNumberFormat=Ft,F[we]=c,F[ae]=lt,F[ne]=ct,F[re]=ot,F}function Qt(e){const t=d(e.locale)?e.locale:We,c=d(e.fallbackLocale)||p(e.fallbackLocale)||R(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,l=V(e.missing)?e.missing:void 0,a=T(e.silentTranslationWarn)||q(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,r=T(e.silentFallbackWarn)||q(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,s=T(e.fallbackRoot)?e.fallbackRoot:!0,i=!!e.formatFallbackMessages,u=R(e.modifiers)?e.modifiers:{},m=e.pluralizationRules,E=V(e.postTranslation)?e.postTranslation:void 0,b=d(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,f=!!e.escapeParameterHtml,L=T(e.sync)?e.sync:!0;let O=e.messages;if(R(e.sharedMessages)){const w=e.sharedMessages;O=Object.keys(w).reduce((_,J)=>{const ee=_[J]||(_[J]={});return y(ee,w[J]),_},O||{})}const{__i18n:k,__root:M,__injectWithOption:A}=e,C=e.datetimeFormats,x=e.numberFormats,$=e.flatJson;return{locale:t,fallbackLocale:c,messages:O,flatJson:$,datetimeFormats:C,numberFormats:x,missing:l,missingWarn:a,fallbackWarn:r,fallbackRoot:s,fallbackFormat:i,modifiers:u,pluralRules:m,postTranslation:E,warnHtmlMessage:b,escapeParameter:f,messageResolver:e.messageResolver,inheritLocale:L,__i18n:k,__root:M,__injectWithOption:A}}function le(e={}){const t=ie(Qt(e)),{__extender:c}=e,l={id:t.id,get locale(){return t.locale.value},set locale(a){t.locale.value=a},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(a){t.fallbackLocale.value=a},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get missing(){return t.getMissingHandler()},set missing(a){t.setMissingHandler(a)},get silentTranslationWarn(){return T(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(a){t.missingWarn=T(a)?!a:a},get silentFallbackWarn(){return T(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(a){t.fallbackWarn=T(a)?!a:a},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(a){t.fallbackFormat=a},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(a){t.setPostTranslationHandler(a)},get sync(){return t.inheritLocale},set sync(a){t.inheritLocale=a},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(a){t.warnHtmlMessage=a!=="off"},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(a){t.escapeParameter=a},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...a){return Reflect.apply(t.t,t,[...a])},rt(...a){return Reflect.apply(t.rt,t,[...a])},tc(...a){const[r,s,i]=a,u={plural:1};let m=null,E=null;if(!d(r))throw h(v.INVALID_ARGUMENT);const b=r;return d(s)?u.locale=s:U(s)?u.plural=s:p(s)?m=s:R(s)&&(E=s),d(i)?u.locale=i:p(i)?m=i:R(i)&&(E=i),Reflect.apply(t.t,t,[b,m||E||{},u])},te(a,r){return t.te(a,r)},tm(a){return t.tm(a)},getLocaleMessage(a){return t.getLocaleMessage(a)},setLocaleMessage(a,r){t.setLocaleMessage(a,r)},mergeLocaleMessage(a,r){t.mergeLocaleMessage(a,r)},d(...a){return Reflect.apply(t.d,t,[...a])},getDateTimeFormat(a){return t.getDateTimeFormat(a)},setDateTimeFormat(a,r){t.setDateTimeFormat(a,r)},mergeDateTimeFormat(a,r){t.mergeDateTimeFormat(a,r)},n(...a){return Reflect.apply(t.n,t,[...a])},getNumberFormat(a){return t.getNumberFormat(a)},setNumberFormat(a,r){t.setNumberFormat(a,r)},mergeNumberFormat(a,r){t.mergeNumberFormat(a,r)}};return l.__extender=c,l}function Zt(e,t,c){return{beforeCreate(){const l=B();if(!l)throw h(v.UNEXPECTED_ERROR);const a=this.$options;if(a.i18n){const r=a.i18n;if(a.__i18n&&(r.__i18n=a.__i18n),r.__root=t,this===this.$root)this.$i18n=ye(e,r);else{r.__injectWithOption=!0,r.__extender=c.__vueI18nExtend,this.$i18n=le(r);const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}}else if(a.__i18n)if(this===this.$root)this.$i18n=ye(e,a);else{this.$i18n=le({__i18n:a.__i18n,__injectWithOption:!0,__extender:c.__vueI18nExtend,__root:t});const r=this.$i18n;r.__extender&&(r.__disposer=r.__extender(this.$i18n))}else this.$i18n=e;a.__i18nGlobal&&je(t,a,a),this.$t=(...r)=>this.$i18n.t(...r),this.$rt=(...r)=>this.$i18n.rt(...r),this.$tc=(...r)=>this.$i18n.tc(...r),this.$te=(r,s)=>this.$i18n.te(r,s),this.$d=(...r)=>this.$i18n.d(...r),this.$n=(...r)=>this.$i18n.n(...r),this.$tm=r=>this.$i18n.tm(r),c.__setInstance(l,this.$i18n)},mounted(){},unmounted(){const l=B();if(!l)throw h(v.UNEXPECTED_ERROR);const a=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,a.__disposer&&(a.__disposer(),delete a.__disposer,delete a.__extender),c.__deleteInstance(l),delete this.$i18n}}}function ye(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[$e](t.pluralizationRules||e.pluralizationRules);const c=ce(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(c).forEach(l=>e.mergeLocaleMessage(l,c[l])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(l=>e.mergeDateTimeFormat(l,t.datetimeFormats[l])),t.numberFormats&&Object.keys(t.numberFormats).forEach(l=>e.mergeNumberFormat(l,t.numberFormats[l])),e}const ue={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function ea({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((l,a)=>[...l,...a.type===xe?a.children:[a]],[]):t.reduce((c,l)=>{const a=e[l];return a&&(c[l]=a()),c},{})}function Ge(){return xe}const ta=oe({name:"i18n-t",props:y({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>U(e)||!isNaN(e)}},ue),setup(e,t){const{slots:c,attrs:l}=t,a=e.i18n||_e({useScope:e.scope,__useComponent:!0});return()=>{const r=Object.keys(c).filter(b=>b!=="_"),s={};e.locale&&(s.locale=e.locale),e.plural!==void 0&&(s.plural=d(e.plural)?+e.plural:e.plural);const i=ea(t,r),u=a[ae](e.keypath,i,s),m=y({},l),E=d(e.tag)||N(e.tag)?e.tag:Ge();return Ue(E,m,u)}}}),Pe=ta;function aa(e){return p(e)&&!d(e[0])}function Ye(e,t,c,l){const{slots:a,attrs:r}=t;return()=>{const s={part:!0};let i={};e.locale&&(s.locale=e.locale),d(e.format)?s.key=e.format:N(e.format)&&(d(e.format.key)&&(s.key=e.format.key),i=Object.keys(e.format).reduce((f,L)=>c.includes(L)?y({},f,{[L]:e.format[L]}):f,{}));const u=l(e.value,s,i);let m=[s.key];p(u)?m=u.map((f,L)=>{const O=a[f.type],k=O?O({[f.type]:f.value,index:L,parts:u}):[f.value];return aa(k)&&(k[0].key=`${f.type}-${L}`),k}):d(u)&&(m=[u]);const E=y({},r),b=d(e.tag)||N(e.tag)?e.tag:Ge();return Ue(b,E,m)}}const na=oe({name:"i18n-n",props:y({value:{type:Number,required:!0},format:{type:[String,Object]}},ue),setup(e,t){const c=e.i18n||_e({useScope:e.scope,__useComponent:!0});return Ye(e,t,Ot,(...l)=>c[re](...l))}}),Me=na,ra=oe({name:"i18n-d",props:y({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},ue),setup(e,t){const c=e.i18n||_e({useScope:e.scope,__useComponent:!0});return Ye(e,t,ht,(...l)=>c[ne](...l))}}),Ce=ra;function sa(e,t){const c=e;if(e.mode==="composition")return c.__getInstance(t)||e.global;{const l=c.__getInstance(t);return l!=null?l.__composer:e.global.__composer}}function la(e){const t=s=>{const{instance:i,value:u}=s;if(!i||!i.$)throw h(v.UNEXPECTED_ERROR);const m=sa(e,i.$),E=De(u);return[Reflect.apply(m.t,m,[...Se(E)]),m]};return{created:(s,i)=>{const[u,m]=t(i);Q&&e.global===m&&(s.__i18nWatcher=te(m.locale,()=>{i.instance&&i.instance.$forceUpdate()})),s.__composer=m,s.textContent=u},unmounted:s=>{Q&&s.__i18nWatcher&&(s.__i18nWatcher(),s.__i18nWatcher=void 0,delete s.__i18nWatcher),s.__composer&&(s.__composer=void 0,delete s.__composer)},beforeUpdate:(s,{value:i})=>{if(s.__composer){const u=s.__composer,m=De(i);s.textContent=Reflect.apply(u.t,u,[...Se(m)])}},getSSRProps:s=>{const[i]=t(s);return{textContent:i}}}}function De(e){if(d(e))return{path:e};if(R(e)){if(!("path"in e))throw h(v.REQUIRED_VALUE,"path");return e}else throw h(v.INVALID_VALUE)}function Se(e){const{path:t,locale:c,args:l,choice:a,plural:r}=e,s={},i=l||{};return d(c)&&(s.locale=c),U(a)&&(s.plural=a),U(r)&&(s.plural=r),[t,i,s]}function oa(e,t,...c){const l=R(c[0])?c[0]:{};(T(l.globalInstall)?l.globalInstall:!0)&&([Pe.name,"I18nT"].forEach(r=>e.component(r,Pe)),[Me.name,"I18nN"].forEach(r=>e.component(r,Me)),[Ce.name,"I18nD"].forEach(r=>e.component(r,Ce))),e.directive("t",la(t))}const ca=P("global-vue-i18n");function Ra(e={},t){const c=__VUE_I18N_LEGACY_API__&&T(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,l=T(e.globalInjection)?e.globalInjection:!0,a=new Map,[r,s]=ia(e,c),i=P("");function u(f){return a.get(f)||null}function m(f,L){a.set(f,L)}function E(f){a.delete(f)}const b={get mode(){return __VUE_I18N_LEGACY_API__&&c?"legacy":"composition"},async install(f,...L){if(f.__VUE_I18N_SYMBOL__=i,f.provide(f.__VUE_I18N_SYMBOL__,b),R(L[0])){const M=L[0];b.__composerExtend=M.__composerExtend,b.__vueI18nExtend=M.__vueI18nExtend}let O=null;!c&&l&&(O=Ea(f,b.global)),__VUE_I18N_FULL_INSTALL__&&oa(f,b,...L),__VUE_I18N_LEGACY_API__&&c&&f.mixin(Zt(s,s.__composer,b));const k=f.unmount;f.unmount=()=>{O&&O(),b.dispose(),k()}},get global(){return s},dispose(){r.stop()},__instances:a,__getInstance:u,__setInstance:m,__deleteInstance:E};return b}function _e(e={}){const t=B();if(t==null)throw h(v.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw h(v.NOT_INSTALLED);const c=ua(t),l=ma(c),a=He(t),r=_a(e,a);if(r==="global")return je(l,e,a),l;if(r==="parent"){let u=fa(c,t,e.__useComponent);return u==null&&(u=l),u}const s=c;let i=s.__getInstance(t);if(i==null){const u=y({},e);"__i18n"in a&&(u.__i18n=a.__i18n),l&&(u.__root=l),i=ie(u),s.__composerExtend&&(i[se]=s.__composerExtend(i)),ba(s,t,i),s.__setInstance(t,i)}return i}function ia(e,t,c){const l=xt(),a=__VUE_I18N_LEGACY_API__&&t?l.run(()=>le(e)):l.run(()=>ie(e));if(a==null)throw h(v.UNEXPECTED_ERROR);return[l,a]}function ua(e){const t=$t(e.isCE?ca:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw h(e.isCE?v.NOT_INSTALLED_WITH_PROVIDE:v.UNEXPECTED_ERROR);return t}function _a(e,t){return kt(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function ma(e){return e.mode==="composition"?e.global:e.global.__composer}function fa(e,t,c=!1){let l=null;const a=t.root;let r=ga(t,c);for(;r!=null;){const s=e;if(e.mode==="composition")l=s.__getInstance(r);else if(__VUE_I18N_LEGACY_API__){const i=s.__getInstance(r);i!=null&&(l=i.__composer,c&&l&&!l[we]&&(l=null))}if(l!=null||a===r)break;r=r.parent}return l}function ga(e,t=!1){return e==null?null:t&&e.vnode.ctx||e.parent}function ba(e,t,c){wt(()=>{},t),Ht(()=>{const l=c;e.__deleteInstance(t);const a=l[se];a&&(a(),delete l[se])},t)}const da=["locale","fallbackLocale","availableLocales"],Ae=["t","rt","d","n","tm","te"];function Ea(e,t){const c=Object.create(null);return da.forEach(a=>{const r=Object.getOwnPropertyDescriptor(t,a);if(!r)throw h(v.UNEXPECTED_ERROR);const s=jt(r.value)?{get(){return r.value.value},set(i){r.value.value=i}}:{get(){return r.get&&r.get()}};Object.defineProperty(c,a,s)}),e.config.globalProperties.$i18n=c,Ae.forEach(a=>{const r=Object.getOwnPropertyDescriptor(t,a);if(!r||!r.value)throw h(v.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${a}`,r)}),()=>{delete e.config.globalProperties.$i18n,Ae.forEach(a=>{delete e.config.globalProperties[`$${a}`]})}}zt();St(Vt);At(Ut);Wt(Ve);if(__INTLIFY_PROD_DEVTOOLS__){const e=Y();e.__INTLIFY__=!0,Rt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}export{Ra as c,_e as u};