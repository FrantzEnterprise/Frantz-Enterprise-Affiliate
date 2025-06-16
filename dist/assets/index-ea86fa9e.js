function rv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function iv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tp={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var no=Symbol.for("react.element"),ov=Symbol.for("react.portal"),av=Symbol.for("react.fragment"),sv=Symbol.for("react.strict_mode"),lv=Symbol.for("react.profiler"),cv=Symbol.for("react.provider"),uv=Symbol.for("react.context"),dv=Symbol.for("react.forward_ref"),fv=Symbol.for("react.suspense"),mv=Symbol.for("react.memo"),pv=Symbol.for("react.lazy"),Fd=Symbol.iterator;function hv(e){return e===null||typeof e!="object"?null:(e=Fd&&e[Fd]||e["@@iterator"],typeof e=="function"?e:null)}var Lp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ap=Object.assign,Mp={};function _r(e,t,n){this.props=e,this.context=t,this.refs=Mp,this.updater=n||Lp}_r.prototype.isReactComponent={};_r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fp(){}Fp.prototype=_r.prototype;function au(e,t,n){this.props=e,this.context=t,this.refs=Mp,this.updater=n||Lp}var su=au.prototype=new Fp;su.constructor=au;Ap(su,_r.prototype);su.isPureReactComponent=!0;var Rd=Array.isArray,Rp=Object.prototype.hasOwnProperty,lu={current:null},zp={key:!0,ref:!0,__self:!0,__source:!0};function Vp(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Rp.call(t,r)&&!zp.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:no,type:e,key:o,ref:a,props:i,_owner:lu.current}}function gv(e,t){return{$$typeof:no,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cu(e){return typeof e=="object"&&e!==null&&e.$$typeof===no}function vv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zd=/\/+/g;function js(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vv(""+e.key):t.toString(36)}function ta(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case no:case ov:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+js(a,0):r,Rd(i)?(n="",e!=null&&(n=e.replace(zd,"$&/")+"/"),ta(i,t,n,"",function(u){return u})):i!=null&&(cu(i)&&(i=gv(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(zd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Rd(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+js(o,s);a+=ta(o,t,n,l,i)}else if(l=hv(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+js(o,s++),a+=ta(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ho(e,t,n){if(e==null)return e;var r=[],i=0;return ta(e,r,"","",function(o){return t.call(n,o,i++)}),r}function yv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},na={transition:null},xv={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:na,ReactCurrentOwner:lu};function Dp(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:ho,forEach:function(e,t,n){ho(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ho(e,function(){t++}),t},toArray:function(e){return ho(e,function(t){return t})||[]},only:function(e){if(!cu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=_r;_.Fragment=av;_.Profiler=lv;_.PureComponent=au;_.StrictMode=sv;_.Suspense=fv;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xv;_.act=Dp;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ap({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=lu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Rp.call(t,l)&&!zp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:no,type:e.type,key:i,ref:o,props:r,_owner:a}};_.createContext=function(e){return e={$$typeof:uv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cv,_context:e},e.Consumer=e};_.createElement=Vp;_.createFactory=function(e){var t=Vp.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:dv,render:e}};_.isValidElement=cu;_.lazy=function(e){return{$$typeof:pv,_payload:{_status:-1,_result:e},_init:yv}};_.memo=function(e,t){return{$$typeof:mv,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=na.transition;na.transition={};try{e()}finally{na.transition=t}};_.unstable_act=Dp;_.useCallback=function(e,t){return Ve.current.useCallback(e,t)};_.useContext=function(e){return Ve.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};_.useEffect=function(e,t){return Ve.current.useEffect(e,t)};_.useId=function(){return Ve.current.useId()};_.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return Ve.current.useMemo(e,t)};_.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};_.useRef=function(e){return Ve.current.useRef(e)};_.useState=function(e){return Ve.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return Ve.current.useTransition()};_.version="18.3.1";Tp.exports=_;var E=Tp.exports;const c=iv(E),wv=rv({__proto__:null,default:c},[E]);var $l={},Np={exports:{}},Ye={},Ip={exports:{}},Op={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,F){var I=A.length;A.push(F);e:for(;0<I;){var V=I-1>>>1,$=A[V];if(0<i($,F))A[V]=F,A[I]=$,I=V;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var F=A[0],I=A.pop();if(I!==F){A[0]=I;e:for(var V=0,$=A.length,yt=$>>>1;V<yt;){var Ne=2*(V+1)-1,st=A[Ne],fe=Ne+1,Xe=A[fe];if(0>i(st,I))fe<$&&0>i(Xe,st)?(A[V]=Xe,A[fe]=I,V=fe):(A[V]=st,A[Ne]=I,V=Ne);else if(fe<$&&0>i(Xe,I))A[V]=Xe,A[fe]=I,V=fe;else break e}}return F}function i(A,F){var I=A.sortIndex-F.sortIndex;return I!==0?I:A.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,d=null,m=3,g=!1,x=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(A){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=A)r(u),F.sortIndex=F.expirationTime,t(l,F);else break;F=n(u)}}function S(A){if(w=!1,h(A),!x)if(n(l)!==null)x=!0,Z(C);else{var F=n(u);F!==null&&Ce(S,F.startTime-A)}}function C(A,F){x=!1,w&&(w=!1,v(T),T=-1),g=!0;var I=m;try{for(h(F),d=n(l);d!==null&&(!(d.expirationTime>F)||A&&!re());){var V=d.callback;if(typeof V=="function"){d.callback=null,m=d.priorityLevel;var $=V(d.expirationTime<=F);F=e.unstable_now(),typeof $=="function"?d.callback=$:d===n(l)&&r(l),h(F)}else r(l);d=n(l)}if(d!==null)var yt=!0;else{var Ne=n(u);Ne!==null&&Ce(S,Ne.startTime-F),yt=!1}return yt}finally{d=null,m=I,g=!1}}var P=!1,b=null,T=-1,R=5,z=-1;function re(){return!(e.unstable_now()-z<R)}function de(){if(b!==null){var A=e.unstable_now();z=A;var F=!0;try{F=b(!0,A)}finally{F?we():(P=!1,b=null)}}else P=!1}var we;if(typeof p=="function")we=function(){p(de)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,vt=se.port2;se.port1.onmessage=de,we=function(){vt.postMessage(null)}}else we=function(){k(de,0)};function Z(A){b=A,P||(P=!0,we())}function Ce(A,F){T=k(function(){A(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,Z(C))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var I=m;m=F;try{return A()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,F){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var I=m;m=A;try{return F()}finally{m=I}},e.unstable_scheduleCallback=function(A,F,I){var V=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?V+I:V):I=V,A){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=I+$,A={id:f++,callback:F,priorityLevel:A,startTime:I,expirationTime:$,sortIndex:-1},I>V?(A.sortIndex=I,t(u,A),n(l)===null&&A===n(u)&&(w?(v(T),T=-1):w=!0,Ce(S,I-V))):(A.sortIndex=$,t(l,A),x||g||(x=!0,Z(C))),A},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(A){var F=m;return function(){var I=m;m=F;try{return A.apply(this,arguments)}finally{m=I}}}})(Op);Ip.exports=Op;var Ev=Ip.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv=E,Ge=Ev;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bp=new Set,Fi={};function Xn(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(Fi[e]=t,e=0;e<t.length;e++)Bp.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jl=Object.prototype.hasOwnProperty,kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vd={},Dd={};function Cv(e){return jl.call(Dd,e)?!0:jl.call(Vd,e)?!1:kv.test(e)?Dd[e]=!0:(Vd[e]=!0,!1)}function bv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pv(e,t,n,r){if(t===null||typeof t>"u"||bv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var uu=/[\-:]([a-z])/g;function du(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uu,du);ke[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uu,du);ke[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uu,du);ke[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function fu(e,t,n,r){var i=ke.hasOwnProperty(t)?ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Pv(t,n,i,r)&&(n=null),r||i===null?Cv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=Sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,go=Symbol.for("react.element"),rr=Symbol.for("react.portal"),ir=Symbol.for("react.fragment"),mu=Symbol.for("react.strict_mode"),Ul=Symbol.for("react.profiler"),_p=Symbol.for("react.provider"),$p=Symbol.for("react.context"),pu=Symbol.for("react.forward_ref"),Hl=Symbol.for("react.suspense"),Wl=Symbol.for("react.suspense_list"),hu=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),jp=Symbol.for("react.offscreen"),Nd=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=Nd&&e[Nd]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,Us;function ci(e){if(Us===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Us=t&&t[1]||""}return`
`+Us+e}var Hs=!1;function Ws(e,t){if(!e||Hs)return"";Hs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Hs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ci(e):""}function Tv(e){switch(e.tag){case 5:return ci(e.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 2:case 15:return e=Ws(e.type,!1),e;case 11:return e=Ws(e.type.render,!1),e;case 1:return e=Ws(e.type,!0),e;default:return""}}function Gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ir:return"Fragment";case rr:return"Portal";case Ul:return"Profiler";case mu:return"StrictMode";case Hl:return"Suspense";case Wl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $p:return(e.displayName||"Context")+".Consumer";case _p:return(e._context.displayName||"Context")+".Provider";case pu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hu:return t=e.displayName||null,t!==null?t:Gl(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return Gl(e(t))}catch{}}return null}function Lv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gl(t);case 8:return t===mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Up(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Av(e){var t=Up(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vo(e){e._valueTracker||(e._valueTracker=Av(e))}function Hp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Up(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kl(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Id(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wp(e,t){t=t.checked,t!=null&&fu(e,"checked",t,!1)}function Yl(e,t){Wp(e,t);var n=xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ql(e,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Od(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ql(e,t,n){(t!=="number"||wa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ui=Array.isArray;function wr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(ui(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xn(n)}}function Gp(e,t){var n=xn(t.value),r=xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _d(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yo,Yp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yo=yo||document.createElement("div"),yo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ri(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mv=["Webkit","ms","Moz","O"];Object.keys(vi).forEach(function(e){Mv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vi[t]=vi[e]})});function Qp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vi.hasOwnProperty(e)&&vi[e]?(""+t).trim():t+"px"}function Xp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fv=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ql(e,t){if(t){if(Fv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function Jl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ec=null;function gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tc=null,Er=null,Sr=null;function $d(e){if(e=oo(e)){if(typeof tc!="function")throw Error(L(280));var t=e.stateNode;t&&(t=us(t),tc(e.stateNode,e.type,t))}}function Zp(e){Er?Sr?Sr.push(e):Sr=[e]:Er=e}function qp(){if(Er){var e=Er,t=Sr;if(Sr=Er=null,$d(e),t)for(e=0;e<t.length;e++)$d(t[e])}}function Jp(e,t){return e(t)}function eh(){}var Gs=!1;function th(e,t,n){if(Gs)return e(t,n);Gs=!0;try{return Jp(e,t,n)}finally{Gs=!1,(Er!==null||Sr!==null)&&(eh(),qp())}}function zi(e,t){var n=e.stateNode;if(n===null)return null;var r=us(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var nc=!1;if(Nt)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){nc=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{nc=!1}function Rv(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var yi=!1,Ea=null,Sa=!1,rc=null,zv={onError:function(e){yi=!0,Ea=e}};function Vv(e,t,n,r,i,o,a,s,l){yi=!1,Ea=null,Rv.apply(zv,arguments)}function Dv(e,t,n,r,i,o,a,s,l){if(Vv.apply(this,arguments),yi){if(yi){var u=Ea;yi=!1,Ea=null}else throw Error(L(198));Sa||(Sa=!0,rc=u)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jd(e){if(Zn(e)!==e)throw Error(L(188))}function Nv(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return jd(i),e;if(o===r)return jd(i),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function rh(e){return e=Nv(e),e!==null?ih(e):null}function ih(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ih(e);if(t!==null)return t;e=e.sibling}return null}var oh=Ge.unstable_scheduleCallback,Ud=Ge.unstable_cancelCallback,Iv=Ge.unstable_shouldYield,Ov=Ge.unstable_requestPaint,ae=Ge.unstable_now,Bv=Ge.unstable_getCurrentPriorityLevel,vu=Ge.unstable_ImmediatePriority,ah=Ge.unstable_UserBlockingPriority,ka=Ge.unstable_NormalPriority,_v=Ge.unstable_LowPriority,sh=Ge.unstable_IdlePriority,as=null,kt=null;function $v(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(as,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Hv,jv=Math.log,Uv=Math.LN2;function Hv(e){return e>>>=0,e===0?32:31-(jv(e)/Uv|0)|0}var xo=64,wo=4194304;function di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ca(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=di(s):(o&=a,o!==0&&(r=di(o)))}else a=n&~i,a!==0?r=di(a):o!==0&&(r=di(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),i=1<<n,r|=e[n],t&=~i;return r}function Wv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-mt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Wv(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function ic(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lh(){var e=xo;return xo<<=1,!(xo&4194240)&&(xo=64),e}function Ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ro(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function Kv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-mt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function yu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function ch(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uh,xu,dh,fh,mh,oc=!1,Eo=[],an=null,sn=null,ln=null,Vi=new Map,Di=new Map,en=[],Yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hd(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(t.pointerId)}}function Yr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=oo(t),t!==null&&xu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qv(e,t,n,r,i){switch(t){case"focusin":return an=Yr(an,e,t,n,r,i),!0;case"dragenter":return sn=Yr(sn,e,t,n,r,i),!0;case"mouseover":return ln=Yr(ln,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Vi.set(o,Yr(Vi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Di.set(o,Yr(Di.get(o)||null,e,t,n,r,i)),!0}return!1}function ph(e){var t=Dn(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=nh(n),t!==null){e.blockedOn=t,mh(e.priority,function(){dh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ra(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ac(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ec=r,n.target.dispatchEvent(r),ec=null}else return t=oo(n),t!==null&&xu(t),e.blockedOn=n,!1;t.shift()}return!0}function Wd(e,t,n){ra(e)&&n.delete(t)}function Xv(){oc=!1,an!==null&&ra(an)&&(an=null),sn!==null&&ra(sn)&&(sn=null),ln!==null&&ra(ln)&&(ln=null),Vi.forEach(Wd),Di.forEach(Wd)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,oc||(oc=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Xv)))}function Ni(e){function t(i){return Qr(i,e)}if(0<Eo.length){Qr(Eo[0],e);for(var n=1;n<Eo.length;n++){var r=Eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&Qr(an,e),sn!==null&&Qr(sn,e),ln!==null&&Qr(ln,e),Vi.forEach(t),Di.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)ph(n),n.blockedOn===null&&en.shift()}var kr=$t.ReactCurrentBatchConfig,ba=!0;function Zv(e,t,n,r){var i=H,o=kr.transition;kr.transition=null;try{H=1,wu(e,t,n,r)}finally{H=i,kr.transition=o}}function qv(e,t,n,r){var i=H,o=kr.transition;kr.transition=null;try{H=4,wu(e,t,n,r)}finally{H=i,kr.transition=o}}function wu(e,t,n,r){if(ba){var i=ac(e,t,n,r);if(i===null)rl(e,t,r,Pa,n),Hd(e,r);else if(Qv(i,e,t,n,r))r.stopPropagation();else if(Hd(e,r),t&4&&-1<Yv.indexOf(e)){for(;i!==null;){var o=oo(i);if(o!==null&&uh(o),o=ac(e,t,n,r),o===null&&rl(e,t,r,Pa,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else rl(e,t,r,null,n)}}var Pa=null;function ac(e,t,n,r){if(Pa=null,e=gu(r),e=Dn(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pa=e,null}function hh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bv()){case vu:return 1;case ah:return 4;case ka:case _v:return 16;case sh:return 536870912;default:return 16}default:return 16}}var nn=null,Eu=null,ia=null;function gh(){if(ia)return ia;var e,t=Eu,n=t.length,r,i="value"in nn?nn.value:nn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ia=i.slice(e,1<r?1-r:void 0)}function oa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function So(){return!0}function Gd(){return!1}function Qe(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?So:Gd,this.isPropagationStopped=Gd,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Su=Qe($r),io=ne({},$r,{view:0,detail:0}),Jv=Qe(io),Ys,Qs,Xr,ss=ne({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(Ys=e.screenX-Xr.screenX,Qs=e.screenY-Xr.screenY):Qs=Ys=0,Xr=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Qs}}),Kd=Qe(ss),ey=ne({},ss,{dataTransfer:0}),ty=Qe(ey),ny=ne({},io,{relatedTarget:0}),Xs=Qe(ny),ry=ne({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),iy=Qe(ry),oy=ne({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ay=Qe(oy),sy=ne({},$r,{data:0}),Yd=Qe(sy),ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uy[e])?!!t[e]:!1}function ku(){return dy}var fy=ne({},io,{key:function(e){if(e.key){var t=ly[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?oa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),my=Qe(fy),py=ne({},ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=Qe(py),hy=ne({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),gy=Qe(hy),vy=ne({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),yy=Qe(vy),xy=ne({},ss,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wy=Qe(xy),Ey=[9,13,27,32],Cu=Nt&&"CompositionEvent"in window,xi=null;Nt&&"documentMode"in document&&(xi=document.documentMode);var Sy=Nt&&"TextEvent"in window&&!xi,vh=Nt&&(!Cu||xi&&8<xi&&11>=xi),Xd=String.fromCharCode(32),Zd=!1;function yh(e,t){switch(e){case"keyup":return Ey.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function ky(e,t){switch(e){case"compositionend":return xh(t);case"keypress":return t.which!==32?null:(Zd=!0,Xd);case"textInput":return e=t.data,e===Xd&&Zd?null:e;default:return null}}function Cy(e,t){if(or)return e==="compositionend"||!Cu&&yh(e,t)?(e=gh(),ia=Eu=nn=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vh&&t.locale!=="ko"?null:t.data;default:return null}}var by={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!by[e.type]:t==="textarea"}function wh(e,t,n,r){Zp(r),t=Ta(t,"onChange"),0<t.length&&(n=new Su("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wi=null,Ii=null;function Py(e){Fh(e,0)}function ls(e){var t=lr(e);if(Hp(t))return e}function Ty(e,t){if(e==="change")return t}var Eh=!1;if(Nt){var Zs;if(Nt){var qs="oninput"in document;if(!qs){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),qs=typeof Jd.oninput=="function"}Zs=qs}else Zs=!1;Eh=Zs&&(!document.documentMode||9<document.documentMode)}function ef(){wi&&(wi.detachEvent("onpropertychange",Sh),Ii=wi=null)}function Sh(e){if(e.propertyName==="value"&&ls(Ii)){var t=[];wh(t,Ii,e,gu(e)),th(Py,t)}}function Ly(e,t,n){e==="focusin"?(ef(),wi=t,Ii=n,wi.attachEvent("onpropertychange",Sh)):e==="focusout"&&ef()}function Ay(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ls(Ii)}function My(e,t){if(e==="click")return ls(t)}function Fy(e,t){if(e==="input"||e==="change")return ls(t)}function Ry(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Ry;function Oi(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jl.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function tf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nf(e,t){var n=tf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tf(n)}}function kh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ch(){for(var e=window,t=wa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wa(e.document)}return t}function bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zy(e){var t=Ch(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kh(n.ownerDocument.documentElement,n)){if(r!==null&&bu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=nf(n,o);var a=nf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vy=Nt&&"documentMode"in document&&11>=document.documentMode,ar=null,sc=null,Ei=null,lc=!1;function rf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lc||ar==null||ar!==wa(r)||(r=ar,"selectionStart"in r&&bu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ei&&Oi(Ei,r)||(Ei=r,r=Ta(sc,"onSelect"),0<r.length&&(t=new Su("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ar)))}function ko(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},Js={},bh={};Nt&&(bh=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function cs(e){if(Js[e])return Js[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bh)return Js[e]=t[n];return e}var Ph=cs("animationend"),Th=cs("animationiteration"),Lh=cs("animationstart"),Ah=cs("transitionend"),Mh=new Map,of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,t){Mh.set(e,t),Xn(t,[e])}for(var el=0;el<of.length;el++){var tl=of[el],Dy=tl.toLowerCase(),Ny=tl[0].toUpperCase()+tl.slice(1);kn(Dy,"on"+Ny)}kn(Ph,"onAnimationEnd");kn(Th,"onAnimationIteration");kn(Lh,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(Ah,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iy=new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));function af(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dv(r,t,void 0,e),e.currentTarget=null}function Fh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;af(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;af(i,s,u),o=l}}}if(Sa)throw e=rc,Sa=!1,rc=null,e}function K(e,t){var n=t[mc];n===void 0&&(n=t[mc]=new Set);var r=e+"__bubble";n.has(r)||(Rh(t,e,2,!1),n.add(r))}function nl(e,t,n){var r=0;t&&(r|=4),Rh(n,e,r,t)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Bi(e){if(!e[Co]){e[Co]=!0,Bp.forEach(function(n){n!=="selectionchange"&&(Iy.has(n)||nl(n,!1,e),nl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Co]||(t[Co]=!0,nl("selectionchange",!1,t))}}function Rh(e,t,n,r){switch(hh(t)){case 1:var i=Zv;break;case 4:i=qv;break;default:i=wu}n=i.bind(null,t,n,e),i=void 0,!nc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Dn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}th(function(){var u=o,f=gu(n),d=[];e:{var m=Mh.get(e);if(m!==void 0){var g=Su,x=e;switch(e){case"keypress":if(oa(n)===0)break e;case"keydown":case"keyup":g=my;break;case"focusin":x="focus",g=Xs;break;case"focusout":x="blur",g=Xs;break;case"beforeblur":case"afterblur":g=Xs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gy;break;case Ph:case Th:case Lh:g=iy;break;case Ah:g=yy;break;case"scroll":g=Jv;break;case"wheel":g=wy;break;case"copy":case"cut":case"paste":g=ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qd}var w=(t&4)!==0,k=!w&&e==="scroll",v=w?m!==null?m+"Capture":null:m;w=[];for(var p=u,h;p!==null;){h=p;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,v!==null&&(S=zi(p,v),S!=null&&w.push(_i(p,S,h)))),k)break;p=p.return}0<w.length&&(m=new g(m,x,null,n,f),d.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==ec&&(x=n.relatedTarget||n.fromElement)&&(Dn(x)||x[It]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?Dn(x):null,x!==null&&(k=Zn(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(w=Kd,S="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Qd,S="onPointerLeave",v="onPointerEnter",p="pointer"),k=g==null?m:lr(g),h=x==null?m:lr(x),m=new w(S,p+"leave",g,n,f),m.target=k,m.relatedTarget=h,S=null,Dn(f)===u&&(w=new w(v,p+"enter",x,n,f),w.target=h,w.relatedTarget=k,S=w),k=S,g&&x)t:{for(w=g,v=x,p=0,h=w;h;h=er(h))p++;for(h=0,S=v;S;S=er(S))h++;for(;0<p-h;)w=er(w),p--;for(;0<h-p;)v=er(v),h--;for(;p--;){if(w===v||v!==null&&w===v.alternate)break t;w=er(w),v=er(v)}w=null}else w=null;g!==null&&sf(d,m,g,w,!1),x!==null&&k!==null&&sf(d,k,x,w,!0)}}e:{if(m=u?lr(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var C=Ty;else if(qd(m))if(Eh)C=Fy;else{C=Ay;var P=Ly}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=My);if(C&&(C=C(e,u))){wh(d,C,n,f);break e}P&&P(e,m,u),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Ql(m,"number",m.value)}switch(P=u?lr(u):window,e){case"focusin":(qd(P)||P.contentEditable==="true")&&(ar=P,sc=u,Ei=null);break;case"focusout":Ei=sc=ar=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,rf(d,n,f);break;case"selectionchange":if(Vy)break;case"keydown":case"keyup":rf(d,n,f)}var b;if(Cu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else or?yh(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(vh&&n.locale!=="ko"&&(or||T!=="onCompositionStart"?T==="onCompositionEnd"&&or&&(b=gh()):(nn=f,Eu="value"in nn?nn.value:nn.textContent,or=!0)),P=Ta(u,T),0<P.length&&(T=new Yd(T,e,null,n,f),d.push({event:T,listeners:P}),b?T.data=b:(b=xh(n),b!==null&&(T.data=b)))),(b=Sy?ky(e,n):Cy(e,n))&&(u=Ta(u,"onBeforeInput"),0<u.length&&(f=new Yd("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=b))}Fh(d,t)})}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ta(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=zi(e,n),o!=null&&r.unshift(_i(e,o,i)),o=zi(e,t),o!=null&&r.push(_i(e,o,i))),e=e.return}return r}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sf(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=zi(n,o),l!=null&&a.unshift(_i(n,l,s))):i||(l=zi(n,o),l!=null&&a.push(_i(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Oy=/\r\n?/g,By=/\u0000|\uFFFD/g;function lf(e){return(typeof e=="string"?e:""+e).replace(Oy,`
`).replace(By,"")}function bo(e,t,n){if(t=lf(t),lf(e)!==t&&n)throw Error(L(425))}function La(){}var cc=null,uc=null;function dc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fc=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,cf=typeof Promise=="function"?Promise:void 0,$y=typeof queueMicrotask=="function"?queueMicrotask:typeof cf<"u"?function(e){return cf.resolve(null).then(e).catch(jy)}:fc;function jy(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ni(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ni(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),St="__reactFiber$"+jr,$i="__reactProps$"+jr,It="__reactContainer$"+jr,mc="__reactEvents$"+jr,Uy="__reactListeners$"+jr,Hy="__reactHandles$"+jr;function Dn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uf(e);e!==null;){if(n=e[St])return n;e=uf(e)}return t}e=n,n=e.parentNode}return null}function oo(e){return e=e[St]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function us(e){return e[$i]||null}var pc=[],cr=-1;function Cn(e){return{current:e}}function Q(e){0>cr||(e.current=pc[cr],pc[cr]=null,cr--)}function W(e,t){cr++,pc[cr]=e.current,e.current=t}var wn={},Ae=Cn(wn),Be=Cn(!1),Un=wn;function Tr(e,t){var n=e.type.contextTypes;if(!n)return wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function Aa(){Q(Be),Q(Ae)}function df(e,t,n){if(Ae.current!==wn)throw Error(L(168));W(Ae,t),W(Be,n)}function zh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,Lv(e)||"Unknown",i));return ne({},n,r)}function Ma(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,Un=Ae.current,W(Ae,e),W(Be,Be.current),!0}function ff(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=zh(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,Q(Be),Q(Ae),W(Ae,e)):Q(Be),W(Be,n)}var At=null,ds=!1,ol=!1;function Vh(e){At===null?At=[e]:At.push(e)}function Wy(e){ds=!0,Vh(e)}function bn(){if(!ol&&At!==null){ol=!0;var e=0,t=H;try{var n=At;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}At=null,ds=!1}catch(i){throw At!==null&&(At=At.slice(e+1)),oh(vu,bn),i}finally{H=t,ol=!1}}return null}var ur=[],dr=0,Fa=null,Ra=0,et=[],tt=0,Hn=null,Mt=1,Ft="";function Mn(e,t){ur[dr++]=Ra,ur[dr++]=Fa,Fa=e,Ra=t}function Dh(e,t,n){et[tt++]=Mt,et[tt++]=Ft,et[tt++]=Hn,Hn=e;var r=Mt;e=Ft;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var o=32-mt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Mt=1<<32-mt(t)+i|n<<i|r,Ft=o+e}else Mt=1<<o|n<<i|r,Ft=e}function Pu(e){e.return!==null&&(Mn(e,1),Dh(e,1,0))}function Tu(e){for(;e===Fa;)Fa=ur[--dr],ur[dr]=null,Ra=ur[--dr],ur[dr]=null;for(;e===Hn;)Hn=et[--tt],et[tt]=null,Ft=et[--tt],et[tt]=null,Mt=et[--tt],et[tt]=null}var We=null,He=null,X=!1,ft=null;function Nh(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,He=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hn!==null?{id:Mt,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,He=null,!0):!1;default:return!1}}function hc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gc(e){if(X){var t=He;if(t){var n=t;if(!mf(e,t)){if(hc(e))throw Error(L(418));t=cn(n.nextSibling);var r=We;t&&mf(e,t)?Nh(r,n):(e.flags=e.flags&-4097|2,X=!1,We=e)}}else{if(hc(e))throw Error(L(418));e.flags=e.flags&-4097|2,X=!1,We=e}}}function pf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function Po(e){if(e!==We)return!1;if(!X)return pf(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!dc(e.type,e.memoizedProps)),t&&(t=He)){if(hc(e))throw Ih(),Error(L(418));for(;t;)Nh(e,t),t=cn(t.nextSibling)}if(pf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=We?cn(e.stateNode.nextSibling):null;return!0}function Ih(){for(var e=He;e;)e=cn(e.nextSibling)}function Lr(){He=We=null,X=!1}function Lu(e){ft===null?ft=[e]:ft.push(e)}var Gy=$t.ReactCurrentBatchConfig;function Zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function To(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hf(e){var t=e._init;return t(e._payload)}function Oh(e){function t(v,p){if(e){var h=v.deletions;h===null?(v.deletions=[p],v.flags|=16):h.push(p)}}function n(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=mn(v,p),v.index=0,v.sibling=null,v}function o(v,p,h){return v.index=h,e?(h=v.alternate,h!==null?(h=h.index,h<p?(v.flags|=2,p):h):(v.flags|=2,p)):(v.flags|=1048576,p)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,p,h,S){return p===null||p.tag!==6?(p=fl(h,v.mode,S),p.return=v,p):(p=i(p,h),p.return=v,p)}function l(v,p,h,S){var C=h.type;return C===ir?f(v,p,h.props.children,S,h.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zt&&hf(C)===p.type)?(S=i(p,h.props),S.ref=Zr(v,p,h),S.return=v,S):(S=fa(h.type,h.key,h.props,null,v.mode,S),S.ref=Zr(v,p,h),S.return=v,S)}function u(v,p,h,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=ml(h,v.mode,S),p.return=v,p):(p=i(p,h.children||[]),p.return=v,p)}function f(v,p,h,S,C){return p===null||p.tag!==7?(p=$n(h,v.mode,S,C),p.return=v,p):(p=i(p,h),p.return=v,p)}function d(v,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=fl(""+p,v.mode,h),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case go:return h=fa(p.type,p.key,p.props,null,v.mode,h),h.ref=Zr(v,null,p),h.return=v,h;case rr:return p=ml(p,v.mode,h),p.return=v,p;case Zt:var S=p._init;return d(v,S(p._payload),h)}if(ui(p)||Gr(p))return p=$n(p,v.mode,h,null),p.return=v,p;To(v,p)}return null}function m(v,p,h,S){var C=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:s(v,p,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case go:return h.key===C?l(v,p,h,S):null;case rr:return h.key===C?u(v,p,h,S):null;case Zt:return C=h._init,m(v,p,C(h._payload),S)}if(ui(h)||Gr(h))return C!==null?null:f(v,p,h,S,null);To(v,h)}return null}function g(v,p,h,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return v=v.get(h)||null,s(p,v,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case go:return v=v.get(S.key===null?h:S.key)||null,l(p,v,S,C);case rr:return v=v.get(S.key===null?h:S.key)||null,u(p,v,S,C);case Zt:var P=S._init;return g(v,p,h,P(S._payload),C)}if(ui(S)||Gr(S))return v=v.get(h)||null,f(p,v,S,C,null);To(p,S)}return null}function x(v,p,h,S){for(var C=null,P=null,b=p,T=p=0,R=null;b!==null&&T<h.length;T++){b.index>T?(R=b,b=null):R=b.sibling;var z=m(v,b,h[T],S);if(z===null){b===null&&(b=R);break}e&&b&&z.alternate===null&&t(v,b),p=o(z,p,T),P===null?C=z:P.sibling=z,P=z,b=R}if(T===h.length)return n(v,b),X&&Mn(v,T),C;if(b===null){for(;T<h.length;T++)b=d(v,h[T],S),b!==null&&(p=o(b,p,T),P===null?C=b:P.sibling=b,P=b);return X&&Mn(v,T),C}for(b=r(v,b);T<h.length;T++)R=g(b,v,T,h[T],S),R!==null&&(e&&R.alternate!==null&&b.delete(R.key===null?T:R.key),p=o(R,p,T),P===null?C=R:P.sibling=R,P=R);return e&&b.forEach(function(re){return t(v,re)}),X&&Mn(v,T),C}function w(v,p,h,S){var C=Gr(h);if(typeof C!="function")throw Error(L(150));if(h=C.call(h),h==null)throw Error(L(151));for(var P=C=null,b=p,T=p=0,R=null,z=h.next();b!==null&&!z.done;T++,z=h.next()){b.index>T?(R=b,b=null):R=b.sibling;var re=m(v,b,z.value,S);if(re===null){b===null&&(b=R);break}e&&b&&re.alternate===null&&t(v,b),p=o(re,p,T),P===null?C=re:P.sibling=re,P=re,b=R}if(z.done)return n(v,b),X&&Mn(v,T),C;if(b===null){for(;!z.done;T++,z=h.next())z=d(v,z.value,S),z!==null&&(p=o(z,p,T),P===null?C=z:P.sibling=z,P=z);return X&&Mn(v,T),C}for(b=r(v,b);!z.done;T++,z=h.next())z=g(b,v,T,z.value,S),z!==null&&(e&&z.alternate!==null&&b.delete(z.key===null?T:z.key),p=o(z,p,T),P===null?C=z:P.sibling=z,P=z);return e&&b.forEach(function(de){return t(v,de)}),X&&Mn(v,T),C}function k(v,p,h,S){if(typeof h=="object"&&h!==null&&h.type===ir&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case go:e:{for(var C=h.key,P=p;P!==null;){if(P.key===C){if(C=h.type,C===ir){if(P.tag===7){n(v,P.sibling),p=i(P,h.props.children),p.return=v,v=p;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zt&&hf(C)===P.type){n(v,P.sibling),p=i(P,h.props),p.ref=Zr(v,P,h),p.return=v,v=p;break e}n(v,P);break}else t(v,P);P=P.sibling}h.type===ir?(p=$n(h.props.children,v.mode,S,h.key),p.return=v,v=p):(S=fa(h.type,h.key,h.props,null,v.mode,S),S.ref=Zr(v,p,h),S.return=v,v=S)}return a(v);case rr:e:{for(P=h.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(v,p.sibling),p=i(p,h.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else t(v,p);p=p.sibling}p=ml(h,v.mode,S),p.return=v,v=p}return a(v);case Zt:return P=h._init,k(v,p,P(h._payload),S)}if(ui(h))return x(v,p,h,S);if(Gr(h))return w(v,p,h,S);To(v,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,h),p.return=v,v=p):(n(v,p),p=fl(h,v.mode,S),p.return=v,v=p),a(v)):n(v,p)}return k}var Ar=Oh(!0),Bh=Oh(!1),za=Cn(null),Va=null,fr=null,Au=null;function Mu(){Au=fr=Va=null}function Fu(e){var t=za.current;Q(za),e._currentValue=t}function vc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cr(e,t){Va=e,Au=fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Au!==e)if(e={context:e,memoizedValue:t,next:null},fr===null){if(Va===null)throw Error(L(308));fr=e,Va.dependencies={lanes:0,firstContext:e}}else fr=fr.next=e;return t}var Nn=null;function Ru(e){Nn===null?Nn=[e]:Nn.push(e)}function _h(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ru(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $h(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ot(e,n)}return i=r.interleaved,i===null?(t.next=t,Ru(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ot(e,n)}function aa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yu(e,n)}}function gf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Da(e,t,n,r){var i=e.updateQueue;qt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;a=0,f=u=l=null,s=o;do{var m=s.lane,g=s.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(m=t,g=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){d=x.call(g,d,m);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,m=typeof x=="function"?x.call(g,d,m):x,m==null)break e;d=ne({},d,m);break e;case 2:qt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else g={eventTime:g,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=g,l=d):f=f.next=g,a|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Gn|=a,e.lanes=a,e.memoizedState=d}}function vf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var ao={},Ct=Cn(ao),ji=Cn(ao),Ui=Cn(ao);function In(e){if(e===ao)throw Error(L(174));return e}function Vu(e,t){switch(W(Ui,t),W(ji,e),W(Ct,ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zl(t,e)}Q(Ct),W(Ct,t)}function Mr(){Q(Ct),Q(ji),Q(Ui)}function jh(e){In(Ui.current);var t=In(Ct.current),n=Zl(t,e.type);t!==n&&(W(ji,e),W(Ct,n))}function Du(e){ji.current===e&&(Q(Ct),Q(ji))}var q=Cn(0);function Na(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=[];function Nu(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var sa=$t.ReactCurrentDispatcher,sl=$t.ReactCurrentBatchConfig,Wn=0,ee=null,me=null,he=null,Ia=!1,Si=!1,Hi=0,Ky=0;function be(){throw Error(L(321))}function Iu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Ou(e,t,n,r,i,o){if(Wn=o,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,sa.current=e===null||e.memoizedState===null?Zy:qy,e=n(r,i),Si){o=0;do{if(Si=!1,Hi=0,25<=o)throw Error(L(301));o+=1,he=me=null,t.updateQueue=null,sa.current=Jy,e=n(r,i)}while(Si)}if(sa.current=Oa,t=me!==null&&me.next!==null,Wn=0,he=me=ee=null,Ia=!1,t)throw Error(L(300));return e}function Bu(){var e=Hi!==0;return Hi=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ee.memoizedState=he=e:he=he.next=e,he}function ot(){if(me===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=he===null?ee.memoizedState:he.next;if(t!==null)he=t,me=e;else{if(e===null)throw Error(L(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},he===null?ee.memoizedState=he=e:he=he.next=e}return he}function Wi(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=ot(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=me,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var f=u.lane;if((Wn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,ee.lanes|=f,Gn|=f}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,gt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ee.lanes|=o,Gn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=ot(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);gt(o,t.memoizedState)||(Oe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uh(){}function Hh(e,t){var n=ee,r=ot(),i=t(),o=!gt(r.memoizedState,i);if(o&&(r.memoizedState=i,Oe=!0),r=r.queue,_u(Kh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Gi(9,Gh.bind(null,n,r,i,t),void 0,null),ye===null)throw Error(L(349));Wn&30||Wh(n,t,i)}return i}function Wh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gh(e,t,n,r){t.value=n,t.getSnapshot=r,Yh(t)&&Qh(e)}function Kh(e,t,n){return n(function(){Yh(t)&&Qh(e)})}function Yh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function Qh(e){var t=Ot(e,1);t!==null&&pt(t,e,1,-1)}function yf(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t.queue=e,e=e.dispatch=Xy.bind(null,ee,e),[t.memoizedState,e]}function Gi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xh(){return ot().memoizedState}function la(e,t,n,r){var i=wt();ee.flags|=e,i.memoizedState=Gi(1|t,n,void 0,r===void 0?null:r)}function fs(e,t,n,r){var i=ot();r=r===void 0?null:r;var o=void 0;if(me!==null){var a=me.memoizedState;if(o=a.destroy,r!==null&&Iu(r,a.deps)){i.memoizedState=Gi(t,n,o,r);return}}ee.flags|=e,i.memoizedState=Gi(1|t,n,o,r)}function xf(e,t){return la(8390656,8,e,t)}function _u(e,t){return fs(2048,8,e,t)}function Zh(e,t){return fs(4,2,e,t)}function qh(e,t){return fs(4,4,e,t)}function Jh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function e0(e,t,n){return n=n!=null?n.concat([e]):null,fs(4,4,Jh.bind(null,t,e),n)}function $u(){}function t0(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Iu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function n0(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Iu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function r0(e,t,n){return Wn&21?(gt(n,t)||(n=lh(),ee.lanes|=n,Gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function Yy(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=sl.transition;sl.transition={};try{e(!1),t()}finally{H=n,sl.transition=r}}function i0(){return ot().memoizedState}function Qy(e,t,n){var r=fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o0(e))a0(t,n);else if(n=_h(e,t,n,r),n!==null){var i=ze();pt(n,e,r,i),s0(n,t,r)}}function Xy(e,t,n){var r=fn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o0(e))a0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,gt(s,a)){var l=t.interleaved;l===null?(i.next=i,Ru(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=_h(e,t,i,r),n!==null&&(i=ze(),pt(n,e,r,i),s0(n,t,r))}}function o0(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function a0(e,t){Si=Ia=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function s0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yu(e,n)}}var Oa={readContext:it,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},Zy={readContext:it,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:xf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,la(4194308,4,Jh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return la(4194308,4,e,t)},useInsertionEffect:function(e,t){return la(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qy.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:yf,useDebugValue:$u,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=yf(!1),t=e[0];return e=Yy.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,i=wt();if(X){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),ye===null)throw Error(L(349));Wn&30||Wh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,xf(Kh.bind(null,r,o,e),[e]),r.flags|=2048,Gi(9,Gh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=wt(),t=ye.identifierPrefix;if(X){var n=Ft,r=Mt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ky++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qy={readContext:it,useCallback:t0,useContext:it,useEffect:_u,useImperativeHandle:e0,useInsertionEffect:Zh,useLayoutEffect:qh,useMemo:n0,useReducer:ll,useRef:Xh,useState:function(){return ll(Wi)},useDebugValue:$u,useDeferredValue:function(e){var t=ot();return r0(t,me.memoizedState,e)},useTransition:function(){var e=ll(Wi)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Uh,useSyncExternalStore:Hh,useId:i0,unstable_isNewReconciler:!1},Jy={readContext:it,useCallback:t0,useContext:it,useEffect:_u,useImperativeHandle:e0,useInsertionEffect:Zh,useLayoutEffect:qh,useMemo:n0,useReducer:cl,useRef:Xh,useState:function(){return cl(Wi)},useDebugValue:$u,useDeferredValue:function(e){var t=ot();return me===null?t.memoizedState=e:r0(t,me.memoizedState,e)},useTransition:function(){var e=cl(Wi)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Uh,useSyncExternalStore:Hh,useId:i0,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function yc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ms={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),i=fn(e),o=zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=un(e,o,i),t!==null&&(pt(t,e,i,r),aa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),i=fn(e),o=zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=un(e,o,i),t!==null&&(pt(t,e,i,r),aa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=fn(e),i=zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=un(e,i,r),t!==null&&(pt(t,e,r,n),aa(t,e,r))}};function wf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Oi(n,r)||!Oi(i,o):!0}function l0(e,t,n){var r=!1,i=wn,o=t.contextType;return typeof o=="object"&&o!==null?o=it(o):(i=_e(t)?Un:Ae.current,r=t.contextTypes,o=(r=r!=null)?Tr(e,i):wn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ms,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ef(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ms.enqueueReplaceState(t,t.state,null)}function xc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},zu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=it(o):(o=_e(t)?Un:Ae.current,i.context=Tr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(yc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ms.enqueueReplaceState(i,i.state,null),Da(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,t){try{var n="",r=t;do n+=Tv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var e2=typeof WeakMap=="function"?WeakMap:Map;function c0(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_a||(_a=!0,Mc=r),wc(e,t)},n}function u0(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){wc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){wc(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Sf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new e2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=p2.bind(null,e,t,n),t.then(e,e))}function kf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var t2=$t.ReactCurrentOwner,Oe=!1;function Re(e,t,n,r){t.child=e===null?Bh(t,null,n,r):Ar(t,e.child,n,r)}function bf(e,t,n,r,i){n=n.render;var o=t.ref;return Cr(t,i),r=Ou(e,t,n,r,o,i),n=Bu(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(X&&n&&Pu(t),t.flags|=1,Re(e,t,r,i),t.child)}function Pf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Qu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,d0(e,t,o,r,i)):(e=fa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(a,r)&&e.ref===t.ref)return Bt(e,t,i)}return t.flags|=1,e=mn(o,r),e.ref=t.ref,e.return=t,t.child=e}function d0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Oi(o,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Bt(e,t,i)}return Ec(e,t,n,r,i)}function f0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(pr,Ue),Ue|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(pr,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(pr,Ue),Ue|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(pr,Ue),Ue|=r;return Re(e,t,i,n),t.child}function m0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ec(e,t,n,r,i){var o=_e(n)?Un:Ae.current;return o=Tr(t,o),Cr(t,i),n=Ou(e,t,n,r,o,i),r=Bu(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(X&&r&&Pu(t),t.flags|=1,Re(e,t,n,i),t.child)}function Tf(e,t,n,r,i){if(_e(n)){var o=!0;Ma(t)}else o=!1;if(Cr(t,i),t.stateNode===null)ca(e,t),l0(t,n,r),xc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=_e(n)?Un:Ae.current,u=Tr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Ef(t,a,r,u),qt=!1;var m=t.memoizedState;a.state=m,Da(t,r,a,i),l=t.memoizedState,s!==r||m!==l||Be.current||qt?(typeof f=="function"&&(yc(t,n,f,r),l=t.memoizedState),(s=qt||wf(t,n,s,r,m,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,$h(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ut(t.type,s),a.props=u,d=t.pendingProps,m=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=_e(n)?Un:Ae.current,l=Tr(t,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||m!==l)&&Ef(t,a,r,l),qt=!1,m=t.memoizedState,a.state=m,Da(t,r,a,i);var x=t.memoizedState;s!==d||m!==x||Be.current||qt?(typeof g=="function"&&(yc(t,n,g,r),x=t.memoizedState),(u=qt||wf(t,n,u,r,m,x,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Sc(e,t,n,r,o,i)}function Sc(e,t,n,r,i,o){m0(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&ff(t,n,!1),Bt(e,t,o);r=t.stateNode,t2.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ar(t,e.child,null,o),t.child=Ar(t,null,s,o)):Re(e,t,s,o),t.memoizedState=r.state,i&&ff(t,n,!0),t.child}function p0(e){var t=e.stateNode;t.pendingContext?df(e,t.pendingContext,t.pendingContext!==t.context):t.context&&df(e,t.context,!1),Vu(e,t.containerInfo)}function Lf(e,t,n,r,i){return Lr(),Lu(i),t.flags|=256,Re(e,t,n,r),t.child}var kc={dehydrated:null,treeContext:null,retryLane:0};function Cc(e){return{baseLanes:e,cachePool:null,transitions:null}}function h0(e,t,n){var r=t.pendingProps,i=q.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(q,i&1),e===null)return gc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=gs(a,r,0,null),e=$n(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Cc(n),t.memoizedState=kc,e):ju(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return n2(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=mn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=mn(s,o):(o=$n(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Cc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=kc,r}return o=e.child,e=o.sibling,r=mn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ju(e,t){return t=gs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lo(e,t,n,r){return r!==null&&Lu(r),Ar(t,e.child,null,n),e=ju(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function n2(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ul(Error(L(422))),Lo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=gs({mode:"visible",children:r.children},i,0,null),o=$n(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ar(t,e.child,null,a),t.child.memoizedState=Cc(a),t.memoizedState=kc,o);if(!(t.mode&1))return Lo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(L(419)),r=ul(o,r,void 0),Lo(e,t,a,r)}if(s=(a&e.childLanes)!==0,Oe||s){if(r=ye,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ot(e,i),pt(r,e,i,-1))}return Yu(),r=ul(Error(L(421))),Lo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=h2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,He=cn(i.nextSibling),We=t,X=!0,ft=null,e!==null&&(et[tt++]=Mt,et[tt++]=Ft,et[tt++]=Hn,Mt=e.id,Ft=e.overflow,Hn=t),t=ju(t,r.children),t.flags|=4096,t)}function Af(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vc(e.return,t,n)}function dl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function g0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Re(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Af(e,n,t);else if(e.tag===19)Af(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Na(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),dl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Na(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}dl(t,!0,n,null,o);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ca(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function r2(e,t,n){switch(t.tag){case 3:p0(t),Lr();break;case 5:jh(t);break;case 1:_e(t.type)&&Ma(t);break;case 4:Vu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(za,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?h0(e,t,n):(W(q,q.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);W(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return g0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,f0(e,t,n)}return Bt(e,t,n)}var v0,bc,y0,x0;v0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bc=function(){};y0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,In(Ct.current);var o=null;switch(n){case"input":i=Kl(e,i),r=Kl(e,r),o=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),o=[];break;case"textarea":i=Xl(e,i),r=Xl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=La)}ql(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};x0=function(e,t,n,r){n!==r&&(t.flags|=4)};function qr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i2(e,t,n){var r=t.pendingProps;switch(Tu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return _e(t.type)&&Aa(),Pe(t),null;case 3:return r=t.stateNode,Mr(),Q(Be),Q(Ae),Nu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(zc(ft),ft=null))),bc(e,t),Pe(t),null;case 5:Du(t);var i=In(Ui.current);if(n=t.type,e!==null&&t.stateNode!=null)y0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return Pe(t),null}if(e=In(Ct.current),Po(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[St]=t,r[$i]=o,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<fi.length;i++)K(fi[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Id(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":Bd(r,o),K("invalid",r)}ql(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&bo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&bo(r.textContent,s,e),i=["children",""+s]):Fi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&K("scroll",r)}switch(n){case"input":vo(r),Od(r,o,!0);break;case"textarea":vo(r),_d(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=La)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[St]=t,e[$i]=r,v0(e,t,!1,!1),t.stateNode=e;e:{switch(a=Jl(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<fi.length;i++)K(fi[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":Id(e,r),i=Kl(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),K("invalid",e);break;case"textarea":Bd(e,r),i=Xl(e,r),K("invalid",e);break;default:i=r}ql(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Xp(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Yp(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ri(e,l):typeof l=="number"&&Ri(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&K("scroll",e):l!=null&&fu(e,o,l,a))}switch(n){case"input":vo(e),Od(e,r,!1);break;case"textarea":vo(e),_d(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?wr(e,!!r.multiple,o,!1):r.defaultValue!=null&&wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=La)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)x0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=In(Ui.current),In(Ct.current),Po(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(o=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Pe(t),null;case 13:if(Q(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&He!==null&&t.mode&1&&!(t.flags&128))Ih(),Lr(),t.flags|=98560,o=!1;else if(o=Po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[St]=t}else Lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),o=!1}else ft!==null&&(zc(ft),ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?pe===0&&(pe=3):Yu())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return Mr(),bc(e,t),e===null&&Bi(t.stateNode.containerInfo),Pe(t),null;case 10:return Fu(t.type._context),Pe(t),null;case 17:return _e(t.type)&&Aa(),Pe(t),null;case 19:if(Q(q),o=t.memoizedState,o===null)return Pe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)qr(o,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Na(e),a!==null){for(t.flags|=128,qr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(q,q.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>Rr&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Na(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!X)return Pe(t),null}else 2*ae()-o.renderingStartTime>Rr&&n!==1073741824&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,n=q.current,W(q,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return Ku(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function o2(e,t){switch(Tu(t),t.tag){case 1:return _e(t.type)&&Aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mr(),Q(Be),Q(Ae),Nu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Du(t),null;case 13:if(Q(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(q),null;case 4:return Mr(),null;case 10:return Fu(t.type._context),null;case 22:case 23:return Ku(),null;case 24:return null;default:return null}}var Ao=!1,Le=!1,a2=typeof WeakSet=="function"?WeakSet:Set,M=null;function mr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Pc(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Mf=!1;function s2(e,t){if(cc=ba,e=Ch(),bu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(s=a+i),d!==o||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(g=d.firstChild)!==null;)m=d,d=g;for(;;){if(d===e)break t;if(m===n&&++u===i&&(s=a),m===o&&++f===r&&(l=a),(g=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uc={focusedElem:e,selectionRange:n},ba=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,k=x.memoizedState,v=t.stateNode,p=v.getSnapshotBeforeUpdate(t.elementType===t.type?w:ut(t.type,w),k);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(S){ie(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return x=Mf,Mf=!1,x}function ki(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Pc(t,n,o)}i=i.next}while(i!==r)}}function ps(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function w0(e){var t=e.alternate;t!==null&&(e.alternate=null,w0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[$i],delete t[mc],delete t[Uy],delete t[Hy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function E0(e){return e.tag===5||e.tag===3||e.tag===4}function Ff(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||E0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=La));else if(r!==4&&(e=e.child,e!==null))for(Lc(e,t,n),e=e.sibling;e!==null;)Lc(e,t,n),e=e.sibling}function Ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}var Ee=null,dt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)S0(e,t,n),n=n.sibling}function S0(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(as,n)}catch{}switch(n.tag){case 5:Le||mr(n,t);case 6:var r=Ee,i=dt;Ee=null,Gt(e,t,n),Ee=r,dt=i,Ee!==null&&(dt?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(dt?(e=Ee,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),Ni(e)):il(Ee,n.stateNode));break;case 4:r=Ee,i=dt,Ee=n.stateNode.containerInfo,dt=!0,Gt(e,t,n),Ee=r,dt=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Pc(n,t,a),i=i.next}while(i!==r)}Gt(e,t,n);break;case 1:if(!Le&&(mr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ie(n,t,s)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Gt(e,t,n),Le=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function Rf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new a2),t.forEach(function(r){var i=g2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ee=s.stateNode,dt=!1;break e;case 3:Ee=s.stateNode.containerInfo,dt=!0;break e;case 4:Ee=s.stateNode.containerInfo,dt=!0;break e}s=s.return}if(Ee===null)throw Error(L(160));S0(o,a,i),Ee=null,dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)k0(t,e),t=t.sibling}function k0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),xt(e),r&4){try{ki(3,e,e.return),ps(3,e)}catch(w){ie(e,e.return,w)}try{ki(5,e,e.return)}catch(w){ie(e,e.return,w)}}break;case 1:ct(t,e),xt(e),r&512&&n!==null&&mr(n,n.return);break;case 5:if(ct(t,e),xt(e),r&512&&n!==null&&mr(n,n.return),e.flags&32){var i=e.stateNode;try{Ri(i,"")}catch(w){ie(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Wp(i,o),Jl(s,a);var u=Jl(s,o);for(a=0;a<l.length;a+=2){var f=l[a],d=l[a+1];f==="style"?Xp(i,d):f==="dangerouslySetInnerHTML"?Yp(i,d):f==="children"?Ri(i,d):fu(i,f,d,u)}switch(s){case"input":Yl(i,o);break;case"textarea":Gp(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?wr(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?wr(i,!!o.multiple,o.defaultValue,!0):wr(i,!!o.multiple,o.multiple?[]:"",!1))}i[$i]=o}catch(w){ie(e,e.return,w)}}break;case 6:if(ct(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ie(e,e.return,w)}}break;case 3:if(ct(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ni(t.containerInfo)}catch(w){ie(e,e.return,w)}break;case 4:ct(t,e),xt(e);break;case 13:ct(t,e),xt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Wu=ae())),r&4&&Rf(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(u=Le)||f,ct(t,e),Le=u):ct(t,e),xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(M=e,f=e.child;f!==null;){for(d=M=f;M!==null;){switch(m=M,g=m.child,m.tag){case 0:case 11:case 14:case 15:ki(4,m,m.return);break;case 1:mr(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){ie(r,n,w)}}break;case 5:mr(m,m.return);break;case 22:if(m.memoizedState!==null){Vf(d);continue}}g!==null?(g.return=m,M=g):Vf(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Qp("display",a))}catch(w){ie(e,e.return,w)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ie(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ct(t,e),xt(e),r&4&&Rf(e);break;case 21:break;default:ct(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(E0(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ri(i,""),r.flags&=-33);var o=Ff(e);Ac(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Ff(e);Lc(e,s,a);break;default:throw Error(L(161))}}catch(l){ie(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function l2(e,t,n){M=e,C0(e)}function C0(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ao;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Le;s=Ao;var u=Le;if(Ao=a,(Le=l)&&!u)for(M=i;M!==null;)a=M,l=a.child,a.tag===22&&a.memoizedState!==null?Df(i):l!==null?(l.return=a,M=l):Df(i);for(;o!==null;)M=o,C0(o),o=o.sibling;M=i,Ao=s,Le=u}zf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,M=o):zf(e)}}function zf(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||ps(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&vf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ni(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Le||t.flags&512&&Tc(t)}catch(m){ie(t,t.return,m)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Vf(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Df(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ps(4,t)}catch(l){ie(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ie(t,i,l)}}var o=t.return;try{Tc(t)}catch(l){ie(t,o,l)}break;case 5:var a=t.return;try{Tc(t)}catch(l){ie(t,a,l)}}}catch(l){ie(t,t.return,l)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var c2=Math.ceil,Ba=$t.ReactCurrentDispatcher,Uu=$t.ReactCurrentOwner,rt=$t.ReactCurrentBatchConfig,j=0,ye=null,ue=null,Se=0,Ue=0,pr=Cn(0),pe=0,Ki=null,Gn=0,hs=0,Hu=0,Ci=null,Ie=null,Wu=0,Rr=1/0,Tt=null,_a=!1,Mc=null,dn=null,Mo=!1,rn=null,$a=0,bi=0,Fc=null,ua=-1,da=0;function ze(){return j&6?ae():ua!==-1?ua:ua=ae()}function fn(e){return e.mode&1?j&2&&Se!==0?Se&-Se:Gy.transition!==null?(da===0&&(da=lh()),da):(e=H,e!==0||(e=window.event,e=e===void 0?16:hh(e.type)),e):1}function pt(e,t,n,r){if(50<bi)throw bi=0,Fc=null,Error(L(185));ro(e,n,r),(!(j&2)||e!==ye)&&(e===ye&&(!(j&2)&&(hs|=n),pe===4&&tn(e,Se)),$e(e,r),n===1&&j===0&&!(t.mode&1)&&(Rr=ae()+500,ds&&bn()))}function $e(e,t){var n=e.callbackNode;Gv(e,t);var r=Ca(e,e===ye?Se:0);if(r===0)n!==null&&Ud(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ud(n),t===1)e.tag===0?Wy(Nf.bind(null,e)):Vh(Nf.bind(null,e)),$y(function(){!(j&6)&&bn()}),n=null;else{switch(ch(r)){case 1:n=vu;break;case 4:n=ah;break;case 16:n=ka;break;case 536870912:n=sh;break;default:n=ka}n=R0(n,b0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function b0(e,t){if(ua=-1,da=0,j&6)throw Error(L(327));var n=e.callbackNode;if(br()&&e.callbackNode!==n)return null;var r=Ca(e,e===ye?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ja(e,r);else{t=r;var i=j;j|=2;var o=T0();(ye!==e||Se!==t)&&(Tt=null,Rr=ae()+500,_n(e,t));do try{f2();break}catch(s){P0(e,s)}while(1);Mu(),Ba.current=o,j=i,ue!==null?t=0:(ye=null,Se=0,t=pe)}if(t!==0){if(t===2&&(i=ic(e),i!==0&&(r=i,t=Rc(e,i))),t===1)throw n=Ki,_n(e,0),tn(e,r),$e(e,ae()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!u2(i)&&(t=ja(e,r),t===2&&(o=ic(e),o!==0&&(r=o,t=Rc(e,o))),t===1))throw n=Ki,_n(e,0),tn(e,r),$e(e,ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:Fn(e,Ie,Tt);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=Wu+500-ae(),10<t)){if(Ca(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=fc(Fn.bind(null,e,Ie,Tt),t);break}Fn(e,Ie,Tt);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-mt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*c2(r/1960))-r,10<r){e.timeoutHandle=fc(Fn.bind(null,e,Ie,Tt),r);break}Fn(e,Ie,Tt);break;case 5:Fn(e,Ie,Tt);break;default:throw Error(L(329))}}}return $e(e,ae()),e.callbackNode===n?b0.bind(null,e):null}function Rc(e,t){var n=Ci;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=ja(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&zc(t)),e}function zc(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function u2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~Hu,t&=~hs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function Nf(e){if(j&6)throw Error(L(327));br();var t=Ca(e,0);if(!(t&1))return $e(e,ae()),null;var n=ja(e,t);if(e.tag!==0&&n===2){var r=ic(e);r!==0&&(t=r,n=Rc(e,r))}if(n===1)throw n=Ki,_n(e,0),tn(e,t),$e(e,ae()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,Ie,Tt),$e(e,ae()),null}function Gu(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(Rr=ae()+500,ds&&bn())}}function Kn(e){rn!==null&&rn.tag===0&&!(j&6)&&br();var t=j;j|=1;var n=rt.transition,r=H;try{if(rt.transition=null,H=1,e)return e()}finally{H=r,rt.transition=n,j=t,!(j&6)&&bn()}}function Ku(){Ue=pr.current,Q(pr)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_y(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(Tu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Aa();break;case 3:Mr(),Q(Be),Q(Ae),Nu();break;case 5:Du(r);break;case 4:Mr();break;case 13:Q(q);break;case 19:Q(q);break;case 10:Fu(r.type._context);break;case 22:case 23:Ku()}n=n.return}if(ye=e,ue=e=mn(e.current,null),Se=Ue=t,pe=0,Ki=null,Hu=hs=Gn=0,Ie=Ci=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Nn=null}return e}function P0(e,t){do{var n=ue;try{if(Mu(),sa.current=Oa,Ia){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ia=!1}if(Wn=0,he=me=ee=null,Si=!1,Hi=0,Uu.current=null,n===null||n.return===null){pe=1,Ki=t,ue=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Se,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=kf(a);if(g!==null){g.flags&=-257,Cf(g,a,s,o,t),g.mode&1&&Sf(o,u,t),t=g,l=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(l),t.updateQueue=w}else x.add(l);break e}else{if(!(t&1)){Sf(o,u,t),Yu();break e}l=Error(L(426))}}else if(X&&s.mode&1){var k=kf(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Cf(k,a,s,o,t),Lu(Fr(l,s));break e}}o=l=Fr(l,s),pe!==4&&(pe=2),Ci===null?Ci=[o]:Ci.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=c0(o,l,t);gf(o,v);break e;case 1:s=l;var p=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(dn===null||!dn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=u0(o,s,t);gf(o,S);break e}}o=o.return}while(o!==null)}A0(n)}catch(C){t=C,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(1)}function T0(){var e=Ba.current;return Ba.current=Oa,e===null?Oa:e}function Yu(){(pe===0||pe===3||pe===2)&&(pe=4),ye===null||!(Gn&268435455)&&!(hs&268435455)||tn(ye,Se)}function ja(e,t){var n=j;j|=2;var r=T0();(ye!==e||Se!==t)&&(Tt=null,_n(e,t));do try{d2();break}catch(i){P0(e,i)}while(1);if(Mu(),j=n,Ba.current=r,ue!==null)throw Error(L(261));return ye=null,Se=0,pe}function d2(){for(;ue!==null;)L0(ue)}function f2(){for(;ue!==null&&!Iv();)L0(ue)}function L0(e){var t=F0(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?A0(e):ue=t,Uu.current=null}function A0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=o2(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ue=null;return}}else if(n=i2(n,t,Ue),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);pe===0&&(pe=5)}function Fn(e,t,n){var r=H,i=rt.transition;try{rt.transition=null,H=1,m2(e,t,n,r)}finally{rt.transition=i,H=r}return null}function m2(e,t,n,r){do br();while(rn!==null);if(j&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Kv(e,o),e===ye&&(ue=ye=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mo||(Mo=!0,R0(ka,function(){return br(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=rt.transition,rt.transition=null;var a=H;H=1;var s=j;j|=4,Uu.current=null,s2(e,n),k0(n,e),zy(uc),ba=!!cc,uc=cc=null,e.current=n,l2(n),Ov(),j=s,H=a,rt.transition=o}else e.current=n;if(Mo&&(Mo=!1,rn=e,$a=i),o=e.pendingLanes,o===0&&(dn=null),$v(n.stateNode),$e(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_a)throw _a=!1,e=Mc,Mc=null,e;return $a&1&&e.tag!==0&&br(),o=e.pendingLanes,o&1?e===Fc?bi++:(bi=0,Fc=e):bi=0,bn(),null}function br(){if(rn!==null){var e=ch($a),t=rt.transition,n=H;try{if(rt.transition=null,H=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,$a=0,j&6)throw Error(L(331));var i=j;for(j|=4,M=e.current;M!==null;){var o=M,a=o.child;if(M.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(M=u;M!==null;){var f=M;switch(f.tag){case 0:case 11:case 15:ki(8,f,o)}var d=f.child;if(d!==null)d.return=f,M=d;else for(;M!==null;){f=M;var m=f.sibling,g=f.return;if(w0(f),f===u){M=null;break}if(m!==null){m.return=g,M=m;break}M=g}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}M=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,M=a;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ki(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,M=v;break e}M=o.return}}var p=e.current;for(M=p;M!==null;){a=M;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,M=h;else e:for(a=p;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ps(9,s)}}catch(C){ie(s,s.return,C)}if(s===a){M=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,M=S;break e}M=s.return}}if(j=i,bn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(as,e)}catch{}r=!0}return r}finally{H=n,rt.transition=t}}return!1}function If(e,t,n){t=Fr(n,t),t=c0(e,t,1),e=un(e,t,1),t=ze(),e!==null&&(ro(e,1,t),$e(e,t))}function ie(e,t,n){if(e.tag===3)If(e,e,n);else for(;t!==null;){if(t.tag===3){If(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=Fr(n,e),e=u0(t,e,1),t=un(t,e,1),e=ze(),t!==null&&(ro(t,1,e),$e(t,e));break}}t=t.return}}function p2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(Se&n)===n&&(pe===4||pe===3&&(Se&130023424)===Se&&500>ae()-Wu?_n(e,0):Hu|=n),$e(e,t)}function M0(e,t){t===0&&(e.mode&1?(t=wo,wo<<=1,!(wo&130023424)&&(wo=4194304)):t=1);var n=ze();e=Ot(e,t),e!==null&&(ro(e,t,n),$e(e,n))}function h2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),M0(e,n)}function g2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),M0(e,n)}var F0;F0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,r2(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,X&&t.flags&1048576&&Dh(t,Ra,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ca(e,t),e=t.pendingProps;var i=Tr(t,Ae.current);Cr(t,n),i=Ou(null,t,r,e,i,n);var o=Bu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,Ma(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zu(t),i.updater=ms,t.stateNode=i,i._reactInternals=t,xc(t,r,e,n),t=Sc(null,t,r,!0,o,n)):(t.tag=0,X&&o&&Pu(t),Re(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ca(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=y2(r),e=ut(r,e),i){case 0:t=Ec(null,t,r,e,n);break e;case 1:t=Tf(null,t,r,e,n);break e;case 11:t=bf(null,t,r,e,n);break e;case 14:t=Pf(null,t,r,ut(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Ec(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Tf(e,t,r,i,n);case 3:e:{if(p0(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,i=o.element,$h(e,t),Da(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Fr(Error(L(423)),t),t=Lf(e,t,r,n,i);break e}else if(r!==i){i=Fr(Error(L(424)),t),t=Lf(e,t,r,n,i);break e}else for(He=cn(t.stateNode.containerInfo.firstChild),We=t,X=!0,ft=null,n=Bh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lr(),r===i){t=Bt(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return jh(t),e===null&&gc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,dc(r,i)?a=null:o!==null&&dc(r,o)&&(t.flags|=32),m0(e,t),Re(e,t,a,n),t.child;case 6:return e===null&&gc(t),null;case 13:return h0(e,t,n);case 4:return Vu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),bf(e,t,r,i,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,W(za,r._currentValue),r._currentValue=a,o!==null)if(gt(o.value,a)){if(o.children===i.children&&!Be.current){t=Bt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=zt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),vc(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(L(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),vc(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Re(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Cr(t,n),i=it(i),r=r(i),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),Pf(e,t,r,i,n);case 15:return d0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),ca(e,t),t.tag=1,_e(r)?(e=!0,Ma(t)):e=!1,Cr(t,n),l0(t,r,i),xc(t,r,i,n),Sc(null,t,r,!0,e,n);case 19:return g0(e,t,n);case 22:return f0(e,t,n)}throw Error(L(156,t.tag))};function R0(e,t){return oh(e,t)}function v2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new v2(e,t,n,r)}function Qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y2(e){if(typeof e=="function")return Qu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pu)return 11;if(e===hu)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fa(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Qu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ir:return $n(n.children,i,o,t);case mu:a=8,i|=8;break;case Ul:return e=nt(12,n,t,i|2),e.elementType=Ul,e.lanes=o,e;case Hl:return e=nt(13,n,t,i),e.elementType=Hl,e.lanes=o,e;case Wl:return e=nt(19,n,t,i),e.elementType=Wl,e.lanes=o,e;case jp:return gs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _p:a=10;break e;case $p:a=9;break e;case pu:a=11;break e;case hu:a=14;break e;case Zt:a=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=nt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function $n(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function gs(e,t,n,r){return e=nt(22,e,r,t),e.elementType=jp,e.lanes=n,e.stateNode={isHidden:!1},e}function fl(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function ml(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function x2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ks(0),this.expirationTimes=Ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xu(e,t,n,r,i,o,a,s,l){return e=new x2(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=nt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zu(o),e}function w2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function z0(e){if(!e)return wn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(_e(n))return zh(e,n,t)}return t}function V0(e,t,n,r,i,o,a,s,l){return e=Xu(n,r,!0,e,i,o,a,s,l),e.context=z0(null),n=e.current,r=ze(),i=fn(n),o=zt(r,i),o.callback=t??null,un(n,o,i),e.current.lanes=i,ro(e,i,r),$e(e,r),e}function vs(e,t,n,r){var i=t.current,o=ze(),a=fn(i);return n=z0(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(i,t,a),e!==null&&(pt(e,i,a,o),aa(e,i,a)),a}function Ua(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Of(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zu(e,t){Of(e,t),(e=e.alternate)&&Of(e,t)}function E2(){return null}var D0=typeof reportError=="function"?reportError:function(e){console.error(e)};function qu(e){this._internalRoot=e}ys.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));vs(e,t,null,null)};ys.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kn(function(){vs(null,e,null,null)}),t[It]=null}};function ys(e){this._internalRoot=e}ys.prototype.unstable_scheduleHydration=function(e){if(e){var t=fh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&ph(e)}};function Ju(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bf(){}function S2(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ua(a);o.call(u)}}var a=V0(t,r,e,0,null,!1,!1,"",Bf);return e._reactRootContainer=a,e[It]=a.current,Bi(e.nodeType===8?e.parentNode:e),Kn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Ua(l);s.call(u)}}var l=Xu(e,0,!1,null,null,!1,!1,"",Bf);return e._reactRootContainer=l,e[It]=l.current,Bi(e.nodeType===8?e.parentNode:e),Kn(function(){vs(t,l,n,r)}),l}function ws(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Ua(a);s.call(l)}}vs(t,a,e,i)}else a=S2(n,t,e,i,r);return Ua(a)}uh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=di(t.pendingLanes);n!==0&&(yu(t,n|1),$e(t,ae()),!(j&6)&&(Rr=ae()+500,bn()))}break;case 13:Kn(function(){var r=Ot(e,1);if(r!==null){var i=ze();pt(r,e,1,i)}}),Zu(e,1)}};xu=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=ze();pt(t,e,134217728,n)}Zu(e,134217728)}};dh=function(e){if(e.tag===13){var t=fn(e),n=Ot(e,t);if(n!==null){var r=ze();pt(n,e,t,r)}Zu(e,t)}};fh=function(){return H};mh=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};tc=function(e,t,n){switch(t){case"input":if(Yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=us(r);if(!i)throw Error(L(90));Hp(r),Yl(r,i)}}}break;case"textarea":Gp(e,n);break;case"select":t=n.value,t!=null&&wr(e,!!n.multiple,t,!1)}};Jp=Gu;eh=Kn;var k2={usingClientEntryPoint:!1,Events:[oo,lr,us,Zp,qp,Gu]},Jr={findFiberByHostInstance:Dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C2={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rh(e),e===null?null:e.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||E2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{as=Fo.inject(C2),kt=Fo}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k2;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ju(t))throw Error(L(200));return w2(e,t,null,n)};Ye.createRoot=function(e,t){if(!Ju(e))throw Error(L(299));var n=!1,r="",i=D0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xu(e,1,!1,null,null,n,!1,r,i),e[It]=t.current,Bi(e.nodeType===8?e.parentNode:e),new qu(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=rh(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Kn(e)};Ye.hydrate=function(e,t,n){if(!xs(t))throw Error(L(200));return ws(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!Ju(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=D0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=V0(t,null,e,1,n??null,i,!1,o,a),e[It]=t.current,Bi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ys(t)};Ye.render=function(e,t,n){if(!xs(t))throw Error(L(200));return ws(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!xs(e))throw Error(L(40));return e._reactRootContainer?(Kn(function(){ws(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1};Ye.unstable_batchedUpdates=Gu;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xs(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return ws(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function N0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N0)}catch(e){console.error(e)}}N0(),Np.exports=Ye;var b2=Np.exports,_f=b2;$l.createRoot=_f.createRoot,$l.hydrateRoot=_f.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yi(){return Yi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yi.apply(this,arguments)}var on;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(on||(on={}));const $f="popstate";function P2(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return Vc("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ha(i)}return L2(t,n,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function I0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function T2(){return Math.random().toString(36).substr(2,8)}function jf(e,t){return{usr:e.state,key:e.key,idx:t}}function Vc(e,t,n,r){return n===void 0&&(n=null),Yi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ur(t):t,{state:n,key:t&&t.key||r||T2()})}function Ha(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ur(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function L2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=on.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(Yi({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function d(){s=on.Pop;let k=f(),v=k==null?null:k-u;u=k,l&&l({action:s,location:w.location,delta:v})}function m(k,v){s=on.Push;let p=Vc(w.location,k,v);n&&n(p,k),u=f()+1;let h=jf(p,u),S=w.createHref(p);try{a.pushState(h,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(S)}o&&l&&l({action:s,location:w.location,delta:1})}function g(k,v){s=on.Replace;let p=Vc(w.location,k,v);n&&n(p,k),u=f();let h=jf(p,u),S=w.createHref(p);a.replaceState(h,"",S),o&&l&&l({action:s,location:w.location,delta:0})}function x(k){let v=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof k=="string"?k:Ha(k);return p=p.replace(/ $/,"%20"),te(v,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,v)}let w={get action(){return s},get location(){return e(i,a)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener($f,d),l=k,()=>{i.removeEventListener($f,d),l=null}},createHref(k){return t(i,k)},createURL:x,encodeLocation(k){let v=x(k);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:g,go(k){return a.go(k)}};return w}var Uf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Uf||(Uf={}));function A2(e,t,n){return n===void 0&&(n="/"),M2(e,t,n,!1)}function M2(e,t,n,r){let i=typeof t=="string"?Ur(t):t,o=zr(i.pathname||"/",n);if(o==null)return null;let a=O0(e);F2(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=j2(o);s=_2(a[l],u,r)}return s}function O0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=pn([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),O0(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:O2(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of B0(o.path))i(o,a,l)}),t}function B0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=B0(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function F2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:B2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const R2=/^:[\w-]+$/,z2=3,V2=2,D2=1,N2=10,I2=-2,Hf=e=>e==="*";function O2(e,t){let n=e.split("/"),r=n.length;return n.some(Hf)&&(r+=I2),t&&(r+=V2),n.filter(i=>!Hf(i)).reduce((i,o)=>i+(R2.test(o)?z2:o===""?D2:N2),r)}function B2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function _2(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=Wa({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),m=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Wa({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),a.push({params:i,pathname:pn([o,d.pathname]),pathnameBase:G2(pn([o,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(o=pn([o,d.pathnameBase]))}return a}function Wa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=$2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:m,isOptional:g}=f;if(m==="*"){let w=s[d]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[d];return g&&!x?u[m]=void 0:u[m]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function $2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),I0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function j2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return I0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function zr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function U2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ur(e):e;return{pathname:n?n.startsWith("/")?n:H2(n,t):t,search:K2(r),hash:Y2(i)}}function H2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function W2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ed(e,t){let n=W2(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function td(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ur(e):(i=Yi({},e),te(!i.pathname||!i.pathname.includes("?"),pl("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),pl("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),pl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}s=d>=0?t[d]:"/"}let l=U2(i,s),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const pn=e=>e.join("/").replace(/\/\/+/g,"/"),G2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),K2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Y2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Q2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _0=["post","put","patch","delete"];new Set(_0);const X2=["get",..._0];new Set(X2);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qi(){return Qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qi.apply(this,arguments)}const Es=E.createContext(null),$0=E.createContext(null),jt=E.createContext(null),Ss=E.createContext(null),Ut=E.createContext({outlet:null,matches:[],isDataRoute:!1}),j0=E.createContext(null);function Z2(e,t){let{relative:n}=t===void 0?{}:t;Hr()||te(!1);let{basename:r,navigator:i}=E.useContext(jt),{hash:o,pathname:a,search:s}=ks(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:pn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function Hr(){return E.useContext(Ss)!=null}function Ht(){return Hr()||te(!1),E.useContext(Ss).location}function U0(e){E.useContext(jt).static||E.useLayoutEffect(e)}function so(){let{isDataRoute:e}=E.useContext(Ut);return e?u4():q2()}function q2(){Hr()||te(!1);let e=E.useContext(Es),{basename:t,future:n,navigator:r}=E.useContext(jt),{matches:i}=E.useContext(Ut),{pathname:o}=Ht(),a=JSON.stringify(ed(i,n.v7_relativeSplatPath)),s=E.useRef(!1);return U0(()=>{s.current=!0}),E.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let d=td(u,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:pn([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,a,o,e])}function H0(){let{matches:e}=E.useContext(Ut),t=e[e.length-1];return t?t.params:{}}function ks(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(jt),{matches:i}=E.useContext(Ut),{pathname:o}=Ht(),a=JSON.stringify(ed(i,r.v7_relativeSplatPath));return E.useMemo(()=>td(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function J2(e,t){return e4(e,t)}function e4(e,t,n,r){Hr()||te(!1);let{navigator:i}=E.useContext(jt),{matches:o}=E.useContext(Ut),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Ht(),f;if(t){var d;let k=typeof t=="string"?Ur(t):t;l==="/"||(d=k.pathname)!=null&&d.startsWith(l)||te(!1),f=k}else f=u;let m=f.pathname||"/",g=m;if(l!=="/"){let k=l.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=A2(e,{pathname:g}),w=o4(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:pn([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:pn([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,n,r);return t&&w?E.createElement(Ss.Provider,{value:{location:Qi({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:on.Pop}},w):w}function t4(){let e=c4(),t=Q2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,o)}const n4=E.createElement(t4,null);class r4 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(Ut.Provider,{value:this.props.routeContext},E.createElement(j0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function i4(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Es);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Ut.Provider,{value:t},r)}function o4(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let f=a.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);f>=0||te(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let d=a[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:m,errors:g}=n,x=d.route.loader&&m[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||x){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,d,m)=>{let g,x=!1,w=null,k=null;n&&(g=s&&d.route.id?s[d.route.id]:void 0,w=d.route.errorElement||n4,l&&(u<0&&m===0?(d4("route-fallback",!1),x=!0,k=null):u===m&&(x=!0,k=d.route.hydrateFallbackElement||null)));let v=t.concat(a.slice(0,m+1)),p=()=>{let h;return g?h=w:x?h=k:d.route.Component?h=E.createElement(d.route.Component,null):d.route.element?h=d.route.element:h=f,E.createElement(i4,{match:d,routeContext:{outlet:f,matches:v,isDataRoute:n!=null},children:h})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?E.createElement(r4,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:p(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):p()},null)}var W0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(W0||{}),Ga=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ga||{});function a4(e){let t=E.useContext(Es);return t||te(!1),t}function s4(e){let t=E.useContext($0);return t||te(!1),t}function l4(e){let t=E.useContext(Ut);return t||te(!1),t}function G0(e){let t=l4(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function c4(){var e;let t=E.useContext(j0),n=s4(Ga.UseRouteError),r=G0(Ga.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function u4(){let{router:e}=a4(W0.UseNavigateStable),t=G0(Ga.UseNavigateStable),n=E.useRef(!1);return U0(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Qi({fromRouteId:t},o)))},[e,t])}const Wf={};function d4(e,t,n){!t&&!Wf[e]&&(Wf[e]=!0)}function f4(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function K0(e){let{to:t,replace:n,state:r,relative:i}=e;Hr()||te(!1);let{future:o,static:a}=E.useContext(jt),{matches:s}=E.useContext(Ut),{pathname:l}=Ht(),u=so(),f=td(t,ed(s,o.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(f);return E.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function Me(e){te(!1)}function m4(e){let{basename:t="/",children:n=null,location:r,navigationType:i=on.Pop,navigator:o,static:a=!1,future:s}=e;Hr()&&te(!1);let l=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:o,static:a,future:Qi({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=Ur(r));let{pathname:f="/",search:d="",hash:m="",state:g=null,key:x="default"}=r,w=E.useMemo(()=>{let k=zr(f,l);return k==null?null:{location:{pathname:k,search:d,hash:m,state:g,key:x},navigationType:i}},[l,f,d,m,g,x,i]);return w==null?null:E.createElement(jt.Provider,{value:u},E.createElement(Ss.Provider,{children:n,value:w}))}function p4(e){let{children:t,location:n}=e;return J2(Dc(t),n)}new Promise(()=>{});function Dc(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Dc(r.props.children,o));return}r.type!==Me&&te(!1),!r.props.index||!r.props.children||te(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Dc(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ka(){return Ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ka.apply(this,arguments)}function Y0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function h4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function g4(e,t){return e.button===0&&(!t||t==="_self")&&!h4(e)}const v4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],y4=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],x4="6";try{window.__reactRouterVersion=x4}catch{}const w4=E.createContext({isTransitioning:!1}),E4="startTransition",Gf=wv[E4];function S4(e){let{basename:t,children:n,future:r,window:i}=e,o=E.useRef();o.current==null&&(o.current=P2({window:i,v5Compat:!0}));let a=o.current,[s,l]=E.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=E.useCallback(d=>{u&&Gf?Gf(()=>l(d)):l(d)},[l,u]);return E.useLayoutEffect(()=>a.listen(f),[a,f]),E.useEffect(()=>f4(r),[r]),E.createElement(m4,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const k4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",C4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:f,viewTransition:d}=t,m=Y0(t,v4),{basename:g}=E.useContext(jt),x,w=!1;if(typeof u=="string"&&C4.test(u)&&(x=u,k4))try{let h=new URL(window.location.href),S=u.startsWith("//")?new URL(h.protocol+u):new URL(u),C=zr(S.pathname,g);S.origin===h.origin&&C!=null?u=C+S.search+S.hash:w=!0}catch{}let k=Z2(u,{relative:i}),v=P4(u,{replace:a,state:s,target:l,preventScrollReset:f,relative:i,viewTransition:d});function p(h){r&&r(h),h.defaultPrevented||v(h)}return E.createElement("a",Ka({},m,{href:x||k,onClick:w||o?r:p,ref:n,target:l}))}),Q0=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,viewTransition:u,children:f}=t,d=Y0(t,y4),m=ks(l,{relative:d.relative}),g=Ht(),x=E.useContext($0),{navigator:w,basename:k}=E.useContext(jt),v=x!=null&&T4(m)&&u===!0,p=w.encodeLocation?w.encodeLocation(m).pathname:m.pathname,h=g.pathname,S=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(h=h.toLowerCase(),S=S?S.toLowerCase():null,p=p.toLowerCase()),S&&k&&(S=zr(S,k)||S);const C=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let P=h===p||!a&&h.startsWith(p)&&h.charAt(C)==="/",b=S!=null&&(S===p||!a&&S.startsWith(p)&&S.charAt(p.length)==="/"),T={isActive:P,isPending:b,isTransitioning:v},R=P?r:void 0,z;typeof o=="function"?z=o(T):z=[o,P?"active":null,b?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let re=typeof s=="function"?s(T):s;return E.createElement(xe,Ka({},d,{"aria-current":R,className:z,ref:n,style:re,to:l,viewTransition:u}),typeof f=="function"?f(T):f)});var Nc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Nc||(Nc={}));var Kf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Kf||(Kf={}));function b4(e){let t=E.useContext(Es);return t||te(!1),t}function P4(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:s}=t===void 0?{}:t,l=so(),u=Ht(),f=ks(e,{relative:a});return E.useCallback(d=>{if(g4(d,n)){d.preventDefault();let m=r!==void 0?r:Ha(u)===Ha(f);l(e,{replace:m,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[u,l,f,r,i,n,e,o,a,s])}function T4(e,t){t===void 0&&(t={});let n=E.useContext(w4);n==null&&te(!1);let{basename:r}=b4(Nc.useViewTransitionState),i=ks(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=zr(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=zr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Wa(i.pathname,a)!=null||Wa(i.pathname,o)!=null}var ve=function(){return ve=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ve.apply(this,arguments)};function Xi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Y="-ms-",Pi="-moz-",U="-webkit-",X0="comm",Cs="rule",nd="decl",L4="@import",Z0="@keyframes",A4="@layer",q0=Math.abs,rd=String.fromCharCode,Ic=Object.assign;function M4(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function J0(e){return e.trim()}function Lt(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function ma(e,t,n){return e.indexOf(t,n)}function ge(e,t){return e.charCodeAt(t)|0}function Vr(e,t,n){return e.slice(t,n)}function Et(e){return e.length}function e1(e){return e.length}function mi(e,t){return t.push(e),e}function F4(e,t){return e.map(t).join("")}function Yf(e,t){return e.filter(function(n){return!Lt(n,t)})}var bs=1,Dr=1,t1=0,at=0,ce=0,Wr="";function Ps(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:bs,column:Dr,length:a,return:"",siblings:s}}function Qt(e,t){return Ic(Ps("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function tr(e){for(;e.root;)e=Qt(e.root,{children:[e]});mi(e,e.siblings)}function R4(){return ce}function z4(){return ce=at>0?ge(Wr,--at):0,Dr--,ce===10&&(Dr=1,bs--),ce}function ht(){return ce=at<t1?ge(Wr,at++):0,Dr++,ce===10&&(Dr=1,bs++),ce}function jn(){return ge(Wr,at)}function pa(){return at}function Ts(e,t){return Vr(Wr,e,t)}function Oc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function V4(e){return bs=Dr=1,t1=Et(Wr=e),at=0,[]}function D4(e){return Wr="",e}function hl(e){return J0(Ts(at-1,Bc(e===91?e+2:e===40?e+1:e)))}function N4(e){for(;(ce=jn())&&ce<33;)ht();return Oc(e)>2||Oc(ce)>3?"":" "}function I4(e,t){for(;--t&&ht()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return Ts(e,pa()+(t<6&&jn()==32&&ht()==32))}function Bc(e){for(;ht();)switch(ce){case e:return at;case 34:case 39:e!==34&&e!==39&&Bc(ce);break;case 40:e===41&&Bc(e);break;case 92:ht();break}return at}function O4(e,t){for(;ht()&&e+ce!==47+10;)if(e+ce===42+42&&jn()===47)break;return"/*"+Ts(t,at-1)+"*"+rd(e===47?e:ht())}function B4(e){for(;!Oc(jn());)ht();return Ts(e,at)}function _4(e){return D4(ha("",null,null,null,[""],e=V4(e),0,[0],e))}function ha(e,t,n,r,i,o,a,s,l){for(var u=0,f=0,d=a,m=0,g=0,x=0,w=1,k=1,v=1,p=0,h="",S=i,C=o,P=r,b=h;k;)switch(x=p,p=ht()){case 40:if(x!=108&&ge(b,d-1)==58){ma(b+=O(hl(p),"&","&\f"),"&\f",q0(u?s[u-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:b+=hl(p);break;case 9:case 10:case 13:case 32:b+=N4(x);break;case 92:b+=I4(pa()-1,7);continue;case 47:switch(jn()){case 42:case 47:mi($4(O4(ht(),pa()),t,n,l),l);break;default:b+="/"}break;case 123*w:s[u++]=Et(b)*v;case 125*w:case 59:case 0:switch(p){case 0:case 125:k=0;case 59+f:v==-1&&(b=O(b,/\f/g,"")),g>0&&Et(b)-d&&mi(g>32?Xf(b+";",r,n,d-1,l):Xf(O(b," ","")+";",r,n,d-2,l),l);break;case 59:b+=";";default:if(mi(P=Qf(b,t,n,u,f,i,s,h,S=[],C=[],d,o),o),p===123)if(f===0)ha(b,t,P,P,S,o,d,s,C);else switch(m===99&&ge(b,3)===110?100:m){case 100:case 108:case 109:case 115:ha(e,P,P,r&&mi(Qf(e,P,P,0,0,i,s,h,i,S=[],d,C),C),i,C,d,s,r?S:C);break;default:ha(b,P,P,P,[""],C,0,s,C)}}u=f=g=0,w=v=1,h=b="",d=a;break;case 58:d=1+Et(b),g=x;default:if(w<1){if(p==123)--w;else if(p==125&&w++==0&&z4()==125)continue}switch(b+=rd(p),p*w){case 38:v=f>0?1:(b+="\f",-1);break;case 44:s[u++]=(Et(b)-1)*v,v=1;break;case 64:jn()===45&&(b+=hl(ht())),m=jn(),f=d=Et(h=b+=B4(pa())),p++;break;case 45:x===45&&Et(b)==2&&(w=0)}}return o}function Qf(e,t,n,r,i,o,a,s,l,u,f,d){for(var m=i-1,g=i===0?o:[""],x=e1(g),w=0,k=0,v=0;w<r;++w)for(var p=0,h=Vr(e,m+1,m=q0(k=a[w])),S=e;p<x;++p)(S=J0(k>0?g[p]+" "+h:O(h,/&\f/g,g[p])))&&(l[v++]=S);return Ps(e,t,n,i===0?Cs:s,l,u,f,d)}function $4(e,t,n,r){return Ps(e,t,n,X0,rd(R4()),Vr(e,2,-2),0,r)}function Xf(e,t,n,r,i){return Ps(e,t,n,nd,Vr(e,0,r),Vr(e,r+1,-1),r,i)}function n1(e,t,n){switch(M4(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return Pi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Pi+e+Y+e+e;case 5936:switch(ge(e,t+11)){case 114:return U+e+Y+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Y+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Y+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+Y+e+e;case 6165:return U+e+Y+"flex-"+e+e;case 5187:return U+e+O(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return U+e+Y+"flex-item-"+O(e,/flex-|-self/g,"")+(Lt(e,/flex-|baseline/)?"":Y+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return U+e+Y+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+Y+O(e,"shrink","negative")+e;case 5292:return U+e+Y+O(e,"basis","preferred-size")+e;case 6060:return U+"box-"+O(e,"-grow","")+U+e+Y+O(e,"grow","positive")+e;case 4554:return U+O(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!Lt(e,/flex-|baseline/))return Y+"grid-column-align"+Vr(e,t)+e;break;case 2592:case 3360:return Y+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Lt(r.props,/grid-\w+-end/)})?~ma(e+(n=n[t].value),"span",0)?e:Y+O(e,"-start","")+e+Y+"grid-row-span:"+(~ma(n,"span",0)?Lt(n,/\d+/):+Lt(n,/\d+/)-+Lt(e,/\d+/))+";":Y+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Lt(r.props,/grid-\w+-start/)})?e:Y+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Et(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Pi+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ma(e,"stretch",0)?n1(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return Y+i+":"+o+u+(a?Y+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(ge(e,t+6)===121)return O(e,":",":"+U)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(ge(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+Y+"$2box$3")+e;case 100:return O(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function Ya(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function j4(e,t,n,r){switch(e.type){case A4:if(e.children.length)break;case L4:case nd:return e.return=e.return||e.value;case X0:return"";case Z0:return e.return=e.value+"{"+Ya(e.children,r)+"}";case Cs:if(!Et(e.value=e.props.join(",")))return""}return Et(n=Ya(e.children,r))?e.return=e.value+"{"+n+"}":""}function U4(e){var t=e1(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function H4(e){return function(t){t.root||(t=t.return)&&e(t)}}function W4(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case nd:e.return=n1(e.value,e.length,n);return;case Z0:return Ya([Qt(e,{value:O(e.value,"@","@"+U)})],r);case Cs:if(e.length)return F4(n=e.props,function(i){switch(Lt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tr(Qt(e,{props:[O(i,/:(read-\w+)/,":"+Pi+"$1")]})),tr(Qt(e,{props:[i]})),Ic(e,{props:Yf(n,r)});break;case"::placeholder":tr(Qt(e,{props:[O(i,/:(plac\w+)/,":"+U+"input-$1")]})),tr(Qt(e,{props:[O(i,/:(plac\w+)/,":"+Pi+"$1")]})),tr(Qt(e,{props:[O(i,/:(plac\w+)/,Y+"input-$1")]})),tr(Qt(e,{props:[i]})),Ic(e,{props:Yf(n,r)});break}return""})}}var G4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",r1="active",i1="data-styled-version",Ls="6.1.19",id=`/*!sc*/
`,Qa=typeof window<"u"&&typeof document<"u",K4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Y4={},As=Object.freeze([]),Ir=Object.freeze({});function o1(e,t,n){return n===void 0&&(n=Ir),e.theme!==n.theme&&e.theme||t||n.theme}var a1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Q4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,X4=/(^-|-$)/g;function Zf(e){return e.replace(Q4,"-").replace(X4,"")}var Z4=/(a)(d)/gi,Ro=52,qf=function(e){return String.fromCharCode(e+(e>25?39:97))};function _c(e){var t,n="";for(t=Math.abs(e);t>Ro;t=t/Ro|0)n=qf(t%Ro)+n;return(qf(t%Ro)+n).replace(Z4,"$1-$2")}var gl,s1=5381,hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},l1=function(e){return hr(s1,e)};function c1(e){return _c(l1(e)>>>0)}function q4(e){return e.displayName||e.name||"Component"}function vl(e){return typeof e=="string"&&!0}var u1=typeof Symbol=="function"&&Symbol.for,d1=u1?Symbol.for("react.memo"):60115,J4=u1?Symbol.for("react.forward_ref"):60112,e5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},n5=((gl={})[J4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gl[d1]=f1,gl);function Jf(e){return("type"in(t=e)&&t.type.$$typeof)===d1?f1:"$$typeof"in e?n5[e.$$typeof]:e5;var t}var r5=Object.defineProperty,i5=Object.getOwnPropertyNames,em=Object.getOwnPropertySymbols,o5=Object.getOwnPropertyDescriptor,a5=Object.getPrototypeOf,tm=Object.prototype;function m1(e,t,n){if(typeof t!="string"){if(tm){var r=a5(t);r&&r!==tm&&m1(e,r,n)}var i=i5(t);em&&(i=i.concat(em(t)));for(var o=Jf(e),a=Jf(t),s=0;s<i.length;++s){var l=i[s];if(!(l in t5||n&&n[l]||a&&l in a||o&&l in o)){var u=o5(t,l);try{r5(e,l,u)}catch{}}}}return e}function Yn(e){return typeof e=="function"}function od(e){return typeof e=="object"&&"styledComponentId"in e}function On(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function $c(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Zi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function jc(e,t,n){if(n===void 0&&(n=!1),!n&&!Zi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=jc(e[r],t[r]);else if(Zi(t))for(var r in t)e[r]=jc(e[r],t[r]);return e}function ad(e,t){Object.defineProperty(e,"toString",{value:t})}function Qn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var s5=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Qn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(id);return n},e}(),ga=new Map,Xa=new Map,va=1,zo=function(e){if(ga.has(e))return ga.get(e);for(;Xa.has(va);)va++;var t=va++;return ga.set(e,t),Xa.set(t,e),t},l5=function(e,t){va=t+1,ga.set(e,t),Xa.set(t,e)},c5="style[".concat(Nr,"][").concat(i1,'="').concat(Ls,'"]'),u5=new RegExp("^".concat(Nr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),d5=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},f5=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(id),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(u5);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(l5(f,u),d5(e,f,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},nm=function(e){for(var t=document.querySelectorAll(c5),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Nr)!==r1&&(f5(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function m5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var p1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Nr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Nr,r1),r.setAttribute(i1,Ls);var a=m5();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},p5=function(){function e(t){this.element=p1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Qn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),h5=function(){function e(t){this.element=p1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),g5=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),rm=Qa,v5={isServer:!Qa,useCSSOMInjection:!K4},Za=function(){function e(t,n,r){t===void 0&&(t=Ir),n===void 0&&(n={});var i=this;this.options=ve(ve({},v5),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Qa&&rm&&(rm=!1,nm(this)),ad(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(d){var m=function(v){return Xa.get(v)}(d);if(m===void 0)return"continue";var g=o.names.get(m),x=a.getGroup(d);if(g===void 0||!g.size||x.length===0)return"continue";var w="".concat(Nr,".g").concat(d,'[id="').concat(m,'"]'),k="";g!==void 0&&g.forEach(function(v){v.length>0&&(k+="".concat(v,","))}),l+="".concat(x).concat(w,'{content:"').concat(k,'"}').concat(id)},f=0;f<s;f++)u(f);return l}(i)})}return e.registerId=function(t){return zo(t)},e.prototype.rehydrate=function(){!this.server&&Qa&&nm(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ve(ve({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new g5(i):r?new p5(i):new h5(i)}(this.options),new s5(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(zo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(zo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(zo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),y5=/&/g,x5=/^\s*\/\/.*$/gm;function h1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=h1(n.children,t)),n})}function w5(e){var t,n,r,i=e===void 0?Ir:e,o=i.options,a=o===void 0?Ir:o,s=i.plugins,l=s===void 0?As:s,u=function(m,g,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):m},f=l.slice();f.push(function(m){m.type===Cs&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(y5,n).replace(r,u))}),a.prefix&&f.push(W4),f.push(j4);var d=function(m,g,x,w){g===void 0&&(g=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var k=m.replace(x5,""),v=_4(x||g?"".concat(x," ").concat(g," { ").concat(k," }"):k);a.namespace&&(v=h1(v,a.namespace));var p=[];return Ya(v,U4(f.concat(H4(function(h){return p.push(h)})))),p};return d.hash=l.length?l.reduce(function(m,g){return g.name||Qn(15),hr(m,g.name)},s1).toString():"",d}var E5=new Za,Uc=w5(),g1=c.createContext({shouldForwardProp:void 0,styleSheet:E5,stylis:Uc});g1.Consumer;c.createContext(void 0);function Hc(){return E.useContext(g1)}var S5=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Uc);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ad(this,function(){throw Qn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Uc),this.name+t.hash},e}(),k5=function(e){return e>="A"&&e<="Z"};function im(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;k5(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var v1=function(e){return e==null||e===!1||e===""},y1=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!v1(o)&&(Array.isArray(o)&&o.isCss||Yn(o)?r.push("".concat(im(i),":"),o,";"):Zi(o)?r.push.apply(r,Xi(Xi(["".concat(i," {")],y1(o),!1),["}"],!1)):r.push("".concat(im(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in G4||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function hn(e,t,n,r){if(v1(e))return[];if(od(e))return[".".concat(e.styledComponentId)];if(Yn(e)){if(!Yn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return hn(i,t,n,r)}var o;return e instanceof S5?n?(e.inject(n,r),[e.getName(r)]):[e]:Zi(e)?y1(e):Array.isArray(e)?Array.prototype.concat.apply(As,e.map(function(a){return hn(a,t,n,r)})):[e.toString()]}function x1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Yn(n)&&!od(n))return!1}return!0}var C5=l1(Ls),b5=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&x1(t),this.componentId=n,this.baseHash=hr(C5,n),this.baseStyle=r,Za.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=On(i,this.staticRulesId);else{var o=$c(hn(this.rules,t,n,r)),a=_c(hr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=On(i,a),this.staticRulesId=a}else{for(var l=hr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")u+=d;else if(d){var m=$c(hn(d,t,n,r));l=hr(l,m+f),u+=m}}if(u){var g=_c(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=On(i,g)}}return i},e}(),qi=c.createContext(void 0);qi.Consumer;function P5(e){var t=c.useContext(qi),n=E.useMemo(function(){return function(r,i){if(!r)throw Qn(14);if(Yn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Qn(8);return i?ve(ve({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?c.createElement(qi.Provider,{value:n},e.children):null}var yl={};function T5(e,t,n){var r=od(e),i=e,o=!vl(e),a=t.attrs,s=a===void 0?As:a,l=t.componentId,u=l===void 0?function(S,C){var P=typeof S!="string"?"sc":Zf(S);yl[P]=(yl[P]||0)+1;var b="".concat(P,"-").concat(c1(Ls+P+yl[P]));return C?"".concat(C,"-").concat(b):b}(t.displayName,t.parentComponentId):l,f=t.displayName,d=f===void 0?function(S){return vl(S)?"styled.".concat(S):"Styled(".concat(q4(S),")")}(e):f,m=t.displayName&&t.componentId?"".concat(Zf(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;x=function(S,C){return w(S,C)&&k(S,C)}}else x=w}var v=new b5(n,m,r?i.componentStyle:void 0);function p(S,C){return function(P,b,T){var R=P.attrs,z=P.componentStyle,re=P.defaultProps,de=P.foldedComponentIds,we=P.styledComponentId,se=P.target,vt=c.useContext(qi),Z=Hc(),Ce=P.shouldForwardProp||Z.shouldForwardProp,A=o1(b,vt,re)||Ir,F=function(st,fe,Xe){for(var Tn,lt=ve(ve({},fe),{className:void 0,theme:Xe}),Wt=0;Wt<st.length;Wt+=1){var Ze=Yn(Tn=st[Wt])?Tn(lt):Tn;for(var Pt in Ze)lt[Pt]=Pt==="className"?On(lt[Pt],Ze[Pt]):Pt==="style"?ve(ve({},lt[Pt]),Ze[Pt]):Ze[Pt]}return fe.className&&(lt.className=On(lt.className,fe.className)),lt}(R,b,A),I=F.as||se,V={};for(var $ in F)F[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&F.theme===A||($==="forwardedAs"?V.as=F.forwardedAs:Ce&&!Ce($,I)||(V[$]=F[$]));var yt=function(st,fe){var Xe=Hc(),Tn=st.generateAndInjectStyles(fe,Xe.styleSheet,Xe.stylis);return Tn}(z,F),Ne=On(de,we);return yt&&(Ne+=" "+yt),F.className&&(Ne+=" "+F.className),V[vl(I)&&!a1.has(I)?"class":"className"]=Ne,T&&(V.ref=T),E.createElement(I,V)}(h,S,C)}p.displayName=d;var h=c.forwardRef(p);return h.attrs=g,h.componentStyle=v,h.displayName=d,h.shouldForwardProp=x,h.foldedComponentIds=r?On(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=m,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(C){for(var P=[],b=1;b<arguments.length;b++)P[b-1]=arguments[b];for(var T=0,R=P;T<R.length;T++)jc(C,R[T],!0);return C}({},i.defaultProps,S):S}}),ad(h,function(){return".".concat(h.styledComponentId)}),o&&m1(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function om(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var am=function(e){return Object.assign(e,{isCss:!0})};function w1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Yn(e)||Zi(e))return am(hn(om(As,Xi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?hn(r):am(hn(om(r,t)))}function Wc(e,t,n){if(n===void 0&&(n=Ir),!t)throw Qn(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,w1.apply(void 0,Xi([i],o,!1)))};return r.attrs=function(i){return Wc(e,t,ve(ve({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Wc(e,t,ve(ve({},n),i))},r}var E1=function(e){return Wc(T5,e)},y=E1;a1.forEach(function(e){y[e]=E1(e)});var L5=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=x1(t),Za.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i($c(hn(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Za.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function A5(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=w1.apply(void 0,Xi([e],t,!1)),i="sc-global-".concat(c1(JSON.stringify(r))),o=new L5(r,i),a=function(l){var u=Hc(),f=c.useContext(qi),d=c.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(d,l,u.styleSheet,f,u.stylis),c.useLayoutEffect(function(){if(!u.styleSheet.server)return s(d,l,u.styleSheet,f,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,f,u.stylis]),null};function s(l,u,f,d,m){if(o.isStatic)o.renderStyles(l,Y4,f,m);else{var g=ve(ve({},u),{theme:o1(u,d,a.defaultProps)});o.renderStyles(l,g,f,m)}}return c.memo(a)}const S1=E.createContext(),Ms=()=>E.useContext(S1),M5=({children:e})=>{const[t,n]=E.useState(()=>localStorage.getItem("isAuthenticated")==="true");E.useEffect(()=>{localStorage.setItem("isAuthenticated",t)},[t]);const r=(o,a)=>o==="admin"&&a==="password"?(n(!0),!0):!1,i=()=>{n(!1)};return c.createElement(S1.Provider,{value:{isAuthenticated:t,login:r,logout:i}},e)},lo=E.createContext(),F5=[{id:"1",title:"Premium Email Marketing Software",description:"Boost your email campaigns with our advanced email marketing solution. Features include automation, A/B testing, analytics, and high deliverability rates.",image:"https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/email-marketing",category:"Marketing",featured:!0},{id:"2",title:"AI-Powered Content Creator",description:"Create engaging content in seconds with our AI content generator. Perfect for blogs, social media, and marketing materials.",image:"https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/ai-content",category:"Content",featured:!0},{id:"3",title:"All-in-One SEO Toolkit",description:"Dominate search rankings with our comprehensive SEO suite. Includes keyword research, competitor analysis, backlink monitoring, and more.",image:"https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/seo-toolkit",category:"SEO",featured:!1},{id:"4",title:"Social Media Management Platform",description:"Manage all your social media accounts from one dashboard. Schedule posts, analyze performance, and engage with your audience efficiently.",image:"https://images.pexels.com/photos/3850250/pexels-photo-3850250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/social-media",category:"Social Media",featured:!0},{id:"5",title:"E-commerce Conversion Optimizer",description:"Increase your online store conversion rates with our AI-driven optimization tool. Personalized recommendations, cart abandonment recovery, and more.",image:"https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/ecommerce-optimizer",category:"E-commerce",featured:!1},{id:"6",title:"Professional Webinar Platform",description:"Host engaging webinars with our feature-rich platform. Interactive tools, recording capabilities, and detailed analytics included.",image:"https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/webinar-platform",category:"Webinars",featured:!1}],R5=({children:e})=>{const[t,n]=E.useState(()=>{const s=localStorage.getItem("products");return s?JSON.parse(s):F5});E.useEffect(()=>{localStorage.setItem("products",JSON.stringify(t))},[t]);const r=s=>{const l={...s,id:Date.now().toString()};n([...t,l])},i=(s,l)=>{n(t.map(u=>u.id===s?{...u,...l}:u))},o=s=>{n(t.filter(l=>l.id!==s))},a=s=>t.find(l=>l.id===s);return c.createElement(lo.Provider,{value:{products:t,addProduct:r,updateProduct:i,deleteProduct:o,getProduct:a}},e)},z5=()=>{const e=E.useContext(lo);if(e===void 0)throw new Error("useProduct must be used within a ProductProvider");return e},Fs=E.createContext(),V5=[{id:"1",title:"Premium CRM Software",description:"Streamline your customer relationships with our advanced CRM solution. Features include contact management, sales pipeline tracking, and automated follow-ups.",image:"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/crm-software",category:"Business",featured:!0,price:"$29/month",availability:"Open"},{id:"2",title:"Cloud Storage Solution",description:"Secure and scalable cloud storage for businesses of all sizes. Includes file versioning, team collaboration tools, and enterprise-grade security.",image:"https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/cloud-storage",category:"Storage",featured:!0,price:"$15/month",availability:"Limited"},{id:"3",title:"Project Management Platform",description:"Keep your team organized with our comprehensive project management tool. Track tasks, deadlines, resources, and generate detailed reports.",image:"https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/project-management",category:"Productivity",featured:!1,price:"$24/month",availability:"Open"},{id:"4",title:"Marketing Automation Suite",description:"Automate your marketing campaigns with our all-in-one platform. Includes email marketing, social media scheduling, and analytics.",image:"https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/marketing-automation",category:"Marketing",featured:!0,price:"$39/month",availability:"Open"},{id:"5",title:"Advanced Analytics Platform",description:"Turn your data into actionable insights with our powerful analytics solution. Features include custom dashboards, real-time reporting, and predictive analysis.",image:"https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/analytics",category:"Analytics",featured:!1,price:"$49/month",availability:"Limited"},{id:"6",title:"Team Collaboration Suite",description:"Enhance team productivity with our collaboration platform. Includes video conferencing, document sharing, and integrated chat.",image:"https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/collaboration",category:"Collaboration",featured:!1,price:"$19/month",availability:"Filled"}],D5=({children:e})=>{const[t,n]=E.useState(()=>{const s=localStorage.getItem("subscriptions");return s?JSON.parse(s):V5});E.useEffect(()=>{localStorage.setItem("subscriptions",JSON.stringify(t))},[t]);const r=s=>{const l={...s,id:Date.now().toString()};n([...t,l])},i=(s,l)=>{n(t.map(u=>u.id===s?{...u,...l}:u))},o=s=>{n(t.filter(l=>l.id!==s))},a=s=>t.find(l=>l.id===s);return c.createElement(Fs.Provider,{value:{subscriptions:t,addSubscription:r,updateSubscription:i,deleteSubscription:o,getSubscription:a}},e)},N5=A5`
  :root {
    --primary: #6366F1;
    --secondary: #8B5CF6;
    --accent: #EC4899;
    --background: #0F172A;
    --surface: #1E293B;
    --surface-light: #334155;
    --text: #F8FAFC;
    --text-secondary: #94A3B8;
    --error: #EF4444;
    --success: #10B981;
    --warning: #F59E0B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background);
    color: var(--text);
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  main {
    min-height: calc(100vh - 200px);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--surface);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--surface-light);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary);
  }
`,I5={colors:{primary:"#6366F1",secondary:"#8B5CF6",accent:"#EC4899",background:"#0F172A",surface:"#1E293B",surfaceLight:"#334155",text:"#F8FAFC",textSecondary:"#94A3B8",error:"#EF4444",success:"#10B981",warning:"#F59E0B"},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},gradients:{primary:"linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",accent:"linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)"},transitions:{default:"all 0.3s ease",fast:"all 0.15s ease",slow:"all 0.5s ease"},borderRadius:{sm:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem",full:"9999px"}},k1=E.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Rs=E.createContext({}),zs=E.createContext(null),Vs=typeof document<"u",sd=Vs?E.useLayoutEffect:E.useEffect,C1=E.createContext({strict:!1}),ld=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),O5="framerAppearId",b1="data-"+ld(O5);function B5(e,t,n,r){const{visualElement:i}=E.useContext(Rs),o=E.useContext(C1),a=E.useContext(zs),s=E.useContext(k1).reducedMotion,l=E.useRef();r=r||o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:s}));const u=l.current;E.useInsertionEffect(()=>{u&&u.update(n,a)});const f=E.useRef(!!(n[b1]&&!window.HandoffComplete));return sd(()=>{u&&(u.render(),f.current&&u.animationState&&u.animationState.animateChanges())}),E.useEffect(()=>{u&&(u.updateFeatures(),!f.current&&u.animationState&&u.animationState.animateChanges(),f.current&&(f.current=!1,window.HandoffComplete=!0))}),u}function gr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function _5(e,t,n){return E.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):gr(n)&&(n.current=r))},[t])}function Ji(e){return typeof e=="string"||Array.isArray(e)}function Ds(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const cd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ud=["initial",...cd];function Ns(e){return Ds(e.animate)||ud.some(t=>Ji(e[t]))}function P1(e){return!!(Ns(e)||e.variants)}function $5(e,t){if(Ns(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ji(n)?n:void 0,animate:Ji(r)?r:void 0}}return e.inherit!==!1?t:{}}function j5(e){const{initial:t,animate:n}=$5(e,E.useContext(Rs));return E.useMemo(()=>({initial:t,animate:n}),[sm(t),sm(n)])}function sm(e){return Array.isArray(e)?e.join(" "):e}const lm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},eo={};for(const e in lm)eo[e]={isEnabled:t=>lm[e].some(n=>!!t[n])};function U5(e){for(const t in e)eo[t]={...eo[t],...e[t]}}const dd=E.createContext({}),T1=E.createContext({}),H5=Symbol.for("motionComponentSymbol");function W5({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&U5(e);function o(s,l){let u;const f={...E.useContext(k1),...s,layoutId:G5(s)},{isStatic:d}=f,m=j5(s),g=r(s,d);if(!d&&Vs){m.visualElement=B5(i,g,f,t);const x=E.useContext(T1),w=E.useContext(C1).strict;m.visualElement&&(u=m.visualElement.loadFeatures(f,w,e,x))}return E.createElement(Rs.Provider,{value:m},u&&m.visualElement?E.createElement(u,{visualElement:m.visualElement,...f}):null,n(i,s,_5(g,m.visualElement,l),g,d,m.visualElement))}const a=E.forwardRef(o);return a[H5]=i,a}function G5({layoutId:e}){const t=E.useContext(dd).id;return t&&e!==void 0?t+"-"+e:e}function K5(e){function t(r,i={}){return W5(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const Y5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function fd(e){return typeof e!="string"||e.includes("-")?!1:!!(Y5.indexOf(e)>-1||/[A-Z]/.test(e))}const qa={};function Q5(e){Object.assign(qa,e)}const co=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qn=new Set(co);function L1(e,{layout:t,layoutId:n}){return qn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!qa[e]||e==="opacity")}const je=e=>!!(e&&e.getVelocity),X5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Z5=co.length;function q5(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let o="";for(let a=0;a<Z5;a++){const s=co[a];if(e[s]!==void 0){const l=X5[s]||s;o+=`${l}(${e[s]}) `}}return t&&!e.z&&(o+="translateZ(0)"),o=o.trim(),i?o=i(e,r?"":o):n&&r&&(o="none"),o}const A1=e=>t=>typeof t=="string"&&t.startsWith(e),M1=A1("--"),Gc=A1("var(--"),J5=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,e3=(e,t)=>t&&typeof e=="number"?t.transform(e):e,En=(e,t,n)=>Math.min(Math.max(n,e),t),Jn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ti={...Jn,transform:e=>En(0,1,e)},Vo={...Jn,default:1},Li=e=>Math.round(e*1e5)/1e5,Is=/(-)?([\d]*\.?[\d])+/g,F1=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,t3=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function uo(e){return typeof e=="string"}const fo=e=>({test:t=>uo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Xt=fo("deg"),bt=fo("%"),N=fo("px"),n3=fo("vh"),r3=fo("vw"),cm={...bt,parse:e=>bt.parse(e)/100,transform:e=>bt.transform(e*100)},um={...Jn,transform:Math.round},R1={borderWidth:N,borderTopWidth:N,borderRightWidth:N,borderBottomWidth:N,borderLeftWidth:N,borderRadius:N,radius:N,borderTopLeftRadius:N,borderTopRightRadius:N,borderBottomRightRadius:N,borderBottomLeftRadius:N,width:N,maxWidth:N,height:N,maxHeight:N,size:N,top:N,right:N,bottom:N,left:N,padding:N,paddingTop:N,paddingRight:N,paddingBottom:N,paddingLeft:N,margin:N,marginTop:N,marginRight:N,marginBottom:N,marginLeft:N,rotate:Xt,rotateX:Xt,rotateY:Xt,rotateZ:Xt,scale:Vo,scaleX:Vo,scaleY:Vo,scaleZ:Vo,skew:Xt,skewX:Xt,skewY:Xt,distance:N,translateX:N,translateY:N,translateZ:N,x:N,y:N,z:N,perspective:N,transformPerspective:N,opacity:Ti,originX:cm,originY:cm,originZ:N,zIndex:um,fillOpacity:Ti,strokeOpacity:Ti,numOctaves:um};function md(e,t,n,r){const{style:i,vars:o,transform:a,transformOrigin:s}=e;let l=!1,u=!1,f=!0;for(const d in t){const m=t[d];if(M1(d)){o[d]=m;continue}const g=R1[d],x=e3(m,g);if(qn.has(d)){if(l=!0,a[d]=x,!f)continue;m!==(g.default||0)&&(f=!1)}else d.startsWith("origin")?(u=!0,s[d]=x):i[d]=x}if(t.transform||(l||r?i.transform=q5(e.transform,n,f,r):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:m="50%",originZ:g=0}=s;i.transformOrigin=`${d} ${m} ${g}`}}const pd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function z1(e,t,n){for(const r in t)!je(t[r])&&!L1(r,n)&&(e[r]=t[r])}function i3({transformTemplate:e},t,n){return E.useMemo(()=>{const r=pd();return md(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function o3(e,t,n){const r=e.style||{},i={};return z1(i,r,e),Object.assign(i,i3(e,t,n)),e.transformValues?e.transformValues(i):i}function a3(e,t,n){const r={},i=o3(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const s3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ja(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||s3.has(e)}let V1=e=>!Ja(e);function l3(e){e&&(V1=t=>t.startsWith("on")?!Ja(t):e(t))}try{l3(require("@emotion/is-prop-valid").default)}catch{}function c3(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(V1(i)||n===!0&&Ja(i)||!t&&!Ja(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function dm(e,t,n){return typeof e=="string"?e:N.transform(t+n*e)}function u3(e,t,n){const r=dm(t,e.x,e.width),i=dm(n,e.y,e.height);return`${r} ${i}`}const d3={offset:"stroke-dashoffset",array:"stroke-dasharray"},f3={offset:"strokeDashoffset",array:"strokeDasharray"};function m3(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?d3:f3;e[o.offset]=N.transform(-r);const a=N.transform(t),s=N.transform(n);e[o.array]=`${a} ${s}`}function hd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:s=1,pathOffset:l=0,...u},f,d,m){if(md(e,u,f,m),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:x,dimensions:w}=e;g.transform&&(w&&(x.transform=g.transform),delete g.transform),w&&(i!==void 0||o!==void 0||x.transform)&&(x.transformOrigin=u3(w,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),a!==void 0&&m3(g,a,s,l,!1)}const D1=()=>({...pd(),attrs:{}}),gd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function p3(e,t,n,r){const i=E.useMemo(()=>{const o=D1();return hd(o,t,{enableHardwareAcceleration:!1},gd(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};z1(o,e.style,e),i.style={...o,...i.style}}return i}function h3(e=!1){return(n,r,i,{latestValues:o},a)=>{const l=(fd(n)?p3:a3)(r,o,a,n),f={...c3(r,typeof n=="string",e),...l,ref:i},{children:d}=r,m=E.useMemo(()=>je(d)?d.get():d,[d]);return E.createElement(n,{...f,children:m})}}function N1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const I1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function O1(e,t,n,r){N1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(I1.has(i)?i:ld(i),t.attrs[i])}function vd(e,t){const{style:n}=e,r={};for(const i in n)(je(n[i])||t.style&&je(t.style[i])||L1(i,e))&&(r[i]=n[i]);return r}function B1(e,t){const n=vd(e,t);for(const r in e)if(je(e[r])||je(t[r])){const i=co.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function yd(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function _1(e){const t=E.useRef(null);return t.current===null&&(t.current=e()),t.current}const es=e=>Array.isArray(e),g3=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),v3=e=>es(e)?e[e.length-1]||0:e;function ya(e){const t=je(e)?e.get():e;return g3(t)?t.toValue():t}function y3({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const a={latestValues:x3(r,i,o,e),renderState:t()};return n&&(a.mount=s=>n(r,s,a)),a}const $1=e=>(t,n)=>{const r=E.useContext(Rs),i=E.useContext(zs),o=()=>y3(e,t,r,i);return n?o():_1(o)};function x3(e,t,n,r){const i={},o=r(e,{});for(const m in o)i[m]=ya(o[m]);let{initial:a,animate:s}=e;const l=Ns(e),u=P1(e);t&&u&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),s===void 0&&(s=t.animate));let f=n?n.initial===!1:!1;f=f||a===!1;const d=f?s:a;return d&&typeof d!="boolean"&&!Ds(d)&&(Array.isArray(d)?d:[d]).forEach(g=>{const x=yd(e,g);if(!x)return;const{transitionEnd:w,transition:k,...v}=x;for(const p in v){let h=v[p];if(Array.isArray(h)){const S=f?h.length-1:0;h=h[S]}h!==null&&(i[p]=h)}for(const p in w)i[p]=w[p]}),i}const oe=e=>e;class fm{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function w3(e){let t=new fm,n=new fm,r=0,i=!1,o=!1;const a=new WeakSet,s={schedule:(l,u=!1,f=!1)=>{const d=f&&i,m=d?t:n;return u&&a.add(l),m.add(l)&&d&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),a.delete(l)},process:l=>{if(i){o=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const f=t.order[u];f(l),a.has(f)&&(s.schedule(f),e())}i=!1,o&&(o=!1,s.process(l))}};return s}const Do=["prepare","read","update","preRender","render","postRender"],E3=40;function S3(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Do.reduce((d,m)=>(d[m]=w3(()=>n=!0),d),{}),a=d=>o[d].process(i),s=()=>{const d=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(d-i.timestamp,E3),1),i.timestamp=d,i.isProcessing=!0,Do.forEach(a),i.isProcessing=!1,n&&t&&(r=!1,e(s))},l=()=>{n=!0,r=!0,i.isProcessing||e(s)};return{schedule:Do.reduce((d,m)=>{const g=o[m];return d[m]=(x,w=!1,k=!1)=>(n||l(),g.schedule(x,w,k)),d},{}),cancel:d=>Do.forEach(m=>o[m].cancel(d)),state:i,steps:o}}const{schedule:G,cancel:_t,state:Te,steps:xl}=S3(typeof requestAnimationFrame<"u"?requestAnimationFrame:oe,!0),k3={useVisualState:$1({scrapeMotionValuesFromProps:B1,createRenderState:D1,onMount:(e,t,{renderState:n,latestValues:r})=>{G.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),G.render(()=>{hd(n,r,{enableHardwareAcceleration:!1},gd(t.tagName),e.transformTemplate),O1(t,n)})}})},C3={useVisualState:$1({scrapeMotionValuesFromProps:vd,createRenderState:pd})};function b3(e,{forwardMotionProps:t=!1},n,r){return{...fd(e)?k3:C3,preloadedFeatures:n,useRender:h3(t),createVisualElement:r,Component:e}}function Rt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const j1=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Os(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const P3=e=>t=>j1(t)&&e(t,Os(t));function Vt(e,t,n,r){return Rt(e,t,P3(n),r)}const T3=(e,t)=>n=>t(e(n)),gn=(...e)=>e.reduce(T3);function U1(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const mm=U1("dragHorizontal"),pm=U1("dragVertical");function H1(e){let t=!1;if(e==="y")t=pm();else if(e==="x")t=mm();else{const n=mm(),r=pm();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function W1(){const e=H1(!0);return e?(e(),!1):!0}class Pn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function hm(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(o,a)=>{if(o.pointerType==="touch"||W1())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t),s[r]&&G.update(()=>s[r](o,a))};return Vt(e.current,n,i,{passive:!e.getProps()[r]})}class L3 extends Pn{mount(){this.unmount=gn(hm(this.node,!0),hm(this.node,!1))}unmount(){}}class A3 extends Pn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=gn(Rt(this.node.current,"focus",()=>this.onFocus()),Rt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const G1=(e,t)=>t?e===t?!0:G1(e,t.parentElement):!1;function wl(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Os(n))}class M3 extends Pn{constructor(){super(...arguments),this.removeStartListeners=oe,this.removeEndListeners=oe,this.removeAccessibleListeners=oe,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Vt(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:f,globalTapTarget:d}=this.node.getProps();G.update(()=>{!d&&!G1(this.node.current,s.target)?f&&f(s,l):u&&u(s,l)})},{passive:!(r.onTap||r.onPointerUp)}),a=Vt(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=gn(o,a),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const a=s=>{s.key!=="Enter"||!this.checkPressEnd()||wl("up",(l,u)=>{const{onTap:f}=this.node.getProps();f&&G.update(()=>f(l,u))})};this.removeEndListeners(),this.removeEndListeners=Rt(this.node.current,"keyup",a),wl("down",(s,l)=>{this.startPress(s,l)})},n=Rt(this.node.current,"keydown",t),r=()=>{this.isPressing&&wl("cancel",(o,a)=>this.cancelPress(o,a))},i=Rt(this.node.current,"blur",r);this.removeAccessibleListeners=gn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&G.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!W1()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&G.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Vt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Rt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=gn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Kc=new WeakMap,El=new WeakMap,F3=e=>{const t=Kc.get(e.target);t&&t(e)},R3=e=>{e.forEach(F3)};function z3({root:e,...t}){const n=e||document;El.has(n)||El.set(n,{});const r=El.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(R3,{root:e,...t})),r[i]}function V3(e,t,n){const r=z3(t);return Kc.set(e,n),r.observe(e),()=>{Kc.delete(e),r.unobserve(e)}}const D3={some:0,all:1};class N3 extends Pn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:D3[i]},s=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:f,onViewportLeave:d}=this.node.getProps(),m=u?f:d;m&&m(l)};return V3(this.node.current,a,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(I3(t,n))&&this.startObserver()}unmount(){}}function I3({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const O3={inView:{Feature:N3},tap:{Feature:M3},focus:{Feature:A3},hover:{Feature:L3}};function K1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function B3(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function _3(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Bs(e,t,n){const r=e.getProps();return yd(r,t,n!==void 0?n:r.custom,B3(e),_3(e))}let $3=oe,xd=oe;const vn=e=>e*1e3,Dt=e=>e/1e3,j3={current:!1},Y1=e=>Array.isArray(e)&&typeof e[0]=="number";function Q1(e){return!!(!e||typeof e=="string"&&X1[e]||Y1(e)||Array.isArray(e)&&e.every(Q1))}const pi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,X1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:pi([0,.65,.55,1]),circOut:pi([.55,0,1,.45]),backIn:pi([.31,.01,.66,-.59]),backOut:pi([.33,1.53,.69,.99])};function Z1(e){if(e)return Y1(e)?pi(e):Array.isArray(e)?e.map(Z1):X1[e]}function U3(e,t,n,{delay:r=0,duration:i,repeat:o=0,repeatType:a="loop",ease:s,times:l}={}){const u={[t]:n};l&&(u.offset=l);const f=Z1(s);return Array.isArray(f)&&(u.easing=f),e.animate(u,{delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}function H3(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const q1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,W3=1e-7,G3=12;function K3(e,t,n,r,i){let o,a,s=0;do a=t+(n-t)/2,o=q1(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>W3&&++s<G3);return a}function mo(e,t,n,r){if(e===t&&n===r)return oe;const i=o=>K3(o,0,1,e,n);return o=>o===0||o===1?o:q1(i(o),t,r)}const Y3=mo(.42,0,1,1),Q3=mo(0,0,.58,1),J1=mo(.42,0,.58,1),X3=e=>Array.isArray(e)&&typeof e[0]!="number",eg=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tg=e=>t=>1-e(1-t),wd=e=>1-Math.sin(Math.acos(e)),ng=tg(wd),Z3=eg(wd),rg=mo(.33,1.53,.69,.99),Ed=tg(rg),q3=eg(Ed),J3=e=>(e*=2)<1?.5*Ed(e):.5*(2-Math.pow(2,-10*(e-1))),ex={linear:oe,easeIn:Y3,easeInOut:J1,easeOut:Q3,circIn:wd,circInOut:Z3,circOut:ng,backIn:Ed,backInOut:q3,backOut:rg,anticipate:J3},gm=e=>{if(Array.isArray(e)){xd(e.length===4);const[t,n,r,i]=e;return mo(t,n,r,i)}else if(typeof e=="string")return ex[e];return e},Sd=(e,t)=>n=>!!(uo(n)&&t3.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),ig=(e,t,n)=>r=>{if(!uo(r))return r;const[i,o,a,s]=r.match(Is);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},tx=e=>En(0,255,e),Sl={...Jn,transform:e=>Math.round(tx(e))},Bn={test:Sd("rgb","red"),parse:ig("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Sl.transform(e)+", "+Sl.transform(t)+", "+Sl.transform(n)+", "+Li(Ti.transform(r))+")"};function nx(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Yc={test:Sd("#"),parse:nx,transform:Bn.transform},vr={test:Sd("hsl","hue"),parse:ig("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+bt.transform(Li(t))+", "+bt.transform(Li(n))+", "+Li(Ti.transform(r))+")"},Fe={test:e=>Bn.test(e)||Yc.test(e)||vr.test(e),parse:e=>Bn.test(e)?Bn.parse(e):vr.test(e)?vr.parse(e):Yc.parse(e),transform:e=>uo(e)?e:e.hasOwnProperty("red")?Bn.transform(e):vr.transform(e)},J=(e,t,n)=>-n*e+n*t+e;function kl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function rx({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=kl(l,s,e+1/3),o=kl(l,s,e),a=kl(l,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}const Cl=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},ix=[Yc,Bn,vr],ox=e=>ix.find(t=>t.test(e));function vm(e){const t=ox(e);let n=t.parse(e);return t===vr&&(n=rx(n)),n}const og=(e,t)=>{const n=vm(e),r=vm(t),i={...n};return o=>(i.red=Cl(n.red,r.red,o),i.green=Cl(n.green,r.green,o),i.blue=Cl(n.blue,r.blue,o),i.alpha=J(n.alpha,r.alpha,o),Bn.transform(i))};function ax(e){var t,n;return isNaN(e)&&uo(e)&&(((t=e.match(Is))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(F1))===null||n===void 0?void 0:n.length)||0)>0}const ag={regex:J5,countKey:"Vars",token:"${v}",parse:oe},sg={regex:F1,countKey:"Colors",token:"${c}",parse:Fe.parse},lg={regex:Is,countKey:"Numbers",token:"${n}",parse:Jn.parse};function bl(e,{regex:t,countKey:n,token:r,parse:i}){const o=e.tokenised.match(t);o&&(e["num"+n]=o.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...o.map(i)))}function ts(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&bl(n,ag),bl(n,sg),bl(n,lg),n}function cg(e){return ts(e).values}function ug(e){const{values:t,numColors:n,numVars:r,tokenised:i}=ts(e),o=t.length;return a=>{let s=i;for(let l=0;l<o;l++)l<r?s=s.replace(ag.token,a[l]):l<r+n?s=s.replace(sg.token,Fe.transform(a[l])):s=s.replace(lg.token,Li(a[l]));return s}}const sx=e=>typeof e=="number"?0:e;function lx(e){const t=cg(e);return ug(e)(t.map(sx))}const Sn={test:ax,parse:cg,createTransformer:ug,getAnimatableNone:lx},dg=(e,t)=>n=>`${n>0?t:e}`;function fg(e,t){return typeof e=="number"?n=>J(e,t,n):Fe.test(e)?og(e,t):e.startsWith("var(")?dg(e,t):pg(e,t)}const mg=(e,t)=>{const n=[...e],r=n.length,i=e.map((o,a)=>fg(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}},cx=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=fg(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}},pg=(e,t)=>{const n=Sn.createTransformer(t),r=ts(e),i=ts(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?gn(mg(r.values,i.values),n):dg(e,t)},to=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},ym=(e,t)=>n=>J(e,t,n);function ux(e){return typeof e=="number"?ym:typeof e=="string"?Fe.test(e)?og:pg:Array.isArray(e)?mg:typeof e=="object"?cx:ym}function dx(e,t,n){const r=[],i=n||ux(e[0]),o=e.length-1;for(let a=0;a<o;a++){let s=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||oe:t;s=gn(l,s)}r.push(s)}return r}function hg(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(xd(o===t.length),o===1)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=dx(t,r,i),s=a.length,l=u=>{let f=0;if(s>1)for(;f<e.length-2&&!(u<e[f+1]);f++);const d=to(e[f],e[f+1],u);return a[f](d)};return n?u=>l(En(e[0],e[o-1],u)):l}function fx(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=to(0,t,r);e.push(J(n,1,i))}}function mx(e){const t=[0];return fx(t,e.length-1),t}function px(e,t){return e.map(n=>n*t)}function hx(e,t){return e.map(()=>t||J1).splice(0,e.length-1)}function ns({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=X3(r)?r.map(gm):gm(r),o={done:!1,value:t[0]},a=px(n&&n.length===t.length?n:mx(t),e),s=hg(a,t,{ease:Array.isArray(i)?i:hx(t,i)});return{calculatedDuration:e,next:l=>(o.value=s(l),o.done=l>=e,o)}}function gg(e,t){return t?e*(1e3/t):0}const gx=5;function vg(e,t,n){const r=Math.max(t-gx,0);return gg(n-e(r),t-r)}const Pl=.001,vx=.01,xm=10,yx=.05,xx=1;function wx({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o;$3(e<=vn(xm));let a=1-t;a=En(yx,xx,a),e=En(vx,xm,Dt(e)),a<1?(i=u=>{const f=u*a,d=f*e,m=f-n,g=Qc(u,a),x=Math.exp(-d);return Pl-m/g*x},o=u=>{const d=u*a*e,m=d*n+n,g=Math.pow(a,2)*Math.pow(u,2)*e,x=Math.exp(-d),w=Qc(Math.pow(u,2),a);return(-i(u)+Pl>0?-1:1)*((m-g)*x)/w}):(i=u=>{const f=Math.exp(-u*e),d=(u-n)*e+1;return-Pl+f*d},o=u=>{const f=Math.exp(-u*e),d=(n-u)*(e*e);return f*d});const s=5/e,l=Sx(i,o,s);if(e=vn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const Ex=12;function Sx(e,t,n){let r=n;for(let i=1;i<Ex;i++)r=r-e(r)/t(r);return r}function Qc(e,t){return e*Math.sqrt(1-t*t)}const kx=["duration","bounce"],Cx=["stiffness","damping","mass"];function wm(e,t){return t.some(n=>e[n]!==void 0)}function bx(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!wm(e,Cx)&&wm(e,kx)){const n=wx(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function yg({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],a={done:!1,value:i},{stiffness:s,damping:l,mass:u,duration:f,velocity:d,isResolvedFromDuration:m}=bx({...r,velocity:-Dt(r.velocity||0)}),g=d||0,x=l/(2*Math.sqrt(s*u)),w=o-i,k=Dt(Math.sqrt(s/u)),v=Math.abs(w)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let p;if(x<1){const h=Qc(k,x);p=S=>{const C=Math.exp(-x*k*S);return o-C*((g+x*k*w)/h*Math.sin(h*S)+w*Math.cos(h*S))}}else if(x===1)p=h=>o-Math.exp(-k*h)*(w+(g+k*w)*h);else{const h=k*Math.sqrt(x*x-1);p=S=>{const C=Math.exp(-x*k*S),P=Math.min(h*S,300);return o-C*((g+x*k*w)*Math.sinh(P)+h*w*Math.cosh(P))/h}}return{calculatedDuration:m&&f||null,next:h=>{const S=p(h);if(m)a.done=h>=f;else{let C=g;h!==0&&(x<1?C=vg(p,h,S):C=0);const P=Math.abs(C)<=n,b=Math.abs(o-S)<=t;a.done=P&&b}return a.value=a.done?o:S,a}}}function Em({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:s,max:l,restDelta:u=.5,restSpeed:f}){const d=e[0],m={done:!1,value:d},g=T=>s!==void 0&&T<s||l!==void 0&&T>l,x=T=>s===void 0?l:l===void 0||Math.abs(s-T)<Math.abs(l-T)?s:l;let w=n*t;const k=d+w,v=a===void 0?k:a(k);v!==k&&(w=v-d);const p=T=>-w*Math.exp(-T/r),h=T=>v+p(T),S=T=>{const R=p(T),z=h(T);m.done=Math.abs(R)<=u,m.value=m.done?v:z};let C,P;const b=T=>{g(m.value)&&(C=T,P=yg({keyframes:[m.value,x(m.value)],velocity:vg(h,T,m.value),damping:i,stiffness:o,restDelta:u,restSpeed:f}))};return b(0),{calculatedDuration:null,next:T=>{let R=!1;return!P&&C===void 0&&(R=!0,S(T),b(T)),C!==void 0&&T>C?P.next(T-C):(!R&&S(T),m)}}}const Px=e=>{const t=({timestamp:n})=>e(n);return{start:()=>G.update(t,!0),stop:()=>_t(t),now:()=>Te.isProcessing?Te.timestamp:performance.now()}},Sm=2e4;function km(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Sm;)t+=n,r=e.next(t);return t>=Sm?1/0:t}const Tx={decay:Em,inertia:Em,tween:ns,keyframes:ns,spring:yg};function rs({autoplay:e=!0,delay:t=0,driver:n=Px,keyframes:r,type:i="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:s="loop",onPlay:l,onStop:u,onComplete:f,onUpdate:d,...m}){let g=1,x=!1,w,k;const v=()=>{k=new Promise(V=>{w=V})};v();let p;const h=Tx[i]||ns;let S;h!==ns&&typeof r[0]!="number"&&(S=hg([0,100],r,{clamp:!1}),r=[0,100]);const C=h({...m,keyframes:r});let P;s==="mirror"&&(P=h({...m,keyframes:[...r].reverse(),velocity:-(m.velocity||0)}));let b="idle",T=null,R=null,z=null;C.calculatedDuration===null&&o&&(C.calculatedDuration=km(C));const{calculatedDuration:re}=C;let de=1/0,we=1/0;re!==null&&(de=re+a,we=de*(o+1)-a);let se=0;const vt=V=>{if(R===null)return;g>0&&(R=Math.min(R,V)),g<0&&(R=Math.min(V-we/g,R)),T!==null?se=T:se=Math.round(V-R)*g;const $=se-t*(g>=0?1:-1),yt=g>=0?$<0:$>we;se=Math.max($,0),b==="finished"&&T===null&&(se=we);let Ne=se,st=C;if(o){const lt=Math.min(se,we)/de;let Wt=Math.floor(lt),Ze=lt%1;!Ze&&lt>=1&&(Ze=1),Ze===1&&Wt--,Wt=Math.min(Wt,o+1),!!(Wt%2)&&(s==="reverse"?(Ze=1-Ze,a&&(Ze-=a/de)):s==="mirror"&&(st=P)),Ne=En(0,1,Ze)*de}const fe=yt?{done:!1,value:r[0]}:st.next(Ne);S&&(fe.value=S(fe.value));let{done:Xe}=fe;!yt&&re!==null&&(Xe=g>=0?se>=we:se<=0);const Tn=T===null&&(b==="finished"||b==="running"&&Xe);return d&&d(fe.value),Tn&&A(),fe},Z=()=>{p&&p.stop(),p=void 0},Ce=()=>{b="idle",Z(),w(),v(),R=z=null},A=()=>{b="finished",f&&f(),Z(),w()},F=()=>{if(x)return;p||(p=n(vt));const V=p.now();l&&l(),T!==null?R=V-T:(!R||b==="finished")&&(R=V),b==="finished"&&v(),z=R,T=null,b="running",p.start()};e&&F();const I={then(V,$){return k.then(V,$)},get time(){return Dt(se)},set time(V){V=vn(V),se=V,T!==null||!p||g===0?T=V:R=p.now()-V/g},get duration(){const V=C.calculatedDuration===null?km(C):C.calculatedDuration;return Dt(V)},get speed(){return g},set speed(V){V===g||!p||(g=V,I.time=Dt(se))},get state(){return b},play:F,pause:()=>{b="paused",T=se},stop:()=>{x=!0,b!=="idle"&&(b="idle",u&&u(),Ce())},cancel:()=>{z!==null&&vt(z),Ce()},complete:()=>{b="finished"},sample:V=>(R=0,vt(V))};return I}function Lx(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ax=Lx(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Mx=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),No=10,Fx=2e4,Rx=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Q1(t.ease);function zx(e,t,{onUpdate:n,onComplete:r,...i}){if(!(Ax()&&Mx.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let a=!1,s,l,u=!1;const f=()=>{l=new Promise(h=>{s=h})};f();let{keyframes:d,duration:m=300,ease:g,times:x}=i;if(Rx(t,i)){const h=rs({...i,repeat:0,delay:0});let S={done:!1,value:d[0]};const C=[];let P=0;for(;!S.done&&P<Fx;)S=h.sample(P),C.push(S.value),P+=No;x=void 0,d=C,m=P-No,g="linear"}const w=U3(e.owner.current,t,d,{...i,duration:m,ease:g,times:x}),k=()=>{u=!1,w.cancel()},v=()=>{u=!0,G.update(k),s(),f()};return w.onfinish=()=>{u||(e.set(H3(d,i)),r&&r(),v())},{then(h,S){return l.then(h,S)},attachTimeline(h){return w.timeline=h,w.onfinish=null,oe},get time(){return Dt(w.currentTime||0)},set time(h){w.currentTime=vn(h)},get speed(){return w.playbackRate},set speed(h){w.playbackRate=h},get duration(){return Dt(m)},play:()=>{a||(w.play(),_t(k))},pause:()=>w.pause(),stop:()=>{if(a=!0,w.playState==="idle")return;const{currentTime:h}=w;if(h){const S=rs({...i,autoplay:!1});e.setWithVelocity(S.sample(h-No).value,S.sample(h).value,No)}v()},complete:()=>{u||w.finish()},cancel:v}}function Vx({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:oe,pause:oe,stop:oe,then:o=>(o(),Promise.resolve()),cancel:oe,complete:oe});return t?rs({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const Dx={type:"spring",stiffness:500,damping:25,restSpeed:10},Nx=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Ix={type:"keyframes",duration:.8},Ox={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Bx=(e,{keyframes:t})=>t.length>2?Ix:qn.has(e)?e.startsWith("scale")?Nx(t[1]):Dx:Ox,Xc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Sn.test(t)||t==="0")&&!t.startsWith("url(")),_x=new Set(["brightness","contrast","saturate","opacity"]);function $x(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Is)||[];if(!r)return e;const i=n.replace(r,"");let o=_x.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const jx=/([a-z-]*)\(.*?\)/g,Zc={...Sn,getAnimatableNone:e=>{const t=e.match(jx);return t?t.map($x).join(" "):e}},Ux={...R1,color:Fe,backgroundColor:Fe,outlineColor:Fe,fill:Fe,stroke:Fe,borderColor:Fe,borderTopColor:Fe,borderRightColor:Fe,borderBottomColor:Fe,borderLeftColor:Fe,filter:Zc,WebkitFilter:Zc},kd=e=>Ux[e];function xg(e,t){let n=kd(e);return n!==Zc&&(n=Sn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const wg=e=>/^0[^.\s]+$/.test(e);function Hx(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||wg(e)}function Wx(e,t,n,r){const i=Xc(t,n);let o;Array.isArray(n)?o=[...n]:o=[null,n];const a=r.from!==void 0?r.from:e.get();let s;const l=[];for(let u=0;u<o.length;u++)o[u]===null&&(o[u]=u===0?a:o[u-1]),Hx(o[u])&&l.push(u),typeof o[u]=="string"&&o[u]!=="none"&&o[u]!=="0"&&(s=o[u]);if(i&&l.length&&s)for(let u=0;u<l.length;u++){const f=l[u];o[f]=xg(t,s)}return o}function Gx({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:l,elapsed:u,...f}){return!!Object.keys(f).length}function Cd(e,t){return e[t]||e.default||e}const Kx={skipAnimations:!1},bd=(e,t,n,r={})=>i=>{const o=Cd(r,e)||{},a=o.delay||r.delay||0;let{elapsed:s=0}=r;s=s-vn(a);const l=Wx(t,e,n,o),u=l[0],f=l[l.length-1],d=Xc(e,u),m=Xc(e,f);let g={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-s,onUpdate:x=>{t.set(x),o.onUpdate&&o.onUpdate(x)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(Gx(o)||(g={...g,...Bx(e,g)}),g.duration&&(g.duration=vn(g.duration)),g.repeatDelay&&(g.repeatDelay=vn(g.repeatDelay)),!d||!m||j3.current||o.type===!1||Kx.skipAnimations)return Vx(g);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const x=zx(t,e,g);if(x)return x}return rs(g)};function is(e){return!!(je(e)&&e.add)}const Eg=e=>/^\-?\d*\.?\d+$/.test(e);function Pd(e,t){e.indexOf(t)===-1&&e.push(t)}function Td(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ld{constructor(){this.subscriptions=[]}add(t){return Pd(this.subscriptions,t),()=>Td(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Yx=e=>!isNaN(parseFloat(e));class Qx{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:o,timestamp:a}=Te;this.lastUpdated!==a&&(this.timeDelta=o,this.lastUpdated=a,G.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>G.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Yx(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Ld);const r=this.events[t].add(n);return t==="change"?()=>{r(),G.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?gg(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Or(e,t){return new Qx(e,t)}const Sg=e=>t=>t.test(e),Xx={test:e=>e==="auto",parse:e=>e},kg=[Jn,N,bt,Xt,r3,n3,Xx],ei=e=>kg.find(Sg(e)),Zx=[...kg,Fe,Sn],qx=e=>Zx.find(Sg(e));function Jx(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Or(n))}function ew(e,t){const n=Bs(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const a in o){const s=v3(o[a]);Jx(e,a,s)}}function tw(e,t,n){var r,i;const o=Object.keys(t).filter(s=>!e.hasValue(s)),a=o.length;if(a)for(let s=0;s<a;s++){const l=o[s],u=t[l];let f=null;Array.isArray(u)&&(f=u[0]),f===null&&(f=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),f!=null&&(typeof f=="string"&&(Eg(f)||wg(f))?f=parseFloat(f):!qx(f)&&Sn.test(u)&&(f=xg(l,u)),e.addValue(l,Or(f,{owner:e})),n[l]===void 0&&(n[l]=f),f!==null&&e.setBaseTarget(l,f))}}function nw(e,t){return t?(t[e]||t.default||t).from:void 0}function rw(e,t,n){const r={};for(const i in e){const o=nw(i,t);if(o!==void 0)r[i]=o;else{const a=n.getValue(i);a&&(r[i]=a.get())}}return r}function iw({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ow(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function Cg(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:a,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const u=[],f=i&&e.animationState&&e.animationState.getState()[i];for(const d in s){const m=e.getValue(d),g=s[d];if(!m||g===void 0||f&&iw(f,d))continue;const x={delay:n,elapsed:0,...Cd(o||{},d)};if(window.HandoffAppearAnimations){const v=e.getProps()[b1];if(v){const p=window.HandoffAppearAnimations(v,d,m,G);p!==null&&(x.elapsed=p,x.isHandoff=!0)}}let w=!x.isHandoff&&!ow(m,g);if(x.type==="spring"&&(m.getVelocity()||x.velocity)&&(w=!1),m.animation&&(w=!1),w)continue;m.start(bd(d,m,g,e.shouldReduceMotion&&qn.has(d)?{type:!1}:x));const k=m.animation;is(l)&&(l.add(d),k.then(()=>l.remove(d))),u.push(k)}return a&&Promise.all(u).then(()=>{a&&ew(e,a)}),u}function qc(e,t,n={}){const r=Bs(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Cg(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:d}=i;return aw(e,t,u+l,f,d,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[l,u]=s==="beforeChildren"?[o,a]:[a,o];return l().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function aw(e,t,n=0,r=0,i=1,o){const a=[],s=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(sw).forEach((u,f)=>{u.notify("AnimationStart",t),a.push(qc(u,t,{...o,delay:n+l(f)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function sw(e,t){return e.sortNodePosition(t)}function lw(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>qc(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=qc(e,t,n);else{const i=typeof t=="function"?Bs(e,t,n.custom):t;r=Promise.all(Cg(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const cw=[...cd].reverse(),uw=cd.length;function dw(e){return t=>Promise.all(t.map(({animation:n,options:r})=>lw(e,n,r)))}function fw(e){let t=dw(e);const n=pw();let r=!0;const i=(l,u)=>{const f=Bs(e,u);if(f){const{transition:d,transitionEnd:m,...g}=f;l={...l,...g,...m}}return l};function o(l){t=l(e)}function a(l,u){const f=e.getProps(),d=e.getVariantContext(!0)||{},m=[],g=new Set;let x={},w=1/0;for(let v=0;v<uw;v++){const p=cw[v],h=n[p],S=f[p]!==void 0?f[p]:d[p],C=Ji(S),P=p===u?h.isActive:null;P===!1&&(w=v);let b=S===d[p]&&S!==f[p]&&C;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),h.protectedKeys={...x},!h.isActive&&P===null||!S&&!h.prevProp||Ds(S)||typeof S=="boolean")continue;let R=mw(h.prevProp,S)||p===u&&h.isActive&&!b&&C||v>w&&C,z=!1;const re=Array.isArray(S)?S:[S];let de=re.reduce(i,{});P===!1&&(de={});const{prevResolvedValues:we={}}=h,se={...we,...de},vt=Z=>{R=!0,g.has(Z)&&(z=!0,g.delete(Z)),h.needsAnimating[Z]=!0};for(const Z in se){const Ce=de[Z],A=we[Z];if(x.hasOwnProperty(Z))continue;let F=!1;es(Ce)&&es(A)?F=!K1(Ce,A):F=Ce!==A,F?Ce!==void 0?vt(Z):g.add(Z):Ce!==void 0&&g.has(Z)?vt(Z):h.protectedKeys[Z]=!0}h.prevProp=S,h.prevResolvedValues=de,h.isActive&&(x={...x,...de}),r&&e.blockInitialAnimation&&(R=!1),R&&(!b||z)&&m.push(...re.map(Z=>({animation:Z,options:{type:p,...l}})))}if(g.size){const v={};g.forEach(p=>{const h=e.getBaseTarget(p);h!==void 0&&(v[p]=h)}),m.push({animation:v})}let k=!!m.length;return r&&(f.initial===!1||f.initial===f.animate)&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,k?t(m):Promise.resolve()}function s(l,u,f){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(g=>{var x;return(x=g.animationState)===null||x===void 0?void 0:x.setActive(l,u)}),n[l].isActive=u;const m=a(f,l);for(const g in n)n[g].protectedKeys={};return m}return{animateChanges:a,setActive:s,setAnimateFunction:o,getState:()=>n}}function mw(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!K1(t,e):!1}function Ln(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function pw(){return{animate:Ln(!0),whileInView:Ln(),whileHover:Ln(),whileTap:Ln(),whileDrag:Ln(),whileFocus:Ln(),exit:Ln()}}class hw extends Pn{constructor(t){super(t),t.animationState||(t.animationState=fw(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Ds(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let gw=0;class vw extends Pn{constructor(){super(...arguments),this.id=gw++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const yw={animation:{Feature:hw},exit:{Feature:vw}},Cm=(e,t)=>Math.abs(e-t);function xw(e,t){const n=Cm(e.x,t.x),r=Cm(e.y,t.y);return Math.sqrt(n**2+r**2)}class bg{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Ll(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,g=xw(d.offset,{x:0,y:0})>=3;if(!m&&!g)return;const{point:x}=d,{timestamp:w}=Te;this.history.push({...x,timestamp:w});const{onStart:k,onMove:v}=this.handlers;m||(k&&k(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,d)},this.handlePointerMove=(d,m)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Tl(m,this.transformPagePoint),G.update(this.updatePoint,!0)},this.handlePointerUp=(d,m)=>{this.end();const{onEnd:g,onSessionEnd:x,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=Ll(d.type==="pointercancel"?this.lastMoveEventInfo:Tl(m,this.transformPagePoint),this.history);this.startEvent&&g&&g(d,k),x&&x(d,k)},!j1(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=Os(t),s=Tl(a,this.transformPagePoint),{point:l}=s,{timestamp:u}=Te;this.history=[{...l,timestamp:u}];const{onSessionStart:f}=n;f&&f(t,Ll(s,this.history)),this.removeListeners=gn(Vt(this.contextWindow,"pointermove",this.handlePointerMove),Vt(this.contextWindow,"pointerup",this.handlePointerUp),Vt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),_t(this.updatePoint)}}function Tl(e,t){return t?{point:t(e.point)}:e}function bm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ll({point:e},t){return{point:e,delta:bm(e,Pg(t)),offset:bm(e,ww(t)),velocity:Ew(t,.1)}}function ww(e){return e[0]}function Pg(e){return e[e.length-1]}function Ew(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Pg(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>vn(t)));)n--;if(!r)return{x:0,y:0};const o=Dt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Ke(e){return e.max-e.min}function Jc(e,t=0,n=.01){return Math.abs(e-t)<=n}function Pm(e,t,n,r=.5){e.origin=r,e.originPoint=J(t.min,t.max,e.origin),e.scale=Ke(n)/Ke(t),(Jc(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=J(n.min,n.max,e.origin)-e.originPoint,(Jc(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Ai(e,t,n,r){Pm(e.x,t.x,n.x,r?r.originX:void 0),Pm(e.y,t.y,n.y,r?r.originY:void 0)}function Tm(e,t,n){e.min=n.min+t.min,e.max=e.min+Ke(t)}function Sw(e,t,n){Tm(e.x,t.x,n.x),Tm(e.y,t.y,n.y)}function Lm(e,t,n){e.min=t.min-n.min,e.max=e.min+Ke(t)}function Mi(e,t,n){Lm(e.x,t.x,n.x),Lm(e.y,t.y,n.y)}function kw(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?J(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?J(n,e,r.max):Math.min(e,n)),e}function Am(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Cw(e,{top:t,left:n,bottom:r,right:i}){return{x:Am(e.x,n,i),y:Am(e.y,t,r)}}function Mm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function bw(e,t){return{x:Mm(e.x,t.x),y:Mm(e.y,t.y)}}function Pw(e,t){let n=.5;const r=Ke(e),i=Ke(t);return i>r?n=to(t.min,t.max-r,e.min):r>i&&(n=to(e.min,e.max-i,t.min)),En(0,1,n)}function Tw(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const eu=.35;function Lw(e=eu){return e===!1?e=0:e===!0&&(e=eu),{x:Fm(e,"left","right"),y:Fm(e,"top","bottom")}}function Fm(e,t,n){return{min:Rm(e,t),max:Rm(e,n)}}function Rm(e,t){return typeof e=="number"?e:e[t]||0}const zm=()=>({translate:0,scale:1,origin:0,originPoint:0}),yr=()=>({x:zm(),y:zm()}),Vm=()=>({min:0,max:0}),le=()=>({x:Vm(),y:Vm()});function Je(e){return[e("x"),e("y")]}function Tg({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Aw({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Mw(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Al(e){return e===void 0||e===1}function tu({scale:e,scaleX:t,scaleY:n}){return!Al(e)||!Al(t)||!Al(n)}function Rn(e){return tu(e)||Lg(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Lg(e){return Dm(e.x)||Dm(e.y)}function Dm(e){return e&&e!=="0%"}function os(e,t,n){const r=e-n,i=t*r;return n+i}function Nm(e,t,n,r,i){return i!==void 0&&(e=os(e,i,r)),os(e,n,r)+t}function nu(e,t=0,n=1,r,i){e.min=Nm(e.min,t,n,r,i),e.max=Nm(e.max,t,n,r,i)}function Ag(e,{x:t,y:n}){nu(e.x,t.translate,t.scale,t.originPoint),nu(e.y,n.translate,n.scale,n.originPoint)}function Fw(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,a;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const l=o.instance;l&&l.style&&l.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&xr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Ag(e,a)),r&&Rn(o.latestValues)&&xr(e,o.latestValues))}t.x=Im(t.x),t.y=Im(t.y)}function Im(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Jt(e,t){e.min=e.min+t,e.max=e.max+t}function Om(e,t,[n,r,i]){const o=t[i]!==void 0?t[i]:.5,a=J(e.min,e.max,o);nu(e,t[n],t[r],a,t.scale)}const Rw=["x","scaleX","originX"],zw=["y","scaleY","originY"];function xr(e,t){Om(e.x,t,Rw),Om(e.y,t,zw)}function Mg(e,t){return Tg(Mw(e.getBoundingClientRect(),t))}function Vw(e,t,n){const r=Mg(e,n),{scroll:i}=t;return i&&(Jt(r.x,i.offset.x),Jt(r.y,i.offset.y)),r}const Fg=({current:e})=>e?e.ownerDocument.defaultView:null,Dw=new WeakMap;class Nw{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=le(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=f=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Os(f,"page").point)},o=(f,d)=>{const{drag:m,dragPropagation:g,onDragStart:x}=this.getProps();if(m&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=H1(m),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Je(k=>{let v=this.getAxisMotionValue(k).get()||0;if(bt.test(v)){const{projection:p}=this.visualElement;if(p&&p.layout){const h=p.layout.layoutBox[k];h&&(v=Ke(h)*(parseFloat(v)/100))}}this.originPoint[k]=v}),x&&G.update(()=>x(f,d),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},a=(f,d)=>{const{dragPropagation:m,dragDirectionLock:g,onDirectionLock:x,onDrag:w}=this.getProps();if(!m&&!this.openGlobalLock)return;const{offset:k}=d;if(g&&this.currentDirection===null){this.currentDirection=Iw(k),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",d.point,k),this.updateAxis("y",d.point,k),this.visualElement.render(),w&&w(f,d)},s=(f,d)=>this.stop(f,d),l=()=>Je(f=>{var d;return this.getAnimationState(f)==="paused"&&((d=this.getAxisMotionValue(f).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new bg(t,{onSessionStart:i,onStart:o,onMove:a,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Fg(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&G.update(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Io(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=kw(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&gr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=Cw(i.layoutBox,n):this.constraints=!1,this.elastic=Lw(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Je(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=Tw(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!gr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=Vw(r,i.root,this.visualElement.getTransformPagePoint());let a=bw(i.layout.layoutBox,o);if(n){const s=n(Aw(a));this.hasMutatedConstraints=!!s,s&&(a=Tg(s))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=Je(f=>{if(!Io(f,n,this.currentDirection))return;let d=l&&l[f]||{};a&&(d={min:0,max:0});const m=i?200:1e6,g=i?40:1e7,x={type:"inertia",velocity:r?t[f]:0,bounceStiffness:m,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(f,x)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(bd(t,r,0,n))}stopAnimation(){Je(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Je(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Je(n=>{const{drag:r}=this.getProps();if(!Io(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:s}=i.layout.layoutBox[n];o.set(t[n]-J(a,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!gr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Je(a=>{const s=this.getAxisMotionValue(a);if(s){const l=s.get();i[a]=Pw({min:l,max:l},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Je(a=>{if(!Io(a,t,null))return;const s=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];s.set(J(l,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;Dw.set(this.visualElement,this);const t=this.visualElement.current,n=Vt(t,"pointerdown",l=>{const{drag:u,dragListener:f=!0}=this.getProps();u&&f&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();gr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const a=Rt(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Je(f=>{const d=this.getAxisMotionValue(f);d&&(this.originPoint[f]+=l[f].translate,d.set(d.get()+l[f].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=eu,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:s}}}function Io(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Iw(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Ow extends Pn{constructor(t){super(t),this.removeGroupControls=oe,this.removeListeners=oe,this.controls=new Nw(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||oe}unmount(){this.removeGroupControls(),this.removeListeners()}}const Bm=e=>(t,n)=>{e&&G.update(()=>e(t,n))};class Bw extends Pn{constructor(){super(...arguments),this.removePointerDownListener=oe}onPointerDown(t){this.session=new bg(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Fg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Bm(t),onStart:Bm(n),onMove:r,onEnd:(o,a)=>{delete this.session,i&&G.update(()=>i(o,a))}}}mount(){this.removePointerDownListener=Vt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function _w(){const e=E.useContext(zs);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=E.useId();return E.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const xa={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function _m(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ti={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(N.test(e))e=parseFloat(e);else return e;const n=_m(e,t.target.x),r=_m(e,t.target.y);return`${n}% ${r}%`}},$w={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Sn.parse(e);if(i.length>5)return r;const o=Sn.createTransformer(e),a=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;i[0+a]/=s,i[1+a]/=l;const u=J(s,l,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),o(i)}};class jw extends c.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;Q5(Uw),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),xa.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||G.postRender(()=>{const s=a.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Rg(e){const[t,n]=_w(),r=E.useContext(dd);return c.createElement(jw,{...e,layoutGroup:r,switchLayoutGroup:E.useContext(T1),isPresent:t,safeToRemove:n})}const Uw={borderRadius:{...ti,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ti,borderTopRightRadius:ti,borderBottomLeftRadius:ti,borderBottomRightRadius:ti,boxShadow:$w},zg=["TopLeft","TopRight","BottomLeft","BottomRight"],Hw=zg.length,$m=e=>typeof e=="string"?parseFloat(e):e,jm=e=>typeof e=="number"||N.test(e);function Ww(e,t,n,r,i,o){i?(e.opacity=J(0,n.opacity!==void 0?n.opacity:1,Gw(r)),e.opacityExit=J(t.opacity!==void 0?t.opacity:1,0,Kw(r))):o&&(e.opacity=J(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<Hw;a++){const s=`border${zg[a]}Radius`;let l=Um(t,s),u=Um(n,s);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||jm(l)===jm(u)?(e[s]=Math.max(J($m(l),$m(u),r),0),(bt.test(u)||bt.test(l))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=J(t.rotate||0,n.rotate||0,r))}function Um(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Gw=Vg(0,.5,ng),Kw=Vg(.5,.95,oe);function Vg(e,t,n){return r=>r<e?0:r>t?1:n(to(e,t,r))}function Hm(e,t){e.min=t.min,e.max=t.max}function qe(e,t){Hm(e.x,t.x),Hm(e.y,t.y)}function Wm(e,t,n,r,i){return e-=t,e=os(e,1/n,r),i!==void 0&&(e=os(e,1/i,r)),e}function Yw(e,t=0,n=1,r=.5,i,o=e,a=e){if(bt.test(t)&&(t=parseFloat(t),t=J(a.min,a.max,t/100)-a.min),typeof t!="number")return;let s=J(o.min,o.max,r);e===o&&(s-=t),e.min=Wm(e.min,t,n,s,i),e.max=Wm(e.max,t,n,s,i)}function Gm(e,t,[n,r,i],o,a){Yw(e,t[n],t[r],t[i],t.scale,o,a)}const Qw=["x","scaleX","originX"],Xw=["y","scaleY","originY"];function Km(e,t,n,r){Gm(e.x,t,Qw,n?n.x:void 0,r?r.x:void 0),Gm(e.y,t,Xw,n?n.y:void 0,r?r.y:void 0)}function Ym(e){return e.translate===0&&e.scale===1}function Dg(e){return Ym(e.x)&&Ym(e.y)}function Zw(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Ng(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Qm(e){return Ke(e.x)/Ke(e.y)}class qw{constructor(){this.members=[]}add(t){Pd(this.members,t),t.scheduleRender()}remove(t){if(Td(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Xm(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:f}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),f&&(r+=`rotateY(${f}deg) `)}const a=e.x.scale*t.x,s=e.y.scale*t.y;return(a!==1||s!==1)&&(r+=`scale(${a}, ${s})`),r||"none"}const Jw=(e,t)=>e.depth-t.depth;class e6{constructor(){this.children=[],this.isDirty=!1}add(t){Pd(this.children,t),this.isDirty=!0}remove(t){Td(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Jw),this.isDirty=!1,this.children.forEach(t)}}function t6(e,t){const n=performance.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(_t(r),e(o-t))};return G.read(r,!0),()=>_t(r)}function n6(e){window.MotionDebug&&window.MotionDebug.record(e)}function r6(e){return e instanceof SVGElement&&e.tagName!=="svg"}function i6(e,t,n){const r=je(e)?e:Or(e);return r.start(bd("",r,t,n)),r.animation}const Zm=["","X","Y","Z"],o6={visibility:"hidden"},qm=1e3;let a6=0;const zn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Ig({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},s=t==null?void 0:t()){this.id=a6++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,zn.totalNodes=zn.resolvedTargetDeltas=zn.recalculatedProjection=0,this.nodes.forEach(c6),this.nodes.forEach(p6),this.nodes.forEach(h6),this.nodes.forEach(u6),n6(zn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new e6)}addEventListener(a,s){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Ld),this.eventHandlers.get(a).add(s)}notifyListeners(a,...s){const l=this.eventHandlers.get(a);l&&l.notify(...s)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=r6(a),this.instance=a;const{layoutId:l,layout:u,visualElement:f}=this.options;if(f&&!f.current&&f.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const m=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=t6(m,250),xa.hasAnimatedSinceResize&&(xa.hasAnimatedSinceResize=!1,this.nodes.forEach(ep))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&f&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:m,hasRelativeTargetChanged:g,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||f.getDefaultTransition()||w6,{onLayoutAnimationStart:k,onLayoutAnimationComplete:v}=f.getProps(),p=!this.targetLayout||!Ng(this.targetLayout,x)||g,h=!m&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||h||m&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,h);const S={...Cd(w,"layout"),onPlay:k,onComplete:v};(f.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else m||ep(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,_t(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(g6),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const d=this.path[f];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Jm);return}this.isUpdating||this.nodes.forEach(f6),this.isUpdating=!1,this.nodes.forEach(m6),this.nodes.forEach(s6),this.nodes.forEach(l6),this.clearAllSnapshots();const s=performance.now();Te.delta=En(0,1e3/60,s-Te.timestamp),Te.timestamp=s,Te.isProcessing=!0,xl.update.process(Te),xl.preRender.process(Te),xl.render.process(Te),Te.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(d6),this.sharedNodes.forEach(v6)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,G.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){G.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=le(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let s=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:a,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform,s=this.projectionDelta&&!Dg(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,f=u!==this.prevTransformTemplateValue;a&&(s||Rn(this.latestValues)||f)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return a&&(l=this.removeTransform(l)),E6(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return le();const s=a.measureViewportBox(),{scroll:l}=this.root;return l&&(Jt(s.x,l.offset.x),Jt(s.y,l.offset.y)),s}removeElementScroll(a){const s=le();qe(s,a);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:f,options:d}=u;if(u!==this.root&&f&&d.layoutScroll){if(f.isRoot){qe(s,a);const{scroll:m}=this.root;m&&(Jt(s.x,-m.offset.x),Jt(s.y,-m.offset.y))}Jt(s.x,f.offset.x),Jt(s.y,f.offset.y)}}return s}applyTransform(a,s=!1){const l=le();qe(l,a);for(let u=0;u<this.path.length;u++){const f=this.path[u];!s&&f.options.layoutScroll&&f.scroll&&f!==f.root&&xr(l,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),Rn(f.latestValues)&&xr(l,f.latestValues)}return Rn(this.latestValues)&&xr(l,this.latestValues),l}removeTransform(a){const s=le();qe(s,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Rn(u.latestValues))continue;tu(u.latestValues)&&u.updateSnapshot();const f=le(),d=u.measurePageBox();qe(f,d),Km(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,f)}return Rn(this.latestValues)&&Km(s,this.latestValues),s}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Te.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:m}=this.options;if(!(!this.layout||!(d||m))){if(this.resolvedRelativeTargetAt=Te.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=le(),this.relativeTargetOrigin=le(),Mi(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=le(),this.targetWithTransforms=le()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Sw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):qe(this.target,this.layout.layoutBox),Ag(this.target,this.targetDelta)):qe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=le(),this.relativeTargetOrigin=le(),Mi(this.relativeTargetOrigin,this.target,g.target),qe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}zn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||tu(this.parent.latestValues)||Lg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Te.timestamp&&(u=!1),u)return;const{layout:f,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||d))return;qe(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,g=this.treeScale.y;Fw(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox);const{target:x}=s;if(!x){this.projectionTransform&&(this.projectionDelta=yr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=yr(),this.projectionDeltaWithTransform=yr());const w=this.projectionTransform;Ai(this.projectionDelta,this.layoutCorrected,x,this.latestValues),this.projectionTransform=Xm(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==m||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),zn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),a){const s=this.getStack();s&&s.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(a,s=!1){const l=this.snapshot,u=l?l.latestValues:{},f={...this.latestValues},d=yr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const m=le(),g=l?l.source:void 0,x=this.layout?this.layout.source:void 0,w=g!==x,k=this.getStack(),v=!k||k.members.length<=1,p=!!(w&&!v&&this.options.crossfade===!0&&!this.path.some(x6));this.animationProgress=0;let h;this.mixTargetDelta=S=>{const C=S/1e3;tp(d.x,a.x,C),tp(d.y,a.y,C),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Mi(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),y6(this.relativeTarget,this.relativeTargetOrigin,m,C),h&&Zw(this.relativeTarget,h)&&(this.isProjectionDirty=!1),h||(h=le()),qe(h,this.relativeTarget)),w&&(this.animationValues=f,Ww(f,u,this.latestValues,C,p,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(_t(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=G.update(()=>{xa.hasAnimatedSinceResize=!0,this.currentAnimation=i6(0,qm,{...a,onUpdate:s=>{this.mixTargetDelta(s),a.onUpdate&&a.onUpdate(s)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(qm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:f}=a;if(!(!s||!l||!u)){if(this!==a&&this.layout&&u&&Og(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||le();const d=Ke(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+d;const m=Ke(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+m}qe(s,l),xr(s,f),Ai(this.projectionDeltaWithTransform,this.layoutCorrected,s,f)}}registerSharedNode(a,s){this.sharedNodes.has(a)||this.sharedNodes.set(a,new qw),this.sharedNodes.get(a).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetRotation(){const{visualElement:a}=this.options;if(!a)return;let s=!1;const{latestValues:l}=a;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(s=!0),!s)return;const u={};for(let f=0;f<Zm.length;f++){const d="rotate"+Zm[f];l[d]&&(u[d]=l[d],a.setStaticValue(d,0))}a.render();for(const f in u)a.setStaticValue(f,u[f]);a.scheduleRender()}getProjectionStyles(a){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return o6;const u={visibility:""},f=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=ya(a==null?void 0:a.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=ya(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Rn(this.latestValues)&&(w.transform=f?f({},""):"none",this.hasProjected=!1),w}const m=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=Xm(this.projectionDeltaWithTransform,this.treeScale,m),f&&(u.transform=f(m,u.transform));const{x:g,y:x}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${x.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(s=m.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=d===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const w in qa){if(m[w]===void 0)continue;const{correct:k,applyTo:v}=qa[w],p=u.transform==="none"?m[w]:k(m[w],d);if(v){const h=v.length;for(let S=0;S<h;S++)u[v[S]]=p}else u[w]=p}return this.options.layoutId&&(u.pointerEvents=d===this?ya(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var s;return(s=a.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Jm),this.root.sharedNodes.clear()}}}function s6(e){e.updateLayout()}function l6(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,a=n.source!==e.layout.source;o==="size"?Je(d=>{const m=a?n.measuredBox[d]:n.layoutBox[d],g=Ke(m);m.min=r[d].min,m.max=m.min+g}):Og(o,n.layoutBox,r)&&Je(d=>{const m=a?n.measuredBox[d]:n.layoutBox[d],g=Ke(r[d]);m.max=m.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+g)});const s=yr();Ai(s,r,n.layoutBox);const l=yr();a?Ai(l,e.applyTransform(i,!0),n.measuredBox):Ai(l,r,n.layoutBox);const u=!Dg(s);let f=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:m,layout:g}=d;if(m&&g){const x=le();Mi(x,n.layoutBox,m.layoutBox);const w=le();Mi(w,r,g.layoutBox),Ng(x,w)||(f=!0),d.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=x,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:f})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function c6(e){zn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function u6(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function d6(e){e.clearSnapshot()}function Jm(e){e.clearMeasurements()}function f6(e){e.isLayoutDirty=!1}function m6(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ep(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function p6(e){e.resolveTargetDelta()}function h6(e){e.calcProjection()}function g6(e){e.resetRotation()}function v6(e){e.removeLeadSnapshot()}function tp(e,t,n){e.translate=J(t.translate,0,n),e.scale=J(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function np(e,t,n,r){e.min=J(t.min,n.min,r),e.max=J(t.max,n.max,r)}function y6(e,t,n,r){np(e.x,t.x,n.x,r),np(e.y,t.y,n.y,r)}function x6(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const w6={duration:.45,ease:[.4,0,.1,1]},rp=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),ip=rp("applewebkit/")&&!rp("chrome/")?Math.round:oe;function op(e){e.min=ip(e.min),e.max=ip(e.max)}function E6(e){op(e.x),op(e.y)}function Og(e,t,n){return e==="position"||e==="preserve-aspect"&&!Jc(Qm(t),Qm(n),.2)}const S6=Ig({attachResizeListener:(e,t)=>Rt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ml={current:void 0},Bg=Ig({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ml.current){const e=new S6({});e.mount(window),e.setOptions({layoutScroll:!0}),Ml.current=e}return Ml.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),k6={pan:{Feature:Bw},drag:{Feature:Ow,ProjectionNode:Bg,MeasureLayout:Rg}},C6=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function b6(e){const t=C6.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function ru(e,t,n=1){const[r,i]=b6(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const a=o.trim();return Eg(a)?parseFloat(a):a}else return Gc(i)?ru(i,t,n+1):i}function P6(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const o=i.get();if(!Gc(o))return;const a=ru(o,r);a&&i.set(a)});for(const i in t){const o=t[i];if(!Gc(o))continue;const a=ru(o,r);a&&(t[i]=a,n||(n={}),n[i]===void 0&&(n[i]=o))}return{target:t,transitionEnd:n}}const T6=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),_g=e=>T6.has(e),L6=e=>Object.keys(e).some(_g),ap=e=>e===Jn||e===N,sp=(e,t)=>parseFloat(e.split(", ")[t]),lp=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return sp(i[1],t);{const o=r.match(/^matrix\((.+)\)$/);return o?sp(o[1],e):0}},A6=new Set(["x","y","z"]),M6=co.filter(e=>!A6.has(e));function F6(e){const t=[];return M6.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Br={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:lp(4,13),y:lp(5,14)};Br.translateX=Br.x;Br.translateY=Br.y;const R6=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:a}=o,s={};a==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{s[u]=Br[u](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const f=t.getValue(u);f&&f.jump(s[u]),e[u]=Br[u](l,o)}),e},z6=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(_g);let o=[],a=!1;const s=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let f=n[l],d=ei(f);const m=t[l];let g;if(es(m)){const x=m.length,w=m[0]===null?1:0;f=m[w],d=ei(f);for(let k=w;k<x&&m[k]!==null;k++)g?xd(ei(m[k])===g):g=ei(m[k])}else g=ei(m);if(d!==g)if(ap(d)&&ap(g)){const x=u.get();typeof x=="string"&&u.set(parseFloat(x)),typeof m=="string"?t[l]=parseFloat(m):Array.isArray(m)&&g===N&&(t[l]=m.map(parseFloat))}else d!=null&&d.transform&&(g!=null&&g.transform)&&(f===0||m===0)?f===0?u.set(g.transform(f)):t[l]=d.transform(m):(a||(o=F6(e),a=!0),s.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(m))}),s.length){const l=s.indexOf("height")>=0?window.pageYOffset:null,u=R6(t,e,s);return o.length&&o.forEach(([f,d])=>{e.getValue(f).set(d)}),e.render(),Vs&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function V6(e,t,n,r){return L6(t)?z6(e,t,n,r):{target:t,transitionEnd:r}}const D6=(e,t,n,r)=>{const i=P6(e,t,r);return t=i.target,r=i.transitionEnd,V6(e,t,n,r)},iu={current:null},$g={current:!1};function N6(){if($g.current=!0,!!Vs)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>iu.current=e.matches;e.addListener(t),t()}else iu.current=!1}function I6(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],a=n[i];if(je(o))e.addValue(i,o),is(r)&&r.add(i);else if(je(a))e.addValue(i,Or(o,{owner:e})),is(r)&&r.remove(i);else if(a!==o)if(e.hasValue(i)){const s=e.getValue(i);!s.hasAnimated&&s.set(o)}else{const s=e.getStaticValue(i);e.addValue(i,Or(s!==void 0?s:o,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const cp=new WeakMap,jg=Object.keys(eo),O6=jg.length,up=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],B6=ud.length;class _6{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>G.render(this.render,!1,!0);const{latestValues:s,renderState:l}=o;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.isControllingVariants=Ns(n),this.isVariantNode=P1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(n,{});for(const d in f){const m=f[d];s[d]!==void 0&&je(m)&&(m.set(s[d],!1),is(u)&&u.add(d))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,cp.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),$g.current||N6(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:iu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){cp.delete(this.current),this.projection&&this.projection.unmount(),_t(this.notifyUpdate),_t(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=qn.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&G.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,o){let a,s;for(let l=0;l<O6;l++){const u=jg[l],{isEnabled:f,Feature:d,ProjectionNode:m,MeasureLayout:g}=eo[u];m&&(a=m),f(n)&&(!this.features[u]&&d&&(this.features[u]=new d(this)),g&&(s=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&a){this.projection=new a(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:f,dragConstraints:d,layoutScroll:m,layoutRoot:g}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!f||d&&gr(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:m,layoutRoot:g})}return s}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):le()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<up.length;r++){const i=up[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o=t["on"+i];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=I6(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<B6;r++){const i=ud[r],o=this.props[i];(Ji(o)||o===!1)&&(n[i]=o)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Or(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=yd(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!je(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Ld),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Ug extends _6{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},o){let a=rw(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),a&&(a=i(a))),o){tw(this,r,a);const s=D6(this,r,a,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function $6(e){return window.getComputedStyle(e)}class j6 extends Ug{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(qn.has(n)){const r=kd(n);return r&&r.default||0}else{const r=$6(t),i=(M1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Mg(t,n)}build(t,n,r,i){md(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return vd(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;je(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){N1(t,n,r,i)}}class U6 extends Ug{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(qn.has(n)){const r=kd(n);return r&&r.default||0}return n=I1.has(n)?n:ld(n),t.getAttribute(n)}measureInstanceViewportBox(){return le()}scrapeMotionValuesFromProps(t,n){return B1(t,n)}build(t,n,r,i){hd(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){O1(t,n,r,i)}mount(t){this.isSVGTag=gd(t.tagName),super.mount(t)}}const H6=(e,t)=>fd(e)?new U6(t,{enableHardwareAcceleration:!1}):new j6(t,{enableHardwareAcceleration:!0}),W6={layout:{ProjectionNode:Bg,MeasureLayout:Rg}},G6={...yw,...O3,...k6,...W6},D=K5((e,t)=>b3(e,t,G6,H6));function Hg(){const e=E.useRef(!1);return sd(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function K6(){const e=Hg(),[t,n]=E.useState(0),r=E.useCallback(()=>{e.current&&n(t+1)},[t]);return[E.useCallback(()=>G.postRender(r),[r]),t]}class Y6 extends E.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Q6({children:e,isPresent:t}){const n=E.useId(),r=E.useRef(null),i=E.useRef({width:0,height:0,top:0,left:0});return E.useInsertionEffect(()=>{const{width:o,height:a,top:s,left:l}=i.current;if(t||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),E.createElement(Y6,{isPresent:t,childRef:r,sizeRef:i},E.cloneElement(e,{ref:r}))}const Fl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const s=_1(X6),l=E.useId(),u=E.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:f=>{s.set(f,!0);for(const d of s.values())if(!d)return;r&&r()},register:f=>(s.set(f,!1),()=>s.delete(f))}),o?void 0:[n]);return E.useMemo(()=>{s.forEach((f,d)=>s.set(d,!1))},[n]),E.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),a==="popLayout"&&(e=E.createElement(Q6,{isPresent:n},e)),E.createElement(zs.Provider,{value:u},e)};function X6(){return new Map}function Z6(e){return E.useEffect(()=>()=>e(),[])}const Vn=e=>e.key||"";function q6(e,t){e.forEach(n=>{const r=Vn(n);t.set(r,n)})}function J6(e){const t=[];return E.Children.forEach(e,n=>{E.isValidElement(n)&&t.push(n)}),t}const eE=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:o=!0,mode:a="sync"})=>{const s=E.useContext(dd).forceRender||K6()[0],l=Hg(),u=J6(e);let f=u;const d=E.useRef(new Map).current,m=E.useRef(f),g=E.useRef(new Map).current,x=E.useRef(!0);if(sd(()=>{x.current=!1,q6(u,g),m.current=f}),Z6(()=>{x.current=!0,g.clear(),d.clear()}),x.current)return E.createElement(E.Fragment,null,f.map(p=>E.createElement(Fl,{key:Vn(p),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:o,mode:a},p)));f=[...f];const w=m.current.map(Vn),k=u.map(Vn),v=w.length;for(let p=0;p<v;p++){const h=w[p];k.indexOf(h)===-1&&!d.has(h)&&d.set(h,void 0)}return a==="wait"&&d.size&&(f=[]),d.forEach((p,h)=>{if(k.indexOf(h)!==-1)return;const S=g.get(h);if(!S)return;const C=w.indexOf(h);let P=p;if(!P){const b=()=>{d.delete(h);const T=Array.from(g.keys()).filter(R=>!k.includes(R));if(T.forEach(R=>g.delete(R)),m.current=u.filter(R=>{const z=Vn(R);return z===h||T.includes(z)}),!d.size){if(l.current===!1)return;s(),r&&r()}};P=E.createElement(Fl,{key:Vn(S),isPresent:!1,onExitComplete:b,custom:t,presenceAffectsLayout:o,mode:a},S),d.set(h,P)}f.splice(C,0,P)}),f=f.map(p=>{const h=p.key;return d.has(h)?p:E.createElement(Fl,{key:Vn(p),isPresent:!0,presenceAffectsLayout:o,mode:a},p)}),E.createElement(E.Fragment,null,d.size?f:f.map(p=>E.cloneElement(p)))};var Wg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},dp=c.createContext&&c.createContext(Wg),yn=globalThis&&globalThis.__assign||function(){return yn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},yn.apply(this,arguments)},tE=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Gg(e){return e&&e.map(function(t,n){return c.createElement(t.tag,yn({key:n},t.attr),Gg(t.child))})}function B(e){return function(t){return c.createElement(nE,yn({attr:yn({},e.attr)},t),Gg(e.child))}}function nE(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=tE(e,["attr","size","title"]),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),c.createElement("svg",yn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:yn(yn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&c.createElement("title",null,o),e.children)};return dp!==void 0?c.createElement(dp.Consumer,null,function(n){return t(n)}):t(Wg)}function rE(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function iE(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function oE(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function aE(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function _s(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(e)}function Kg(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(e)}function sE(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function lE(e){return B({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"}}]})(e)}function cE(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"}}]})(e)}function hi(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}function uE(e){return B({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"}}]})(e)}function dE(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"}}]})(e)}function Yg(e){return B({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}}]})(e)}function Qg(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function fE(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"}}]})(e)}function $s(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"}}]})(e)}function mE(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"}}]})(e)}function pE(e){return B({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}}]})(e)}function hE(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"}}]})(e)}function gE(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}}]})(e)}function vE(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function Xg(e){return B({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function fp(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}}]})(e)}function Zg(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}}]})(e)}function Rl(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"}}]})(e)}function yE(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"}}]})(e)}function qg(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"}}]})(e)}function po(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function xE(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"}}]})(e)}function ou(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"}}]})(e)}function Jg(e){return B({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(e)}function wE(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"}}]})(e)}function EE(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"}}]})(e)}function SE(e){return B({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function Ad(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}}]})(e)}function kE(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}}]})(e)}function CE(e){return B({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z"}}]})(e)}function bE(e){return B({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"}}]})(e)}function gi(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}const PE=y.nav`
  background-color: var(--surface);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`,TE=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`,LE=y(xe)`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`,AE=y.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,ni=y(Q0)`
  color: var(--text);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: var(--primary);
  }
  
  &.active {
    color: var(--primary);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
      border-radius: 1px;
    }
  }
`,ME=y.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`,FE=y(D.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 75%;
  max-width: 300px;
  background-color: var(--surface);
  z-index: 200;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
`,RE=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,zE=y.h3`
  font-size: 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`,VE=y.button`
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
`,DE=y.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,ri=y(Q0)`
  color: var(--text);
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 1.125rem;
  
  &:hover {
    color: var(--primary);
  }
  
  &.active {
    color: var(--primary);
  }
`,NE=y(D.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
`,IE=y.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,mp=y(xe)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  color: var(--text);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`,pp=y(xe)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
`,hp=y.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  color: var(--text);
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: var(--error);
    color: white;
  }
`,OE=y.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid var(--surface-light);
`,BE=()=>{const[e,t]=E.useState(!1),{isAuthenticated:n,logout:r}=Ms(),i=Ht();E.useEffect(()=>{t(!1)},[i]),E.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[e]);const o=()=>{t(!e)},a=()=>{r(),t(!1)};return c.createElement(PE,null,c.createElement("div",{className:"container"},c.createElement(TE,null,c.createElement(LE,{to:"/"},"Frantz Enterprise"),c.createElement(AE,null,c.createElement(ni,{to:"/"},"Home"),c.createElement(ni,{to:"/about"},"About"),c.createElement(ni,{to:"/products"},"Products"),c.createElement(ni,{to:"/subscriptions"},"Subscriptions"),c.createElement(ni,{to:"/contact"},"Contact")),c.createElement(IE,null,n?c.createElement(c.Fragment,null,c.createElement(pp,{to:"/admin"},c.createElement(gi,null)," Admin"),c.createElement(hp,{onClick:r},c.createElement(ou,null)," Logout")):c.createElement(mp,{to:"/login"},c.createElement(gi,null)," Login")),c.createElement(ME,{onClick:o},c.createElement(sE,null)))),c.createElement(eE,null,e&&c.createElement(c.Fragment,null,c.createElement(NE,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:o}),c.createElement(FE,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"tween",duration:.3}},c.createElement(RE,null,c.createElement(zE,null,"Menu"),c.createElement(VE,{onClick:o},c.createElement(SE,null))),c.createElement(DE,null,c.createElement(ri,{to:"/"},"Home"),c.createElement(ri,{to:"/about"},"About"),c.createElement(ri,{to:"/products"},"Products"),c.createElement(ri,{to:"/subscriptions"},"Subscriptions"),c.createElement(ri,{to:"/contact"},"Contact")),c.createElement(OE,null,n?c.createElement(c.Fragment,null,c.createElement(pp,{to:"/admin"},c.createElement(gi,null)," Admin Dashboard"),c.createElement(hp,{onClick:a},c.createElement(ou,null)," Logout")):c.createElement(mp,{to:"/login"},c.createElement(gi,null)," Login"))))))},_E=y.footer`
  background-color: var(--surface);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
`,$E=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,zl=y.div`
  display: flex;
  flex-direction: column;
`,Vl=y.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    border-radius: 1px;
  }
`,jE=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,ii=y(xe)`
  color: var(--text-secondary);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`,UE=y.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,Oo=y.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    transform: translateY(-3px);
  }
`,gp=y.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
`,vp=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--surface-light);
  color: var(--primary);
`,HE=y.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--surface-light);
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
`,WE=()=>{const e=new Date().getFullYear();return c.createElement(_E,null,c.createElement("div",{className:"container"},c.createElement($E,null,c.createElement(zl,null,c.createElement(Vl,null,"About Us"),c.createElement("p",{style:{color:"var(--text-secondary)",marginBottom:"1.5rem"}},"Frantz Enterprise is an independent affiliate marketing company specializing in promoting high-quality digital products and SaaS subscriptions."),c.createElement(UE,null,c.createElement(Oo,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer"},c.createElement(rE,null)),c.createElement(Oo,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer"},c.createElement(aE,null)),c.createElement(Oo,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer"},c.createElement(iE,null)),c.createElement(Oo,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer"},c.createElement(oE,null)))),c.createElement(zl,null,c.createElement(Vl,null,"Quick Links"),c.createElement(jE,null,c.createElement(ii,{to:"/"},"Home"),c.createElement(ii,{to:"/about"},"About"),c.createElement(ii,{to:"/products"},"Products"),c.createElement(ii,{to:"/subscriptions"},"Subscriptions"),c.createElement(ii,{to:"/contact"},"Contact"))),c.createElement(zl,null,c.createElement(Vl,null,"Contact Info"),c.createElement(gp,null,c.createElement(vp,null,c.createElement(Qg,null)),c.createElement("div",null,c.createElement("p",{style:{margin:0}},"Email"),c.createElement("a",{href:"mailto:Robert@FrantzEnterprise.com",style:{color:"var(--primary)"}},"Robert@FrantzEnterprise.com"))),c.createElement(gp,null,c.createElement(vp,null,c.createElement(Xg,null)),c.createElement("div",null,c.createElement("p",{style:{margin:0}},"Location"),c.createElement("p",{style:{margin:0}},"West Sacramento, CA"))))),c.createElement(HE,null,c.createElement("p",null,"© ",e," Frantz Enterprise. All rights reserved. |",c.createElement("span",{style:{marginLeft:"0.5rem"}},"Frantz Enterprise is not affiliated with Facebook, Google, or any brand featured on this website.")))))},GE=()=>{const{pathname:e}=Ht();return E.useEffect(()=>{window.scrollTo(0,0)},[e]),null},KE=y.section`
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(15, 23, 42, 0) 70%);
    z-index: -1;
  }
`,YE=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,QE=y(D.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,XE=y(D.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.7;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`,ZE=y(D.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,qE=y(xe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
`,JE=y(xe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: transparent;
  border: 2px solid var(--primary);
  border-radius: 0.375rem;
  color: var(--primary);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary);
    color: white;
  }
`,yp=y(D.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  opacity: 0.1;
  z-index: -1;
`,e8=()=>c.createElement(KE,null,c.createElement(yp,{initial:{x:-100,y:-100},animate:{x:[-100,50,-100],y:[-100,50,-100]},transition:{repeat:1/0,duration:20,ease:"easeInOut"},style:{width:"300px",height:"300px",top:"20%",left:"10%"}}),c.createElement(yp,{initial:{x:100,y:100},animate:{x:[100,-50,100],y:[100,-50,100]},transition:{repeat:1/0,duration:25,ease:"easeInOut"},style:{width:"400px",height:"400px",bottom:"10%",right:"5%"}}),c.createElement("div",{className:"container"},c.createElement(YE,null,c.createElement(QE,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6}},c.createElement("span",{className:"gradient-text"},"Elevate Your Digital Success")," with Premium Affiliate Products"),c.createElement(XE,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2}},"Frantz Enterprise curates the best digital tools and services to help you grow your business. As an independent affiliate marketer, we provide honest recommendations for software that delivers real results."),c.createElement(ZE,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4}},c.createElement(qE,{to:"/products"},"Explore Products ",c.createElement(Kg,null)),c.createElement(JE,{to:"/about"},"Learn More"))))),t8=y(D.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`,n8=y.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(15, 23, 42, 0.8) 100%);
  }
`,r8=y.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`,i8=y.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`,o8=y.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`,a8=y.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
`,s8=y.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(90deg, var(--accent) 0%, var(--primary) 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,l8=y.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(15, 23, 42, 0.8);
  color: var(--text);
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`,c8={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},ev=({product:e})=>c.createElement(t8,{variants:c8,initial:"hidden",animate:"visible",whileHover:{y:-5}},e.featured&&c.createElement(s8,null,"Featured"),e.category&&c.createElement(l8,null,e.category),c.createElement(n8,null,c.createElement(D.img,{src:e.image,alt:e.title,whileHover:{scale:1.05}})),c.createElement(r8,null,c.createElement(i8,null,e.title),c.createElement(o8,null,e.description),c.createElement(a8,{href:e.link,target:"_blank",rel:"noopener noreferrer"},"Learn More ",c.createElement(fE,null)))),u8=y.section`
  padding: 5rem 0;
`,d8=y.div`
  text-align: center;
  margin-bottom: 3rem;
`,f8=y.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,m8=y.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`,p8=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,h8=y(xe)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;
  font-weight: 500;
  color: var(--primary);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`,g8={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},v8=()=>{const{products:e}=E.useContext(lo),t=e.filter(n=>n.featured).slice(0,3);return c.createElement(u8,null,c.createElement("div",{className:"container"},c.createElement(d8,null,c.createElement(D.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6}},c.createElement(f8,null,"Featured ",c.createElement("span",{className:"gradient-text"},"Products")),c.createElement(m8,null,"Discover our hand-picked selection of premium digital tools and services that can transform your business and boost your productivity."))),c.createElement(D.div,{variants:g8,initial:"hidden",whileInView:"visible",viewport:{once:!0}},c.createElement(p8,null,t.map(n=>c.createElement(ev,{key:n.id,product:n})))),c.createElement(D.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4}},c.createElement(h8,{to:"/products"},"View All Products ",c.createElement(Kg,null)))))},y8=y.section`
  padding: 5rem 0;
`,x8=y.div`
  text-align: center;
  margin-bottom: 3rem;
`,w8=y.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,E8=y.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`,S8=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,Bo=y(D.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
  }
`,_o=y.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.75rem;
  color: white;
`,$o=y.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,jo=y.p`
  color: var(--text-secondary);
  line-height: 1.7;
`,k8=y.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 1rem;
  margin: 5rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(15, 23, 42, 0) 70%);
    z-index: 0;
  }
`,C8=y.div`
  text-align: center;
  position: relative;
  z-index: 1;
`,b8=y.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,P8=y.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.7;
`,T8=y.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
`,L8={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},Uo={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},A8=()=>c.createElement(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},c.createElement(e8,null),c.createElement(v8,null),c.createElement(y8,null,c.createElement("div",{className:"container"},c.createElement(x8,null,c.createElement(D.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6}},c.createElement(w8,null,"Why Choose ",c.createElement("span",{className:"gradient-text"},"Frantz Enterprise")),c.createElement(E8,null,"As an independent affiliate marketer, we're committed to providing honest recommendations and exceptional service."))),c.createElement(D.div,{variants:L8,initial:"hidden",whileInView:"visible",viewport:{once:!0}},c.createElement(S8,null,c.createElement(Bo,{variants:Uo},c.createElement(_o,null,c.createElement(yE,null)),c.createElement($o,null,"Premium Selection"),c.createElement(jo,null,"We carefully curate only the highest quality digital products and services that deliver real results for your business.")),c.createElement(Bo,{variants:Uo},c.createElement(_o,null,c.createElement(bE,null)),c.createElement($o,null,"Complete Transparency"),c.createElement(jo,null,"As an independent affiliate marketer, we provide honest recommendations without corporate influence or bias.")),c.createElement(Bo,{variants:Uo},c.createElement(_o,null,c.createElement(EE,null)),c.createElement($o,null,"Verified Quality"),c.createElement(jo,null,"Every product we recommend has been thoroughly vetted to ensure it meets our high standards for quality and value.")),c.createElement(Bo,{variants:Uo},c.createElement(_o,null,c.createElement(mE,null)),c.createElement($o,null,"Dedicated Support"),c.createElement(jo,null,"Our team is always available to help you find the right solutions for your specific needs and answer any questions.")))))),c.createElement("div",{className:"container"},c.createElement(k8,null,c.createElement("div",{className:"container"},c.createElement(C8,null,c.createElement(D.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6}},c.createElement(b8,null,"Ready to ",c.createElement("span",{className:"gradient-text"},"Transform Your Business"),"?"),c.createElement(P8,null,"Explore our curated selection of premium digital tools and services that can help you grow, optimize, and succeed in today's competitive landscape."),c.createElement(T8,{href:"/products"},"Browse Products"))))))),M8=y.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 3rem;
`,F8=y.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,R8=y.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`,xp=y.section`
  padding: 4rem 0;
`,z8=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,V8=y.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  height: 100%;
  min-height: 400px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom right, rgba(99, 102, 241, 0.3), rgba(236, 72, 153, 0.3));
    z-index: 1;
  }
`,wp=y.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
`,D8=y.ul`
  list-style: none;
  margin-top: 2rem;
`,Ho=y.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  
  .icon {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    min-width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
  
  .content {
    h4 {
      margin-bottom: 0.5rem;
    }
    
    p {
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin-bottom: 0;
    }
  }
`,N8=y.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 1rem;
  margin: 3rem 0;
`,I8=y.div`
  text-align: center;
  margin-bottom: 3rem;
`,O8=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Dl=y(D.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  position: relative;
  
  .quote-icon {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: var(--primary);
    opacity: 0.2;
    font-size: 2rem;
  }
  
  .content {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.7;
    font-style: italic;
  }
  
  .author {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .info {
      h4 {
        margin-bottom: 0.25rem;
      }
      
      p {
        color: var(--text-secondary);
        font-size: 0.875rem;
      }
    }
  }
`,B8={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},Nl={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},_8=()=>c.createElement(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},c.createElement("div",{className:"container"},c.createElement(M8,null,c.createElement(D.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6}},c.createElement(F8,null,"About ",c.createElement("span",{className:"gradient-text"},"Frantz Enterprise")),c.createElement(R8,null,"Learn more about our mission, values, and commitment to providing the best affiliate marketing solutions."))),c.createElement(xp,null,c.createElement(z8,null,c.createElement(D.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6}},c.createElement(V8,null,c.createElement("img",{src:"https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:"Frantz Enterprise Team"}))),c.createElement(D.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6}},c.createElement(wp,null,c.createElement("h2",null,"Our Story"),c.createElement("p",null,"Frantz Enterprise was founded with a simple mission: to help businesses and individuals find the best digital tools and services to grow and succeed in today's competitive landscape."),c.createElement("p",null,"As an independent affiliate marketer, we pride ourselves on providing honest, unbiased recommendations based on thorough research and testing. We're not affiliated with Facebook, Google, or any major brands - which means we can offer truly objective advice."),c.createElement("p",null,"Our team consists of digital marketing experts, software developers, and business consultants who understand the challenges modern businesses face and the solutions that can help overcome them."))))),c.createElement(xp,null,c.createElement(D.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6}},c.createElement(wp,null,c.createElement("h2",null,"Our Values"),c.createElement("p",null,"At Frantz Enterprise, we're guided by a set of core values that define how we operate and serve our customers."),c.createElement(D8,null,c.createElement(Ho,null,c.createElement("div",{className:"icon"},c.createElement(hi,null)),c.createElement("div",{className:"content"},c.createElement("h4",null,"Transparency"),c.createElement("p",null,"We're completely transparent about our affiliate relationships. We earn commissions on some products we recommend, but this never influences our recommendations."))),c.createElement(Ho,null,c.createElement("div",{className:"icon"},c.createElement(hi,null)),c.createElement("div",{className:"content"},c.createElement("h4",null,"Quality Over Quantity"),c.createElement("p",null,"We only recommend products and services that meet our high standards for quality, reliability, and value. If we wouldn't use it ourselves, we won't recommend it."))),c.createElement(Ho,null,c.createElement("div",{className:"icon"},c.createElement(hi,null)),c.createElement("div",{className:"content"},c.createElement("h4",null,"Customer-First Approach"),c.createElement("p",null,"Your success is our success. We focus on understanding your needs and recommending solutions that will truly help you achieve your goals."))),c.createElement(Ho,null,c.createElement("div",{className:"icon"},c.createElement(hi,null)),c.createElement("div",{className:"content"},c.createElement("h4",null,"Continuous Improvement"),c.createElement("p",null,"The digital landscape is always evolving, and so are we. We continuously research and test new products to ensure our recommendations stay current and valuable."))))))),c.createElement(N8,null,c.createElement("div",{className:"container"},c.createElement(I8,null,c.createElement(D.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6}},c.createElement("h2",null,"What Our Clients Say"))),c.createElement(D.div,{variants:B8,initial:"hidden",whileInView:"visible",viewport:{once:!0}},c.createElement(O8,null,c.createElement(Dl,{variants:Nl},c.createElement("div",{className:"quote-icon"},c.createElement(Rl,null)),c.createElement("p",{className:"content"},'"Frantz Enterprise recommended an email marketing tool that increased our open rates by 35%. Their honest advice saved us from investing in the wrong solution."'),c.createElement("div",{className:"author"},c.createElement("div",{className:"avatar"},c.createElement("img",{src:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:"Client"})),c.createElement("div",{className:"info"},c.createElement("h4",null,"Michael Johnson"),c.createElement("p",null,"Marketing Director, TechStart")))),c.createElement(Dl,{variants:Nl},c.createElement("div",{className:"quote-icon"},c.createElement(Rl,null)),c.createElement("p",{className:"content"},`"I appreciate that Frantz Enterprise is transparent about being an affiliate marketer. Their recommendations are genuinely helpful, and I've seen real results from the tools they suggested."`),c.createElement("div",{className:"author"},c.createElement("div",{className:"avatar"},c.createElement("img",{src:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:"Client"})),c.createElement("div",{className:"info"},c.createElement("h4",null,"Sarah Williams"),c.createElement("p",null,"Founder, Bloom Boutique")))),c.createElement(Dl,{variants:Nl},c.createElement("div",{className:"quote-icon"},c.createElement(Rl,null)),c.createElement("p",{className:"content"},'"The SEO tools recommended by Frantz Enterprise helped us climb from page 5 to page 1 in Google search results. Their expertise in digital marketing solutions is impressive."'),c.createElement("div",{className:"author"},c.createElement("div",{className:"avatar"},c.createElement("img",{src:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:"Client"})),c.createElement("div",{className:"info"},c.createElement("h4",null,"David Chen"),c.createElement("p",null,"CEO, Horizon Digital")))))))))),$8=y.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 3rem;
`,j8=y.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,U8=y.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`,H8=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,W8=y.div`
  flex: 1;
  position: relative;
  min-width: 250px;
`,G8=y.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,K8=y.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,Y8=y.select`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,Q8=y.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  border-radius: 0.375rem;
  color: var(--text);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--surface-light);
  }
  
  &.active {
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    border-color: transparent;
  }
`,X8=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Z8=y.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`,q8={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},J8=()=>{const{products:e}=E.useContext(lo),[t,n]=E.useState(e),[r,i]=E.useState(""),[o,a]=E.useState(""),[s,l]=E.useState(!1),u=Ht(),f=["All",...new Set(e.map(d=>d.category))];return E.useEffect(()=>{const m=new URLSearchParams(u.search).get("category");m&&a(m)},[u]),E.useEffect(()=>{let d=e;r&&(d=d.filter(m=>m.title.toLowerCase().includes(r.toLowerCase())||m.description.toLowerCase().includes(r.toLowerCase()))),o&&o!=="All"&&(d=d.filter(m=>m.category===o)),s&&(d=d.filter(m=>m.featured)),n(d)},[e,r,o,s]),c.createElement(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},c.createElement("div",{className:"container"},c.createElement($8,null,c.createElement(D.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6}},c.createElement(j8,null,"Our ",c.createElement("span",{className:"gradient-text"},"Products")),c.createElement(U8,null,"Explore our curated selection of premium digital tools and services to help your business grow and succeed."))),c.createElement(D.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2}},c.createElement(H8,null,c.createElement(W8,null,c.createElement(K8,null,c.createElement(po,null)),c.createElement(G8,{type:"text",placeholder:"Search products...",value:r,onChange:d=>i(d.target.value)})),c.createElement(Y8,{value:o,onChange:d=>a(d.target.value)},c.createElement("option",{value:""},"All Categories"),f.map(d=>d!=="All"&&c.createElement("option",{key:d,value:d},d))),c.createElement(Q8,{className:s?"active":"",onClick:()=>l(!s)},c.createElement($s,null)," Featured Only"))),t.length>0?c.createElement(D.div,{variants:q8,initial:"hidden",animate:"visible"},c.createElement(X8,null,t.map(d=>c.createElement(ev,{key:d.id,product:d})))):c.createElement(Z8,null,c.createElement("h3",null,"No products found"),c.createElement("p",null,"Try adjusting your search or filter criteria"))))},eS=y.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 3rem;
`,tS=y.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`,nS=y.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`,rS=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,iS=y.div`
  flex: 1;
  position: relative;
  min-width: 250px;
`,oS=y.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,aS=y.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,sS=y.select`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,lS=y.select`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,cS=y.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  border-radius: 0.375rem;
  color: var(--text);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--surface-light);
  }
  
  &.active {
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    border-color: transparent;
    color: white;
  }
`,uS=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,tv=y(D.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`,dS=y.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${tv}:hover & img {
    transform: scale(1.05);
  }
`,fS=y.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`,mS=y.div`
  margin-bottom: 1rem;
`,pS=y.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`,hS=y.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,gS=y.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex: 1;
`,vS=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`,yS=y.div`
  font-weight: 600;
  color: var(--accent);
`,xS=y.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
  }
`,wS=y.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  z-index: 10;
`,ES=y.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10;
  
  &.open {
    background-color: rgba(16, 185, 129, 0.9);
    color: white;
  }
  
  &.limited {
    background-color: rgba(245, 158, 11, 0.9);
    color: white;
  }
  
  &.filled {
    background-color: rgba(239, 68, 68, 0.9);
    color: white;
  }
`,SS=y.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`,kS={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},CS=()=>{const{subscriptions:e}=E.useContext(Fs),[t,n]=E.useState([]),[r,i]=E.useState(""),[o,a]=E.useState(""),[s,l]=E.useState(""),[u,f]=E.useState(!1),d=[...new Set(e.map(g=>g.category))];E.useEffect(()=>{let g=e;g=g.filter(x=>x.availability.toLowerCase()!=="filled"),r&&(g=g.filter(x=>x.title.toLowerCase().includes(r.toLowerCase())||x.description.toLowerCase().includes(r.toLowerCase()))),o&&(g=g.filter(x=>x.category===o)),s&&(g=g.filter(x=>x.availability.toLowerCase()===s.toLowerCase())),u&&(g=g.filter(x=>x.featured)),n(g)},[e,r,o,s,u]);const m=g=>{switch(g.toLowerCase()){case"open":return"open";case"limited":return"limited";case"filled":return"filled";default:return"open"}};return c.createElement(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},c.createElement("div",{className:"container"},c.createElement(eS,null,c.createElement(tS,null,"SaaS Subscriptions"),c.createElement(nS,null,"Discover premium software-as-a-service subscriptions that can help streamline your business operations, boost productivity, and drive growth.")),c.createElement(rS,null,c.createElement(iS,null,c.createElement(aS,null,c.createElement(po,null)),c.createElement(oS,{type:"text",placeholder:"Search subscriptions...",value:r,onChange:g=>i(g.target.value)})),c.createElement(sS,{value:o,onChange:g=>a(g.target.value)},c.createElement("option",{value:""},"All Categories"),d.map(g=>c.createElement("option",{key:g,value:g},g))),c.createElement(lS,{value:s,onChange:g=>l(g.target.value)},c.createElement("option",{value:""},"All Availability"),c.createElement("option",{value:"open"},"Open"),c.createElement("option",{value:"limited"},"Limited")),c.createElement(cS,{className:u?"active":"",onClick:()=>f(!u)},c.createElement($s,null)," Featured Only")),t.length>0?c.createElement(uS,null,t.map((g,x)=>c.createElement(tv,{key:g.id,variants:kS,initial:"hidden",animate:"visible",transition:{duration:.5,delay:x*.1}},g.featured&&c.createElement(wS,null,c.createElement(Jg,null)," Featured"),c.createElement(ES,{className:m(g.availability)},g.availability),c.createElement(dS,null,c.createElement("img",{src:g.image,alt:g.title})),c.createElement(fS,null,c.createElement(mS,null,c.createElement(pS,null,g.title),c.createElement(hS,null,g.category)),c.createElement(gS,null,g.description),c.createElement(vS,null,c.createElement(yS,null,g.price),c.createElement(xS,{href:g.link,target:"_blank",rel:"noopener noreferrer"},"Learn More")))))):c.createElement(SS,null,c.createElement("h3",null,"No subscriptions found"),c.createElement("p",null,"Try adjusting your search or filter criteria"))))},bS=y.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 3rem;
`,PS=y.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,TS=y.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`,LS=y.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,AS=y.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  height: 100%;
`,MS=y.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  }
`,FS=y.ul`
  list-style: none;
`,Il=y.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  .icon {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  
  .content {
    h4 {
      margin-bottom: 0.5rem;
    }
    
    p, a {
      color: var(--text-secondary);
      transition: color 0.3s ease;
    }
    
    a:hover {
      color: var(--primary);
    }
  }
`,RS=y.form`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
`,zS=y.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  }
`,VS=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Wo=y.div`
  margin-bottom: 1.5rem;
  
  &.full-width {
    grid-column: 1 / -1;
  }
`,Go=y.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,Ol=y.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,DS=y.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,NS=y.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,IS=y(D.div)`
  background-color: var(--success);
  color: white;
  padding: 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,OS=y.div`
  border-radius: 0.75rem;
  overflow: hidden;
  height: 400px;
  margin-bottom: 4rem;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`,BS=()=>{const[e,t]=E.useState({name:"",email:"",subject:"",message:""}),[n,r]=E.useState(!1),[i,o]=E.useState(!1),a=l=>{const{name:u,value:f}=l.target;t(d=>({...d,[u]:f}))},s=l=>{l.preventDefault(),r(!0),setTimeout(()=>{r(!1),o(!0),t({name:"",email:"",subject:"",message:""}),setTimeout(()=>{o(!1)},5e3)},1500)};return c.createElement(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},c.createElement("div",{className:"container"},c.createElement(bS,null,c.createElement(D.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6}},c.createElement(PS,null,"Contact ",c.createElement("span",{className:"gradient-text"},"Us")),c.createElement(TS,null,"Have questions or need assistance? We're here to help. Reach out to our team using the contact information below."))),c.createElement(LS,null,c.createElement(D.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2}},c.createElement(AS,null,c.createElement(MS,null,"Get In Touch"),c.createElement(FS,null,c.createElement(Il,null,c.createElement("div",{className:"icon"},c.createElement(Qg,null)),c.createElement("div",{className:"content"},c.createElement("h4",null,"Email"),c.createElement("a",{href:"mailto:Robert@FrantzEnterprise.com"},"Robert@FrantzEnterprise.com"))),c.createElement(Il,null,c.createElement("div",{className:"icon"},c.createElement(Xg,null)),c.createElement("div",{className:"content"},c.createElement("h4",null,"Location"),c.createElement("p",null,"West Sacramento, CA"))),c.createElement(Il,null,c.createElement("div",{className:"icon"},c.createElement(dE,null)),c.createElement("div",{className:"content"},c.createElement("h4",null,"Business Hours"),c.createElement("p",null,"Monday - Friday: 9:00 AM - 5:00 PM",c.createElement("br",null),"Saturday & Sunday: Closed")))))),c.createElement(D.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4}},c.createElement(RS,{onSubmit:s},c.createElement(zS,null,"Send Us a Message"),i&&c.createElement(IS,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0}},c.createElement(fp,null)," Your message has been sent successfully! We'll get back to you soon."),c.createElement(VS,null,c.createElement(Wo,null,c.createElement(Go,{htmlFor:"name"},"Your Name"),c.createElement(Ol,{type:"text",id:"name",name:"name",value:e.name,onChange:a,required:!0})),c.createElement(Wo,null,c.createElement(Go,{htmlFor:"email"},"Email Address"),c.createElement(Ol,{type:"email",id:"email",name:"email",value:e.email,onChange:a,required:!0})),c.createElement(Wo,{className:"full-width"},c.createElement(Go,{htmlFor:"subject"},"Subject"),c.createElement(Ol,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:a,required:!0})),c.createElement(Wo,{className:"full-width"},c.createElement(Go,{htmlFor:"message"},"Your Message"),c.createElement(DS,{id:"message",name:"message",value:e.message,onChange:a,required:!0}))),c.createElement(NS,{type:"submit",disabled:n},n?"Sending...":"Send Message"," ",c.createElement(fp,null))))),c.createElement(D.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6}},c.createElement(OS,null,c.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d-121.59264795889592!3d38.58025759312696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sWest%20Sacramento%2C%20CA!5e0!3m2!1sen!2sus!4v1655668687967!5m2!1sen!2sus",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Frantz Enterprise Location"})))))},_S=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
`,$S=y(D.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  width: 100%;
  max-width: 450px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,jS=y.div`
  padding: 2rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  text-align: center;
`,US=y.h2`
  font-size: 1.75rem;
  color: white;
  margin-bottom: 0.5rem;
`,HS=y.p`
  color: rgba(255, 255, 255, 0.8);
`,WS=y.form`
  padding: 2rem;
`,Ep=y.div`
  margin-bottom: 1.5rem;
  position: relative;
`,Sp=y.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text);
`,kp=y.div`
  position: absolute;
  left: 1rem;
  top: 2.75rem;
  color: var(--text-secondary);
`,Cp=y.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,GS=y.button`
  width: 100%;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border: none;
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,KS=y.div`
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--error);
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`,YS=y.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--surface-light);
  font-size: 0.875rem;
  color: var(--text-secondary);
`,QS=()=>{const[e,t]=E.useState(""),[n,r]=E.useState(""),[i,o]=E.useState(""),[a,s]=E.useState(!1),{login:l,isAuthenticated:u}=Ms(),f=so();if(u)return c.createElement(K0,{to:"/admin",replace:!0});const d=m=>{if(m.preventDefault(),o(""),!e.trim()||!n.trim()){o("Please enter both username and password");return}s(!0),setTimeout(()=>{l(e,n)?f("/admin"):(o("Invalid username or password"),s(!1))},1e3)};return c.createElement(_S,null,c.createElement($S,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5}},c.createElement(jS,null,c.createElement(US,null,"Admin Login"),c.createElement(HS,null,"Sign in to access the admin dashboard")),c.createElement(WS,{onSubmit:d},i&&c.createElement(KS,null,i),c.createElement(Ep,null,c.createElement(Sp,{htmlFor:"username"},"Username"),c.createElement(kp,null,c.createElement(gi,null)),c.createElement(Cp,{type:"text",id:"username",value:e,onChange:m=>t(m.target.value),placeholder:"Enter your username",disabled:a})),c.createElement(Ep,null,c.createElement(Sp,{htmlFor:"password"},"Password"),c.createElement(kp,null,c.createElement(vE,null)),c.createElement(Cp,{type:"password",id:"password",value:n,onChange:m=>r(m.target.value),placeholder:"Enter your password",disabled:a})),c.createElement(GS,{type:"submit",disabled:a},a?"Signing in...":c.createElement(c.Fragment,null,c.createElement(xE,null)," Sign In")),c.createElement(YS,null,c.createElement("p",null,"For demo purposes, use:"),c.createElement("p",null,"Username: ",c.createElement("strong",null,"admin")),c.createElement("p",null,"Password: ",c.createElement("strong",null,"password"))))))},XS=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
  text-align: center;
`,ZS=y.h1`
  font-size: 8rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`,qS=y.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,JS=y.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
`,e7=y.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,nv=y(xe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`,t7=y(nv)`
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
  }
`,n7=y(nv)`
  background-color: var(--surface);
  color: var(--text);
  border: 1px solid var(--surface-light);
  
  &:hover {
    background-color: var(--surface-light);
  }
`,r7=()=>c.createElement(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},c.createElement(XS,null,c.createElement(D.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5}},c.createElement(ZS,null,"404")),c.createElement(D.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5,delay:.2}},c.createElement(qS,null,"Page Not Found"),c.createElement(JS,null,"The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."),c.createElement(e7,null,c.createElement(t7,{to:"/"},c.createElement(pE,null)," Back to Home"),c.createElement(n7,{to:"/products"},c.createElement(po,null)," Browse Products"))))),i7=y.div`
  padding: 3rem 0;
`,o7=y.div`
  margin-bottom: 3rem;
`,a7=y.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,s7=y.p`
  color: var(--text-secondary);
  font-size: 1.125rem;
`,l7=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`,Ko=y(D.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`,Yo=y.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`,Qo=y.div`
  width: 48px;
  height: 48px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
`,Xo=y.h3`
  font-size: 1.25rem;
  margin: 0;
`,Zo=y.div`
  flex-grow: 1;
`,qo=y.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`,Bl=y(xe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--surface-light);
  border-radius: 0.375rem;
  color: var(--text);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`,c7=y.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--surface-light);
  border: none;
  border-radius: 0.375rem;
  color: var(--text);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--error);
    color: white;
  }
`,Jo={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},u7={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},d7=()=>{const{logout:e}=Ms();return c.createElement(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},c.createElement("div",{className:"container"},c.createElement(i7,null,c.createElement(o7,null,c.createElement(a7,null,"Admin Dashboard"),c.createElement(s7,null,"Manage your website content and settings")),c.createElement(D.div,{variants:u7,initial:"hidden",animate:"visible"},c.createElement(l7,null,c.createElement(Ko,{variants:Jo,transition:{duration:.3},whileHover:{y:-5}},c.createElement(Yo,null,c.createElement(Qo,null,c.createElement(lE,null)),c.createElement(Xo,null,"Products")),c.createElement(Zo,null,c.createElement(qo,null,"Manage your product listings. Add, edit, or remove products from your catalog."),c.createElement(Bl,{to:"/admin/products"},"Manage Products"))),c.createElement(Ko,{variants:Jo,transition:{duration:.3},whileHover:{y:-5}},c.createElement(Yo,null,c.createElement(Qo,null,c.createElement(uE,null)),c.createElement(Xo,null,"Subscriptions")),c.createElement(Zo,null,c.createElement(qo,null,"Manage your SaaS subscription offerings. Add, edit, or remove subscription plans."),c.createElement(Bl,{to:"/admin/subscriptions"},"Manage Subscriptions"))),c.createElement(Ko,{variants:Jo,transition:{duration:.3},whileHover:{y:-5}},c.createElement(Yo,null,c.createElement(Qo,null,c.createElement(CE,null)),c.createElement(Xo,null,"Account")),c.createElement(Zo,null,c.createElement(qo,null,"Manage your admin account settings and preferences."),c.createElement(c7,{onClick:e},c.createElement(ou,null)," Logout"))),c.createElement(Ko,{variants:Jo,transition:{duration:.3},whileHover:{y:-5}},c.createElement(Yo,null,c.createElement(Qo,null,c.createElement(cE,null)),c.createElement(Xo,null,"Analytics")),c.createElement(Zo,null,c.createElement(qo,null,"View website analytics, traffic statistics, and user engagement metrics."),c.createElement(Bl,{to:"/admin/analytics"},"View Analytics"))))))))},f7=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,m7=y.h1`
  font-size: 2.5rem;
`,p7=y(xe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    color: var(--primary);
  }
`,h7=y(xe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,g7=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,v7=y.div`
  flex: 1;
  position: relative;
  min-width: 250px;
`,y7=y.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,x7=y.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,w7=y.select`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,E7=y.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  border-radius: 0.375rem;
  color: var(--text);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--surface-light);
  }
  
  &.active {
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    border-color: transparent;
  }
`,S7=y.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 3rem;
`,k7=y.table`
  width: 100%;
  border-collapse: collapse;
`,C7=y.thead`
  background-color: var(--surface-light);
  
  th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    color: var(--text);
  }
`,b7=y.tbody`
  tr {
    border-bottom: 1px solid var(--surface-light);
    transition: background-color 0.3s ease;
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
  }
  
  td {
    padding: 1rem;
    color: var(--text-secondary);
  }
`,P7=y.div`
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.25rem;
`,T7=y.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`,L7=y.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 2rem;
  font-size: 0.75rem;
  color: white;
`,A7=y.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: var(--surface-light);
  border-radius: 2rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,M7=y.div`
  display: flex;
  gap: 0.75rem;
`,F7=y(xe)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.375rem;
  background-color: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`,R7=y.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.375rem;
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--error);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--error);
    color: white;
  }
`,z7=y.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`,V7=y(D.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,D7=y(D.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  
  h3 {
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }
`,N7=y.div`
  display: flex;
  gap: 1rem;
  
  button {
    flex: 1;
    padding: 0.75rem;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .cancel {
    background-color: var(--surface-light);
    border: none;
    color: var(--text);
    
    &:hover {
      background-color: var(--surface-light);
    }
  }
  
  .confirm {
    background-color: var(--error);
    border: none;
    color: white;
    
    &:hover {
      opacity: 0.9;
    }
  }
`,I7=()=>{const{products:e,deleteProduct:t}=E.useContext(lo),[n,r]=E.useState(""),[i,o]=E.useState(""),[a,s]=E.useState(!1),[l,u]=E.useState(null),f=["All",...new Set(e.map(w=>w.category))],d=e.filter(w=>{const k=w.title.toLowerCase().includes(n.toLowerCase())||w.description.toLowerCase().includes(n.toLowerCase()),v=!i||i==="All"||w.category===i,p=!a||w.featured;return k&&v&&p}),m=w=>{u(w)},g=()=>{l&&(t(l.id),u(null))},x=()=>{u(null)};return c.createElement(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},c.createElement("div",{className:"container"},c.createElement(p7,{to:"/admin/dashboard"},c.createElement(_s,null)," Back to Dashboard"),c.createElement(f7,null,c.createElement(m7,null,"Manage Products"),c.createElement(h7,{to:"/admin/products/new"},c.createElement(Zg,null)," Add New Product")),c.createElement(g7,null,c.createElement(v7,null,c.createElement(x7,null,c.createElement(po,null)),c.createElement(y7,{type:"text",placeholder:"Search products...",value:n,onChange:w=>r(w.target.value)})),c.createElement(w7,{value:i,onChange:w=>o(w.target.value)},c.createElement("option",{value:""},"All Categories"),f.map(w=>w!=="All"&&c.createElement("option",{key:w,value:w},w))),c.createElement(E7,{className:a?"active":"",onClick:()=>s(!a)},c.createElement($s,null)," Featured Only")),d.length>0?c.createElement(S7,null,c.createElement(k7,null,c.createElement(C7,null,c.createElement("tr",null,c.createElement("th",null,"Product"),c.createElement("th",null,"Category"),c.createElement("th",null,"Featured"),c.createElement("th",null,"Actions"))),c.createElement(b7,null,d.map(w=>c.createElement("tr",{key:w.id},c.createElement("td",null,c.createElement(P7,null,w.title),c.createElement(T7,null,w.category)),c.createElement("td",null,w.category),c.createElement("td",null,w.featured?c.createElement(L7,null,"Featured"):c.createElement(A7,null,"Not Featured")),c.createElement("td",null,c.createElement(M7,null,c.createElement(F7,{to:`/admin/products/${w.id}`},c.createElement(Yg,null)),c.createElement(R7,{onClick:()=>m(w)},c.createElement(Ad,null))))))))):c.createElement(z7,null,c.createElement("h3",null,"No products found"),c.createElement("p",null,"Try adjusting your search or filter criteria")),l&&c.createElement(V7,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},c.createElement(D7,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.3}},c.createElement("h3",null,"Confirm Deletion"),c.createElement("p",null,'Are you sure you want to delete "',l.title,'"? This action cannot be undone.'),c.createElement(N7,null,c.createElement("button",{className:"cancel",onClick:x},"Cancel"),c.createElement("button",{className:"confirm",onClick:g},"Delete"))))))},O7=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,B7=y.h1`
  font-size: 2.5rem;
`,_7=y(xe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    color: var(--primary);
  }
`,$7=y(xe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,j7=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,U7=y.div`
  flex: 1;
  position: relative;
  min-width: 250px;
`,H7=y.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,W7=y.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,G7=y.select`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,K7=y.select`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,Y7=y.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  border-radius: 0.375rem;
  color: var(--text);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--surface-light);
  }
  
  &.active {
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    border-color: transparent;
  }
`,Q7=y.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 3rem;
`,X7=y.table`
  width: 100%;
  border-collapse: collapse;
`,Z7=y.thead`
  background-color: var(--surface-light);
  
  th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    color: var(--text);
  }
`,q7=y.tbody`
  tr {
    border-bottom: 1px solid var(--surface-light);
    transition: background-color 0.3s ease;
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
  }
  
  td {
    padding: 1rem;
    color: var(--text-secondary);
  }
`,J7=y.div`
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.25rem;
`,e9=y.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`,t9=y.div`
  font-weight: 500;
  color: var(--accent);
`,n9=y.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 2rem;
  font-size: 0.75rem;
  color: white;
`,r9=y.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: var(--surface-light);
  border-radius: 2rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,i9=y.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  
  &.open {
    background-color: rgba(16, 185, 129, 0.1);
    color: #10B981;
  }
  
  &.limited {
    background-color: rgba(245, 158, 11, 0.1);
    color: #F59E0B;
  }
  
  &.filled {
    background-color: rgba(239, 68, 68, 0.1);
    color: #EF4444;
  }
`,o9=y.div`
  display: flex;
  gap: 0.75rem;
`,a9=y(xe)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.375rem;
  background-color: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`,s9=y.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.375rem;
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--error);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--error);
    color: white;
  }
`,l9=y.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`,c9=y(D.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 40;
`,u9=y(D.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  z-index: 50;
`,d9=y.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text);
`,f9=y.p`
  margin-bottom: 2rem;
  color: var(--text-secondary);
`,m9=y.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,p9=y.button`
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  color: var(--text);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--surface-lighter);
  }
`,h9=y.button`
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  background-color: var(--error);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--error-dark);
  }
`,g9=()=>{const{subscriptions:e,deleteSubscription:t}=E.useContext(Fs),[n,r]=E.useState(""),[i,o]=E.useState(""),[a,s]=E.useState("");E.useState(!1);const[l,u]=E.useState(!1),[f,d]=E.useState(null),m=[...new Set(e.map(h=>h.category))],g=["Open","Limited","Filled"],x=e.filter(h=>{const S=h.title.toLowerCase().includes(n.toLowerCase())||h.description.toLowerCase().includes(n.toLowerCase()),C=i===""||h.category===i,P=a===""||h.availability===a,b=!l||h.featured;return S&&C&&P&&b}),w=h=>{d(h)},k=()=>{t(f),d(null)},v=()=>{d(null)},p=()=>{u(!l)};return c.createElement("div",null,c.createElement(_7,{to:"/admin"},c.createElement(_s,null)," Back to Admin Dashboard"),c.createElement(O7,null,c.createElement(B7,null,"Manage Subscriptions"),c.createElement($7,{to:"/admin/subscriptions/add"},c.createElement(Zg,null)," Add New Subscription")),c.createElement(j7,null,c.createElement(U7,null,c.createElement(W7,null,c.createElement(po,null)),c.createElement(H7,{type:"text",placeholder:"Search subscriptions...",value:n,onChange:h=>r(h.target.value)})),c.createElement(G7,{value:i,onChange:h=>o(h.target.value)},c.createElement("option",{value:""},"All Categories"),m.map(h=>c.createElement("option",{key:h,value:h},h))),c.createElement(K7,{value:a,onChange:h=>s(h.target.value)},c.createElement("option",{value:""},"All Availability"),g.map(h=>c.createElement("option",{key:h,value:h},h))),c.createElement(Y7,{className:l?"active":"",onClick:p},c.createElement($s,null)," Featured Only")),x.length>0?c.createElement(Q7,null,c.createElement(X7,null,c.createElement(Z7,null,c.createElement("tr",null,c.createElement("th",null,"Subscription"),c.createElement("th",null,"Price"),c.createElement("th",null,"Featured"),c.createElement("th",null,"Availability"),c.createElement("th",null,"Actions"))),c.createElement(q7,null,x.map(h=>c.createElement("tr",{key:h.id},c.createElement("td",null,c.createElement(J7,null,h.title),c.createElement(e9,null,h.category)),c.createElement("td",null,c.createElement(t9,null,h.price)),c.createElement("td",null,h.featured?c.createElement(n9,null,"Featured"):c.createElement(r9,null,"Not Featured")),c.createElement("td",null,c.createElement(i9,{className:h.availability.toLowerCase()},h.availability)),c.createElement("td",null,c.createElement(o9,null,c.createElement(a9,{to:`/admin/subscriptions/edit/${h.id}`},c.createElement(Yg,null)),c.createElement(s9,{onClick:()=>w(h.id)},c.createElement(Ad,null))))))))):c.createElement(l9,null,"No subscriptions found matching your filters."),f&&c.createElement(c.Fragment,null,c.createElement(c9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),c.createElement(u9,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{type:"spring",damping:25,stiffness:300}},c.createElement(d9,null,"Delete Subscription"),c.createElement(f9,null,"Are you sure you want to delete this subscription? This action cannot be undone."),c.createElement(m9,null,c.createElement(p9,{onClick:v},"Cancel"),c.createElement(h9,{onClick:k},"Delete")))))},v9=y.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,y9=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
`,x9=y.h1`
  font-size: 1.75rem;
  color: var(--text);
  margin: 0;
`,w9=y.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`,E9=y.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,oi=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ai=y.label`
  font-weight: 500;
  color: var(--text);
`,ea=y.input`
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  background: var(--surface-light);
  color: var(--text);
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
    outline: none;
  }
`,S9=y.textarea`
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  background: var(--surface-light);
  color: var(--text);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
    outline: none;
  }
`,k9=y.div`
  margin-top: 1rem;
  
  img {
    max-width: 100%;
    max-height: 200px;
    border-radius: 0.375rem;
    object-fit: cover;
  }
`,C9=y.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`,Md=y.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,b9=y(Md)`
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  border: none;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
  }
`,P9=y(Md)`
  background-color: transparent;
  color: var(--error);
  border: 1px solid var(--error);
  
  &:hover {
    background-color: var(--error);
    color: white;
  }
`,T9=y(Md)`
  background-color: var(--surface-light);
  color: var(--text);
  border: 1px solid var(--border);
  
  &:hover {
    background-color: var(--surface-hover);
  }
`,si=y.div`
  color: var(--error);
  font-size: 0.875rem;
  margin-top: 0.5rem;
`,bp=()=>{const{id:e}=H0(),t=so(),{products:n,addProduct:r,updateProduct:i,deleteProduct:o}=z5(),a=!!e,[s,l]=E.useState({name:"",description:"",price:"",imageUrl:"",affiliateLink:""}),[u,f]=E.useState({}),[d,m]=E.useState(!1);E.useEffect(()=>{if(a&&n){const p=n.find(h=>h.id===e);p?l({name:p.name||"",description:p.description||"",price:p.price||"",imageUrl:p.imageUrl||"",affiliateLink:p.affiliateLink||""}):t("/admin/products")}},[e,n,a,t]);const g=p=>{const{name:h,value:S}=p.target;l(C=>({...C,[h]:S})),u[h]&&f(C=>({...C,[h]:null}))},x=()=>{const p={};return s.name.trim()||(p.name="Product name is required"),s.description.trim()||(p.description="Description is required"),s.price.trim()?isNaN(parseFloat(s.price))&&(p.price="Price must be a valid number"):p.price="Price is required",s.affiliateLink.trim()?s.affiliateLink.startsWith("http")||(p.affiliateLink="Please enter a valid URL"):p.affiliateLink="Affiliate link is required",f(p),Object.keys(p).length===0},w=async p=>{if(p.preventDefault(),!!x()){m(!0);try{const h={...s,price:parseFloat(s.price)};a?await i(e,h):await r(h),t("/admin/products")}catch(h){console.error("Error saving product:",h),f(S=>({...S,form:"Failed to save product. Please try again."}))}finally{m(!1)}}},k=async()=>{if(window.confirm("Are you sure you want to delete this product?"))try{await o(e),t("/admin/products")}catch(p){console.error("Error deleting product:",p),f(h=>({...h,form:"Failed to delete product. Please try again."}))}},v=p=>{alert("In a production environment, this would open a file picker to upload an image.")};return c.createElement(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}},c.createElement(v9,null,c.createElement(y9,null,c.createElement(x9,null,a?"Edit Product":"Add New Product"),c.createElement(w9,{onClick:()=>t("/admin/products")},c.createElement(_s,null)," Back to Products")),c.createElement(E9,{onSubmit:w},c.createElement(oi,null,c.createElement(ai,{htmlFor:"name"},"Product Name"),c.createElement(ea,{type:"text",id:"name",name:"name",value:s.name,onChange:g,placeholder:"Enter product name"}),u.name&&c.createElement(si,null,u.name)),c.createElement(oi,null,c.createElement(ai,{htmlFor:"description"},"Description"),c.createElement(S9,{id:"description",name:"description",value:s.description,onChange:g,placeholder:"Enter product description"}),u.description&&c.createElement(si,null,u.description)),c.createElement(oi,null,c.createElement(ai,{htmlFor:"price"},"Price"),c.createElement(ea,{type:"text",id:"price",name:"price",value:s.price,onChange:g,placeholder:"Enter price"}),u.price&&c.createElement(si,null,u.price)),c.createElement(oi,null,c.createElement(ai,{htmlFor:"affiliateLink"},"Affiliate Link"),c.createElement(ea,{type:"text",id:"affiliateLink",name:"affiliateLink",value:s.affiliateLink,onChange:g,placeholder:"Enter affiliate link"}),u.affiliateLink&&c.createElement(si,null,u.affiliateLink)),c.createElement(oi,null,c.createElement(ai,{htmlFor:"imageUrl"},"Image URL"),c.createElement(ea,{type:"text",id:"imageUrl",name:"imageUrl",value:s.imageUrl,onChange:g,placeholder:"Enter image URL"}),c.createElement(T9,{type:"button",onClick:v},c.createElement(kE,null)," Upload Image"),s.imageUrl&&c.createElement(k9,null,c.createElement("img",{src:s.imageUrl,alt:"Product preview"}))),u.form&&c.createElement(si,null,u.form),c.createElement(C9,null,a&&c.createElement(P9,{type:"button",onClick:k},c.createElement(Ad,null)," Delete Product"),c.createElement(b9,{type:"submit",disabled:d},c.createElement(qg,null)," ",d?"Saving...":"Save Product")))))},L9=y.div`
  margin-bottom: 2rem;
  padding-top: 2rem;
`,A9=y.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`,M9=y.p`
  color: var(--text-secondary);
  font-size: 1.125rem;
`,F9=y(xe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    color: var(--primary);
  }
`,R9=y.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  margin-bottom: 3rem;
`,Kt=y.div`
  margin-bottom: 1.5rem;
`,_l=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Yt=y.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text);
`,li=y.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,z9=y.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,V9=y.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,D9=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,N9=y.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`,I9=y.label`
  cursor: pointer;
  user-select: none;
`,O9=y.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`,B9=y(xe)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: var(--surface-light);
  border-radius: 0.375rem;
  color: var(--text);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--surface-light);
  }
`,_9=y.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border: none;
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,$9=y.div`
  margin-top: 1rem;
  border-radius: 0.375rem;
  overflow: hidden;
  max-width: 300px;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`,nr=y.div`
  color: var(--error);
  font-size: 0.875rem;
  margin-top: 0.5rem;
`,j9=y(D.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #10B981;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`,Pp=()=>{const{id:e}=H0(),t=so(),{addSubscription:n,updateSubscription:r,getSubscription:i}=E.useContext(Fs),[o,a]=E.useState(!1),s=!!e,[l,u]=E.useState({title:"",description:"",image:"",link:"",category:"",featured:!1,price:"",availability:"Open"}),[f,d]=E.useState({});E.useEffect(()=>{if(s){const k=i(e);k?u(k):t("/admin/subscriptions")}},[e,s,i,t]);const m=k=>{const{name:v,value:p,type:h,checked:S}=k.target;u({...l,[v]:h==="checkbox"?S:p}),f[v]&&d({...f,[v]:""})},g=()=>{const k={};return l.title.trim()||(k.title="Title is required"),l.description.trim()||(k.description="Description is required"),l.image.trim()?x(l.image)||(k.image="Please enter a valid URL"):k.image="Image URL is required",l.link.trim()?x(l.link)||(k.link="Please enter a valid URL"):k.link="Link is required",l.category.trim()||(k.category="Category is required"),l.price.trim()||(k.price="Price is required"),d(k),Object.keys(k).length===0},x=k=>{try{return new URL(k),!0}catch{return!1}},w=k=>{k.preventDefault(),g()&&(s?r(e,l):n(l),a(!0),setTimeout(()=>{a(!1),t("/admin/subscriptions")},2e3))};return c.createElement(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},c.createElement("div",{className:"container"},c.createElement(F9,{to:"/admin/subscriptions"},c.createElement(_s,null)," Back to Subscriptions"),c.createElement(L9,null,c.createElement(A9,null,s?"Edit Subscription":"Add New Subscription"),c.createElement(M9,null,s?"Update the details of an existing subscription":"Create a new subscription to offer to your customers")),c.createElement(R9,null,c.createElement("form",{onSubmit:w},c.createElement(Kt,null,c.createElement(Yt,{htmlFor:"title"},c.createElement(wE,null)," Subscription Title"),c.createElement(li,{type:"text",id:"title",name:"title",value:l.title,onChange:m,placeholder:"Enter subscription title"}),f.title&&c.createElement(nr,null,f.title)),c.createElement(Kt,null,c.createElement(Yt,{htmlFor:"description"},"Description"),c.createElement(z9,{id:"description",name:"description",value:l.description,onChange:m,placeholder:"Enter subscription description"}),f.description&&c.createElement(nr,null,f.description)),c.createElement(_l,null,c.createElement(Kt,null,c.createElement(Yt,{htmlFor:"image"},c.createElement(hE,null)," Image URL"),c.createElement(li,{type:"text",id:"image",name:"image",value:l.image,onChange:m,placeholder:"Enter image URL"}),f.image&&c.createElement(nr,null,f.image),l.image&&x(l.image)&&c.createElement($9,null,c.createElement("img",{src:l.image,alt:"Preview"}))),c.createElement(Kt,null,c.createElement(Yt,{htmlFor:"link"},c.createElement(gE,null)," Subscription Link"),c.createElement(li,{type:"text",id:"link",name:"link",value:l.link,onChange:m,placeholder:"Enter subscription link"}),f.link&&c.createElement(nr,null,f.link))),c.createElement(_l,null,c.createElement(Kt,null,c.createElement(Yt,{htmlFor:"category"},"Category"),c.createElement(li,{type:"text",id:"category",name:"category",value:l.category,onChange:m,placeholder:"Enter category (e.g., Business, Marketing)"}),f.category&&c.createElement(nr,null,f.category)),c.createElement(Kt,null,c.createElement(Yt,{htmlFor:"price"},"Price"),c.createElement(li,{type:"text",id:"price",name:"price",value:l.price,onChange:m,placeholder:"Enter price (e.g., $29/month)"}),f.price&&c.createElement(nr,null,f.price))),c.createElement(_l,null,c.createElement(Kt,null,c.createElement(Yt,{htmlFor:"availability"},"Availability"),c.createElement(V9,{id:"availability",name:"availability",value:l.availability,onChange:m},c.createElement("option",{value:"Open"},"Open"),c.createElement("option",{value:"Limited"},"Limited"),c.createElement("option",{value:"Filled"},"Filled"))),c.createElement(Kt,null,c.createElement(Yt,null,"Featured Status"),c.createElement(D9,null,c.createElement(N9,{type:"checkbox",id:"featured",name:"featured",checked:l.featured,onChange:m}),c.createElement(I9,{htmlFor:"featured"},c.createElement(Jg,null)," Mark as featured subscription")))),c.createElement(O9,null,c.createElement(B9,{to:"/admin/subscriptions"},"Cancel"),c.createElement(_9,{type:"submit"},c.createElement(qg,null)," ",s?"Update Subscription":"Save Subscription")))),o&&c.createElement(j9,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50}},c.createElement(hi,null)," ",s?"Subscription updated successfully!":"Subscription added successfully!")))},An=({children:e})=>{const{isAuthenticated:t}=Ms();return t?e:c.createElement(K0,{to:"/login",replace:!0})};function U9(){return c.createElement(P5,{theme:I5},c.createElement(N5,null),c.createElement(M5,null,c.createElement(R5,null,c.createElement(D5,null,c.createElement(S4,null,c.createElement(GE,null),c.createElement(BE,null),c.createElement("main",null,c.createElement(p4,null,c.createElement(Me,{path:"/",element:c.createElement(A8,null)}),c.createElement(Me,{path:"/about",element:c.createElement(_8,null)}),c.createElement(Me,{path:"/products",element:c.createElement(J8,null)}),c.createElement(Me,{path:"/subscriptions",element:c.createElement(CS,null)}),c.createElement(Me,{path:"/contact",element:c.createElement(BS,null)}),c.createElement(Me,{path:"/login",element:c.createElement(QS,null)}),c.createElement(Me,{path:"/admin",element:c.createElement(An,null,c.createElement(d7,null))}),c.createElement(Me,{path:"/admin/products",element:c.createElement(An,null,c.createElement(I7,null))}),c.createElement(Me,{path:"/admin/products/add",element:c.createElement(An,null,c.createElement(bp,null))}),c.createElement(Me,{path:"/admin/products/edit/:id",element:c.createElement(An,null,c.createElement(bp,null))}),c.createElement(Me,{path:"/admin/subscriptions",element:c.createElement(An,null,c.createElement(g9,null))}),c.createElement(Me,{path:"/admin/subscriptions/add",element:c.createElement(An,null,c.createElement(Pp,null))}),c.createElement(Me,{path:"/admin/subscriptions/edit/:id",element:c.createElement(An,null,c.createElement(Pp,null))}),c.createElement(Me,{path:"*",element:c.createElement(r7,null)}))),c.createElement(WE,null))))))}$l.createRoot(document.getElementById("root")).render(c.createElement(c.StrictMode,null,c.createElement(U9,null)));
