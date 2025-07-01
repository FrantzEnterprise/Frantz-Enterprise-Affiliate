function Wv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Gv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wh={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hi=Symbol.for("react.element"),Yv=Symbol.for("react.portal"),Kv=Symbol.for("react.fragment"),Qv=Symbol.for("react.strict_mode"),Xv=Symbol.for("react.profiler"),qv=Symbol.for("react.provider"),Zv=Symbol.for("react.context"),Jv=Symbol.for("react.forward_ref"),ey=Symbol.for("react.suspense"),ty=Symbol.for("react.memo"),ny=Symbol.for("react.lazy"),om=Symbol.iterator;function ry(e){return e===null||typeof e!="object"?null:(e=om&&e[om]||e["@@iterator"],typeof e=="function"?e:null)}var bh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sh=Object.assign,kh={};function ao(e,t,n){this.props=e,this.context=t,this.refs=kh,this.updater=n||bh}ao.prototype.isReactComponent={};ao.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ao.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ch(){}Ch.prototype=ao.prototype;function Tu(e,t,n){this.props=e,this.context=t,this.refs=kh,this.updater=n||bh}var Lu=Tu.prototype=new Ch;Lu.constructor=Tu;Sh(Lu,ao.prototype);Lu.isPureReactComponent=!0;var im=Array.isArray,Ph=Object.prototype.hasOwnProperty,Fu={current:null},Th={key:!0,ref:!0,__self:!0,__source:!0};function Lh(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Ph.call(t,r)&&!Th.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:hi,type:e,key:i,ref:l,props:o,_owner:Fu.current}}function oy(e,t){return{$$typeof:hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Au(e){return typeof e=="object"&&e!==null&&e.$$typeof===hi}function iy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var am=/\/+/g;function es(e,t){return typeof e=="object"&&e!==null&&e.key!=null?iy(""+e.key):t.toString(36)}function xa(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case hi:case Yv:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+es(l,0):r,im(o)?(n="",e!=null&&(n=e.replace(am,"$&/")+"/"),xa(o,t,n,"",function(u){return u})):o!=null&&(Au(o)&&(o=oy(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(am,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",im(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+es(i,s);l+=xa(i,t,n,c,o)}else if(c=ry(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+es(i,s++),l+=xa(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Di(e,t,n){if(e==null)return e;var r=[],o=0;return xa(e,r,"","",function(i){return t.call(n,i,o++)}),r}function ay(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Ea={transition:null},ly={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:Fu};function Fh(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Di,forEach:function(e,t,n){Di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Di(e,function(){t++}),t},toArray:function(e){return Di(e,function(t){return t})||[]},only:function(e){if(!Au(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=ao;U.Fragment=Kv;U.Profiler=Xv;U.PureComponent=Tu;U.StrictMode=Qv;U.Suspense=ey;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ly;U.act=Fh;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sh({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Fu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Ph.call(t,c)&&!Th.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:hi,type:e.type,key:o,ref:i,props:r,_owner:l}};U.createContext=function(e){return e={$$typeof:Zv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qv,_context:e},e.Consumer=e};U.createElement=Lh;U.createFactory=function(e){var t=Lh.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Jv,render:e}};U.isValidElement=Au;U.lazy=function(e){return{$$typeof:ny,_payload:{_status:-1,_result:e},_init:ay}};U.memo=function(e,t){return{$$typeof:ty,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Ea.transition;Ea.transition={};try{e()}finally{Ea.transition=t}};U.unstable_act=Fh;U.useCallback=function(e,t){return Ve.current.useCallback(e,t)};U.useContext=function(e){return Ve.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};U.useEffect=function(e,t){return Ve.current.useEffect(e,t)};U.useId=function(){return Ve.current.useId()};U.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Ve.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};U.useRef=function(e){return Ve.current.useRef(e)};U.useState=function(e){return Ve.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Ve.current.useTransition()};U.version="18.3.1";wh.exports=U;var b=wh.exports;const a=Gv(b),sy=Wv({__proto__:null,default:a},[b]);var sc={},Ah={exports:{}},Ze={},Dh={exports:{}},Rh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,P){var D=L.length;L.push(P);e:for(;0<D;){var N=D-1>>>1,$=L[N];if(0<o($,P))L[N]=P,L[D]=$,D=N;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var P=L[0],D=L.pop();if(D!==P){L[0]=D;e:for(var N=0,$=L.length,ge=$>>>1;N<ge;){var ue=2*(N+1)-1,$e=L[ue],Z=ue+1,et=L[Z];if(0>o($e,D))Z<$&&0>o(et,$e)?(L[N]=et,L[Z]=D,N=Z):(L[N]=$e,L[ue]=D,N=ue);else if(Z<$&&0>o(et,D))L[N]=et,L[Z]=D,N=Z;else break e}}return P}function o(L,P){var D=L.sortIndex-P.sortIndex;return D!==0?D:L.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,m=null,p=3,h=!1,E=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=L)r(u),P.sortIndex=P.expirationTime,t(c,P);else break;P=n(u)}}function x(L){if(w=!1,y(L),!E)if(n(c)!==null)E=!0,Y(k);else{var P=n(u);P!==null&&he(x,P.startTime-L)}}function k(L,P){E=!1,w&&(w=!1,g(F),F=-1),h=!0;var D=p;try{for(y(P),m=n(c);m!==null&&(!(m.expirationTime>P)||L&&!R());){var N=m.callback;if(typeof N=="function"){m.callback=null,p=m.priorityLevel;var $=N(m.expirationTime<=P);P=e.unstable_now(),typeof $=="function"?m.callback=$:m===n(c)&&r(c),y(P)}else r(c);m=n(c)}if(m!==null)var ge=!0;else{var ue=n(u);ue!==null&&he(x,ue.startTime-P),ge=!1}return ge}finally{m=null,p=D,h=!1}}var T=!1,C=null,F=-1,M=5,I=-1;function R(){return!(e.unstable_now()-I<M)}function _(){if(C!==null){var L=e.unstable_now();I=L;var P=!0;try{P=C(!0,L)}finally{P?G():(T=!1,C=null)}}else T=!1}var G;if(typeof v=="function")G=function(){v(_)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ie=H.port2;H.port1.onmessage=_,G=function(){ie.postMessage(null)}}else G=function(){S(_,0)};function Y(L){C=L,T||(T=!0,G())}function he(L,P){F=S(function(){L(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){E||h||(E=!0,Y(k))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(L){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var D=p;p=P;try{return L()}finally{p=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,P){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var D=p;p=L;try{return P()}finally{p=D}},e.unstable_scheduleCallback=function(L,P,D){var N=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?N+D:N):D=N,L){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=D+$,L={id:d++,callback:P,priorityLevel:L,startTime:D,expirationTime:$,sortIndex:-1},D>N?(L.sortIndex=D,t(u,L),n(c)===null&&L===n(u)&&(w?(g(F),F=-1):w=!0,he(x,D-N))):(L.sortIndex=$,t(c,L),E||h||(E=!0,Y(k))),L},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(L){var P=p;return function(){var D=p;p=P;try{return L.apply(this,arguments)}finally{p=D}}}})(Rh);Dh.exports=Rh;var cy=Dh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy=b,Xe=cy;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nh=new Set,Go={};function ir(e,t){Gr(e,t),Gr(e+"Capture",t)}function Gr(e,t){for(Go[e]=t,e=0;e<t.length;e++)Nh.add(t[e])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=Object.prototype.hasOwnProperty,dy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lm={},sm={};function my(e){return cc.call(sm,e)?!0:cc.call(lm,e)?!1:dy.test(e)?sm[e]=!0:(lm[e]=!0,!1)}function fy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function py(e,t,n,r){if(t===null||typeof t>"u"||fy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Du=/[\-:]([a-z])/g;function Ru(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Du,Ru);Le[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Du,Ru);Le[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Du,Ru);Le[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Nu(e,t,n,r){var o=Le.hasOwnProperty(t)?Le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(py(t,n,o,r)&&(n=null),r||o===null?my(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ri=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),zu=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),zh=Symbol.for("react.provider"),Mh=Symbol.for("react.context"),Mu=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),mc=Symbol.for("react.suspense_list"),Iu=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Ih=Symbol.for("react.offscreen"),cm=Symbol.iterator;function fo(e){return e===null||typeof e!="object"?null:(e=cm&&e[cm]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,ts;function Po(e){if(ts===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ts=t&&t[1]||""}return`
`+ts+e}var ns=!1;function rs(e,t){if(!e||ns)return"";ns=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var c=`
`+o[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{ns=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Po(e):""}function hy(e){switch(e.tag){case 5:return Po(e.type);case 16:return Po("Lazy");case 13:return Po("Suspense");case 19:return Po("SuspenseList");case 0:case 2:case 15:return e=rs(e.type,!1),e;case 11:return e=rs(e.type.render,!1),e;case 1:return e=rs(e.type,!0),e;default:return""}}function fc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kr:return"Fragment";case Sr:return"Portal";case uc:return"Profiler";case zu:return"StrictMode";case dc:return"Suspense";case mc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mh:return(e.displayName||"Context")+".Consumer";case zh:return(e._context.displayName||"Context")+".Provider";case Mu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Iu:return t=e.displayName||null,t!==null?t:fc(e.type)||"Memo";case en:t=e._payload,e=e._init;try{return fc(e(t))}catch{}}return null}function gy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fc(t);case 8:return t===zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vy(e){var t=Vh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ni(e){e._valueTracker||(e._valueTracker=vy(e))}function Oh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pc(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function um(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $h(e,t){t=t.checked,t!=null&&Nu(e,"checked",t,!1)}function hc(e,t){$h(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gc(e,t.type,n):t.hasOwnProperty("defaultValue")&&gc(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gc(e,t,n){(t!=="number"||Oa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var To=Array.isArray;function Br(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function vc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(To(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function Bh(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zi,_h=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zi=zi||document.createElement("div"),zi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yy=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(e){yy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ro[t]=Ro[e]})});function Uh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ro.hasOwnProperty(e)&&Ro[e]?(""+t).trim():t+"px"}function Hh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Uh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var xy=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xc(e,t){if(t){if(xy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Ec(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wc=null;function Vu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bc=null,jr=null,_r=null;function pm(e){if(e=yi(e)){if(typeof bc!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Pl(t),bc(e.stateNode,e.type,t))}}function Wh(e){jr?_r?_r.push(e):_r=[e]:jr=e}function Gh(){if(jr){var e=jr,t=_r;if(_r=jr=null,pm(e),t)for(e=0;e<t.length;e++)pm(t[e])}}function Yh(e,t){return e(t)}function Kh(){}var os=!1;function Qh(e,t,n){if(os)return e(t,n);os=!0;try{return Yh(e,t,n)}finally{os=!1,(jr!==null||_r!==null)&&(Kh(),Gh())}}function Ko(e,t){var n=e.stateNode;if(n===null)return null;var r=Pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Sc=!1;if($t)try{var po={};Object.defineProperty(po,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Sc=!1}function Ey(e,t,n,r,o,i,l,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var No=!1,$a=null,Ba=!1,kc=null,wy={onError:function(e){No=!0,$a=e}};function by(e,t,n,r,o,i,l,s,c){No=!1,$a=null,Ey.apply(wy,arguments)}function Sy(e,t,n,r,o,i,l,s,c){if(by.apply(this,arguments),No){if(No){var u=$a;No=!1,$a=null}else throw Error(A(198));Ba||(Ba=!0,kc=u)}}function ar(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hm(e){if(ar(e)!==e)throw Error(A(188))}function ky(e){var t=e.alternate;if(!t){if(t=ar(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return hm(o),e;if(i===r)return hm(o),t;i=i.sibling}throw Error(A(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function qh(e){return e=ky(e),e!==null?Zh(e):null}function Zh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zh(e);if(t!==null)return t;e=e.sibling}return null}var Jh=Xe.unstable_scheduleCallback,gm=Xe.unstable_cancelCallback,Cy=Xe.unstable_shouldYield,Py=Xe.unstable_requestPaint,fe=Xe.unstable_now,Ty=Xe.unstable_getCurrentPriorityLevel,Ou=Xe.unstable_ImmediatePriority,e0=Xe.unstable_UserBlockingPriority,ja=Xe.unstable_NormalPriority,Ly=Xe.unstable_LowPriority,t0=Xe.unstable_IdlePriority,bl=null,kt=null;function Fy(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(bl,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Ry,Ay=Math.log,Dy=Math.LN2;function Ry(e){return e>>>=0,e===0?32:31-(Ay(e)/Dy|0)|0}var Mi=64,Ii=4194304;function Lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _a(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Lo(s):(i&=l,i!==0&&(r=Lo(i)))}else l=n&~o,l!==0?r=Lo(l):i!==0&&(r=Lo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),o=1<<n,r|=e[n],t&=~o;return r}function Ny(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-gt(i),s=1<<l,c=o[l];c===-1?(!(s&n)||s&r)&&(o[l]=Ny(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function Cc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function n0(){var e=Mi;return Mi<<=1,!(Mi&4194240)&&(Mi=64),e}function is(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function My(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function $u(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Q=0;function r0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var o0,Bu,i0,a0,l0,Pc=!1,Vi=[],un=null,dn=null,mn=null,Qo=new Map,Xo=new Map,rn=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vm(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Qo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(t.pointerId)}}function ho(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=yi(t),t!==null&&Bu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Vy(e,t,n,r,o){switch(t){case"focusin":return un=ho(un,e,t,n,r,o),!0;case"dragenter":return dn=ho(dn,e,t,n,r,o),!0;case"mouseover":return mn=ho(mn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Qo.set(i,ho(Qo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Xo.set(i,ho(Xo.get(i)||null,e,t,n,r,o)),!0}return!1}function s0(e){var t=Un(e.target);if(t!==null){var n=ar(t);if(n!==null){if(t=n.tag,t===13){if(t=Xh(n),t!==null){e.blockedOn=t,l0(e.priority,function(){i0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wc=r,n.target.dispatchEvent(r),wc=null}else return t=yi(n),t!==null&&Bu(t),e.blockedOn=n,!1;t.shift()}return!0}function ym(e,t,n){wa(e)&&n.delete(t)}function Oy(){Pc=!1,un!==null&&wa(un)&&(un=null),dn!==null&&wa(dn)&&(dn=null),mn!==null&&wa(mn)&&(mn=null),Qo.forEach(ym),Xo.forEach(ym)}function go(e,t){e.blockedOn===t&&(e.blockedOn=null,Pc||(Pc=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,Oy)))}function qo(e){function t(o){return go(o,e)}if(0<Vi.length){go(Vi[0],e);for(var n=1;n<Vi.length;n++){var r=Vi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&go(un,e),dn!==null&&go(dn,e),mn!==null&&go(mn,e),Qo.forEach(t),Xo.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)s0(n),n.blockedOn===null&&rn.shift()}var Ur=Ht.ReactCurrentBatchConfig,Ua=!0;function $y(e,t,n,r){var o=Q,i=Ur.transition;Ur.transition=null;try{Q=1,ju(e,t,n,r)}finally{Q=o,Ur.transition=i}}function By(e,t,n,r){var o=Q,i=Ur.transition;Ur.transition=null;try{Q=4,ju(e,t,n,r)}finally{Q=o,Ur.transition=i}}function ju(e,t,n,r){if(Ua){var o=Tc(e,t,n,r);if(o===null)hs(e,t,r,Ha,n),vm(e,r);else if(Vy(o,e,t,n,r))r.stopPropagation();else if(vm(e,r),t&4&&-1<Iy.indexOf(e)){for(;o!==null;){var i=yi(o);if(i!==null&&o0(i),i=Tc(e,t,n,r),i===null&&hs(e,t,r,Ha,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else hs(e,t,r,null,n)}}var Ha=null;function Tc(e,t,n,r){if(Ha=null,e=Vu(r),e=Un(e),e!==null)if(t=ar(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ha=e,null}function c0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ty()){case Ou:return 1;case e0:return 4;case ja:case Ly:return 16;case t0:return 536870912;default:return 16}default:return 16}}var an=null,_u=null,ba=null;function u0(){if(ba)return ba;var e,t=_u,n=t.length,r,o="value"in an?an.value:an.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ba=o.slice(e,1<r?1-r:void 0)}function Sa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function xm(){return!1}function Je(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Oi:xm,this.isPropagationStopped=xm,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uu=Je(lo),vi=ce({},lo,{view:0,detail:0}),jy=Je(vi),as,ls,vo,Sl=ce({},vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vo&&(vo&&e.type==="mousemove"?(as=e.screenX-vo.screenX,ls=e.screenY-vo.screenY):ls=as=0,vo=e),as)},movementY:function(e){return"movementY"in e?e.movementY:ls}}),Em=Je(Sl),_y=ce({},Sl,{dataTransfer:0}),Uy=Je(_y),Hy=ce({},vi,{relatedTarget:0}),ss=Je(Hy),Wy=ce({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),Gy=Je(Wy),Yy=ce({},lo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ky=Je(Yy),Qy=ce({},lo,{data:0}),wm=Je(Qy),Xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zy[e])?!!t[e]:!1}function Hu(){return Jy}var e2=ce({},vi,{key:function(e){if(e.key){var t=Xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(e){return e.type==="keypress"?Sa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),t2=Je(e2),n2=ce({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=Je(n2),r2=ce({},vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),o2=Je(r2),i2=ce({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),a2=Je(i2),l2=ce({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s2=Je(l2),c2=[9,13,27,32],Wu=$t&&"CompositionEvent"in window,zo=null;$t&&"documentMode"in document&&(zo=document.documentMode);var u2=$t&&"TextEvent"in window&&!zo,d0=$t&&(!Wu||zo&&8<zo&&11>=zo),Sm=String.fromCharCode(32),km=!1;function m0(e,t){switch(e){case"keyup":return c2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function d2(e,t){switch(e){case"compositionend":return f0(t);case"keypress":return t.which!==32?null:(km=!0,Sm);case"textInput":return e=t.data,e===Sm&&km?null:e;default:return null}}function m2(e,t){if(Cr)return e==="compositionend"||!Wu&&m0(e,t)?(e=u0(),ba=_u=an=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return d0&&t.locale!=="ko"?null:t.data;default:return null}}var f2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!f2[e.type]:t==="textarea"}function p0(e,t,n,r){Wh(r),t=Wa(t,"onChange"),0<t.length&&(n=new Uu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mo=null,Zo=null;function p2(e){C0(e,0)}function kl(e){var t=Lr(e);if(Oh(t))return e}function h2(e,t){if(e==="change")return t}var h0=!1;if($t){var cs;if($t){var us="oninput"in document;if(!us){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),us=typeof Pm.oninput=="function"}cs=us}else cs=!1;h0=cs&&(!document.documentMode||9<document.documentMode)}function Tm(){Mo&&(Mo.detachEvent("onpropertychange",g0),Zo=Mo=null)}function g0(e){if(e.propertyName==="value"&&kl(Zo)){var t=[];p0(t,Zo,e,Vu(e)),Qh(p2,t)}}function g2(e,t,n){e==="focusin"?(Tm(),Mo=t,Zo=n,Mo.attachEvent("onpropertychange",g0)):e==="focusout"&&Tm()}function v2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kl(Zo)}function y2(e,t){if(e==="click")return kl(t)}function x2(e,t){if(e==="input"||e==="change")return kl(t)}function E2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:E2;function Jo(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!cc.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function Lm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fm(e,t){var n=Lm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lm(n)}}function v0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?v0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function y0(){for(var e=window,t=Oa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oa(e.document)}return t}function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function w2(e){var t=y0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&v0(n.ownerDocument.documentElement,n)){if(r!==null&&Gu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Fm(n,i);var l=Fm(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var b2=$t&&"documentMode"in document&&11>=document.documentMode,Pr=null,Lc=null,Io=null,Fc=!1;function Am(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fc||Pr==null||Pr!==Oa(r)||(r=Pr,"selectionStart"in r&&Gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&Jo(Io,r)||(Io=r,r=Wa(Lc,"onSelect"),0<r.length&&(t=new Uu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function $i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tr={animationend:$i("Animation","AnimationEnd"),animationiteration:$i("Animation","AnimationIteration"),animationstart:$i("Animation","AnimationStart"),transitionend:$i("Transition","TransitionEnd")},ds={},x0={};$t&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Cl(e){if(ds[e])return ds[e];if(!Tr[e])return e;var t=Tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in x0)return ds[e]=t[n];return e}var E0=Cl("animationend"),w0=Cl("animationiteration"),b0=Cl("animationstart"),S0=Cl("transitionend"),k0=new Map,Dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){k0.set(e,t),ir(t,[e])}for(var ms=0;ms<Dm.length;ms++){var fs=Dm[ms],S2=fs.toLowerCase(),k2=fs[0].toUpperCase()+fs.slice(1);Pn(S2,"on"+k2)}Pn(E0,"onAnimationEnd");Pn(w0,"onAnimationIteration");Pn(b0,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(S0,"onTransitionEnd");Gr("onMouseEnter",["mouseout","mouseover"]);Gr("onMouseLeave",["mouseout","mouseover"]);Gr("onPointerEnter",["pointerout","pointerover"]);Gr("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function Rm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Sy(r,t,void 0,e),e.currentTarget=null}function C0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==i&&o.isPropagationStopped())break e;Rm(o,s,u),i=c}else for(l=0;l<r.length;l++){if(s=r[l],c=s.instance,u=s.currentTarget,s=s.listener,c!==i&&o.isPropagationStopped())break e;Rm(o,s,u),i=c}}}if(Ba)throw e=kc,Ba=!1,kc=null,e}function ee(e,t){var n=t[zc];n===void 0&&(n=t[zc]=new Set);var r=e+"__bubble";n.has(r)||(P0(t,e,2,!1),n.add(r))}function ps(e,t,n){var r=0;t&&(r|=4),P0(n,e,r,t)}var Bi="_reactListening"+Math.random().toString(36).slice(2);function ei(e){if(!e[Bi]){e[Bi]=!0,Nh.forEach(function(n){n!=="selectionchange"&&(C2.has(n)||ps(n,!1,e),ps(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bi]||(t[Bi]=!0,ps("selectionchange",!1,t))}}function P0(e,t,n,r){switch(c0(t)){case 1:var o=$y;break;case 4:o=By;break;default:o=ju}n=o.bind(null,t,n,e),o=void 0,!Sc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function hs(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Un(s),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Qh(function(){var u=i,d=Vu(n),m=[];e:{var p=k0.get(e);if(p!==void 0){var h=Uu,E=e;switch(e){case"keypress":if(Sa(n)===0)break e;case"keydown":case"keyup":h=t2;break;case"focusin":E="focus",h=ss;break;case"focusout":E="blur",h=ss;break;case"beforeblur":case"afterblur":h=ss;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=o2;break;case E0:case w0:case b0:h=Gy;break;case S0:h=a2;break;case"scroll":h=jy;break;case"wheel":h=s2;break;case"copy":case"cut":case"paste":h=Ky;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=bm}var w=(t&4)!==0,S=!w&&e==="scroll",g=w?p!==null?p+"Capture":null:p;w=[];for(var v=u,y;v!==null;){y=v;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,g!==null&&(x=Ko(v,g),x!=null&&w.push(ti(v,x,y)))),S)break;v=v.return}0<w.length&&(p=new h(p,E,null,n,d),m.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==wc&&(E=n.relatedTarget||n.fromElement)&&(Un(E)||E[Bt]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(E=n.relatedTarget||n.toElement,h=u,E=E?Un(E):null,E!==null&&(S=ar(E),E!==S||E.tag!==5&&E.tag!==6)&&(E=null)):(h=null,E=u),h!==E)){if(w=Em,x="onMouseLeave",g="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(w=bm,x="onPointerLeave",g="onPointerEnter",v="pointer"),S=h==null?p:Lr(h),y=E==null?p:Lr(E),p=new w(x,v+"leave",h,n,d),p.target=S,p.relatedTarget=y,x=null,Un(d)===u&&(w=new w(g,v+"enter",E,n,d),w.target=y,w.relatedTarget=S,x=w),S=x,h&&E)t:{for(w=h,g=E,v=0,y=w;y;y=ur(y))v++;for(y=0,x=g;x;x=ur(x))y++;for(;0<v-y;)w=ur(w),v--;for(;0<y-v;)g=ur(g),y--;for(;v--;){if(w===g||g!==null&&w===g.alternate)break t;w=ur(w),g=ur(g)}w=null}else w=null;h!==null&&Nm(m,p,h,w,!1),E!==null&&S!==null&&Nm(m,S,E,w,!0)}}e:{if(p=u?Lr(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var k=h2;else if(Cm(p))if(h0)k=x2;else{k=v2;var T=g2}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=y2);if(k&&(k=k(e,u))){p0(m,k,n,d);break e}T&&T(e,p,u),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&gc(p,"number",p.value)}switch(T=u?Lr(u):window,e){case"focusin":(Cm(T)||T.contentEditable==="true")&&(Pr=T,Lc=u,Io=null);break;case"focusout":Io=Lc=Pr=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Am(m,n,d);break;case"selectionchange":if(b2)break;case"keydown":case"keyup":Am(m,n,d)}var C;if(Wu)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Cr?m0(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(d0&&n.locale!=="ko"&&(Cr||F!=="onCompositionStart"?F==="onCompositionEnd"&&Cr&&(C=u0()):(an=d,_u="value"in an?an.value:an.textContent,Cr=!0)),T=Wa(u,F),0<T.length&&(F=new wm(F,e,null,n,d),m.push({event:F,listeners:T}),C?F.data=C:(C=f0(n),C!==null&&(F.data=C)))),(C=u2?d2(e,n):m2(e,n))&&(u=Wa(u,"onBeforeInput"),0<u.length&&(d=new wm("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=C))}C0(m,t)})}function ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ko(e,n),i!=null&&r.unshift(ti(e,i,o)),i=Ko(e,t),i!=null&&r.push(ti(e,i,o))),e=e.return}return r}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nm(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,o?(c=Ko(n,i),c!=null&&l.unshift(ti(n,c,s))):o||(c=Ko(n,i),c!=null&&l.push(ti(n,c,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var P2=/\r\n?/g,T2=/\u0000|\uFFFD/g;function zm(e){return(typeof e=="string"?e:""+e).replace(P2,`
`).replace(T2,"")}function ji(e,t,n){if(t=zm(t),zm(e)!==t&&n)throw Error(A(425))}function Ga(){}var Ac=null,Dc=null;function Rc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nc=typeof setTimeout=="function"?setTimeout:void 0,L2=typeof clearTimeout=="function"?clearTimeout:void 0,Mm=typeof Promise=="function"?Promise:void 0,F2=typeof queueMicrotask=="function"?queueMicrotask:typeof Mm<"u"?function(e){return Mm.resolve(null).then(e).catch(A2)}:Nc;function A2(e){setTimeout(function(){throw e})}function gs(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),qo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);qo(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Im(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var so=Math.random().toString(36).slice(2),St="__reactFiber$"+so,ni="__reactProps$"+so,Bt="__reactContainer$"+so,zc="__reactEvents$"+so,D2="__reactListeners$"+so,R2="__reactHandles$"+so;function Un(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Im(e);e!==null;){if(n=e[St])return n;e=Im(e)}return t}e=n,n=e.parentNode}return null}function yi(e){return e=e[St]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Pl(e){return e[ni]||null}var Mc=[],Fr=-1;function Tn(e){return{current:e}}function ne(e){0>Fr||(e.current=Mc[Fr],Mc[Fr]=null,Fr--)}function J(e,t){Fr++,Mc[Fr]=e.current,e.current=t}var Sn={},Ne=Tn(Sn),Ue=Tn(!1),er=Sn;function Yr(e,t){var n=e.type.contextTypes;if(!n)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function He(e){return e=e.childContextTypes,e!=null}function Ya(){ne(Ue),ne(Ne)}function Vm(e,t,n){if(Ne.current!==Sn)throw Error(A(168));J(Ne,t),J(Ue,n)}function T0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(A(108,gy(e)||"Unknown",o));return ce({},n,r)}function Ka(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,er=Ne.current,J(Ne,e),J(Ue,Ue.current),!0}function Om(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=T0(e,t,er),r.__reactInternalMemoizedMergedChildContext=e,ne(Ue),ne(Ne),J(Ne,e)):ne(Ue),J(Ue,n)}var Rt=null,Tl=!1,vs=!1;function L0(e){Rt===null?Rt=[e]:Rt.push(e)}function N2(e){Tl=!0,L0(e)}function Ln(){if(!vs&&Rt!==null){vs=!0;var e=0,t=Q;try{var n=Rt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,Tl=!1}catch(o){throw Rt!==null&&(Rt=Rt.slice(e+1)),Jh(Ou,Ln),o}finally{Q=t,vs=!1}}return null}var Ar=[],Dr=0,Qa=null,Xa=0,ot=[],it=0,tr=null,Nt=1,zt="";function $n(e,t){Ar[Dr++]=Xa,Ar[Dr++]=Qa,Qa=e,Xa=t}function F0(e,t,n){ot[it++]=Nt,ot[it++]=zt,ot[it++]=tr,tr=e;var r=Nt;e=zt;var o=32-gt(r)-1;r&=~(1<<o),n+=1;var i=32-gt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Nt=1<<32-gt(t)+o|n<<o|r,zt=i+e}else Nt=1<<i|n<<o|r,zt=e}function Yu(e){e.return!==null&&($n(e,1),F0(e,1,0))}function Ku(e){for(;e===Qa;)Qa=Ar[--Dr],Ar[Dr]=null,Xa=Ar[--Dr],Ar[Dr]=null;for(;e===tr;)tr=ot[--it],ot[it]=null,zt=ot[--it],ot[it]=null,Nt=ot[--it],ot[it]=null}var Qe=null,Ke=null,oe=!1,ht=null;function A0(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $m(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ke=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tr!==null?{id:Nt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ke=null,!0):!1;default:return!1}}function Ic(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vc(e){if(oe){var t=Ke;if(t){var n=t;if(!$m(e,t)){if(Ic(e))throw Error(A(418));t=fn(n.nextSibling);var r=Qe;t&&$m(e,t)?A0(r,n):(e.flags=e.flags&-4097|2,oe=!1,Qe=e)}}else{if(Ic(e))throw Error(A(418));e.flags=e.flags&-4097|2,oe=!1,Qe=e}}}function Bm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function _i(e){if(e!==Qe)return!1;if(!oe)return Bm(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rc(e.type,e.memoizedProps)),t&&(t=Ke)){if(Ic(e))throw D0(),Error(A(418));for(;t;)A0(e,t),t=fn(t.nextSibling)}if(Bm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=Qe?fn(e.stateNode.nextSibling):null;return!0}function D0(){for(var e=Ke;e;)e=fn(e.nextSibling)}function Kr(){Ke=Qe=null,oe=!1}function Qu(e){ht===null?ht=[e]:ht.push(e)}var z2=Ht.ReactCurrentBatchConfig;function yo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Ui(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jm(e){var t=e._init;return t(e._payload)}function R0(e){function t(g,v){if(e){var y=g.deletions;y===null?(g.deletions=[v],g.flags|=16):y.push(v)}}function n(g,v){if(!e)return null;for(;v!==null;)t(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function o(g,v){return g=vn(g,v),g.index=0,g.sibling=null,g}function i(g,v,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<v?(g.flags|=2,v):y):(g.flags|=2,v)):(g.flags|=1048576,v)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,v,y,x){return v===null||v.tag!==6?(v=ks(y,g.mode,x),v.return=g,v):(v=o(v,y),v.return=g,v)}function c(g,v,y,x){var k=y.type;return k===kr?d(g,v,y.props.children,x,y.key):v!==null&&(v.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===en&&jm(k)===v.type)?(x=o(v,y.props),x.ref=yo(g,v,y),x.return=g,x):(x=Aa(y.type,y.key,y.props,null,g.mode,x),x.ref=yo(g,v,y),x.return=g,x)}function u(g,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Cs(y,g.mode,x),v.return=g,v):(v=o(v,y.children||[]),v.return=g,v)}function d(g,v,y,x,k){return v===null||v.tag!==7?(v=Xn(y,g.mode,x,k),v.return=g,v):(v=o(v,y),v.return=g,v)}function m(g,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ks(""+v,g.mode,y),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ri:return y=Aa(v.type,v.key,v.props,null,g.mode,y),y.ref=yo(g,null,v),y.return=g,y;case Sr:return v=Cs(v,g.mode,y),v.return=g,v;case en:var x=v._init;return m(g,x(v._payload),y)}if(To(v)||fo(v))return v=Xn(v,g.mode,y,null),v.return=g,v;Ui(g,v)}return null}function p(g,v,y,x){var k=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:s(g,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ri:return y.key===k?c(g,v,y,x):null;case Sr:return y.key===k?u(g,v,y,x):null;case en:return k=y._init,p(g,v,k(y._payload),x)}if(To(y)||fo(y))return k!==null?null:d(g,v,y,x,null);Ui(g,y)}return null}function h(g,v,y,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(y)||null,s(v,g,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ri:return g=g.get(x.key===null?y:x.key)||null,c(v,g,x,k);case Sr:return g=g.get(x.key===null?y:x.key)||null,u(v,g,x,k);case en:var T=x._init;return h(g,v,y,T(x._payload),k)}if(To(x)||fo(x))return g=g.get(y)||null,d(v,g,x,k,null);Ui(v,x)}return null}function E(g,v,y,x){for(var k=null,T=null,C=v,F=v=0,M=null;C!==null&&F<y.length;F++){C.index>F?(M=C,C=null):M=C.sibling;var I=p(g,C,y[F],x);if(I===null){C===null&&(C=M);break}e&&C&&I.alternate===null&&t(g,C),v=i(I,v,F),T===null?k=I:T.sibling=I,T=I,C=M}if(F===y.length)return n(g,C),oe&&$n(g,F),k;if(C===null){for(;F<y.length;F++)C=m(g,y[F],x),C!==null&&(v=i(C,v,F),T===null?k=C:T.sibling=C,T=C);return oe&&$n(g,F),k}for(C=r(g,C);F<y.length;F++)M=h(C,g,F,y[F],x),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?F:M.key),v=i(M,v,F),T===null?k=M:T.sibling=M,T=M);return e&&C.forEach(function(R){return t(g,R)}),oe&&$n(g,F),k}function w(g,v,y,x){var k=fo(y);if(typeof k!="function")throw Error(A(150));if(y=k.call(y),y==null)throw Error(A(151));for(var T=k=null,C=v,F=v=0,M=null,I=y.next();C!==null&&!I.done;F++,I=y.next()){C.index>F?(M=C,C=null):M=C.sibling;var R=p(g,C,I.value,x);if(R===null){C===null&&(C=M);break}e&&C&&R.alternate===null&&t(g,C),v=i(R,v,F),T===null?k=R:T.sibling=R,T=R,C=M}if(I.done)return n(g,C),oe&&$n(g,F),k;if(C===null){for(;!I.done;F++,I=y.next())I=m(g,I.value,x),I!==null&&(v=i(I,v,F),T===null?k=I:T.sibling=I,T=I);return oe&&$n(g,F),k}for(C=r(g,C);!I.done;F++,I=y.next())I=h(C,g,F,I.value,x),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?F:I.key),v=i(I,v,F),T===null?k=I:T.sibling=I,T=I);return e&&C.forEach(function(_){return t(g,_)}),oe&&$n(g,F),k}function S(g,v,y,x){if(typeof y=="object"&&y!==null&&y.type===kr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ri:e:{for(var k=y.key,T=v;T!==null;){if(T.key===k){if(k=y.type,k===kr){if(T.tag===7){n(g,T.sibling),v=o(T,y.props.children),v.return=g,g=v;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===en&&jm(k)===T.type){n(g,T.sibling),v=o(T,y.props),v.ref=yo(g,T,y),v.return=g,g=v;break e}n(g,T);break}else t(g,T);T=T.sibling}y.type===kr?(v=Xn(y.props.children,g.mode,x,y.key),v.return=g,g=v):(x=Aa(y.type,y.key,y.props,null,g.mode,x),x.ref=yo(g,v,y),x.return=g,g=x)}return l(g);case Sr:e:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(g,v.sibling),v=o(v,y.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else t(g,v);v=v.sibling}v=Cs(y,g.mode,x),v.return=g,g=v}return l(g);case en:return T=y._init,S(g,v,T(y._payload),x)}if(To(y))return E(g,v,y,x);if(fo(y))return w(g,v,y,x);Ui(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(g,v.sibling),v=o(v,y),v.return=g,g=v):(n(g,v),v=ks(y,g.mode,x),v.return=g,g=v),l(g)):n(g,v)}return S}var Qr=R0(!0),N0=R0(!1),qa=Tn(null),Za=null,Rr=null,Xu=null;function qu(){Xu=Rr=Za=null}function Zu(e){var t=qa.current;ne(qa),e._currentValue=t}function Oc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hr(e,t){Za=e,Xu=Rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(Xu!==e)if(e={context:e,memoizedValue:t,next:null},Rr===null){if(Za===null)throw Error(A(308));Rr=e,Za.dependencies={lanes:0,firstContext:e}}else Rr=Rr.next=e;return t}var Hn=null;function Ju(e){Hn===null?Hn=[e]:Hn.push(e)}function z0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ju(t)):(n.next=o.next,o.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tn=!1;function ed(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function M0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,jt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ju(r)):(t.next=o.next,o.next=t),r.interleaved=t,jt(e,n)}function ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$u(e,n)}}function _m(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ja(e,t,n,r){var o=e.updateQueue;tn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,u=c.next;c.next=null,l===null?i=u:l.next=u,l=c;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=c))}if(i!==null){var m=o.baseState;l=0,d=u=c=null,s=i;do{var p=s.lane,h=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,w=s;switch(p=t,h=n,w.tag){case 1:if(E=w.payload,typeof E=="function"){m=E.call(h,m,p);break e}m=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=w.payload,p=typeof E=="function"?E.call(h,m,p):E,p==null)break e;m=ce({},m,p);break e;case 2:tn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=h,c=m):d=d.next=h,l|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(1);if(d===null&&(c=m),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);rr|=l,e.lanes=l,e.memoizedState=m}}function Um(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(A(191,o));o.call(r)}}}var xi={},Ct=Tn(xi),ri=Tn(xi),oi=Tn(xi);function Wn(e){if(e===xi)throw Error(A(174));return e}function td(e,t){switch(J(oi,t),J(ri,e),J(Ct,xi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yc(t,e)}ne(Ct),J(Ct,t)}function Xr(){ne(Ct),ne(ri),ne(oi)}function I0(e){Wn(oi.current);var t=Wn(Ct.current),n=yc(t,e.type);t!==n&&(J(ri,e),J(Ct,n))}function nd(e){ri.current===e&&(ne(Ct),ne(ri))}var ae=Tn(0);function el(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ys=[];function rd(){for(var e=0;e<ys.length;e++)ys[e]._workInProgressVersionPrimary=null;ys.length=0}var Ca=Ht.ReactCurrentDispatcher,xs=Ht.ReactCurrentBatchConfig,nr=0,se=null,Ee=null,Se=null,tl=!1,Vo=!1,ii=0,M2=0;function Fe(){throw Error(A(321))}function od(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function id(e,t,n,r,o,i){if(nr=i,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ca.current=e===null||e.memoizedState===null?$2:B2,e=n(r,o),Vo){i=0;do{if(Vo=!1,ii=0,25<=i)throw Error(A(301));i+=1,Se=Ee=null,t.updateQueue=null,Ca.current=j2,e=n(r,o)}while(Vo)}if(Ca.current=nl,t=Ee!==null&&Ee.next!==null,nr=0,Se=Ee=se=null,tl=!1,t)throw Error(A(300));return e}function ad(){var e=ii!==0;return ii=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?se.memoizedState=Se=e:Se=Se.next=e,Se}function ct(){if(Ee===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Se===null?se.memoizedState:Se.next;if(t!==null)Se=t,Ee=e;else{if(e===null)throw Error(A(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Se===null?se.memoizedState=Se=e:Se=Se.next=e}return Se}function ai(e,t){return typeof t=="function"?t(e):t}function Es(e){var t=ct(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Ee,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,c=null,u=i;do{var d=u.lane;if((nr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=m,l=r):c=c.next=m,se.lanes|=d,rr|=d}u=u.next}while(u!==null&&u!==i);c===null?l=r:c.next=s,xt(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,se.lanes|=i,rr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ws(e){var t=ct(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);xt(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function V0(){}function O0(e,t){var n=se,r=ct(),o=t(),i=!xt(r.memoizedState,o);if(i&&(r.memoizedState=o,je=!0),r=r.queue,ld(j0.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,li(9,B0.bind(null,n,r,o,t),void 0,null),Ce===null)throw Error(A(349));nr&30||$0(n,t,o)}return o}function $0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function B0(e,t,n,r){t.value=n,t.getSnapshot=r,_0(t)&&U0(e)}function j0(e,t,n){return n(function(){_0(t)&&U0(e)})}function _0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function U0(e){var t=jt(e,1);t!==null&&vt(t,e,1,-1)}function Hm(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:e},t.queue=e,e=e.dispatch=O2.bind(null,se,e),[t.memoizedState,e]}function li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function H0(){return ct().memoizedState}function Pa(e,t,n,r){var o=wt();se.flags|=e,o.memoizedState=li(1|t,n,void 0,r===void 0?null:r)}function Ll(e,t,n,r){var o=ct();r=r===void 0?null:r;var i=void 0;if(Ee!==null){var l=Ee.memoizedState;if(i=l.destroy,r!==null&&od(r,l.deps)){o.memoizedState=li(t,n,i,r);return}}se.flags|=e,o.memoizedState=li(1|t,n,i,r)}function Wm(e,t){return Pa(8390656,8,e,t)}function ld(e,t){return Ll(2048,8,e,t)}function W0(e,t){return Ll(4,2,e,t)}function G0(e,t){return Ll(4,4,e,t)}function Y0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function K0(e,t,n){return n=n!=null?n.concat([e]):null,Ll(4,4,Y0.bind(null,t,e),n)}function sd(){}function Q0(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&od(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function X0(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&od(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function q0(e,t,n){return nr&21?(xt(n,t)||(n=n0(),se.lanes|=n,rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function I2(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=xs.transition;xs.transition={};try{e(!1),t()}finally{Q=n,xs.transition=r}}function Z0(){return ct().memoizedState}function V2(e,t,n){var r=gn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},J0(e))eg(t,n);else if(n=z0(e,t,n,r),n!==null){var o=Ie();vt(n,e,r,o),tg(n,t,r)}}function O2(e,t,n){var r=gn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(J0(e))eg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,xt(s,l)){var c=t.interleaved;c===null?(o.next=o,Ju(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=z0(e,t,o,r),n!==null&&(o=Ie(),vt(n,e,r,o),tg(n,t,r))}}function J0(e){var t=e.alternate;return e===se||t!==null&&t===se}function eg(e,t){Vo=tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$u(e,n)}}var nl={readContext:st,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},$2={readContext:st,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:Wm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pa(4194308,4,Y0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pa(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=V2.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:Hm,useDebugValue:sd,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=Hm(!1),t=e[0];return e=I2.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,o=wt();if(oe){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Ce===null)throw Error(A(349));nr&30||$0(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Wm(j0.bind(null,r,i,e),[e]),r.flags|=2048,li(9,B0.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=wt(),t=Ce.identifierPrefix;if(oe){var n=zt,r=Nt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ii++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=M2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B2={readContext:st,useCallback:Q0,useContext:st,useEffect:ld,useImperativeHandle:K0,useInsertionEffect:W0,useLayoutEffect:G0,useMemo:X0,useReducer:Es,useRef:H0,useState:function(){return Es(ai)},useDebugValue:sd,useDeferredValue:function(e){var t=ct();return q0(t,Ee.memoizedState,e)},useTransition:function(){var e=Es(ai)[0],t=ct().memoizedState;return[e,t]},useMutableSource:V0,useSyncExternalStore:O0,useId:Z0,unstable_isNewReconciler:!1},j2={readContext:st,useCallback:Q0,useContext:st,useEffect:ld,useImperativeHandle:K0,useInsertionEffect:W0,useLayoutEffect:G0,useMemo:X0,useReducer:ws,useRef:H0,useState:function(){return ws(ai)},useDebugValue:sd,useDeferredValue:function(e){var t=ct();return Ee===null?t.memoizedState=e:q0(t,Ee.memoizedState,e)},useTransition:function(){var e=ws(ai)[0],t=ct().memoizedState;return[e,t]},useMutableSource:V0,useSyncExternalStore:O0,useId:Z0,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $c(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fl={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=gn(e),i=It(r,o);i.payload=t,n!=null&&(i.callback=n),t=pn(e,i,o),t!==null&&(vt(t,e,o,r),ka(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=gn(e),i=It(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=pn(e,i,o),t!==null&&(vt(t,e,o,r),ka(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=gn(e),o=It(n,r);o.tag=2,t!=null&&(o.callback=t),t=pn(e,o,r),t!==null&&(vt(t,e,r,n),ka(t,e,r))}};function Gm(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Jo(n,r)||!Jo(o,i):!0}function ng(e,t,n){var r=!1,o=Sn,i=t.contextType;return typeof i=="object"&&i!==null?i=st(i):(o=He(t)?er:Ne.current,r=t.contextTypes,i=(r=r!=null)?Yr(e,o):Sn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ym(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fl.enqueueReplaceState(t,t.state,null)}function Bc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ed(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=st(i):(i=He(t)?er:Ne.current,o.context=Yr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&($c(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Fl.enqueueReplaceState(o,o.state,null),Ja(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function qr(e,t){try{var n="",r=t;do n+=hy(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function bs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _2=typeof WeakMap=="function"?WeakMap:Map;function rg(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ol||(ol=!0,qc=r),jc(e,t)},n}function og(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){jc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){jc(e,t),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Km(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _2;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=n5.bind(null,e,t,n),t.then(e,e))}function Qm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xm(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e)}var U2=Ht.ReactCurrentOwner,je=!1;function Me(e,t,n,r){t.child=e===null?N0(t,null,n,r):Qr(t,e.child,n,r)}function qm(e,t,n,r,o){n=n.render;var i=t.ref;return Hr(t,o),r=id(e,t,n,r,i,o),n=ad(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_t(e,t,o)):(oe&&n&&Yu(t),t.flags|=1,Me(e,t,r,o),t.child)}function Zm(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!gd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ig(e,t,i,r,o)):(e=Aa(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jo,n(l,r)&&e.ref===t.ref)return _t(e,t,o)}return t.flags|=1,e=vn(i,r),e.ref=t.ref,e.return=t,t.child=e}function ig(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Jo(i,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,_t(e,t,o)}return _c(e,t,n,r,o)}function ag(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(zr,Ye),Ye|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(zr,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,J(zr,Ye),Ye|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,J(zr,Ye),Ye|=r;return Me(e,t,o,n),t.child}function lg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _c(e,t,n,r,o){var i=He(n)?er:Ne.current;return i=Yr(t,i),Hr(t,o),n=id(e,t,n,r,i,o),r=ad(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_t(e,t,o)):(oe&&r&&Yu(t),t.flags|=1,Me(e,t,n,o),t.child)}function Jm(e,t,n,r,o){if(He(n)){var i=!0;Ka(t)}else i=!1;if(Hr(t,o),t.stateNode===null)Ta(e,t),ng(t,n,r),Bc(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=He(n)?er:Ne.current,u=Yr(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||c!==u)&&Ym(t,l,r,u),tn=!1;var p=t.memoizedState;l.state=p,Ja(t,r,l,o),c=t.memoizedState,s!==r||p!==c||Ue.current||tn?(typeof d=="function"&&($c(t,n,d,r),c=t.memoizedState),(s=tn||Gm(t,n,s,r,p,c,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,M0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ft(t.type,s),l.props=u,m=t.pendingProps,p=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=st(c):(c=He(n)?er:Ne.current,c=Yr(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||p!==c)&&Ym(t,l,r,c),tn=!1,p=t.memoizedState,l.state=p,Ja(t,r,l,o);var E=t.memoizedState;s!==m||p!==E||Ue.current||tn?(typeof h=="function"&&($c(t,n,h,r),E=t.memoizedState),(u=tn||Gm(t,n,u,r,p,E,c)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,E,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,E,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),l.props=r,l.state=E,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Uc(e,t,n,r,i,o)}function Uc(e,t,n,r,o,i){lg(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Om(t,n,!1),_t(e,t,i);r=t.stateNode,U2.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Qr(t,e.child,null,i),t.child=Qr(t,null,s,i)):Me(e,t,s,i),t.memoizedState=r.state,o&&Om(t,n,!0),t.child}function sg(e){var t=e.stateNode;t.pendingContext?Vm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vm(e,t.context,!1),td(e,t.containerInfo)}function ef(e,t,n,r,o){return Kr(),Qu(o),t.flags|=256,Me(e,t,n,r),t.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function Wc(e){return{baseLanes:e,cachePool:null,transitions:null}}function cg(e,t,n){var r=t.pendingProps,o=ae.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(ae,o&1),e===null)return Vc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Rl(l,r,0,null),e=Xn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Wc(n),t.memoizedState=Hc,e):cd(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return H2(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=vn(o,c),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=vn(s,i):(i=Xn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Wc(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Hc,r}return i=e.child,e=i.sibling,r=vn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cd(e,t){return t=Rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hi(e,t,n,r){return r!==null&&Qu(r),Qr(t,e.child,null,n),e=cd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function H2(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=bs(Error(A(422))),Hi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Rl({mode:"visible",children:r.children},o,0,null),i=Xn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Qr(t,e.child,null,l),t.child.memoizedState=Wc(l),t.memoizedState=Hc,i);if(!(t.mode&1))return Hi(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(A(419)),r=bs(i,r,void 0),Hi(e,t,l,r)}if(s=(l&e.childLanes)!==0,je||s){if(r=Ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,jt(e,o),vt(r,e,o,-1))}return hd(),r=bs(Error(A(421))),Hi(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=r5.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ke=fn(o.nextSibling),Qe=t,oe=!0,ht=null,e!==null&&(ot[it++]=Nt,ot[it++]=zt,ot[it++]=tr,Nt=e.id,zt=e.overflow,tr=t),t=cd(t,r.children),t.flags|=4096,t)}function tf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oc(e.return,t,n)}function Ss(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ug(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Me(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tf(e,n,t);else if(e.tag===19)tf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(ae,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&el(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ss(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&el(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ss(t,!0,n,null,i);break;case"together":Ss(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ta(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function W2(e,t,n){switch(t.tag){case 3:sg(t),Kr();break;case 5:I0(t);break;case 1:He(t.type)&&Ka(t);break;case 4:td(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;J(qa,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?cg(e,t,n):(J(ae,ae.current&1),e=_t(e,t,n),e!==null?e.sibling:null);J(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ug(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,ag(e,t,n)}return _t(e,t,n)}var dg,Gc,mg,fg;dg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gc=function(){};mg=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Wn(Ct.current);var i=null;switch(n){case"input":o=pc(e,o),r=pc(e,r),i=[];break;case"select":o=ce({},o,{value:void 0}),r=ce({},r,{value:void 0}),i=[];break;case"textarea":o=vc(e,o),r=vc(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ga)}xc(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Go.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Go.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ee("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};fg=function(e,t,n,r){n!==r&&(t.flags|=4)};function xo(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function G2(e,t,n){var r=t.pendingProps;switch(Ku(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return He(t.type)&&Ya(),Ae(t),null;case 3:return r=t.stateNode,Xr(),ne(Ue),ne(Ne),rd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(eu(ht),ht=null))),Gc(e,t),Ae(t),null;case 5:nd(t);var o=Wn(oi.current);if(n=t.type,e!==null&&t.stateNode!=null)mg(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ae(t),null}if(e=Wn(Ct.current),_i(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[St]=t,r[ni]=i,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(o=0;o<Fo.length;o++)ee(Fo[o],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":um(r,i),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ee("invalid",r);break;case"textarea":mm(r,i),ee("invalid",r)}xc(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ji(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ji(r.textContent,s,e),o=["children",""+s]):Go.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ee("scroll",r)}switch(n){case"input":Ni(r),dm(r,i,!0);break;case"textarea":Ni(r),fm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ga)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[St]=t,e[ni]=r,dg(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ec(n,r),n){case"dialog":ee("cancel",e),ee("close",e),o=r;break;case"iframe":case"object":case"embed":ee("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fo.length;o++)ee(Fo[o],e);o=r;break;case"source":ee("error",e),o=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),o=r;break;case"details":ee("toggle",e),o=r;break;case"input":um(e,r),o=pc(e,r),ee("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ce({},r,{value:void 0}),ee("invalid",e);break;case"textarea":mm(e,r),o=vc(e,r),ee("invalid",e);break;default:o=r}xc(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?Hh(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&_h(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Yo(e,c):typeof c=="number"&&Yo(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Go.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ee("scroll",e):c!=null&&Nu(e,i,c,l))}switch(n){case"input":Ni(e),dm(e,r,!1);break;case"textarea":Ni(e),fm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Br(e,!!r.multiple,i,!1):r.defaultValue!=null&&Br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)fg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=Wn(oi.current),Wn(Ct.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(i=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:ji(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ji(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Ae(t),null;case 13:if(ne(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ke!==null&&t.mode&1&&!(t.flags&128))D0(),Kr(),t.flags|=98560,i=!1;else if(i=_i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[St]=t}else Kr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),i=!1}else ht!==null&&(eu(ht),ht=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?we===0&&(we=3):hd())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return Xr(),Gc(e,t),e===null&&ei(t.stateNode.containerInfo),Ae(t),null;case 10:return Zu(t.type._context),Ae(t),null;case 17:return He(t.type)&&Ya(),Ae(t),null;case 19:if(ne(ae),i=t.memoizedState,i===null)return Ae(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)xo(i,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=el(e),l!==null){for(t.flags|=128,xo(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(ae,ae.current&1|2),t.child}e=e.sibling}i.tail!==null&&fe()>Zr&&(t.flags|=128,r=!0,xo(i,!1),t.lanes=4194304)}else{if(!r)if(e=el(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!oe)return Ae(t),null}else 2*fe()-i.renderingStartTime>Zr&&n!==1073741824&&(t.flags|=128,r=!0,xo(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=fe(),t.sibling=null,n=ae.current,J(ae,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return pd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Y2(e,t){switch(Ku(t),t.tag){case 1:return He(t.type)&&Ya(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xr(),ne(Ue),ne(Ne),rd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return nd(t),null;case 13:if(ne(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(ae),null;case 4:return Xr(),null;case 10:return Zu(t.type._context),null;case 22:case 23:return pd(),null;case 24:return null;default:return null}}var Wi=!1,Re=!1,K2=typeof WeakSet=="function"?WeakSet:Set,z=null;function Nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function Yc(e,t,n){try{n()}catch(r){de(e,t,r)}}var nf=!1;function Q2(e,t){if(Ac=Ua,e=y0(),Gu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,m=e,p=null;t:for(;;){for(var h;m!==n||o!==0&&m.nodeType!==3||(s=l+o),m!==i||r!==0&&m.nodeType!==3||(c=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(h=m.firstChild)!==null;)p=m,m=h;for(;;){if(m===e)break t;if(p===n&&++u===o&&(s=l),p===i&&++d===r&&(c=l),(h=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=h}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dc={focusedElem:e,selectionRange:n},Ua=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var w=E.memoizedProps,S=E.memoizedState,g=t.stateNode,v=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:ft(t.type,w),S);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(x){de(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return E=nf,nf=!1,E}function Oo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Yc(t,n,i)}o=o.next}while(o!==r)}}function Al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Kc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pg(e){var t=e.alternate;t!==null&&(e.alternate=null,pg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[ni],delete t[zc],delete t[D2],delete t[R2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hg(e){return e.tag===5||e.tag===3||e.tag===4}function rf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ga));else if(r!==4&&(e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}var Pe=null,pt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)gg(e,t,n),n=n.sibling}function gg(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:Re||Nr(n,t);case 6:var r=Pe,o=pt;Pe=null,Yt(e,t,n),Pe=r,pt=o,Pe!==null&&(pt?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(pt?(e=Pe,n=n.stateNode,e.nodeType===8?gs(e.parentNode,n):e.nodeType===1&&gs(e,n),qo(e)):gs(Pe,n.stateNode));break;case 4:r=Pe,o=pt,Pe=n.stateNode.containerInfo,pt=!0,Yt(e,t,n),Pe=r,pt=o;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Yc(n,t,l),o=o.next}while(o!==r)}Yt(e,t,n);break;case 1:if(!Re&&(Nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){de(n,t,s)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,Yt(e,t,n),Re=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function of(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new K2),t.forEach(function(r){var o=o5.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Pe=s.stateNode,pt=!1;break e;case 3:Pe=s.stateNode.containerInfo,pt=!0;break e;case 4:Pe=s.stateNode.containerInfo,pt=!0;break e}s=s.return}if(Pe===null)throw Error(A(160));gg(i,l,o),Pe=null,pt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){de(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vg(t,e),t=t.sibling}function vg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),Et(e),r&4){try{Oo(3,e,e.return),Al(3,e)}catch(w){de(e,e.return,w)}try{Oo(5,e,e.return)}catch(w){de(e,e.return,w)}}break;case 1:mt(t,e),Et(e),r&512&&n!==null&&Nr(n,n.return);break;case 5:if(mt(t,e),Et(e),r&512&&n!==null&&Nr(n,n.return),e.flags&32){var o=e.stateNode;try{Yo(o,"")}catch(w){de(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&$h(o,i),Ec(s,l);var u=Ec(s,i);for(l=0;l<c.length;l+=2){var d=c[l],m=c[l+1];d==="style"?Hh(o,m):d==="dangerouslySetInnerHTML"?_h(o,m):d==="children"?Yo(o,m):Nu(o,d,m,u)}switch(s){case"input":hc(o,i);break;case"textarea":Bh(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Br(o,!!i.multiple,h,!1):p!==!!i.multiple&&(i.defaultValue!=null?Br(o,!!i.multiple,i.defaultValue,!0):Br(o,!!i.multiple,i.multiple?[]:"",!1))}o[ni]=i}catch(w){de(e,e.return,w)}}break;case 6:if(mt(t,e),Et(e),r&4){if(e.stateNode===null)throw Error(A(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){de(e,e.return,w)}}break;case 3:if(mt(t,e),Et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(t.containerInfo)}catch(w){de(e,e.return,w)}break;case 4:mt(t,e),Et(e);break;case 13:mt(t,e),Et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(md=fe())),r&4&&of(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(u=Re)||d,mt(t,e),Re=u):mt(t,e),Et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(z=e,d=e.child;d!==null;){for(m=z=d;z!==null;){switch(p=z,h=p.child,p.tag){case 0:case 11:case 14:case 15:Oo(4,p,p.return);break;case 1:Nr(p,p.return);var E=p.stateNode;if(typeof E.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(w){de(r,n,w)}}break;case 5:Nr(p,p.return);break;case 22:if(p.memoizedState!==null){lf(m);continue}}h!==null?(h.return=p,z=h):lf(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,c=m.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Uh("display",l))}catch(w){de(e,e.return,w)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){de(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:mt(t,e),Et(e),r&4&&of(e);break;case 21:break;default:mt(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hg(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Yo(o,""),r.flags&=-33);var i=rf(e);Xc(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=rf(e);Qc(e,s,l);break;default:throw Error(A(161))}}catch(c){de(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function X2(e,t,n){z=e,yg(e)}function yg(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Wi;if(!l){var s=o.alternate,c=s!==null&&s.memoizedState!==null||Re;s=Wi;var u=Re;if(Wi=l,(Re=c)&&!u)for(z=o;z!==null;)l=z,c=l.child,l.tag===22&&l.memoizedState!==null?sf(o):c!==null?(c.return=l,z=c):sf(o);for(;i!==null;)z=i,yg(i),i=i.sibling;z=o,Wi=s,Re=u}af(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):af(e)}}function af(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Al(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Um(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Um(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&qo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Re||t.flags&512&&Kc(t)}catch(p){de(t,t.return,p)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function lf(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function sf(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Al(4,t)}catch(c){de(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){de(t,o,c)}}var i=t.return;try{Kc(t)}catch(c){de(t,i,c)}break;case 5:var l=t.return;try{Kc(t)}catch(c){de(t,l,c)}}}catch(c){de(t,t.return,c)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var q2=Math.ceil,rl=Ht.ReactCurrentDispatcher,ud=Ht.ReactCurrentOwner,lt=Ht.ReactCurrentBatchConfig,W=0,Ce=null,xe=null,Te=0,Ye=0,zr=Tn(0),we=0,si=null,rr=0,Dl=0,dd=0,$o=null,Be=null,md=0,Zr=1/0,At=null,ol=!1,qc=null,hn=null,Gi=!1,ln=null,il=0,Bo=0,Zc=null,La=-1,Fa=0;function Ie(){return W&6?fe():La!==-1?La:La=fe()}function gn(e){return e.mode&1?W&2&&Te!==0?Te&-Te:z2.transition!==null?(Fa===0&&(Fa=n0()),Fa):(e=Q,e!==0||(e=window.event,e=e===void 0?16:c0(e.type)),e):1}function vt(e,t,n,r){if(50<Bo)throw Bo=0,Zc=null,Error(A(185));gi(e,n,r),(!(W&2)||e!==Ce)&&(e===Ce&&(!(W&2)&&(Dl|=n),we===4&&on(e,Te)),We(e,r),n===1&&W===0&&!(t.mode&1)&&(Zr=fe()+500,Tl&&Ln()))}function We(e,t){var n=e.callbackNode;zy(e,t);var r=_a(e,e===Ce?Te:0);if(r===0)n!==null&&gm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&gm(n),t===1)e.tag===0?N2(cf.bind(null,e)):L0(cf.bind(null,e)),F2(function(){!(W&6)&&Ln()}),n=null;else{switch(r0(r)){case 1:n=Ou;break;case 4:n=e0;break;case 16:n=ja;break;case 536870912:n=t0;break;default:n=ja}n=Pg(n,xg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xg(e,t){if(La=-1,Fa=0,W&6)throw Error(A(327));var n=e.callbackNode;if(Wr()&&e.callbackNode!==n)return null;var r=_a(e,e===Ce?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=al(e,r);else{t=r;var o=W;W|=2;var i=wg();(Ce!==e||Te!==t)&&(At=null,Zr=fe()+500,Qn(e,t));do try{e5();break}catch(s){Eg(e,s)}while(1);qu(),rl.current=i,W=o,xe!==null?t=0:(Ce=null,Te=0,t=we)}if(t!==0){if(t===2&&(o=Cc(e),o!==0&&(r=o,t=Jc(e,o))),t===1)throw n=si,Qn(e,0),on(e,r),We(e,fe()),n;if(t===6)on(e,r);else{if(o=e.current.alternate,!(r&30)&&!Z2(o)&&(t=al(e,r),t===2&&(i=Cc(e),i!==0&&(r=i,t=Jc(e,i))),t===1))throw n=si,Qn(e,0),on(e,r),We(e,fe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:Bn(e,Be,At);break;case 3:if(on(e,r),(r&130023424)===r&&(t=md+500-fe(),10<t)){if(_a(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Nc(Bn.bind(null,e,Be,At),t);break}Bn(e,Be,At);break;case 4:if(on(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-gt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*q2(r/1960))-r,10<r){e.timeoutHandle=Nc(Bn.bind(null,e,Be,At),r);break}Bn(e,Be,At);break;case 5:Bn(e,Be,At);break;default:throw Error(A(329))}}}return We(e,fe()),e.callbackNode===n?xg.bind(null,e):null}function Jc(e,t){var n=$o;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=al(e,t),e!==2&&(t=Be,Be=n,t!==null&&eu(t)),e}function eu(e){Be===null?Be=e:Be.push.apply(Be,e)}function Z2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!xt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~dd,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function cf(e){if(W&6)throw Error(A(327));Wr();var t=_a(e,0);if(!(t&1))return We(e,fe()),null;var n=al(e,t);if(e.tag!==0&&n===2){var r=Cc(e);r!==0&&(t=r,n=Jc(e,r))}if(n===1)throw n=si,Qn(e,0),on(e,t),We(e,fe()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bn(e,Be,At),We(e,fe()),null}function fd(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Zr=fe()+500,Tl&&Ln())}}function or(e){ln!==null&&ln.tag===0&&!(W&6)&&Wr();var t=W;W|=1;var n=lt.transition,r=Q;try{if(lt.transition=null,Q=1,e)return e()}finally{Q=r,lt.transition=n,W=t,!(W&6)&&Ln()}}function pd(){Ye=zr.current,ne(zr)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,L2(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Ku(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ya();break;case 3:Xr(),ne(Ue),ne(Ne),rd();break;case 5:nd(r);break;case 4:Xr();break;case 13:ne(ae);break;case 19:ne(ae);break;case 10:Zu(r.type._context);break;case 22:case 23:pd()}n=n.return}if(Ce=e,xe=e=vn(e.current,null),Te=Ye=t,we=0,si=null,dd=Dl=rr=0,Be=$o=null,Hn!==null){for(t=0;t<Hn.length;t++)if(n=Hn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Hn=null}return e}function Eg(e,t){do{var n=xe;try{if(qu(),Ca.current=nl,tl){for(var r=se.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}tl=!1}if(nr=0,Se=Ee=se=null,Vo=!1,ii=0,ud.current=null,n===null||n.return===null){we=1,si=t,xe=null;break}e:{var i=e,l=n.return,s=n,c=t;if(t=Te,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=s,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Qm(l);if(h!==null){h.flags&=-257,Xm(h,l,s,i,t),h.mode&1&&Km(i,u,t),t=h,c=u;var E=t.updateQueue;if(E===null){var w=new Set;w.add(c),t.updateQueue=w}else E.add(c);break e}else{if(!(t&1)){Km(i,u,t),hd();break e}c=Error(A(426))}}else if(oe&&s.mode&1){var S=Qm(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Xm(S,l,s,i,t),Qu(qr(c,s));break e}}i=c=qr(c,s),we!==4&&(we=2),$o===null?$o=[i]:$o.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=rg(i,c,t);_m(i,g);break e;case 1:s=c;var v=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(hn===null||!hn.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=og(i,s,t);_m(i,x);break e}}i=i.return}while(i!==null)}Sg(n)}catch(k){t=k,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function wg(){var e=rl.current;return rl.current=nl,e===null?nl:e}function hd(){(we===0||we===3||we===2)&&(we=4),Ce===null||!(rr&268435455)&&!(Dl&268435455)||on(Ce,Te)}function al(e,t){var n=W;W|=2;var r=wg();(Ce!==e||Te!==t)&&(At=null,Qn(e,t));do try{J2();break}catch(o){Eg(e,o)}while(1);if(qu(),W=n,rl.current=r,xe!==null)throw Error(A(261));return Ce=null,Te=0,we}function J2(){for(;xe!==null;)bg(xe)}function e5(){for(;xe!==null&&!Cy();)bg(xe)}function bg(e){var t=Cg(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?Sg(e):xe=t,ud.current=null}function Sg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Y2(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,xe=null;return}}else if(n=G2(n,t,Ye),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);we===0&&(we=5)}function Bn(e,t,n){var r=Q,o=lt.transition;try{lt.transition=null,Q=1,t5(e,t,n,r)}finally{lt.transition=o,Q=r}return null}function t5(e,t,n,r){do Wr();while(ln!==null);if(W&6)throw Error(A(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(My(e,i),e===Ce&&(xe=Ce=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gi||(Gi=!0,Pg(ja,function(){return Wr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=lt.transition,lt.transition=null;var l=Q;Q=1;var s=W;W|=4,ud.current=null,Q2(e,n),vg(n,e),w2(Dc),Ua=!!Ac,Dc=Ac=null,e.current=n,X2(n),Py(),W=s,Q=l,lt.transition=i}else e.current=n;if(Gi&&(Gi=!1,ln=e,il=o),i=e.pendingLanes,i===0&&(hn=null),Fy(n.stateNode),We(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ol)throw ol=!1,e=qc,qc=null,e;return il&1&&e.tag!==0&&Wr(),i=e.pendingLanes,i&1?e===Zc?Bo++:(Bo=0,Zc=e):Bo=0,Ln(),null}function Wr(){if(ln!==null){var e=r0(il),t=lt.transition,n=Q;try{if(lt.transition=null,Q=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,il=0,W&6)throw Error(A(331));var o=W;for(W|=4,z=e.current;z!==null;){var i=z,l=i.child;if(z.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(z=u;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:Oo(8,d,i)}var m=d.child;if(m!==null)m.return=d,z=m;else for(;z!==null;){d=z;var p=d.sibling,h=d.return;if(pg(d),d===u){z=null;break}if(p!==null){p.return=h,z=p;break}z=h}}}var E=i.alternate;if(E!==null){var w=E.child;if(w!==null){E.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}z=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,z=l;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Oo(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,z=g;break e}z=i.return}}var v=e.current;for(z=v;z!==null;){l=z;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,z=y;else e:for(l=v;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Al(9,s)}}catch(k){de(s,s.return,k)}if(s===l){z=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,z=x;break e}z=s.return}}if(W=o,Ln(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(bl,e)}catch{}r=!0}return r}finally{Q=n,lt.transition=t}}return!1}function uf(e,t,n){t=qr(n,t),t=rg(e,t,1),e=pn(e,t,1),t=Ie(),e!==null&&(gi(e,1,t),We(e,t))}function de(e,t,n){if(e.tag===3)uf(e,e,n);else for(;t!==null;){if(t.tag===3){uf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){e=qr(n,e),e=og(t,e,1),t=pn(t,e,1),e=Ie(),t!==null&&(gi(t,1,e),We(t,e));break}}t=t.return}}function n5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Te&n)===n&&(we===4||we===3&&(Te&130023424)===Te&&500>fe()-md?Qn(e,0):dd|=n),We(e,t)}function kg(e,t){t===0&&(e.mode&1?(t=Ii,Ii<<=1,!(Ii&130023424)&&(Ii=4194304)):t=1);var n=Ie();e=jt(e,t),e!==null&&(gi(e,t,n),We(e,n))}function r5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kg(e,n)}function o5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),kg(e,n)}var Cg;Cg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,W2(e,t,n);je=!!(e.flags&131072)}else je=!1,oe&&t.flags&1048576&&F0(t,Xa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ta(e,t),e=t.pendingProps;var o=Yr(t,Ne.current);Hr(t,n),o=id(null,t,r,e,o,n);var i=ad();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(i=!0,Ka(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ed(t),o.updater=Fl,t.stateNode=o,o._reactInternals=t,Bc(t,r,e,n),t=Uc(null,t,r,!0,i,n)):(t.tag=0,oe&&i&&Yu(t),Me(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ta(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=a5(r),e=ft(r,e),o){case 0:t=_c(null,t,r,e,n);break e;case 1:t=Jm(null,t,r,e,n);break e;case 11:t=qm(null,t,r,e,n);break e;case 14:t=Zm(null,t,r,ft(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),_c(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),Jm(e,t,r,o,n);case 3:e:{if(sg(t),e===null)throw Error(A(387));r=t.pendingProps,i=t.memoizedState,o=i.element,M0(e,t),Ja(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=qr(Error(A(423)),t),t=ef(e,t,r,n,o);break e}else if(r!==o){o=qr(Error(A(424)),t),t=ef(e,t,r,n,o);break e}else for(Ke=fn(t.stateNode.containerInfo.firstChild),Qe=t,oe=!0,ht=null,n=N0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kr(),r===o){t=_t(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return I0(t),e===null&&Vc(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Rc(r,o)?l=null:i!==null&&Rc(r,i)&&(t.flags|=32),lg(e,t),Me(e,t,l,n),t.child;case 6:return e===null&&Vc(t),null;case 13:return cg(e,t,n);case 4:return td(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qr(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),qm(e,t,r,o,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,J(qa,r._currentValue),r._currentValue=l,i!==null)if(xt(i.value,l)){if(i.children===o.children&&!Ue.current){t=_t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=It(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Oc(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(A(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Oc(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Me(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Hr(t,n),o=st(o),r=r(o),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,o=ft(r,t.pendingProps),o=ft(r.type,o),Zm(e,t,r,o,n);case 15:return ig(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ft(r,o),Ta(e,t),t.tag=1,He(r)?(e=!0,Ka(t)):e=!1,Hr(t,n),ng(t,r,o),Bc(t,r,o,n),Uc(null,t,r,!0,e,n);case 19:return ug(e,t,n);case 22:return ag(e,t,n)}throw Error(A(156,t.tag))};function Pg(e,t){return Jh(e,t)}function i5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new i5(e,t,n,r)}function gd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function a5(e){if(typeof e=="function")return gd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mu)return 11;if(e===Iu)return 14}return 2}function vn(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Aa(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")gd(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case kr:return Xn(n.children,o,i,t);case zu:l=8,o|=8;break;case uc:return e=at(12,n,t,o|2),e.elementType=uc,e.lanes=i,e;case dc:return e=at(13,n,t,o),e.elementType=dc,e.lanes=i,e;case mc:return e=at(19,n,t,o),e.elementType=mc,e.lanes=i,e;case Ih:return Rl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zh:l=10;break e;case Mh:l=9;break e;case Mu:l=11;break e;case Iu:l=14;break e;case en:l=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=at(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Xn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Rl(e,t,n,r){return e=at(22,e,r,t),e.elementType=Ih,e.lanes=n,e.stateNode={isHidden:!1},e}function ks(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function Cs(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function l5(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=is(0),this.expirationTimes=is(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=is(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function vd(e,t,n,r,o,i,l,s,c){return e=new l5(e,t,n,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=at(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(i),e}function s5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tg(e){if(!e)return Sn;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(He(n))return T0(e,n,t)}return t}function Lg(e,t,n,r,o,i,l,s,c){return e=vd(n,r,!0,e,o,i,l,s,c),e.context=Tg(null),n=e.current,r=Ie(),o=gn(n),i=It(r,o),i.callback=t??null,pn(n,i,o),e.current.lanes=o,gi(e,o,r),We(e,r),e}function Nl(e,t,n,r){var o=t.current,i=Ie(),l=gn(o);return n=Tg(n),t.context===null?t.context=n:t.pendingContext=n,t=It(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(o,t,l),e!==null&&(vt(e,o,l,i),ka(e,o,l)),l}function ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function df(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yd(e,t){df(e,t),(e=e.alternate)&&df(e,t)}function c5(){return null}var Fg=typeof reportError=="function"?reportError:function(e){console.error(e)};function xd(e){this._internalRoot=e}zl.prototype.render=xd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Nl(e,t,null,null)};zl.prototype.unmount=xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){Nl(null,e,null,null)}),t[Bt]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=a0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&s0(e)}};function Ed(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mf(){}function u5(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ll(l);i.call(u)}}var l=Lg(t,r,e,0,null,!1,!1,"",mf);return e._reactRootContainer=l,e[Bt]=l.current,ei(e.nodeType===8?e.parentNode:e),or(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=ll(c);s.call(u)}}var c=vd(e,0,!1,null,null,!1,!1,"",mf);return e._reactRootContainer=c,e[Bt]=c.current,ei(e.nodeType===8?e.parentNode:e),or(function(){Nl(t,c,n,r)}),c}function Il(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var c=ll(l);s.call(c)}}Nl(t,l,e,o)}else l=u5(n,t,e,o,r);return ll(l)}o0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lo(t.pendingLanes);n!==0&&($u(t,n|1),We(t,fe()),!(W&6)&&(Zr=fe()+500,Ln()))}break;case 13:or(function(){var r=jt(e,1);if(r!==null){var o=Ie();vt(r,e,1,o)}}),yd(e,1)}};Bu=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Ie();vt(t,e,134217728,n)}yd(e,134217728)}};i0=function(e){if(e.tag===13){var t=gn(e),n=jt(e,t);if(n!==null){var r=Ie();vt(n,e,t,r)}yd(e,t)}};a0=function(){return Q};l0=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};bc=function(e,t,n){switch(t){case"input":if(hc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Pl(r);if(!o)throw Error(A(90));Oh(r),hc(r,o)}}}break;case"textarea":Bh(e,n);break;case"select":t=n.value,t!=null&&Br(e,!!n.multiple,t,!1)}};Yh=fd;Kh=or;var d5={usingClientEntryPoint:!1,Events:[yi,Lr,Pl,Wh,Gh,fd]},Eo={findFiberByHostInstance:Un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m5={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qh(e),e===null?null:e.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||c5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yi.isDisabled&&Yi.supportsFiber)try{bl=Yi.inject(m5),kt=Yi}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d5;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(t))throw Error(A(200));return s5(e,t,null,n)};Ze.createRoot=function(e,t){if(!Ed(e))throw Error(A(299));var n=!1,r="",o=Fg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=vd(e,1,!1,null,null,n,!1,r,o),e[Bt]=t.current,ei(e.nodeType===8?e.parentNode:e),new xd(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=qh(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return or(e)};Ze.hydrate=function(e,t,n){if(!Ml(t))throw Error(A(200));return Il(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!Ed(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Fg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Lg(t,null,e,1,n??null,o,!1,i,l),e[Bt]=t.current,ei(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new zl(t)};Ze.render=function(e,t,n){if(!Ml(t))throw Error(A(200));return Il(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!Ml(e))throw Error(A(40));return e._reactRootContainer?(or(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};Ze.unstable_batchedUpdates=fd;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ml(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Il(e,t,n,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426";function Ag(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ag)}catch(e){console.error(e)}}Ag(),Ah.exports=Ze;var f5=Ah.exports,ff=f5;sc.createRoot=ff.createRoot,sc.hydrateRoot=ff.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ci(){return ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ci.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const pf="popstate";function p5(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:s}=r.location;return tu("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:sl(o)}return g5(t,n,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dg(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function h5(){return Math.random().toString(36).substr(2,8)}function hf(e,t){return{usr:e.state,key:e.key,idx:t}}function tu(e,t,n,r){return n===void 0&&(n=null),ci({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?co(t):t,{state:n,key:t&&t.key||r||h5()})}function sl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function co(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g5(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=sn.Pop,c=null,u=d();u==null&&(u=0,l.replaceState(ci({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function m(){s=sn.Pop;let S=d(),g=S==null?null:S-u;u=S,c&&c({action:s,location:w.location,delta:g})}function p(S,g){s=sn.Push;let v=tu(w.location,S,g);n&&n(v,S),u=d()+1;let y=hf(v,u),x=w.createHref(v);try{l.pushState(y,"",x)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(x)}i&&c&&c({action:s,location:w.location,delta:1})}function h(S,g){s=sn.Replace;let v=tu(w.location,S,g);n&&n(v,S),u=d();let y=hf(v,u),x=w.createHref(v);l.replaceState(y,"",x),i&&c&&c({action:s,location:w.location,delta:0})}function E(S){let g=o.location.origin!=="null"?o.location.origin:o.location.href,v=typeof S=="string"?S:sl(S);return v=v.replace(/ $/,"%20"),pe(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let w={get action(){return s},get location(){return e(o,l)},listen(S){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(pf,m),c=S,()=>{o.removeEventListener(pf,m),c=null}},createHref(S){return t(o,S)},createURL:E,encodeLocation(S){let g=E(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:h,go(S){return l.go(S)}};return w}var gf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gf||(gf={}));function v5(e,t,n){return n===void 0&&(n="/"),y5(e,t,n,!1)}function y5(e,t,n,r){let o=typeof t=="string"?co(t):t,i=wd(o.pathname||"/",n);if(i==null)return null;let l=Rg(e);x5(l);let s=null;for(let c=0;s==null&&c<l.length;++c){let u=A5(i);s=L5(l[c],u,r)}return s}function Rg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,s)=>{let c={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};c.relativePath.startsWith("/")&&(pe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=yn([r,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rg(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:P5(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let c of Ng(i.path))o(i,l,c)}),t}function Ng(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Ng(r.join("/")),s=[];return s.push(...l.map(c=>c===""?i:[i,c].join("/"))),o&&s.push(...l),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function x5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:T5(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const E5=/^:[\w-]+$/,w5=3,b5=2,S5=1,k5=10,C5=-2,vf=e=>e==="*";function P5(e,t){let n=e.split("/"),r=n.length;return n.some(vf)&&(r+=C5),t&&(r+=b5),n.filter(o=>!vf(o)).reduce((o,i)=>o+(E5.test(i)?w5:i===""?S5:k5),r)}function T5(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function L5(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,o={},i="/",l=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",m=yf({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!m&&u&&n&&!r[r.length-1].route.index&&(m=yf({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!m)return null;Object.assign(o,m.params),l.push({params:o,pathname:yn([i,m.pathname]),pathnameBase:z5(yn([i,m.pathnameBase])),route:p}),m.pathnameBase!=="/"&&(i=yn([i,m.pathnameBase]))}return l}function yf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=F5(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,d,m)=>{let{paramName:p,isOptional:h}=d;if(p==="*"){let w=s[m]||"";l=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const E=s[m];return h&&!E?u[p]=void 0:u[p]=(E||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function F5(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Dg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function A5(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Dg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function D5(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?co(e):e;return{pathname:n?n.startsWith("/")?n:R5(n,t):t,search:M5(r),hash:I5(o)}}function R5(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ps(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function N5(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bd(e,t){let n=N5(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Sd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=co(e):(o=ci({},e),pe(!o.pathname||!o.pathname.includes("?"),Ps("?","pathname","search",o)),pe(!o.pathname||!o.pathname.includes("#"),Ps("#","pathname","hash",o)),pe(!o.search||!o.search.includes("#"),Ps("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),m-=1;o.pathname=p.join("/")}s=m>=0?t[m]:"/"}let c=D5(o,s),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const yn=e=>e.join("/").replace(/\/\/+/g,"/"),z5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,I5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function V5(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zg=["post","put","patch","delete"];new Set(zg);const O5=["get",...zg];new Set(O5);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ui.apply(this,arguments)}const kd=b.createContext(null),$5=b.createContext(null),Fn=b.createContext(null),Vl=b.createContext(null),Wt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Mg=b.createContext(null);function B5(e,t){let{relative:n}=t===void 0?{}:t;uo()||pe(!1);let{basename:r,navigator:o}=b.useContext(Fn),{hash:i,pathname:l,search:s}=Vg(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:yn([r,l])),o.createHref({pathname:c,search:s,hash:i})}function uo(){return b.useContext(Vl)!=null}function lr(){return uo()||pe(!1),b.useContext(Vl).location}function Ig(e){b.useContext(Fn).static||b.useLayoutEffect(e)}function An(){let{isDataRoute:e}=b.useContext(Wt);return e?J5():j5()}function j5(){uo()||pe(!1);let e=b.useContext(kd),{basename:t,future:n,navigator:r}=b.useContext(Fn),{matches:o}=b.useContext(Wt),{pathname:i}=lr(),l=JSON.stringify(bd(o,n.v7_relativeSplatPath)),s=b.useRef(!1);return Ig(()=>{s.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let m=Sd(u,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:yn([t,m.pathname])),(d.replace?r.replace:r.push)(m,d.state,d)},[t,r,l,i,e])}function Ol(){let{matches:e}=b.useContext(Wt),t=e[e.length-1];return t?t.params:{}}function Vg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Fn),{matches:o}=b.useContext(Wt),{pathname:i}=lr(),l=JSON.stringify(bd(o,r.v7_relativeSplatPath));return b.useMemo(()=>Sd(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function _5(e,t){return U5(e,t)}function U5(e,t,n,r){uo()||pe(!1);let{navigator:o}=b.useContext(Fn),{matches:i}=b.useContext(Wt),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=lr(),d;if(t){var m;let S=typeof t=="string"?co(t):t;c==="/"||(m=S.pathname)!=null&&m.startsWith(c)||pe(!1),d=S}else d=u;let p=d.pathname||"/",h=p;if(c!=="/"){let S=c.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let E=v5(e,{pathname:h}),w=K5(E&&E.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:yn([c,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:yn([c,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r);return t&&w?b.createElement(Vl.Provider,{value:{location:ui({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:sn.Pop}},w):w}function H5(){let e=Z5(),t=V5(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:o},n):null,i)}const W5=b.createElement(H5,null);class G5 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Wt.Provider,{value:this.props.routeContext},b.createElement(Mg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y5(e){let{routeContext:t,match:n,children:r}=e,o=b.useContext(kd);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Wt.Provider,{value:t},r)}function K5(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let d=l.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);d>=0||pe(!1),l=l.slice(0,Math.min(l.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let m=l[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=d),m.route.id){let{loaderData:p,errors:h}=n,E=m.route.loader&&p[m.route.id]===void 0&&(!h||h[m.route.id]===void 0);if(m.route.lazy||E){c=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,m,p)=>{let h,E=!1,w=null,S=null;n&&(h=s&&m.route.id?s[m.route.id]:void 0,w=m.route.errorElement||W5,c&&(u<0&&p===0?(e4("route-fallback",!1),E=!0,S=null):u===p&&(E=!0,S=m.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,p+1)),v=()=>{let y;return h?y=w:E?y=S:m.route.Component?y=b.createElement(m.route.Component,null):m.route.element?y=m.route.element:y=d,b.createElement(Y5,{match:m,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:y})};return n&&(m.route.ErrorBoundary||m.route.errorElement||p===0)?b.createElement(G5,{location:n.location,revalidation:n.revalidation,component:w,error:h,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var Og=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Og||{}),cl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cl||{});function Q5(e){let t=b.useContext(kd);return t||pe(!1),t}function X5(e){let t=b.useContext($5);return t||pe(!1),t}function q5(e){let t=b.useContext(Wt);return t||pe(!1),t}function $g(e){let t=q5(),n=t.matches[t.matches.length-1];return n.route.id||pe(!1),n.route.id}function Z5(){var e;let t=b.useContext(Mg),n=X5(cl.UseRouteError),r=$g(cl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function J5(){let{router:e}=Q5(Og.UseNavigateStable),t=$g(cl.UseNavigateStable),n=b.useRef(!1);return Ig(()=>{n.current=!0}),b.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ui({fromRouteId:t},i)))},[e,t])}const xf={};function e4(e,t,n){!t&&!xf[e]&&(xf[e]=!0)}function t4(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function n4(e){let{to:t,replace:n,state:r,relative:o}=e;uo()||pe(!1);let{future:i,static:l}=b.useContext(Fn),{matches:s}=b.useContext(Wt),{pathname:c}=lr(),u=An(),d=Sd(t,bd(s,i.v7_relativeSplatPath),c,o==="path"),m=JSON.stringify(d);return b.useEffect(()=>u(JSON.parse(m),{replace:n,state:r,relative:o}),[u,m,o,n,r]),null}function q(e){pe(!1)}function r4(e){let{basename:t="/",children:n=null,location:r,navigationType:o=sn.Pop,navigator:i,static:l=!1,future:s}=e;uo()&&pe(!1);let c=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:c,navigator:i,static:l,future:ui({v7_relativeSplatPath:!1},s)}),[c,s,i,l]);typeof r=="string"&&(r=co(r));let{pathname:d="/",search:m="",hash:p="",state:h=null,key:E="default"}=r,w=b.useMemo(()=>{let S=wd(d,c);return S==null?null:{location:{pathname:S,search:m,hash:p,state:h,key:E},navigationType:o}},[c,d,m,p,h,E,o]);return w==null?null:b.createElement(Fn.Provider,{value:u},b.createElement(Vl.Provider,{children:n,value:w}))}function o4(e){let{children:t,location:n}=e;return _5(nu(t),n)}new Promise(()=>{});function nu(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,o)=>{if(!b.isValidElement(r))return;let i=[...t,o];if(r.type===b.Fragment){n.push.apply(n,nu(r.props.children,i));return}r.type!==q&&pe(!1),!r.props.index||!r.props.children||pe(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=nu(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ru(){return ru=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ru.apply(this,arguments)}function i4(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function a4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function l4(e,t){return e.button===0&&(!t||t==="_self")&&!a4(e)}const s4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],c4="6";try{window.__reactRouterVersion=c4}catch{}const u4="startTransition",Ef=sy[u4];function d4(e){let{basename:t,children:n,future:r,window:o}=e,i=b.useRef();i.current==null&&(i.current=p5({window:o,v5Compat:!0}));let l=i.current,[s,c]=b.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},d=b.useCallback(m=>{u&&Ef?Ef(()=>c(m)):c(m)},[c,u]);return b.useLayoutEffect(()=>l.listen(d),[l,d]),b.useEffect(()=>t4(r),[r]),b.createElement(r4,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const m4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,X=b.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:c,to:u,preventScrollReset:d,viewTransition:m}=t,p=i4(t,s4),{basename:h}=b.useContext(Fn),E,w=!1;if(typeof u=="string"&&f4.test(u)&&(E=u,m4))try{let y=new URL(window.location.href),x=u.startsWith("//")?new URL(y.protocol+u):new URL(u),k=wd(x.pathname,h);x.origin===y.origin&&k!=null?u=k+x.search+x.hash:w=!0}catch{}let S=B5(u,{relative:o}),g=p4(u,{replace:l,state:s,target:c,preventScrollReset:d,relative:o,viewTransition:m});function v(y){r&&r(y),y.defaultPrevented||g(y)}return b.createElement("a",ru({},p,{href:E||S,onClick:w||i?r:v,ref:n,target:c}))});var wf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wf||(wf={}));var bf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bf||(bf={}));function p4(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:s}=t===void 0?{}:t,c=An(),u=lr(),d=Vg(e,{relative:l});return b.useCallback(m=>{if(l4(m,n)){m.preventDefault();let p=r!==void 0?r:sl(u)===sl(d);c(e,{replace:p,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[u,c,d,r,o,n,e,i,l,s])}const Cd=b.createContext(),h4=({children:e})=>{const[t,n]=b.useState(!1),[r,o]=b.useState(null);b.useEffect(()=>{const s=localStorage.getItem("user");s&&(o(JSON.parse(s)),n(!0))},[]);const i=(s,c)=>{if(s==="admin"&&c==="password"){const u={id:1,username:"admin",name:"Admin User",role:"admin"};return o(u),n(!0),localStorage.setItem("user",JSON.stringify(u)),!0}return!1},l=()=>{o(null),n(!1),localStorage.removeItem("user")};return a.createElement(Cd.Provider,{value:{isAuthenticated:t,user:r,login:i,logout:l}},e)},Bg=()=>b.useContext(Cd),Ei=b.createContext(),Ts=[{id:"1",title:"Premium Email Marketing Software",description:"Boost your email campaigns with our advanced email marketing solution. Features include automation, A/B testing, analytics, and high deliverability rates.",image:"https://frantzenterprise.com/wp-content/uploads/2024/01/he8ydqhtrna0k0dcgaie.jpg",link:"https://example.com/email-marketing",category:"Marketing",featured:!0,price:29.99},{id:"2",title:"AI-Powered Content Creator",description:"Create engaging content in seconds with our AI content generator. Perfect for blogs, social media, and marketing materials.",image:"https://frantzenterprise.com/wp-content/uploads/2024/01/another-image.jpg",link:"https://example.com/ai-content",category:"Content",featured:!0,price:49.99},{id:"3",title:"All-in-One SEO Toolkit",description:"Dominate search rankings with our comprehensive SEO suite. Includes keyword research, competitor analysis, backlink monitoring, and more.",image:"https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/seo-toolkit",category:"SEO",featured:!1,price:39.99},{id:"4",title:"Social Media Management Platform",description:"Manage all your social media accounts from one dashboard. Schedule posts, analyze performance, and engage with your audience efficiently.",image:"https://images.pexels.com/photos/3850250/pexels-photo-3850250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/social-media",category:"Social Media",featured:!0,price:24.99},{id:"5",title:"E-commerce Conversion Optimizer",description:"Increase your online store conversion rates with our AI-driven optimization tool. Personalized recommendations, cart abandonment recovery, and more.",image:"https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/ecommerce-optimizer",category:"E-commerce",featured:!1,price:59.99},{id:"6",title:"Professional Webinar Platform",description:"Host engaging webinars with our feature-rich platform. Interactive tools, recording capabilities, and detailed analytics included.",image:"https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/webinar-platform",category:"Webinars",featured:!1,price:34.99}],g4=({children:e})=>{const[t,n]=b.useState(()=>{const c=localStorage.getItem("products");if(c)try{const u=JSON.parse(c);return console.log("Loaded products from localStorage:",u),u}catch(u){return console.error("Error parsing saved products:",u),Ts}return console.log("Using initial products:",Ts),Ts});b.useEffect(()=>{console.log("Saving products to localStorage:",t),localStorage.setItem("products",JSON.stringify(t))},[t]);const r=c=>{const u={...c,id:Date.now().toString()};console.log("Adding new product:",u),n(d=>[...d,u])},o=(c,u)=>{console.log("Updating product:",c,u),n(d=>d.map(m=>m.id===c?{...m,...u}:m))},i=c=>{console.log("Deleting product:",c),n(u=>u.filter(d=>d.id!==c))},l=c=>{const u=t.find(d=>d.id===c);return console.log("Getting product by id:",c,u),u},s=()=>{console.log("=== PRODUCT DEBUG INFO ==="),console.log("Current products in context:",t),console.log("Products count:",t.length),console.log("LocalStorage products:",localStorage.getItem("products")),t.forEach((c,u)=>{console.log(`Product ${u+1}:`,{id:c.id,title:c.title,image:c.image,imageUrl:c.imageUrl,hasImage:!!(c.image||c.imageUrl)})}),console.log("=== END DEBUG INFO ===")};return a.createElement(Ei.Provider,{value:{products:t,addProduct:r,updateProduct:o,deleteProduct:i,getProduct:l,debugProducts:s}},e)},wi=()=>{const e=b.useContext(Ei);if(e===void 0)throw new Error("useProduct must be used within a ProductProvider");return e},bi=b.createContext(),v4=[{id:"1",title:"Premium CRM Software",description:"Streamline your customer relationships with our advanced CRM solution. Features include contact management, sales pipeline tracking, and automated follow-ups.",image:"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/crm-software",category:"Business",featured:!0,price:"$29/month",availability:"Open"},{id:"2",title:"Cloud Storage Solution",description:"Secure and scalable cloud storage for businesses of all sizes. Includes file versioning, team collaboration tools, and enterprise-grade security.",image:"https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/cloud-storage",category:"Storage",featured:!0,price:"$15/month",availability:"Limited"},{id:"3",title:"Project Management Platform",description:"Keep your team organized with our comprehensive project management tool. Track tasks, deadlines, resources, and generate detailed reports.",image:"https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/project-management",category:"Productivity",featured:!1,price:"$24/month",availability:"Open"},{id:"4",title:"Marketing Automation Suite",description:"Automate your marketing campaigns with our all-in-one platform. Includes email marketing, social media scheduling, and analytics.",image:"https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/marketing-automation",category:"Marketing",featured:!0,price:"$39/month",availability:"Open"},{id:"5",title:"Advanced Analytics Platform",description:"Turn your data into actionable insights with our powerful analytics solution. Features include custom dashboards, real-time reporting, and predictive analysis.",image:"https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/analytics",category:"Analytics",featured:!1,price:"$49/month",availability:"Limited"},{id:"6",title:"Team Collaboration Suite",description:"Enhance team productivity with our collaboration platform. Includes video conferencing, document sharing, and integrated chat.",image:"https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",link:"https://example.com/collaboration",category:"Collaboration",featured:!1,price:"$19/month",availability:"Filled"}],y4=({children:e})=>{const[t,n]=b.useState(()=>{const s=localStorage.getItem("subscriptions");return s?JSON.parse(s):v4});b.useEffect(()=>{localStorage.setItem("subscriptions",JSON.stringify(t))},[t]);const r=s=>{const c={...s,id:Date.now().toString()};n([...t,c])},o=(s,c)=>{n(t.map(u=>u.id===s?{...u,...c}:u))},i=s=>{n(t.filter(c=>c.id!==s))},l=s=>t.find(c=>c.id===s);return a.createElement(bi.Provider,{value:{subscriptions:t,addSubscription:r,updateSubscription:o,deleteSubscription:i,getSubscription:l}},e)},Pd=()=>{const e=b.useContext(bi);if(e===void 0)throw new Error("useSubscription must be used within a SubscriptionProvider");return e},Td=b.createContext(),x4=[{id:"1",title:"Why This Email Marketing Tool Changed My Business",productName:"Premium Email Marketing Software",rating:4.8,videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",content:`
      <p>After trying numerous email marketing platforms over the years, I've finally found one that truly delivers on its promises. This tool has completely transformed how I approach email campaigns.</p>
      
      <h3>Automation That Actually Works</h3>
      <p>The automation features are intuitive yet powerful. I was able to set up complex drip campaigns in minutes rather than hours. The visual workflow builder is a game-changer - you can literally see your customer journey mapped out in front of you.</p>
      
      <h3>Deliverability That Impresses</h3>
      <p>What good is an email platform if your messages don't reach the inbox? With deliverability rates consistently above 98%, this tool ensures your carefully crafted emails actually get seen.</p>
      
      <h3>Analytics Worth Looking At</h3>
      <p>The reporting dashboard provides actionable insights rather than just numbers. I can quickly identify which campaigns are performing well and why, allowing me to continuously improve my strategy.</p>
      
      <h3>Final Verdict</h3>
      <p>If you're serious about email marketing, this platform is worth every penny. The ROI I've seen since switching has been remarkable - open rates up 23% and conversions increased by 17%.</p>
    `,author:"Robert Frantz",date:"2023-06-15",category:"Marketing",tags:["email marketing","automation","ROI"],featured:!0},{id:"2",title:"This AI Content Creator Saves Me 10+ Hours Every Week",productName:"AI-Powered Content Creator",rating:4.5,videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",content:`
      <p>Content creation has always been a time-consuming process for my business. Between blog posts, social media updates, and email newsletters, I was spending 15+ hours weekly just writing. This AI tool has given me back that time while maintaining quality.</p>
      
      <h3>Surprisingly Human Output</h3>
      <p>Unlike other AI writers I've tried, this one produces content that actually sounds like it was written by a person. The tone is consistent, and it rarely generates the awkward phrasing that plagues other AI tools.</p>
      
      <h3>Versatility Across Formats</h3>
      <p>Whether I need a long-form blog post, snappy social media captions, or compelling email subject lines, this tool handles it all with impressive results. The specialized templates for different content types are particularly helpful.</p>
      
      <h3>Learning Your Brand Voice</h3>
      <p>The more you use it, the better it gets at mimicking your specific style and tone. After a few weeks, I could barely distinguish between content I wrote myself and what the AI produced.</p>
      
      <h3>Room for Improvement</h3>
      <p>It's not perfect - technical content still requires significant editing, and it occasionally gets industry-specific terminology wrong. But for 80% of my content needs, it's a massive time-saver.</p>
      
      <h3>Final Verdict</h3>
      <p>For entrepreneurs and marketers struggling to keep up with content demands, this tool is invaluable. The time saved alone justifies the subscription cost many times over.</p>
    `,author:"Robert Frantz",date:"2023-07-22",category:"Content",tags:["AI","content creation","productivity"],featured:!0},{id:"3",title:"Honest Review: All-in-One SEO Toolkit After 6 Months",productName:"All-in-One SEO Toolkit",rating:4.2,videoUrl:"https://www.youtube.com/embed/dQw4w9WgXcQ",content:`
      <p>I've been using this SEO toolkit for the past 6 months, and it's time to share my honest assessment. Is it worth the investment? Here's my experience.</p>
      
      <h3>Keyword Research Revolution</h3>
      <p>The keyword research functionality is outstanding. I've discovered numerous low-competition, high-value keywords that I would have missed otherwise. The difficulty scoring has proven remarkably accurate.</p>
      
      <h3>Competitor Analysis</h3>
      <p>Being able to reverse-engineer competitors' SEO strategies has been invaluable. I can see exactly what's working in my niche and adapt those insights to my own content strategy.</p>
      
      <h3>Backlink Monitoring</h3>
      <p>The backlink analysis tools are comprehensive, though sometimes slower to update than I'd like. Still, the toxic link identification feature has helped me maintain a clean backlink profile.</p>
      
      <h3>Technical SEO Audits</h3>
      <p>The site audit functionality is thorough and provides actionable recommendations. I've fixed numerous technical issues I wasn't even aware of, resulting in improved crawlability and indexing.</p>
      
      <h3>Final Verdict</h3>
      <p>While the monthly subscription isn't cheap, the ROI has been clear. My organic traffic has increased by 43% since implementing the insights from this tool, making it a worthwhile investment for serious website owners.</p>
    `,author:"Robert Frantz",date:"2023-08-10",category:"SEO",tags:["SEO","keyword research","backlinks"],featured:!1}],E4=({children:e})=>{const[t,n]=b.useState(()=>{const s=localStorage.getItem("reviews");return s?JSON.parse(s):x4});b.useEffect(()=>{localStorage.setItem("reviews",JSON.stringify(t))},[t]);const r=s=>{const c={...s,id:Date.now().toString(),author:"Robert Frantz",date:new Date().toISOString().split("T")[0]};n([...t,c])},o=(s,c)=>{n(t.map(u=>u.id===s?{...u,...c}:u))},i=s=>{n(t.filter(c=>c.id!==s))},l=s=>t.find(c=>c.id===s);return a.createElement(Td.Provider,{value:{reviews:t,addReview:r,updateReview:o,deleteReview:i,getReview:l}},e)},Ld=()=>{const e=b.useContext(Td);if(e===void 0)throw new Error("useReview must be used within a ReviewProvider");return e},jg=b.createContext(),w4=[{id:"1",name:"John Smith",email:"john.smith@example.com",phone:"(555) 123-4567",products:["1","4"],subscriptions:["2"],paymentCycle:"monthly",nextPaymentDate:"2023-06-15",status:"active",notes:"Prefers email communication"},{id:"2",name:"Sarah Johnson",email:"sarah.j@example.com",phone:"(555) 987-6543",products:["3"],subscriptions:["1","4"],paymentCycle:"yearly",nextPaymentDate:"2023-09-20",status:"active",notes:"Interested in premium offerings"},{id:"3",name:"Michael Chen",email:"mchen@example.com",phone:"(555) 456-7890",products:["2","5"],subscriptions:[],paymentCycle:"monthly",nextPaymentDate:"2023-06-05",status:"pending",notes:"New client, follow up about subscription options"},{id:"4",name:"Emily Rodriguez",email:"emily.r@example.com",phone:"(555) 234-5678",products:[],subscriptions:["3"],paymentCycle:"monthly",nextPaymentDate:"2023-06-10",status:"active",notes:"Considering upgrading to yearly plan"},{id:"5",name:"David Wilson",email:"dwilson@example.com",phone:"(555) 876-5432",products:["6"],subscriptions:["5"],paymentCycle:"yearly",nextPaymentDate:"2024-01-15",status:"active",notes:"Corporate account"}],b4=({children:e})=>{const[t,n]=b.useState(()=>{const u=localStorage.getItem("clients");return u?JSON.parse(u):w4});b.useEffect(()=>{localStorage.setItem("clients",JSON.stringify(t))},[t]);const r=u=>{const d={...u,id:Date.now().toString(),products:u.products||[],subscriptions:u.subscriptions||[],status:u.status||"active"};n([...t,d])},o=(u,d)=>{n(t.map(m=>m.id===u?{...m,...d}:m))},i=u=>{n(t.filter(d=>d.id!==u))},l=u=>t.find(d=>d.id===u),s=u=>{const d=new Date;return t.filter(m=>{if(!m.nextPaymentDate)return!1;const h=new Date(m.nextPaymentDate).getTime()-d.getTime(),E=Math.ceil(h/(1e3*3600*24));return E<=u&&E>=0&&m.status==="active"})},c=(u,d)=>{const m=l(u);if(!m)return{success:!1,message:"Client not found"};let p="",h="";switch(d){case"payment-reminder":p="Payment Reminder",h="Your payment for subscriptions is due in 10 days. Please use the following link to complete your payment.";break;case"payment-warning":p="Payment Due Soon",h="Your payment is due in 2 days. Please use the following link to complete your payment and avoid service interruption.";break;case"payment-thank-you":p="Thank You for Your Payment",h="Thank you for your recent payment. Your subscription has been extended.";break;case"subscription-ended":p="Sorry to See You Go",h="We're sorry to see you go. Your subscription has ended. We hope to serve you again in the future.";break;default:p="Notification",h="This is a notification from Frantz Enterprise."}return console.log(`Notification sent to ${m.email}: ${p} - ${h}`),{success:!0,message:`Notification sent to ${m.name} (${m.email})`}};return a.createElement(jg.Provider,{value:{clients:t,addClient:r,updateClient:o,deleteClient:i,getClient:l,getClientsWithUpcomingPayments:s,sendNotification:c}},e)},Fd=()=>{const e=b.useContext(jg);if(e===void 0)throw new Error("useClient must be used within a ClientProvider");return e},_g=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),$l=b.createContext({}),Ad=b.createContext(null),Bl=typeof document<"u",S4=Bl?b.useLayoutEffect:b.useEffect,Ug=b.createContext({strict:!1}),Dd=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),k4="framerAppearId",Hg="data-"+Dd(k4);function C4(e,t,n,r){const{visualElement:o}=b.useContext($l),i=b.useContext(Ug),l=b.useContext(Ad),s=b.useContext(_g).reducedMotion,c=b.useRef();r=r||i.renderer,!c.current&&r&&(c.current=r(e,{visualState:t,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:s}));const u=c.current;b.useInsertionEffect(()=>{u&&u.update(n,l)});const d=b.useRef(!!(n[Hg]&&!window.HandoffComplete));return S4(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),b.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function Mr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function P4(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Mr(n)&&(n.current=r))},[t])}function di(e){return typeof e=="string"||Array.isArray(e)}function jl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Rd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Nd=["initial",...Rd];function _l(e){return jl(e.animate)||Nd.some(t=>di(e[t]))}function Wg(e){return!!(_l(e)||e.variants)}function T4(e,t){if(_l(e)){const{initial:n,animate:r}=e;return{initial:n===!1||di(n)?n:void 0,animate:di(r)?r:void 0}}return e.inherit!==!1?t:{}}function L4(e){const{initial:t,animate:n}=T4(e,b.useContext($l));return b.useMemo(()=>({initial:t,animate:n}),[Sf(t),Sf(n)])}function Sf(e){return Array.isArray(e)?e.join(" "):e}const kf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},mi={};for(const e in kf)mi[e]={isEnabled:t=>kf[e].some(n=>!!t[n])};function F4(e){for(const t in e)mi[t]={...mi[t],...e[t]}}const Gg=b.createContext({}),Yg=b.createContext({}),A4=Symbol.for("motionComponentSymbol");function D4({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){e&&F4(e);function i(s,c){let u;const d={...b.useContext(_g),...s,layoutId:R4(s)},{isStatic:m}=d,p=L4(s),h=r(s,m);if(!m&&Bl){p.visualElement=C4(o,h,d,t);const E=b.useContext(Yg),w=b.useContext(Ug).strict;p.visualElement&&(u=p.visualElement.loadFeatures(d,w,e,E))}return b.createElement($l.Provider,{value:p},u&&p.visualElement?b.createElement(u,{visualElement:p.visualElement,...d}):null,n(o,s,P4(h,p.visualElement,c),h,m,p.visualElement))}const l=b.forwardRef(i);return l[A4]=o,l}function R4({layoutId:e}){const t=b.useContext(Gg).id;return t&&e!==void 0?t+"-"+e:e}function N4(e){function t(r,o={}){return D4(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const z4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function zd(e){return typeof e!="string"||e.includes("-")?!1:!!(z4.indexOf(e)>-1||/[A-Z]/.test(e))}const ul={};function M4(e){Object.assign(ul,e)}const Si=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],sr=new Set(Si);function Kg(e,{layout:t,layoutId:n}){return sr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ul[e]||e==="opacity")}const Ge=e=>!!(e&&e.getVelocity),I4={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},V4=Si.length;function O4(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,o){let i="";for(let l=0;l<V4;l++){const s=Si[l];if(e[s]!==void 0){const c=I4[s]||s;i+=`${c}(${e[s]}) `}}return t&&!e.z&&(i+="translateZ(0)"),i=i.trim(),o?i=o(e,r?"":i):n&&r&&(i="none"),i}const Qg=e=>t=>typeof t=="string"&&t.startsWith(e),Xg=Qg("--"),ou=Qg("var(--"),$4=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,B4=(e,t)=>t&&typeof e=="number"?t.transform(e):e,kn=(e,t,n)=>Math.min(Math.max(n,e),t),cr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},jo={...cr,transform:e=>kn(0,1,e)},Ki={...cr,default:1},_o=e=>Math.round(e*1e5)/1e5,Ul=/(-)?([\d]*\.?[\d])+/g,qg=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,j4=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ki(e){return typeof e=="string"}const Ci=e=>({test:t=>ki(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Zt=Ci("deg"),Pt=Ci("%"),O=Ci("px"),_4=Ci("vh"),U4=Ci("vw"),Cf={...Pt,parse:e=>Pt.parse(e)/100,transform:e=>Pt.transform(e*100)},Pf={...cr,transform:Math.round},Zg={borderWidth:O,borderTopWidth:O,borderRightWidth:O,borderBottomWidth:O,borderLeftWidth:O,borderRadius:O,radius:O,borderTopLeftRadius:O,borderTopRightRadius:O,borderBottomRightRadius:O,borderBottomLeftRadius:O,width:O,maxWidth:O,height:O,maxHeight:O,size:O,top:O,right:O,bottom:O,left:O,padding:O,paddingTop:O,paddingRight:O,paddingBottom:O,paddingLeft:O,margin:O,marginTop:O,marginRight:O,marginBottom:O,marginLeft:O,rotate:Zt,rotateX:Zt,rotateY:Zt,rotateZ:Zt,scale:Ki,scaleX:Ki,scaleY:Ki,scaleZ:Ki,skew:Zt,skewX:Zt,skewY:Zt,distance:O,translateX:O,translateY:O,translateZ:O,x:O,y:O,z:O,perspective:O,transformPerspective:O,opacity:jo,originX:Cf,originY:Cf,originZ:O,zIndex:Pf,fillOpacity:jo,strokeOpacity:jo,numOctaves:Pf};function Md(e,t,n,r){const{style:o,vars:i,transform:l,transformOrigin:s}=e;let c=!1,u=!1,d=!0;for(const m in t){const p=t[m];if(Xg(m)){i[m]=p;continue}const h=Zg[m],E=B4(p,h);if(sr.has(m)){if(c=!0,l[m]=E,!d)continue;p!==(h.default||0)&&(d=!1)}else m.startsWith("origin")?(u=!0,s[m]=E):o[m]=E}if(t.transform||(c||r?o.transform=O4(e.transform,n,d,r):o.transform&&(o.transform="none")),u){const{originX:m="50%",originY:p="50%",originZ:h=0}=s;o.transformOrigin=`${m} ${p} ${h}`}}const Id=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Jg(e,t,n){for(const r in t)!Ge(t[r])&&!Kg(r,n)&&(e[r]=t[r])}function H4({transformTemplate:e},t,n){return b.useMemo(()=>{const r=Id();return Md(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function W4(e,t,n){const r=e.style||{},o={};return Jg(o,r,e),Object.assign(o,H4(e,t,n)),e.transformValues?e.transformValues(o):o}function G4(e,t,n){const r={},o=W4(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const Y4=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function dl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Y4.has(e)}let e1=e=>!dl(e);function K4(e){e&&(e1=t=>t.startsWith("on")?!dl(t):e(t))}try{K4(require("@emotion/is-prop-valid").default)}catch{}function Q4(e,t,n){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(e1(o)||n===!0&&dl(o)||!t&&!dl(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function Tf(e,t,n){return typeof e=="string"?e:O.transform(t+n*e)}function X4(e,t,n){const r=Tf(t,e.x,e.width),o=Tf(n,e.y,e.height);return`${r} ${o}`}const q4={offset:"stroke-dashoffset",array:"stroke-dasharray"},Z4={offset:"strokeDashoffset",array:"strokeDasharray"};function J4(e,t,n=1,r=0,o=!0){e.pathLength=1;const i=o?q4:Z4;e[i.offset]=O.transform(-r);const l=O.transform(t),s=O.transform(n);e[i.array]=`${l} ${s}`}function Vd(e,{attrX:t,attrY:n,attrScale:r,originX:o,originY:i,pathLength:l,pathSpacing:s=1,pathOffset:c=0,...u},d,m,p){if(Md(e,u,d,p),m){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:E,dimensions:w}=e;h.transform&&(w&&(E.transform=h.transform),delete h.transform),w&&(o!==void 0||i!==void 0||E.transform)&&(E.transformOrigin=X4(w,o!==void 0?o:.5,i!==void 0?i:.5)),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),l!==void 0&&J4(h,l,s,c,!1)}const t1=()=>({...Id(),attrs:{}}),Od=e=>typeof e=="string"&&e.toLowerCase()==="svg";function ex(e,t,n,r){const o=b.useMemo(()=>{const i=t1();return Vd(i,t,{enableHardwareAcceleration:!1},Od(r),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};Jg(i,e.style,e),o.style={...i,...o.style}}return o}function tx(e=!1){return(n,r,o,{latestValues:i},l)=>{const c=(zd(n)?ex:G4)(r,i,l,n),d={...Q4(r,typeof n=="string",e),...c,ref:o},{children:m}=r,p=b.useMemo(()=>Ge(m)?m.get():m,[m]);return b.createElement(n,{...d,children:p})}}function n1(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const i in n)e.style.setProperty(i,n[i])}const r1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function o1(e,t,n,r){n1(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(r1.has(o)?o:Dd(o),t.attrs[o])}function $d(e,t){const{style:n}=e,r={};for(const o in n)(Ge(n[o])||t.style&&Ge(t.style[o])||Kg(o,e))&&(r[o]=n[o]);return r}function i1(e,t){const n=$d(e,t);for(const r in e)if(Ge(e[r])||Ge(t[r])){const o=Si.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[o]=e[r]}return n}function Bd(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}function nx(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const ml=e=>Array.isArray(e),rx=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),ox=e=>ml(e)?e[e.length-1]||0:e;function Da(e){const t=Ge(e)?e.get():e;return rx(t)?t.toValue():t}function ix({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,i){const l={latestValues:ax(r,o,i,e),renderState:t()};return n&&(l.mount=s=>n(r,s,l)),l}const a1=e=>(t,n)=>{const r=b.useContext($l),o=b.useContext(Ad),i=()=>ix(e,t,r,o);return n?i():nx(i)};function ax(e,t,n,r){const o={},i=r(e,{});for(const p in i)o[p]=Da(i[p]);let{initial:l,animate:s}=e;const c=_l(e),u=Wg(e);t&&u&&!c&&e.inherit!==!1&&(l===void 0&&(l=t.initial),s===void 0&&(s=t.animate));let d=n?n.initial===!1:!1;d=d||l===!1;const m=d?s:l;return m&&typeof m!="boolean"&&!jl(m)&&(Array.isArray(m)?m:[m]).forEach(h=>{const E=Bd(e,h);if(!E)return;const{transitionEnd:w,transition:S,...g}=E;for(const v in g){let y=g[v];if(Array.isArray(y)){const x=d?y.length-1:0;y=y[x]}y!==null&&(o[v]=y)}for(const v in w)o[v]=w[v]}),o}const me=e=>e;class Lf{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function lx(e){let t=new Lf,n=new Lf,r=0,o=!1,i=!1;const l=new WeakSet,s={schedule:(c,u=!1,d=!1)=>{const m=d&&o,p=m?t:n;return u&&l.add(c),p.add(c)&&m&&o&&(r=t.order.length),c},cancel:c=>{n.remove(c),l.delete(c)},process:c=>{if(o){i=!0;return}if(o=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const d=t.order[u];d(c),l.has(d)&&(s.schedule(d),e())}o=!1,i&&(i=!1,s.process(c))}};return s}const Qi=["prepare","read","update","preRender","render","postRender"],sx=40;function cx(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=Qi.reduce((m,p)=>(m[p]=lx(()=>n=!0),m),{}),l=m=>i[m].process(o),s=()=>{const m=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(m-o.timestamp,sx),1),o.timestamp=m,o.isProcessing=!0,Qi.forEach(l),o.isProcessing=!1,n&&t&&(r=!1,e(s))},c=()=>{n=!0,r=!0,o.isProcessing||e(s)};return{schedule:Qi.reduce((m,p)=>{const h=i[p];return m[p]=(E,w=!1,S=!1)=>(n||c(),h.schedule(E,w,S)),m},{}),cancel:m=>Qi.forEach(p=>i[p].cancel(m)),state:o,steps:i}}const{schedule:re,cancel:Ut,state:De,steps:Ls}=cx(typeof requestAnimationFrame<"u"?requestAnimationFrame:me,!0),ux={useVisualState:a1({scrapeMotionValuesFromProps:i1,createRenderState:t1,onMount:(e,t,{renderState:n,latestValues:r})=>{re.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),re.render(()=>{Vd(n,r,{enableHardwareAcceleration:!1},Od(t.tagName),e.transformTemplate),o1(t,n)})}})},dx={useVisualState:a1({scrapeMotionValuesFromProps:$d,createRenderState:Id})};function mx(e,{forwardMotionProps:t=!1},n,r){return{...zd(e)?ux:dx,preloadedFeatures:n,useRender:tx(t),createVisualElement:r,Component:e}}function Mt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const l1=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Hl(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const fx=e=>t=>l1(t)&&e(t,Hl(t));function Vt(e,t,n,r){return Mt(e,t,fx(n),r)}const px=(e,t)=>n=>t(e(n)),xn=(...e)=>e.reduce(px);function s1(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Ff=s1("dragHorizontal"),Af=s1("dragVertical");function c1(e){let t=!1;if(e==="y")t=Af();else if(e==="x")t=Ff();else{const n=Ff(),r=Af();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function u1(){const e=c1(!0);return e?(e(),!1):!0}class Dn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Df(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),o=(i,l)=>{if(i.pointerType==="touch"||u1())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t),s[r]&&re.update(()=>s[r](i,l))};return Vt(e.current,n,o,{passive:!e.getProps()[r]})}class hx extends Dn{mount(){this.unmount=xn(Df(this.node,!0),Df(this.node,!1))}unmount(){}}class gx extends Dn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xn(Mt(this.node.current,"focus",()=>this.onFocus()),Mt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const d1=(e,t)=>t?e===t?!0:d1(e,t.parentElement):!1;function Fs(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Hl(n))}class vx extends Dn{constructor(){super(...arguments),this.removeStartListeners=me,this.removeEndListeners=me,this.removeAccessibleListeners=me,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),i=Vt(window,"pointerup",(s,c)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:m}=this.node.getProps();re.update(()=>{!m&&!d1(this.node.current,s.target)?d&&d(s,c):u&&u(s,c)})},{passive:!(r.onTap||r.onPointerUp)}),l=Vt(window,"pointercancel",(s,c)=>this.cancelPress(s,c),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=xn(i,l),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=i=>{if(i.key!=="Enter"||this.isPressing)return;const l=s=>{s.key!=="Enter"||!this.checkPressEnd()||Fs("up",(c,u)=>{const{onTap:d}=this.node.getProps();d&&re.update(()=>d(c,u))})};this.removeEndListeners(),this.removeEndListeners=Mt(this.node.current,"keyup",l),Fs("down",(s,c)=>{this.startPress(s,c)})},n=Mt(this.node.current,"keydown",t),r=()=>{this.isPressing&&Fs("cancel",(i,l)=>this.cancelPress(i,l))},o=Mt(this.node.current,"blur",r);this.removeAccessibleListeners=xn(n,o)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&re.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!u1()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&re.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Vt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Mt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=xn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const iu=new WeakMap,As=new WeakMap,yx=e=>{const t=iu.get(e.target);t&&t(e)},xx=e=>{e.forEach(yx)};function Ex({root:e,...t}){const n=e||document;As.has(n)||As.set(n,{});const r=As.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(xx,{root:e,...t})),r[o]}function wx(e,t,n){const r=Ex(t);return iu.set(e,n),r.observe(e),()=>{iu.delete(e),r.unobserve(e)}}const bx={some:0,all:1};class Sx extends Dn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:i}=t,l={root:n?n.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:bx[o]},s=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,i&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:m}=this.node.getProps(),p=u?d:m;p&&p(c)};return wx(this.node.current,l,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(kx(t,n))&&this.startObserver()}unmount(){}}function kx({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Cx={inView:{Feature:Sx},tap:{Feature:vx},focus:{Feature:gx},hover:{Feature:hx}};function m1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Px(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function Tx(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Wl(e,t,n){const r=e.getProps();return Bd(r,t,n!==void 0?n:r.custom,Px(e),Tx(e))}let Lx=me,jd=me;const En=e=>e*1e3,Ot=e=>e/1e3,Fx={current:!1},f1=e=>Array.isArray(e)&&typeof e[0]=="number";function p1(e){return!!(!e||typeof e=="string"&&h1[e]||f1(e)||Array.isArray(e)&&e.every(p1))}const Ao=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,h1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ao([0,.65,.55,1]),circOut:Ao([.55,0,1,.45]),backIn:Ao([.31,.01,.66,-.59]),backOut:Ao([.33,1.53,.69,.99])};function g1(e){if(e)return f1(e)?Ao(e):Array.isArray(e)?e.map(g1):h1[e]}function Ax(e,t,n,{delay:r=0,duration:o,repeat:i=0,repeatType:l="loop",ease:s,times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=g1(s);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:o,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:i+1,direction:l==="reverse"?"alternate":"normal"})}function Dx(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const v1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Rx=1e-7,Nx=12;function zx(e,t,n,r,o){let i,l,s=0;do l=t+(n-t)/2,i=v1(l,r,o)-e,i>0?n=l:t=l;while(Math.abs(i)>Rx&&++s<Nx);return l}function Pi(e,t,n,r){if(e===t&&n===r)return me;const o=i=>zx(i,0,1,e,n);return i=>i===0||i===1?i:v1(o(i),t,r)}const Mx=Pi(.42,0,1,1),Ix=Pi(0,0,.58,1),y1=Pi(.42,0,.58,1),Vx=e=>Array.isArray(e)&&typeof e[0]!="number",x1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,E1=e=>t=>1-e(1-t),_d=e=>1-Math.sin(Math.acos(e)),w1=E1(_d),Ox=x1(_d),b1=Pi(.33,1.53,.69,.99),Ud=E1(b1),$x=x1(Ud),Bx=e=>(e*=2)<1?.5*Ud(e):.5*(2-Math.pow(2,-10*(e-1))),jx={linear:me,easeIn:Mx,easeInOut:y1,easeOut:Ix,circIn:_d,circInOut:Ox,circOut:w1,backIn:Ud,backInOut:$x,backOut:b1,anticipate:Bx},Rf=e=>{if(Array.isArray(e)){jd(e.length===4);const[t,n,r,o]=e;return Pi(t,n,r,o)}else if(typeof e=="string")return jx[e];return e},Hd=(e,t)=>n=>!!(ki(n)&&j4.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),S1=(e,t,n)=>r=>{if(!ki(r))return r;const[o,i,l,s]=r.match(Ul);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(l),alpha:s!==void 0?parseFloat(s):1}},_x=e=>kn(0,255,e),Ds={...cr,transform:e=>Math.round(_x(e))},Gn={test:Hd("rgb","red"),parse:S1("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Ds.transform(e)+", "+Ds.transform(t)+", "+Ds.transform(n)+", "+_o(jo.transform(r))+")"};function Ux(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const au={test:Hd("#"),parse:Ux,transform:Gn.transform},Ir={test:Hd("hsl","hue"),parse:S1("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Pt.transform(_o(t))+", "+Pt.transform(_o(n))+", "+_o(jo.transform(r))+")"},ze={test:e=>Gn.test(e)||au.test(e)||Ir.test(e),parse:e=>Gn.test(e)?Gn.parse(e):Ir.test(e)?Ir.parse(e):au.parse(e),transform:e=>ki(e)?e:e.hasOwnProperty("red")?Gn.transform(e):Ir.transform(e)},le=(e,t,n)=>-n*e+n*t+e;function Rs(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Hx({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,i=0,l=0;if(!t)o=i=l=n;else{const s=n<.5?n*(1+t):n+t-n*t,c=2*n-s;o=Rs(c,s,e+1/3),i=Rs(c,s,e),l=Rs(c,s,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(l*255),alpha:r}}const Ns=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},Wx=[au,Gn,Ir],Gx=e=>Wx.find(t=>t.test(e));function Nf(e){const t=Gx(e);let n=t.parse(e);return t===Ir&&(n=Hx(n)),n}const k1=(e,t)=>{const n=Nf(e),r=Nf(t),o={...n};return i=>(o.red=Ns(n.red,r.red,i),o.green=Ns(n.green,r.green,i),o.blue=Ns(n.blue,r.blue,i),o.alpha=le(n.alpha,r.alpha,i),Gn.transform(o))};function Yx(e){var t,n;return isNaN(e)&&ki(e)&&(((t=e.match(Ul))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(qg))===null||n===void 0?void 0:n.length)||0)>0}const C1={regex:$4,countKey:"Vars",token:"${v}",parse:me},P1={regex:qg,countKey:"Colors",token:"${c}",parse:ze.parse},T1={regex:Ul,countKey:"Numbers",token:"${n}",parse:cr.parse};function zs(e,{regex:t,countKey:n,token:r,parse:o}){const i=e.tokenised.match(t);i&&(e["num"+n]=i.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...i.map(o)))}function fl(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&zs(n,C1),zs(n,P1),zs(n,T1),n}function L1(e){return fl(e).values}function F1(e){const{values:t,numColors:n,numVars:r,tokenised:o}=fl(e),i=t.length;return l=>{let s=o;for(let c=0;c<i;c++)c<r?s=s.replace(C1.token,l[c]):c<r+n?s=s.replace(P1.token,ze.transform(l[c])):s=s.replace(T1.token,_o(l[c]));return s}}const Kx=e=>typeof e=="number"?0:e;function Qx(e){const t=L1(e);return F1(e)(t.map(Kx))}const Cn={test:Yx,parse:L1,createTransformer:F1,getAnimatableNone:Qx},A1=(e,t)=>n=>`${n>0?t:e}`;function D1(e,t){return typeof e=="number"?n=>le(e,t,n):ze.test(e)?k1(e,t):e.startsWith("var(")?A1(e,t):N1(e,t)}const R1=(e,t)=>{const n=[...e],r=n.length,o=e.map((i,l)=>D1(i,t[l]));return i=>{for(let l=0;l<r;l++)n[l]=o[l](i);return n}},Xx=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=D1(e[o],t[o]));return o=>{for(const i in r)n[i]=r[i](o);return n}},N1=(e,t)=>{const n=Cn.createTransformer(t),r=fl(e),o=fl(t);return r.numVars===o.numVars&&r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?xn(R1(r.values,o.values),n):A1(e,t)},fi=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},zf=(e,t)=>n=>le(e,t,n);function qx(e){return typeof e=="number"?zf:typeof e=="string"?ze.test(e)?k1:N1:Array.isArray(e)?R1:typeof e=="object"?Xx:zf}function Zx(e,t,n){const r=[],o=n||qx(e[0]),i=e.length-1;for(let l=0;l<i;l++){let s=o(e[l],e[l+1]);if(t){const c=Array.isArray(t)?t[l]||me:t;s=xn(c,s)}r.push(s)}return r}function z1(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const i=e.length;if(jd(i===t.length),i===1)return()=>t[0];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=Zx(t,r,o),s=l.length,c=u=>{let d=0;if(s>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const m=fi(e[d],e[d+1],u);return l[d](m)};return n?u=>c(kn(e[0],e[i-1],u)):c}function Jx(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=fi(0,t,r);e.push(le(n,1,o))}}function e3(e){const t=[0];return Jx(t,e.length-1),t}function t3(e,t){return e.map(n=>n*t)}function n3(e,t){return e.map(()=>t||y1).splice(0,e.length-1)}function pl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const o=Vx(r)?r.map(Rf):Rf(r),i={done:!1,value:t[0]},l=t3(n&&n.length===t.length?n:e3(t),e),s=z1(l,t,{ease:Array.isArray(o)?o:n3(t,o)});return{calculatedDuration:e,next:c=>(i.value=s(c),i.done=c>=e,i)}}function M1(e,t){return t?e*(1e3/t):0}const r3=5;function I1(e,t,n){const r=Math.max(t-r3,0);return M1(n-e(r),t-r)}const Ms=.001,o3=.01,Mf=10,i3=.05,a3=1;function l3({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,i;Lx(e<=En(Mf));let l=1-t;l=kn(i3,a3,l),e=kn(o3,Mf,Ot(e)),l<1?(o=u=>{const d=u*l,m=d*e,p=d-n,h=lu(u,l),E=Math.exp(-m);return Ms-p/h*E},i=u=>{const m=u*l*e,p=m*n+n,h=Math.pow(l,2)*Math.pow(u,2)*e,E=Math.exp(-m),w=lu(Math.pow(u,2),l);return(-o(u)+Ms>0?-1:1)*((p-h)*E)/w}):(o=u=>{const d=Math.exp(-u*e),m=(u-n)*e+1;return-Ms+d*m},i=u=>{const d=Math.exp(-u*e),m=(n-u)*(e*e);return d*m});const s=5/e,c=c3(o,i,s);if(e=En(e),isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:l*2*Math.sqrt(r*u),duration:e}}}const s3=12;function c3(e,t,n){let r=n;for(let o=1;o<s3;o++)r=r-e(r)/t(r);return r}function lu(e,t){return e*Math.sqrt(1-t*t)}const u3=["duration","bounce"],d3=["stiffness","damping","mass"];function If(e,t){return t.some(n=>e[n]!==void 0)}function m3(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!If(e,d3)&&If(e,u3)){const n=l3(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function V1({keyframes:e,restDelta:t,restSpeed:n,...r}){const o=e[0],i=e[e.length-1],l={done:!1,value:o},{stiffness:s,damping:c,mass:u,duration:d,velocity:m,isResolvedFromDuration:p}=m3({...r,velocity:-Ot(r.velocity||0)}),h=m||0,E=c/(2*Math.sqrt(s*u)),w=i-o,S=Ot(Math.sqrt(s/u)),g=Math.abs(w)<5;n||(n=g?.01:2),t||(t=g?.005:.5);let v;if(E<1){const y=lu(S,E);v=x=>{const k=Math.exp(-E*S*x);return i-k*((h+E*S*w)/y*Math.sin(y*x)+w*Math.cos(y*x))}}else if(E===1)v=y=>i-Math.exp(-S*y)*(w+(h+S*w)*y);else{const y=S*Math.sqrt(E*E-1);v=x=>{const k=Math.exp(-E*S*x),T=Math.min(y*x,300);return i-k*((h+E*S*w)*Math.sinh(T)+y*w*Math.cosh(T))/y}}return{calculatedDuration:p&&d||null,next:y=>{const x=v(y);if(p)l.done=y>=d;else{let k=h;y!==0&&(E<1?k=I1(v,y,x):k=0);const T=Math.abs(k)<=n,C=Math.abs(i-x)<=t;l.done=T&&C}return l.value=l.done?i:x,l}}}function Vf({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:i=500,modifyTarget:l,min:s,max:c,restDelta:u=.5,restSpeed:d}){const m=e[0],p={done:!1,value:m},h=F=>s!==void 0&&F<s||c!==void 0&&F>c,E=F=>s===void 0?c:c===void 0||Math.abs(s-F)<Math.abs(c-F)?s:c;let w=n*t;const S=m+w,g=l===void 0?S:l(S);g!==S&&(w=g-m);const v=F=>-w*Math.exp(-F/r),y=F=>g+v(F),x=F=>{const M=v(F),I=y(F);p.done=Math.abs(M)<=u,p.value=p.done?g:I};let k,T;const C=F=>{h(p.value)&&(k=F,T=V1({keyframes:[p.value,E(p.value)],velocity:I1(y,F,p.value),damping:o,stiffness:i,restDelta:u,restSpeed:d}))};return C(0),{calculatedDuration:null,next:F=>{let M=!1;return!T&&k===void 0&&(M=!0,x(F),C(F)),k!==void 0&&F>k?T.next(F-k):(!M&&x(F),p)}}}const f3=e=>{const t=({timestamp:n})=>e(n);return{start:()=>re.update(t,!0),stop:()=>Ut(t),now:()=>De.isProcessing?De.timestamp:performance.now()}},Of=2e4;function $f(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Of;)t+=n,r=e.next(t);return t>=Of?1/0:t}const p3={decay:Vf,inertia:Vf,tween:pl,keyframes:pl,spring:V1};function hl({autoplay:e=!0,delay:t=0,driver:n=f3,keyframes:r,type:o="keyframes",repeat:i=0,repeatDelay:l=0,repeatType:s="loop",onPlay:c,onStop:u,onComplete:d,onUpdate:m,...p}){let h=1,E=!1,w,S;const g=()=>{S=new Promise(N=>{w=N})};g();let v;const y=p3[o]||pl;let x;y!==pl&&typeof r[0]!="number"&&(x=z1([0,100],r,{clamp:!1}),r=[0,100]);const k=y({...p,keyframes:r});let T;s==="mirror"&&(T=y({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let C="idle",F=null,M=null,I=null;k.calculatedDuration===null&&i&&(k.calculatedDuration=$f(k));const{calculatedDuration:R}=k;let _=1/0,G=1/0;R!==null&&(_=R+l,G=_*(i+1)-l);let H=0;const ie=N=>{if(M===null)return;h>0&&(M=Math.min(M,N)),h<0&&(M=Math.min(N-G/h,M)),F!==null?H=F:H=Math.round(N-M)*h;const $=H-t*(h>=0?1:-1),ge=h>=0?$<0:$>G;H=Math.max($,0),C==="finished"&&F===null&&(H=G);let ue=H,$e=k;if(i){const dt=Math.min(H,G)/_;let Gt=Math.floor(dt),tt=dt%1;!tt&&dt>=1&&(tt=1),tt===1&&Gt--,Gt=Math.min(Gt,i+1),!!(Gt%2)&&(s==="reverse"?(tt=1-tt,l&&(tt-=l/_)):s==="mirror"&&($e=T)),ue=kn(0,1,tt)*_}const Z=ge?{done:!1,value:r[0]}:$e.next(ue);x&&(Z.value=x(Z.value));let{done:et}=Z;!ge&&R!==null&&(et=h>=0?H>=G:H<=0);const zn=F===null&&(C==="finished"||C==="running"&&et);return m&&m(Z.value),zn&&L(),Z},Y=()=>{v&&v.stop(),v=void 0},he=()=>{C="idle",Y(),w(),g(),M=I=null},L=()=>{C="finished",d&&d(),Y(),w()},P=()=>{if(E)return;v||(v=n(ie));const N=v.now();c&&c(),F!==null?M=N-F:(!M||C==="finished")&&(M=N),C==="finished"&&g(),I=M,F=null,C="running",v.start()};e&&P();const D={then(N,$){return S.then(N,$)},get time(){return Ot(H)},set time(N){N=En(N),H=N,F!==null||!v||h===0?F=N:M=v.now()-N/h},get duration(){const N=k.calculatedDuration===null?$f(k):k.calculatedDuration;return Ot(N)},get speed(){return h},set speed(N){N===h||!v||(h=N,D.time=Ot(H))},get state(){return C},play:P,pause:()=>{C="paused",F=H},stop:()=>{E=!0,C!=="idle"&&(C="idle",u&&u(),he())},cancel:()=>{I!==null&&ie(I),he()},complete:()=>{C="finished"},sample:N=>(M=0,ie(N))};return D}function h3(e){let t;return()=>(t===void 0&&(t=e()),t)}const g3=h3(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),v3=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Xi=10,y3=2e4,x3=(e,t)=>t.type==="spring"||e==="backgroundColor"||!p1(t.ease);function E3(e,t,{onUpdate:n,onComplete:r,...o}){if(!(g3()&&v3.has(t)&&!o.repeatDelay&&o.repeatType!=="mirror"&&o.damping!==0&&o.type!=="inertia"))return!1;let l=!1,s,c,u=!1;const d=()=>{c=new Promise(y=>{s=y})};d();let{keyframes:m,duration:p=300,ease:h,times:E}=o;if(x3(t,o)){const y=hl({...o,repeat:0,delay:0});let x={done:!1,value:m[0]};const k=[];let T=0;for(;!x.done&&T<y3;)x=y.sample(T),k.push(x.value),T+=Xi;E=void 0,m=k,p=T-Xi,h="linear"}const w=Ax(e.owner.current,t,m,{...o,duration:p,ease:h,times:E}),S=()=>{u=!1,w.cancel()},g=()=>{u=!0,re.update(S),s(),d()};return w.onfinish=()=>{u||(e.set(Dx(m,o)),r&&r(),g())},{then(y,x){return c.then(y,x)},attachTimeline(y){return w.timeline=y,w.onfinish=null,me},get time(){return Ot(w.currentTime||0)},set time(y){w.currentTime=En(y)},get speed(){return w.playbackRate},set speed(y){w.playbackRate=y},get duration(){return Ot(p)},play:()=>{l||(w.play(),Ut(S))},pause:()=>w.pause(),stop:()=>{if(l=!0,w.playState==="idle")return;const{currentTime:y}=w;if(y){const x=hl({...o,autoplay:!1});e.setWithVelocity(x.sample(y-Xi).value,x.sample(y).value,Xi)}g()},complete:()=>{u||w.finish()},cancel:g}}function w3({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const o=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:me,pause:me,stop:me,then:i=>(i(),Promise.resolve()),cancel:me,complete:me});return t?hl({keyframes:[0,1],duration:0,delay:t,onComplete:o}):o()}const b3={type:"spring",stiffness:500,damping:25,restSpeed:10},S3=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),k3={type:"keyframes",duration:.8},C3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},P3=(e,{keyframes:t})=>t.length>2?k3:sr.has(e)?e.startsWith("scale")?S3(t[1]):b3:C3,su=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Cn.test(t)||t==="0")&&!t.startsWith("url(")),T3=new Set(["brightness","contrast","saturate","opacity"]);function L3(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ul)||[];if(!r)return e;const o=n.replace(r,"");let i=T3.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const F3=/([a-z-]*)\(.*?\)/g,cu={...Cn,getAnimatableNone:e=>{const t=e.match(F3);return t?t.map(L3).join(" "):e}},A3={...Zg,color:ze,backgroundColor:ze,outlineColor:ze,fill:ze,stroke:ze,borderColor:ze,borderTopColor:ze,borderRightColor:ze,borderBottomColor:ze,borderLeftColor:ze,filter:cu,WebkitFilter:cu},Wd=e=>A3[e];function O1(e,t){let n=Wd(e);return n!==cu&&(n=Cn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const $1=e=>/^0[^.\s]+$/.test(e);function D3(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||$1(e)}function R3(e,t,n,r){const o=su(t,n);let i;Array.isArray(n)?i=[...n]:i=[null,n];const l=r.from!==void 0?r.from:e.get();let s;const c=[];for(let u=0;u<i.length;u++)i[u]===null&&(i[u]=u===0?l:i[u-1]),D3(i[u])&&c.push(u),typeof i[u]=="string"&&i[u]!=="none"&&i[u]!=="0"&&(s=i[u]);if(o&&c.length&&s)for(let u=0;u<c.length;u++){const d=c[u];i[d]=O1(t,s)}return i}function N3({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:i,repeatType:l,repeatDelay:s,from:c,elapsed:u,...d}){return!!Object.keys(d).length}function Gd(e,t){return e[t]||e.default||e}const z3={skipAnimations:!1},Yd=(e,t,n,r={})=>o=>{const i=Gd(r,e)||{},l=i.delay||r.delay||0;let{elapsed:s=0}=r;s=s-En(l);const c=R3(t,e,n,i),u=c[0],d=c[c.length-1],m=su(e,u),p=su(e,d);let h={keyframes:c,velocity:t.getVelocity(),ease:"easeOut",...i,delay:-s,onUpdate:E=>{t.set(E),i.onUpdate&&i.onUpdate(E)},onComplete:()=>{o(),i.onComplete&&i.onComplete()}};if(N3(i)||(h={...h,...P3(e,h)}),h.duration&&(h.duration=En(h.duration)),h.repeatDelay&&(h.repeatDelay=En(h.repeatDelay)),!m||!p||Fx.current||i.type===!1||z3.skipAnimations)return w3(h);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const E=E3(t,e,h);if(E)return E}return hl(h)};function gl(e){return!!(Ge(e)&&e.add)}const B1=e=>/^\-?\d*\.?\d+$/.test(e);function Kd(e,t){e.indexOf(t)===-1&&e.push(t)}function Qd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Xd{constructor(){this.subscriptions=[]}add(t){return Kd(this.subscriptions,t),()=>Qd(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(let i=0;i<o;i++){const l=this.subscriptions[i];l&&l(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const M3=e=>!isNaN(parseFloat(e));class I3{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,o=!0)=>{this.prev=this.current,this.current=r;const{delta:i,timestamp:l}=De;this.lastUpdated!==l&&(this.timeDelta=i,this.lastUpdated=l,re.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>re.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=M3(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Xd);const r=this.events[t].add(n);return t==="change"?()=>{r(),re.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?M1(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Jr(e,t){return new I3(e,t)}const j1=e=>t=>t.test(e),V3={test:e=>e==="auto",parse:e=>e},_1=[cr,O,Pt,Zt,U4,_4,V3],wo=e=>_1.find(j1(e)),O3=[..._1,ze,Cn],$3=e=>O3.find(j1(e));function B3(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Jr(n))}function j3(e,t){const n=Wl(e,t);let{transitionEnd:r={},transition:o={},...i}=n?e.makeTargetAnimatable(n,!1):{};i={...i,...r};for(const l in i){const s=ox(i[l]);B3(e,l,s)}}function _3(e,t,n){var r,o;const i=Object.keys(t).filter(s=>!e.hasValue(s)),l=i.length;if(l)for(let s=0;s<l;s++){const c=i[s],u=t[c];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(o=(r=n[c])!==null&&r!==void 0?r:e.readValue(c))!==null&&o!==void 0?o:t[c]),d!=null&&(typeof d=="string"&&(B1(d)||$1(d))?d=parseFloat(d):!$3(d)&&Cn.test(u)&&(d=O1(c,u)),e.addValue(c,Jr(d,{owner:e})),n[c]===void 0&&(n[c]=d),d!==null&&e.setBaseTarget(c,d))}}function U3(e,t){return t?(t[e]||t.default||t).from:void 0}function H3(e,t,n){const r={};for(const o in e){const i=U3(o,t);if(i!==void 0)r[o]=i;else{const l=n.getValue(o);l&&(r[o]=l.get())}}return r}function W3({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function G3(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function U1(e,t,{delay:n=0,transitionOverride:r,type:o}={}){let{transition:i=e.getDefaultTransition(),transitionEnd:l,...s}=e.makeTargetAnimatable(t);const c=e.getValue("willChange");r&&(i=r);const u=[],d=o&&e.animationState&&e.animationState.getState()[o];for(const m in s){const p=e.getValue(m),h=s[m];if(!p||h===void 0||d&&W3(d,m))continue;const E={delay:n,elapsed:0,...Gd(i||{},m)};if(window.HandoffAppearAnimations){const g=e.getProps()[Hg];if(g){const v=window.HandoffAppearAnimations(g,m,p,re);v!==null&&(E.elapsed=v,E.isHandoff=!0)}}let w=!E.isHandoff&&!G3(p,h);if(E.type==="spring"&&(p.getVelocity()||E.velocity)&&(w=!1),p.animation&&(w=!1),w)continue;p.start(Yd(m,p,h,e.shouldReduceMotion&&sr.has(m)?{type:!1}:E));const S=p.animation;gl(c)&&(c.add(m),S.then(()=>c.remove(m))),u.push(S)}return l&&Promise.all(u).then(()=>{l&&j3(e,l)}),u}function uu(e,t,n={}){const r=Wl(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const i=r?()=>Promise.all(U1(e,r,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:m}=o;return Y3(e,t,u+c,d,m,n)}:()=>Promise.resolve(),{when:s}=o;if(s){const[c,u]=s==="beforeChildren"?[i,l]:[l,i];return c().then(()=>u())}else return Promise.all([i(),l(n.delay)])}function Y3(e,t,n=0,r=0,o=1,i){const l=[],s=(e.variantChildren.size-1)*r,c=o===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(K3).forEach((u,d)=>{u.notify("AnimationStart",t),l.push(uu(u,t,{...i,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(l)}function K3(e,t){return e.sortNodePosition(t)}function Q3(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(i=>uu(e,i,n));r=Promise.all(o)}else if(typeof t=="string")r=uu(e,t,n);else{const o=typeof t=="function"?Wl(e,t,n.custom):t;r=Promise.all(U1(e,o,n))}return r.then(()=>e.notify("AnimationComplete",t))}const X3=[...Rd].reverse(),q3=Rd.length;function Z3(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Q3(e,n,r)))}function J3(e){let t=Z3(e);const n=tE();let r=!0;const o=(c,u)=>{const d=Wl(e,u);if(d){const{transition:m,transitionEnd:p,...h}=d;c={...c,...h,...p}}return c};function i(c){t=c(e)}function l(c,u){const d=e.getProps(),m=e.getVariantContext(!0)||{},p=[],h=new Set;let E={},w=1/0;for(let g=0;g<q3;g++){const v=X3[g],y=n[v],x=d[v]!==void 0?d[v]:m[v],k=di(x),T=v===u?y.isActive:null;T===!1&&(w=g);let C=x===m[v]&&x!==d[v]&&k;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),y.protectedKeys={...E},!y.isActive&&T===null||!x&&!y.prevProp||jl(x)||typeof x=="boolean")continue;let M=eE(y.prevProp,x)||v===u&&y.isActive&&!C&&k||g>w&&k,I=!1;const R=Array.isArray(x)?x:[x];let _=R.reduce(o,{});T===!1&&(_={});const{prevResolvedValues:G={}}=y,H={...G,..._},ie=Y=>{M=!0,h.has(Y)&&(I=!0,h.delete(Y)),y.needsAnimating[Y]=!0};for(const Y in H){const he=_[Y],L=G[Y];if(E.hasOwnProperty(Y))continue;let P=!1;ml(he)&&ml(L)?P=!m1(he,L):P=he!==L,P?he!==void 0?ie(Y):h.add(Y):he!==void 0&&h.has(Y)?ie(Y):y.protectedKeys[Y]=!0}y.prevProp=x,y.prevResolvedValues=_,y.isActive&&(E={...E,..._}),r&&e.blockInitialAnimation&&(M=!1),M&&(!C||I)&&p.push(...R.map(Y=>({animation:Y,options:{type:v,...c}})))}if(h.size){const g={};h.forEach(v=>{const y=e.getBaseTarget(v);y!==void 0&&(g[v]=y)}),p.push({animation:g})}let S=!!p.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(S=!1),r=!1,S?t(p):Promise.resolve()}function s(c,u,d){var m;if(n[c].isActive===u)return Promise.resolve();(m=e.variantChildren)===null||m===void 0||m.forEach(h=>{var E;return(E=h.animationState)===null||E===void 0?void 0:E.setActive(c,u)}),n[c].isActive=u;const p=l(d,c);for(const h in n)n[h].protectedKeys={};return p}return{animateChanges:l,setActive:s,setAnimateFunction:i,getState:()=>n}}function eE(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!m1(t,e):!1}function Mn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function tE(){return{animate:Mn(!0),whileInView:Mn(),whileHover:Mn(),whileTap:Mn(),whileDrag:Mn(),whileFocus:Mn(),exit:Mn()}}class nE extends Dn{constructor(t){super(t),t.animationState||(t.animationState=J3(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),jl(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let rE=0;class oE extends Dn{constructor(){super(...arguments),this.id=rE++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const i=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const iE={animation:{Feature:nE},exit:{Feature:oE}},Bf=(e,t)=>Math.abs(e-t);function aE(e,t){const n=Bf(e.x,t.x),r=Bf(e.y,t.y);return Math.sqrt(n**2+r**2)}class H1{constructor(t,n,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Vs(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,h=aE(m.offset,{x:0,y:0})>=3;if(!p&&!h)return;const{point:E}=m,{timestamp:w}=De;this.history.push({...E,timestamp:w});const{onStart:S,onMove:g}=this.handlers;p||(S&&S(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,m)},this.handlePointerMove=(m,p)=>{this.lastMoveEvent=m,this.lastMoveEventInfo=Is(p,this.transformPagePoint),re.update(this.updatePoint,!0)},this.handlePointerUp=(m,p)=>{this.end();const{onEnd:h,onSessionEnd:E,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Vs(m.type==="pointercancel"?this.lastMoveEventInfo:Is(p,this.transformPagePoint),this.history);this.startEvent&&h&&h(m,S),E&&E(m,S)},!l1(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.contextWindow=o||window;const l=Hl(t),s=Is(l,this.transformPagePoint),{point:c}=s,{timestamp:u}=De;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Vs(s,this.history)),this.removeListeners=xn(Vt(this.contextWindow,"pointermove",this.handlePointerMove),Vt(this.contextWindow,"pointerup",this.handlePointerUp),Vt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ut(this.updatePoint)}}function Is(e,t){return t?{point:t(e.point)}:e}function jf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Vs({point:e},t){return{point:e,delta:jf(e,W1(t)),offset:jf(e,lE(t)),velocity:sE(t,.1)}}function lE(e){return e[0]}function W1(e){return e[e.length-1]}function sE(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=W1(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>En(t)));)n--;if(!r)return{x:0,y:0};const i=Ot(o.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const l={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function qe(e){return e.max-e.min}function du(e,t=0,n=.01){return Math.abs(e-t)<=n}function _f(e,t,n,r=.5){e.origin=r,e.originPoint=le(t.min,t.max,e.origin),e.scale=qe(n)/qe(t),(du(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=le(n.min,n.max,e.origin)-e.originPoint,(du(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Uo(e,t,n,r){_f(e.x,t.x,n.x,r?r.originX:void 0),_f(e.y,t.y,n.y,r?r.originY:void 0)}function Uf(e,t,n){e.min=n.min+t.min,e.max=e.min+qe(t)}function cE(e,t,n){Uf(e.x,t.x,n.x),Uf(e.y,t.y,n.y)}function Hf(e,t,n){e.min=t.min-n.min,e.max=e.min+qe(t)}function Ho(e,t,n){Hf(e.x,t.x,n.x),Hf(e.y,t.y,n.y)}function uE(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?le(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?le(n,e,r.max):Math.min(e,n)),e}function Wf(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function dE(e,{top:t,left:n,bottom:r,right:o}){return{x:Wf(e.x,n,o),y:Wf(e.y,t,r)}}function Gf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function mE(e,t){return{x:Gf(e.x,t.x),y:Gf(e.y,t.y)}}function fE(e,t){let n=.5;const r=qe(e),o=qe(t);return o>r?n=fi(t.min,t.max-r,e.min):r>o&&(n=fi(e.min,e.max-o,t.min)),kn(0,1,n)}function pE(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const mu=.35;function hE(e=mu){return e===!1?e=0:e===!0&&(e=mu),{x:Yf(e,"left","right"),y:Yf(e,"top","bottom")}}function Yf(e,t,n){return{min:Kf(e,t),max:Kf(e,n)}}function Kf(e,t){return typeof e=="number"?e:e[t]||0}const Qf=()=>({translate:0,scale:1,origin:0,originPoint:0}),Vr=()=>({x:Qf(),y:Qf()}),Xf=()=>({min:0,max:0}),ve=()=>({x:Xf(),y:Xf()});function rt(e){return[e("x"),e("y")]}function G1({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function gE({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function vE(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Os(e){return e===void 0||e===1}function fu({scale:e,scaleX:t,scaleY:n}){return!Os(e)||!Os(t)||!Os(n)}function jn(e){return fu(e)||Y1(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Y1(e){return qf(e.x)||qf(e.y)}function qf(e){return e&&e!=="0%"}function vl(e,t,n){const r=e-n,o=t*r;return n+o}function Zf(e,t,n,r,o){return o!==void 0&&(e=vl(e,o,r)),vl(e,n,r)+t}function pu(e,t=0,n=1,r,o){e.min=Zf(e.min,t,n,r,o),e.max=Zf(e.max,t,n,r,o)}function K1(e,{x:t,y:n}){pu(e.x,t.translate,t.scale,t.originPoint),pu(e.y,n.translate,n.scale,n.originPoint)}function yE(e,t,n,r=!1){const o=n.length;if(!o)return;t.x=t.y=1;let i,l;for(let s=0;s<o;s++){i=n[s],l=i.projectionDelta;const c=i.instance;c&&c.style&&c.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&Or(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,K1(e,l)),r&&jn(i.latestValues)&&Or(e,i.latestValues))}t.x=Jf(t.x),t.y=Jf(t.y)}function Jf(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function nn(e,t){e.min=e.min+t,e.max=e.max+t}function ep(e,t,[n,r,o]){const i=t[o]!==void 0?t[o]:.5,l=le(e.min,e.max,i);pu(e,t[n],t[r],l,t.scale)}const xE=["x","scaleX","originX"],EE=["y","scaleY","originY"];function Or(e,t){ep(e.x,t,xE),ep(e.y,t,EE)}function Q1(e,t){return G1(vE(e.getBoundingClientRect(),t))}function wE(e,t,n){const r=Q1(e,n),{scroll:o}=t;return o&&(nn(r.x,o.offset.x),nn(r.y,o.offset.y)),r}const X1=({current:e})=>e?e.ownerDocument.defaultView:null,bE=new WeakMap;class SE{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ve(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=d=>{const{dragSnapToOrigin:m}=this.getProps();m?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Hl(d,"page").point)},i=(d,m)=>{const{drag:p,dragPropagation:h,onDragStart:E}=this.getProps();if(p&&!h&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=c1(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),rt(S=>{let g=this.getAxisMotionValue(S).get()||0;if(Pt.test(g)){const{projection:v}=this.visualElement;if(v&&v.layout){const y=v.layout.layoutBox[S];y&&(g=qe(y)*(parseFloat(g)/100))}}this.originPoint[S]=g}),E&&re.update(()=>E(d,m),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},l=(d,m)=>{const{dragPropagation:p,dragDirectionLock:h,onDirectionLock:E,onDrag:w}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:S}=m;if(h&&this.currentDirection===null){this.currentDirection=kE(S),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",m.point,S),this.updateAxis("y",m.point,S),this.visualElement.render(),w&&w(d,m)},s=(d,m)=>this.stop(d,m),c=()=>rt(d=>{var m;return this.getAnimationState(d)==="paused"&&((m=this.getAxisMotionValue(d).animation)===null||m===void 0?void 0:m.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new H1(t,{onSessionStart:o,onStart:i,onMove:l,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:X1(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:i}=this.getProps();i&&re.update(()=>i(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!qi(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let l=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(l=uE(l,this.constraints[t],this.elastic[t])),i.set(l)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,i=this.constraints;n&&Mr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=dE(o.layoutBox,n):this.constraints=!1,this.elastic=hE(r),i!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&rt(l=>{this.getAxisMotionValue(l)&&(this.constraints[l]=pE(o.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Mr(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=wE(r,o.root,this.visualElement.getTransformPagePoint());let l=mE(o.layout.layoutBox,i);if(n){const s=n(gE(l));this.hasMutatedConstraints=!!s,s&&(l=G1(s))}return l}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:i,dragSnapToOrigin:l,onDragTransitionEnd:s}=this.getProps(),c=this.constraints||{},u=rt(d=>{if(!qi(d,n,this.currentDirection))return;let m=c&&c[d]||{};l&&(m={min:0,max:0});const p=o?200:1e6,h=o?40:1e7,E={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...i,...m};return this.startAxisValueAnimation(d,E)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Yd(t,r,0,n))}stopAnimation(){rt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){rt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),o=r[n];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){rt(n=>{const{drag:r}=this.getProps();if(!qi(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(n);if(o&&o.layout){const{min:l,max:s}=o.layout.layoutBox[n];i.set(t[n]-le(l,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Mr(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};rt(l=>{const s=this.getAxisMotionValue(l);if(s){const c=s.get();o[l]=fE({min:c,max:c},this.constraints[l])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),rt(l=>{if(!qi(l,t,null))return;const s=this.getAxisMotionValue(l),{min:c,max:u}=this.constraints[l];s.set(le(c,u,o[l]))})}addListeners(){if(!this.visualElement.current)return;bE.set(this.visualElement,this);const t=this.visualElement.current,n=Vt(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();Mr(c)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,i=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),r();const l=Mt(window,"resize",()=>this.scalePositionWithinConstraints()),s=o.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(rt(d=>{const m=this.getAxisMotionValue(d);m&&(this.originPoint[d]+=c[d].translate,m.set(m.get()+c[d].translate))}),this.visualElement.render())});return()=>{l(),n(),i(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:l=mu,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:i,dragElastic:l,dragMomentum:s}}}function qi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function kE(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class CE extends Dn{constructor(t){super(t),this.removeGroupControls=me,this.removeListeners=me,this.controls=new SE(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||me}unmount(){this.removeGroupControls(),this.removeListeners()}}const tp=e=>(t,n)=>{e&&re.update(()=>e(t,n))};class PE extends Dn{constructor(){super(...arguments),this.removePointerDownListener=me}onPointerDown(t){this.session=new H1(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:X1(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:tp(t),onStart:tp(n),onMove:r,onEnd:(i,l)=>{delete this.session,o&&re.update(()=>o(i,l))}}}mount(){this.removePointerDownListener=Vt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function TE(){const e=b.useContext(Ad);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=b.useId();return b.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}const Ra={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function np(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const bo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(O.test(e))e=parseFloat(e);else return e;const n=np(e,t.target.x),r=np(e,t.target.y);return`${n}% ${r}%`}},LE={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=Cn.parse(e);if(o.length>5)return r;const i=Cn.createTransformer(e),l=typeof o[0]!="number"?1:0,s=n.x.scale*t.x,c=n.y.scale*t.y;o[0+l]/=s,o[1+l]/=c;const u=le(s,c,.5);return typeof o[2+l]=="number"&&(o[2+l]/=u),typeof o[3+l]=="number"&&(o[3+l]/=u),i(o)}};class FE extends a.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:i}=t;M4(AE),i&&(n.group&&n.group.add(i),r&&r.register&&o&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),Ra.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:i}=this.props,l=r.projection;return l&&(l.isPresent=i,o||t.layoutDependency!==n||n===void 0?l.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?l.promote():l.relegate()||re.postRender(()=>{const s=l.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function q1(e){const[t,n]=TE(),r=b.useContext(Gg);return a.createElement(FE,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(Yg),isPresent:t,safeToRemove:n})}const AE={borderRadius:{...bo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:bo,borderTopRightRadius:bo,borderBottomLeftRadius:bo,borderBottomRightRadius:bo,boxShadow:LE},Z1=["TopLeft","TopRight","BottomLeft","BottomRight"],DE=Z1.length,rp=e=>typeof e=="string"?parseFloat(e):e,op=e=>typeof e=="number"||O.test(e);function RE(e,t,n,r,o,i){o?(e.opacity=le(0,n.opacity!==void 0?n.opacity:1,NE(r)),e.opacityExit=le(t.opacity!==void 0?t.opacity:1,0,zE(r))):i&&(e.opacity=le(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let l=0;l<DE;l++){const s=`border${Z1[l]}Radius`;let c=ip(t,s),u=ip(n,s);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||op(c)===op(u)?(e[s]=Math.max(le(rp(c),rp(u),r),0),(Pt.test(u)||Pt.test(c))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=le(t.rotate||0,n.rotate||0,r))}function ip(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const NE=J1(0,.5,w1),zE=J1(.5,.95,me);function J1(e,t,n){return r=>r<e?0:r>t?1:n(fi(e,t,r))}function ap(e,t){e.min=t.min,e.max=t.max}function nt(e,t){ap(e.x,t.x),ap(e.y,t.y)}function lp(e,t,n,r,o){return e-=t,e=vl(e,1/n,r),o!==void 0&&(e=vl(e,1/o,r)),e}function ME(e,t=0,n=1,r=.5,o,i=e,l=e){if(Pt.test(t)&&(t=parseFloat(t),t=le(l.min,l.max,t/100)-l.min),typeof t!="number")return;let s=le(i.min,i.max,r);e===i&&(s-=t),e.min=lp(e.min,t,n,s,o),e.max=lp(e.max,t,n,s,o)}function sp(e,t,[n,r,o],i,l){ME(e,t[n],t[r],t[o],t.scale,i,l)}const IE=["x","scaleX","originX"],VE=["y","scaleY","originY"];function cp(e,t,n,r){sp(e.x,t,IE,n?n.x:void 0,r?r.x:void 0),sp(e.y,t,VE,n?n.y:void 0,r?r.y:void 0)}function up(e){return e.translate===0&&e.scale===1}function ev(e){return up(e.x)&&up(e.y)}function OE(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function tv(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function dp(e){return qe(e.x)/qe(e.y)}class $E{constructor(){this.members=[]}add(t){Kd(this.members,t),t.scheduleRender()}remove(t){if(Qd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const i=this.members[o];if(i.isPresent!==!1){r=i;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function mp(e,t,n){let r="";const o=e.x.translate/t.x,i=e.y.translate/t.y;if((o||i)&&(r=`translate3d(${o}px, ${i}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:c,rotateX:u,rotateY:d}=n;c&&(r+=`rotate(${c}deg) `),u&&(r+=`rotateX(${u}deg) `),d&&(r+=`rotateY(${d}deg) `)}const l=e.x.scale*t.x,s=e.y.scale*t.y;return(l!==1||s!==1)&&(r+=`scale(${l}, ${s})`),r||"none"}const BE=(e,t)=>e.depth-t.depth;class jE{constructor(){this.children=[],this.isDirty=!1}add(t){Kd(this.children,t),this.isDirty=!0}remove(t){Qd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(BE),this.isDirty=!1,this.children.forEach(t)}}function _E(e,t){const n=performance.now(),r=({timestamp:o})=>{const i=o-n;i>=t&&(Ut(r),e(i-t))};return re.read(r,!0),()=>Ut(r)}function UE(e){window.MotionDebug&&window.MotionDebug.record(e)}function HE(e){return e instanceof SVGElement&&e.tagName!=="svg"}function WE(e,t,n){const r=Ge(e)?e:Jr(e);return r.start(Yd("",r,t,n)),r.animation}const fp=["","X","Y","Z"],GE={visibility:"hidden"},pp=1e3;let YE=0;const _n={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function nv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(l={},s=t==null?void 0:t()){this.id=YE++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,_n.totalNodes=_n.resolvedTargetDeltas=_n.recalculatedProjection=0,this.nodes.forEach(XE),this.nodes.forEach(tw),this.nodes.forEach(nw),this.nodes.forEach(qE),UE(_n)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=l,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new jE)}addEventListener(l,s){return this.eventHandlers.has(l)||this.eventHandlers.set(l,new Xd),this.eventHandlers.get(l).add(s)}notifyListeners(l,...s){const c=this.eventHandlers.get(l);c&&c.notify(...s)}hasListeners(l){return this.eventHandlers.has(l)}mount(l,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=HE(l),this.instance=l;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(l),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||c)&&(this.isLayoutDirty=!0),e){let m;const p=()=>this.root.updateBlockedByResize=!1;e(l,()=>{this.root.updateBlockedByResize=!0,m&&m(),m=_E(p,250),Ra.hasAnimatedSinceResize&&(Ra.hasAnimatedSinceResize=!1,this.nodes.forEach(gp))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:p,hasRelativeTargetChanged:h,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||d.getDefaultTransition()||lw,{onLayoutAnimationStart:S,onLayoutAnimationComplete:g}=d.getProps(),v=!this.targetLayout||!tv(this.targetLayout,E)||h,y=!p&&h;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||p&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(m,y);const x={...Gd(w,"layout"),onPlay:S,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x)}else p||gp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const l=this.getStack();l&&l.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ut(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(rw),this.animationId++)}getTransformTemplate(){const{visualElement:l}=this.options;return l&&l.getProps().transformTemplate}willUpdate(l=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const m=this.path[d];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:s,layout:c}=this.options;if(s===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),l&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(hp);return}this.isUpdating||this.nodes.forEach(JE),this.isUpdating=!1,this.nodes.forEach(ew),this.nodes.forEach(KE),this.nodes.forEach(QE),this.clearAllSnapshots();const s=performance.now();De.delta=kn(0,1e3/60,s-De.timestamp),De.timestamp=s,De.isProcessing=!0,Ls.update.process(De),Ls.preRender.process(De),Ls.render.process(De),De.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(ZE),this.sharedNodes.forEach(ow)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,re.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){re.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const l=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ve(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,l?l.layoutBox:void 0)}updateScroll(l="measure"){let s=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:l,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const l=this.isLayoutDirty||this.shouldResetTransform,s=this.projectionDelta&&!ev(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;l&&(s||jn(this.latestValues)||d)&&(o(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(l=!0){const s=this.measurePageBox();let c=this.removeElementScroll(s);return l&&(c=this.removeTransform(c)),sw(c),{animationId:this.root.animationId,measuredBox:s,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:l}=this.options;if(!l)return ve();const s=l.measureViewportBox(),{scroll:c}=this.root;return c&&(nn(s.x,c.offset.x),nn(s.y,c.offset.y)),s}removeElementScroll(l){const s=ve();nt(s,l);for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:m}=u;if(u!==this.root&&d&&m.layoutScroll){if(d.isRoot){nt(s,l);const{scroll:p}=this.root;p&&(nn(s.x,-p.offset.x),nn(s.y,-p.offset.y))}nn(s.x,d.offset.x),nn(s.y,d.offset.y)}}return s}applyTransform(l,s=!1){const c=ve();nt(c,l);for(let u=0;u<this.path.length;u++){const d=this.path[u];!s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Or(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),jn(d.latestValues)&&Or(c,d.latestValues)}return jn(this.latestValues)&&Or(c,this.latestValues),c}removeTransform(l){const s=ve();nt(s,l);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!jn(u.latestValues))continue;fu(u.latestValues)&&u.updateSnapshot();const d=ve(),m=u.measurePageBox();nt(d,m),cp(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return jn(this.latestValues)&&cp(s,this.latestValues),s}setTargetDelta(l){this.targetDelta=l,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(l){this.options={...this.options,...l,crossfade:l.crossfade!==void 0?l.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==De.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(l=!1){var s;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(l||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:m,layoutId:p}=this.options;if(!(!this.layout||!(m||p))){if(this.resolvedRelativeTargetAt=De.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ve(),this.relativeTargetOrigin=ve(),Ho(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),nt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ve(),this.targetWithTransforms=ve()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),cE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):nt(this.target,this.layout.layoutBox),K1(this.target,this.targetDelta)):nt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ve(),this.relativeTargetOrigin=ve(),Ho(this.relativeTargetOrigin,this.target,h.target),nt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}_n.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||fu(this.parent.latestValues)||Y1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var l;const s=this.getLead(),c=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===De.timestamp&&(u=!1),u)return;const{layout:d,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||m))return;nt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,h=this.treeScale.y;yE(this.layoutCorrected,this.treeScale,this.path,c),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox);const{target:E}=s;if(!E){this.projectionTransform&&(this.projectionDelta=Vr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Vr(),this.projectionDeltaWithTransform=Vr());const w=this.projectionTransform;Uo(this.projectionDelta,this.layoutCorrected,E,this.latestValues),this.projectionTransform=mp(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==p||this.treeScale.y!==h)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E)),_n.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(l=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),l){const s=this.getStack();s&&s.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(l,s=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},m=Vr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const p=ve(),h=c?c.source:void 0,E=this.layout?this.layout.source:void 0,w=h!==E,S=this.getStack(),g=!S||S.members.length<=1,v=!!(w&&!g&&this.options.crossfade===!0&&!this.path.some(aw));this.animationProgress=0;let y;this.mixTargetDelta=x=>{const k=x/1e3;vp(m.x,l.x,k),vp(m.y,l.y,k),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ho(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),iw(this.relativeTarget,this.relativeTargetOrigin,p,k),y&&OE(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=ve()),nt(y,this.relativeTarget)),w&&(this.animationValues=d,RE(d,u,this.latestValues,k,v,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(l){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ut(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=re.update(()=>{Ra.hasAnimatedSinceResize=!0,this.currentAnimation=WE(0,pp,{...l,onUpdate:s=>{this.mixTargetDelta(s),l.onUpdate&&l.onUpdate(s)},onComplete:()=>{l.onComplete&&l.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const l=this.getStack();l&&l.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(pp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const l=this.getLead();let{targetWithTransforms:s,target:c,layout:u,latestValues:d}=l;if(!(!s||!c||!u)){if(this!==l&&this.layout&&u&&rv(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||ve();const m=qe(this.layout.layoutBox.x);c.x.min=l.target.x.min,c.x.max=c.x.min+m;const p=qe(this.layout.layoutBox.y);c.y.min=l.target.y.min,c.y.max=c.y.min+p}nt(s,c),Or(s,d),Uo(this.projectionDeltaWithTransform,this.layoutCorrected,s,d)}}registerSharedNode(l,s){this.sharedNodes.has(l)||this.sharedNodes.set(l,new $E),this.sharedNodes.get(l).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const l=this.getStack();return l?l.lead===this:!0}getLead(){var l;const{layoutId:s}=this.options;return s?((l=this.getStack())===null||l===void 0?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:s}=this.options;return s?(l=this.getStack())===null||l===void 0?void 0:l.prevLead:void 0}getStack(){const{layoutId:l}=this.options;if(l)return this.root.sharedNodes.get(l)}promote({needsReset:l,transition:s,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),l&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const l=this.getStack();return l?l.relegate(this):!1}resetRotation(){const{visualElement:l}=this.options;if(!l)return;let s=!1;const{latestValues:c}=l;if((c.rotate||c.rotateX||c.rotateY||c.rotateZ)&&(s=!0),!s)return;const u={};for(let d=0;d<fp.length;d++){const m="rotate"+fp[d];c[m]&&(u[m]=c[m],l.setStaticValue(m,0))}l.render();for(const d in u)l.setStaticValue(d,u[d]);l.scheduleRender()}getProjectionStyles(l){var s,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return GE;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Da(l==null?void 0:l.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=Da(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!jn(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const p=m.animationValues||m.latestValues;this.applyTransformsToTarget(),u.transform=mp(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:h,y:E}=this.projectionDelta;u.transformOrigin=`${h.origin*100}% ${E.origin*100}% 0`,m.animationValues?u.opacity=m===this?(c=(s=p.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=m===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const w in ul){if(p[w]===void 0)continue;const{correct:S,applyTo:g}=ul[w],v=u.transform==="none"?p[w]:S(p[w],m);if(g){const y=g.length;for(let x=0;x<y;x++)u[g[x]]=v}else u[w]=v}return this.options.layoutId&&(u.pointerEvents=m===this?Da(l==null?void 0:l.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(l=>{var s;return(s=l.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(hp),this.root.sharedNodes.clear()}}}function KE(e){e.updateLayout()}function QE(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:i}=e.options,l=n.source!==e.layout.source;i==="size"?rt(m=>{const p=l?n.measuredBox[m]:n.layoutBox[m],h=qe(p);p.min=r[m].min,p.max=p.min+h}):rv(i,n.layoutBox,r)&&rt(m=>{const p=l?n.measuredBox[m]:n.layoutBox[m],h=qe(r[m]);p.max=p.min+h,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[m].max=e.relativeTarget[m].min+h)});const s=Vr();Uo(s,r,n.layoutBox);const c=Vr();l?Uo(c,e.applyTransform(o,!0),n.measuredBox):Uo(c,r,n.layoutBox);const u=!ev(s);let d=!1;if(!e.resumeFrom){const m=e.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:p,layout:h}=m;if(p&&h){const E=ve();Ho(E,n.layoutBox,p.layoutBox);const w=ve();Ho(w,r,h.layoutBox),tv(E,w)||(d=!0),m.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=E,e.relativeParent=m)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function XE(e){_n.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function qE(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ZE(e){e.clearSnapshot()}function hp(e){e.clearMeasurements()}function JE(e){e.isLayoutDirty=!1}function ew(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function gp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function tw(e){e.resolveTargetDelta()}function nw(e){e.calcProjection()}function rw(e){e.resetRotation()}function ow(e){e.removeLeadSnapshot()}function vp(e,t,n){e.translate=le(t.translate,0,n),e.scale=le(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function yp(e,t,n,r){e.min=le(t.min,n.min,r),e.max=le(t.max,n.max,r)}function iw(e,t,n,r){yp(e.x,t.x,n.x,r),yp(e.y,t.y,n.y,r)}function aw(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const lw={duration:.45,ease:[.4,0,.1,1]},xp=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Ep=xp("applewebkit/")&&!xp("chrome/")?Math.round:me;function wp(e){e.min=Ep(e.min),e.max=Ep(e.max)}function sw(e){wp(e.x),wp(e.y)}function rv(e,t,n){return e==="position"||e==="preserve-aspect"&&!du(dp(t),dp(n),.2)}const cw=nv({attachResizeListener:(e,t)=>Mt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),$s={current:void 0},ov=nv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!$s.current){const e=new cw({});e.mount(window),e.setOptions({layoutScroll:!0}),$s.current=e}return $s.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),uw={pan:{Feature:PE},drag:{Feature:CE,ProjectionNode:ov,MeasureLayout:q1}},dw=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function mw(e){const t=dw.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function hu(e,t,n=1){const[r,o]=mw(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const l=i.trim();return B1(l)?parseFloat(l):l}else return ou(o)?hu(o,t,n+1):o}function fw(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const i=o.get();if(!ou(i))return;const l=hu(i,r);l&&o.set(l)});for(const o in t){const i=t[o];if(!ou(i))continue;const l=hu(i,r);l&&(t[o]=l,n||(n={}),n[o]===void 0&&(n[o]=i))}return{target:t,transitionEnd:n}}const pw=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),iv=e=>pw.has(e),hw=e=>Object.keys(e).some(iv),bp=e=>e===cr||e===O,Sp=(e,t)=>parseFloat(e.split(", ")[t]),kp=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return Sp(o[1],t);{const i=r.match(/^matrix\((.+)\)$/);return i?Sp(i[1],e):0}},gw=new Set(["x","y","z"]),vw=Si.filter(e=>!gw.has(e));function yw(e){const t=[];return vw.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const eo={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:kp(4,13),y:kp(5,14)};eo.translateX=eo.x;eo.translateY=eo.y;const xw=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,i=getComputedStyle(o),{display:l}=i,s={};l==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{s[u]=eo[u](r,i)}),t.render();const c=t.measureViewportBox();return n.forEach(u=>{const d=t.getValue(u);d&&d.jump(s[u]),e[u]=eo[u](c,i)}),e},Ew=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(iv);let i=[],l=!1;const s=[];if(o.forEach(c=>{const u=e.getValue(c);if(!e.hasValue(c))return;let d=n[c],m=wo(d);const p=t[c];let h;if(ml(p)){const E=p.length,w=p[0]===null?1:0;d=p[w],m=wo(d);for(let S=w;S<E&&p[S]!==null;S++)h?jd(wo(p[S])===h):h=wo(p[S])}else h=wo(p);if(m!==h)if(bp(m)&&bp(h)){const E=u.get();typeof E=="string"&&u.set(parseFloat(E)),typeof p=="string"?t[c]=parseFloat(p):Array.isArray(p)&&h===O&&(t[c]=p.map(parseFloat))}else m!=null&&m.transform&&(h!=null&&h.transform)&&(d===0||p===0)?d===0?u.set(h.transform(d)):t[c]=m.transform(p):(l||(i=yw(e),l=!0),s.push(c),r[c]=r[c]!==void 0?r[c]:t[c],u.jump(p))}),s.length){const c=s.indexOf("height")>=0?window.pageYOffset:null,u=xw(t,e,s);return i.length&&i.forEach(([d,m])=>{e.getValue(d).set(m)}),e.render(),Bl&&c!==null&&window.scrollTo({top:c}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function ww(e,t,n,r){return hw(t)?Ew(e,t,n,r):{target:t,transitionEnd:r}}const bw=(e,t,n,r)=>{const o=fw(e,t,r);return t=o.target,r=o.transitionEnd,ww(e,t,n,r)},gu={current:null},av={current:!1};function Sw(){if(av.current=!0,!!Bl)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>gu.current=e.matches;e.addListener(t),t()}else gu.current=!1}function kw(e,t,n){const{willChange:r}=t;for(const o in t){const i=t[o],l=n[o];if(Ge(i))e.addValue(o,i),gl(r)&&r.add(o);else if(Ge(l))e.addValue(o,Jr(i,{owner:e})),gl(r)&&r.remove(o);else if(l!==i)if(e.hasValue(o)){const s=e.getValue(o);!s.hasAnimated&&s.set(i)}else{const s=e.getStaticValue(o);e.addValue(o,Jr(s!==void 0?s:i,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const Cp=new WeakMap,lv=Object.keys(mi),Cw=lv.length,Pp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Pw=Nd.length;class Tw{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:o,visualState:i},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>re.render(this.render,!1,!0);const{latestValues:s,renderState:c}=i;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=l,this.isControllingVariants=_l(n),this.isVariantNode=Wg(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{});for(const m in d){const p=d[m];s[m]!==void 0&&Ge(p)&&(p.set(s[m],!1),gl(u)&&u.add(m))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Cp.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),av.current||Sw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:gu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Cp.delete(this.current),this.projection&&this.projection.unmount(),Ut(this.notifyUpdate),Ut(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=sr.has(t),o=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&re.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),i()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,o,i){let l,s;for(let c=0;c<Cw;c++){const u=lv[c],{isEnabled:d,Feature:m,ProjectionNode:p,MeasureLayout:h}=mi[u];p&&(l=p),d(n)&&(!this.features[u]&&m&&(this.features[u]=new m(this)),h&&(s=h))}if((this.type==="html"||this.type==="svg")&&!this.projection&&l){this.projection=new l(this.latestValues,this.parent&&this.parent.projection);const{layoutId:c,layout:u,drag:d,dragConstraints:m,layoutScroll:p,layoutRoot:h}=n;this.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!d||m&&Mr(m),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:p,layoutRoot:h})}return s}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ve()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Pp.length;r++){const o=Pp[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const i=t["on"+o];i&&(this.propEventSubscriptions[o]=this.on(o,i))}this.prevMotionValues=kw(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<Pw;r++){const o=Nd[r],i=this.props[o];(di(i)||i===!1)&&(n[o]=i)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Jr(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=Bd(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Ge(i)?i:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Xd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class sv extends Tw{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},i){let l=H3(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),l&&(l=o(l))),i){_3(this,r,l);const s=bw(this,r,l,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function Lw(e){return window.getComputedStyle(e)}class Fw extends sv{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(sr.has(n)){const r=Wd(n);return r&&r.default||0}else{const r=Lw(t),o=(Xg(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Q1(t,n)}build(t,n,r,o){Md(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t,n){return $d(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ge(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,o){n1(t,n,r,o)}}class Aw extends sv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(sr.has(n)){const r=Wd(n);return r&&r.default||0}return n=r1.has(n)?n:Dd(n),t.getAttribute(n)}measureInstanceViewportBox(){return ve()}scrapeMotionValuesFromProps(t,n){return i1(t,n)}build(t,n,r,o){Vd(t,n,r,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,r,o){o1(t,n,r,o)}mount(t){this.isSVGTag=Od(t.tagName),super.mount(t)}}const Dw=(e,t)=>zd(e)?new Aw(t,{enableHardwareAcceleration:!1}):new Fw(t,{enableHardwareAcceleration:!0}),Rw={layout:{ProjectionNode:ov,MeasureLayout:q1}},Nw={...iE,...Cx,...uw,...Rw},V=N4((e,t)=>mx(e,t,Nw,Dw));var cv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tp=a.createContext&&a.createContext(cv),wn=globalThis&&globalThis.__assign||function(){return wn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},wn.apply(this,arguments)},zw=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function uv(e){return e&&e.map(function(t,n){return a.createElement(t.tag,wn({key:n},t.attr),uv(t.child))})}function B(e){return function(t){return a.createElement(Mw,wn({attr:wn({},e.attr)},t),uv(e.child))}}function Mw(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=zw(e,["attr","size","title"]),s=o||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),a.createElement("svg",wn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:c,style:wn(wn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return Tp!==void 0?a.createElement(Tp.Consumer,null,function(n){return t(n)}):t(cv)}function Iw(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function Vw(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function Ow(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function $w(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function qd(e){return B({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}}]})(e)}function Rn(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(e)}function dv(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(e)}function Bw(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function Bs(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"}}]})(e)}function Lp(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"}}]})(e)}function mv(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"}}]})(e)}function jw(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"}}]})(e)}function dr(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"}}]})(e)}function Yn(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}function _w(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"}}]})(e)}function cn(e){return B({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}}]})(e)}function Zd(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function vu(e){return B({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}}]})(e)}function Uw(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"}}]})(e)}function Ti(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"}}]})(e)}function Hw(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"}}]})(e)}function Ww(e){return B({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}}]})(e)}function fv(e){return B({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"}}]})(e)}function yu(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}}]})(e)}function Gw(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function pv(e){return B({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function Fp(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}}]})(e)}function Gl(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}}]})(e)}function js(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"}}]})(e)}function Ap(e){return B({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M358.4 3.2L320 48 265.6 3.2a15.9 15.9 0 0 0-19.2 0L192 48 137.6 3.2a15.9 15.9 0 0 0-19.2 0L64 48 25.6 3.2C15-4.7 0 2.8 0 16v480c0 13.2 15 20.7 25.6 12.8L64 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L192 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L320 464l38.4 44.8c10.5 7.9 25.6.4 25.6-12.8V16c0-13.2-15-20.7-25.6-12.8zM320 360c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16z"}}]})(e)}function Yw(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"}}]})(e)}function Yl(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"}}]})(e)}function Nn(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function qn(e){return B({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(e)}function Kw(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"}}]})(e)}function Qw(e){return B({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"}}]})(e)}function Xw(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"}}]})(e)}function Li(e){return B({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function Fi(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}}]})(e)}function hv(e){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}}]})(e)}function qw(e){return B({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"}}]})(e)}function xu(e){return B({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function Dp(e){return B({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(e)}var _e=function(){return _e=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_e.apply(this,arguments)};function yl(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var te="-ms-",Wo="-moz-",K="-webkit-",gv="comm",Kl="rule",Jd="decl",Zw="@import",vv="@keyframes",Jw="@layer",yv=Math.abs,em=String.fromCharCode,Eu=Object.assign;function e6(e,t){return ke(e,0)^45?(((t<<2^ke(e,0))<<2^ke(e,1))<<2^ke(e,2))<<2^ke(e,3):0}function xv(e){return e.trim()}function Dt(e,t){return(e=t.exec(e))?e[0]:e}function j(e,t,n){return e.replace(t,n)}function Na(e,t,n){return e.indexOf(t,n)}function ke(e,t){return e.charCodeAt(t)|0}function to(e,t,n){return e.slice(t,n)}function bt(e){return e.length}function Ev(e){return e.length}function Do(e,t){return t.push(e),e}function t6(e,t){return e.map(t).join("")}function Rp(e,t){return e.filter(function(n){return!Dt(n,t)})}var Ql=1,no=1,wv=0,ut=0,ye=0,mo="";function Xl(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ql,column:no,length:l,return:"",siblings:s}}function Jt(e,t){return Eu(Xl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function mr(e){for(;e.root;)e=Jt(e.root,{children:[e]});Do(e,e.siblings)}function n6(){return ye}function r6(){return ye=ut>0?ke(mo,--ut):0,no--,ye===10&&(no=1,Ql--),ye}function yt(){return ye=ut<wv?ke(mo,ut++):0,no++,ye===10&&(no=1,Ql++),ye}function Zn(){return ke(mo,ut)}function za(){return ut}function ql(e,t){return to(mo,e,t)}function wu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function o6(e){return Ql=no=1,wv=bt(mo=e),ut=0,[]}function i6(e){return mo="",e}function _s(e){return xv(ql(ut-1,bu(e===91?e+2:e===40?e+1:e)))}function a6(e){for(;(ye=Zn())&&ye<33;)yt();return wu(e)>2||wu(ye)>3?"":" "}function l6(e,t){for(;--t&&yt()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return ql(e,za()+(t<6&&Zn()==32&&yt()==32))}function bu(e){for(;yt();)switch(ye){case e:return ut;case 34:case 39:e!==34&&e!==39&&bu(ye);break;case 40:e===41&&bu(e);break;case 92:yt();break}return ut}function s6(e,t){for(;yt()&&e+ye!==47+10;)if(e+ye===42+42&&Zn()===47)break;return"/*"+ql(t,ut-1)+"*"+em(e===47?e:yt())}function c6(e){for(;!wu(Zn());)yt();return ql(e,ut)}function u6(e){return i6(Ma("",null,null,null,[""],e=o6(e),0,[0],e))}function Ma(e,t,n,r,o,i,l,s,c){for(var u=0,d=0,m=l,p=0,h=0,E=0,w=1,S=1,g=1,v=0,y="",x=o,k=i,T=r,C=y;S;)switch(E=v,v=yt()){case 40:if(E!=108&&ke(C,m-1)==58){Na(C+=j(_s(v),"&","&\f"),"&\f",yv(u?s[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:C+=_s(v);break;case 9:case 10:case 13:case 32:C+=a6(E);break;case 92:C+=l6(za()-1,7);continue;case 47:switch(Zn()){case 42:case 47:Do(d6(s6(yt(),za()),t,n,c),c);break;default:C+="/"}break;case 123*w:s[u++]=bt(C)*g;case 125*w:case 59:case 0:switch(v){case 0:case 125:S=0;case 59+d:g==-1&&(C=j(C,/\f/g,"")),h>0&&bt(C)-m&&Do(h>32?zp(C+";",r,n,m-1,c):zp(j(C," ","")+";",r,n,m-2,c),c);break;case 59:C+=";";default:if(Do(T=Np(C,t,n,u,d,o,s,y,x=[],k=[],m,i),i),v===123)if(d===0)Ma(C,t,T,T,x,i,m,s,k);else switch(p===99&&ke(C,3)===110?100:p){case 100:case 108:case 109:case 115:Ma(e,T,T,r&&Do(Np(e,T,T,0,0,o,s,y,o,x=[],m,k),k),o,k,m,s,r?x:k);break;default:Ma(C,T,T,T,[""],k,0,s,k)}}u=d=h=0,w=g=1,y=C="",m=l;break;case 58:m=1+bt(C),h=E;default:if(w<1){if(v==123)--w;else if(v==125&&w++==0&&r6()==125)continue}switch(C+=em(v),v*w){case 38:g=d>0?1:(C+="\f",-1);break;case 44:s[u++]=(bt(C)-1)*g,g=1;break;case 64:Zn()===45&&(C+=_s(yt())),p=Zn(),d=m=bt(y=C+=c6(za())),v++;break;case 45:E===45&&bt(C)==2&&(w=0)}}return i}function Np(e,t,n,r,o,i,l,s,c,u,d,m){for(var p=o-1,h=o===0?i:[""],E=Ev(h),w=0,S=0,g=0;w<r;++w)for(var v=0,y=to(e,p+1,p=yv(S=l[w])),x=e;v<E;++v)(x=xv(S>0?h[v]+" "+y:j(y,/&\f/g,h[v])))&&(c[g++]=x);return Xl(e,t,n,o===0?Kl:s,c,u,d,m)}function d6(e,t,n,r){return Xl(e,t,n,gv,em(n6()),to(e,2,-2),0,r)}function zp(e,t,n,r,o){return Xl(e,t,n,Jd,to(e,0,r),to(e,r+1,-1),r,o)}function bv(e,t,n){switch(e6(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return Wo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+Wo+e+te+e+e;case 5936:switch(ke(e,t+11)){case 114:return K+e+te+j(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+te+j(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+te+j(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+te+e+e;case 6165:return K+e+te+"flex-"+e+e;case 5187:return K+e+j(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+te+"flex-$1$2")+e;case 5443:return K+e+te+"flex-item-"+j(e,/flex-|-self/g,"")+(Dt(e,/flex-|baseline/)?"":te+"grid-row-"+j(e,/flex-|-self/g,""))+e;case 4675:return K+e+te+"flex-line-pack"+j(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+te+j(e,"shrink","negative")+e;case 5292:return K+e+te+j(e,"basis","preferred-size")+e;case 6060:return K+"box-"+j(e,"-grow","")+K+e+te+j(e,"grow","positive")+e;case 4554:return K+j(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return j(j(j(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return j(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return j(j(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!Dt(e,/flex-|baseline/))return te+"grid-column-align"+to(e,t)+e;break;case 2592:case 3360:return te+j(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Dt(r.props,/grid-\w+-end/)})?~Na(e+(n=n[t].value),"span",0)?e:te+j(e,"-start","")+e+te+"grid-row-span:"+(~Na(n,"span",0)?Dt(n,/\d+/):+Dt(n,/\d+/)-+Dt(e,/\d+/))+";":te+j(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Dt(r.props,/grid-\w+-start/)})?e:te+j(j(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return j(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bt(e)-1-t>6)switch(ke(e,t+1)){case 109:if(ke(e,t+4)!==45)break;case 102:return j(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+Wo+(ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Na(e,"stretch",0)?bv(j(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return j(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,c,u){return te+o+":"+i+u+(l?te+o+"-span:"+(s?c:+c-+i)+u:"")+e});case 4949:if(ke(e,t+6)===121)return j(e,":",":"+K)+e;break;case 6444:switch(ke(e,ke(e,14)===45?18:11)){case 120:return j(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(ke(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+te+"$2box$3")+e;case 100:return j(e,":",":"+te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return j(e,"scroll-","scroll-snap-")+e}return e}function xl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function m6(e,t,n,r){switch(e.type){case Jw:if(e.children.length)break;case Zw:case Jd:return e.return=e.return||e.value;case gv:return"";case vv:return e.return=e.value+"{"+xl(e.children,r)+"}";case Kl:if(!bt(e.value=e.props.join(",")))return""}return bt(n=xl(e.children,r))?e.return=e.value+"{"+n+"}":""}function f6(e){var t=Ev(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function p6(e){return function(t){t.root||(t=t.return)&&e(t)}}function h6(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Jd:e.return=bv(e.value,e.length,n);return;case vv:return xl([Jt(e,{value:j(e.value,"@","@"+K)})],r);case Kl:if(e.length)return t6(n=e.props,function(o){switch(Dt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mr(Jt(e,{props:[j(o,/:(read-\w+)/,":"+Wo+"$1")]})),mr(Jt(e,{props:[o]})),Eu(e,{props:Rp(n,r)});break;case"::placeholder":mr(Jt(e,{props:[j(o,/:(plac\w+)/,":"+K+"input-$1")]})),mr(Jt(e,{props:[j(o,/:(plac\w+)/,":"+Wo+"$1")]})),mr(Jt(e,{props:[j(o,/:(plac\w+)/,te+"input-$1")]})),mr(Jt(e,{props:[o]})),Eu(e,{props:Rp(n,r)});break}return""})}}var g6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ro=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Sv="active",kv="data-styled-version",Zl="6.1.19",tm=`/*!sc*/
`,El=typeof window<"u"&&typeof document<"u",v6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Jl=Object.freeze([]),oo=Object.freeze({});function y6(e,t,n){return n===void 0&&(n=oo),e.theme!==n.theme&&e.theme||t||n.theme}var Cv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),x6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,E6=/(^-|-$)/g;function Mp(e){return e.replace(x6,"-").replace(E6,"")}var w6=/(a)(d)/gi,Zi=52,Ip=function(e){return String.fromCharCode(e+(e>25?39:97))};function Su(e){var t,n="";for(t=Math.abs(e);t>Zi;t=t/Zi|0)n=Ip(t%Zi)+n;return(Ip(t%Zi)+n).replace(w6,"$1-$2")}var Us,Pv=5381,$r=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Tv=function(e){return $r(Pv,e)};function b6(e){return Su(Tv(e)>>>0)}function S6(e){return e.displayName||e.name||"Component"}function Hs(e){return typeof e=="string"&&!0}var Lv=typeof Symbol=="function"&&Symbol.for,Fv=Lv?Symbol.for("react.memo"):60115,k6=Lv?Symbol.for("react.forward_ref"):60112,C6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},P6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Av={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},T6=((Us={})[k6]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Us[Fv]=Av,Us);function Vp(e){return("type"in(t=e)&&t.type.$$typeof)===Fv?Av:"$$typeof"in e?T6[e.$$typeof]:C6;var t}var L6=Object.defineProperty,F6=Object.getOwnPropertyNames,Op=Object.getOwnPropertySymbols,A6=Object.getOwnPropertyDescriptor,D6=Object.getPrototypeOf,$p=Object.prototype;function Dv(e,t,n){if(typeof t!="string"){if($p){var r=D6(t);r&&r!==$p&&Dv(e,r,n)}var o=F6(t);Op&&(o=o.concat(Op(t)));for(var i=Vp(e),l=Vp(t),s=0;s<o.length;++s){var c=o[s];if(!(c in P6||n&&n[c]||l&&c in l||i&&c in i)){var u=A6(t,c);try{L6(e,c,u)}catch{}}}}return e}function io(e){return typeof e=="function"}function nm(e){return typeof e=="object"&&"styledComponentId"in e}function Kn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Bp(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function pi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ku(e,t,n){if(n===void 0&&(n=!1),!n&&!pi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ku(e[r],t[r]);else if(pi(t))for(var r in t)e[r]=ku(e[r],t[r]);return e}function rm(e,t){Object.defineProperty(e,"toString",{value:t})}function Ai(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var R6=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Ai(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),c=(l=0,n.length);l<c;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(tm);return n},e}(),Ia=new Map,wl=new Map,Va=1,Ji=function(e){if(Ia.has(e))return Ia.get(e);for(;wl.has(Va);)Va++;var t=Va++;return Ia.set(e,t),wl.set(t,e),t},N6=function(e,t){Va=t+1,Ia.set(e,t),wl.set(t,e)},z6="style[".concat(ro,"][").concat(kv,'="').concat(Zl,'"]'),M6=new RegExp("^".concat(ro,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),I6=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},V6=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(tm),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var c=s.match(M6);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(N6(d,u),I6(e,d,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}},jp=function(e){for(var t=document.querySelectorAll(z6),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(ro)!==Sv&&(V6(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function O6(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Rv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var c=Array.from(s.querySelectorAll("style[".concat(ro,"]")));return c[c.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(ro,Sv),r.setAttribute(kv,Zl);var l=O6();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},$6=function(){function e(t){this.element=Rv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw Ai(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),B6=function(){function e(t){this.element=Rv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),j6=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),_p=El,_6={isServer:!El,useCSSOMInjection:!v6},Nv=function(){function e(t,n,r){t===void 0&&(t=oo),n===void 0&&(n={});var o=this;this.options=_e(_e({},_6),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&El&&_p&&(_p=!1,jp(this)),rm(this,function(){return function(i){for(var l=i.getTag(),s=l.length,c="",u=function(m){var p=function(g){return wl.get(g)}(m);if(p===void 0)return"continue";var h=i.names.get(p),E=l.getGroup(m);if(h===void 0||!h.size||E.length===0)return"continue";var w="".concat(ro,".g").concat(m,'[id="').concat(p,'"]'),S="";h!==void 0&&h.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),c+="".concat(E).concat(w,'{content:"').concat(S,'"}').concat(tm)},d=0;d<s;d++)u(d);return c}(o)})}return e.registerId=function(t){return Ji(t)},e.prototype.rehydrate=function(){!this.server&&El&&jp(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(_e(_e({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new j6(o):r?new $6(o):new B6(o)}(this.options),new R6(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ji(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ji(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ji(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),U6=/&/g,H6=/^\s*\/\/.*$/gm;function zv(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=zv(n.children,t)),n})}function W6(e){var t,n,r,o=e===void 0?oo:e,i=o.options,l=i===void 0?oo:i,s=o.plugins,c=s===void 0?Jl:s,u=function(p,h,E){return E.startsWith(n)&&E.endsWith(n)&&E.replaceAll(n,"").length>0?".".concat(t):p},d=c.slice();d.push(function(p){p.type===Kl&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(U6,n).replace(r,u))}),l.prefix&&d.push(h6),d.push(m6);var m=function(p,h,E,w){h===void 0&&(h=""),E===void 0&&(E=""),w===void 0&&(w="&"),t=w,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var S=p.replace(H6,""),g=u6(E||h?"".concat(E," ").concat(h," { ").concat(S," }"):S);l.namespace&&(g=zv(g,l.namespace));var v=[];return xl(g,f6(d.concat(p6(function(y){return v.push(y)})))),v};return m.hash=c.length?c.reduce(function(p,h){return h.name||Ai(15),$r(p,h.name)},Pv).toString():"",m}var G6=new Nv,Cu=W6(),Mv=a.createContext({shouldForwardProp:void 0,styleSheet:G6,stylis:Cu});Mv.Consumer;a.createContext(void 0);function Up(){return b.useContext(Mv)}var Y6=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Cu);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,rm(this,function(){throw Ai(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Cu),this.name+t.hash},e}(),K6=function(e){return e>="A"&&e<="Z"};function Hp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;K6(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Iv=function(e){return e==null||e===!1||e===""},Vv=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Iv(i)&&(Array.isArray(i)&&i.isCss||io(i)?r.push("".concat(Hp(o),":"),i,";"):pi(i)?r.push.apply(r,yl(yl(["".concat(o," {")],Vv(i),!1),["}"],!1)):r.push("".concat(Hp(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in g6||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Jn(e,t,n,r){if(Iv(e))return[];if(nm(e))return[".".concat(e.styledComponentId)];if(io(e)){if(!io(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Jn(o,t,n,r)}var i;return e instanceof Y6?n?(e.inject(n,r),[e.getName(r)]):[e]:pi(e)?Vv(e):Array.isArray(e)?Array.prototype.concat.apply(Jl,e.map(function(l){return Jn(l,t,n,r)})):[e.toString()]}function Q6(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(io(n)&&!nm(n))return!1}return!0}var X6=Tv(Zl),q6=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Q6(t),this.componentId=n,this.baseHash=$r(X6,n),this.baseStyle=r,Nv.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Kn(o,this.staticRulesId);else{var i=Bp(Jn(this.rules,t,n,r)),l=Su($r(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=Kn(o,l),this.staticRulesId=l}else{for(var c=$r(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var m=this.rules[d];if(typeof m=="string")u+=m;else if(m){var p=Bp(Jn(m,t,n,r));c=$r(c,p+d),u+=p}}if(u){var h=Su(c>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(u,".".concat(h),void 0,this.componentId)),o=Kn(o,h)}}return o},e}(),Ov=a.createContext(void 0);Ov.Consumer;var Ws={};function Z6(e,t,n){var r=nm(e),o=e,i=!Hs(e),l=t.attrs,s=l===void 0?Jl:l,c=t.componentId,u=c===void 0?function(x,k){var T=typeof x!="string"?"sc":Mp(x);Ws[T]=(Ws[T]||0)+1;var C="".concat(T,"-").concat(b6(Zl+T+Ws[T]));return k?"".concat(k,"-").concat(C):C}(t.displayName,t.parentComponentId):c,d=t.displayName,m=d===void 0?function(x){return Hs(x)?"styled.".concat(x):"Styled(".concat(S6(x),")")}(e):d,p=t.displayName&&t.componentId?"".concat(Mp(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,E=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;E=function(x,k){return w(x,k)&&S(x,k)}}else E=w}var g=new q6(n,p,r?o.componentStyle:void 0);function v(x,k){return function(T,C,F){var M=T.attrs,I=T.componentStyle,R=T.defaultProps,_=T.foldedComponentIds,G=T.styledComponentId,H=T.target,ie=a.useContext(Ov),Y=Up(),he=T.shouldForwardProp||Y.shouldForwardProp,L=y6(C,ie,R)||oo,P=function($e,Z,et){for(var zn,dt=_e(_e({},Z),{className:void 0,theme:et}),Gt=0;Gt<$e.length;Gt+=1){var tt=io(zn=$e[Gt])?zn(dt):zn;for(var Tt in tt)dt[Tt]=Tt==="className"?Kn(dt[Tt],tt[Tt]):Tt==="style"?_e(_e({},dt[Tt]),tt[Tt]):tt[Tt]}return Z.className&&(dt.className=Kn(dt.className,Z.className)),dt}(M,C,L),D=P.as||H,N={};for(var $ in P)P[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&P.theme===L||($==="forwardedAs"?N.as=P.forwardedAs:he&&!he($,D)||(N[$]=P[$]));var ge=function($e,Z){var et=Up(),zn=$e.generateAndInjectStyles(Z,et.styleSheet,et.stylis);return zn}(I,P),ue=Kn(_,G);return ge&&(ue+=" "+ge),P.className&&(ue+=" "+P.className),N[Hs(D)&&!Cv.has(D)?"class":"className"]=ue,F&&(N.ref=F),b.createElement(D,N)}(y,x,k)}v.displayName=m;var y=a.forwardRef(v);return y.attrs=h,y.componentStyle=g,y.displayName=m,y.shouldForwardProp=E,y.foldedComponentIds=r?Kn(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=p,y.target=r?o.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(k){for(var T=[],C=1;C<arguments.length;C++)T[C-1]=arguments[C];for(var F=0,M=T;F<M.length;F++)ku(k,M[F],!0);return k}({},o.defaultProps,x):x}}),rm(y,function(){return".".concat(y.styledComponentId)}),i&&Dv(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Wp(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Gp=function(e){return Object.assign(e,{isCss:!0})};function J6(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(io(e)||pi(e))return Gp(Jn(Wp(Jl,yl([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Jn(r):Gp(Jn(Wp(r,t)))}function Pu(e,t,n){if(n===void 0&&(n=oo),!t)throw Ai(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,J6.apply(void 0,yl([o],i,!1)))};return r.attrs=function(o){return Pu(e,t,_e(_e({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Pu(e,t,_e(_e({},n),o))},r}var $v=function(e){return Pu(Z6,e)},f=$v;Cv.forEach(function(e){f[e]=$v(e)});const e8=f.header`
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,t8=f.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,n8=f(X)`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,r8=f.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`,o8=f.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${e=>e.isOpen?"0":"-100%"};
    width: 70%;
    height: 100vh;
    background: var(--surface);
    flex-direction: column;
    justify-content: center;
    transition: right 0.3s ease;
    z-index: 101;
    box-shadow: ${e=>e.isOpen?"-5px 0 15px rgba(0,0,0,0.2)":"none"};
  }
`,fr=f(X)`
  position: relative;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`,i8=f.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 102;

  @media (max-width: 768px) {
    display: block;
  }
`,a8=f.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,Yp=f(X)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
`,l8=()=>{const[e,t]=b.useState(!1),{isAuthenticated:n}=b.useContext(Cd);An();const r=()=>{t(!e)},o=()=>{t(!1)};return a.createElement(e8,null,a.createElement("div",{className:"container"},a.createElement(t8,null,a.createElement(n8,{to:"/"},a.createElement(r8,null,"FE"),a.createElement("span",null,"Frantz Enterprise")),a.createElement(i8,{onClick:r},a.createElement(Bw,null)),a.createElement(o8,{isOpen:e},a.createElement(a8,{onClick:o},a.createElement(Li,null)),a.createElement(fr,{to:"/",onClick:o},"Home"),a.createElement(fr,{to:"/products",onClick:o},"Products"),a.createElement(fr,{to:"/subscriptions",onClick:o},"Subscriptions"),a.createElement(fr,{to:"/reviews",onClick:o},"Reviews"),a.createElement(fr,{to:"/about",onClick:o},"About"),a.createElement(fr,{to:"/contact",onClick:o},"Contact"),n?a.createElement(Yp,{to:"/admin",onClick:o},a.createElement(xu,null),"Dashboard"):a.createElement(Yp,{to:"/login",onClick:o},a.createElement(xu,null),"Admin Login")))))},s8=f.footer`
  background-color: var(--surface);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
`,c8=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,Gs=f.div`
  display: flex;
  flex-direction: column;
`,Ys=f.h3`
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
`,u8=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,So=f(X)`
  color: var(--text-secondary);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`,d8=f.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,ea=f.a`
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
`,Kp=f.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
`,Qp=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--surface-light);
  color: var(--primary);
`,m8=f.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--surface-light);
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
`,f8=()=>{const e=new Date().getFullYear();return a.createElement(s8,null,a.createElement("div",{className:"container"},a.createElement(c8,null,a.createElement(Gs,null,a.createElement(Ys,null,"About Us"),a.createElement("p",{style:{color:"var(--text-secondary)",marginBottom:"1.5rem"}},"Frantz Enterprise is an independent affiliate marketing company specializing in promoting high-quality digital products and SaaS subscriptions."),a.createElement(d8,null,a.createElement(ea,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer"},a.createElement(Iw,null)),a.createElement(ea,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer"},a.createElement($w,null)),a.createElement(ea,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer"},a.createElement(Vw,null)),a.createElement(ea,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer"},a.createElement(Ow,null)))),a.createElement(Gs,null,a.createElement(Ys,null,"Quick Links"),a.createElement(u8,null,a.createElement(So,{to:"/"},"Home"),a.createElement(So,{to:"/about"},"About"),a.createElement(So,{to:"/products"},"Products"),a.createElement(So,{to:"/subscriptions"},"Subscriptions"),a.createElement(So,{to:"/contact"},"Contact"))),a.createElement(Gs,null,a.createElement(Ys,null,"Contact Info"),a.createElement(Kp,null,a.createElement(Qp,null,a.createElement(Zd,null)),a.createElement("div",null,a.createElement("p",{style:{margin:0}},"Email"),a.createElement("a",{href:"mailto:Robert@FrantzEnterprise.com",style:{color:"var(--primary)"}},"Robert@FrantzEnterprise.com"))),a.createElement(Kp,null,a.createElement(Qp,null,a.createElement(pv,null)),a.createElement("div",null,a.createElement("p",{style:{margin:0}},"Location"),a.createElement("p",{style:{margin:0}},"West Sacramento, CA"))))),a.createElement(m8,null,a.createElement("p",null,"© ",e," Frantz Enterprise. All rights reserved. |",a.createElement("span",{style:{marginLeft:"0.5rem"}},"Frantz Enterprise is not affiliated with Facebook, Google, or any brand featured on this website.")))))},p8=f.section`
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
`,h8=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,g8=f(V.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,v8=f(V.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.7;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`,y8=f(V.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,x8=f(X)`
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
`,E8=f(X)`
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
`,Xp=f(V.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  opacity: 0.1;
  z-index: -1;
`,w8=()=>a.createElement(p8,null,a.createElement(Xp,{initial:{x:-100,y:-100},animate:{x:[-100,50,-100],y:[-100,50,-100]},transition:{repeat:1/0,duration:20,ease:"easeInOut"},style:{width:"300px",height:"300px",top:"20%",left:"10%"}}),a.createElement(Xp,{initial:{x:100,y:100},animate:{x:[100,-50,100],y:[100,-50,100]},transition:{repeat:1/0,duration:25,ease:"easeInOut"},style:{width:"400px",height:"400px",bottom:"10%",right:"5%"}}),a.createElement("div",{className:"container"},a.createElement(h8,null,a.createElement(g8,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6}},a.createElement("span",{className:"gradient-text"},"Elevate Your Digital Success")," with Premium Affiliate Products"),a.createElement(v8,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2}},"Frantz Enterprise curates the best digital tools and services to help you grow your business. As an independent affiliate marketer, we provide honest recommendations for software that delivers real results."),a.createElement(y8,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4}},a.createElement(x8,{to:"/products"},"Explore Products ",a.createElement(dv,null)),a.createElement(E8,{to:"/about"},"Learn More"))))),b8=e=>e?e.startsWith("data:")||e.startsWith("/")||e.startsWith("./")?e:e.startsWith("http")?`https://corsproxy.io/?${encodeURIComponent(e)}`:e:null,S8=e=>!e||!e.startsWith("http")?e:`https://api.allorigins.win/raw?url=${encodeURIComponent(e)}`,Ks=e=>new Promise(t=>{const n=new Image;n.onload=()=>t(!0),n.onerror=()=>t(!1),n.src=e,setTimeout(()=>t(!1),5e3)}),k8=f(V.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`,C8=f.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  background-color: var(--surface-light);
  display: flex;
  align-items: center;
  justify-content: center;
  
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
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`,qp=f.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--surface-light) 0%, var(--surface) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
  text-align: center;
  padding: 1rem;
  flex-direction: column;
  gap: 0.5rem;
  
  .icon {
    font-size: 2rem;
    opacity: 0.5;
  }
`,P8=f.div`
  width: 40px;
  height: 40px;
  border: 3px solid var(--surface-light);
  border-top: 3px solid var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,T8=f.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`,L8=f.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  color: var(--text);
`,F8=f.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.5;
`,A8=f.a`
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
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
  
  &.disabled {
    background: var(--surface-light);
    color: var(--text-secondary);
    cursor: not-allowed;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`,D8=f.div`
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
`,R8=f.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(15, 23, 42, 0.8);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 10;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`,N8=f.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(34, 197, 94, 0.9);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 10;
  backdrop-filter: blur(4px);
`,z8={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},Bv=({product:e})=>{const[t,n]=b.useState("loading"),[r,o]=b.useState(null);console.log("ProductCard received product:",e);const i=e.image||e.imageUrl||e.img;console.log("Original image URL:",i),b.useEffect(()=>{(async()=>{if(!i){n("error");return}if(n("loading"),console.log("Testing original URL:",i),await Ks(i)){console.log("Original URL works:",i),o(i),n("loaded");return}const d=b8(i);if(console.log("Testing proxied URL:",d),await Ks(d)){console.log("Proxied URL works:",d),o(d),n("loaded");return}const p=S8(i);if(console.log("Testing alternative proxied URL:",p),await Ks(p)){console.log("Alternative proxied URL works:",p),o(p),n("loaded");return}console.error("All image loading attempts failed for:",i),n("error")})()},[i]);const l=c=>{!e.link&&!e.affiliateLink&&c.preventDefault()},s=()=>{switch(t){case"loading":return a.createElement(qp,null,a.createElement(P8,null),a.createElement("div",null,"Loading image..."));case"loaded":return a.createElement("img",{src:r,alt:e.title||e.name||"Product image",onLoad:()=>console.log("Image rendered successfully:",r),onError:c=>{console.error("Image render failed:",r),n("error")}});case"error":default:return a.createElement(qp,null,a.createElement("div",{className:"icon"},"📷"),a.createElement("div",null,"Image unavailable"),a.createElement("small",null,e.title||e.name||"Untitled Product"))}};return a.createElement(k8,{variants:z8,initial:"hidden",animate:"visible",whileHover:{y:-5}},e.featured&&a.createElement(D8,null,"Featured"),e.category&&a.createElement(R8,null,e.category),e.price&&a.createElement(N8,null,"$",e.price),a.createElement(C8,null,s()),a.createElement(T8,null,a.createElement(L8,null,e.title||e.name||"Untitled Product"),a.createElement(F8,null,e.description||"No description available for this product."),a.createElement(A8,{href:e.link||e.affiliateLink||"#",target:e.link||e.affiliateLink?"_blank":"_self",rel:e.link||e.affiliateLink?"noopener noreferrer":"",className:e.link||e.affiliateLink?"":"disabled",onClick:l},e.link||e.affiliateLink?"Learn More":"No Link Available"," ",a.createElement(Uw,null))))},M8=f.section`
  padding: 5rem 0;
`,I8=f.div`
  text-align: center;
  margin-bottom: 3rem;
`,V8=f.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,O8=f.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`,$8=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,B8=f(X)`
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
`,j8={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},_8=()=>{const{products:e}=b.useContext(Ei),t=e.filter(n=>n.featured).slice(0,3);return a.createElement(M8,null,a.createElement("div",{className:"container"},a.createElement(I8,null,a.createElement(V.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6}},a.createElement(V8,null,"Featured ",a.createElement("span",{className:"gradient-text"},"Products")),a.createElement(O8,null,"Discover our hand-picked selection of premium digital tools and services that can transform your business and boost your productivity."))),a.createElement(V.div,{variants:j8,initial:"hidden",whileInView:"visible",viewport:{once:!0}},a.createElement($8,null,t.map(n=>a.createElement(Bv,{key:n.id,product:n})))),a.createElement(V.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4}},a.createElement(B8,{to:"/products"},"View All Products ",a.createElement(dv,null)))))},U8=f.section`
  padding: 5rem 0;
`,H8=f.div`
  text-align: center;
  margin-bottom: 3rem;
`,W8=f.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,G8=f.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`,Y8=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,ta=f(V.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
  }
`,na=f.div`
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
`,ra=f.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,oa=f.p`
  color: var(--text-secondary);
  line-height: 1.7;
`,K8=f.section`
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
`,Q8=f.div`
  text-align: center;
  position: relative;
  z-index: 1;
`,X8=f.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,q8=f.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.7;
`,Z8=f.a`
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
`,J8={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},ia={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},eb=()=>a.createElement(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},a.createElement(w8,null),a.createElement(_8,null),a.createElement(U8,null,a.createElement("div",{className:"container"},a.createElement(H8,null,a.createElement(V.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6}},a.createElement(W8,null,"Why Choose ",a.createElement("span",{className:"gradient-text"},"Frantz Enterprise")),a.createElement(G8,null,"As an independent affiliate marketer, we're committed to providing honest recommendations and exceptional service."))),a.createElement(V.div,{variants:J8,initial:"hidden",whileInView:"visible",viewport:{once:!0}},a.createElement(Y8,null,a.createElement(ta,{variants:ia},a.createElement(na,null,a.createElement(Yw,null)),a.createElement(ra,null,"Premium Selection"),a.createElement(oa,null,"We carefully curate only the highest quality digital products and services that deliver real results for your business.")),a.createElement(ta,{variants:ia},a.createElement(na,null,a.createElement(qw,null)),a.createElement(ra,null,"Complete Transparency"),a.createElement(oa,null,"As an independent affiliate marketer, we provide honest recommendations without corporate influence or bias.")),a.createElement(ta,{variants:ia},a.createElement(na,null,a.createElement(Xw,null)),a.createElement(ra,null,"Verified Quality"),a.createElement(oa,null,"Every product we recommend has been thoroughly vetted to ensure it meets our high standards for quality and value.")),a.createElement(ta,{variants:ia},a.createElement(na,null,a.createElement(Hw,null)),a.createElement(ra,null,"Dedicated Support"),a.createElement(oa,null,"Our team is always available to help you find the right solutions for your specific needs and answer any questions.")))))),a.createElement("div",{className:"container"},a.createElement(K8,null,a.createElement("div",{className:"container"},a.createElement(Q8,null,a.createElement(V.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6}},a.createElement(X8,null,"Ready to ",a.createElement("span",{className:"gradient-text"},"Transform Your Business"),"?"),a.createElement(q8,null,"Explore our curated selection of premium digital tools and services that can help you grow, optimize, and succeed in today's competitive landscape."),a.createElement(Z8,{href:"/products"},"Browse Products"))))))),tb=f.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 3rem;
`,nb=f.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,rb=f.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`,Zp=f.section`
  padding: 4rem 0;
`,ob=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ib=f.div`
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
`,Jp=f.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
`,ab=f.ul`
  list-style: none;
  margin-top: 2rem;
`,aa=f.li`
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
`,lb=f.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: 1rem;
  margin: 3rem 0;
`,sb=f.div`
  text-align: center;
  margin-bottom: 3rem;
`,cb=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Qs=f(V.div)`
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
`,ub={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},Xs={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},db=()=>a.createElement(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},a.createElement("div",{className:"container"},a.createElement(tb,null,a.createElement(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6}},a.createElement(nb,null,"About ",a.createElement("span",{className:"gradient-text"},"Frantz Enterprise")),a.createElement(rb,null,"Learn more about our mission, values, and commitment to providing the best affiliate marketing solutions."))),a.createElement(Zp,null,a.createElement(ob,null,a.createElement(V.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6}},a.createElement(ib,null,a.createElement("img",{src:"https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:"Frantz Enterprise Team"}))),a.createElement(V.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6}},a.createElement(Jp,null,a.createElement("h2",null,"Our Story"),a.createElement("p",null,"Frantz Enterprise was founded with a simple mission: to help businesses and individuals find the best digital tools and services to grow and succeed in today's competitive landscape."),a.createElement("p",null,"As an independent affiliate marketer, we pride ourselves on providing honest, unbiased recommendations based on thorough research and testing. We're not affiliated with Facebook, Google, or any major brands - which means we can offer truly objective advice."),a.createElement("p",null,"Our team consists of digital marketing experts, software developers, and business consultants who understand the challenges modern businesses face and the solutions that can help overcome them."))))),a.createElement(Zp,null,a.createElement(V.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6}},a.createElement(Jp,null,a.createElement("h2",null,"Our Values"),a.createElement("p",null,"At Frantz Enterprise, we're guided by a set of core values that define how we operate and serve our customers."),a.createElement(ab,null,a.createElement(aa,null,a.createElement("div",{className:"icon"},a.createElement(Yn,null)),a.createElement("div",{className:"content"},a.createElement("h4",null,"Transparency"),a.createElement("p",null,"We're completely transparent about our affiliate relationships. We earn commissions on some products we recommend, but this never influences our recommendations."))),a.createElement(aa,null,a.createElement("div",{className:"icon"},a.createElement(Yn,null)),a.createElement("div",{className:"content"},a.createElement("h4",null,"Quality Over Quantity"),a.createElement("p",null,"We only recommend products and services that meet our high standards for quality, reliability, and value. If we wouldn't use it ourselves, we won't recommend it."))),a.createElement(aa,null,a.createElement("div",{className:"icon"},a.createElement(Yn,null)),a.createElement("div",{className:"content"},a.createElement("h4",null,"Customer-First Approach"),a.createElement("p",null,"Your success is our success. We focus on understanding your needs and recommending solutions that will truly help you achieve your goals."))),a.createElement(aa,null,a.createElement("div",{className:"icon"},a.createElement(Yn,null)),a.createElement("div",{className:"content"},a.createElement("h4",null,"Continuous Improvement"),a.createElement("p",null,"The digital landscape is always evolving, and so are we. We continuously research and test new products to ensure our recommendations stay current and valuable."))))))),a.createElement(lb,null,a.createElement("div",{className:"container"},a.createElement(sb,null,a.createElement(V.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6}},a.createElement("h2",null,"What Our Clients Say"))),a.createElement(V.div,{variants:ub,initial:"hidden",whileInView:"visible",viewport:{once:!0}},a.createElement(cb,null,a.createElement(Qs,{variants:Xs},a.createElement("div",{className:"quote-icon"},a.createElement(js,null)),a.createElement("p",{className:"content"},'"Frantz Enterprise recommended an email marketing tool that increased our open rates by 35%. Their honest advice saved us from investing in the wrong solution."'),a.createElement("div",{className:"author"},a.createElement("div",{className:"avatar"},a.createElement("img",{src:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:"Client"})),a.createElement("div",{className:"info"},a.createElement("h4",null,"Michael Johnson"),a.createElement("p",null,"Marketing Director, TechStart")))),a.createElement(Qs,{variants:Xs},a.createElement("div",{className:"quote-icon"},a.createElement(js,null)),a.createElement("p",{className:"content"},`"I appreciate that Frantz Enterprise is transparent about being an affiliate marketer. Their recommendations are genuinely helpful, and I've seen real results from the tools they suggested."`),a.createElement("div",{className:"author"},a.createElement("div",{className:"avatar"},a.createElement("img",{src:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:"Client"})),a.createElement("div",{className:"info"},a.createElement("h4",null,"Sarah Williams"),a.createElement("p",null,"Founder, Bloom Boutique")))),a.createElement(Qs,{variants:Xs},a.createElement("div",{className:"quote-icon"},a.createElement(js,null)),a.createElement("p",{className:"content"},'"The SEO tools recommended by Frantz Enterprise helped us climb from page 5 to page 1 in Google search results. Their expertise in digital marketing solutions is impressive."'),a.createElement("div",{className:"author"},a.createElement("div",{className:"avatar"},a.createElement("img",{src:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",alt:"Client"})),a.createElement("div",{className:"info"},a.createElement("h4",null,"David Chen"),a.createElement("p",null,"CEO, Horizon Digital")))))))))),mb=f.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 3rem;
`,fb=f.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,pb=f.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`,hb=f.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,gb=f.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  height: 100%;
`,vb=f.h3`
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
`,yb=f.ul`
  list-style: none;
`,qs=f.li`
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
`,xb=f.form`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
`,Eb=f.h3`
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
`,wb=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,la=f.div`
  margin-bottom: 1.5rem;
  
  &.full-width {
    grid-column: 1 / -1;
  }
`,sa=f.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,Zs=f.input`
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
`,bb=f.textarea`
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
`,Sb=f.button`
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
`,kb=f(V.div)`
  background-color: var(--success);
  color: white;
  padding: 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Cb=f.div`
  border-radius: 0.75rem;
  overflow: hidden;
  height: 400px;
  margin-bottom: 4rem;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`,Pb=()=>{const[e,t]=b.useState({name:"",email:"",subject:"",message:""}),[n,r]=b.useState(!1),[o,i]=b.useState(!1),l=c=>{const{name:u,value:d}=c.target;t(m=>({...m,[u]:d}))},s=c=>{c.preventDefault(),r(!0),setTimeout(()=>{r(!1),i(!0),t({name:"",email:"",subject:"",message:""}),setTimeout(()=>{i(!1)},5e3)},1500)};return a.createElement(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},a.createElement("div",{className:"container"},a.createElement(mb,null,a.createElement(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6}},a.createElement(fb,null,"Contact ",a.createElement("span",{className:"gradient-text"},"Us")),a.createElement(pb,null,"Have questions or need assistance? We're here to help. Reach out to our team using the contact information below."))),a.createElement(hb,null,a.createElement(V.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2}},a.createElement(gb,null,a.createElement(vb,null,"Get In Touch"),a.createElement(yb,null,a.createElement(qs,null,a.createElement("div",{className:"icon"},a.createElement(Zd,null)),a.createElement("div",{className:"content"},a.createElement("h4",null,"Email"),a.createElement("a",{href:"mailto:Robert@FrantzEnterprise.com"},"Robert@FrantzEnterprise.com"))),a.createElement(qs,null,a.createElement("div",{className:"icon"},a.createElement(pv,null)),a.createElement("div",{className:"content"},a.createElement("h4",null,"Location"),a.createElement("p",null,"West Sacramento, CA"))),a.createElement(qs,null,a.createElement("div",{className:"icon"},a.createElement(_w,null)),a.createElement("div",{className:"content"},a.createElement("h4",null,"Business Hours"),a.createElement("p",null,"Monday - Friday: 9:00 AM - 5:00 PM",a.createElement("br",null),"Saturday & Sunday: Closed")))))),a.createElement(V.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4}},a.createElement(xb,{onSubmit:s},a.createElement(Eb,null,"Send Us a Message"),o&&a.createElement(kb,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0}},a.createElement(Fp,null)," Your message has been sent successfully! We'll get back to you soon."),a.createElement(wb,null,a.createElement(la,null,a.createElement(sa,{htmlFor:"name"},"Your Name"),a.createElement(Zs,{type:"text",id:"name",name:"name",value:e.name,onChange:l,required:!0})),a.createElement(la,null,a.createElement(sa,{htmlFor:"email"},"Email Address"),a.createElement(Zs,{type:"email",id:"email",name:"email",value:e.email,onChange:l,required:!0})),a.createElement(la,{className:"full-width"},a.createElement(sa,{htmlFor:"subject"},"Subject"),a.createElement(Zs,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:l,required:!0})),a.createElement(la,{className:"full-width"},a.createElement(sa,{htmlFor:"message"},"Your Message"),a.createElement(bb,{id:"message",name:"message",value:e.message,onChange:l,required:!0}))),a.createElement(Sb,{type:"submit",disabled:n},n?"Sending...":"Send Message"," ",a.createElement(Fp,null))))),a.createElement(V.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6}},a.createElement(Cb,null,a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d-121.59264795889592!3d38.58025759312696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sWest%20Sacramento%2C%20CA!5e0!3m2!1sen!2sus!4v1655668687967!5m2!1sen!2sus",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Frantz Enterprise Location"})))))},Tb=f.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 3rem;
`,Lb=f.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Fb=f.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`,Ab=f.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  
  &:hover {
    background: var(--secondary);
    transform: scale(1.1);
  }
`,Db=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,Rb=f.div`
  flex: 1;
  position: relative;
  min-width: 250px;
`,Nb=f.input`
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
`,zb=f.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,Mb=f.select`
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
`,Ib=f.button`
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
`,Vb=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Ob=f.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`,$b=f.div`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
`,Bb={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},jb=()=>{const{products:e,debugProducts:t}=b.useContext(Ei),[n,r]=b.useState(e),[o,i]=b.useState(""),[l,s]=b.useState(""),[c,u]=b.useState(!1),d=lr();b.useEffect(()=>{console.log("ProductsPage - products from context:",e),console.log("ProductsPage - products length:",e==null?void 0:e.length)},[e]);const m=["All",...new Set(e.map(p=>p.category))];return b.useEffect(()=>{const h=new URLSearchParams(d.search).get("category");h&&s(h)},[d]),b.useEffect(()=>{let p=e;o&&(p=p.filter(h=>h.title.toLowerCase().includes(o.toLowerCase())||h.description.toLowerCase().includes(o.toLowerCase()))),l&&l!=="All"&&(p=p.filter(h=>h.category===l)),c&&(p=p.filter(h=>h.featured)),console.log("Filtered products:",p),r(p)},[e,o,l,c]),a.createElement(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},a.createElement("div",{className:"container"},a.createElement(Tb,null,a.createElement(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6}},a.createElement(Lb,null,"Our ",a.createElement("span",{className:"gradient-text"},"Products")),a.createElement(Fb,null,"Explore our curated selection of premium digital tools and services to help your business grow and succeed."))),a.createElement(V.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2}},a.createElement(Db,null,a.createElement(Rb,null,a.createElement(zb,null,a.createElement(Nn,null)),a.createElement(Nb,{type:"text",placeholder:"Search products...",value:o,onChange:p=>i(p.target.value)})),a.createElement(Mb,{value:l,onChange:p=>s(p.target.value)},a.createElement("option",{value:""},"All Categories"),m.map(p=>p!=="All"&&a.createElement("option",{key:p,value:p},p))),a.createElement(Ib,{className:c?"active":"",onClick:()=>u(!c)},a.createElement(Ti,null)," Featured Only"))),a.createElement($b,null,"Showing ",n.length," of ",e.length," products"),n.length>0?a.createElement(V.div,{variants:Bb,initial:"hidden",animate:"visible"},a.createElement(Vb,null,n.map(p=>a.createElement(Bv,{key:p.id,product:p})))):a.createElement(Ob,null,a.createElement("h3",null,"No products found"),a.createElement("p",null,"Try adjusting your search or filter criteria"))),a.createElement(Ab,{onClick:t,title:"Debug Products"},a.createElement(mv,null)))},_b=f.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 3rem;
`,Ub=f.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`,Hb=f.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`,Wb=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,Gb=f.div`
  flex: 1;
  position: relative;
  min-width: 250px;
`,Yb=f.input`
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
`,Kb=f.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,Qb=f.select`
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
`,Xb=f.select`
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
`,qb=f.button`
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
`,Zb=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,jv=f(V.div)`
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
`,Jb=f.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${jv}:hover & img {
    transform: scale(1.05);
  }
`,e7=f.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`,t7=f.div`
  margin-bottom: 1rem;
`,n7=f.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`,r7=f.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,o7=f.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex: 1;
`,i7=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`,a7=f.div`
  font-weight: 600;
  color: var(--accent);
`,l7=f.a`
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
`,s7=f.div`
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
`,c7=f.div`
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
`,u7=f.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`,d7={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},m7=()=>{const{subscriptions:e}=b.useContext(bi),[t,n]=b.useState([]),[r,o]=b.useState(""),[i,l]=b.useState(""),[s,c]=b.useState(""),[u,d]=b.useState(!1),m=[...new Set(e.map(h=>h.category))];b.useEffect(()=>{let h=e;h=h.filter(E=>E.availability.toLowerCase()!=="filled"),r&&(h=h.filter(E=>E.title.toLowerCase().includes(r.toLowerCase())||E.description.toLowerCase().includes(r.toLowerCase()))),i&&(h=h.filter(E=>E.category===i)),s&&(h=h.filter(E=>E.availability.toLowerCase()===s.toLowerCase())),u&&(h=h.filter(E=>E.featured)),n(h)},[e,r,i,s,u]);const p=h=>{switch(h.toLowerCase()){case"open":return"open";case"limited":return"limited";case"filled":return"filled";default:return"open"}};return a.createElement(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},a.createElement("div",{className:"container"},a.createElement(_b,null,a.createElement(Ub,null,"SaaS Subscriptions"),a.createElement(Hb,null,"Discover premium software-as-a-service subscriptions that can help streamline your business operations, boost productivity, and drive growth.")),a.createElement(Wb,null,a.createElement(Gb,null,a.createElement(Kb,null,a.createElement(Nn,null)),a.createElement(Yb,{type:"text",placeholder:"Search subscriptions...",value:r,onChange:h=>o(h.target.value)})),a.createElement(Qb,{value:i,onChange:h=>l(h.target.value)},a.createElement("option",{value:""},"All Categories"),m.map(h=>a.createElement("option",{key:h,value:h},h))),a.createElement(Xb,{value:s,onChange:h=>c(h.target.value)},a.createElement("option",{value:""},"All Availability"),a.createElement("option",{value:"open"},"Open"),a.createElement("option",{value:"limited"},"Limited")),a.createElement(qb,{className:u?"active":"",onClick:()=>d(!u)},a.createElement(Ti,null)," Featured Only")),t.length>0?a.createElement(Zb,null,t.map((h,E)=>a.createElement(jv,{key:h.id,variants:d7,initial:"hidden",animate:"visible",transition:{duration:.5,delay:E*.1}},h.featured&&a.createElement(s7,null,a.createElement(qn,null)," Featured"),a.createElement(c7,{className:p(h.availability)},h.availability),a.createElement(Jb,null,a.createElement("img",{src:h.image,alt:h.title})),a.createElement(e7,null,a.createElement(t7,null,a.createElement(n7,null,h.title),a.createElement(r7,null,h.category)),a.createElement(o7,null,h.description),a.createElement(i7,null,a.createElement(a7,null,h.price),a.createElement(l7,{href:h.link,target:"_blank",rel:"noopener noreferrer"},"Learn More")))))):a.createElement(u7,null,a.createElement("h3",null,"No subscriptions found"),a.createElement("p",null,"Try adjusting your search or filter criteria"))))},f7=f.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 3rem;
`,p7=f.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,h7=f.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`,g7=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,v7=f.div`
  flex: 1;
  position: relative;
  min-width: 250px;
`,y7=f.input`
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
`,x7=f.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,E7=f.select`
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
`,w7=f.button`
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
`,b7=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,_v=f(V.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`,S7=f.div`
  position: relative;
`,k7=f.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  background-color: var(--surface-light);
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0) 50%);
    z-index: 1;
  }
`,C7=f.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  z-index: 2;
  transition: transform 0.3s ease;
  
  ${_v}:hover & {
    transform: translate(-50%, -50%) scale(1.1);
  }
`,P7=f.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 2;
`,T7=f.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`,L7=f.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`,F7=f.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`,A7=f.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
  color: #F59E0B;
`,D7=f.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex: 1;
`,R7=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--surface-light);
  font-size: 0.875rem;
  color: var(--text-secondary);
`,N7=f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,z7=f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,M7=f(X)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  background-size: 200% 100%;
  background-position: 0% 0%;
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background-position: 100% 0%;
    transform: translateY(-2px);
  }
`,I7=f.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`,V7=()=>{const{reviews:e}=Ld(),[t,n]=b.useState(""),[r,o]=b.useState(""),[i,l]=b.useState(!1),s=[...new Set(e.map(m=>m.category))],c=e.filter(m=>{const p=m.title.toLowerCase().includes(t.toLowerCase())||m.content.toLowerCase().includes(t.toLowerCase())||m.productName.toLowerCase().includes(t.toLowerCase()),h=r===""||m.category===r,E=!i||m.featured;return p&&h&&E}),u=()=>{l(!i)},d=(m,p=150)=>{const h=m.replace(/<[^>]+>/g," ");return h.length<=p?h:h.substring(0,p).trim()+"..."};return a.createElement("div",{className:"container"},a.createElement(f7,null,a.createElement(p7,null,"Product ",a.createElement("span",{className:"gradient-text"},"Reviews")),a.createElement(h7,null,"Honest, in-depth reviews of the digital tools and services I've personally tested and evaluated.")),a.createElement(g7,null,a.createElement(v7,null,a.createElement(x7,null,a.createElement(Nn,null)),a.createElement(y7,{type:"text",placeholder:"Search reviews...",value:t,onChange:m=>n(m.target.value)})),a.createElement(E7,{value:r,onChange:m=>o(m.target.value)},a.createElement("option",{value:""},"All Categories"),s.map(m=>a.createElement("option",{key:m,value:m},m))),a.createElement(w7,{className:i?"active":"",onClick:u},a.createElement(Ti,null)," Featured Only")),c.length>0?a.createElement(b7,null,c.map(m=>a.createElement(_v,{key:m.id,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5}},a.createElement(S7,null,a.createElement(k7,null,a.createElement(C7,null,a.createElement(qd,null))),m.featured&&a.createElement(P7,null,"Featured")),a.createElement(T7,null,a.createElement(L7,null,m.title),a.createElement(F7,null,m.productName),a.createElement(A7,null,[...Array(5)].map((p,h)=>a.createElement(qn,{key:h,color:h<Math.floor(m.rating)?"#F59E0B":"#334155"})),a.createElement("span",{style:{marginLeft:"0.5rem",color:"var(--text)"}},m.rating.toFixed(1))),a.createElement(D7,null,d(m.content)),a.createElement(M7,{to:`/reviews/${m.id}`},"Read Full Review"),a.createElement(R7,null,a.createElement(N7,null,a.createElement(jw,null)," ",m.date),a.createElement(z7,null,a.createElement(Qw,null)," ",m.category)))))):a.createElement(I7,null,"No reviews found matching your filters."))},O7=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 300px);
  padding: 2rem 0;
`,$7=f(V.div)`
  background-color: var(--surface);
  border-radius: 1rem;
  width: 100%;
  max-width: 450px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`,B7=f.div`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  padding: 2rem;
  text-align: center;
`,j7=f.h2`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: white;
`,_7=f.p`
  color: rgba(255, 255, 255, 0.8);
`,U7=f.form`
  padding: 2rem;
`,eh=f.div`
  margin-bottom: 1.5rem;
  position: relative;
`,th=f.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,nh=f.input`
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
`,rh=f.div`
  position: absolute;
  left: 0.75rem;
  top: 2.4rem;
  color: var(--text-secondary);
`,H7=f.button`
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,W7=f.div`
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--error);
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`,G7=f.div`
  background-color: rgba(99, 102, 241, 0.1);
  border-radius: 0.375rem;
  padding: 1rem;
  margin-top: 1.5rem;
  
  h4 {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    color: var(--primary);
  }
  
  p {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
  }
`,Y7=()=>{const[e,t]=b.useState(""),[n,r]=b.useState(""),[o,i]=b.useState(""),[l,s]=b.useState(!1),{login:c,isAuthenticated:u}=Bg(),d=An();b.useEffect(()=>{u&&d("/admin")},[u,d]);const m=p=>{p.preventDefault(),i(""),s(!0),setTimeout(()=>{c(e,n)?d("/admin"):i("Invalid username or password. Please try again."),s(!1)},1e3)};return a.createElement(O7,null,a.createElement($7,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5}},a.createElement(B7,null,a.createElement(j7,null,"Admin Login"),a.createElement(_7,null,"Sign in to access your dashboard")),a.createElement(U7,{onSubmit:m},o&&a.createElement(W7,null,a.createElement(vu,null)," ",o),a.createElement(eh,null,a.createElement(th,{htmlFor:"username"},"Username"),a.createElement(rh,null,a.createElement(xu,null)),a.createElement(nh,{type:"text",id:"username",value:e,onChange:p=>t(p.target.value),required:!0})),a.createElement(eh,null,a.createElement(th,{htmlFor:"password"},"Password"),a.createElement(rh,null,a.createElement(Gw,null)),a.createElement(nh,{type:"password",id:"password",value:n,onChange:p=>r(p.target.value),required:!0})),a.createElement(H7,{type:"submit",disabled:l},l?"Signing in...":"Sign In"),a.createElement(G7,null,a.createElement("h4",null,"Demo Credentials"),a.createElement("p",null,a.createElement("strong",null,"Username:")," admin"),a.createElement("p",null,a.createElement("strong",null,"Password:")," password")))))},K7=f.div`
  padding: 3rem 0;
`,Q7=f.div`
  margin-bottom: 3rem;
`,X7=f.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,q7=f.p`
  color: var(--text-secondary);
  font-size: 1.125rem;
`,Z7=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`,pr=f(V.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`,hr=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`,gr=f.h3`
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
`,vr=f.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  
  &.products {
    background-color: rgba(99, 102, 241, 0.1);
    color: var(--primary);
  }
  
  &.subscriptions {
    background-color: rgba(139, 92, 246, 0.1);
    color: var(--secondary);
  }
  
  &.reviews {
    background-color: rgba(245, 158, 11, 0.1);
    color: #F59E0B;
  }
  
  &.featured {
    background-color: rgba(236, 72, 153, 0.1);
    color: var(--accent);
  }
  
  &.clients {
    background-color: rgba(16, 185, 129, 0.1);
    color: #10B981;
  }
`,yr=f.div`
  font-size: 2rem;
  font-weight: 700;
`,xr=f.div`
  margin-top: auto;
  padding-top: 1rem;
`,Er=f(X)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--secondary);
  }
`,J7=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,ca=f(V.div)`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`,ua=f.div`
  padding: 1.5rem;
  border-bottom: 1px solid var(--surface-light);
  display: flex;
  align-items: center;
  gap: 1rem;
`,da=f.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  
  &.products {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
  }
  
  &.subscriptions {
    background: linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%);
    color: white;
  }
  
  &.reviews {
    background: linear-gradient(135deg, #F59E0B 0%, #EF4444 100%);
    color: white;
  }
  
  &.clients {
    background: linear-gradient(135deg, #10B981 0%, #3B82F6 100%);
    color: white;
  }
`,ma=f.h3`
  font-size: 1.25rem;
`,fa=f.div`
  padding: 1.5rem;
`,pa=f.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,ha=f(X)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  background-size: 200% 100%;
  background-position: 0% 0%;
  border-radius: 0.375rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-position: 100% 0%;
    transform: translateY(-2px);
  }
`,oh=()=>{const{products:e}=wi(),{subscriptions:t}=Pd(),{reviews:n}=Ld(),{clients:r,getClientsWithUpcomingPayments:o}=Fd(),i=e.filter(d=>d.featured).length,l=t.filter(d=>d.featured).length,s=n.filter(d=>d.featured).length,c=i+l+s,u=o(10).length;return a.createElement("div",{className:"container"},a.createElement(K7,null,a.createElement(Q7,null,a.createElement(X7,null,"Admin Dashboard"),a.createElement(q7,null,"Manage your products, subscriptions, reviews, and clients from one central location.")),a.createElement(Z7,null,a.createElement(pr,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1}},a.createElement(hr,null,a.createElement(gr,null,"Total Products"),a.createElement(vr,{className:"products"},a.createElement(Lp,null))),a.createElement(yr,null,e.length),a.createElement(xr,null,a.createElement(Er,{to:"/admin/products"},"View all products ",a.createElement(dr,{size:14})))),a.createElement(pr,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.2}},a.createElement(hr,null,a.createElement(gr,null,"Total Subscriptions"),a.createElement(vr,{className:"subscriptions"},a.createElement(Ap,null))),a.createElement(yr,null,t.length),a.createElement(xr,null,a.createElement(Er,{to:"/admin/subscriptions"},"View all subscriptions ",a.createElement(dr,{size:14})))),a.createElement(pr,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.3}},a.createElement(hr,null,a.createElement(gr,null,"Total Reviews"),a.createElement(vr,{className:"reviews"},a.createElement(qn,null))),a.createElement(yr,null,n.length),a.createElement(xr,null,a.createElement(Er,{to:"/admin/reviews"},"View all reviews ",a.createElement(dr,{size:14})))),a.createElement(pr,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.4}},a.createElement(hr,null,a.createElement(gr,null,"Featured Items"),a.createElement(vr,{className:"featured"},a.createElement(qn,null))),a.createElement(yr,null,c),a.createElement(xr,null,a.createElement(Er,{to:"/admin/products"},"Manage featured items ",a.createElement(dr,{size:14})))),a.createElement(pr,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.5}},a.createElement(hr,null,a.createElement(gr,null,"Total Clients"),a.createElement(vr,{className:"clients"},a.createElement(Dp,null))),a.createElement(yr,null,r.length),a.createElement(xr,null,a.createElement(Er,{to:"/admin/clients"},"View all clients ",a.createElement(dr,{size:14})))),a.createElement(pr,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.6}},a.createElement(hr,null,a.createElement(gr,null,"Upcoming Payments"),a.createElement(vr,{className:"subscriptions"},a.createElement(Zd,null))),a.createElement(yr,null,u),a.createElement(xr,null,a.createElement(Er,{to:"/admin/clients"},"View payment reminders ",a.createElement(dr,{size:14}))))),a.createElement(J7,null,a.createElement(ca,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.1}},a.createElement(ua,null,a.createElement(da,{className:"products"},a.createElement(Lp,null)),a.createElement(ma,null,"Products")),a.createElement(fa,null,a.createElement(pa,null,"Manage your affiliate products. Add new products, edit existing ones, or remove products that are no longer relevant."),a.createElement(ha,{to:"/admin/products"},a.createElement(cn,null)," Manage Products"))),a.createElement(ca,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.2}},a.createElement(ua,null,a.createElement(da,{className:"subscriptions"},a.createElement(Ap,null)),a.createElement(ma,null,"Subscriptions")),a.createElement(fa,null,a.createElement(pa,null,"Manage your subscription offerings. Update pricing, availability, and featured status for your subscription products."),a.createElement(ha,{to:"/admin/subscriptions"},a.createElement(cn,null)," Manage Subscriptions"))),a.createElement(ca,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.3}},a.createElement(ua,null,a.createElement(da,{className:"reviews"},a.createElement(qn,null)),a.createElement(ma,null,"Reviews")),a.createElement(fa,null,a.createElement(pa,null,"Manage your product reviews. Create detailed reviews with embedded videos to showcase products and provide valuable insights."),a.createElement(ha,{to:"/admin/reviews"},a.createElement(cn,null)," Manage Reviews"))),a.createElement(ca,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.4}},a.createElement(ua,null,a.createElement(da,{className:"clients"},a.createElement(Dp,null)),a.createElement(ma,null,"Clients")),a.createElement(fa,null,a.createElement(pa,null,"Manage your clients and their subscriptions. Track payment cycles, send payment reminders, and maintain client relationships."),a.createElement(ha,{to:"/admin/clients"},a.createElement(cn,null)," Manage Clients"))))))},eS=f.div`
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
`,tS=f.h1`
  font-size: 2.5rem;
`,nS=f(X)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    color: var(--primary);
  }
`,rS=f(X)`
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
`,oS=f.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  color: var(--text);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--surface-hover);
  }
`,iS=f.div`
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
  font-family: monospace;
  font-size: 0.875rem;
  
  h4 {
    margin-bottom: 0.5rem;
    color: var(--primary);
  }
  
  pre {
    background-color: var(--surface-light);
    padding: 0.5rem;
    border-radius: 0.25rem;
    overflow-x: auto;
    white-space: pre-wrap;
  }
`,aS=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,lS=f.div`
  flex: 1;
  position: relative;
  min-width: 250px;
`,sS=f.input`
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
`,cS=f.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,uS=f.select`
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
`,dS=f.button`
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
`,mS=f.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 3rem;
`,fS=f.table`
  width: 100%;
  border-collapse: collapse;
`,pS=f.thead`
  background-color: var(--surface-light);
  
  th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    color: var(--text);
  }
`,hS=f.tbody`
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
`,gS=f.div`
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.25rem;
`,vS=f.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`,yS=f.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 2rem;
  font-size: 0.75rem;
  color: white;
`,xS=f.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: var(--surface-light);
  border-radius: 2rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,ES=f.div`
  display: flex;
  gap: 0.75rem;
`,wS=f(X)`
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
`,bS=f.button`
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
`,SS=f.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`,kS=f(V.div)`
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
`,CS=f(V.div)`
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
`,PS=f.div`
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
`,TS=()=>{const{products:e,deleteProduct:t,debugProducts:n}=b.useContext(Ei),[r,o]=b.useState(""),[i,l]=b.useState(""),[s,c]=b.useState(!1),[u,d]=b.useState(null),[m,p]=b.useState(!1);b.useEffect(()=>{console.log("AdminProducts - Products from context:",e),console.log("AdminProducts - Products length:",e==null?void 0:e.length),console.log("AdminProducts - Products array:",JSON.stringify(e,null,2))},[e]);const h=Array.isArray(e)?e:[],E=["All",...new Set(h.filter(x=>x&&x.category).map(x=>x.category))],w=h.filter(x=>{if(!x)return console.log("Filtering out null/undefined product"),!1;if(!x.title&&!x.description)return console.log("Filtering out product without title AND description:",x),!1;const k=x.title||"",T=x.description||"",C=!r||k.toLowerCase().includes(r.toLowerCase())||T.toLowerCase().includes(r.toLowerCase()),F=!i||i==="All"||x.category===i,M=!s||x.featured,I=C&&F&&M;return I||console.log("Product filtered out:",x.title||x.id,{matchesSearch:C,matchesCategory:F,matchesFeatured:M,searchTerm:r,selectedCategory:i,showFeaturedOnly:s}),I}),S=x=>{d(x)},g=()=>{u&&(t(u.id),d(null))},v=()=>{d(null)},y=()=>{p(!m),n()};return a.createElement(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},a.createElement("div",{className:"container"},a.createElement(nS,{to:"/admin/dashboard"},a.createElement(Rn,null)," Back to Dashboard"),a.createElement(eS,null,a.createElement(tS,null,"Manage Products"),a.createElement("div",{style:{display:"flex",gap:"1rem",alignItems:"center"}},a.createElement(oS,{onClick:y},a.createElement(mv,null)," Debug Info"),a.createElement(rS,{to:"/admin/products/add"},a.createElement(Gl,null)," Add New Product"))),m&&a.createElement(iS,null,a.createElement("h4",null,"Debug Information"),a.createElement("pre",null,"Total products in context: ",h.length,`
`,"Filtered products: ",w.length,`
`,'Search term: "',r,'"',`
`,'Selected category: "',i,'"',`
`,"Show featured only: ",s.toString(),`
`,`
`,"Products data:",`
`,JSON.stringify(h.map(x=>({id:x==null?void 0:x.id,title:x==null?void 0:x.title,category:x==null?void 0:x.category,featured:x==null?void 0:x.featured,hasDescription:!!(x!=null&&x.description),hasImage:!!(x!=null&&x.image)})),null,2))),a.createElement(aS,null,a.createElement(lS,null,a.createElement(cS,null,a.createElement(Nn,null)),a.createElement(sS,{type:"text",placeholder:"Search products...",value:r,onChange:x=>o(x.target.value)})),a.createElement(uS,{value:i,onChange:x=>l(x.target.value)},a.createElement("option",{value:""},"All Categories"),E.map(x=>x!=="All"&&a.createElement("option",{key:x,value:x},x))),a.createElement(dS,{className:s?"active":"",onClick:()=>c(!s)},a.createElement(Ti,null)," Featured Only")),w.length>0?a.createElement(mS,null,a.createElement(fS,null,a.createElement(pS,null,a.createElement("tr",null,a.createElement("th",null,"Product"),a.createElement("th",null,"Category"),a.createElement("th",null,"Featured"),a.createElement("th",null,"Actions"))),a.createElement(hS,null,w.map(x=>a.createElement("tr",{key:x.id},a.createElement("td",null,a.createElement(gS,null,x.title||"Untitled Product"),a.createElement(vS,null,x.category||"Uncategorized")),a.createElement("td",null,x.category||"Uncategorized"),a.createElement("td",null,x.featured?a.createElement(yS,null,"Featured"):a.createElement(xS,null,"Not Featured")),a.createElement("td",null,a.createElement(ES,null,a.createElement(wS,{to:`/admin/products/edit/${x.id}`},a.createElement(cn,null)),a.createElement(bS,{onClick:()=>S(x)},a.createElement(Fi,null))))))))):a.createElement(SS,null,a.createElement("h3",null,"No products found"),a.createElement("p",null,"Try adjusting your search or filter criteria")),u&&a.createElement(kS,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},a.createElement(CS,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.3}},a.createElement("h3",null,"Confirm Deletion"),a.createElement("p",null,'Are you sure you want to delete "',u.title||"this product",'"? This action cannot be undone.'),a.createElement(PS,null,a.createElement("button",{className:"cancel",onClick:v},"Cancel"),a.createElement("button",{className:"confirm",onClick:g},"Delete"))))))},LS=f.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`,FS=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
`,AS=f.h1`
  font-size: 1.75rem;
  color: var(--text);
  margin: 0;
`,DS=f(X)`
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
`,RS=f.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,In=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Vn=f.label`
  font-weight: 500;
  color: var(--text);
`,wr=f.input`
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
`,NS=f.textarea`
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
`,zS=f.div`
  border: 2px dashed var(--border);
  border-radius: 0.5rem;
  padding: 1.5rem;
  background: var(--surface-light);
  transition: border-color 0.3s ease;
  
  &.drag-over {
    border-color: var(--primary);
    background: rgba(99, 102, 241, 0.05);
  }
`,MS=f.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Js=f.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--surface-hover);
    border-color: var(--primary);
  }
  
  &.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }
`,IS=f.input`
  display: none;
`,VS=f.div`
  margin-top: 1rem;
  position: relative;
  
  img {
    max-width: 100%;
    max-height: 300px;
    border-radius: 0.375rem;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,OS=f.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(239, 68, 68, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(239, 68, 68, 1);
    transform: scale(1.1);
  }
`,$S=f.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
  
  .text {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
  
  .subtext {
    font-size: 0.875rem;
    opacity: 0.7;
  }
`,BS=f.div`
  margin-top: 1rem;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  padding: 1rem;
  background: var(--surface);
`,jS=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.5rem;
`,_S=f.div`
  position: relative;
  cursor: pointer;
  border-radius: 0.375rem;
  overflow: hidden;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  
  &:hover {
    border-color: var(--primary);
  }
  
  &.selected {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
  
  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
  }
`,US=f.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`,Uv=f.button`
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
`,HS=f(Uv)`
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  border: none;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
  }
`,WS=f(Uv)`
  background-color: transparent;
  color: var(--error);
  border: 1px solid var(--error);
  
  &:hover {
    background-color: var(--error);
    color: white;
  }
`,On=f.div`
  color: var(--error);
  font-size: 0.875rem;
  margin-top: 0.5rem;
`,ec=()=>{const{id:e}=Ol(),t=An(),{products:n,addProduct:r,updateProduct:o,deleteProduct:i}=wi(),l=!!e,[s,c]=b.useState({name:"",description:"",price:"",imageUrl:"",affiliateLink:"",category:"",featured:!1}),[u,d]=b.useState({}),[m,p]=b.useState(!1),[h,E]=b.useState("url"),[w,S]=b.useState(!1),[g,v]=b.useState(null),[y,x]=b.useState(!1),[k,T]=b.useState(()=>{const P=localStorage.getItem("uploadedImages");return P?JSON.parse(P):[]});b.useEffect(()=>{if(l&&n){const P=n.find(D=>D.id===e);P?(console.log("Loading product for edit:",P),c({name:P.name||P.title||"",description:P.description||"",price:P.price?String(P.price):"",imageUrl:P.imageUrl||P.image||"",affiliateLink:P.affiliateLink||P.link||"",category:P.category||"",featured:P.featured||!1}),(P.imageUrl||P.image)&&E("url")):t("/admin/products")}},[e,n,l,t]);const C=P=>{const{name:D,value:N,type:$,checked:ge}=P.target;c(ue=>({...ue,[D]:$==="checkbox"?ge:N})),u[D]&&d(ue=>({...ue,[D]:null}))},F=P=>{if(P&&P.type.startsWith("image/")){v(P);const D=new FileReader;D.onload=N=>{const $=N.target.result;c(ue=>({...ue,imageUrl:$}));const ge=[...k,{id:Date.now().toString(),url:$,name:P.name,timestamp:new Date().toISOString()}];T(ge),localStorage.setItem("uploadedImages",JSON.stringify(ge))},D.readAsDataURL(P),u.imageUrl&&d(N=>({...N,imageUrl:null}))}else alert("Please select a valid image file (JPG, PNG, GIF, etc.)")},M=P=>{const D=P.target.files[0];D&&F(D)},I=P=>{P.preventDefault(),S(!0)},R=P=>{P.preventDefault(),S(!1)},_=P=>{P.preventDefault(),S(!1);const D=P.dataTransfer.files;D.length>0&&F(D[0])},G=()=>{c(P=>({...P,imageUrl:""})),v(null)},H=P=>{c(D=>({...D,imageUrl:P})),x(!1),u.imageUrl&&d(D=>({...D,imageUrl:null}))},ie=()=>{const P={},D=Z=>Z==null?"":String(Z).trim(),N=D(s.name),$=D(s.description),ge=D(s.price),ue=D(s.category),$e=D(s.affiliateLink);if(N||(P.name="Product name is required"),$||(P.description="Description is required"),!ge)P.price="Price is required";else{const Z=parseFloat(ge);(isNaN(Z)||Z<0)&&(P.price="Price must be a valid positive number")}return ue||(P.category="Category is required"),$e?$e.startsWith("http")||(P.affiliateLink="Please enter a valid URL (must start with http or https)"):P.affiliateLink="Affiliate link is required",h==="url"&&s.imageUrl&&!s.imageUrl.startsWith("http")&&!s.imageUrl.startsWith("data:")&&(P.imageUrl="Please enter a valid image URL (must start with http or https)"),d(P),Object.keys(P).length===0},Y=async P=>{if(P.preventDefault(),!!ie()){p(!0);try{const D={...s,price:parseFloat(s.price),title:s.name,image:s.imageUrl,link:s.affiliateLink};console.log("Submitting product data:",D),l?await o(e,D):await r(D),t("/admin/products")}catch(D){console.error("Error saving product:",D),d(N=>({...N,form:"Failed to save product. Please try again."}))}finally{p(!1)}}},he=async()=>{if(window.confirm("Are you sure you want to delete this product?"))try{await i(e),t("/admin/products")}catch(P){console.error("Error deleting product:",P),d(D=>({...D,form:"Failed to delete product. Please try again."}))}},L=s.imageUrl&&(s.imageUrl.startsWith("http")||s.imageUrl.startsWith("data:"));return a.createElement(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}},a.createElement(LS,null,a.createElement(FS,null,a.createElement(AS,null,l?"Edit Product":"Add New Product"),a.createElement(DS,{to:"/admin/products"},a.createElement(Rn,null)," Back to Products")),a.createElement(RS,{onSubmit:Y},a.createElement(In,null,a.createElement(Vn,{htmlFor:"name"},"Product Name"),a.createElement(wr,{type:"text",id:"name",name:"name",value:s.name,onChange:C,placeholder:"Enter product name"}),u.name&&a.createElement(On,null,u.name)),a.createElement(In,null,a.createElement(Vn,{htmlFor:"description"},"Description"),a.createElement(NS,{id:"description",name:"description",value:s.description,onChange:C,placeholder:"Enter product description"}),u.description&&a.createElement(On,null,u.description)),a.createElement(In,null,a.createElement(Vn,{htmlFor:"category"},"Category"),a.createElement(wr,{type:"text",id:"category",name:"category",value:s.category,onChange:C,placeholder:"Enter product category"}),u.category&&a.createElement(On,null,u.category)),a.createElement(In,null,a.createElement(Vn,{htmlFor:"price"},"Price"),a.createElement(wr,{type:"number",step:"0.01",min:"0",id:"price",name:"price",value:s.price,onChange:C,placeholder:"Enter price (e.g., 29.99)"}),u.price&&a.createElement(On,null,u.price)),a.createElement(In,null,a.createElement(Vn,{htmlFor:"affiliateLink"},"Affiliate Link"),a.createElement(wr,{type:"url",id:"affiliateLink",name:"affiliateLink",value:s.affiliateLink,onChange:C,placeholder:"Enter affiliate link (https://...)"}),u.affiliateLink&&a.createElement(On,null,u.affiliateLink)),a.createElement(In,null,a.createElement(Vn,null,"Product Image"),a.createElement(zS,{className:w?"drag-over":""},a.createElement(MS,null,a.createElement(Js,{type:"button",className:h==="url"?"active":"",onClick:()=>E("url")},a.createElement(yu,null)," Image URL"),a.createElement(Js,{type:"button",className:h==="upload"?"active":"",onClick:()=>E("upload")},a.createElement(hv,null)," Upload File"),a.createElement(Js,{type:"button",className:h==="browse"?"active":"",onClick:()=>{E("browse"),x(!0)}},a.createElement(fv,null)," Browse Images")),h==="url"?a.createElement("div",null,a.createElement(wr,{type:"url",name:"imageUrl",value:s.imageUrl,onChange:C,placeholder:"Enter image URL (https://...)"})):h==="browse"?a.createElement("div",null,k.length>0?a.createElement(BS,null,a.createElement(jS,null,k.map(P=>a.createElement(_S,{key:P.id,className:s.imageUrl===P.url?"selected":"",onClick:()=>H(P.url)},a.createElement("img",{src:P.url,alt:P.name}))))):a.createElement("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"}},"No uploaded images found. Upload some images first to browse them here.")):a.createElement("div",{onDragOver:I,onDragLeave:R,onDrop:_},a.createElement(IS,{type:"file",accept:"image/*",onChange:M,id:"imageUpload"}),a.createElement($S,null,a.createElement("div",{className:"icon"},"📷"),a.createElement("div",{className:"text"},a.createElement("label",{htmlFor:"imageUpload",style:{cursor:"pointer",color:"var(--primary)"}},"Click to upload")," or drag and drop"),a.createElement("div",{className:"subtext"},"PNG, JPG, GIF up to 10MB"))),u.imageUrl&&a.createElement(On,null,u.imageUrl),L&&a.createElement(VS,null,a.createElement("img",{src:s.imageUrl,alt:"Product preview"}),a.createElement(OS,{type:"button",onClick:G},a.createElement(Li,null))))),a.createElement(In,null,a.createElement(Vn,null,a.createElement(wr,{type:"checkbox",name:"featured",checked:s.featured,onChange:C,style:{width:"auto",marginRight:"0.5rem"}}),"Featured Product")),u.form&&a.createElement(On,null,u.form),a.createElement(US,null,l&&a.createElement(WS,{type:"button",onClick:he},a.createElement(Fi,null)," Delete Product"),a.createElement(HS,{type:"submit",disabled:m},a.createElement(Yl,null)," ",m?"Saving...":"Save Product")))))},GS=f.div`
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
`,YS=f.h1`
  font-size: 2.5rem;
`,KS=f(X)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    color: var(--primary);
  }
`,QS=f(X)`
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
`,XS=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,qS=f.div`
  flex: 1;
  position: relative;
  min-width: 250px;
`,ZS=f.input`
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
`,JS=f.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,ek=f.select`
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
`,tk=f.select`
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
`;f.button`
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
`;const nk=f.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 3rem;
`,rk=f.table`
  width: 100%;
  border-collapse: collapse;
`,ok=f.thead`
  background-color: var(--surface-light);
  
  th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    color: var(--text);
  }
`,ik=f.tbody`
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
`,ak=f.div`
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.25rem;
`,lk=f.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`,sk=f.div`
  font-weight: 500;
  color: var(--accent);
`,ck=f.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 2rem;
  font-size: 0.75rem;
  color: white;
`,uk=f.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: var(--surface-light);
  border-radius: 2rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,dk=f.span`
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
`,mk=f.div`
  display: flex;
  gap: 0.75rem;
`,fk=f(X)`
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
`,pk=f.button`
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
`,hk=f.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`,gk=f(V.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  min-width: 400px;
  
  @media (max-width: 768px) {
    min-width: 90vw;
    margin: 1rem;
  }
`,vk=f(V.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,yk=f.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1rem;
`,xk=f.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
`,Ek=f.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`,wk=f.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--surface);
  }
`,bk=f.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  background-color: var(--error);
  border: 1px solid var(--error);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #dc2626;
  }
`,Sk=()=>{const{subscriptions:e,deleteSubscription:t}=b.useContext(bi),[n,r]=b.useState(""),[o,i]=b.useState("all"),[l,s]=b.useState("all"),[c,u]=b.useState(!1),[d,m]=b.useState(null),p=g=>{m(g),u(!0)},h=()=>{d&&(t(d.id),u(!1),m(null))},E=()=>{u(!1),m(null)},w=e.filter(g=>{const v=g.title.toLowerCase().includes(n.toLowerCase())||g.description.toLowerCase().includes(n.toLowerCase()),y=o==="all"||g.category===o,x=l==="all"||g.availability===l;return v&&y&&x}),S=[...new Set(e.map(g=>g.category))];return a.createElement("div",null,a.createElement(KS,{to:"/admin"},a.createElement(Rn,null),"Back to Admin Dashboard"),a.createElement(GS,null,a.createElement(YS,null,"Manage Subscriptions"),a.createElement(QS,{to:"/admin/subscriptions/new"},a.createElement(Gl,null),"Add New Subscription")),a.createElement(XS,null,a.createElement(qS,null,a.createElement(JS,null,a.createElement(Nn,null)),a.createElement(ZS,{type:"text",placeholder:"Search subscriptions...",value:n,onChange:g=>r(g.target.value)})),a.createElement(ek,{value:o,onChange:g=>i(g.target.value)},a.createElement("option",{value:"all"},"All Categories"),S.map(g=>a.createElement("option",{key:g,value:g},g))),a.createElement(tk,{value:l,onChange:g=>s(g.target.value)},a.createElement("option",{value:"all"},"All Availability"),a.createElement("option",{value:"open"},"Open"),a.createElement("option",{value:"limited"},"Limited"),a.createElement("option",{value:"filled"},"Filled"))),w.length>0?a.createElement(nk,null,a.createElement(rk,null,a.createElement(ok,null,a.createElement("tr",null,a.createElement("th",null,"Subscription"),a.createElement("th",null,"Price"),a.createElement("th",null,"Featured"),a.createElement("th",null,"Availability"),a.createElement("th",null,"Actions"))),a.createElement(ik,null,w.map(g=>a.createElement(V.tr,{key:g.id,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3}},a.createElement("td",null,a.createElement(ak,null,g.title),a.createElement(lk,null,g.category)),a.createElement("td",null,a.createElement(sk,null,"$",g.price,"/month")),a.createElement("td",null,g.featured?a.createElement(ck,null,"Featured"):a.createElement(uk,null,"Not Featured")),a.createElement("td",null,a.createElement(dk,{className:g.availability},g.availability.charAt(0).toUpperCase()+g.availability.slice(1))),a.createElement("td",null,a.createElement(mk,null,a.createElement(fk,{to:`/admin/subscriptions/edit/${g.id}`},a.createElement(cn,null)),a.createElement(pk,{onClick:()=>p(g)},a.createElement(Fi,null))))))))):a.createElement(hk,null,a.createElement("h3",null,"No subscriptions found"),a.createElement("p",null,"Try adjusting your search or filter criteria.")),c&&a.createElement(a.Fragment,null,a.createElement(vk,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:E}),a.createElement(gk,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9}},a.createElement(yk,null,"Confirm Delete"),a.createElement(xk,null,'Are you sure you want to delete "',d==null?void 0:d.title,'"? This action cannot be undone.'),a.createElement(Ek,null,a.createElement(wk,{onClick:E},"Cancel"),a.createElement(bk,{onClick:h},"Delete")))))},kk=f.div`
  margin-bottom: 2rem;
  padding-top: 2rem;
`,Ck=f.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`,Pk=f.p`
  color: var(--text-secondary);
  font-size: 1.125rem;
`,Tk=f(X)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    color: var(--primary);
  }
`,Lk=f.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  margin-bottom: 3rem;
`,Kt=f.div`
  margin-bottom: 1.5rem;
`,ih=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Qt=f.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text);
`,ko=f.input`
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
`,Fk=f.textarea`
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
`,Ak=f.select`
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
`,Dk=f.div`
  border: 2px dashed var(--border);
  border-radius: 0.5rem;
  padding: 1.5rem;
  background: var(--surface-light);
  transition: border-color 0.3s ease;
  
  &.drag-over {
    border-color: var(--primary);
    background: rgba(99, 102, 241, 0.05);
  }
`,Rk=f.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,tc=f.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--surface-hover);
    border-color: var(--primary);
  }
  
  &.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }
`,Nk=f.input`
  display: none;
`,zk=f.div`
  margin-top: 1rem;
  position: relative;
  
  img {
    max-width: 100%;
    max-height: 300px;
    border-radius: 0.375rem;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,Mk=f.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(239, 68, 68, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(239, 68, 68, 1);
    transform: scale(1.1);
  }
`,Ik=f.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
  
  .text {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
  
  .subtext {
    font-size: 0.875rem;
    opacity: 0.7;
  }
`,Vk=f.div`
  margin-top: 1rem;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  padding: 1rem;
  background: var(--surface);
`,Ok=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.5rem;
`,$k=f.div`
  position: relative;
  cursor: pointer;
  border-radius: 0.375rem;
  overflow: hidden;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  
  &:hover {
    border-color: var(--primary);
  }
  
  &.selected {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
  
  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
  }
`,Bk=f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,jk=f.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`,_k=f.label`
  cursor: pointer;
  user-select: none;
`,Uk=f.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`,Hk=f(X)`
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
`,Wk=f.button`
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
`,br=f.div`
  color: var(--error);
  font-size: 0.875rem;
  margin-top: 0.5rem;
`,Gk=f(V.div)`
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
`,nc=()=>{const{id:e}=Ol(),t=An(),{addSubscription:n,updateSubscription:r,getSubscription:o}=b.useContext(bi),[i,l]=b.useState(!1),s=!!e,[c,u]=b.useState({title:"",description:"",image:"",link:"",category:"",featured:!1,price:"",availability:"Open"}),[d,m]=b.useState({}),[p,h]=b.useState("url"),[E,w]=b.useState(!1),[S,g]=b.useState(null),[v,y]=b.useState(!1),[x,k]=b.useState(()=>{const L=localStorage.getItem("uploadedImages");return L?JSON.parse(L):[]});b.useEffect(()=>{if(s){const L=o(e);L?(u(L),L.image&&h("url")):t("/admin/subscriptions")}},[e,s,o,t]);const T=L=>{const{name:P,value:D,type:N,checked:$}=L.target;u({...c,[P]:N==="checkbox"?$:D}),d[P]&&m({...d,[P]:""})},C=L=>{if(L&&L.type.startsWith("image/")){g(L);const P=new FileReader;P.onload=D=>{const N=D.target.result;u(ge=>({...ge,image:N}));const $=[...x,{id:Date.now().toString(),url:N,name:L.name,timestamp:new Date().toISOString()}];k($),localStorage.setItem("uploadedImages",JSON.stringify($))},P.readAsDataURL(L),d.image&&m(D=>({...D,image:null}))}else alert("Please select a valid image file (JPG, PNG, GIF, etc.)")},F=L=>{const P=L.target.files[0];P&&C(P)},M=L=>{L.preventDefault(),w(!0)},I=L=>{L.preventDefault(),w(!1)},R=L=>{L.preventDefault(),w(!1);const P=L.dataTransfer.files;P.length>0&&C(P[0])},_=()=>{u(L=>({...L,image:""})),g(null)},G=L=>{u(P=>({...P,image:L})),y(!1),d.image&&m(P=>({...P,image:null}))},H=()=>{const L={};return c.title.trim()||(L.title="Title is required"),c.description.trim()||(L.description="Description is required"),c.image.trim()?!c.image.startsWith("http")&&!c.image.startsWith("data:")&&(L.image="Please enter a valid image URL (must start with http or https)"):L.image="Image is required",c.link.trim()?ie(c.link)||(L.link="Please enter a valid URL"):L.link="Link is required",c.category.trim()||(L.category="Category is required"),c.price.trim()||(L.price="Price is required"),m(L),Object.keys(L).length===0},ie=L=>{try{return new URL(L),!0}catch{return!1}},Y=L=>{L.preventDefault(),H()&&(s?r(e,c):n(c),l(!0),setTimeout(()=>{l(!1),t("/admin/subscriptions")},2e3))},he=c.image&&(c.image.startsWith("http")||c.image.startsWith("data:"));return a.createElement(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},a.createElement("div",{className:"container"},a.createElement(Tk,{to:"/admin/subscriptions"},a.createElement(Rn,null)," Back to Subscriptions"),a.createElement(kk,null,a.createElement(Ck,null,s?"Edit Subscription":"Add New Subscription"),a.createElement(Pk,null,s?"Update the details of an existing subscription":"Create a new subscription to offer to your customers")),a.createElement(Lk,null,a.createElement("form",{onSubmit:Y},a.createElement(Kt,null,a.createElement(Qt,{htmlFor:"title"},a.createElement(Kw,null)," Subscription Title"),a.createElement(ko,{type:"text",id:"title",name:"title",value:c.title,onChange:T,placeholder:"Enter subscription title"}),d.title&&a.createElement(br,null,d.title)),a.createElement(Kt,null,a.createElement(Qt,{htmlFor:"description"},"Description"),a.createElement(Fk,{id:"description",name:"description",value:c.description,onChange:T,placeholder:"Enter subscription description"}),d.description&&a.createElement(br,null,d.description)),a.createElement(Kt,null,a.createElement(Qt,null,"Subscription Image"),a.createElement(Dk,{className:E?"drag-over":""},a.createElement(Rk,null,a.createElement(tc,{type:"button",className:p==="url"?"active":"",onClick:()=>h("url")},a.createElement(yu,null)," Image URL"),a.createElement(tc,{type:"button",className:p==="upload"?"active":"",onClick:()=>h("upload")},a.createElement(hv,null)," Upload File"),a.createElement(tc,{type:"button",className:p==="browse"?"active":"",onClick:()=>{h("browse"),y(!0)}},a.createElement(fv,null)," Browse Images")),p==="url"?a.createElement("div",null,a.createElement(ko,{type:"url",name:"image",value:c.image,onChange:T,placeholder:"Enter image URL (https://...)"})):p==="browse"?a.createElement("div",null,x.length>0?a.createElement(Vk,null,a.createElement(Ok,null,x.map(L=>a.createElement($k,{key:L.id,className:c.image===L.url?"selected":"",onClick:()=>G(L.url)},a.createElement("img",{src:L.url,alt:L.name}))))):a.createElement("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"}},"No uploaded images found. Upload some images first to browse them here.")):a.createElement("div",{onDragOver:M,onDragLeave:I,onDrop:R},a.createElement(Nk,{type:"file",accept:"image/*",onChange:F,id:"imageUpload"}),a.createElement(Ik,null,a.createElement("div",{className:"icon"},"📷"),a.createElement("div",{className:"text"},a.createElement("label",{htmlFor:"imageUpload",style:{cursor:"pointer",color:"var(--primary)"}},"Click to upload")," or drag and drop"),a.createElement("div",{className:"subtext"},"PNG, JPG, GIF up to 10MB"))),d.image&&a.createElement(br,null,d.image),he&&a.createElement(zk,null,a.createElement("img",{src:c.image,alt:"Subscription preview"}),a.createElement(Mk,{type:"button",onClick:_},a.createElement(Li,null))))),a.createElement(ih,null,a.createElement(Kt,null,a.createElement(Qt,{htmlFor:"link"},a.createElement(yu,null)," Subscription Link"),a.createElement(ko,{type:"text",id:"link",name:"link",value:c.link,onChange:T,placeholder:"Enter subscription link"}),d.link&&a.createElement(br,null,d.link)),a.createElement(Kt,null,a.createElement(Qt,{htmlFor:"category"},"Category"),a.createElement(ko,{type:"text",id:"category",name:"category",value:c.category,onChange:T,placeholder:"Enter category (e.g., Business, Marketing)"}),d.category&&a.createElement(br,null,d.category))),a.createElement(ih,null,a.createElement(Kt,null,a.createElement(Qt,{htmlFor:"price"},"Price"),a.createElement(ko,{type:"text",id:"price",name:"price",value:c.price,onChange:T,placeholder:"Enter price (e.g., $29/month)"}),d.price&&a.createElement(br,null,d.price)),a.createElement(Kt,null,a.createElement(Qt,{htmlFor:"availability"},"Availability"),a.createElement(Ak,{id:"availability",name:"availability",value:c.availability,onChange:T},a.createElement("option",{value:"Open"},"Open"),a.createElement("option",{value:"Limited"},"Limited"),a.createElement("option",{value:"Filled"},"Filled")))),a.createElement(Kt,null,a.createElement(Qt,null,"Featured Status"),a.createElement(Bk,null,a.createElement(jk,{type:"checkbox",id:"featured",name:"featured",checked:c.featured,onChange:T}),a.createElement(_k,{htmlFor:"featured"},a.createElement(qn,null)," Mark as featured subscription"))),a.createElement(Uk,null,a.createElement(Hk,{to:"/admin/subscriptions"},"Cancel"),a.createElement(Wk,{type:"submit"},a.createElement(Yl,null)," ",s?"Update Subscription":"Save Subscription")))),i&&a.createElement(Gk,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50}},a.createElement(Yn,null)," ",s?"Subscription updated successfully!":"Subscription added successfully!")))},Yk=f.div`
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
`,Kk=f.h1`
  font-size: 2.5rem;
`,Qk=f(X)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    color: var(--primary);
  }
`,Xk=f(X)`
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
`,qk=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,Zk=f.div`
  flex: 1;
  position: relative;
  min-width: 250px;
`,Jk=f.input`
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
`,e9=f.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,t9=f.select`
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
`,n9=f.button`
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
`,r9=f.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 3rem;
`,o9=f.table`
  width: 100%;
  border-collapse: collapse;
`,i9=f.thead`
  background-color: var(--surface-light);
  
  th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    color: var(--text);
  }
`,a9=f.tbody`
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
`,l9=f.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,s9=f.div`
  width: 80px;
  height: 45px;
  background-color: var(--surface-light);
  border-radius: 0.375rem;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
`,c9=f.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--primary);
  font-size: 1.25rem;
`,u9=f.div`
  flex: 1;
`,d9=f.div`
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.25rem;
`,m9=f.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`,f9=f.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #F59E0B;
`,p9=f.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 2rem;
  font-size: 0.75rem;
  color: white;
`,h9=f.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: var(--surface-light);
  border-radius: 2rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
`,g9=f.div`
  display: flex;
  gap: 0.75rem;
`,v9=f(X)`
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
`,y9=f.button`
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
`,x9=f.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`,E9=f(V.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 40;
`,w9=f(V.div)`
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
`,b9=f.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text);
`,S9=f.p`
  margin-bottom: 2rem;
  color: var(--text-secondary);
`,k9=f.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,C9=f.button`
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
`,P9=f.button`
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
`,T9=()=>{const{reviews:e,deleteReview:t}=b.useContext(Td),[n,r]=b.useState(""),[o,i]=b.useState(""),[l,s]=b.useState(!1),[c,u]=b.useState(null),d=[...new Set(e.map(S=>S.category))],m=e.filter(S=>{const g=S.title.toLowerCase().includes(n.toLowerCase())||S.productName.toLowerCase().includes(n.toLowerCase()),v=o===""||S.category===o,y=!l||S.featured;return g&&v&&y}),p=S=>{u(S)},h=()=>{t(c),u(null)},E=()=>{u(null)},w=()=>{s(!l)};return a.createElement("div",{className:"container"},a.createElement(Qk,{to:"/admin"},a.createElement(Rn,null)," Back to Admin Dashboard"),a.createElement(Yk,null,a.createElement(Kk,null,"Manage Reviews"),a.createElement(Xk,{to:"/admin/reviews/add"},a.createElement(Gl,null)," Add New Review")),a.createElement(qk,null,a.createElement(Zk,null,a.createElement(e9,null,a.createElement(Nn,null)),a.createElement(Jk,{type:"text",placeholder:"Search reviews...",value:n,onChange:S=>r(S.target.value)})),a.createElement(t9,{value:o,onChange:S=>i(S.target.value)},a.createElement("option",{value:""},"All Categories"),d.map(S=>a.createElement("option",{key:S,value:S},S))),a.createElement(n9,{className:l?"active":"",onClick:w},a.createElement(Ti,null)," Featured Only")),m.length>0?a.createElement(r9,null,a.createElement(o9,null,a.createElement(i9,null,a.createElement("tr",null,a.createElement("th",null,"Review"),a.createElement("th",null,"Rating"),a.createElement("th",null,"Featured"),a.createElement("th",null,"Date"),a.createElement("th",null,"Actions"))),a.createElement(a9,null,m.map(S=>a.createElement("tr",{key:S.id},a.createElement("td",null,a.createElement(l9,null,a.createElement(s9,null,a.createElement(c9,null,a.createElement(qd,null))),a.createElement(u9,null,a.createElement(d9,null,S.title),a.createElement(m9,null,S.productName)))),a.createElement("td",null,a.createElement(f9,null,[...Array(5)].map((g,v)=>a.createElement(qn,{key:v,size:12,color:v<Math.floor(S.rating)?"#F59E0B":"#334155"})),a.createElement("span",{style:{marginLeft:"0.5rem"}},S.rating.toFixed(1)))),a.createElement("td",null,S.featured?a.createElement(p9,null,"Featured"):a.createElement(h9,null,"Not Featured")),a.createElement("td",null,S.date),a.createElement("td",null,a.createElement(g9,null,a.createElement(v9,{to:`/admin/reviews/edit/${S.id}`},a.createElement(cn,null)),a.createElement(y9,{onClick:()=>p(S.id)},a.createElement(Fi,null))))))))):a.createElement(x9,null,"No reviews found matching your filters."),c&&a.createElement(a.Fragment,null,a.createElement(E9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),a.createElement(w9,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{type:"spring",damping:25,stiffness:300}},a.createElement(b9,null,"Delete Review"),a.createElement(S9,null,"Are you sure you want to delete this review? This action cannot be undone."),a.createElement(k9,null,a.createElement(C9,{onClick:E},"Cancel"),a.createElement(P9,{onClick:h},"Delete")))))},L9=f.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 0;
`,F9=f(X)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    color: var(--primary);
  }
`,A9=f.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Xt=f.div`
  margin-bottom: 1.5rem;
`,qt=f.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,rc=f.input`
  width: 100%;
  padding: 0.75rem 1rem;
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
`,ah=f.select`
  width: 100%;
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
`,D9=f.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  min-height: 300px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,R9=f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,N9=f.input`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`,z9=f.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  margin-top: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`,M9=f.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`,I9=f.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  
  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`,V9=f.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,O9=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
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
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,$9=f(X)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--surface-light);
  border-radius: 0.375rem;
  color: var(--text);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--surface-lighter);
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,Co=f.div`
  color: var(--error);
  margin-top: 0.5rem;
  font-size: 0.875rem;
`,B9=f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,j9=f.input`
  width: 100px;
`,_9=f.span`
  font-weight: 500;
  color: var(--text);
`,U9=f.input`
  width: 100%;
  padding: 0.75rem 1rem;
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
`,H9=f.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
`,oc=()=>{const{id:e}=Ol(),t=An(),{addReview:n,updateReview:r,getReview:o}=Ld(),{products:i}=wi(),[l,s]=b.useState({title:"",productName:"",rating:4.5,videoUrl:"",content:"",category:"",tags:"",featured:!1}),[c,u]=b.useState({}),[d,m]=b.useState(!1),[p,h]=b.useState(""),E=!!e;b.useEffect(()=>{if(E){const x=o(e);x&&(s({...x,tags:x.tags.join(", ")}),h(x.videoUrl))}},[e,E,o]);const w=()=>{const x={};return l.title.trim()||(x.title="Title is required"),l.productName.trim()||(x.productName="Product name is required"),l.videoUrl.trim()?S(l.videoUrl)||(x.videoUrl="Please enter a valid YouTube embed URL (e.g., https://www.youtube.com/embed/VIDEO_ID)"):x.videoUrl="Video URL is required",l.content.trim()||(x.content="Content is required"),l.category.trim()||(x.category="Category is required"),u(x),Object.keys(x).length===0},S=x=>x.includes("youtube.com/embed/"),g=x=>{const{name:k,value:T,type:C,checked:F}=x.target;s(M=>({...M,[k]:C==="checkbox"?F:T})),c[k]&&u(M=>({...M,[k]:void 0}))},v=x=>{const{value:k}=x.target;s(T=>({...T,videoUrl:k})),S(k)&&h(k),c.videoUrl&&u(T=>({...T,videoUrl:void 0}))},y=x=>{if(x.preventDefault(),w()){m(!0);const k={...l,rating:parseFloat(l.rating),tags:l.tags.split(",").map(T=>T.trim()).filter(T=>T)};try{E?r(e,k):n(k),t("/admin/reviews")}catch(T){console.error("Error saving review:",T)}finally{m(!1)}}};return a.createElement("div",{className:"container"},a.createElement(L9,null,a.createElement(F9,{to:"/admin/reviews"},a.createElement(Rn,null)," Back to Reviews"),a.createElement(A9,null,E?"Edit Review":"Add New Review"),a.createElement("form",{onSubmit:y},a.createElement(Xt,null,a.createElement(qt,{htmlFor:"title"},"Review Title"),a.createElement(rc,{type:"text",id:"title",name:"title",value:l.title,onChange:g,placeholder:"Enter a compelling title for your review"}),c.title&&a.createElement(Co,null,c.title)),a.createElement(Xt,null,a.createElement(qt,{htmlFor:"productName"},"Product Name"),a.createElement(ah,{id:"productName",name:"productName",value:l.productName,onChange:g},a.createElement("option",{value:""},"Select a product"),i.map(x=>a.createElement("option",{key:x.id,value:x.title},x.title)),a.createElement("option",{value:"other"},"Other (not in list)")),l.productName==="other"&&a.createElement(rc,{type:"text",name:"productName",value:"",onChange:g,placeholder:"Enter product name",style:{marginTop:"0.5rem"}}),c.productName&&a.createElement(Co,null,c.productName)),a.createElement(Xt,null,a.createElement(qt,{htmlFor:"rating"},"Rating"),a.createElement(B9,null,a.createElement(j9,{type:"range",id:"rating",name:"rating",min:"1",max:"5",step:"0.1",value:l.rating,onChange:g}),a.createElement(_9,null,l.rating))),a.createElement(Xt,null,a.createElement(qt,{htmlFor:"videoUrl"},"YouTube Video URL (Embed URL)"),a.createElement(rc,{type:"text",id:"videoUrl",name:"videoUrl",value:l.videoUrl,onChange:v,placeholder:"https://www.youtube.com/embed/VIDEO_ID"}),c.videoUrl&&a.createElement(Co,null,c.videoUrl),a.createElement(z9,null,p?a.createElement(M9,{src:p,title:"Video Preview",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):a.createElement(I9,null,a.createElement(qd,null),a.createElement("p",null,"Enter a valid YouTube embed URL to see preview")))),a.createElement(Xt,null,a.createElement(qt,{htmlFor:"category"},"Category"),a.createElement(ah,{id:"category",name:"category",value:l.category,onChange:g},a.createElement("option",{value:""},"Select a category"),a.createElement("option",{value:"Marketing"},"Marketing"),a.createElement("option",{value:"Content"},"Content"),a.createElement("option",{value:"SEO"},"SEO"),a.createElement("option",{value:"Social Media"},"Social Media"),a.createElement("option",{value:"E-commerce"},"E-commerce"),a.createElement("option",{value:"Productivity"},"Productivity"),a.createElement("option",{value:"Analytics"},"Analytics")),c.category&&a.createElement(Co,null,c.category)),a.createElement(Xt,null,a.createElement(qt,{htmlFor:"tags"},"Tags"),a.createElement(U9,{type:"text",id:"tags",name:"tags",value:l.tags,onChange:g,placeholder:"email marketing, automation, ROI"}),a.createElement(H9,null,"Separate tags with commas")),a.createElement(Xt,null,a.createElement(qt,{htmlFor:"content"},"Review Content (HTML)"),a.createElement(D9,{id:"content",name:"content",value:l.content,onChange:g,placeholder:"<p>Write your detailed review here. You can use HTML tags for formatting.</p>"}),c.content&&a.createElement(Co,null,c.content)),a.createElement(Xt,null,a.createElement(R9,null,a.createElement(N9,{type:"checkbox",id:"featured",name:"featured",checked:l.featured,onChange:g}),a.createElement(qt,{htmlFor:"featured",style:{marginBottom:0}},"Feature this review"))),a.createElement(V9,null,a.createElement(O9,{type:"submit",disabled:d},a.createElement(Yl,null)," ",d?"Saving...":"Save Review"),a.createElement($9,{to:"/admin/reviews"},a.createElement(Li,null)," Cancel")))))},W9=f.div`
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
`,G9=f.h1`
  font-size: 2.5rem;
`,Y9=f(X)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    color: var(--primary);
  }
`,K9=f(X)`
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
`,Q9=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,X9=f.div`
  flex: 1;
  position: relative;
  min-width: 250px;
`,q9=f.input`
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
`,Z9=f.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,J9=f.select`
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
`,eC=f.select`
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
`,tC=f.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 3rem;
`,nC=f.table`
  width: 100%;
  border-collapse: collapse;
`,rC=f.thead`
  background-color: var(--surface-light);
  
  th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    color: var(--text);
  }
`,oC=f.tbody`
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
`,iC=f.div`
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.25rem;
`,aC=f.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`,ic=f.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  
  &.active {
    background-color: rgba(16, 185, 129, 0.1);
    color: #10B981;
  }
  
  &.pending {
    background-color: rgba(245, 158, 11, 0.1);
    color: #F59E0B;
  }
  
  &.inactive {
    background-color: rgba(239, 68, 68, 0.1);
    color: #EF4444;
  }
`,lC=f.div`
  font-weight: 500;
  color: var(--text);
  
  &.upcoming {
    color: #F59E0B;
  }
  
  &.overdue {
    color: #EF4444;
  }
`,sC=f.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
`,cC=f.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,ac=f.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.edit {
    background-color: rgba(99, 102, 241, 0.1);
    color: var(--primary);
    
    &:hover {
      background-color: var(--primary);
      color: white;
    }
  }
  
  &.delete {
    background-color: rgba(239, 68, 68, 0.1);
    color: var(--error);
    
    &:hover {
      background-color: var(--error);
      color: white;
    }
  }
  
  &.notify {
    background-color: rgba(245, 158, 11, 0.1);
    color: #F59E0B;
    
    &:hover {
      background-color: #F59E0B;
      color: white;
    }
  }
  
  &.thank {
    background-color: rgba(16, 185, 129, 0.1);
    color: #10B981;
    
    &:hover {
      background-color: #10B981;
      color: white;
    }
  }
`,uC=f(X)`
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
`,dC=f.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--surface);
  border-radius: 0.75rem;
  color: var(--text-secondary);
`,mC=f.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
`,fC=f.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,pC=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`,lh=f.div`
  background-color: var(--surface-light);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,sh=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ch=f.div`
  font-weight: 500;
`,uh=f.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`,dh=f.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,mh=f.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.reminder {
    background-color: rgba(245, 158, 11, 0.1);
    color: #F59E0B;
    
    &:hover {
      background-color: #F59E0B;
      color: white;
    }
  }
  
  &.warning {
    background-color: rgba(239, 68, 68, 0.1);
    color: #EF4444;
    
    &:hover {
      background-color: #EF4444;
      color: white;
    }
  }
`,hC=f(V.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  background-color: var(--surface);
  border-left: 4px solid var(--primary);
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 50;
  max-width: 24rem;
`,gC=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  
  &.success {
    background-color: rgba(16, 185, 129, 0.1);
    color: #10B981;
  }
  
  &.error {
    background-color: rgba(239, 68, 68, 0.1);
    color: #EF4444;
  }
`,vC=f.div`
  flex: 1;
`,yC=f.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`,xC=f.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`,EC=f(V.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 1.5rem;
  width: 90%;
  max-width: 28rem;
  z-index: 50;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,wC=f.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`,bC=f.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`,SC=f.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,fh=f.button`
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.cancel {
    background-color: var(--surface-light);
    color: var(--text);
    
    &:hover {
      background-color: var(--surface-lighter);
    }
  }
  
  &.confirm {
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
    }
  }
  
  &.delete {
    background-color: var(--error);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.2);
    }
  }
`,kC=f(V.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
`,CC=()=>{const{clients:e,deleteClient:t,getClientsWithUpcomingPayments:n,sendNotification:r}=Fd(),{products:o}=wi(),{subscriptions:i}=Pd(),[l,s]=b.useState(""),[c,u]=b.useState("all"),[d,m]=b.useState("all"),[p,h]=b.useState(!1),[E,w]=b.useState(null),[S,g]=b.useState(null),v=n(10),y=n(2),x=e.filter(R=>{const _=R.name.toLowerCase().includes(l.toLowerCase())||R.email.toLowerCase().includes(l.toLowerCase()),G=c==="all"||R.status===c,H=d==="all"||R.paymentCycle===d;return _&&G&&H}),k=R=>{const _={year:"numeric",month:"short",day:"numeric"};return new Date(R).toLocaleDateString(void 0,_)},T=R=>{const _=new Date,H=new Date(R).getTime()-_.getTime(),ie=Math.ceil(H/(1e3*3600*24));return ie<0?"overdue":ie<=10?"upcoming":"normal"},C=(R,_)=>{const G=r(R,_);g({type:G.success?"success":"error",title:G.success?"Notification Sent":"Error",message:G.message}),setTimeout(()=>{g(null)},3e3)},F=R=>{w({type:"delete",clientId:R,title:"Delete Client",message:"Are you sure you want to delete this client? This action cannot be undone."}),h(!0)},M=()=>{E&&(E.type==="delete"&&(t(E.clientId),g({type:"success",title:"Client Deleted",message:"The client has been successfully deleted."})),h(!1),w(null),setTimeout(()=>{g(null)},3e3))},I=R=>{const _=R.products.map(H=>{var ie;return((ie=o.find(Y=>Y.id===H))==null?void 0:ie.title)||"Unknown Product"}).join(", "),G=R.subscriptions.map(H=>{var ie;return((ie=i.find(Y=>Y.id===H))==null?void 0:ie.title)||"Unknown Subscription"}).join(", ");return{productNames:_||"None",subscriptionNames:G||"None"}};return a.createElement("div",{className:"container"},a.createElement(Y9,{to:"/admin"},a.createElement(Rn,null)," Back to Dashboard"),a.createElement(W9,null,a.createElement(G9,null,"Client Management"),a.createElement(K9,{to:"/admin/clients/add"},a.createElement(Gl,null)," Add New Client")),(v.length>0||y.length>0)&&a.createElement(mC,null,a.createElement(fC,null,a.createElement(Bs,null)," Payment Notifications"),a.createElement(pC,null,y.map(R=>a.createElement(lh,{key:`urgent-${R.id}`},a.createElement(sh,null,a.createElement(ch,null,R.name),a.createElement(ic,{className:"active"},"Urgent")),a.createElement(uh,null,"Payment due: ",k(R.nextPaymentDate)),a.createElement(dh,null,a.createElement(mh,{className:"warning",onClick:()=>C(R.id,"payment-warning")},a.createElement(vu,null)," Send 2-Day Warning")))),v.filter(R=>!y.some(_=>_.id===R.id)).map(R=>a.createElement(lh,{key:`upcoming-${R.id}`},a.createElement(sh,null,a.createElement(ch,null,R.name),a.createElement(ic,{className:"pending"},"Upcoming")),a.createElement(uh,null,"Payment due: ",k(R.nextPaymentDate)),a.createElement(dh,null,a.createElement(mh,{className:"reminder",onClick:()=>C(R.id,"payment-reminder")},a.createElement(Bs,null)," Send 10-Day Reminder")))))),a.createElement(Q9,null,a.createElement(X9,null,a.createElement(Z9,null,a.createElement(Nn,null)),a.createElement(q9,{type:"text",placeholder:"Search clients...",value:l,onChange:R=>s(R.target.value)})),a.createElement(J9,{value:c,onChange:R=>u(R.target.value)},a.createElement("option",{value:"all"},"All Statuses"),a.createElement("option",{value:"active"},"Active"),a.createElement("option",{value:"pending"},"Pending"),a.createElement("option",{value:"inactive"},"Inactive")),a.createElement(eC,{value:d,onChange:R=>m(R.target.value)},a.createElement("option",{value:"all"},"All Payment Cycles"),a.createElement("option",{value:"monthly"},"Monthly"),a.createElement("option",{value:"yearly"},"Yearly"))),x.length>0?a.createElement(tC,null,a.createElement(nC,null,a.createElement(rC,null,a.createElement("tr",null,a.createElement("th",null,"Client"),a.createElement("th",null,"Status"),a.createElement("th",null,"Next Payment"),a.createElement("th",null,"Products & Subscriptions"),a.createElement("th",null,"Actions"))),a.createElement(oC,null,x.map(R=>{const _=T(R.nextPaymentDate),{productNames:G,subscriptionNames:H}=I(R);return a.createElement("tr",{key:R.id},a.createElement("td",null,a.createElement(iC,null,R.name),a.createElement(aC,null,R.email)),a.createElement("td",null,a.createElement(ic,{className:R.status},R.status.charAt(0).toUpperCase()+R.status.slice(1))),a.createElement("td",null,a.createElement(lC,{className:_},k(R.nextPaymentDate)),a.createElement(sC,null,R.paymentCycle.charAt(0).toUpperCase()+R.paymentCycle.slice(1))),a.createElement("td",null,a.createElement("div",null,a.createElement("strong",null,"Products:")," ",G),a.createElement("div",null,a.createElement("strong",null,"Subscriptions:")," ",H)),a.createElement("td",null,a.createElement(cC,null,a.createElement(uC,{to:`/admin/clients/edit/${R.id}`,className:"edit"},a.createElement(cn,null)),a.createElement(ac,{className:"notify",onClick:()=>C(R.id,"payment-reminder"),title:"Send Payment Reminder"},a.createElement(Bs,null)),a.createElement(ac,{className:"thank",onClick:()=>C(R.id,"payment-thank-you"),title:"Send Thank You"},a.createElement(Yn,null)),a.createElement(ac,{className:"delete",onClick:()=>F(R.id),title:"Delete Client"},a.createElement(Fi,null)))))})))):a.createElement(dC,null,"No clients found matching your filters."),p&&a.createElement(a.Fragment,null,a.createElement(kC,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>h(!1)}),a.createElement(EC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20}},a.createElement(wC,null,E==null?void 0:E.title),a.createElement(bC,null,E==null?void 0:E.message),a.createElement(SC,null,a.createElement(fh,{className:"cancel",onClick:()=>h(!1)},"Cancel"),a.createElement(fh,{className:(E==null?void 0:E.type)==="delete"?"delete":"confirm",onClick:M},(E==null?void 0:E.type)==="delete"?"Delete":"Confirm")))),S&&a.createElement(hC,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:20}},a.createElement(gC,{className:S.type},S.type==="success"?a.createElement(Yn,null):a.createElement(vu,null)),a.createElement(vC,null,a.createElement(yC,null,S.title),a.createElement(xC,null,S.message))))},PC=f.div`
  padding: 3rem 0;
`,TC=f(X)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    color: var(--primary);
  }
`,LC=f.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`,FC=f.div`
  background-color: var(--surface);
  border-radius: 0.75rem;
  padding: 2rem;
  margin-bottom: 2rem;
`,ga=f.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,va=f.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--surface-light);
`,ph=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,Lt=f.div`
  margin-bottom: 1.5rem;
`,Ft=f.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,ya=f.input`
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
`,hh=f.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,AC=f.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  background-color: var(--surface-light);
  border: 1px solid var(--surface-light);
  color: var(--text);
  transition: all 0.3s ease;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`,gh=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,vh=f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,yh=f.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`,xh=f.input`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`,DC=f.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`,Eh=f.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.cancel {
    background-color: var(--surface-light);
    color: var(--text);
    
    &:hover {
      background-color: var(--surface-lighter);
    }
  }
  
  &.save {
    background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
    }
  }
`,RC=f(V.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  background-color: var(--surface);
  border-left: 4px solid var(--primary);
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 50;
`,lc=()=>{const e=An(),{id:t}=Ol(),n=!!t,{clients:r,addClient:o,updateClient:i,getClient:l}=Fd(),{products:s}=wi(),{subscriptions:c}=Pd(),[u,d]=b.useState({name:"",email:"",phone:"",products:[],subscriptions:[],paymentCycle:"monthly",nextPaymentDate:"",status:"active",notes:""}),[m,p]=b.useState(null);b.useEffect(()=>{if(n){const S=l(t);S?d({name:S.name,email:S.email,phone:S.phone||"",products:S.products||[],subscriptions:S.subscriptions||[],paymentCycle:S.paymentCycle||"monthly",nextPaymentDate:S.nextPaymentDate||"",status:S.status||"active",notes:S.notes||""}):e("/admin/clients")}},[n,t,l,e]);const h=S=>{const{name:g,value:v}=S.target;d(y=>({...y,[g]:v}))},E=(S,g)=>{const{value:v,checked:y}=S.target;d(x=>y?{...x,[g]:[...x[g],v]}:{...x,[g]:x[g].filter(k=>k!==v)})},w=S=>{if(S.preventDefault(),!u.name||!u.email||!u.nextPaymentDate){p("Please fill in all required fields"),setTimeout(()=>p(null),3e3);return}n?i(t,u):o(u),e("/admin/clients")};return a.createElement("div",{className:"container"},a.createElement(PC,null,a.createElement(TC,{to:"/admin/clients"},a.createElement(Rn,null)," Back to Clients"),a.createElement(LC,null,n?"Edit Client":"Add New Client"),a.createElement("form",{onSubmit:w},a.createElement(FC,null,a.createElement(ga,null,a.createElement(va,null,"Client Information"),a.createElement(ph,null,a.createElement(Lt,null,a.createElement(Ft,{htmlFor:"name"},"Name *"),a.createElement(ya,{type:"text",id:"name",name:"name",value:u.name,onChange:h,required:!0})),a.createElement(Lt,null,a.createElement(Ft,{htmlFor:"email"},"Email *"),a.createElement(ya,{type:"email",id:"email",name:"email",value:u.email,onChange:h,required:!0})),a.createElement(Lt,null,a.createElement(Ft,{htmlFor:"phone"},"Phone"),a.createElement(ya,{type:"tel",id:"phone",name:"phone",value:u.phone,onChange:h})),a.createElement(Lt,null,a.createElement(Ft,{htmlFor:"status"},"Status"),a.createElement(hh,{id:"status",name:"status",value:u.status,onChange:h},a.createElement("option",{value:"active"},"Active"),a.createElement("option",{value:"pending"},"Pending"),a.createElement("option",{value:"inactive"},"Inactive"))))),a.createElement(ga,null,a.createElement(va,null,"Payment Information"),a.createElement(ph,null,a.createElement(Lt,null,a.createElement(Ft,{htmlFor:"paymentCycle"},"Payment Cycle"),a.createElement(hh,{id:"paymentCycle",name:"paymentCycle",value:u.paymentCycle,onChange:h},a.createElement("option",{value:"monthly"},"Monthly"),a.createElement("option",{value:"yearly"},"Yearly"))),a.createElement(Lt,null,a.createElement(Ft,{htmlFor:"nextPaymentDate"},"Next Payment Date *"),a.createElement(ya,{type:"date",id:"nextPaymentDate",name:"nextPaymentDate",value:u.nextPaymentDate,onChange:h,required:!0})))),a.createElement(ga,null,a.createElement(va,null,"Products & Subscriptions"),a.createElement(Lt,null,a.createElement(Ft,null,"Products"),a.createElement(gh,null,s.map(S=>a.createElement(vh,{key:S.id},a.createElement(yh,null,a.createElement(xh,{type:"checkbox",value:S.id,checked:u.products.includes(S.id),onChange:g=>E(g,"products")}),S.title))))),a.createElement(Lt,null,a.createElement(Ft,null,"Subscriptions"),a.createElement(gh,null,c.map(S=>a.createElement(vh,{key:S.id},a.createElement(yh,null,a.createElement(xh,{type:"checkbox",value:S.id,checked:u.subscriptions.includes(S.id),onChange:g=>E(g,"subscriptions")}),S.title)))))),a.createElement(ga,null,a.createElement(va,null,"Additional Information"),a.createElement(Lt,null,a.createElement(Ft,{htmlFor:"notes"},"Notes"),a.createElement(AC,{id:"notes",name:"notes",value:u.notes,onChange:h,placeholder:"Add any additional notes about this client..."})))),a.createElement(DC,null,a.createElement(Eh,{type:"button",className:"cancel",onClick:()=>e("/admin/clients")},a.createElement(Li,null)," Cancel"),a.createElement(Eh,{type:"submit",className:"save"},a.createElement(Yl,null)," ",n?"Update Client":"Save Client"))),m&&a.createElement(RC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20}},m)))},NC=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
  text-align: center;
`,zC=f.h1`
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
`,MC=f.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,IC=f.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
`,VC=f.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,Hv=f(X)`
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
`,OC=f(Hv)`
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
  }
`,$C=f(Hv)`
  background-color: var(--surface);
  color: var(--text);
  border: 1px solid var(--surface-light);
  
  &:hover {
    background-color: var(--surface-light);
  }
`,BC=()=>a.createElement(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5}},a.createElement(NC,null,a.createElement(V.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5}},a.createElement(zC,null,"404")),a.createElement(V.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5,delay:.2}},a.createElement(MC,null,"Page Not Found"),a.createElement(IC,null,"The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."),a.createElement(VC,null,a.createElement(OC,{to:"/"},a.createElement(Ww,null)," Back to Home"),a.createElement($C,{to:"/products"},a.createElement(Nn,null)," Browse Products"))))),be=({children:e})=>{const{isAuthenticated:t}=Bg();return t?e:a.createElement(n4,{to:"/login",replace:!0})},jC=()=>{const{pathname:e}=lr();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null};function _C(){return a.createElement(d4,null,a.createElement(jC,null),a.createElement(h4,null,a.createElement(g4,null,a.createElement(y4,null,a.createElement(E4,null,a.createElement(b4,null,a.createElement(l8,null),a.createElement("main",null,a.createElement(o4,null,a.createElement(q,{path:"/",element:a.createElement(eb,null)}),a.createElement(q,{path:"/about",element:a.createElement(db,null)}),a.createElement(q,{path:"/contact",element:a.createElement(Pb,null)}),a.createElement(q,{path:"/products",element:a.createElement(jb,null)}),a.createElement(q,{path:"/subscriptions",element:a.createElement(m7,null)}),a.createElement(q,{path:"/reviews",element:a.createElement(V7,null)}),a.createElement(q,{path:"/login",element:a.createElement(Y7,null)}),a.createElement(q,{path:"/admin",element:a.createElement(be,null,a.createElement(oh,null))}),a.createElement(q,{path:"/admin/dashboard",element:a.createElement(be,null,a.createElement(oh,null))}),a.createElement(q,{path:"/admin/products",element:a.createElement(be,null,a.createElement(TS,null))}),a.createElement(q,{path:"/admin/products/add",element:a.createElement(be,null,a.createElement(ec,null))}),a.createElement(q,{path:"/admin/products/edit/:id",element:a.createElement(be,null,a.createElement(ec,null))}),a.createElement(q,{path:"/admin/subscriptions",element:a.createElement(be,null,a.createElement(Sk,null))}),a.createElement(q,{path:"/admin/subscriptions/add",element:a.createElement(be,null,a.createElement(nc,null))}),a.createElement(q,{path:"/admin/subscriptions/edit/:id",element:a.createElement(be,null,a.createElement(nc,null))}),a.createElement(q,{path:"/admin/reviews",element:a.createElement(be,null,a.createElement(T9,null))}),a.createElement(q,{path:"/admin/reviews/add",element:a.createElement(be,null,a.createElement(oc,null))}),a.createElement(q,{path:"/admin/reviews/edit/:id",element:a.createElement(be,null,a.createElement(oc,null))}),a.createElement(q,{path:"/admin/clients",element:a.createElement(be,null,a.createElement(CC,null))}),a.createElement(q,{path:"/admin/clients/add",element:a.createElement(be,null,a.createElement(lc,null))}),a.createElement(q,{path:"/admin/clients/edit/:id",element:a.createElement(be,null,a.createElement(lc,null))}),a.createElement(q,{path:"/admin/products/new",element:a.createElement(be,null,a.createElement(ec,null))}),a.createElement(q,{path:"/admin/subscriptions/new",element:a.createElement(be,null,a.createElement(nc,null))}),a.createElement(q,{path:"/admin/reviews/new",element:a.createElement(be,null,a.createElement(oc,null))}),a.createElement(q,{path:"/admin/clients/new",element:a.createElement(be,null,a.createElement(lc,null))}),a.createElement(q,{path:"*",element:a.createElement(BC,null)}))),a.createElement(f8,null)))))))}sc.createRoot(document.getElementById("root")).render(a.createElement(a.StrictMode,null,a.createElement(_C,null)));
