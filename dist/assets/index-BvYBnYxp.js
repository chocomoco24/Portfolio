(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Dy={exports:{}},Vd={},Ny={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc=Symbol.for("react.element"),ZE=Symbol.for("react.portal"),QE=Symbol.for("react.fragment"),JE=Symbol.for("react.strict_mode"),eT=Symbol.for("react.profiler"),tT=Symbol.for("react.provider"),nT=Symbol.for("react.context"),iT=Symbol.for("react.forward_ref"),rT=Symbol.for("react.suspense"),sT=Symbol.for("react.memo"),oT=Symbol.for("react.lazy"),N0=Symbol.iterator;function aT(n){return n===null||typeof n!="object"?null:(n=N0&&n[N0]||n["@@iterator"],typeof n=="function"?n:null)}var Iy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uy=Object.assign,Fy={};function Ul(n,e,t){this.props=n,this.context=e,this.refs=Fy,this.updater=t||Iy}Ul.prototype.isReactComponent={};Ul.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ul.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Oy(){}Oy.prototype=Ul.prototype;function W_(n,e,t){this.props=n,this.context=e,this.refs=Fy,this.updater=t||Iy}var X_=W_.prototype=new Oy;X_.constructor=W_;Uy(X_,Ul.prototype);X_.isPureReactComponent=!0;var I0=Array.isArray,ky=Object.prototype.hasOwnProperty,j_={current:null},By={key:!0,ref:!0,__self:!0,__source:!0};function zy(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ky.call(e,i)&&!By.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:mc,type:n,key:s,ref:o,props:r,_owner:j_.current}}function lT(n,e){return{$$typeof:mc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Y_(n){return typeof n=="object"&&n!==null&&n.$$typeof===mc}function uT(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var U0=/\/+/g;function dh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?uT(""+n.key):e.toString(36)}function Cf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case mc:case ZE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+dh(o,0):i,I0(r)?(t="",n!=null&&(t=n.replace(U0,"$&/")+"/"),Cf(r,e,t,"",function(u){return u})):r!=null&&(Y_(r)&&(r=lT(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(U0,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",I0(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+dh(s,a);o+=Cf(s,e,t,l,r)}else if(l=aT(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+dh(s,a++),o+=Cf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Tc(n,e,t){if(n==null)return n;var i=[],r=0;return Cf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function cT(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var hi={current:null},Rf={transition:null},fT={ReactCurrentDispatcher:hi,ReactCurrentBatchConfig:Rf,ReactCurrentOwner:j_};function Vy(){throw Error("act(...) is not supported in production builds of React.")}ct.Children={map:Tc,forEach:function(n,e,t){Tc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Tc(n,function(){e++}),e},toArray:function(n){return Tc(n,function(e){return e})||[]},only:function(n){if(!Y_(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ct.Component=Ul;ct.Fragment=QE;ct.Profiler=eT;ct.PureComponent=W_;ct.StrictMode=JE;ct.Suspense=rT;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fT;ct.act=Vy;ct.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Uy({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=j_.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)ky.call(e,l)&&!By.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:mc,type:n.type,key:r,ref:s,props:i,_owner:o}};ct.createContext=function(n){return n={$$typeof:nT,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:tT,_context:n},n.Consumer=n};ct.createElement=zy;ct.createFactory=function(n){var e=zy.bind(null,n);return e.type=n,e};ct.createRef=function(){return{current:null}};ct.forwardRef=function(n){return{$$typeof:iT,render:n}};ct.isValidElement=Y_;ct.lazy=function(n){return{$$typeof:oT,_payload:{_status:-1,_result:n},_init:cT}};ct.memo=function(n,e){return{$$typeof:sT,type:n,compare:e===void 0?null:e}};ct.startTransition=function(n){var e=Rf.transition;Rf.transition={};try{n()}finally{Rf.transition=e}};ct.unstable_act=Vy;ct.useCallback=function(n,e){return hi.current.useCallback(n,e)};ct.useContext=function(n){return hi.current.useContext(n)};ct.useDebugValue=function(){};ct.useDeferredValue=function(n){return hi.current.useDeferredValue(n)};ct.useEffect=function(n,e){return hi.current.useEffect(n,e)};ct.useId=function(){return hi.current.useId()};ct.useImperativeHandle=function(n,e,t){return hi.current.useImperativeHandle(n,e,t)};ct.useInsertionEffect=function(n,e){return hi.current.useInsertionEffect(n,e)};ct.useLayoutEffect=function(n,e){return hi.current.useLayoutEffect(n,e)};ct.useMemo=function(n,e){return hi.current.useMemo(n,e)};ct.useReducer=function(n,e,t){return hi.current.useReducer(n,e,t)};ct.useRef=function(n){return hi.current.useRef(n)};ct.useState=function(n){return hi.current.useState(n)};ct.useSyncExternalStore=function(n,e,t){return hi.current.useSyncExternalStore(n,e,t)};ct.useTransition=function(){return hi.current.useTransition()};ct.version="18.3.1";Ny.exports=ct;var Ke=Ny.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dT=Ke,hT=Symbol.for("react.element"),pT=Symbol.for("react.fragment"),mT=Object.prototype.hasOwnProperty,_T=dT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gT={key:!0,ref:!0,__self:!0,__source:!0};function Hy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)mT.call(e,i)&&!gT.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:hT,type:n,key:s,ref:o,props:r,_owner:_T.current}}Vd.Fragment=pT;Vd.jsx=Hy;Vd.jsxs=Hy;Dy.exports=Vd;var I=Dy.exports,Gy={exports:{}},Ki={},Wy={exports:{}},Xy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(O,G){var P=O.length;O.push(G);e:for(;0<P;){var te=P-1>>>1,ce=O[te];if(0<r(ce,G))O[te]=G,O[P]=ce,P=te;else break e}}function t(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var G=O[0],P=O.pop();if(P!==G){O[0]=P;e:for(var te=0,ce=O.length,Fe=ce>>>1;te<Fe;){var Ce=2*(te+1)-1,Ne=O[Ce],K=Ce+1,ae=O[K];if(0>r(Ne,P))K<ce&&0>r(ae,Ne)?(O[te]=ae,O[K]=P,te=K):(O[te]=Ne,O[Ce]=P,te=Ce);else if(K<ce&&0>r(ae,P))O[te]=ae,O[K]=P,te=K;else break e}}return G}function r(O,G){var P=O.sortIndex-G.sortIndex;return P!==0?P:O.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,h=!1,g=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(O){for(var G=t(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=O)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=t(u)}}function S(O){if(v=!1,x(O),!g)if(t(l)!==null)g=!0,k(w);else{var G=t(u);G!==null&&U(S,G.startTime-O)}}function w(O,G){g=!1,v&&(v=!1,p(y),y=-1),h=!0;var P=f;try{for(x(G),d=t(l);d!==null&&(!(d.expirationTime>G)||O&&!L());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var ce=te(d.expirationTime<=G);G=n.unstable_now(),typeof ce=="function"?d.callback=ce:d===t(l)&&i(l),x(G)}else i(l);d=t(l)}if(d!==null)var Fe=!0;else{var Ce=t(u);Ce!==null&&U(S,Ce.startTime-G),Fe=!1}return Fe}finally{d=null,f=P,h=!1}}var E=!1,T=null,y=-1,C=5,b=-1;function L(){return!(n.unstable_now()-b<C)}function N(){if(T!==null){var O=n.unstable_now();b=O;var G=!0;try{G=T(!0,O)}finally{G?W():(E=!1,T=null)}}else E=!1}var W;if(typeof m=="function")W=function(){m(N)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,D=z.port2;z.port1.onmessage=N,W=function(){D.postMessage(null)}}else W=function(){_(N,0)};function k(O){T=O,E||(E=!0,W())}function U(O,G){y=_(function(){O(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(O){O.callback=null},n.unstable_continueExecution=function(){g||h||(g=!0,k(w))},n.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<O?Math.floor(1e3/O):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(O){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var P=f;f=G;try{return O()}finally{f=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var P=f;f=O;try{return G()}finally{f=P}},n.unstable_scheduleCallback=function(O,G,P){var te=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?te+P:te):P=te,O){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=P+ce,O={id:c++,callback:G,priorityLevel:O,startTime:P,expirationTime:ce,sortIndex:-1},P>te?(O.sortIndex=P,e(u,O),t(l)===null&&O===t(u)&&(v?(p(y),y=-1):v=!0,U(S,P-te))):(O.sortIndex=ce,e(l,O),g||h||(g=!0,k(w))),O},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(O){var G=f;return function(){var P=f;f=G;try{return O.apply(this,arguments)}finally{f=P}}}})(Xy);Wy.exports=Xy;var vT=Wy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xT=Ke,Yi=vT;function de(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jy=new Set,Bu={};function fa(n,e){vl(n,e),vl(n+"Capture",e)}function vl(n,e){for(Bu[n]=e,n=0;n<e.length;n++)jy.add(e[n])}var ys=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ip=Object.prototype.hasOwnProperty,yT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,F0={},O0={};function ST(n){return Ip.call(O0,n)?!0:Ip.call(F0,n)?!1:yT.test(n)?O0[n]=!0:(F0[n]=!0,!1)}function MT(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function ET(n,e,t,i){if(e===null||typeof e>"u"||MT(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pi(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){zn[n]=new pi(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];zn[e]=new pi(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){zn[n]=new pi(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){zn[n]=new pi(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){zn[n]=new pi(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){zn[n]=new pi(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){zn[n]=new pi(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){zn[n]=new pi(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){zn[n]=new pi(n,5,!1,n.toLowerCase(),null,!1,!1)});var $_=/[\-:]([a-z])/g;function q_(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace($_,q_);zn[e]=new pi(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace($_,q_);zn[e]=new pi(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace($_,q_);zn[e]=new pi(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){zn[n]=new pi(n,1,!1,n.toLowerCase(),null,!1,!1)});zn.xlinkHref=new pi("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){zn[n]=new pi(n,1,!1,n.toLowerCase(),null,!0,!0)});function K_(n,e,t,i){var r=zn.hasOwnProperty(e)?zn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ET(e,t,r,i)&&(t=null),i||r===null?ST(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Rs=xT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wc=Symbol.for("react.element"),Ha=Symbol.for("react.portal"),Ga=Symbol.for("react.fragment"),Z_=Symbol.for("react.strict_mode"),Up=Symbol.for("react.profiler"),Yy=Symbol.for("react.provider"),$y=Symbol.for("react.context"),Q_=Symbol.for("react.forward_ref"),Fp=Symbol.for("react.suspense"),Op=Symbol.for("react.suspense_list"),J_=Symbol.for("react.memo"),Vs=Symbol.for("react.lazy"),qy=Symbol.for("react.offscreen"),k0=Symbol.iterator;function Vl(n){return n===null||typeof n!="object"?null:(n=k0&&n[k0]||n["@@iterator"],typeof n=="function"?n:null)}var Kt=Object.assign,hh;function su(n){if(hh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);hh=e&&e[1]||""}return`
`+hh+n}var ph=!1;function mh(n,e){if(!n||ph)return"";ph=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{ph=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?su(n):""}function TT(n){switch(n.tag){case 5:return su(n.type);case 16:return su("Lazy");case 13:return su("Suspense");case 19:return su("SuspenseList");case 0:case 2:case 15:return n=mh(n.type,!1),n;case 11:return n=mh(n.type.render,!1),n;case 1:return n=mh(n.type,!0),n;default:return""}}function kp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ga:return"Fragment";case Ha:return"Portal";case Up:return"Profiler";case Z_:return"StrictMode";case Fp:return"Suspense";case Op:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case $y:return(n.displayName||"Context")+".Consumer";case Yy:return(n._context.displayName||"Context")+".Provider";case Q_:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J_:return e=n.displayName||null,e!==null?e:kp(n.type)||"Memo";case Vs:e=n._payload,n=n._init;try{return kp(n(e))}catch{}}return null}function wT(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kp(e);case 8:return e===Z_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ho(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ky(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AT(n){var e=Ky(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ac(n){n._valueTracker||(n._valueTracker=AT(n))}function Zy(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Ky(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ed(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Bp(n,e){var t=e.checked;return Kt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function B0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ho(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qy(n,e){e=e.checked,e!=null&&K_(n,"checked",e,!1)}function zp(n,e){Qy(n,e);var t=ho(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Vp(n,e.type,t):e.hasOwnProperty("defaultValue")&&Vp(n,e.type,ho(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function z0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Vp(n,e,t){(e!=="number"||ed(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ou=Array.isArray;function il(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ho(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Hp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return Kt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function V0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(de(92));if(ou(t)){if(1<t.length)throw Error(de(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ho(t)}}function Jy(n,e){var t=ho(e.value),i=ho(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function H0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function eS(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?eS(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Cc,tS=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Cc=Cc||document.createElement("div"),Cc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function zu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var vu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CT=["Webkit","ms","Moz","O"];Object.keys(vu).forEach(function(n){CT.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),vu[e]=vu[n]})});function nS(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||vu.hasOwnProperty(n)&&vu[n]?(""+e).trim():e+"px"}function iS(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=nS(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var RT=Kt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wp(n,e){if(e){if(RT[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function Xp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jp=null;function eg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Yp=null,rl=null,sl=null;function G0(n){if(n=vc(n)){if(typeof Yp!="function")throw Error(de(280));var e=n.stateNode;e&&(e=jd(e),Yp(n.stateNode,n.type,e))}}function rS(n){rl?sl?sl.push(n):sl=[n]:rl=n}function sS(){if(rl){var n=rl,e=sl;if(sl=rl=null,G0(n),e)for(n=0;n<e.length;n++)G0(e[n])}}function oS(n,e){return n(e)}function aS(){}var _h=!1;function lS(n,e,t){if(_h)return n(e,t);_h=!0;try{return oS(n,e,t)}finally{_h=!1,(rl!==null||sl!==null)&&(aS(),sS())}}function Vu(n,e){var t=n.stateNode;if(t===null)return null;var i=jd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(de(231,e,typeof t));return t}var $p=!1;if(ys)try{var Hl={};Object.defineProperty(Hl,"passive",{get:function(){$p=!0}}),window.addEventListener("test",Hl,Hl),window.removeEventListener("test",Hl,Hl)}catch{$p=!1}function bT(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var xu=!1,td=null,nd=!1,qp=null,PT={onError:function(n){xu=!0,td=n}};function LT(n,e,t,i,r,s,o,a,l){xu=!1,td=null,bT.apply(PT,arguments)}function DT(n,e,t,i,r,s,o,a,l){if(LT.apply(this,arguments),xu){if(xu){var u=td;xu=!1,td=null}else throw Error(de(198));nd||(nd=!0,qp=u)}}function da(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function uS(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function W0(n){if(da(n)!==n)throw Error(de(188))}function NT(n){var e=n.alternate;if(!e){if(e=da(n),e===null)throw Error(de(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return W0(r),n;if(s===i)return W0(r),e;s=s.sibling}throw Error(de(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(de(189))}}if(t.alternate!==i)throw Error(de(190))}if(t.tag!==3)throw Error(de(188));return t.stateNode.current===t?n:e}function cS(n){return n=NT(n),n!==null?fS(n):null}function fS(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=fS(n);if(e!==null)return e;n=n.sibling}return null}var dS=Yi.unstable_scheduleCallback,X0=Yi.unstable_cancelCallback,IT=Yi.unstable_shouldYield,UT=Yi.unstable_requestPaint,ln=Yi.unstable_now,FT=Yi.unstable_getCurrentPriorityLevel,tg=Yi.unstable_ImmediatePriority,hS=Yi.unstable_UserBlockingPriority,id=Yi.unstable_NormalPriority,OT=Yi.unstable_LowPriority,pS=Yi.unstable_IdlePriority,Hd=null,Xr=null;function kT(n){if(Xr&&typeof Xr.onCommitFiberRoot=="function")try{Xr.onCommitFiberRoot(Hd,n,void 0,(n.current.flags&128)===128)}catch{}}var Cr=Math.clz32?Math.clz32:VT,BT=Math.log,zT=Math.LN2;function VT(n){return n>>>=0,n===0?32:31-(BT(n)/zT|0)|0}var Rc=64,bc=4194304;function au(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function rd(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=au(a):(s&=o,s!==0&&(i=au(s)))}else o=t&~r,o!==0?i=au(o):s!==0&&(i=au(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Cr(e),r=1<<t,i|=n[t],e&=~r;return i}function HT(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GT(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Cr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=HT(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Kp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function mS(){var n=Rc;return Rc<<=1,!(Rc&4194240)&&(Rc=64),n}function gh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function _c(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Cr(e),n[e]=t}function WT(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Cr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function ng(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Cr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Tt=0;function _S(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var gS,ig,vS,xS,yS,Zp=!1,Pc=[],to=null,no=null,io=null,Hu=new Map,Gu=new Map,Ws=[],XT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function j0(n,e){switch(n){case"focusin":case"focusout":to=null;break;case"dragenter":case"dragleave":no=null;break;case"mouseover":case"mouseout":io=null;break;case"pointerover":case"pointerout":Hu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gu.delete(e.pointerId)}}function Gl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=vc(e),e!==null&&ig(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function jT(n,e,t,i,r){switch(e){case"focusin":return to=Gl(to,n,e,t,i,r),!0;case"dragenter":return no=Gl(no,n,e,t,i,r),!0;case"mouseover":return io=Gl(io,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Hu.set(s,Gl(Hu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Gu.set(s,Gl(Gu.get(s)||null,n,e,t,i,r)),!0}return!1}function SS(n){var e=Bo(n.target);if(e!==null){var t=da(e);if(t!==null){if(e=t.tag,e===13){if(e=uS(t),e!==null){n.blockedOn=e,yS(n.priority,function(){vS(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Qp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);jp=i,t.target.dispatchEvent(i),jp=null}else return e=vc(t),e!==null&&ig(e),n.blockedOn=t,!1;e.shift()}return!0}function Y0(n,e,t){bf(n)&&t.delete(e)}function YT(){Zp=!1,to!==null&&bf(to)&&(to=null),no!==null&&bf(no)&&(no=null),io!==null&&bf(io)&&(io=null),Hu.forEach(Y0),Gu.forEach(Y0)}function Wl(n,e){n.blockedOn===e&&(n.blockedOn=null,Zp||(Zp=!0,Yi.unstable_scheduleCallback(Yi.unstable_NormalPriority,YT)))}function Wu(n){function e(r){return Wl(r,n)}if(0<Pc.length){Wl(Pc[0],n);for(var t=1;t<Pc.length;t++){var i=Pc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(to!==null&&Wl(to,n),no!==null&&Wl(no,n),io!==null&&Wl(io,n),Hu.forEach(e),Gu.forEach(e),t=0;t<Ws.length;t++)i=Ws[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ws.length&&(t=Ws[0],t.blockedOn===null);)SS(t),t.blockedOn===null&&Ws.shift()}var ol=Rs.ReactCurrentBatchConfig,sd=!0;function $T(n,e,t,i){var r=Tt,s=ol.transition;ol.transition=null;try{Tt=1,rg(n,e,t,i)}finally{Tt=r,ol.transition=s}}function qT(n,e,t,i){var r=Tt,s=ol.transition;ol.transition=null;try{Tt=4,rg(n,e,t,i)}finally{Tt=r,ol.transition=s}}function rg(n,e,t,i){if(sd){var r=Qp(n,e,t,i);if(r===null)Ch(n,e,i,od,t),j0(n,i);else if(jT(r,n,e,t,i))i.stopPropagation();else if(j0(n,i),e&4&&-1<XT.indexOf(n)){for(;r!==null;){var s=vc(r);if(s!==null&&gS(s),s=Qp(n,e,t,i),s===null&&Ch(n,e,i,od,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ch(n,e,i,null,t)}}var od=null;function Qp(n,e,t,i){if(od=null,n=eg(i),n=Bo(n),n!==null)if(e=da(n),e===null)n=null;else if(t=e.tag,t===13){if(n=uS(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return od=n,null}function MS(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FT()){case tg:return 1;case hS:return 4;case id:case OT:return 16;case pS:return 536870912;default:return 16}default:return 16}}var Ys=null,sg=null,Pf=null;function ES(){if(Pf)return Pf;var n,e=sg,t=e.length,i,r="value"in Ys?Ys.value:Ys.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Pf=r.slice(n,1<i?1-i:void 0)}function Lf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Lc(){return!0}function $0(){return!1}function Zi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Lc:$0,this.isPropagationStopped=$0,this}return Kt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Lc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Lc)},persist:function(){},isPersistent:Lc}),e}var Fl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},og=Zi(Fl),gc=Kt({},Fl,{view:0,detail:0}),KT=Zi(gc),vh,xh,Xl,Gd=Kt({},gc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ag,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xl&&(Xl&&n.type==="mousemove"?(vh=n.screenX-Xl.screenX,xh=n.screenY-Xl.screenY):xh=vh=0,Xl=n),vh)},movementY:function(n){return"movementY"in n?n.movementY:xh}}),q0=Zi(Gd),ZT=Kt({},Gd,{dataTransfer:0}),QT=Zi(ZT),JT=Kt({},gc,{relatedTarget:0}),yh=Zi(JT),ew=Kt({},Fl,{animationName:0,elapsedTime:0,pseudoElement:0}),tw=Zi(ew),nw=Kt({},Fl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),iw=Zi(nw),rw=Kt({},Fl,{data:0}),K0=Zi(rw),sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ow={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lw(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=aw[n])?!!e[n]:!1}function ag(){return lw}var uw=Kt({},gc,{key:function(n){if(n.key){var e=sw[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Lf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ow[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ag,charCode:function(n){return n.type==="keypress"?Lf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Lf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),cw=Zi(uw),fw=Kt({},Gd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Z0=Zi(fw),dw=Kt({},gc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ag}),hw=Zi(dw),pw=Kt({},Fl,{propertyName:0,elapsedTime:0,pseudoElement:0}),mw=Zi(pw),_w=Kt({},Gd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gw=Zi(_w),vw=[9,13,27,32],lg=ys&&"CompositionEvent"in window,yu=null;ys&&"documentMode"in document&&(yu=document.documentMode);var xw=ys&&"TextEvent"in window&&!yu,TS=ys&&(!lg||yu&&8<yu&&11>=yu),Q0=" ",J0=!1;function wS(n,e){switch(n){case"keyup":return vw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function AS(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Wa=!1;function yw(n,e){switch(n){case"compositionend":return AS(e);case"keypress":return e.which!==32?null:(J0=!0,Q0);case"textInput":return n=e.data,n===Q0&&J0?null:n;default:return null}}function Sw(n,e){if(Wa)return n==="compositionend"||!lg&&wS(n,e)?(n=ES(),Pf=sg=Ys=null,Wa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return TS&&e.locale!=="ko"?null:e.data;default:return null}}var Mw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ev(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Mw[n.type]:e==="textarea"}function CS(n,e,t,i){rS(i),e=ad(e,"onChange"),0<e.length&&(t=new og("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Su=null,Xu=null;function Ew(n){kS(n,0)}function Wd(n){var e=Ya(n);if(Zy(e))return n}function Tw(n,e){if(n==="change")return e}var RS=!1;if(ys){var Sh;if(ys){var Mh="oninput"in document;if(!Mh){var tv=document.createElement("div");tv.setAttribute("oninput","return;"),Mh=typeof tv.oninput=="function"}Sh=Mh}else Sh=!1;RS=Sh&&(!document.documentMode||9<document.documentMode)}function nv(){Su&&(Su.detachEvent("onpropertychange",bS),Xu=Su=null)}function bS(n){if(n.propertyName==="value"&&Wd(Xu)){var e=[];CS(e,Xu,n,eg(n)),lS(Ew,e)}}function ww(n,e,t){n==="focusin"?(nv(),Su=e,Xu=t,Su.attachEvent("onpropertychange",bS)):n==="focusout"&&nv()}function Aw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Wd(Xu)}function Cw(n,e){if(n==="click")return Wd(e)}function Rw(n,e){if(n==="input"||n==="change")return Wd(e)}function bw(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Pr=typeof Object.is=="function"?Object.is:bw;function ju(n,e){if(Pr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Ip.call(e,r)||!Pr(n[r],e[r]))return!1}return!0}function iv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rv(n,e){var t=iv(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=iv(t)}}function PS(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?PS(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function LS(){for(var n=window,e=ed();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ed(n.document)}return e}function ug(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Pw(n){var e=LS(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&PS(t.ownerDocument.documentElement,t)){if(i!==null&&ug(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=rv(t,s);var o=rv(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Lw=ys&&"documentMode"in document&&11>=document.documentMode,Xa=null,Jp=null,Mu=null,em=!1;function sv(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;em||Xa==null||Xa!==ed(i)||(i=Xa,"selectionStart"in i&&ug(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Mu&&ju(Mu,i)||(Mu=i,i=ad(Jp,"onSelect"),0<i.length&&(e=new og("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Xa)))}function Dc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ja={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Eh={},DS={};ys&&(DS=document.createElement("div").style,"AnimationEvent"in window||(delete ja.animationend.animation,delete ja.animationiteration.animation,delete ja.animationstart.animation),"TransitionEvent"in window||delete ja.transitionend.transition);function Xd(n){if(Eh[n])return Eh[n];if(!ja[n])return n;var e=ja[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in DS)return Eh[n]=e[t];return n}var NS=Xd("animationend"),IS=Xd("animationiteration"),US=Xd("animationstart"),FS=Xd("transitionend"),OS=new Map,ov="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function So(n,e){OS.set(n,e),fa(e,[n])}for(var Th=0;Th<ov.length;Th++){var wh=ov[Th],Dw=wh.toLowerCase(),Nw=wh[0].toUpperCase()+wh.slice(1);So(Dw,"on"+Nw)}So(NS,"onAnimationEnd");So(IS,"onAnimationIteration");So(US,"onAnimationStart");So("dblclick","onDoubleClick");So("focusin","onFocus");So("focusout","onBlur");So(FS,"onTransitionEnd");vl("onMouseEnter",["mouseout","mouseover"]);vl("onMouseLeave",["mouseout","mouseover"]);vl("onPointerEnter",["pointerout","pointerover"]);vl("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iw=new Set("cancel close invalid load scroll toggle".split(" ").concat(lu));function av(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,DT(i,e,void 0,n),n.currentTarget=null}function kS(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;av(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;av(r,a,u),s=l}}}if(nd)throw n=qp,nd=!1,qp=null,n}function Ft(n,e){var t=e[sm];t===void 0&&(t=e[sm]=new Set);var i=n+"__bubble";t.has(i)||(BS(e,n,2,!1),t.add(i))}function Ah(n,e,t){var i=0;e&&(i|=4),BS(t,n,i,e)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function Yu(n){if(!n[Nc]){n[Nc]=!0,jy.forEach(function(t){t!=="selectionchange"&&(Iw.has(t)||Ah(t,!1,n),Ah(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Nc]||(e[Nc]=!0,Ah("selectionchange",!1,e))}}function BS(n,e,t,i){switch(MS(e)){case 1:var r=$T;break;case 4:r=qT;break;default:r=rg}t=r.bind(null,e,t,n),r=void 0,!$p||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ch(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Bo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}lS(function(){var u=s,c=eg(t),d=[];e:{var f=OS.get(n);if(f!==void 0){var h=og,g=n;switch(n){case"keypress":if(Lf(t)===0)break e;case"keydown":case"keyup":h=cw;break;case"focusin":g="focus",h=yh;break;case"focusout":g="blur",h=yh;break;case"beforeblur":case"afterblur":h=yh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=q0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=QT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=hw;break;case NS:case IS:case US:h=tw;break;case FS:h=mw;break;case"scroll":h=KT;break;case"wheel":h=gw;break;case"copy":case"cut":case"paste":h=iw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Z0}var v=(e&4)!==0,_=!v&&n==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,p!==null&&(S=Vu(m,p),S!=null&&v.push($u(m,S,x)))),_)break;m=m.return}0<v.length&&(f=new h(f,g,null,t,c),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",f&&t!==jp&&(g=t.relatedTarget||t.fromElement)&&(Bo(g)||g[Ss]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=t.relatedTarget||t.toElement,h=u,g=g?Bo(g):null,g!==null&&(_=da(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(v=q0,S="onMouseLeave",p="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(v=Z0,S="onPointerLeave",p="onPointerEnter",m="pointer"),_=h==null?f:Ya(h),x=g==null?f:Ya(g),f=new v(S,m+"leave",h,t,c),f.target=_,f.relatedTarget=x,S=null,Bo(c)===u&&(v=new v(p,m+"enter",g,t,c),v.target=x,v.relatedTarget=_,S=v),_=S,h&&g)t:{for(v=h,p=g,m=0,x=v;x;x=xa(x))m++;for(x=0,S=p;S;S=xa(S))x++;for(;0<m-x;)v=xa(v),m--;for(;0<x-m;)p=xa(p),x--;for(;m--;){if(v===p||p!==null&&v===p.alternate)break t;v=xa(v),p=xa(p)}v=null}else v=null;h!==null&&lv(d,f,h,v,!1),g!==null&&_!==null&&lv(d,_,g,v,!0)}}e:{if(f=u?Ya(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var w=Tw;else if(ev(f))if(RS)w=Rw;else{w=Aw;var E=ww}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=Cw);if(w&&(w=w(n,u))){CS(d,w,t,c);break e}E&&E(n,f,u),n==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Vp(f,"number",f.value)}switch(E=u?Ya(u):window,n){case"focusin":(ev(E)||E.contentEditable==="true")&&(Xa=E,Jp=u,Mu=null);break;case"focusout":Mu=Jp=Xa=null;break;case"mousedown":em=!0;break;case"contextmenu":case"mouseup":case"dragend":em=!1,sv(d,t,c);break;case"selectionchange":if(Lw)break;case"keydown":case"keyup":sv(d,t,c)}var T;if(lg)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Wa?wS(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(TS&&t.locale!=="ko"&&(Wa||y!=="onCompositionStart"?y==="onCompositionEnd"&&Wa&&(T=ES()):(Ys=c,sg="value"in Ys?Ys.value:Ys.textContent,Wa=!0)),E=ad(u,y),0<E.length&&(y=new K0(y,n,null,t,c),d.push({event:y,listeners:E}),T?y.data=T:(T=AS(t),T!==null&&(y.data=T)))),(T=xw?yw(n,t):Sw(n,t))&&(u=ad(u,"onBeforeInput"),0<u.length&&(c=new K0("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=T))}kS(d,e)})}function $u(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ad(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Vu(n,t),s!=null&&i.unshift($u(n,s,r)),s=Vu(n,e),s!=null&&i.push($u(n,s,r))),n=n.return}return i}function xa(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lv(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Vu(t,s),l!=null&&o.unshift($u(t,l,a))):r||(l=Vu(t,s),l!=null&&o.push($u(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Uw=/\r\n?/g,Fw=/\u0000|\uFFFD/g;function uv(n){return(typeof n=="string"?n:""+n).replace(Uw,`
`).replace(Fw,"")}function Ic(n,e,t){if(e=uv(e),uv(n)!==e&&t)throw Error(de(425))}function ld(){}var tm=null,nm=null;function im(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rm=typeof setTimeout=="function"?setTimeout:void 0,Ow=typeof clearTimeout=="function"?clearTimeout:void 0,cv=typeof Promise=="function"?Promise:void 0,kw=typeof queueMicrotask=="function"?queueMicrotask:typeof cv<"u"?function(n){return cv.resolve(null).then(n).catch(Bw)}:rm;function Bw(n){setTimeout(function(){throw n})}function Rh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Wu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Wu(e)}function ro(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function fv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ol=Math.random().toString(36).slice(2),Br="__reactFiber$"+Ol,qu="__reactProps$"+Ol,Ss="__reactContainer$"+Ol,sm="__reactEvents$"+Ol,zw="__reactListeners$"+Ol,Vw="__reactHandles$"+Ol;function Bo(n){var e=n[Br];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ss]||t[Br]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=fv(n);n!==null;){if(t=n[Br])return t;n=fv(n)}return e}n=t,t=n.parentNode}return null}function vc(n){return n=n[Br]||n[Ss],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ya(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(de(33))}function jd(n){return n[qu]||null}var om=[],$a=-1;function Mo(n){return{current:n}}function Ot(n){0>$a||(n.current=om[$a],om[$a]=null,$a--)}function It(n,e){$a++,om[$a]=n.current,n.current=e}var po={},ni=Mo(po),yi=Mo(!1),ta=po;function xl(n,e){var t=n.type.contextTypes;if(!t)return po;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Si(n){return n=n.childContextTypes,n!=null}function ud(){Ot(yi),Ot(ni)}function dv(n,e,t){if(ni.current!==po)throw Error(de(168));It(ni,e),It(yi,t)}function zS(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,wT(n)||"Unknown",r));return Kt({},t,i)}function cd(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||po,ta=ni.current,It(ni,n),It(yi,yi.current),!0}function hv(n,e,t){var i=n.stateNode;if(!i)throw Error(de(169));t?(n=zS(n,e,ta),i.__reactInternalMemoizedMergedChildContext=n,Ot(yi),Ot(ni),It(ni,n)):Ot(yi),It(yi,t)}var ls=null,Yd=!1,bh=!1;function VS(n){ls===null?ls=[n]:ls.push(n)}function Hw(n){Yd=!0,VS(n)}function Eo(){if(!bh&&ls!==null){bh=!0;var n=0,e=Tt;try{var t=ls;for(Tt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ls=null,Yd=!1}catch(r){throw ls!==null&&(ls=ls.slice(n+1)),dS(tg,Eo),r}finally{Tt=e,bh=!1}}return null}var qa=[],Ka=0,fd=null,dd=0,ir=[],rr=0,na=null,ds=1,hs="";function Do(n,e){qa[Ka++]=dd,qa[Ka++]=fd,fd=n,dd=e}function HS(n,e,t){ir[rr++]=ds,ir[rr++]=hs,ir[rr++]=na,na=n;var i=ds;n=hs;var r=32-Cr(i)-1;i&=~(1<<r),t+=1;var s=32-Cr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ds=1<<32-Cr(e)+r|t<<r|i,hs=s+n}else ds=1<<s|t<<r|i,hs=n}function cg(n){n.return!==null&&(Do(n,1),HS(n,1,0))}function fg(n){for(;n===fd;)fd=qa[--Ka],qa[Ka]=null,dd=qa[--Ka],qa[Ka]=null;for(;n===na;)na=ir[--rr],ir[rr]=null,hs=ir[--rr],ir[rr]=null,ds=ir[--rr],ir[rr]=null}var Xi=null,Hi=null,zt=!1,Tr=null;function GS(n,e){var t=ar(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function pv(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Xi=n,Hi=ro(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Xi=n,Hi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=na!==null?{id:ds,overflow:hs}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ar(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Xi=n,Hi=null,!0):!1;default:return!1}}function am(n){return(n.mode&1)!==0&&(n.flags&128)===0}function lm(n){if(zt){var e=Hi;if(e){var t=e;if(!pv(n,e)){if(am(n))throw Error(de(418));e=ro(t.nextSibling);var i=Xi;e&&pv(n,e)?GS(i,t):(n.flags=n.flags&-4097|2,zt=!1,Xi=n)}}else{if(am(n))throw Error(de(418));n.flags=n.flags&-4097|2,zt=!1,Xi=n}}}function mv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xi=n}function Uc(n){if(n!==Xi)return!1;if(!zt)return mv(n),zt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!im(n.type,n.memoizedProps)),e&&(e=Hi)){if(am(n))throw WS(),Error(de(418));for(;e;)GS(n,e),e=ro(e.nextSibling)}if(mv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(de(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Hi=ro(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Hi=null}}else Hi=Xi?ro(n.stateNode.nextSibling):null;return!0}function WS(){for(var n=Hi;n;)n=ro(n.nextSibling)}function yl(){Hi=Xi=null,zt=!1}function dg(n){Tr===null?Tr=[n]:Tr.push(n)}var Gw=Rs.ReactCurrentBatchConfig;function jl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(de(309));var i=t.stateNode}if(!i)throw Error(de(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(de(284));if(!t._owner)throw Error(de(290,n))}return n}function Fc(n,e){throw n=Object.prototype.toString.call(e),Error(de(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function _v(n){var e=n._init;return e(n._payload)}function XS(n){function e(p,m){if(n){var x=p.deletions;x===null?(p.deletions=[m],p.flags|=16):x.push(m)}}function t(p,m){if(!n)return null;for(;m!==null;)e(p,m),m=m.sibling;return null}function i(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function r(p,m){return p=lo(p,m),p.index=0,p.sibling=null,p}function s(p,m,x){return p.index=x,n?(x=p.alternate,x!==null?(x=x.index,x<m?(p.flags|=2,m):x):(p.flags|=2,m)):(p.flags|=1048576,m)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,m,x,S){return m===null||m.tag!==6?(m=Fh(x,p.mode,S),m.return=p,m):(m=r(m,x),m.return=p,m)}function l(p,m,x,S){var w=x.type;return w===Ga?c(p,m,x.props.children,S,x.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Vs&&_v(w)===m.type)?(S=r(m,x.props),S.ref=jl(p,m,x),S.return=p,S):(S=kf(x.type,x.key,x.props,null,p.mode,S),S.ref=jl(p,m,x),S.return=p,S)}function u(p,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Oh(x,p.mode,S),m.return=p,m):(m=r(m,x.children||[]),m.return=p,m)}function c(p,m,x,S,w){return m===null||m.tag!==7?(m=Yo(x,p.mode,S,w),m.return=p,m):(m=r(m,x),m.return=p,m)}function d(p,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Fh(""+m,p.mode,x),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case wc:return x=kf(m.type,m.key,m.props,null,p.mode,x),x.ref=jl(p,null,m),x.return=p,x;case Ha:return m=Oh(m,p.mode,x),m.return=p,m;case Vs:var S=m._init;return d(p,S(m._payload),x)}if(ou(m)||Vl(m))return m=Yo(m,p.mode,x,null),m.return=p,m;Fc(p,m)}return null}function f(p,m,x,S){var w=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(p,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case wc:return x.key===w?l(p,m,x,S):null;case Ha:return x.key===w?u(p,m,x,S):null;case Vs:return w=x._init,f(p,m,w(x._payload),S)}if(ou(x)||Vl(x))return w!==null?null:c(p,m,x,S,null);Fc(p,x)}return null}function h(p,m,x,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(x)||null,a(m,p,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case wc:return p=p.get(S.key===null?x:S.key)||null,l(m,p,S,w);case Ha:return p=p.get(S.key===null?x:S.key)||null,u(m,p,S,w);case Vs:var E=S._init;return h(p,m,x,E(S._payload),w)}if(ou(S)||Vl(S))return p=p.get(x)||null,c(m,p,S,w,null);Fc(m,S)}return null}function g(p,m,x,S){for(var w=null,E=null,T=m,y=m=0,C=null;T!==null&&y<x.length;y++){T.index>y?(C=T,T=null):C=T.sibling;var b=f(p,T,x[y],S);if(b===null){T===null&&(T=C);break}n&&T&&b.alternate===null&&e(p,T),m=s(b,m,y),E===null?w=b:E.sibling=b,E=b,T=C}if(y===x.length)return t(p,T),zt&&Do(p,y),w;if(T===null){for(;y<x.length;y++)T=d(p,x[y],S),T!==null&&(m=s(T,m,y),E===null?w=T:E.sibling=T,E=T);return zt&&Do(p,y),w}for(T=i(p,T);y<x.length;y++)C=h(T,p,y,x[y],S),C!==null&&(n&&C.alternate!==null&&T.delete(C.key===null?y:C.key),m=s(C,m,y),E===null?w=C:E.sibling=C,E=C);return n&&T.forEach(function(L){return e(p,L)}),zt&&Do(p,y),w}function v(p,m,x,S){var w=Vl(x);if(typeof w!="function")throw Error(de(150));if(x=w.call(x),x==null)throw Error(de(151));for(var E=w=null,T=m,y=m=0,C=null,b=x.next();T!==null&&!b.done;y++,b=x.next()){T.index>y?(C=T,T=null):C=T.sibling;var L=f(p,T,b.value,S);if(L===null){T===null&&(T=C);break}n&&T&&L.alternate===null&&e(p,T),m=s(L,m,y),E===null?w=L:E.sibling=L,E=L,T=C}if(b.done)return t(p,T),zt&&Do(p,y),w;if(T===null){for(;!b.done;y++,b=x.next())b=d(p,b.value,S),b!==null&&(m=s(b,m,y),E===null?w=b:E.sibling=b,E=b);return zt&&Do(p,y),w}for(T=i(p,T);!b.done;y++,b=x.next())b=h(T,p,y,b.value,S),b!==null&&(n&&b.alternate!==null&&T.delete(b.key===null?y:b.key),m=s(b,m,y),E===null?w=b:E.sibling=b,E=b);return n&&T.forEach(function(N){return e(p,N)}),zt&&Do(p,y),w}function _(p,m,x,S){if(typeof x=="object"&&x!==null&&x.type===Ga&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case wc:e:{for(var w=x.key,E=m;E!==null;){if(E.key===w){if(w=x.type,w===Ga){if(E.tag===7){t(p,E.sibling),m=r(E,x.props.children),m.return=p,p=m;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Vs&&_v(w)===E.type){t(p,E.sibling),m=r(E,x.props),m.ref=jl(p,E,x),m.return=p,p=m;break e}t(p,E);break}else e(p,E);E=E.sibling}x.type===Ga?(m=Yo(x.props.children,p.mode,S,x.key),m.return=p,p=m):(S=kf(x.type,x.key,x.props,null,p.mode,S),S.ref=jl(p,m,x),S.return=p,p=S)}return o(p);case Ha:e:{for(E=x.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){t(p,m.sibling),m=r(m,x.children||[]),m.return=p,p=m;break e}else{t(p,m);break}else e(p,m);m=m.sibling}m=Oh(x,p.mode,S),m.return=p,p=m}return o(p);case Vs:return E=x._init,_(p,m,E(x._payload),S)}if(ou(x))return g(p,m,x,S);if(Vl(x))return v(p,m,x,S);Fc(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(t(p,m.sibling),m=r(m,x),m.return=p,p=m):(t(p,m),m=Fh(x,p.mode,S),m.return=p,p=m),o(p)):t(p,m)}return _}var Sl=XS(!0),jS=XS(!1),hd=Mo(null),pd=null,Za=null,hg=null;function pg(){hg=Za=pd=null}function mg(n){var e=hd.current;Ot(hd),n._currentValue=e}function um(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function al(n,e){pd=n,hg=Za=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(xi=!0),n.firstContext=null)}function hr(n){var e=n._currentValue;if(hg!==n)if(n={context:n,memoizedValue:e,next:null},Za===null){if(pd===null)throw Error(de(308));Za=n,pd.dependencies={lanes:0,firstContext:n}}else Za=Za.next=n;return e}var zo=null;function _g(n){zo===null?zo=[n]:zo.push(n)}function YS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,_g(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ms(n,i)}function Ms(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Hs=!1;function gg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $S(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _s(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function so(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,gt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ms(n,t)}return r=i.interleaved,r===null?(e.next=e,_g(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ms(n,t)}function Df(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ng(n,t)}}function gv(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function md(n,e,t,i){var r=n.updateQueue;Hs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,h=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,v=a;switch(f=e,h=t,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(h,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(h,d,f):g,f==null)break e;d=Kt({},d,f);break e;case 2:Hs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ra|=o,n.lanes=o,n.memoizedState=d}}function vv(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var xc={},jr=Mo(xc),Ku=Mo(xc),Zu=Mo(xc);function Vo(n){if(n===xc)throw Error(de(174));return n}function vg(n,e){switch(It(Zu,e),It(Ku,n),It(jr,xc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Gp(e,n)}Ot(jr),It(jr,e)}function Ml(){Ot(jr),Ot(Ku),Ot(Zu)}function qS(n){Vo(Zu.current);var e=Vo(jr.current),t=Gp(e,n.type);e!==t&&(It(Ku,n),It(jr,t))}function xg(n){Ku.current===n&&(Ot(jr),Ot(Ku))}var Xt=Mo(0);function _d(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ph=[];function yg(){for(var n=0;n<Ph.length;n++)Ph[n]._workInProgressVersionPrimary=null;Ph.length=0}var Nf=Rs.ReactCurrentDispatcher,Lh=Rs.ReactCurrentBatchConfig,ia=0,$t=null,yn=null,Ln=null,gd=!1,Eu=!1,Qu=0,Ww=0;function Gn(){throw Error(de(321))}function Sg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Pr(n[t],e[t]))return!1;return!0}function Mg(n,e,t,i,r,s){if(ia=s,$t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nf.current=n===null||n.memoizedState===null?$w:qw,n=t(i,r),Eu){s=0;do{if(Eu=!1,Qu=0,25<=s)throw Error(de(301));s+=1,Ln=yn=null,e.updateQueue=null,Nf.current=Kw,n=t(i,r)}while(Eu)}if(Nf.current=vd,e=yn!==null&&yn.next!==null,ia=0,Ln=yn=$t=null,gd=!1,e)throw Error(de(300));return n}function Eg(){var n=Qu!==0;return Qu=0,n}function Ur(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?$t.memoizedState=Ln=n:Ln=Ln.next=n,Ln}function pr(){if(yn===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=yn.next;var e=Ln===null?$t.memoizedState:Ln.next;if(e!==null)Ln=e,yn=n;else{if(n===null)throw Error(de(310));yn=n,n={memoizedState:yn.memoizedState,baseState:yn.baseState,baseQueue:yn.baseQueue,queue:yn.queue,next:null},Ln===null?$t.memoizedState=Ln=n:Ln=Ln.next=n}return Ln}function Ju(n,e){return typeof e=="function"?e(n):e}function Dh(n){var e=pr(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=yn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ia&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,$t.lanes|=c,ra|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Pr(i,e.memoizedState)||(xi=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,$t.lanes|=s,ra|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Nh(n){var e=pr(),t=e.queue;if(t===null)throw Error(de(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Pr(s,e.memoizedState)||(xi=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function KS(){}function ZS(n,e){var t=$t,i=pr(),r=e(),s=!Pr(i.memoizedState,r);if(s&&(i.memoizedState=r,xi=!0),i=i.queue,Tg(e1.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ln!==null&&Ln.memoizedState.tag&1){if(t.flags|=2048,ec(9,JS.bind(null,t,i,r,e),void 0,null),Dn===null)throw Error(de(349));ia&30||QS(t,e,r)}return r}function QS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=$t.updateQueue,e===null?(e={lastEffect:null,stores:null},$t.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function JS(n,e,t,i){e.value=t,e.getSnapshot=i,t1(e)&&n1(n)}function e1(n,e,t){return t(function(){t1(e)&&n1(n)})}function t1(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Pr(n,t)}catch{return!0}}function n1(n){var e=Ms(n,1);e!==null&&Rr(e,n,1,-1)}function xv(n){var e=Ur();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ju,lastRenderedState:n},e.queue=n,n=n.dispatch=Yw.bind(null,$t,n),[e.memoizedState,n]}function ec(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=$t.updateQueue,e===null?(e={lastEffect:null,stores:null},$t.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function i1(){return pr().memoizedState}function If(n,e,t,i){var r=Ur();$t.flags|=n,r.memoizedState=ec(1|e,t,void 0,i===void 0?null:i)}function $d(n,e,t,i){var r=pr();i=i===void 0?null:i;var s=void 0;if(yn!==null){var o=yn.memoizedState;if(s=o.destroy,i!==null&&Sg(i,o.deps)){r.memoizedState=ec(e,t,s,i);return}}$t.flags|=n,r.memoizedState=ec(1|e,t,s,i)}function yv(n,e){return If(8390656,8,n,e)}function Tg(n,e){return $d(2048,8,n,e)}function r1(n,e){return $d(4,2,n,e)}function s1(n,e){return $d(4,4,n,e)}function o1(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function a1(n,e,t){return t=t!=null?t.concat([n]):null,$d(4,4,o1.bind(null,e,n),t)}function wg(){}function l1(n,e){var t=pr();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Sg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function u1(n,e){var t=pr();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Sg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function c1(n,e,t){return ia&21?(Pr(t,e)||(t=mS(),$t.lanes|=t,ra|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,xi=!0),n.memoizedState=t)}function Xw(n,e){var t=Tt;Tt=t!==0&&4>t?t:4,n(!0);var i=Lh.transition;Lh.transition={};try{n(!1),e()}finally{Tt=t,Lh.transition=i}}function f1(){return pr().memoizedState}function jw(n,e,t){var i=ao(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},d1(n))h1(e,t);else if(t=YS(n,e,t,i),t!==null){var r=fi();Rr(t,n,i,r),p1(t,e,i)}}function Yw(n,e,t){var i=ao(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(d1(n))h1(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Pr(a,o)){var l=e.interleaved;l===null?(r.next=r,_g(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=YS(n,e,r,i),t!==null&&(r=fi(),Rr(t,n,i,r),p1(t,e,i))}}function d1(n){var e=n.alternate;return n===$t||e!==null&&e===$t}function h1(n,e){Eu=gd=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function p1(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ng(n,t)}}var vd={readContext:hr,useCallback:Gn,useContext:Gn,useEffect:Gn,useImperativeHandle:Gn,useInsertionEffect:Gn,useLayoutEffect:Gn,useMemo:Gn,useReducer:Gn,useRef:Gn,useState:Gn,useDebugValue:Gn,useDeferredValue:Gn,useTransition:Gn,useMutableSource:Gn,useSyncExternalStore:Gn,useId:Gn,unstable_isNewReconciler:!1},$w={readContext:hr,useCallback:function(n,e){return Ur().memoizedState=[n,e===void 0?null:e],n},useContext:hr,useEffect:yv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,If(4194308,4,o1.bind(null,e,n),t)},useLayoutEffect:function(n,e){return If(4194308,4,n,e)},useInsertionEffect:function(n,e){return If(4,2,n,e)},useMemo:function(n,e){var t=Ur();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ur();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=jw.bind(null,$t,n),[i.memoizedState,n]},useRef:function(n){var e=Ur();return n={current:n},e.memoizedState=n},useState:xv,useDebugValue:wg,useDeferredValue:function(n){return Ur().memoizedState=n},useTransition:function(){var n=xv(!1),e=n[0];return n=Xw.bind(null,n[1]),Ur().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=$t,r=Ur();if(zt){if(t===void 0)throw Error(de(407));t=t()}else{if(t=e(),Dn===null)throw Error(de(349));ia&30||QS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,yv(e1.bind(null,i,s,n),[n]),i.flags|=2048,ec(9,JS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ur(),e=Dn.identifierPrefix;if(zt){var t=hs,i=ds;t=(i&~(1<<32-Cr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Qu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Ww++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},qw={readContext:hr,useCallback:l1,useContext:hr,useEffect:Tg,useImperativeHandle:a1,useInsertionEffect:r1,useLayoutEffect:s1,useMemo:u1,useReducer:Dh,useRef:i1,useState:function(){return Dh(Ju)},useDebugValue:wg,useDeferredValue:function(n){var e=pr();return c1(e,yn.memoizedState,n)},useTransition:function(){var n=Dh(Ju)[0],e=pr().memoizedState;return[n,e]},useMutableSource:KS,useSyncExternalStore:ZS,useId:f1,unstable_isNewReconciler:!1},Kw={readContext:hr,useCallback:l1,useContext:hr,useEffect:Tg,useImperativeHandle:a1,useInsertionEffect:r1,useLayoutEffect:s1,useMemo:u1,useReducer:Nh,useRef:i1,useState:function(){return Nh(Ju)},useDebugValue:wg,useDeferredValue:function(n){var e=pr();return yn===null?e.memoizedState=n:c1(e,yn.memoizedState,n)},useTransition:function(){var n=Nh(Ju)[0],e=pr().memoizedState;return[n,e]},useMutableSource:KS,useSyncExternalStore:ZS,useId:f1,unstable_isNewReconciler:!1};function Mr(n,e){if(n&&n.defaultProps){e=Kt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function cm(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Kt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var qd={isMounted:function(n){return(n=n._reactInternals)?da(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=fi(),r=ao(n),s=_s(i,r);s.payload=e,t!=null&&(s.callback=t),e=so(n,s,r),e!==null&&(Rr(e,n,r,i),Df(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=fi(),r=ao(n),s=_s(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=so(n,s,r),e!==null&&(Rr(e,n,r,i),Df(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=fi(),i=ao(n),r=_s(t,i);r.tag=2,e!=null&&(r.callback=e),e=so(n,r,i),e!==null&&(Rr(e,n,i,t),Df(e,n,i))}};function Sv(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ju(t,i)||!ju(r,s):!0}function m1(n,e,t){var i=!1,r=po,s=e.contextType;return typeof s=="object"&&s!==null?s=hr(s):(r=Si(e)?ta:ni.current,i=e.contextTypes,s=(i=i!=null)?xl(n,r):po),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Mv(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&qd.enqueueReplaceState(e,e.state,null)}function fm(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},gg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=hr(s):(s=Si(e)?ta:ni.current,r.context=xl(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cm(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&qd.enqueueReplaceState(r,r.state,null),md(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function El(n,e){try{var t="",i=e;do t+=TT(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Ih(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function dm(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Zw=typeof WeakMap=="function"?WeakMap:Map;function _1(n,e,t){t=_s(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){yd||(yd=!0,Mm=i),dm(n,e)},t}function g1(n,e,t){t=_s(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){dm(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){dm(n,e),typeof i!="function"&&(oo===null?oo=new Set([this]):oo.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Ev(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Zw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=fA.bind(null,n,e,t),e.then(n,n))}function Tv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function wv(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=_s(-1,1),e.tag=2,so(t,e,1))),t.lanes|=1),n)}var Qw=Rs.ReactCurrentOwner,xi=!1;function ai(n,e,t,i){e.child=n===null?jS(e,null,t,i):Sl(e,n.child,t,i)}function Av(n,e,t,i,r){t=t.render;var s=e.ref;return al(e,r),i=Mg(n,e,t,i,s,r),t=Eg(),n!==null&&!xi?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Es(n,e,r)):(zt&&t&&cg(e),e.flags|=1,ai(n,e,i,r),e.child)}function Cv(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Ng(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,v1(n,e,s,i,r)):(n=kf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ju,t(o,i)&&n.ref===e.ref)return Es(n,e,r)}return e.flags|=1,n=lo(s,i),n.ref=e.ref,n.return=e,e.child=n}function v1(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ju(s,i)&&n.ref===e.ref)if(xi=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(xi=!0);else return e.lanes=n.lanes,Es(n,e,r)}return hm(n,e,t,i,r)}function x1(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Ja,Ii),Ii|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,It(Ja,Ii),Ii|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,It(Ja,Ii),Ii|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,It(Ja,Ii),Ii|=i;return ai(n,e,r,t),e.child}function y1(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function hm(n,e,t,i,r){var s=Si(t)?ta:ni.current;return s=xl(e,s),al(e,r),t=Mg(n,e,t,i,s,r),i=Eg(),n!==null&&!xi?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Es(n,e,r)):(zt&&i&&cg(e),e.flags|=1,ai(n,e,t,r),e.child)}function Rv(n,e,t,i,r){if(Si(t)){var s=!0;cd(e)}else s=!1;if(al(e,r),e.stateNode===null)Uf(n,e),m1(e,t,i),fm(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=hr(u):(u=Si(t)?ta:ni.current,u=xl(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Mv(e,o,i,u),Hs=!1;var f=e.memoizedState;o.state=f,md(e,i,o,r),l=e.memoizedState,a!==i||f!==l||yi.current||Hs?(typeof c=="function"&&(cm(e,t,c,i),l=e.memoizedState),(a=Hs||Sv(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,$S(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Mr(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=hr(l):(l=Si(t)?ta:ni.current,l=xl(e,l));var h=t.getDerivedStateFromProps;(c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Mv(e,o,i,l),Hs=!1,f=e.memoizedState,o.state=f,md(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||yi.current||Hs?(typeof h=="function"&&(cm(e,t,h,i),g=e.memoizedState),(u=Hs||Sv(e,t,u,i,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return pm(n,e,t,i,s,r)}function pm(n,e,t,i,r,s){y1(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&hv(e,t,!1),Es(n,e,s);i=e.stateNode,Qw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Sl(e,n.child,null,s),e.child=Sl(e,null,a,s)):ai(n,e,a,s),e.memoizedState=i.state,r&&hv(e,t,!0),e.child}function S1(n){var e=n.stateNode;e.pendingContext?dv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&dv(n,e.context,!1),vg(n,e.containerInfo)}function bv(n,e,t,i,r){return yl(),dg(r),e.flags|=256,ai(n,e,t,i),e.child}var mm={dehydrated:null,treeContext:null,retryLane:0};function _m(n){return{baseLanes:n,cachePool:null,transitions:null}}function M1(n,e,t){var i=e.pendingProps,r=Xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),It(Xt,r&1),n===null)return lm(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qd(o,i,0,null),n=Yo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=_m(t),e.memoizedState=mm,n):Ag(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Jw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lo(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=lo(a,s):(s=Yo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?_m(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=mm,i}return s=n.child,n=s.sibling,i=lo(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Ag(n,e){return e=Qd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Oc(n,e,t,i){return i!==null&&dg(i),Sl(e,n.child,null,t),n=Ag(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Jw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Ih(Error(de(422))),Oc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Qd({mode:"visible",children:i.children},r,0,null),s=Yo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Sl(e,n.child,null,o),e.child.memoizedState=_m(o),e.memoizedState=mm,s);if(!(e.mode&1))return Oc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(de(419)),i=Ih(s,i,void 0),Oc(n,e,o,i)}if(a=(o&n.childLanes)!==0,xi||a){if(i=Dn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ms(n,r),Rr(i,n,r,-1))}return Dg(),i=Ih(Error(de(421))),Oc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=dA.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Hi=ro(r.nextSibling),Xi=e,zt=!0,Tr=null,n!==null&&(ir[rr++]=ds,ir[rr++]=hs,ir[rr++]=na,ds=n.id,hs=n.overflow,na=e),e=Ag(e,i.children),e.flags|=4096,e)}function Pv(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),um(n.return,e,t)}function Uh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function E1(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ai(n,e,i.children,t),i=Xt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Pv(n,t,e);else if(n.tag===19)Pv(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(It(Xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&_d(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Uh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&_d(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Uh(e,!0,t,null,s);break;case"together":Uh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Es(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ra|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(de(153));if(e.child!==null){for(n=e.child,t=lo(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=lo(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function eA(n,e,t){switch(e.tag){case 3:S1(e),yl();break;case 5:qS(e);break;case 1:Si(e.type)&&cd(e);break;case 4:vg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;It(hd,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(It(Xt,Xt.current&1),e.flags|=128,null):t&e.child.childLanes?M1(n,e,t):(It(Xt,Xt.current&1),n=Es(n,e,t),n!==null?n.sibling:null);It(Xt,Xt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return E1(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),It(Xt,Xt.current),i)break;return null;case 22:case 23:return e.lanes=0,x1(n,e,t)}return Es(n,e,t)}var T1,gm,w1,A1;T1=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};gm=function(){};w1=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Vo(jr.current);var s=null;switch(t){case"input":r=Bp(n,r),i=Bp(n,i),s=[];break;case"select":r=Kt({},r,{value:void 0}),i=Kt({},i,{value:void 0}),s=[];break;case"textarea":r=Hp(n,r),i=Hp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=ld)}Wp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ft("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};A1=function(n,e,t,i){t!==i&&(e.flags|=4)};function Yl(n,e){if(!zt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Wn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function tA(n,e,t){var i=e.pendingProps;switch(fg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wn(e),null;case 1:return Si(e.type)&&ud(),Wn(e),null;case 3:return i=e.stateNode,Ml(),Ot(yi),Ot(ni),yg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Uc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tr!==null&&(wm(Tr),Tr=null))),gm(n,e),Wn(e),null;case 5:xg(e);var r=Vo(Zu.current);if(t=e.type,n!==null&&e.stateNode!=null)w1(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return Wn(e),null}if(n=Vo(jr.current),Uc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Br]=e,i[qu]=s,n=(e.mode&1)!==0,t){case"dialog":Ft("cancel",i),Ft("close",i);break;case"iframe":case"object":case"embed":Ft("load",i);break;case"video":case"audio":for(r=0;r<lu.length;r++)Ft(lu[r],i);break;case"source":Ft("error",i);break;case"img":case"image":case"link":Ft("error",i),Ft("load",i);break;case"details":Ft("toggle",i);break;case"input":B0(i,s),Ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ft("invalid",i);break;case"textarea":V0(i,s),Ft("invalid",i)}Wp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ic(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ic(i.textContent,a,n),r=["children",""+a]):Bu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ft("scroll",i)}switch(t){case"input":Ac(i),z0(i,s,!0);break;case"textarea":Ac(i),H0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ld)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=eS(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Br]=e,n[qu]=i,T1(n,e,!1,!1),e.stateNode=n;e:{switch(o=Xp(t,i),t){case"dialog":Ft("cancel",n),Ft("close",n),r=i;break;case"iframe":case"object":case"embed":Ft("load",n),r=i;break;case"video":case"audio":for(r=0;r<lu.length;r++)Ft(lu[r],n);r=i;break;case"source":Ft("error",n),r=i;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),r=i;break;case"details":Ft("toggle",n),r=i;break;case"input":B0(n,i),r=Bp(n,i),Ft("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Kt({},i,{value:void 0}),Ft("invalid",n);break;case"textarea":V0(n,i),r=Hp(n,i),Ft("invalid",n);break;default:r=i}Wp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?iS(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tS(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&zu(n,l):typeof l=="number"&&zu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ft("scroll",n):l!=null&&K_(n,s,l,o))}switch(t){case"input":Ac(n),z0(n,i,!1);break;case"textarea":Ac(n),H0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ho(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?il(n,!!i.multiple,s,!1):i.defaultValue!=null&&il(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=ld)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wn(e),null;case 6:if(n&&e.stateNode!=null)A1(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(t=Vo(Zu.current),Vo(jr.current),Uc(e)){if(i=e.stateNode,t=e.memoizedProps,i[Br]=e,(s=i.nodeValue!==t)&&(n=Xi,n!==null))switch(n.tag){case 3:Ic(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ic(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Br]=e,e.stateNode=i}return Wn(e),null;case 13:if(Ot(Xt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Hi!==null&&e.mode&1&&!(e.flags&128))WS(),yl(),e.flags|=98560,s=!1;else if(s=Uc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[Br]=e}else yl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wn(e),s=!1}else Tr!==null&&(wm(Tr),Tr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Xt.current&1?Mn===0&&(Mn=3):Dg())),e.updateQueue!==null&&(e.flags|=4),Wn(e),null);case 4:return Ml(),gm(n,e),n===null&&Yu(e.stateNode.containerInfo),Wn(e),null;case 10:return mg(e.type._context),Wn(e),null;case 17:return Si(e.type)&&ud(),Wn(e),null;case 19:if(Ot(Xt),s=e.memoizedState,s===null)return Wn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Yl(s,!1);else{if(Mn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=_d(n),o!==null){for(e.flags|=128,Yl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return It(Xt,Xt.current&1|2),e.child}n=n.sibling}s.tail!==null&&ln()>Tl&&(e.flags|=128,i=!0,Yl(s,!1),e.lanes=4194304)}else{if(!i)if(n=_d(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Yl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!zt)return Wn(e),null}else 2*ln()-s.renderingStartTime>Tl&&t!==1073741824&&(e.flags|=128,i=!0,Yl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ln(),e.sibling=null,t=Xt.current,It(Xt,i?t&1|2:t&1),e):(Wn(e),null);case 22:case 23:return Lg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ii&1073741824&&(Wn(e),e.subtreeFlags&6&&(e.flags|=8192)):Wn(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function nA(n,e){switch(fg(e),e.tag){case 1:return Si(e.type)&&ud(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ml(),Ot(yi),Ot(ni),yg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return xg(e),null;case 13:if(Ot(Xt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(de(340));yl()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ot(Xt),null;case 4:return Ml(),null;case 10:return mg(e.type._context),null;case 22:case 23:return Lg(),null;case 24:return null;default:return null}}var kc=!1,Zn=!1,iA=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Qa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Jt(n,e,i)}else t.current=null}function vm(n,e,t){try{t()}catch(i){Jt(n,e,i)}}var Lv=!1;function rA(n,e){if(tm=sd,n=LS(),ug(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var h;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(nm={focusedElem:n,selectionRange:t},sd=!1,Pe=e;Pe!==null;)if(e=Pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Pe=n;else for(;Pe!==null;){e=Pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,_=g.memoizedState,p=e.stateNode,m=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Mr(e.type,v),_);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(S){Jt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}return g=Lv,Lv=!1,g}function Tu(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&vm(e,t,s)}r=r.next}while(r!==i)}}function Kd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function xm(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function C1(n){var e=n.alternate;e!==null&&(n.alternate=null,C1(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Br],delete e[qu],delete e[sm],delete e[zw],delete e[Vw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function R1(n){return n.tag===5||n.tag===3||n.tag===4}function Dv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||R1(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ym(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ld));else if(i!==4&&(n=n.child,n!==null))for(ym(n,e,t),n=n.sibling;n!==null;)ym(n,e,t),n=n.sibling}function Sm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Sm(n,e,t),n=n.sibling;n!==null;)Sm(n,e,t),n=n.sibling}var In=null,Er=!1;function Ds(n,e,t){for(t=t.child;t!==null;)b1(n,e,t),t=t.sibling}function b1(n,e,t){if(Xr&&typeof Xr.onCommitFiberUnmount=="function")try{Xr.onCommitFiberUnmount(Hd,t)}catch{}switch(t.tag){case 5:Zn||Qa(t,e);case 6:var i=In,r=Er;In=null,Ds(n,e,t),In=i,Er=r,In!==null&&(Er?(n=In,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):In.removeChild(t.stateNode));break;case 18:In!==null&&(Er?(n=In,t=t.stateNode,n.nodeType===8?Rh(n.parentNode,t):n.nodeType===1&&Rh(n,t),Wu(n)):Rh(In,t.stateNode));break;case 4:i=In,r=Er,In=t.stateNode.containerInfo,Er=!0,Ds(n,e,t),In=i,Er=r;break;case 0:case 11:case 14:case 15:if(!Zn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vm(t,e,o),r=r.next}while(r!==i)}Ds(n,e,t);break;case 1:if(!Zn&&(Qa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Jt(t,e,a)}Ds(n,e,t);break;case 21:Ds(n,e,t);break;case 22:t.mode&1?(Zn=(i=Zn)||t.memoizedState!==null,Ds(n,e,t),Zn=i):Ds(n,e,t);break;default:Ds(n,e,t)}}function Nv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new iA),e.forEach(function(i){var r=hA.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function _r(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:In=a.stateNode,Er=!1;break e;case 3:In=a.stateNode.containerInfo,Er=!0;break e;case 4:In=a.stateNode.containerInfo,Er=!0;break e}a=a.return}if(In===null)throw Error(de(160));b1(s,o,r),In=null,Er=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Jt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)P1(e,n),e=e.sibling}function P1(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_r(e,n),Dr(n),i&4){try{Tu(3,n,n.return),Kd(3,n)}catch(v){Jt(n,n.return,v)}try{Tu(5,n,n.return)}catch(v){Jt(n,n.return,v)}}break;case 1:_r(e,n),Dr(n),i&512&&t!==null&&Qa(t,t.return);break;case 5:if(_r(e,n),Dr(n),i&512&&t!==null&&Qa(t,t.return),n.flags&32){var r=n.stateNode;try{zu(r,"")}catch(v){Jt(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Qy(r,s),Xp(a,o);var u=Xp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?iS(r,d):c==="dangerouslySetInnerHTML"?tS(r,d):c==="children"?zu(r,d):K_(r,c,d,u)}switch(a){case"input":zp(r,s);break;case"textarea":Jy(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?il(r,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?il(r,!!s.multiple,s.defaultValue,!0):il(r,!!s.multiple,s.multiple?[]:"",!1))}r[qu]=s}catch(v){Jt(n,n.return,v)}}break;case 6:if(_r(e,n),Dr(n),i&4){if(n.stateNode===null)throw Error(de(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Jt(n,n.return,v)}}break;case 3:if(_r(e,n),Dr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Wu(e.containerInfo)}catch(v){Jt(n,n.return,v)}break;case 4:_r(e,n),Dr(n);break;case 13:_r(e,n),Dr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bg=ln())),i&4&&Nv(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Zn=(u=Zn)||c,_r(e,n),Zn=u):_r(e,n),Dr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Pe=n,c=n.child;c!==null;){for(d=Pe=c;Pe!==null;){switch(f=Pe,h=f.child,f.tag){case 0:case 11:case 14:case 15:Tu(4,f,f.return);break;case 1:Qa(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Jt(i,t,v)}}break;case 5:Qa(f,f.return);break;case 22:if(f.memoizedState!==null){Uv(d);continue}}h!==null?(h.return=f,Pe=h):Uv(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=nS("display",o))}catch(v){Jt(n,n.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Jt(n,n.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:_r(e,n),Dr(n),i&4&&Nv(n);break;case 21:break;default:_r(e,n),Dr(n)}}function Dr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(R1(t)){var i=t;break e}t=t.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(zu(r,""),i.flags&=-33);var s=Dv(n);Sm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Dv(n);ym(n,a,o);break;default:throw Error(de(161))}}catch(l){Jt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function sA(n,e,t){Pe=n,L1(n)}function L1(n,e,t){for(var i=(n.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||kc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zn;a=kc;var u=Zn;if(kc=o,(Zn=l)&&!u)for(Pe=r;Pe!==null;)o=Pe,l=o.child,o.tag===22&&o.memoizedState!==null?Fv(r):l!==null?(l.return=o,Pe=l):Fv(r);for(;s!==null;)Pe=s,L1(s),s=s.sibling;Pe=r,kc=a,Zn=u}Iv(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):Iv(n)}}function Iv(n){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zn||Kd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Mr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vv(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}vv(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Wu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}Zn||e.flags&512&&xm(e)}catch(f){Jt(e,e.return,f)}}if(e===n){Pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function Uv(n){for(;Pe!==null;){var e=Pe;if(e===n){Pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function Fv(n){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Kd(4,e)}catch(l){Jt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Jt(e,r,l)}}var s=e.return;try{xm(e)}catch(l){Jt(e,s,l)}break;case 5:var o=e.return;try{xm(e)}catch(l){Jt(e,o,l)}}}catch(l){Jt(e,e.return,l)}if(e===n){Pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Pe=a;break}Pe=e.return}}var oA=Math.ceil,xd=Rs.ReactCurrentDispatcher,Cg=Rs.ReactCurrentOwner,cr=Rs.ReactCurrentBatchConfig,gt=0,Dn=null,gn=null,On=0,Ii=0,Ja=Mo(0),Mn=0,tc=null,ra=0,Zd=0,Rg=0,wu=null,gi=null,bg=0,Tl=1/0,os=null,yd=!1,Mm=null,oo=null,Bc=!1,$s=null,Sd=0,Au=0,Em=null,Ff=-1,Of=0;function fi(){return gt&6?ln():Ff!==-1?Ff:Ff=ln()}function ao(n){return n.mode&1?gt&2&&On!==0?On&-On:Gw.transition!==null?(Of===0&&(Of=mS()),Of):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:MS(n.type)),n):1}function Rr(n,e,t,i){if(50<Au)throw Au=0,Em=null,Error(de(185));_c(n,t,i),(!(gt&2)||n!==Dn)&&(n===Dn&&(!(gt&2)&&(Zd|=t),Mn===4&&Xs(n,On)),Mi(n,i),t===1&&gt===0&&!(e.mode&1)&&(Tl=ln()+500,Yd&&Eo()))}function Mi(n,e){var t=n.callbackNode;GT(n,e);var i=rd(n,n===Dn?On:0);if(i===0)t!==null&&X0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&X0(t),e===1)n.tag===0?Hw(Ov.bind(null,n)):VS(Ov.bind(null,n)),kw(function(){!(gt&6)&&Eo()}),t=null;else{switch(_S(i)){case 1:t=tg;break;case 4:t=hS;break;case 16:t=id;break;case 536870912:t=pS;break;default:t=id}t=B1(t,D1.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function D1(n,e){if(Ff=-1,Of=0,gt&6)throw Error(de(327));var t=n.callbackNode;if(ll()&&n.callbackNode!==t)return null;var i=rd(n,n===Dn?On:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Md(n,i);else{e=i;var r=gt;gt|=2;var s=I1();(Dn!==n||On!==e)&&(os=null,Tl=ln()+500,jo(n,e));do try{uA();break}catch(a){N1(n,a)}while(!0);pg(),xd.current=s,gt=r,gn!==null?e=0:(Dn=null,On=0,e=Mn)}if(e!==0){if(e===2&&(r=Kp(n),r!==0&&(i=r,e=Tm(n,r))),e===1)throw t=tc,jo(n,0),Xs(n,i),Mi(n,ln()),t;if(e===6)Xs(n,i);else{if(r=n.current.alternate,!(i&30)&&!aA(r)&&(e=Md(n,i),e===2&&(s=Kp(n),s!==0&&(i=s,e=Tm(n,s))),e===1))throw t=tc,jo(n,0),Xs(n,i),Mi(n,ln()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:No(n,gi,os);break;case 3:if(Xs(n,i),(i&130023424)===i&&(e=bg+500-ln(),10<e)){if(rd(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){fi(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=rm(No.bind(null,n,gi,os),e);break}No(n,gi,os);break;case 4:if(Xs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Cr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ln()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*oA(i/1960))-i,10<i){n.timeoutHandle=rm(No.bind(null,n,gi,os),i);break}No(n,gi,os);break;case 5:No(n,gi,os);break;default:throw Error(de(329))}}}return Mi(n,ln()),n.callbackNode===t?D1.bind(null,n):null}function Tm(n,e){var t=wu;return n.current.memoizedState.isDehydrated&&(jo(n,e).flags|=256),n=Md(n,e),n!==2&&(e=gi,gi=t,e!==null&&wm(e)),n}function wm(n){gi===null?gi=n:gi.push.apply(gi,n)}function aA(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Pr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xs(n,e){for(e&=~Rg,e&=~Zd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Cr(e),i=1<<t;n[t]=-1,e&=~i}}function Ov(n){if(gt&6)throw Error(de(327));ll();var e=rd(n,0);if(!(e&1))return Mi(n,ln()),null;var t=Md(n,e);if(n.tag!==0&&t===2){var i=Kp(n);i!==0&&(e=i,t=Tm(n,i))}if(t===1)throw t=tc,jo(n,0),Xs(n,e),Mi(n,ln()),t;if(t===6)throw Error(de(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,No(n,gi,os),Mi(n,ln()),null}function Pg(n,e){var t=gt;gt|=1;try{return n(e)}finally{gt=t,gt===0&&(Tl=ln()+500,Yd&&Eo())}}function sa(n){$s!==null&&$s.tag===0&&!(gt&6)&&ll();var e=gt;gt|=1;var t=cr.transition,i=Tt;try{if(cr.transition=null,Tt=1,n)return n()}finally{Tt=i,cr.transition=t,gt=e,!(gt&6)&&Eo()}}function Lg(){Ii=Ja.current,Ot(Ja)}function jo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Ow(t)),gn!==null)for(t=gn.return;t!==null;){var i=t;switch(fg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ud();break;case 3:Ml(),Ot(yi),Ot(ni),yg();break;case 5:xg(i);break;case 4:Ml();break;case 13:Ot(Xt);break;case 19:Ot(Xt);break;case 10:mg(i.type._context);break;case 22:case 23:Lg()}t=t.return}if(Dn=n,gn=n=lo(n.current,null),On=Ii=e,Mn=0,tc=null,Rg=Zd=ra=0,gi=wu=null,zo!==null){for(e=0;e<zo.length;e++)if(t=zo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}zo=null}return n}function N1(n,e){do{var t=gn;try{if(pg(),Nf.current=vd,gd){for(var i=$t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gd=!1}if(ia=0,Ln=yn=$t=null,Eu=!1,Qu=0,Cg.current=null,t===null||t.return===null){Mn=1,tc=e,gn=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=On,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Tv(o);if(h!==null){h.flags&=-257,wv(h,o,a,s,e),h.mode&1&&Ev(s,u,e),e=h,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Ev(s,u,e),Dg();break e}l=Error(de(426))}}else if(zt&&a.mode&1){var _=Tv(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),wv(_,o,a,s,e),dg(El(l,a));break e}}s=l=El(l,a),Mn!==4&&(Mn=2),wu===null?wu=[s]:wu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=_1(s,l,e);gv(s,p);break e;case 1:a=l;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(oo===null||!oo.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=g1(s,a,e);gv(s,S);break e}}s=s.return}while(s!==null)}F1(t)}catch(w){e=w,gn===t&&t!==null&&(gn=t=t.return);continue}break}while(!0)}function I1(){var n=xd.current;return xd.current=vd,n===null?vd:n}function Dg(){(Mn===0||Mn===3||Mn===2)&&(Mn=4),Dn===null||!(ra&268435455)&&!(Zd&268435455)||Xs(Dn,On)}function Md(n,e){var t=gt;gt|=2;var i=I1();(Dn!==n||On!==e)&&(os=null,jo(n,e));do try{lA();break}catch(r){N1(n,r)}while(!0);if(pg(),gt=t,xd.current=i,gn!==null)throw Error(de(261));return Dn=null,On=0,Mn}function lA(){for(;gn!==null;)U1(gn)}function uA(){for(;gn!==null&&!IT();)U1(gn)}function U1(n){var e=k1(n.alternate,n,Ii);n.memoizedProps=n.pendingProps,e===null?F1(n):gn=e,Cg.current=null}function F1(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=nA(t,e),t!==null){t.flags&=32767,gn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Mn=6,gn=null;return}}else if(t=tA(t,e,Ii),t!==null){gn=t;return}if(e=e.sibling,e!==null){gn=e;return}gn=e=n}while(e!==null);Mn===0&&(Mn=5)}function No(n,e,t){var i=Tt,r=cr.transition;try{cr.transition=null,Tt=1,cA(n,e,t,i)}finally{cr.transition=r,Tt=i}return null}function cA(n,e,t,i){do ll();while($s!==null);if(gt&6)throw Error(de(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(de(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(WT(n,s),n===Dn&&(gn=Dn=null,On=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Bc||(Bc=!0,B1(id,function(){return ll(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=cr.transition,cr.transition=null;var o=Tt;Tt=1;var a=gt;gt|=4,Cg.current=null,rA(n,t),P1(t,n),Pw(nm),sd=!!tm,nm=tm=null,n.current=t,sA(t),UT(),gt=a,Tt=o,cr.transition=s}else n.current=t;if(Bc&&(Bc=!1,$s=n,Sd=r),s=n.pendingLanes,s===0&&(oo=null),kT(t.stateNode),Mi(n,ln()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(yd)throw yd=!1,n=Mm,Mm=null,n;return Sd&1&&n.tag!==0&&ll(),s=n.pendingLanes,s&1?n===Em?Au++:(Au=0,Em=n):Au=0,Eo(),null}function ll(){if($s!==null){var n=_S(Sd),e=cr.transition,t=Tt;try{if(cr.transition=null,Tt=16>n?16:n,$s===null)var i=!1;else{if(n=$s,$s=null,Sd=0,gt&6)throw Error(de(331));var r=gt;for(gt|=4,Pe=n.current;Pe!==null;){var s=Pe,o=s.child;if(Pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Pe=u;Pe!==null;){var c=Pe;switch(c.tag){case 0:case 11:case 15:Tu(8,c,s)}var d=c.child;if(d!==null)d.return=c,Pe=d;else for(;Pe!==null;){c=Pe;var f=c.sibling,h=c.return;if(C1(c),c===u){Pe=null;break}if(f!==null){f.return=h,Pe=f;break}Pe=h}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}Pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Pe=o;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Tu(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Pe=p;break e}Pe=s.return}}var m=n.current;for(Pe=m;Pe!==null;){o=Pe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Pe=x;else e:for(o=m;Pe!==null;){if(a=Pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kd(9,a)}}catch(w){Jt(a,a.return,w)}if(a===o){Pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Pe=S;break e}Pe=a.return}}if(gt=r,Eo(),Xr&&typeof Xr.onPostCommitFiberRoot=="function")try{Xr.onPostCommitFiberRoot(Hd,n)}catch{}i=!0}return i}finally{Tt=t,cr.transition=e}}return!1}function kv(n,e,t){e=El(t,e),e=_1(n,e,1),n=so(n,e,1),e=fi(),n!==null&&(_c(n,1,e),Mi(n,e))}function Jt(n,e,t){if(n.tag===3)kv(n,n,t);else for(;e!==null;){if(e.tag===3){kv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(oo===null||!oo.has(i))){n=El(t,n),n=g1(e,n,1),e=so(e,n,1),n=fi(),e!==null&&(_c(e,1,n),Mi(e,n));break}}e=e.return}}function fA(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=fi(),n.pingedLanes|=n.suspendedLanes&t,Dn===n&&(On&t)===t&&(Mn===4||Mn===3&&(On&130023424)===On&&500>ln()-bg?jo(n,0):Rg|=t),Mi(n,e)}function O1(n,e){e===0&&(n.mode&1?(e=bc,bc<<=1,!(bc&130023424)&&(bc=4194304)):e=1);var t=fi();n=Ms(n,e),n!==null&&(_c(n,e,t),Mi(n,t))}function dA(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),O1(n,t)}function hA(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),O1(n,t)}var k1;k1=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||yi.current)xi=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return xi=!1,eA(n,e,t);xi=!!(n.flags&131072)}else xi=!1,zt&&e.flags&1048576&&HS(e,dd,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Uf(n,e),n=e.pendingProps;var r=xl(e,ni.current);al(e,t),r=Mg(null,e,i,n,r,t);var s=Eg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Si(i)?(s=!0,cd(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gg(e),r.updater=qd,e.stateNode=r,r._reactInternals=e,fm(e,i,n,t),e=pm(null,e,i,!0,s,t)):(e.tag=0,zt&&s&&cg(e),ai(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Uf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=mA(i),n=Mr(i,n),r){case 0:e=hm(null,e,i,n,t);break e;case 1:e=Rv(null,e,i,n,t);break e;case 11:e=Av(null,e,i,n,t);break e;case 14:e=Cv(null,e,i,Mr(i.type,n),t);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mr(i,r),hm(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mr(i,r),Rv(n,e,i,r,t);case 3:e:{if(S1(e),n===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,$S(n,e),md(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=El(Error(de(423)),e),e=bv(n,e,i,t,r);break e}else if(i!==r){r=El(Error(de(424)),e),e=bv(n,e,i,t,r);break e}else for(Hi=ro(e.stateNode.containerInfo.firstChild),Xi=e,zt=!0,Tr=null,t=jS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(yl(),i===r){e=Es(n,e,t);break e}ai(n,e,i,t)}e=e.child}return e;case 5:return qS(e),n===null&&lm(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,im(i,r)?o=null:s!==null&&im(i,s)&&(e.flags|=32),y1(n,e),ai(n,e,o,t),e.child;case 6:return n===null&&lm(e),null;case 13:return M1(n,e,t);case 4:return vg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Sl(e,null,i,t):ai(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mr(i,r),Av(n,e,i,r,t);case 7:return ai(n,e,e.pendingProps,t),e.child;case 8:return ai(n,e,e.pendingProps.children,t),e.child;case 12:return ai(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,It(hd,i._currentValue),i._currentValue=o,s!==null)if(Pr(s.value,o)){if(s.children===r.children&&!yi.current){e=Es(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_s(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),um(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(de(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),um(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ai(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,al(e,t),r=hr(r),i=i(r),e.flags|=1,ai(n,e,i,t),e.child;case 14:return i=e.type,r=Mr(i,e.pendingProps),r=Mr(i.type,r),Cv(n,e,i,r,t);case 15:return v1(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Mr(i,r),Uf(n,e),e.tag=1,Si(i)?(n=!0,cd(e)):n=!1,al(e,t),m1(e,i,r),fm(e,i,r,t),pm(null,e,i,!0,n,t);case 19:return E1(n,e,t);case 22:return x1(n,e,t)}throw Error(de(156,e.tag))};function B1(n,e){return dS(n,e)}function pA(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ar(n,e,t,i){return new pA(n,e,t,i)}function Ng(n){return n=n.prototype,!(!n||!n.isReactComponent)}function mA(n){if(typeof n=="function")return Ng(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q_)return 11;if(n===J_)return 14}return 2}function lo(n,e){var t=n.alternate;return t===null?(t=ar(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function kf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Ng(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ga:return Yo(t.children,r,s,e);case Z_:o=8,r|=8;break;case Up:return n=ar(12,t,e,r|2),n.elementType=Up,n.lanes=s,n;case Fp:return n=ar(13,t,e,r),n.elementType=Fp,n.lanes=s,n;case Op:return n=ar(19,t,e,r),n.elementType=Op,n.lanes=s,n;case qy:return Qd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Yy:o=10;break e;case $y:o=9;break e;case Q_:o=11;break e;case J_:o=14;break e;case Vs:o=16,i=null;break e}throw Error(de(130,n==null?n:typeof n,""))}return e=ar(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Yo(n,e,t,i){return n=ar(7,n,i,e),n.lanes=t,n}function Qd(n,e,t,i){return n=ar(22,n,i,e),n.elementType=qy,n.lanes=t,n.stateNode={isHidden:!1},n}function Fh(n,e,t){return n=ar(6,n,null,e),n.lanes=t,n}function Oh(n,e,t){return e=ar(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function _A(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gh(0),this.expirationTimes=gh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ig(n,e,t,i,r,s,o,a,l){return n=new _A(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ar(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},gg(s),n}function gA(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ha,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function z1(n){if(!n)return po;n=n._reactInternals;e:{if(da(n)!==n||n.tag!==1)throw Error(de(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Si(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(n.tag===1){var t=n.type;if(Si(t))return zS(n,t,e)}return e}function V1(n,e,t,i,r,s,o,a,l){return n=Ig(t,i,!0,n,r,s,o,a,l),n.context=z1(null),t=n.current,i=fi(),r=ao(t),s=_s(i,r),s.callback=e??null,so(t,s,r),n.current.lanes=r,_c(n,r,i),Mi(n,i),n}function Jd(n,e,t,i){var r=e.current,s=fi(),o=ao(r);return t=z1(t),e.context===null?e.context=t:e.pendingContext=t,e=_s(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=so(r,e,o),n!==null&&(Rr(n,r,o,s),Df(n,r,o)),o}function Ed(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Bv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Ug(n,e){Bv(n,e),(n=n.alternate)&&Bv(n,e)}function vA(){return null}var H1=typeof reportError=="function"?reportError:function(n){console.error(n)};function Fg(n){this._internalRoot=n}eh.prototype.render=Fg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(de(409));Jd(n,e,null,null)};eh.prototype.unmount=Fg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;sa(function(){Jd(null,n,null,null)}),e[Ss]=null}};function eh(n){this._internalRoot=n}eh.prototype.unstable_scheduleHydration=function(n){if(n){var e=xS();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ws.length&&e!==0&&e<Ws[t].priority;t++);Ws.splice(t,0,n),t===0&&SS(n)}};function Og(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function th(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zv(){}function xA(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ed(o);s.call(u)}}var o=V1(e,i,n,0,null,!1,!1,"",zv);return n._reactRootContainer=o,n[Ss]=o.current,Yu(n.nodeType===8?n.parentNode:n),sa(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ed(l);a.call(u)}}var l=Ig(n,0,!1,null,null,!1,!1,"",zv);return n._reactRootContainer=l,n[Ss]=l.current,Yu(n.nodeType===8?n.parentNode:n),sa(function(){Jd(e,l,t,i)}),l}function nh(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ed(o);a.call(l)}}Jd(e,o,n,r)}else o=xA(t,e,n,r,i);return Ed(o)}gS=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=au(e.pendingLanes);t!==0&&(ng(e,t|1),Mi(e,ln()),!(gt&6)&&(Tl=ln()+500,Eo()))}break;case 13:sa(function(){var i=Ms(n,1);if(i!==null){var r=fi();Rr(i,n,1,r)}}),Ug(n,1)}};ig=function(n){if(n.tag===13){var e=Ms(n,134217728);if(e!==null){var t=fi();Rr(e,n,134217728,t)}Ug(n,134217728)}};vS=function(n){if(n.tag===13){var e=ao(n),t=Ms(n,e);if(t!==null){var i=fi();Rr(t,n,e,i)}Ug(n,e)}};xS=function(){return Tt};yS=function(n,e){var t=Tt;try{return Tt=n,e()}finally{Tt=t}};Yp=function(n,e,t){switch(e){case"input":if(zp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=jd(i);if(!r)throw Error(de(90));Zy(i),zp(i,r)}}}break;case"textarea":Jy(n,t);break;case"select":e=t.value,e!=null&&il(n,!!t.multiple,e,!1)}};oS=Pg;aS=sa;var yA={usingClientEntryPoint:!1,Events:[vc,Ya,jd,rS,sS,Pg]},$l={findFiberByHostInstance:Bo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SA={bundleType:$l.bundleType,version:$l.version,rendererPackageName:$l.rendererPackageName,rendererConfig:$l.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rs.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=cS(n),n===null?null:n.stateNode},findFiberByHostInstance:$l.findFiberByHostInstance||vA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{Hd=zc.inject(SA),Xr=zc}catch{}}Ki.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yA;Ki.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Og(e))throw Error(de(200));return gA(n,e,null,t)};Ki.createRoot=function(n,e){if(!Og(n))throw Error(de(299));var t=!1,i="",r=H1;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ig(n,1,!1,null,null,t,!1,i,r),n[Ss]=e.current,Yu(n.nodeType===8?n.parentNode:n),new Fg(e)};Ki.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(de(188)):(n=Object.keys(n).join(","),Error(de(268,n)));return n=cS(e),n=n===null?null:n.stateNode,n};Ki.flushSync=function(n){return sa(n)};Ki.hydrate=function(n,e,t){if(!th(e))throw Error(de(200));return nh(null,n,e,!0,t)};Ki.hydrateRoot=function(n,e,t){if(!Og(n))throw Error(de(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=H1;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=V1(e,null,n,1,t??null,r,!1,s,o),n[Ss]=e.current,Yu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new eh(e)};Ki.render=function(n,e,t){if(!th(e))throw Error(de(200));return nh(null,n,e,!1,t)};Ki.unmountComponentAtNode=function(n){if(!th(n))throw Error(de(40));return n._reactRootContainer?(sa(function(){nh(null,null,n,!1,function(){n._reactRootContainer=null,n[Ss]=null})}),!0):!1};Ki.unstable_batchedUpdates=Pg;Ki.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!th(t))throw Error(de(200));if(n==null||n._reactInternals===void 0)throw Error(de(38));return nh(n,e,t,!1,i)};Ki.version="18.3.1-next-f1338f8080-20240426";function G1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G1)}catch(n){console.error(n)}}G1(),Gy.exports=Ki;var MA=Gy.exports,W1,Vv=MA;W1=Vv.createRoot,Vv.hydrateRoot;function as(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function X1(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ji={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},nc={duration:.5,overwrite:!1,delay:0},kg,kn,Vt,lr=1e8,Pt=1/lr,Am=Math.PI*2,EA=Am/4,TA=0,j1=Math.sqrt,wA=Math.cos,AA=Math.sin,Nn=function(e){return typeof e=="string"},tn=function(e){return typeof e=="function"},Ts=function(e){return typeof e=="number"},Bg=function(e){return typeof e>"u"},Kr=function(e){return typeof e=="object"},Ei=function(e){return e!==!1},zg=function(){return typeof window<"u"},Vc=function(e){return tn(e)||Nn(e)},Y1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ti=Array.isArray,CA=/random\([^)]+\)/g,RA=/,\s*/g,Hv=/(?:-?\.?\d|\.)+/gi,$1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,el=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,q1=/[+-]=-?[.\d]+/,bA=/[^,'"\[\]\s]+/gi,PA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,jt,Fr,Cm,Vg,$i={},Td={},K1,Z1=function(e){return(Td=wl(e,$i))&&Ri},Hg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ic=function(e,t){return!t&&console.warn(e)},Q1=function(e,t){return e&&($i[e]=t)&&Td&&(Td[e]=t)||$i},rc=function(){return 0},LA={suppressEvents:!0,isStart:!0,kill:!1},Bf={suppressEvents:!0,kill:!1},DA={suppressEvents:!0},Gg={},uo=[],Rm={},J1,Fi={},Bh={},Gv=30,zf=[],Wg="",Xg=function(e){var t=e[0],i,r;if(Kr(t)||tn(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=zf.length;r--&&!zf[r].targetTest(t););i=zf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new SM(e[r],i)))||e.splice(r,1);return e},$o=function(e){return e._gsap||Xg(ur(e))[0]._gsap},eM=function(e,t,i){return(i=e[t])&&tn(i)?e[t]():Bg(i)&&e.getAttribute&&e.getAttribute(t)||i},Ti=function(e,t){return(e=e.split(",")).forEach(t)||e},an=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},ul=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},NA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},wd=function(){var e=uo.length,t=uo.slice(0),i,r;for(Rm={},uo.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},jg=function(e){return!!(e._initted||e._startAt||e.add)},tM=function(e,t,i,r){uo.length&&!kn&&wd(),e.render(t,i,!!(kn&&t<0&&jg(e))),uo.length&&!kn&&wd()},nM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(bA).length<2?t:Nn(e)?e.trim():e},iM=function(e){return e},qi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},IA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},wl=function(e,t){for(var i in t)e[i]=t[i];return e},Wv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Kr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Ad=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Cu=function(e){var t=e.parent||jt,i=e.keyframes?IA(ti(e.keyframes)):qi;if(Ei(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},UA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},rM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},ih=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},mo=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},FA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},bm=function(e,t,i,r){return e._startAt&&(kn?e._startAt.revert(Bf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},OA=function n(e){return!e||e._ts&&n(e.parent)},Xv=function(e){return e._repeat?Al(e._tTime,e=e.duration()+e._rDelay)*e:0},Al=function(e,t){var i=Math.floor(e=Wt(e/t));return e&&i===e?i-1:i},Cd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},rh=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},sh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Wt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),rh(e),i._dirty||qo(i,e)),e},sM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Cd(e.rawTime(),t),(!t._dur||yc(0,t.totalDuration(),i)-t._tTime>Pt)&&t.render(i,!0)),qo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Pt}},zr=function(e,t,i,r){return t.parent&&mo(t),t._start=Wt((Ts(i)?i:i||e!==jt?tr(e,i,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),rM(e,t,"_first","_last",e._sort?"_start":0),Pm(t)||(e._recent=t),r||sM(e,t),e._ts<0&&sh(e,e._tTime),e},oM=function(e,t){return($i.ScrollTrigger||Hg("scrollTrigger",t))&&$i.ScrollTrigger.create(t,e)},aM=function(e,t,i,r,s){if($g(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!kn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&J1!==Bi.frame)return uo.push(e),e._lazy=[s,r],1},kA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Pm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},BA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&kA(e)&&!(!e._initted&&Pm(e))||(e._ts<0||e._dp._ts<0)&&!Pm(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=yc(0,e._tDur,t),c=Al(l,a),e._yoyo&&c&1&&(o=1-o),c!==Al(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||kn||r||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&aM(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Pt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&bm(e,t,i,!0),e._onUpdate&&!i&&Gi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Gi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&mo(e,1),!i&&!kn&&(Gi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},zA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Cl=function(e,t,i,r){var s=e._repeat,o=Wt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Wt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&sh(e,e._tTime=e._tDur*a),e.parent&&rh(e),i||qo(e.parent,e),e},jv=function(e){return e instanceof vi?qo(e):Cl(e,e._dur)},VA={_start:0,endTime:rc,totalDuration:rc},tr=function n(e,t,i){var r=e.labels,s=e._recent||VA,o=e.duration()>=lr?s.endTime(!1):e._dur,a,l,u;return Nn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(ti(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ru=function(e,t,i){var r=Ts(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ei(l.vars.inherit)&&l.parent;o.immediateRender=Ei(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new _n(t[0],o,t[s+1])},To=function(e,t){return e||e===0?t(e):t},yc=function(e,t,i){return i<e?e:i>t?t:i},Qn=function(e,t){return!Nn(e)||!(t=PA.exec(e))?"":t[1]},HA=function(e,t,i){return To(i,function(r){return yc(e,t,r)})},Lm=[].slice,lM=function(e,t){return e&&Kr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Kr(e[0]))&&!e.nodeType&&e!==Fr},GA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Nn(r)&&!t||lM(r,1)?(s=i).push.apply(s,ur(r)):i.push(r)})||i},ur=function(e,t,i){return Vt&&!t&&Vt.selector?Vt.selector(e):Nn(e)&&!i&&(Cm||!Rl())?Lm.call((t||Vg).querySelectorAll(e),0):ti(e)?GA(e,i):lM(e)?Lm.call(e,0):e?[e]:[]},Dm=function(e){return e=ur(e)[0]||ic("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ur(t,i.querySelectorAll?i:i===e?ic("Invalid scope")||Vg.createElement("div"):e)}},uM=function(e){return e.sort(function(){return .5-Math.random()})},cM=function(e){if(tn(e))return e;var t=Kr(e)?e:{each:e},i=Ko(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return Nn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,h,g){var v=(g||t).length,_=o[v],p,m,x,S,w,E,T,y,C;if(!_){if(C=t.grid==="auto"?0:(t.grid||[1,lr])[1],!C){for(T=-lr;T<(T=g[C++].getBoundingClientRect().left)&&C<v;);C<v&&C--}for(_=o[v]=[],p=l?Math.min(C,v)*c-.5:r%C,m=C===lr?0:l?v*d/C-.5:r/C|0,T=0,y=lr,E=0;E<v;E++)x=E%C-p,S=m-(E/C|0),_[E]=w=u?Math.abs(u==="y"?S:x):j1(x*x+S*S),w>T&&(T=w),w<y&&(y=w);r==="random"&&uM(_),_.max=T-y,_.min=y,_.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(C>v?v-1:u?u==="y"?v/C:C:Math.max(C,v/C))||0)*(r==="edges"?-1:1),_.b=v<0?s-v:s,_.u=Qn(t.amount||t.each)||0,i=i&&v<0?nC(i):i}return v=(_[f]-_.min)/_.max||0,Wt(_.b+(i?i(v):v)*_.v)+_.u}},Nm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Wt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Ts(i)?0:Qn(i))}},fM=function(e,t){var i=ti(e),r,s;return!i&&Kr(e)&&(r=i=e.radius||lr,e.values?(e=ur(e.values),(s=!Ts(e[0]))&&(r*=r)):e=Nm(e.increment)),To(t,i?tn(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=lr,c=0,d=e.length,f,h;d--;)s?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Ts(o)?c:c+Qn(o)}:Nm(e))},dM=function(e,t,i,r){return To(ti(e)?!t:i===!0?!!(i=0):!r,function(){return ti(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},WA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},XA=function(e,t){return function(i){return e(parseFloat(i))+(t||Qn(i))}},jA=function(e,t,i){return pM(e,t,0,1,i)},hM=function(e,t,i){return To(i,function(r){return e[~~t(r)]})},YA=function n(e,t,i){var r=t-e;return ti(e)?hM(e,n(0,e.length),t):To(i,function(s){return(r+(s-e)%r)%r+e})},$A=function n(e,t,i){var r=t-e,s=r*2;return ti(e)?hM(e,n(0,e.length-1),t):To(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},sc=function(e){return e.replace(CA,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(RA);return dM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},pM=function(e,t,i,r,s){var o=t-e,a=r-i;return To(s,function(l){return i+((l-e)/o*a||0)})},qA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Nn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(ti(e)&&!ti(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(g){g*=d;var v=Math.min(f,~~g);return c[v](g-v)},i=t}else r||(e=wl(ti(e)?[]:{},e));if(!c){for(l in t)Yg.call(a,e,l,"get",t[l]);s=function(g){return Zg(g,a)||(o?e.p:e)}}}return To(i,s)},Yv=function(e,t,i){var r=e.labels,s=lr,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Gi=function(e,t,i){var r=e.vars,s=r[t],o=Vt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&uo.length&&wd(),a&&(Vt=a),c=l?s.apply(u,l):s.call(u),Vt=o,c},uu=function(e){return mo(e),e.scrollTrigger&&e.scrollTrigger.kill(!!kn),e.progress()<1&&Gi(e,"onInterrupt"),e},tl,mM=[],_M=function(e){if(e)if(e=!e.name&&e.default||e,zg()||e.headless){var t=e.name,i=tn(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:rc,render:Zg,add:Yg,kill:dC,modifier:fC,rawVars:0},o={targetTest:0,get:0,getSetter:Kg,aliases:{},register:0};if(Rl(),e!==r){if(Fi[t])return;qi(r,qi(Ad(e,s),o)),wl(r.prototype,wl(s,Ad(e,o))),Fi[r.prop=t]=r,e.targetTest&&(zf.push(r),Gg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Q1(t,r),e.register&&e.register(Ri,r,wi)}else mM.push(e)},bt=255,cu={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},zh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*bt+.5|0},gM=function(e,t,i){var r=e?Ts(e)?[e>>16,e>>8&bt,e&bt]:0:cu.black,s,o,a,l,u,c,d,f,h,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),cu[e])r=cu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&bt,r&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Hv),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=zh(l+1/3,s,o),r[1]=zh(l,s,o),r[2]=zh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match($1),i&&r.length<4&&(r[3]=1),r}else r=e.match(Hv)||cu.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/bt,o=r[1]/bt,a=r[2]/bt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(h=d-f,u=c>.5?h/(2-d-f):h/(d+f),l=d===s?(o-a)/h+(o<a?6:0):d===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},vM=function(e){var t=[],i=[],r=-1;return e.split(co).forEach(function(s){var o=s.match(el)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},$v=function(e,t,i){var r="",s=(e+r).match(co),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=gM(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=vM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(co,"1").split(el),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(co),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},co=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in cu)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),KA=/hsl[a]?\(/,xM=function(e){var t=e.join(" "),i;if(co.lastIndex=0,co.test(t))return i=KA.test(t),e[1]=$v(e[1],i),e[0]=$v(e[0],i,vM(e[1])),!0},oc,Bi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,h,g=function v(_){var p=n()-r,m=_===!0,x,S,w,E;if((p>e||p<0)&&(i+=p-t),r+=p,w=r-i,x=w-o,(x>0||m)&&(E=++d.frame,f=w-d.time*1e3,d.time=w=w/1e3,o+=x+(x>=s?4:s-x),S=1),m||(l=u(v)),S)for(h=0;h<a.length;h++)a[h](w,f,E,_)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){K1&&(!Cm&&zg()&&(Fr=Cm=window,Vg=Fr.document||{},$i.gsap=Ri,(Fr.gsapVersions||(Fr.gsapVersions=[])).push(Ri.version),Z1(Td||Fr.GreenSockGlobals||!Fr.gsap&&Fr||{}),mM.forEach(_M)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(_){return setTimeout(_,o-d.time*1e3+1|0)},oc=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),oc=0,u=rc},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){s=1e3/(_||240),o=d.time*1e3+s},add:function(_,p,m){var x=p?function(S,w,E,T){_(S,w,E,T),d.remove(x)}:_;return d.remove(_),a[m?"unshift":"push"](x),Rl(),x},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},d}(),Rl=function(){return!oc&&Bi.wake()},pt={},ZA=/^[\d.\-M][\d.\-,\s]/,QA=/["']/g,JA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(QA,"").trim():+u,r=l.substr(a+1).trim();return t},eC=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},tC=function(e){var t=(e+"").split("("),i=pt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[JA(t[1])]:eC(e).split(",").map(nM)):pt._CE&&ZA.test(e)?pt._CE("",e):i},nC=function(e){return function(t){return 1-e(1-t)}},Ko=function(e,t){return e&&(tn(e)?e:pt[e]||tC(e))||t},ha=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Ti(e,function(a){pt[a]=$i[a]=s,pt[o=a.toLowerCase()]=i;for(var l in s)pt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[a+"."+l]=s[l]}),s},yM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Vh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Am*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*AA((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:yM(a);return s=Am/s,l.config=function(u,c){return n(e,u,c)},l},Hh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:yM(i);return r.config=function(s){return n(e,s)},r};Ti("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ha(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;ha("Elastic",Vh("in"),Vh("out"),Vh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ha("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ha("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ha("Circ",function(n){return-(j1(1-n*n)-1)});ha("Sine",function(n){return n===1?1:-wA(n*EA)+1});ha("Back",Hh("in"),Hh("out"),Hh());pt.SteppedEase=pt.steps=$i.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Pt;return function(a){return((r*yc(0,o,a)|0)+s)*i}}};nc.ease=pt["quad.out"];Ti("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Wg+=n+","+n+"Params,"});var SM=function(e,t){this.id=TA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:eM,this.set=t?t.getSetter:Kg},ac=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Cl(this,+t.duration,1,1),this.data=t.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),oc||Bi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Cl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Rl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(sh(this,i),!s._dp||s.parent||sM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&zr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),tM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Xv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Xv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Al(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Cd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Pt?0:this._rts,this.totalTime(yc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),rh(this),FA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Rl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Wt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&zr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Ei(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Cd(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=DA);var r=kn;return kn=i,jg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),kn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,jv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,jv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(tr(this,i),Ei(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Ei(r)),this._dur||(this._zTime=-Pt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Pt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=tn(i)?i:iM,l=function(){var c=r.then;r.then=null,s&&s(),tn(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){uu(this)},n}();qi(ac.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var vi=function(n){X1(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Ei(i.sortChildren),jt&&zr(i.parent||jt,as(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&oM(as(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ru(0,arguments,this),this},t.from=function(r,s,o){return Ru(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ru(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Cu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new _n(r,s,tr(this,o),1),this},t.call=function(r,s,o){return zr(this,_n.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new _n(r,o,tr(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Cu(o).immediateRender=Ei(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Cu(a).immediateRender=Ei(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Wt(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,h,g,v,_,p,m,x,S,w,E,T;if(this!==jt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,S=this._start,x=this._ts,p=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,_=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(f=Wt(c%_),c===l?(v=this._repeat,f=u):(w=Wt(c/_),v=~~w,v&&v===w&&(f=u,v--),f>u&&(f=u)),w=Al(this._tTime,_),!a&&this._tTime&&w!==v&&this._tTime-w*_-this._dur<=0&&(w=v),E&&v&1&&(f=u-f,T=1),v!==w&&!this._lock){var y=E&&w&1,C=y===(E&&v&1);if(v<w&&(y=!y),a=y?0:c%u?u:c,this._lock=1,this.render(a||(T?0:Wt(v*_)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Gi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,w=v),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,C&&(this._lock=2,a=y?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=zA(this,Wt(a),Wt(f)),m&&(c-=f-(f=m._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!w&&(Gi(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||f>=h._start)&&h._ts&&m!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,o),f!==this._time||!this._ts&&!p){m=0,g&&(c+=this._zTime=-Pt);break}}h=g}else{h=this._last;for(var b=r<0?r:f;h;){if(g=h._prev,(h._act||b<=h._end)&&h._ts&&m!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(b-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(b-h._start)*h._ts,s,o||kn&&jg(h)),f!==this._time||!this._ts&&!p){m=0,g&&(c+=this._zTime=b?-Pt:Pt);break}}h=g}}if(m&&!s&&(this.pause(),m.render(f>=a?0:-Pt)._zTime=f>=a?1:-1,this._ts))return this._start=S,rh(this),this.render(r,s,o);this._onUpdate&&!s&&Gi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&mo(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Gi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Ts(s)||(s=tr(this,s,r)),!(r instanceof ac)){if(ti(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Nn(r))return this.addLabel(r,s);if(tn(r))r=_n.delayedCall(0,r);else return this}return this!==r?zr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-lr);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof _n?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Nn(r)?this.removeLabel(r):tn(r)?this.killTweensOf(r):(r.parent===this&&ih(this,r),r===this._recent&&(this._recent=this._last),qo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt(Bi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=tr(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=_n.delayedCall(0,s||rc,o);return a.data="isPause",this._hasPause=1,zr(this,a,tr(this,r))},t.removePause=function(r){var s=this._first;for(r=tr(this,r);s;)s._start===r&&s.data==="isPause"&&mo(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)qs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ur(r),l=this._first,u=Ts(s),c;l;)l instanceof _n?NA(l._targets,a)&&(u?(!qs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=tr(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,h,g=_n.to(o,qi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Pt,onStart:function(){if(o.pause(),!h){var _=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==_&&Cl(g,_,0,1).render(g._time,!0,!0),h=1}c&&c.apply(g,d||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,qi({startAt:{time:tr(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Yv(this,tr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Yv(this,tr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Wt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return qo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),qo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=lr,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,zr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Wt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Cl(o,o===jt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(jt._ts&&(tM(jt,Cd(r,jt)),J1=Bi.frame),Bi.frame>=Gv){Gv+=ji.autoSleep||120;var s=jt._first;if((!s||!s._ts)&&ji.autoSleep&&Bi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bi.sleep()}}},e}(ac);qi(vi.prototype,{_lock:0,_hasPause:0,_forcing:0});var iC=function(e,t,i,r,s,o,a){var l=new wi(this._pt,e,t,0,1,CM,null,s),u=0,c=0,d,f,h,g,v,_,p,m;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=sc(r)),o&&(m=[i,r],o(m,e,t),i=m[0],r=m[1]),f=i.match(kh)||[];d=kh.exec(r);)g=d[0],v=r.substring(u,d.index),h?h=(h+1)%5:v.substr(-5)==="rgba("&&(h=1),g!==f[c++]&&(_=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:v||c===1?v:",",s:_,c:g.charAt(1)==="="?ul(_,g)-_:parseFloat(g)-_,m:h&&h<4?Math.round:0},u=kh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(q1.test(r)||p)&&(l.e=0),this._pt=l,l},Yg=function(e,t,i,r,s,o,a,l,u,c){tn(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:tn(d)?u?e[t.indexOf("set")||!tn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,h=tn(d)?u?lC:wM:qg,g;if(Nn(r)&&(~r.indexOf("random(")&&(r=sc(r)),r.charAt(1)==="="&&(g=ul(f,r)+(Qn(f)||0),(g||g===0)&&(r=g))),!c||f!==r||Im)return!isNaN(f*r)&&r!==""?(g=new wi(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?cC:AM,0,h),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&Hg(t,r),iC.call(this,e,t,f,r,h,l||ji.stringFilter,u))},rC=function(e,t,i,r,s){if(tn(e)&&(e=bu(e,s,t,i,r)),!Kr(e)||e.style&&e.nodeType||ti(e)||Y1(e))return Nn(e)?bu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=bu(e[a],s,t,i,r);return o},MM=function(e,t,i,r,s,o){var a,l,u,c;if(Fi[e]&&(a=new Fi[e]).init(s,a.rawVars?t[e]:rC(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new wi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==tl))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},qs,Im,$g=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,g=e._dur,v=e._startAt,_=e._targets,p=e.parent,m=p&&p.data==="nested"?p.vars.targets:_,x=e._overwrite==="auto"&&!kg,S=e.timeline,w=r.easeReverse||d,E,T,y,C,b,L,N,W,z,D,k,U,O;if(S&&(!f||!s)&&(s="none"),e._ease=Ko(s,nc.ease),e._rEase=w&&(Ko(w)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||f&&!r.stagger){if(W=_[0]?$o(_[0]).harness:0,U=W&&r[W.prop],E=Ad(r,Gg),v&&(v._zTime<0&&v.progress(1),t<0&&c&&a&&!h?v.render(-1,!0):v.revert(c&&g?Bf:LA),v._lazy=0),o){if(mo(e._startAt=_n.set(_,qi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!v&&Ei(l),startAt:null,delay:0,onUpdate:u&&function(){return Gi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(kn||!a&&!h)&&e._startAt.revert(Bf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!v){if(t&&(a=!1),y=qi({overwrite:!1,data:"isFromStart",lazy:a&&!v&&Ei(l),immediateRender:a,stagger:0,parent:p},E),U&&(y[W.prop]=U),mo(e._startAt=_n.set(_,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(kn?e._startAt.revert(Bf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Ei(l)||l&&!g,T=0;T<_.length;T++){if(b=_[T],N=b._gsap||Xg(_)[T]._gsap,e._ptLookup[T]=D={},Rm[N.id]&&uo.length&&wd(),k=m===_?T:m.indexOf(b),W&&(z=new W).init(b,U||E,e,k,m)!==!1&&(e._pt=C=new wi(e._pt,b,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(G){D[G]=C}),z.priority&&(L=1)),!W||U)for(y in E)Fi[y]&&(z=MM(y,E,e,k,b,m))?z.priority&&(L=1):D[y]=C=Yg.call(e,b,y,"get",E[y],k,m,0,r.stringFilter);e._op&&e._op[T]&&e.kill(b,e._op[T]),x&&e._pt&&(qs=e,jt.killTweensOf(b,D,e.globalTime(t)),O=!e.parent,qs=0),e._pt&&l&&(Rm[N.id]=1)}L&&RM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!O,f&&t<=0&&S.render(lr,!0,!0)},sC=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,h;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Im=1,e.vars[t]="+=0",$g(e,a),Im=0,l?ic(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(h=u.length;h--;)d=u[h],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=an(i)+Qn(d.e)),d.b&&(d.b=c.s+Qn(d.b))},oC=function(e,t){var i=e[0]?$o(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=wl({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},aC=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(ti(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},bu=function(e,t,i,r,s){return tn(e)?e.call(t,i,r,s):Nn(e)&&~e.indexOf("random(")?sc(e):e},EM=Wg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",TM={};Ti(EM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return TM[n]=1});var _n=function(n){X1(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Cu(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,g=l.keyframes,v=l.defaults,_=l.scrollTrigger,p=r.parent||jt,m=(ti(i)||Y1(i)?Ts(i[0]):"length"in r)?[i]:ur(i),x,S,w,E,T,y,C,b;if(a._targets=m.length?Xg(m):ic("GSAP target "+i+" not found. https://gsap.com",!ji.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||f||Vc(u)||Vc(c)){r=a.vars;var L=r.easeReverse||r.yoyoEase;if(x=a.timeline=new vi({data:"nested",defaults:v||{},targets:p&&p.data==="nested"?p.vars.targets:m}),x.kill(),x.parent=x._dp=as(a),x._start=0,f||Vc(u)||Vc(c)){if(E=m.length,C=f&&cM(f),Kr(f))for(T in f)~EM.indexOf(T)&&(b||(b={}),b[T]=f[T]);for(S=0;S<E;S++)w=Ad(r,TM),w.stagger=0,L&&(w.easeReverse=L),b&&wl(w,b),y=m[S],w.duration=+bu(u,as(a),S,y,m),w.delay=(+bu(c,as(a),S,y,m)||0)-a._delay,!f&&E===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),x.to(y,w,C?C(S,y,m):0),x._ease=pt.none;x.duration()?u=c=0:a.timeline=0}else if(g){Cu(qi(x.vars.defaults,{ease:"none"})),x._ease=Ko(g.ease||r.ease||"none");var N=0,W,z,D;if(ti(g))g.forEach(function(k){return x.to(m,k,">")}),x.duration();else{w={};for(T in g)T==="ease"||T==="easeEach"||aC(T,g[T],w,g.easeEach);for(T in w)for(W=w[T].sort(function(k,U){return k.t-U.t}),N=0,S=0;S<W.length;S++)z=W[S],D={ease:z.e,duration:(z.t-(S?W[S-1].t:0))/100*u},D[T]=z.v,x.to(m,D,N),N+=D.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return h===!0&&!kg&&(qs=as(a),jt.killTweensOf(m),qs=0),zr(p,as(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!g&&a._start===Wt(p._time)&&Ei(d)&&OA(as(a))&&p.data!=="nested")&&(a._tTime=-Pt,a.render(Math.max(0,-c)||0)),_&&oM(as(a),_),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Pt&&!c?l:r<Pt?0:r,f,h,g,v,_,p,m,x;if(!u)BA(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(v=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(v*100+r,s,o);if(f=Wt(d%v),d===l?(g=this._repeat,f=u):(_=Wt(d/v),g=~~_,g&&g===_?(f=u,g--):f>u&&(f=u)),p=this._yoyo&&g&1,p&&(f=u-f),_=Al(this._tTime,v),f===a&&!o&&this._initted&&g===_)return this._tTime=d,this;g!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==v&&this._initted&&(this._lock=o=1,this.render(Wt(v*g),!0).invalidate()._lock=0)}if(!this._initted){if(aM(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==_))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=f<a;if(S!==this._inv){var w=S?a:u-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(S?-1:1)/w:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(f/u);if(this._from&&(this.ratio=m=1-m),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!_&&(Gi(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(m,h.d),h=h._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&bm(this,r,s,o),Gi(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!s&&this.parent&&Gi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&bm(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&mo(this,1),!s&&!(c&&!a)&&(d||a||p)&&(Gi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){oc||Bi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||$g(this,u),c=this._ease(u/this._dur),sC(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(sh(this,0),this.parent||rM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?uu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!kn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,qs&&qs.vars.overwrite!==!0)._first||uu(this),this.parent&&o!==this.timeline.totalDuration()&&Cl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ur(r):a,u=this._ptLookup,c=this._pt,d,f,h,g,v,_,p;if((!s||s==="all")&&UA(a,l))return s==="all"&&(this._pt=0),uu(this);for(d=this._op=this._op||[],s!=="all"&&(Nn(s)&&(v={},Ti(s,function(m){return v[m]=1}),s=v),s=oC(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=u[p],s==="all"?(d[p]=s,g=f,h={}):(h=d[p]=d[p]||{},g=s);for(v in g)_=f&&f[v],_&&((!("kill"in _.d)||_.d.kill(v)===!0)&&ih(this,_,"_pt"),delete f[v]),h!=="all"&&(h[v]=1)}return this._initted&&!this._pt&&c&&uu(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ru(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ru(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return jt.killTweensOf(r,s,o)},e}(ac);qi(_n.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ti("staggerTo,staggerFrom,staggerFromTo",function(n){_n[n]=function(){var e=new vi,t=Lm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var qg=function(e,t,i){return e[t]=i},wM=function(e,t,i){return e[t](i)},lC=function(e,t,i,r){return e[t](r.fp,i)},uC=function(e,t,i){return e.setAttribute(t,i)},Kg=function(e,t){return tn(e[t])?wM:Bg(e[t])&&e.setAttribute?uC:qg},AM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},cC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},CM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Zg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},fC=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},dC=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?ih(this,t,"_pt"):t.dep||(i=1),t=r;return!i},hC=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},RM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},wi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||AM,this.d=l||this,this.set=u||qg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=hC,this.m=i,this.mt=s,this.tween=r},n}();Ti(Wg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Gg[n]=1});$i.TweenMax=$i.TweenLite=_n;$i.TimelineLite=$i.TimelineMax=vi;jt=new vi({sortChildren:!1,defaults:nc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ji.stringFilter=xM;var Zo=[],Vf={},pC=[],qv=0,mC=0,Gh=function(e){return(Vf[e]||pC).map(function(t){return t()})},Um=function(){var e=Date.now(),t=[];e-qv>2&&(Gh("matchMediaInit"),Zo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Fr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Gh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),qv=e,Gh("matchMedia"))},bM=function(){function n(t,i){this.selector=i&&Dm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=mC++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){tn(i)&&(s=r,r=i,i=tn);var o=this,a=function(){var u=Vt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Dm(s)),Vt=o,d=r.apply(o,arguments),tn(d)&&o._r.push(d),Vt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===tn?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Vt;Vt=null,i(this),Vt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof _n&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof vi?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof _n)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Zo.length;o--;)Zo[o].id===this.id&&Zo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),_C=function(){function n(t){this.contexts=[],this.scope=t,Vt&&Vt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Kr(i)||(i={matches:i});var o=new bM(0,s||this.scope),a=o.conditions={},l,u,c;Vt&&!o.selector&&(o.selector=Vt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Fr.matchMedia(i[u]),l&&(Zo.indexOf(o)<0&&Zo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Um):l.addEventListener("change",Um)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Rd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return _M(r)})},timeline:function(e){return new vi(e)},getTweensOf:function(e,t){return jt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Nn(e)&&(e=ur(e)[0]);var s=$o(e||{}).get,o=i?iM:nM;return i==="native"&&(i=""),e&&(t?o((Fi[t]&&Fi[t].get||s)(e,t,i,r)):function(a,l,u){return o((Fi[a]&&Fi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ur(e),e.length>1){var r=e.map(function(c){return Ri.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Fi[t],a=$o(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;tl._pt=0,d.init(e,i?c+i:c,tl,0,[e]),d.render(1,d),tl._pt&&Zg(1,tl)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Ri.to(e,qi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ko(e.ease,nc.ease)),Wv(nc,e||{})},config:function(e){return Wv(ji,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Fi[a]&&!$i[a]&&ic(t+" effect requires "+a+" plugin.")}),Bh[t]=function(a,l,u){return i(ur(a),qi(l||{},s),u)},o&&(vi.prototype[t]=function(a,l,u){return this.add(Bh[t](a,Kr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){pt[e]=Ko(t)},parseEase:function(e,t){return arguments.length?Ko(e,t):pt},getById:function(e){return jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new vi(e),r,s;for(i.smoothChildTiming=Ei(e.smoothChildTiming),jt.remove(i),i._dp=0,i._time=i._tTime=jt._time,r=jt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof _n&&r.vars.onComplete===r._targets[0]))&&zr(i,r,r._start-r._delay),r=s;return zr(jt,i,0),i},context:function(e,t){return e?new bM(e,t):Vt},matchMedia:function(e){return new _C(e)},matchMediaRefresh:function(){return Zo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Um()},addEventListener:function(e,t){var i=Vf[e]||(Vf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Vf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:YA,wrapYoyo:$A,distribute:cM,random:dM,snap:fM,normalize:jA,getUnit:Qn,clamp:HA,splitColor:gM,toArray:ur,selector:Dm,mapRange:pM,pipe:WA,unitize:XA,interpolate:qA,shuffle:uM},install:Z1,effects:Bh,ticker:Bi,updateRoot:vi.updateRoot,plugins:Fi,globalTimeline:jt,core:{PropTween:wi,globals:Q1,Tween:_n,Timeline:vi,Animation:ac,getCache:$o,_removeLinkedListItem:ih,reverting:function(){return kn},context:function(e){return e&&Vt&&(Vt.data.push(e),e._ctx=Vt),Vt},suppressOverwrites:function(e){return kg=e}}};Ti("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Rd[n]=_n[n]});Bi.add(vi.updateRoot);tl=Rd.to({},{duration:0});var gC=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},vC=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=gC(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Wh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Nn(s)&&(l={},Ti(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}vC(a,s)}}}},Ri=Rd.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)kn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Wh("roundProps",Nm),Wh("modifiers"),Wh("snap",fM))||Rd;_n.version=vi.version=Ri.version="3.15.0";K1=1;zg()&&Rl();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Kv,Ks,cl,Qg,Ho,Zv,Jg,xC=function(){return typeof window<"u"},ws={},Io=180/Math.PI,fl=Math.PI/180,ya=Math.atan2,Qv=1e8,e0=/([A-Z])/g,yC=/(left|right|width|margin|padding|x)/i,SC=/[\s,\(]\S/,Vr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},EC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},TC=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},PM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},LM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},AC=function(e,t,i){return e.style[t]=i},CC=function(e,t,i){return e.style.setProperty(t,i)},RC=function(e,t,i){return e._gsap[t]=i},bC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},PC=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},LC=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Yt="transform",Ai=Yt+"Origin",DC=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in ws&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Vr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=us(r,a)}):this.tfm[e]=o.x?o[e]:us(r,e),e===Ai&&(this.tfm.zOrigin=o.zOrigin);else return Vr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Yt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ai,t,"")),e=Yt}(s||t)&&this.props.push(e,t,s[e])},DM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},NC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(e0,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Jg(),(!s||!s.isStart)&&!i[Yt]&&(DM(i),r.zOrigin&&i[Ai]&&(i[Ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},NM=function(e,t){var i={target:e,props:[],revert:NC,save:DC};return e._gsap||Ri.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},IM,Om=function(e,t){var i=Ks.createElementNS?Ks.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ks.createElement(e);return i&&i.style?i:Ks.createElement(e)},Wi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(e0,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,bl(t)||t,1)||""},Jv="O,Moz,ms,Ms,Webkit".split(","),bl=function(e,t,i){var r=t||Ho,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Jv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Jv[o]:"")+e},km=function(){xC()&&window.document&&(Kv=window,Ks=Kv.document,cl=Ks.documentElement,Ho=Om("div")||{style:{}},Om("div"),Yt=bl(Yt),Ai=Yt+"Origin",Ho.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",IM=!!bl("perspective"),Jg=Ri.core.reverting,Qg=1)},ex=function(e){var t=e.ownerSVGElement,i=Om("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),cl.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),cl.removeChild(i),s},tx=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},UM=function(e){var t,i;try{t=e.getBBox()}catch{t=ex(e),i=1}return t&&(t.width||t.height)||i||(t=ex(e)),t&&!t.width&&!t.x&&!t.y?{x:+tx(e,["x","cx","x1"])||0,y:+tx(e,["y","cy","y1"])||0,width:0,height:0}:t},FM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&UM(e))},_o=function(e,t){if(t){var i=e.style,r;t in ws&&t!==Ai&&(t=Yt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(e0,"-$1").toLowerCase())):i.removeAttribute(t)}},Zs=function(e,t,i,r,s,o){var a=new wi(e._pt,t,i,0,1,o?LM:PM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},nx={deg:1,rad:1,turn:1},IC={grid:1,flex:1},go=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Ho.style,l=yC.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",g,v,_,p;if(r===o||!s||nx[r]||nx[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),p=e.getCTM&&FM(e),(h||o==="%")&&(ws[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[c],an(h?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(f?o:r),v=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,p&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Ks||!v.appendChild)&&(v=Ks.body),_=v._gsap,_&&h&&_.width&&l&&_.time===Bi.time&&!_.uncache)return an(s/_.width*d);if(h&&(t==="height"||t==="width")){var m=e.style[t];e.style[t]=d+r,g=e[c],m?e.style[t]=m:_o(e,t)}else(h||o==="%")&&!IC[Wi(v,"display")]&&(a.position=Wi(e,"position")),v===e&&(a.position="static"),v.appendChild(Ho),g=Ho[c],v.removeChild(Ho),a.position="absolute";return l&&h&&(_=$o(v),_.time=Bi.time,_.width=v[c]),an(f?g*s/d:g&&s?d/g*s:0)},us=function(e,t,i,r){var s;return Qg||km(),t in Vr&&t!=="transform"&&(t=Vr[t],~t.indexOf(",")&&(t=t.split(",")[0])),ws[t]&&t!=="transform"?(s=uc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Pd(Wi(e,Ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=bd[t]&&bd[t](e,t,i)||Wi(e,t)||eM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?go(e,t,s,i)+i:s},UC=function(e,t,i,r){if(!i||i==="none"){var s=bl(t,e,1),o=s&&Wi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Wi(e,"borderTopColor"))}var a=new wi(this._pt,e.style,t,0,1,CM),l=0,u=0,c,d,f,h,g,v,_,p,m,x,S,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Wi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(v=e.style[t],e.style[t]=r,r=Wi(e,t)||r,v?e.style[t]=v:_o(e,t)),c=[i,r],xM(c),i=c[0],r=c[1],f=i.match(el)||[],w=r.match(el)||[],w.length){for(;d=el.exec(r);)_=d[0],m=r.substring(l,d.index),g?g=(g+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(g=1),_!==(v=f[u++]||"")&&(h=parseFloat(v)||0,S=v.substr((h+"").length),_.charAt(1)==="="&&(_=ul(h,_)+S),p=parseFloat(_),x=_.substr((p+"").length),l=el.lastIndex-x.length,x||(x=x||ji.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(h=go(e,t,v,x)||0),a._pt={_next:a._pt,p:m||u===1?m:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?LM:PM;return q1.test(r)&&(a.e=0),this._pt=a,a},ix={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},FC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=ix[i]||i,t[1]=ix[r]||r,t.join(" ")},OC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],ws[a]&&(l=1,a=a==="transformOrigin"?Ai:Yt),_o(i,a);l&&(_o(i,Yt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",uc(i,1),o.uncache=1,DM(r)))}},bd={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new wi(e._pt,t,i,0,0,OC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},lc=[1,0,0,1,0,0],OM={},kM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},rx=function(e){var t=Wi(e,Yt);return kM(t)?lc:t.substr(7).match($1).map(an)},t0=function(e,t){var i=e._gsap||$o(e),r=e.style,s=rx(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?lc:s):(s===lc&&!e.offsetParent&&e!==cl&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,cl.appendChild(e)),s=rx(e),l?r.display=l:_o(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):cl.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bm=function(e,t,i,r,s,o){var a=e._gsap,l=s||t0(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],g=l[1],v=l[2],_=l[3],p=l[4],m=l[5],x=t.split(" "),S=parseFloat(x[0])||0,w=parseFloat(x[1])||0,E,T,y,C;i?l!==lc&&(T=h*_-g*v)&&(y=S*(_/T)+w*(-v/T)+(v*m-_*p)/T,C=S*(-g/T)+w*(h/T)-(h*m-g*p)/T,S=y,w=C):(E=UM(e),S=E.x+(~x[0].indexOf("%")?S/100*E.width:S),w=E.y+(~(x[1]||x[0]).indexOf("%")?w/100*E.height:w)),r||r!==!1&&a.smooth?(p=S-u,m=w-c,a.xOffset=d+(p*h+m*v)-p,a.yOffset=f+(p*g+m*_)-m):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Ai]="0px 0px",o&&(Zs(o,a,"xOrigin",u,S),Zs(o,a,"yOrigin",c,w),Zs(o,a,"xOffset",d,a.xOffset),Zs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+w)},uc=function(e,t){var i=e._gsap||new SM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Wi(e,Ai)||"0",c,d,f,h,g,v,_,p,m,x,S,w,E,T,y,C,b,L,N,W,z,D,k,U,O,G,P,te,ce,Fe,Ce,Ne;return c=d=f=v=_=p=m=x=S=0,h=g=1,i.svg=!!(e.getCTM&&FM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Yt]!=="none"?l[Yt]:"")),r.scale=r.rotate=r.translate="none"),T=t0(e,i.svg),i.svg&&(i.uncache?(O=e.getBBox(),u=i.xOrigin-O.x+"px "+(i.yOrigin-O.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),Bm(e,U||u,!!U||i.originIsAbsolute,i.smooth!==!1,T)),w=i.xOrigin||0,E=i.yOrigin||0,T!==lc&&(L=T[0],N=T[1],W=T[2],z=T[3],c=D=T[4],d=k=T[5],T.length===6?(h=Math.sqrt(L*L+N*N),g=Math.sqrt(z*z+W*W),v=L||N?ya(N,L)*Io:0,m=W||z?ya(W,z)*Io+v:0,m&&(g*=Math.abs(Math.cos(m*fl))),i.svg&&(c-=w-(w*L+E*W),d-=E-(w*N+E*z))):(Ne=T[6],Fe=T[7],P=T[8],te=T[9],ce=T[10],Ce=T[11],c=T[12],d=T[13],f=T[14],y=ya(Ne,ce),_=y*Io,y&&(C=Math.cos(-y),b=Math.sin(-y),U=D*C+P*b,O=k*C+te*b,G=Ne*C+ce*b,P=D*-b+P*C,te=k*-b+te*C,ce=Ne*-b+ce*C,Ce=Fe*-b+Ce*C,D=U,k=O,Ne=G),y=ya(-W,ce),p=y*Io,y&&(C=Math.cos(-y),b=Math.sin(-y),U=L*C-P*b,O=N*C-te*b,G=W*C-ce*b,Ce=z*b+Ce*C,L=U,N=O,W=G),y=ya(N,L),v=y*Io,y&&(C=Math.cos(y),b=Math.sin(y),U=L*C+N*b,O=D*C+k*b,N=N*C-L*b,k=k*C-D*b,L=U,D=O),_&&Math.abs(_)+Math.abs(v)>359.9&&(_=v=0,p=180-p),h=an(Math.sqrt(L*L+N*N+W*W)),g=an(Math.sqrt(k*k+Ne*Ne)),y=ya(D,k),m=Math.abs(y)>2e-4?y*Io:0,S=Ce?1/(Ce<0?-Ce:Ce):0),i.svg&&(U=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!kM(Wi(e,Yt)),U&&e.setAttribute("transform",U))),Math.abs(m)>90&&Math.abs(m)<270&&(s?(h*=-1,m+=v<=0?180:-180,v+=v<=0?180:-180):(g*=-1,m+=m<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=an(h),i.scaleY=an(g),i.rotation=an(v)+a,i.rotationX=an(_)+a,i.rotationY=an(p)+a,i.skewX=m+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Ai]=Pd(u)),i.xOffset=i.yOffset=0,i.force3D=ji.force3D,i.renderTransform=i.svg?BC:IM?BM:kC,i.uncache=0,i},Pd=function(e){return(e=e.split(" "))[0]+" "+e[1]},Xh=function(e,t,i){var r=Qn(t);return an(parseFloat(t)+parseFloat(go(e,"x",i+"px",r)))+r},kC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,BM(e,t)},wo="0deg",ql="0px",Ao=") ",BM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,g=i.scaleX,v=i.scaleY,_=i.transformPerspective,p=i.force3D,m=i.target,x=i.zOrigin,S="",w=p==="auto"&&e&&e!==1||p===!0;if(x&&(d!==wo||c!==wo)){var E=parseFloat(c)*fl,T=Math.sin(E),y=Math.cos(E),C;E=parseFloat(d)*fl,C=Math.cos(E),o=Xh(m,o,T*C*-x),a=Xh(m,a,-Math.sin(E)*-x),l=Xh(m,l,y*C*-x+x)}_!==ql&&(S+="perspective("+_+Ao),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(w||o!==ql||a!==ql||l!==ql)&&(S+=l!==ql||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ao),u!==wo&&(S+="rotate("+u+Ao),c!==wo&&(S+="rotateY("+c+Ao),d!==wo&&(S+="rotateX("+d+Ao),(f!==wo||h!==wo)&&(S+="skew("+f+", "+h+Ao),(g!==1||v!==1)&&(S+="scale("+g+", "+v+Ao),m.style[Yt]=S||"translate(0, 0)"},BC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,g=i.xOrigin,v=i.yOrigin,_=i.xOffset,p=i.yOffset,m=i.forceCSS,x=parseFloat(o),S=parseFloat(a),w,E,T,y,C;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=fl,u*=fl,w=Math.cos(l)*d,E=Math.sin(l)*d,T=Math.sin(l-u)*-f,y=Math.cos(l-u)*f,u&&(c*=fl,C=Math.tan(u-c),C=Math.sqrt(1+C*C),T*=C,y*=C,c&&(C=Math.tan(c),C=Math.sqrt(1+C*C),w*=C,E*=C)),w=an(w),E=an(E),T=an(T),y=an(y)):(w=d,y=f,E=T=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=go(h,"x",o,"px"),S=go(h,"y",a,"px")),(g||v||_||p)&&(x=an(x+g-(g*w+v*T)+_),S=an(S+v-(g*E+v*y)+p)),(r||s)&&(C=h.getBBox(),x=an(x+r/100*C.width),S=an(S+s/100*C.height)),C="matrix("+w+","+E+","+T+","+y+","+x+","+S+")",h.setAttribute("transform",C),m&&(h.style[Yt]=C)},zC=function(e,t,i,r,s){var o=360,a=Nn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Io:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*Qv)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*Qv)%o-~~(u/o)*o)),e._pt=f=new wi(e._pt,t,i,r,u,MC),f.e=c,f.u="deg",e._props.push(i),f},sx=function(e,t){for(var i in t)e[i]=t[i];return e},VC=function(e,t,i){var r=sx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,h,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Yt]=t,a=uc(i,1),_o(i,Yt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Yt],o[Yt]=t,a=uc(i,1),o[Yt]=u);for(l in ws)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(h=Qn(u),g=Qn(c),d=h!==g?go(i,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new wi(e._pt,a,l,d,f-d,Fm),e._pt.u=g||0,e._props.push(l));sx(a,r)};Ti("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});bd[e>1?"border"+n:n]=function(a,l,u,c,d){var f,h;if(arguments.length<4)return f=o.map(function(g){return us(a,g,u)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(c+"").split(" "),h={},o.forEach(function(g,v){return h[g]=f[v]=f[v]||f[(v-1)/2|0]}),a.init(l,h,d)}});var zM={name:"css",register:km,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,h,g,v,_,p,m,x,S,w,E,T,y,C;Qg||km(),this.styles=this.styles||NM(e),y=this.styles.props,this.tween=i;for(v in t)if(v!=="autoRound"&&(c=t[v],!(Fi[v]&&MM(v,t,i,r,e,s)))){if(h=typeof c,g=bd[v],h==="function"&&(c=c.call(i,r,e,s),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=sc(c)),g)g(this,e,v,c,i)&&(T=1);else if(v.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(v)+"").trim(),c+="",co.lastIndex=0,co.test(u)||(_=Qn(u),p=Qn(c),p?_!==p&&(u=go(e,v,u,p)+p):_&&(c+=_)),this.add(a,"setProperty",u,c,r,s,0,0,v),o.push(v),y.push(v,0,a[v]);else if(h!=="undefined"){if(l&&v in l?(u=typeof l[v]=="function"?l[v].call(i,r,e,s):l[v],Nn(u)&&~u.indexOf("random(")&&(u=sc(u)),Qn(u+"")||u==="auto"||(u+=ji.units[v]||Qn(us(e,v))||""),(u+"").charAt(1)==="="&&(u=us(e,v))):u=us(e,v),f=parseFloat(u),m=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),m&&(c=c.substr(2)),d=parseFloat(c),v in Vr&&(v==="autoAlpha"&&(f===1&&us(e,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,a.visibility),Zs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),v!=="scale"&&v!=="transform"&&(v=Vr[v],~v.indexOf(",")&&(v=v.split(",")[0]))),x=v in ws,x){if(this.styles.save(v),C=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=Wi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=c,c=Wi(e,"perspective"),b?e.style.perspective=b:_o(e,"perspective")}d=parseFloat(c)}if(S||(w=e._gsap,w.renderTransform&&!t.parseTransform||uc(e,t.parseTransform),E=t.smoothOrigin!==!1&&w.smooth,S=this._pt=new wi(this._pt,a,Yt,0,1,w.renderTransform,w,0,-1),S.dep=1),v==="scale")this._pt=new wi(this._pt,w,"scaleY",w.scaleY,(m?ul(w.scaleY,m+d):d)-w.scaleY||0,Fm),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){y.push(Ai,0,a[Ai]),c=FC(c),w.svg?Bm(e,c,0,E,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==w.zOrigin&&Zs(this,w,"zOrigin",w.zOrigin,p),Zs(this,a,v,Pd(u),Pd(c)));continue}else if(v==="svgOrigin"){Bm(e,c,1,E,0,this);continue}else if(v in OM){zC(this,w,v,f,m?ul(f,m+c):c);continue}else if(v==="smoothOrigin"){Zs(this,w,"smooth",w.smooth,c);continue}else if(v==="force3D"){w[v]=c;continue}else if(v==="transform"){VC(this,c,e);continue}}else v in a||(v=bl(v)||v);if(x||(d||d===0)&&(f||f===0)&&!SC.test(c)&&v in a)_=(u+"").substr((f+"").length),d||(d=0),p=Qn(c)||(v in ji.units?ji.units[v]:_),_!==p&&(f=go(e,v,u,p)),this._pt=new wi(this._pt,x?w:a,v,f,(m?ul(f,m+d):d)-f,!x&&(p==="px"||v==="zIndex")&&t.autoRound!==!1?wC:Fm),this._pt.u=p||0,x&&C!==c?(this._pt.b=u,this._pt.e=C,this._pt.r=TC):_!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=EC);else if(v in a)UC.call(this,e,v,u,m?m+c:c);else if(v in e)this.add(e,v,u||e[v],m?m+c:c,r,s);else if(v!=="parseTransform"){Hg(v,c);continue}x||(v in a?y.push(v,0,a[v]):typeof e[v]=="function"?y.push(v,2,e[v]()):y.push(v,1,u||e[v])),o.push(v)}}T&&RM(this)},render:function(e,t){if(t.tween._time||!Jg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:us,aliases:Vr,getSetter:function(e,t,i){var r=Vr[t];return r&&r.indexOf(",")<0&&(t=r),t in ws&&t!==Ai&&(e._gsap.x||us(e,"x"))?i&&Zv===i?t==="scale"?bC:RC:(Zv=i||{})&&(t==="scale"?PC:LC):e.style&&!Bg(e.style[t])?AC:~t.indexOf("-")?CC:Kg(e,t)},core:{_removeProperty:_o,_getMatrix:t0}};Ri.utils.checkPrefix=bl;Ri.core.getStyleSaver=NM;(function(n,e,t,i){var r=Ti(n+","+e+","+t,function(s){ws[s]=1});Ti(e,function(s){ji.units[s]="deg",OM[s]=1}),Vr[r[13]]=n+","+e,Ti(i,function(s){var o=s.split(":");Vr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ti("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){ji.units[n]="px"});Ri.registerPlugin(zM);var cn=Ri.registerPlugin(zM)||Ri;cn.core.Tween;var VM={};function HC(n){if(typeof window>"u")return;const e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}Object.defineProperty(VM,"__esModule",{value:!0});var Qt=Ke;function GC(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}var Ns=GC(Qt);HC(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const WC=Qt.forwardRef(function({style:e={},className:t="",autoFill:i=!1,play:r=!0,pauseOnHover:s=!1,pauseOnClick:o=!1,direction:a="left",speed:l=50,delay:u=0,loop:c=0,gradient:d=!1,gradientColor:f="white",gradientWidth:h=200,onFinish:g,onCycleComplete:v,onMount:_,children:p},m){const[x,S]=Qt.useState(0),[w,E]=Qt.useState(0),[T,y]=Qt.useState(1),[C,b]=Qt.useState(!1),L=Qt.useRef(null),N=m||L,W=Qt.useRef(null),z=Qt.useCallback(()=>{if(W.current&&N.current){const te=N.current.getBoundingClientRect(),ce=W.current.getBoundingClientRect();let Fe=te.width,Ce=ce.width;(a==="up"||a==="down")&&(Fe=te.height,Ce=ce.height),y(i&&Fe&&Ce&&Ce<Fe?Math.ceil(Fe/Ce):1),S(Fe),E(Ce)}},[i,N,a]);Qt.useEffect(()=>{if(C&&(z(),W.current&&N.current)){const te=new ResizeObserver(()=>z());return te.observe(N.current),te.observe(W.current),()=>{te&&te.disconnect()}}},[z,N,C]),Qt.useEffect(()=>{z()},[z,p]),Qt.useEffect(()=>{b(!0)},[]),Qt.useEffect(()=>{typeof _=="function"&&_()},[]);const D=Qt.useMemo(()=>i?w*T/l:w<x?x/l:w/l,[i,x,w,T,l]),k=Qt.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!r||s?"paused":"running","--pause-on-click":!r||s&&!o||o?"paused":"running","--width":a==="up"||a==="down"?"100vh":"100%","--transform":a==="up"?"rotate(-90deg)":a==="down"?"rotate(90deg)":"none"}),[e,r,s,o,a]),U=Qt.useMemo(()=>({"--gradient-color":f,"--gradient-width":typeof h=="number"?`${h}px`:h}),[f,h]),O=Qt.useMemo(()=>({"--play":r?"running":"paused","--direction":a==="left"?"normal":"reverse","--duration":`${D}s`,"--delay":`${u}s`,"--iteration-count":c?`${c}`:"infinite","--min-width":i?"auto":"100%"}),[r,a,D,u,c,i]),G=Qt.useMemo(()=>({"--transform":a==="up"?"rotate(90deg)":a==="down"?"rotate(-90deg)":"none"}),[a]),P=Qt.useCallback(te=>[...Array(Number.isFinite(te)&&te>=0?te:0)].map((ce,Fe)=>Ns.default.createElement(Qt.Fragment,{key:Fe},Qt.Children.map(p,Ce=>Ns.default.createElement("div",{style:G,className:"rfm-child"},Ce)))),[G,p]);return C?Ns.default.createElement("div",{ref:N,style:k,className:"rfm-marquee-container "+t},d&&Ns.default.createElement("div",{style:U,className:"rfm-overlay"}),Ns.default.createElement("div",{className:"rfm-marquee",style:O,onAnimationIteration:v,onAnimationEnd:g},Ns.default.createElement("div",{className:"rfm-initial-child-container",ref:W},Qt.Children.map(p,te=>Ns.default.createElement("div",{style:G,className:"rfm-child"},te))),P(T-1)),Ns.default.createElement("div",{className:"rfm-marquee",style:O},P(T))):null});var XC=VM.default=WC;const jC="_loadingScreen_12dxs_1",YC="_loadingButton_12dxs_23",$C="_loadingClicked_12dxs_89",qC="_loadingWrap_12dxs_97",KC="_loadingHover_12dxs_163",ZC="_loadingContent_12dxs_209",QC="_loadingContentIn_12dxs_227",JC="_loadingContent2_12dxs_239",eR="_loadingBox_12dxs_303",tR="_loadingComplete_12dxs_339",nR="_loadingContainer_12dxs_381",iR="_loadingHeader_12dxs_411",rR="_loaderTitle_12dxs_441",sR="_loadingMarquee_12dxs_457",oR="_loaderGameContainer_12dxs_523",aR="_loaderOut_12dxs_543",lR="_loaderGameIn_12dxs_551",uR="_loaderGame_12dxs_523",cR="_loaderGameLine_12dxs_567",fR="_loaderGameBall_12dxs_599",hn={loadingScreen:jC,loadingButton:YC,loadingClicked:$C,loadingWrap:qC,loadingHover:KC,loadingContent:ZC,loadingContentIn:QC,loadingContent2:JC,loadingBox:eR,loadingComplete:tR,loadingContainer:nR,loadingHeader:iR,loaderTitle:rR,loadingMarquee:sR,loaderGameContainer:oR,loaderOut:aR,loaderGameIn:lR,loaderGame:uR,loaderGameLine:cR,loaderGameBall:fR},dR=({percent:n})=>{const{setIsLoading:e}=GM(),[t,i]=Ke.useState(!1),[r,s]=Ke.useState(!1),[o,a]=Ke.useState(!1);n>=100&&setTimeout(()=>{i(!0),setTimeout(()=>s(!0),1e3)},600),Ke.useEffect(()=>{r&&(a(!0),setTimeout(()=>{e(!1)},900))},[r]);function l(u){const{currentTarget:c}=u,d=c.getBoundingClientRect(),f=u.clientX-d.left,h=u.clientY-d.top;c.style.setProperty("--mouse-x",`${f}px`),c.style.setProperty("--mouse-y",`${h}px`)}return I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:hn.loadingHeader,children:[I.jsx("span",{className:hn.loaderTitle,children:".Porfolio"}),I.jsx("div",{className:`${hn.loaderGame} ${o?hn.loaderOut:""}`,children:I.jsxs("div",{className:hn.loaderGameContainer,children:[I.jsx("div",{className:hn.loaderGameIn,children:[...Array(27)].map((u,c)=>I.jsx("div",{className:hn.loaderGameLine},c))}),I.jsx("div",{className:hn.loaderGameBall})]})})]}),I.jsxs("div",{className:hn.loadingScreen,children:[I.jsx("div",{className:hn.loadingMarquee,children:I.jsxs(XC,{children:[I.jsx("span",{children:"CHOCOMOCO"}),I.jsx("span",{children:"CHOCOMOCO"}),I.jsx("span",{children:"CHOCOMOCO"}),I.jsx("span",{children:"CHOCOMOCO"})]})}),I.jsxs("div",{className:`${hn.loadingWrap} ${o?hn.loadingClicked:""}`,onMouseMove:l,children:[I.jsx("div",{className:hn.loadingHover}),I.jsxs("div",{className:`${hn.loadingButton} ${t?hn.loadingComplete:""}`,children:[I.jsxs("div",{className:hn.loadingContainer,children:[I.jsx("div",{className:hn.loadingContent,children:I.jsxs("div",{className:hn.loadingContentIn,children:["Loading ",I.jsxs("span",{children:[n,"%"]})]})}),I.jsx("div",{className:hn.loadingBox})]}),I.jsx("div",{className:hn.loadingContent2,children:I.jsx("span",{children:"Welcome"})})]})]})]})]})},hR=n=>{let e=0,t=setInterval(()=>{e<=50?(e+=Math.round(Math.random()*2),n(e)):(clearInterval(t),t=setInterval(()=>{e+=Math.round(Math.random()),n(e),e>91&&clearInterval(t)},4e3))},250);return{loaded:()=>new Promise(s=>{clearInterval(t);const o=()=>{if(e>=100){s(e);return}e++,n(e);let a=18;e>=53&&e<=58?a=100:e==98&&(a=700),t=setTimeout(o,a)};o()}),percent:e,clear:()=>{clearInterval(t),n(100)}}},HM=Ke.createContext(null),pR=({children:n})=>{const[e,t]=Ke.useState(!0),[i,r]=Ke.useState(0),s={isLoading:e,setIsLoading:t,setLoading:r};return I.jsxs(HM.Provider,{value:s,children:[e&&I.jsx(dR,{percent:i}),I.jsx("main",{className:"main-body",children:n})]})},GM=()=>{const n=Ke.useContext(HM);if(!n)throw new Error("useLoading must be used within a LoadingProvider");return n},mR="_cursor_1hk57_1",_R="_cursorHover_1hk57_41",jh={cursor:mR,cursorHover:_R};function gR(){const n=Ke.useRef(null);return Ke.useEffect(()=>{let e=0,t=0,i=0,r=0,s;const o=f=>{e=f.clientX,t=f.clientY},a=()=>{i+=(e-i)*.85,r+=(t-r)*.85,n.current&&(n.current.style.transform=`translate(calc(${i}px - 50%), calc(${r}px - 50%))`),s=requestAnimationFrame(a)};a();const l=()=>{var f;return(f=n.current)==null?void 0:f.classList.add(jh.cursorHover)},u=()=>{var f;return(f=n.current)==null?void 0:f.classList.remove(jh.cursorHover)},c=f=>{f.target.closest("a, button")&&l()},d=f=>{f.target.closest("a, button")&&u()};return window.addEventListener("mousemove",o),document.addEventListener("mouseover",c),document.addEventListener("mouseout",d),()=>{window.removeEventListener("mousemove",o),document.removeEventListener("mouseover",c),document.removeEventListener("mouseout",d),cancelAnimationFrame(s)}},[]),window.matchMedia("(pointer: coarse)").matches?null:I.jsx("div",{ref:n,className:jh.cursor})}const vR="_nav_1o5yp_1",xR="_inner_1o5yp_15",yR="_logo_1o5yp_27",SR="_dot_1o5yp_38",MR="_hirebtn_1o5yp_75",Sa={nav:vR,inner:xR,logo:yR,dot:SR,hirebtn:MR};function ER(){const[n,e]=Ke.useState(!1),t=Ke.useRef(null);return Ke.useEffect(()=>{cn.fromTo(".floating-pill",{y:-60,opacity:0,scale:.95},{y:0,opacity:1,scale:1,duration:.9,ease:"power3.out",delay:.3})},[]),Ke.useEffect(()=>{const i=()=>e(window.scrollY>40);return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]),I.jsx("header",{ref:t,className:`${Sa.nav} ${n?Sa.scrolled:""}`,children:I.jsxs("div",{className:Sa.inner,children:[I.jsxs("a",{href:"#hero",className:Sa.logo,children:[I.jsx("span",{className:Sa.dot,children:"."}),"Porfolio"]}),I.jsx("a",{href:"https://drive.google.com/file/d/1ZgRMh2SbvTeMjgj9xAVYLdBhZ_D2YLlQ/view?usp=sharing",className:Sa.hirebtn,children:"resume"})]})})}const pa={personal:{name:"Debarghya Datta",tagline:"Someone who enjoys solving real problems,learning along the way, and creating things that feel useful and a little bit different from the usual.",email:"debarghyadatta2004@gmail.com",github:"https://github.com/chocomoco24",linkedin:"https://www.linkedin.com/in/debarghya4/",instagram:"https://www.instagram.com/pyaaz._/"},summary:"Final-year B.Tech Computer Science student at KIIT University specialising in full-stack development across Spring Boot, React, Node.js/Express, and Python/FastAPI. Built and deployed AI-integrated applications including a stroke prediction platform and an F1 analytics system with Groq LLM integration. Strong foundation in OOP, DBMS, and REST API design, with hands-on experience shipping to production via Vercel and Render.",skills:{languages:["Java","Python","JavaScript","TypeScript","SQL"],frontend:["React.js","HTML5","CSS3"],backend:["Spring Boot","Node.js","Express","FastAPI"],databases:["MySQL","PostgreSQL","MongoDB"],tools:["Git","GitHub","VS Code","Figma","Vercel","Render"],concepts:["REST API Design","OOP","DBMS","JWT Auth","Microservices","Data Structures"]},projects:[{id:"neural-stroke-care",number:"01",title:"Neural Stroke Care",category:"Microservices · ML",description:"A full-stack stroke risk prediction platform with a three-tier microservices architecture — React SPA, Express REST API, and a FastAPI ML service serving a Logistic Regression model. Features JWT-based auth with role-based access control routing patients and doctors to specialised dashboards.",highlights:["Three-tier microservices: React, Express, FastAPI","JWT auth with role-based access (patient / doctor)","Real-time prediction pipeline normalising clinical input data","MongoDB persistence for patient history and doctor insights"],tech:["React","Node.js","Express","MongoDB","Python","FastAPI"],github:"https://github.com/chocomoco24/Neural-Stroke-Care",demo:null},{id:"f1-race-report",number:"02",title:"F1 Race Report",category:"Full-Stack · AI",description:"A full-stack Formula 1 analytics platform delivering live race data, standings visualisation, and historical race analysis from 1950–2026. Integrated AI-generated journalist-style race reports using Groq LLM APIs with automated report generation, caching, and PDF export.",highlights:["Interactive lap charts, podium tracking, and results tables","Groq LLM integration for AI journalist-style reports","PDF export with persistent Neon PostgreSQL report storage","Deployed on Vercel + Render with scalable cloud architecture"],tech:["React","Spring Boot","PostgreSQL","Groq LLM","Vercel","Render"],github:"https://github.com/chocomoco24/F1Race",demo:null}],experience:[{company:"AICTE Virtual Internship",role:"Python Full Stack Developer",type:"Certificate",period:"Oct 2024 – Dec 2024",points:["Implemented Python, HTML, CSS, JavaScript, and SQL across real-world project tasks.","Applied user authentication, REST APIs, and database management concepts.","Strengthened coding practices through debugging and version control with Git/GitHub.","Solved industry-level assignments and coding challenges throughout the internship."]}],certifications:[{title:"Project Initiation",issuer:"Coursera"},{title:"Project Planning",issuer:"Coursera"}],extracurricular:[{role:"Graphic Designer",org:"IoT Lab (Technical Society)"},{role:"Photographer",org:"Kzarshion (Fashion Society)"},{role:"Volunteer",org:"Khwaab (Social Welfare Society)"}]},TR="_hero_1utbu_1",wR="_magnetLetter_1utbu_11",AR="_tagline_1utbu_18",CR="_inner_1utbu_70",RR="_greeting_1utbu_103",bR="_bracket_1utbu_111",PR="_bracket2_1utbu_116",LR="_name_1utbu_121",DR="_role_1utbu_134",NR="_right_1utbu_311",IR="_threeCanvas_1utbu_321",UR="_canvasHint_1utbu_334",FR="_left_1utbu_367",Gt={hero:TR,magnetLetter:wR,tagline:AR,inner:CR,greeting:RR,bracket:bR,bracket2:PR,name:LR,role:DR,right:NR,threeCanvas:IR,canvasHint:UR,left:FR};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const n0="184",OR=0,ox=1,kR=2,Hf=1,WM=2,fu=3,vo=0,Ci=1,cs=2,gs=0,dl=1,ax=2,lx=3,ux=4,BR=5,Oo=100,zR=101,VR=102,HR=103,GR=104,WR=200,XR=201,jR=202,YR=203,zm=204,Vm=205,$R=206,qR=207,KR=208,ZR=209,QR=210,JR=211,eb=212,tb=213,nb=214,Hm=0,Gm=1,Wm=2,Pl=3,Xm=4,jm=5,Ym=6,$m=7,XM=0,ib=1,rb=2,Yr=0,jM=1,YM=2,$M=3,i0=4,qM=5,KM=6,ZM=7,QM=300,oa=301,Ll=302,Yh=303,$h=304,oh=306,qm=1e3,ps=1001,Km=1002,Un=1003,sb=1004,Hc=1005,ei=1006,qh=1007,Go=1008,zi=1009,JM=1010,eE=1011,cc=1012,r0=1013,Zr=1014,Hr=1015,As=1016,s0=1017,o0=1018,fc=1020,tE=35902,nE=35899,iE=1021,rE=1022,Ar=1023,Cs=1026,Wo=1027,sE=1028,a0=1029,aa=1030,l0=1031,u0=1033,Gf=33776,Wf=33777,Xf=33778,jf=33779,Zm=35840,Qm=35841,Jm=35842,e_=35843,t_=36196,n_=37492,i_=37496,r_=37488,s_=37489,Ld=37490,o_=37491,a_=37808,l_=37809,u_=37810,c_=37811,f_=37812,d_=37813,h_=37814,p_=37815,m_=37816,__=37817,g_=37818,v_=37819,x_=37820,y_=37821,S_=36492,M_=36494,E_=36495,T_=36283,w_=36284,Dd=36285,A_=36286,ob=3200,C_=0,ab=1,js="",nr="srgb",Nd="srgb-linear",Id="linear",Et="srgb",Ma=7680,cx=519,lb=512,ub=513,cb=514,c0=515,fb=516,db=517,f0=518,hb=519,fx=35044,dx="300 es",Gr=2e3,dc=2001;function pb(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ud(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mb(){const n=Ud("canvas");return n.style.display="block",n}const hx={};function px(...n){const e="THREE."+n.shift();console.log(e,...n)}function oE(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xe(...n){n=oE(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function mt(...n){n=oE(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function R_(...n){const e=n.join(" ");e in hx||(hx[e]=!0,Xe(...n))}function _b(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const gb={[Hm]:Gm,[Wm]:Ym,[Xm]:$m,[Pl]:jm,[Gm]:Hm,[Ym]:Wm,[$m]:Xm,[jm]:Pl};class ma{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kh=Math.PI/180,b_=180/Math.PI;function Sc(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xn[n&255]+Xn[n>>8&255]+Xn[n>>16&255]+Xn[n>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[t&63|128]+Xn[t>>8&255]+"-"+Xn[t>>16&255]+Xn[t>>24&255]+Xn[i&255]+Xn[i>>8&255]+Xn[i>>16&255]+Xn[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function vb(n,e){return(n%e+e)%e}function Zh(n,e,t){return(1-t)*n+t*e}function Kl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const C0=class C0{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};C0.prototype.isVector2=!0;let xt=C0;class kl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(d!==v||l!==f||u!==h||c!==g){let _=l*f+u*h+c*g+d*v;_<0&&(f=-f,h=-h,g=-g,v=-v,_=-_);let p=1-a;if(_<.9995){const m=Math.acos(_),x=Math.sin(m);p=Math.sin(p*m)/x,a=Math.sin(a*m)/x,l=l*p+f*a,u=u*p+h*a,c=c*p+g*a,d=d*p+v*a}else{l=l*p+f*a,u=u*p+h*a,c=c*p+g*a,d=d*p+v*a;const m=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=m,u*=m,c*=m,d*=m}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+c*d+l*h-u*f,e[t+1]=l*g+c*f+u*d-a*h,e[t+2]=u*g+c*h+a*f-l*d,e[t+3]=c*g-a*d-l*f-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d-f*h*g;break;case"YXZ":this._x=f*c*d+u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d+f*h*g;break;case"ZXY":this._x=f*c*d-u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d-f*h*g;break;case"ZYX":this._x=f*c*d-u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d+f*h*g;break;case"YZX":this._x=f*c*d+u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d-f*h*g;break;case"XZY":this._x=f*c*d-u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d+f*h*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(c-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const R0=class R0{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qh.copy(this).projectOnVector(e),this.sub(Qh)}reflect(e){return this.sub(Qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};R0.prototype.isVector3=!0;let Y=R0;const Qh=new Y,mx=new kl,b0=class b0{constructor(e,t,i,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=r[0],_=r[3],p=r[6],m=r[1],x=r[4],S=r[7],w=r[2],E=r[5],T=r[8];return s[0]=o*v+a*m+l*w,s[3]=o*_+a*x+l*E,s[6]=o*p+a*S+l*T,s[1]=u*v+c*m+d*w,s[4]=u*_+c*x+d*E,s[7]=u*p+c*S+d*T,s[2]=f*v+h*m+g*w,s[5]=f*_+h*x+g*E,s[8]=f*p+h*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,h=u*s-o*l,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=h*v,e[7]=(i*l-u*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jh.makeScale(e,t)),this}rotate(e){return this.premultiply(Jh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};b0.prototype.isMatrix3=!0;let qe=b0;const Jh=new qe,_x=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gx=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xb(){const n={enabled:!0,workingColorSpace:Nd,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Et&&(r.r=vs(r.r),r.g=vs(r.g),r.b=vs(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(r.r=hl(r.r),r.g=hl(r.g),r.b=hl(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===js?Id:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return R_("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return R_("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Nd]:{primaries:e,whitePoint:i,transfer:Id,toXYZ:_x,fromXYZ:gx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nr},outputColorSpaceConfig:{drawingBufferColorSpace:nr}},[nr]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:_x,fromXYZ:gx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nr}}}),n}const dt=xb();function vs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ea;class yb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ea===void 0&&(Ea=Ud("canvas")),Ea.width=e.width,Ea.height=e.height;const r=Ea.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ea}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ud("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=vs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vs(t[i]/255)*255):t[i]=vs(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sb=0;class d0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=Sc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ep(r[o].image)):s.push(ep(r[o]))}else s=ep(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ep(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let Mb=0;const tp=new Y;class di extends ma{constructor(e=di.DEFAULT_IMAGE,t=di.DEFAULT_MAPPING,i=ps,r=ps,s=ei,o=Go,a=Ar,l=zi,u=di.DEFAULT_ANISOTROPY,c=js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=Sc(),this.name="",this.source=new d0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tp).x}get height(){return this.source.getSize(tp).y}get depth(){return this.source.getSize(tp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==QM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qm:e.x=e.x-Math.floor(e.x);break;case ps:e.x=e.x<0?0:1;break;case Km:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qm:e.y=e.y-Math.floor(e.y);break;case ps:e.y=e.y<0?0:1;break;case Km:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=QM;di.DEFAULT_ANISOTROPY=1;const P0=class P0{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],h=l[5],g=l[9],v=l[2],_=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-_)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+_)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(h+1)/2,w=(p+1)/2,E=(c+f)/4,T=(d+v)/4,y=(g+_)/4;return x>S&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=E/i,s=T/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=y/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=T/s,r=y/s),this.set(i,r,s,t),this}let m=Math.sqrt((_-g)*(_-g)+(d-v)*(d-v)+(f-c)*(f-c));return Math.abs(m)<.001&&(m=1),this.x=(_-g)/m,this.y=(d-v)/m,this.z=(f-c)/m,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};P0.prototype.isVector4=!0;let en=P0;class Eb extends ma{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new di(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new d0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends Eb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class aE extends di{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tb extends di{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zd=class zd{constructor(e,t,i,r,s,o,a,l,u,c,d,f,h,g,v,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,h,g,v,_)}set(e,t,i,r,s,o,a,l,u,c,d,f,h,g,v,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zd().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ta.setFromMatrixColumn(e,0).length(),s=1/Ta.setFromMatrixColumn(e,1).length(),o=1/Ta.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,h=o*d,g=a*c,v=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=h+g*u,t[5]=f-v*u,t[9]=-a*l,t[2]=v-f*u,t[6]=g+h*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,h=l*d,g=u*c,v=u*d;t[0]=f+v*a,t[4]=g*a-h,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=h*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,h=l*d,g=u*c,v=u*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*c,t[9]=v-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,h=o*d,g=a*c,v=a*d;t[0]=l*c,t[4]=g*u-h,t[8]=f*u+v,t[1]=l*d,t[5]=v*u+f,t[9]=h*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=v-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=h*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,h=o*u,g=a*l,v=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+v,t[5]=o*c,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*c,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wb,e,Ab)}lookAt(e,t,i){const r=this.elements;return Li.subVectors(e,t),Li.lengthSq()===0&&(Li.z=1),Li.normalize(),Is.crossVectors(i,Li),Is.lengthSq()===0&&(Math.abs(i.z)===1?Li.x+=1e-4:Li.z+=1e-4,Li.normalize(),Is.crossVectors(i,Li)),Is.normalize(),Gc.crossVectors(Li,Is),r[0]=Is.x,r[4]=Gc.x,r[8]=Li.x,r[1]=Is.y,r[5]=Gc.y,r[9]=Li.y,r[2]=Is.z,r[6]=Gc.z,r[10]=Li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],_=i[10],p=i[14],m=i[3],x=i[7],S=i[11],w=i[15],E=r[0],T=r[4],y=r[8],C=r[12],b=r[1],L=r[5],N=r[9],W=r[13],z=r[2],D=r[6],k=r[10],U=r[14],O=r[3],G=r[7],P=r[11],te=r[15];return s[0]=o*E+a*b+l*z+u*O,s[4]=o*T+a*L+l*D+u*G,s[8]=o*y+a*N+l*k+u*P,s[12]=o*C+a*W+l*U+u*te,s[1]=c*E+d*b+f*z+h*O,s[5]=c*T+d*L+f*D+h*G,s[9]=c*y+d*N+f*k+h*P,s[13]=c*C+d*W+f*U+h*te,s[2]=g*E+v*b+_*z+p*O,s[6]=g*T+v*L+_*D+p*G,s[10]=g*y+v*N+_*k+p*P,s[14]=g*C+v*W+_*U+p*te,s[3]=m*E+x*b+S*z+w*O,s[7]=m*T+x*L+S*D+w*G,s[11]=m*y+x*N+S*k+w*P,s[15]=m*C+x*W+S*U+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],_=e[11],p=e[15],m=l*h-u*f,x=a*h-u*d,S=a*f-l*d,w=o*h-u*c,E=o*f-l*c,T=o*d-a*c;return t*(v*m-_*x+p*S)-i*(g*m-_*w+p*E)+r*(g*x-v*w+p*T)-s*(g*S-v*E+_*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],_=e[14],p=e[15],m=t*a-i*o,x=t*l-r*o,S=t*u-s*o,w=i*l-r*a,E=i*u-s*a,T=r*u-s*l,y=c*v-d*g,C=c*_-f*g,b=c*p-h*g,L=d*_-f*v,N=d*p-h*v,W=f*p-h*_,z=m*W-x*N+S*L+w*b-E*C+T*y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/z;return e[0]=(a*W-l*N+u*L)*D,e[1]=(r*N-i*W-s*L)*D,e[2]=(v*T-_*E+p*w)*D,e[3]=(f*E-d*T-h*w)*D,e[4]=(l*b-o*W-u*C)*D,e[5]=(t*W-r*b+s*C)*D,e[6]=(_*S-g*T-p*x)*D,e[7]=(c*T-f*S+h*x)*D,e[8]=(o*N-a*b+u*y)*D,e[9]=(i*b-t*N-s*y)*D,e[10]=(g*E-v*S+p*m)*D,e[11]=(d*S-c*E-h*m)*D,e[12]=(a*C-o*L-l*y)*D,e[13]=(t*L-i*C+r*y)*D,e[14]=(v*x-g*w-_*m)*D,e[15]=(c*w-d*x+f*m)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,h=s*c,g=s*d,v=o*c,_=o*d,p=a*d,m=l*u,x=l*c,S=l*d,w=i.x,E=i.y,T=i.z;return r[0]=(1-(v+p))*w,r[1]=(h+S)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(h-S)*E,r[5]=(1-(f+p))*E,r[6]=(_+m)*E,r[7]=0,r[8]=(g+x)*T,r[9]=(_-m)*T,r[10]=(1-(f+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Ta.set(r[0],r[1],r[2]).length();const a=Ta.set(r[4],r[5],r[6]).length(),l=Ta.set(r[8],r[9],r[10]).length();s<0&&(o=-o),gr.copy(this);const u=1/o,c=1/a,d=1/l;return gr.elements[0]*=u,gr.elements[1]*=u,gr.elements[2]*=u,gr.elements[4]*=c,gr.elements[5]*=c,gr.elements[6]*=c,gr.elements[8]*=d,gr.elements[9]*=d,gr.elements[10]*=d,t.setFromRotationMatrix(gr),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Gr,l=!1){const u=this.elements,c=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===Gr)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===dc)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Gr,l=!1){const u=this.elements,c=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===Gr)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===dc)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};zd.prototype.isMatrix4=!0;let qt=zd;const Ta=new Y,gr=new qt,wb=new Y(0,0,0),Ab=new Y(1,1,1),Is=new Y,Gc=new Y,Li=new Y,vx=new qt,xx=new kl;class xo{constructor(e=0,t=0,i=0,r=xo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xx.setFromEuler(this),this.setFromQuaternion(xx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xo.DEFAULT_ORDER="XYZ";class h0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cb=0;const yx=new Y,wa=new kl,ts=new qt,Wc=new Y,Zl=new Y,Rb=new Y,bb=new kl,Sx=new Y(1,0,0),Mx=new Y(0,1,0),Ex=new Y(0,0,1),Tx={type:"added"},Pb={type:"removed"},Aa={type:"childadded",child:null},np={type:"childremoved",child:null};class Bn extends ma{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Sc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new Y,t=new xo,i=new kl,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new qe}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new h0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wa.setFromAxisAngle(e,t),this.quaternion.multiply(wa),this}rotateOnWorldAxis(e,t){return wa.setFromAxisAngle(e,t),this.quaternion.premultiply(wa),this}rotateX(e){return this.rotateOnAxis(Sx,e)}rotateY(e){return this.rotateOnAxis(Mx,e)}rotateZ(e){return this.rotateOnAxis(Ex,e)}translateOnAxis(e,t){return yx.copy(e).applyQuaternion(this.quaternion),this.position.add(yx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sx,e)}translateY(e){return this.translateOnAxis(Mx,e)}translateZ(e){return this.translateOnAxis(Ex,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ts.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wc.copy(e):Wc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ts.lookAt(Zl,Wc,this.up):ts.lookAt(Wc,Zl,this.up),this.quaternion.setFromRotationMatrix(ts),r&&(ts.extractRotation(r.matrixWorld),wa.setFromRotationMatrix(ts),this.quaternion.premultiply(wa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tx),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pb),np.child=e,this.dispatchEvent(np),np.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ts.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ts.multiply(e.parent.matrixWorld)),e.applyMatrix4(ts),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tx),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zl,e,Rb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zl,bb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bn.DEFAULT_UP=new Y(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xc extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lb={type:"move"};class ip{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,i),p=this._getHandJoint(u,v);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,g=.005;u.inputState.pinching&&f>h+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=h-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const lE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},jc={h:0,s:0,l:0};function rp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class vt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=vb(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=rp(o,s,e+1/3),this.g=rp(o,s,e),this.b=rp(o,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=nr){function i(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nr){const i=lE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=hl(e.r),this.g=hl(e.g),this.b=hl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nr){return dt.workingToColorSpace(jn.copy(this),e),Math.round(ht(jn.r*255,0,255))*65536+Math.round(ht(jn.g*255,0,255))*256+Math.round(ht(jn.b*255,0,255))}getHexString(e=nr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(jn.copy(this),t);const i=jn.r,r=jn.g,s=jn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=nr){dt.workingToColorSpace(jn.copy(this),e);const t=jn.r,i=jn.g,r=jn.b;return e!==nr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+t,Us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Us),e.getHSL(jc);const i=Zh(Us.h,jc.h,t),r=Zh(Us.s,jc.s,t),s=Zh(Us.l,jc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new vt;vt.NAMES=lE;class Db extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xo,this.environmentIntensity=1,this.environmentRotation=new xo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vr=new Y,ns=new Y,sp=new Y,is=new Y,Ca=new Y,Ra=new Y,wx=new Y,op=new Y,ap=new Y,lp=new Y,up=new en,cp=new en,fp=new en;class wr{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vr.subVectors(e,t),r.cross(vr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vr.subVectors(r,t),ns.subVectors(i,t),sp.subVectors(e,t);const o=vr.dot(vr),a=vr.dot(ns),l=vr.dot(sp),u=ns.dot(ns),c=ns.dot(sp),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,is)===null?!1:is.x>=0&&is.y>=0&&is.x+is.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,is)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,is.x),l.addScaledVector(o,is.y),l.addScaledVector(a,is.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return up.setScalar(0),cp.setScalar(0),fp.setScalar(0),up.fromBufferAttribute(e,t),cp.fromBufferAttribute(e,i),fp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(up,s.x),o.addScaledVector(cp,s.y),o.addScaledVector(fp,s.z),o}static isFrontFacing(e,t,i,r){return vr.subVectors(i,t),ns.subVectors(e,t),vr.cross(ns).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vr.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),vr.cross(ns).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return wr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ca.subVectors(r,i),Ra.subVectors(s,i),op.subVectors(e,i);const l=Ca.dot(op),u=Ra.dot(op);if(l<=0&&u<=0)return t.copy(i);ap.subVectors(e,r);const c=Ca.dot(ap),d=Ra.dot(ap);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Ca,o);lp.subVectors(e,s);const h=Ca.dot(lp),g=Ra.dot(lp);if(g>=0&&h<=g)return t.copy(s);const v=h*u-l*g;if(v<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Ra,a);const _=c*g-h*d;if(_<=0&&d-c>=0&&h-g>=0)return wx.subVectors(s,r),a=(d-c)/(d-c+(h-g)),t.copy(r).addScaledVector(wx,a);const p=1/(_+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(Ca,o).addScaledVector(Ra,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Mc{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xr):xr.fromBufferAttribute(s,o),xr.applyMatrix4(e.matrixWorld),this.expandByPoint(xr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yc.copy(i.boundingBox)),Yc.applyMatrix4(e.matrixWorld),this.union(Yc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xr),xr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ql),$c.subVectors(this.max,Ql),ba.subVectors(e.a,Ql),Pa.subVectors(e.b,Ql),La.subVectors(e.c,Ql),Fs.subVectors(Pa,ba),Os.subVectors(La,Pa),Co.subVectors(ba,La);let t=[0,-Fs.z,Fs.y,0,-Os.z,Os.y,0,-Co.z,Co.y,Fs.z,0,-Fs.x,Os.z,0,-Os.x,Co.z,0,-Co.x,-Fs.y,Fs.x,0,-Os.y,Os.x,0,-Co.y,Co.x,0];return!dp(t,ba,Pa,La,$c)||(t=[1,0,0,0,1,0,0,0,1],!dp(t,ba,Pa,La,$c))?!1:(qc.crossVectors(Fs,Os),t=[qc.x,qc.y,qc.z],dp(t,ba,Pa,La,$c))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rs=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],xr=new Y,Yc=new Mc,ba=new Y,Pa=new Y,La=new Y,Fs=new Y,Os=new Y,Co=new Y,Ql=new Y,$c=new Y,qc=new Y,Ro=new Y;function dp(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ro.fromArray(n,s);const a=r.x*Math.abs(Ro.x)+r.y*Math.abs(Ro.y)+r.z*Math.abs(Ro.z),l=e.dot(Ro),u=t.dot(Ro),c=i.dot(Ro);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const pn=new Y,Kc=new xt;let Nb=0;class br extends ma{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fx,this.updateRanges=[],this.gpuType=Hr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kc.fromBufferAttribute(this,t),Kc.applyMatrix3(e),this.setXY(t,Kc.x,Kc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Kl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kl(t,this.array)),t}setX(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kl(t,this.array)),t}setY(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kl(t,this.array)),t}setW(e,t){return this.normalized&&(t=mi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),i=mi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),i=mi(i,this.array),r=mi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=mi(t,this.array),i=mi(i,this.array),r=mi(r,this.array),s=mi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class uE extends br{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cE extends br{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fr extends br{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Ib=new Mc,Jl=new Y,hp=new Y;class ah{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ib.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jl.subVectors(e,this.center);const t=Jl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Jl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jl.copy(e.center).add(hp)),this.expandByPoint(Jl.copy(e.center).sub(hp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ub=0;const er=new qt,pp=new Bn,Da=new Y,Di=new Mc,eu=new Mc,Rn=new Y;class mr extends ma{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=Sc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pb(e)?cE:uE)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return er.makeRotationFromQuaternion(e),this.applyMatrix4(er),this}rotateX(e){return er.makeRotationX(e),this.applyMatrix4(er),this}rotateY(e){return er.makeRotationY(e),this.applyMatrix4(er),this}rotateZ(e){return er.makeRotationZ(e),this.applyMatrix4(er),this}translate(e,t,i){return er.makeTranslation(e,t,i),this.applyMatrix4(er),this}scale(e,t,i){return er.makeScale(e,t,i),this.applyMatrix4(er),this}lookAt(e){return pp.lookAt(e),pp.updateMatrix(),this.applyMatrix4(pp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Da).negate(),this.translate(Da.x,Da.y,Da.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Di.setFromBufferAttribute(s),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ah);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];eu.setFromBufferAttribute(a),this.morphTargetsRelative?(Rn.addVectors(Di.min,eu.min),Di.expandByPoint(Rn),Rn.addVectors(Di.max,eu.max),Di.expandByPoint(Rn)):(Di.expandByPoint(eu.min),Di.expandByPoint(eu.max))}Di.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Rn.fromBufferAttribute(a,u),l&&(Da.fromBufferAttribute(e,u),Rn.add(Da)),r=Math.max(r,i.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new br(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new Y,l[y]=new Y;const u=new Y,c=new Y,d=new Y,f=new xt,h=new xt,g=new xt,v=new Y,_=new Y;function p(y,C,b){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,b),f.fromBufferAttribute(s,y),h.fromBufferAttribute(s,C),g.fromBufferAttribute(s,b),c.sub(u),d.sub(u),h.sub(f),g.sub(f);const L=1/(h.x*g.y-g.x*h.y);isFinite(L)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(L),_.copy(d).multiplyScalar(h.x).addScaledVector(c,-g.x).multiplyScalar(L),a[y].add(v),a[C].add(v),a[b].add(v),l[y].add(_),l[C].add(_),l[b].add(_))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let y=0,C=m.length;y<C;++y){const b=m[y],L=b.start,N=b.count;for(let W=L,z=L+N;W<z;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const x=new Y,S=new Y,w=new Y,E=new Y;function T(y){w.fromBufferAttribute(r,y),E.copy(w);const C=a[y];x.copy(C),x.sub(w.multiplyScalar(w.dot(C))).normalize(),S.crossVectors(E,C);const L=S.dot(l[y])<0?-1:1;o.setXYZW(y,x.x,x.y,x.z,L)}for(let y=0,C=m.length;y<C;++y){const b=m[y],L=b.start,N=b.count;for(let W=L,z=L+N;W<z;W+=3)T(e.getX(W+0)),T(e.getX(W+1)),T(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new br(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,u=new Y,c=new Y,d=new Y;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),v=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,_),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let h=0,g=0;for(let v=0,_=l.length;v<_;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*c;for(let p=0;p<c;p++)f[g++]=u[h++]}return new br(f,c,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const h=u[d];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Fb=0;class Bl extends ma{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Sc(),this.name="",this.type="Material",this.blending=dl,this.side=vo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zm,this.blendDst=Vm,this.blendEquation=Oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dl&&(i.blending=this.blending),this.side!==vo&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zm&&(i.blendSrc=this.blendSrc),this.blendDst!==Vm&&(i.blendDst=this.blendDst),this.blendEquation!==Oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ma&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ma&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ma&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ss=new Y,mp=new Y,Zc=new Y,ks=new Y,_p=new Y,Qc=new Y,gp=new Y;class p0{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ss)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ss.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ss.copy(this.origin).addScaledVector(this.direction,t),ss.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){mp.copy(e).add(t).multiplyScalar(.5),Zc.copy(t).sub(e).normalize(),ks.copy(this.origin).sub(mp);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Zc),a=ks.dot(this.direction),l=-ks.dot(Zc),u=ks.lengthSq(),c=Math.abs(1-o*o);let d,f,h,g;if(c>0)if(d=o*l-a,f=o*a-l,g=s*c,d>=0)if(f>=-g)if(f<=g){const v=1/c;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+u):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(mp).addScaledVector(Zc,f),h}intersectSphere(e,t){ss.subVectors(e.center,this.origin);const i=ss.dot(this.direction),r=ss.dot(ss)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ss)!==null}intersectTriangle(e,t,i,r,s){_p.subVectors(t,e),Qc.subVectors(i,e),gp.crossVectors(_p,Qc);let o=this.direction.dot(gp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ks.subVectors(this.origin,e);const l=a*this.direction.dot(Qc.crossVectors(ks,Qc));if(l<0)return null;const u=a*this.direction.dot(_p.cross(ks));if(u<0||l+u>o)return null;const c=-a*ks.dot(gp);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fE extends Bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xo,this.combine=XM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ax=new qt,bo=new p0,Jc=new ah,Cx=new Y,ef=new Y,tf=new Y,nf=new Y,vp=new Y,rf=new Y,Rx=new Y,sf=new Y;class Qr extends Bn{constructor(e=new mr,t=new fE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){rf.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(vp.fromBufferAttribute(d,e),o?rf.addScaledVector(vp,c):rf.addScaledVector(vp.sub(t),c))}t.add(rf)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jc.copy(i.boundingSphere),Jc.applyMatrix4(s),bo.copy(e.ray).recast(e.near),!(Jc.containsPoint(bo.origin)===!1&&(bo.intersectSphere(Jc,Cx)===null||bo.origin.distanceToSquared(Cx)>(e.far-e.near)**2))&&(Ax.copy(s).invert(),bo.copy(e.ray).applyMatrix4(Ax),!(i.boundingBox!==null&&bo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bo)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const _=f[g],p=o[_.materialIndex],m=Math.max(_.start,h.start),x=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let S=m,w=x;S<w;S+=3){const E=a.getX(S),T=a.getX(S+1),y=a.getX(S+2);r=of(this,p,e,i,u,c,d,E,T,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let _=g,p=v;_<p;_+=3){const m=a.getX(_),x=a.getX(_+1),S=a.getX(_+2);r=of(this,o,e,i,u,c,d,m,x,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const _=f[g],p=o[_.materialIndex],m=Math.max(_.start,h.start),x=Math.min(l.count,Math.min(_.start+_.count,h.start+h.count));for(let S=m,w=x;S<w;S+=3){const E=S,T=S+1,y=S+2;r=of(this,p,e,i,u,c,d,E,T,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let _=g,p=v;_<p;_+=3){const m=_,x=_+1,S=_+2;r=of(this,o,e,i,u,c,d,m,x,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Ob(n,e,t,i,r,s,o,a){let l;if(e.side===Ci?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===vo,a),l===null)return null;sf.copy(a),sf.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(sf);return u<t.near||u>t.far?null:{distance:u,point:sf.clone(),object:n}}function of(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,ef),n.getVertexPosition(l,tf),n.getVertexPosition(u,nf);const c=Ob(n,e,t,i,ef,tf,nf,Rx);if(c){const d=new Y;wr.getBarycoord(Rx,ef,tf,nf,d),r&&(c.uv=wr.getInterpolatedAttribute(r,a,l,u,d,new xt)),s&&(c.uv1=wr.getInterpolatedAttribute(s,a,l,u,d,new xt)),o&&(c.normal=wr.getInterpolatedAttribute(o,a,l,u,d,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new Y,materialIndex:0};wr.getNormal(ef,tf,nf,f.normal),c.face=f,c.barycoord=d}return c}class kb extends di{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Un,c=Un,d,f){super(null,o,a,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xp=new Y,Bb=new Y,zb=new qe;class Gs{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xp.subVectors(i,t).cross(Bb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(xp),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zb.getNormalMatrix(e),r=this.coplanarPoint(xp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Po=new ah,Vb=new xt(.5,.5),af=new Y;class m0{constructor(e=new Gs,t=new Gs,i=new Gs,r=new Gs,s=new Gs,o=new Gs){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],h=s[7],g=s[8],v=s[9],_=s[10],p=s[11],m=s[12],x=s[13],S=s[14],w=s[15];if(r[0].setComponents(u-o,h-c,p-g,w-m).normalize(),r[1].setComponents(u+o,h+c,p+g,w+m).normalize(),r[2].setComponents(u+a,h+d,p+v,w+x).normalize(),r[3].setComponents(u-a,h-d,p-v,w-x).normalize(),i)r[4].setComponents(l,f,_,S).normalize(),r[5].setComponents(u-l,h-f,p-_,w-S).normalize();else if(r[4].setComponents(u-l,h-f,p-_,w-S).normalize(),t===Gr)r[5].setComponents(u+l,h+f,p+_,w+S).normalize();else if(t===dc)r[5].setComponents(l,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Po.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Po.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Po)}intersectsSprite(e){Po.center.set(0,0,0);const t=Vb.distanceTo(e.center);return Po.radius=.7071067811865476+t,Po.applyMatrix4(e.matrixWorld),this.intersectsSphere(Po)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(af.x=r.normal.x>0?e.max.x:e.min.x,af.y=r.normal.y>0?e.max.y:e.min.y,af.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(af)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dE extends Bl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bx=new qt,P_=new p0,lf=new ah,uf=new Y;class Hb extends Bn{constructor(e=new mr,t=new dE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lf.copy(i.boundingSphere),lf.applyMatrix4(r),lf.radius+=s,e.ray.intersectsSphere(lf)===!1)return;bx.copy(r).invert(),P_.copy(e.ray).applyMatrix4(bx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),h=Math.min(u.count,o.start+o.count);for(let g=f,v=h;g<v;g++){const _=u.getX(g);uf.fromBufferAttribute(d,_),Px(uf,_,l,r,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,v=h;g<v;g++)uf.fromBufferAttribute(d,g),Px(uf,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Px(n,e,t,i,r,s,o){const a=P_.distanceSqToPoint(n);if(a<t){const l=new Y;P_.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class hE extends di{constructor(e=[],t=oa,i,r,s,o,a,l,u,c){super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dl extends di{constructor(e,t,i=Zr,r,s,o,a=Un,l=Un,u,c=Cs,d=1){if(c!==Cs&&c!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new d0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gb extends Dl{constructor(e,t=Zr,i=oa,r,s,o=Un,a=Un,l,u=Cs){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,i,r,s,o,a,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class pE extends di{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ec extends mr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fr(u,3)),this.setAttribute("normal",new fr(c,3)),this.setAttribute("uv",new fr(d,2));function g(v,_,p,m,x,S,w,E,T,y,C){const b=S/T,L=w/y,N=S/2,W=w/2,z=E/2,D=T+1,k=y+1;let U=0,O=0;const G=new Y;for(let P=0;P<k;P++){const te=P*L-W;for(let ce=0;ce<D;ce++){const Fe=ce*b-N;G[v]=Fe*m,G[_]=te*x,G[p]=z,u.push(G.x,G.y,G.z),G[v]=0,G[_]=0,G[p]=E>0?1:-1,c.push(G.x,G.y,G.z),d.push(ce/T),d.push(1-P/y),U+=1}}for(let P=0;P<y;P++)for(let te=0;te<T;te++){const ce=f+te+D*P,Fe=f+te+D*(P+1),Ce=f+(te+1)+D*(P+1),Ne=f+(te+1)+D*P;l.push(ce,Fe,Ne),l.push(Fe,Ce,Ne),O+=6}a.addGroup(h,O,C),h+=O,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class lh extends mr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,h=[],g=[],v=[],_=[];for(let p=0;p<c;p++){const m=p*f-o;for(let x=0;x<u;x++){const S=x*d-s;g.push(S,-m,0),v.push(0,0,1),_.push(x/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let m=0;m<a;m++){const x=m+u*p,S=m+u*(p+1),w=m+1+u*(p+1),E=m+1+u*p;h.push(x,S,E),h.push(S,w,E)}this.setIndex(h),this.setAttribute("position",new fr(g,3)),this.setAttribute("normal",new fr(v,3)),this.setAttribute("uv",new fr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.width,e.height,e.widthSegments,e.heightSegments)}}class _0 extends mr{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new Y,f=new Y,h=[],g=[],v=[],_=[];for(let p=0;p<=i;p++){const m=[],x=p/i;let S=0;p===0&&o===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const E=w/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),_.push(E+S,1-x),m.push(u++)}c.push(m)}for(let p=0;p<i;p++)for(let m=0;m<t;m++){const x=c[p][m+1],S=c[p][m],w=c[p+1][m],E=c[p+1][m+1];(p!==0||o>0)&&h.push(x,S,E),(p!==i-1||l<Math.PI)&&h.push(S,w,E)}this.setIndex(h),this.setAttribute("position",new fr(g,3)),this.setAttribute("normal",new fr(v,3)),this.setAttribute("uv",new fr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _0(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Nl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Lx(r))r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Lx(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function si(n){const e={};for(let t=0;t<n.length;t++){const i=Nl(n[t]);for(const r in i)e[r]=i[r]}return e}function Lx(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Wb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mE(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Xb={clone:Nl,merge:si};var jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jr extends Bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jb,this.fragmentShader=Yb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nl(e.uniforms),this.uniformsGroups=Wb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $b extends Jr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qb extends Bl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=C_,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xo,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kb extends Bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ob,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zb extends Bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class g0 extends Bn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const yp=new qt,Dx=new Y,Nx=new Y;class _E{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new m0,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Dx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dx),Nx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nx),t.updateMatrixWorld(),yp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yp,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===dc||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cf=new Y,ff=new kl,Nr=new Y;class gE extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Gr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cf,ff,Nr),Nr.x===1&&Nr.y===1&&Nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cf,ff,Nr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(cf,ff,Nr),Nr.x===1&&Nr.y===1&&Nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cf,ff,Nr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bs=new Y,Ix=new xt,Ux=new xt;class Oi extends gE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=b_*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return b_*2*Math.atan(Math.tan(Kh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bs.x,Bs.y).multiplyScalar(-e/Bs.z),Bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bs.x,Bs.y).multiplyScalar(-e/Bs.z)}getViewSize(e,t){return this.getViewBounds(e,Ix,Ux),t.subVectors(Ux,Ix)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Qb extends _E{constructor(){super(new Oi(90,1,.5,500)),this.isPointLightShadow=!0}}class Fx extends g0{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Qb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class v0 extends gE{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jb extends _E{constructor(){super(new v0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class e2 extends g0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new Jb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class t2 extends g0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Na=-90,Ia=1;class n2 extends Bn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Oi(Na,Ia,e,t);r.layers=this.layers,this.add(r);const s=new Oi(Na,Ia,e,t);s.layers=this.layers,this.add(s);const o=new Oi(Na,Ia,e,t);o.layers=this.layers,this.add(o);const a=new Oi(Na,Ia,e,t);a.layers=this.layers,this.add(a);const l=new Oi(Na,Ia,e,t);l.layers=this.layers,this.add(l);const u=new Oi(Na,Ia,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Gr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class i2 extends Oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ox=new qt;class r2{constructor(e,t,i=0,r=1/0){this.ray=new p0(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new h0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ox.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ox),this}intersectObject(e,t=!0,i=[]){return L_(e,this,i,t),i.sort(kx),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)L_(e[r],this,i,t);return i.sort(kx),i}}function kx(n,e){return n.distance-e.distance}function L_(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)L_(s[o],e,t,!0)}}class s2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Xe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const L0=class L0{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};L0.prototype.isMatrix2=!0;let Bx=L0;function zx(n,e,t,i){const r=o2(i);switch(t){case iE:return n*e;case sE:return n*e/r.components*r.byteLength;case a0:return n*e/r.components*r.byteLength;case aa:return n*e*2/r.components*r.byteLength;case l0:return n*e*2/r.components*r.byteLength;case rE:return n*e*3/r.components*r.byteLength;case Ar:return n*e*4/r.components*r.byteLength;case u0:return n*e*4/r.components*r.byteLength;case Gf:case Wf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xf:case jf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qm:case e_:return Math.max(n,16)*Math.max(e,8)/4;case Zm:case Jm:return Math.max(n,8)*Math.max(e,8)/2;case t_:case n_:case r_:case s_:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case i_:case Ld:case o_:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case a_:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case l_:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case u_:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case c_:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case f_:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case d_:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case h_:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case p_:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case m_:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case __:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case g_:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case v_:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case x_:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case y_:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case S_:case M_:case E_:return Math.ceil(n/4)*Math.ceil(e/4)*16;case T_:case w_:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Dd:case A_:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o2(n){switch(n){case zi:case JM:return{byteLength:1,components:1};case cc:case eE:case As:return{byteLength:2,components:1};case s0:case o0:return{byteLength:2,components:4};case Zr:case r0:case Hr:return{byteLength:4,components:1};case tE:case nE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:n0}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=n0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function a2(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=n.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=n.SHORT;else if(u instanceof Uint32Array)h=n.UNSIGNED_INT;else if(u instanceof Int32Array)h=n.INT;else if(u instanceof Int8Array)h=n.BYTE;else if(u instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(n.bindBuffer(u,a),d.length===0)n.bufferSubData(u,0,c);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const v=d[h];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var l2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,g2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,S2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,E2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,T2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,P2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,L2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,D2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,N2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,I2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k2="gl_FragColor = linearToOutputTexel( gl_FragColor );",B2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,V2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,H2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,K2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,eP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oP=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cP=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_P=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,XP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$P=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,n3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,a3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,m3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,v3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,E3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:l2,alphahash_pars_fragment:u2,alphamap_fragment:c2,alphamap_pars_fragment:f2,alphatest_fragment:d2,alphatest_pars_fragment:h2,aomap_fragment:p2,aomap_pars_fragment:m2,batching_pars_vertex:_2,batching_vertex:g2,begin_vertex:v2,beginnormal_vertex:x2,bsdfs:y2,iridescence_fragment:S2,bumpmap_pars_fragment:M2,clipping_planes_fragment:E2,clipping_planes_pars_fragment:T2,clipping_planes_pars_vertex:w2,clipping_planes_vertex:A2,color_fragment:C2,color_pars_fragment:R2,color_pars_vertex:b2,color_vertex:P2,common:L2,cube_uv_reflection_fragment:D2,defaultnormal_vertex:N2,displacementmap_pars_vertex:I2,displacementmap_vertex:U2,emissivemap_fragment:F2,emissivemap_pars_fragment:O2,colorspace_fragment:k2,colorspace_pars_fragment:B2,envmap_fragment:z2,envmap_common_pars_fragment:V2,envmap_pars_fragment:H2,envmap_pars_vertex:G2,envmap_physical_pars_fragment:eP,envmap_vertex:W2,fog_vertex:X2,fog_pars_vertex:j2,fog_fragment:Y2,fog_pars_fragment:$2,gradientmap_pars_fragment:q2,lightmap_pars_fragment:K2,lights_lambert_fragment:Z2,lights_lambert_pars_fragment:Q2,lights_pars_begin:J2,lights_toon_fragment:tP,lights_toon_pars_fragment:nP,lights_phong_fragment:iP,lights_phong_pars_fragment:rP,lights_physical_fragment:sP,lights_physical_pars_fragment:oP,lights_fragment_begin:aP,lights_fragment_maps:lP,lights_fragment_end:uP,lightprobes_pars_fragment:cP,logdepthbuf_fragment:fP,logdepthbuf_pars_fragment:dP,logdepthbuf_pars_vertex:hP,logdepthbuf_vertex:pP,map_fragment:mP,map_pars_fragment:_P,map_particle_fragment:gP,map_particle_pars_fragment:vP,metalnessmap_fragment:xP,metalnessmap_pars_fragment:yP,morphinstance_vertex:SP,morphcolor_vertex:MP,morphnormal_vertex:EP,morphtarget_pars_vertex:TP,morphtarget_vertex:wP,normal_fragment_begin:AP,normal_fragment_maps:CP,normal_pars_fragment:RP,normal_pars_vertex:bP,normal_vertex:PP,normalmap_pars_fragment:LP,clearcoat_normal_fragment_begin:DP,clearcoat_normal_fragment_maps:NP,clearcoat_pars_fragment:IP,iridescence_pars_fragment:UP,opaque_fragment:FP,packing:OP,premultiplied_alpha_fragment:kP,project_vertex:BP,dithering_fragment:zP,dithering_pars_fragment:VP,roughnessmap_fragment:HP,roughnessmap_pars_fragment:GP,shadowmap_pars_fragment:WP,shadowmap_pars_vertex:XP,shadowmap_vertex:jP,shadowmask_pars_fragment:YP,skinbase_vertex:$P,skinning_pars_vertex:qP,skinning_vertex:KP,skinnormal_vertex:ZP,specularmap_fragment:QP,specularmap_pars_fragment:JP,tonemapping_fragment:e3,tonemapping_pars_fragment:t3,transmission_fragment:n3,transmission_pars_fragment:i3,uv_pars_fragment:r3,uv_pars_vertex:s3,uv_vertex:o3,worldpos_vertex:a3,background_vert:l3,background_frag:u3,backgroundCube_vert:c3,backgroundCube_frag:f3,cube_vert:d3,cube_frag:h3,depth_vert:p3,depth_frag:m3,distance_vert:_3,distance_frag:g3,equirect_vert:v3,equirect_frag:x3,linedashed_vert:y3,linedashed_frag:S3,meshbasic_vert:M3,meshbasic_frag:E3,meshlambert_vert:T3,meshlambert_frag:w3,meshmatcap_vert:A3,meshmatcap_frag:C3,meshnormal_vert:R3,meshnormal_frag:b3,meshphong_vert:P3,meshphong_frag:L3,meshphysical_vert:D3,meshphysical_frag:N3,meshtoon_vert:I3,meshtoon_frag:U3,points_vert:F3,points_frag:O3,shadow_vert:k3,shadow_frag:B3,sprite_vert:z3,sprite_frag:V3},Ee={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},kr={basic:{uniforms:si([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:si([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:si([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:si([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:si([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new vt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:si([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:si([Ee.points,Ee.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:si([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:si([Ee.common,Ee.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:si([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:si([Ee.sprite,Ee.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:si([Ee.common,Ee.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:si([Ee.lights,Ee.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};kr.physical={uniforms:si([kr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const df={r:0,b:0,g:0},H3=new qt,xE=new qe;xE.set(-1,0,0,0,1,0,0,0,1);function G3(n,e,t,i,r,s){const o=new vt(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function h(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){const S=m.backgroundBlurriness>0;x=e.get(x,S)}return x}function g(m){let x=!1;const S=h(m);S===null?_(o,a):S&&S.isColor&&(_(S,1),x=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(m,x){const S=h(x);S&&(S.isCubeTexture||S.mapping===oh)?(u===void 0&&(u=new Qr(new Ec(1,1,1),new Jr({name:"BackgroundCubeMaterial",uniforms:Nl(kr.backgroundCube.uniforms),vertexShader:kr.backgroundCube.vertexShader,fragmentShader:kr.backgroundCube.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(H3.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(xE),u.material.toneMapped=dt.getTransfer(S.colorSpace)!==Et,(c!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,c=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Qr(new lh(2,2),new Jr({name:"BackgroundMaterial",uniforms:Nl(kr.background.uniforms),vertexShader:kr.background.vertexShader,fragmentShader:kr.background.fragmentShader,side:vo,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=dt.getTransfer(S.colorSpace)!==Et,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,c=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,x){m.getRGB(df,mE(n)),t.buffers.color.setClear(df.r,df.g,df.b,x,s)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,x=1){o.set(m),a=x,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,_(o,a)},render:g,addToRenderList:v,dispose:p}}function W3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(L,N,W,z,D){let k=!1;const U=d(L,z,W,N);s!==U&&(s=U,u(s.object)),k=h(L,z,W,D),k&&g(L,z,W,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,S(L,N,W,z),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return n.createVertexArray()}function u(L){return n.bindVertexArray(L)}function c(L){return n.deleteVertexArray(L)}function d(L,N,W,z){const D=z.wireframe===!0;let k=i[N.id];k===void 0&&(k={},i[N.id]=k);const U=L.isInstancedMesh===!0?L.id:0;let O=k[U];O===void 0&&(O={},k[U]=O);let G=O[W.id];G===void 0&&(G={},O[W.id]=G);let P=G[D];return P===void 0&&(P=f(l()),G[D]=P),P}function f(L){const N=[],W=[],z=[];for(let D=0;D<t;D++)N[D]=0,W[D]=0,z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:z,object:L,attributes:{},index:null}}function h(L,N,W,z){const D=s.attributes,k=N.attributes;let U=0;const O=W.getAttributes();for(const G in O)if(O[G].location>=0){const te=D[G];let ce=k[G];if(ce===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),te===void 0||te.attribute!==ce||ce&&te.data!==ce.data)return!0;U++}return s.attributesNum!==U||s.index!==z}function g(L,N,W,z){const D={},k=N.attributes;let U=0;const O=W.getAttributes();for(const G in O)if(O[G].location>=0){let te=k[G];te===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));const ce={};ce.attribute=te,te&&te.data&&(ce.data=te.data),D[G]=ce,U++}s.attributes=D,s.attributesNum=U,s.index=z}function v(){const L=s.newAttributes;for(let N=0,W=L.length;N<W;N++)L[N]=0}function _(L){p(L,0)}function p(L,N){const W=s.newAttributes,z=s.enabledAttributes,D=s.attributeDivisors;W[L]=1,z[L]===0&&(n.enableVertexAttribArray(L),z[L]=1),D[L]!==N&&(n.vertexAttribDivisor(L,N),D[L]=N)}function m(){const L=s.newAttributes,N=s.enabledAttributes;for(let W=0,z=N.length;W<z;W++)N[W]!==L[W]&&(n.disableVertexAttribArray(W),N[W]=0)}function x(L,N,W,z,D,k,U){U===!0?n.vertexAttribIPointer(L,N,W,D,k):n.vertexAttribPointer(L,N,W,z,D,k)}function S(L,N,W,z){v();const D=z.attributes,k=W.getAttributes(),U=N.defaultAttributeValues;for(const O in k){const G=k[O];if(G.location>=0){let P=D[O];if(P===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(P=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(P=L.instanceColor)),P!==void 0){const te=P.normalized,ce=P.itemSize,Fe=e.get(P);if(Fe===void 0)continue;const Ce=Fe.buffer,Ne=Fe.type,K=Fe.bytesPerElement,ae=Ne===n.INT||Ne===n.UNSIGNED_INT||P.gpuType===r0;if(P.isInterleavedBufferAttribute){const le=P.data,be=le.stride,Ve=P.offset;if(le.isInstancedInterleavedBuffer){for(let De=0;De<G.locationSize;De++)p(G.location+De,le.meshPerAttribute);L.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<G.locationSize;De++)_(G.location+De);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let De=0;De<G.locationSize;De++)x(G.location+De,ce/G.locationSize,Ne,te,be*K,(Ve+ce/G.locationSize*De)*K,ae)}else{if(P.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)p(G.location+le,P.meshPerAttribute);L.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let le=0;le<G.locationSize;le++)_(G.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let le=0;le<G.locationSize;le++)x(G.location+le,ce/G.locationSize,Ne,te,ce*K,ce/G.locationSize*le*K,ae)}}else if(U!==void 0){const te=U[O];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(G.location,te);break;case 3:n.vertexAttrib3fv(G.location,te);break;case 4:n.vertexAttrib4fv(G.location,te);break;default:n.vertexAttrib1fv(G.location,te)}}}}m()}function w(){C();for(const L in i){const N=i[L];for(const W in N){const z=N[W];for(const D in z){const k=z[D];for(const U in k)c(k[U].object),delete k[U];delete z[D]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;const N=i[L.id];for(const W in N){const z=N[W];for(const D in z){const k=z[D];for(const U in k)c(k[U].object),delete k[U];delete z[D]}}delete i[L.id]}function T(L){for(const N in i){const W=i[N];for(const z in W){const D=W[z];if(D[L.id]===void 0)continue;const k=D[L.id];for(const U in k)c(k[U].object),delete k[U];delete D[L.id]}}}function y(L){for(const N in i){const W=i[N],z=L.isInstancedMesh===!0?L.id:0,D=W[z];if(D!==void 0){for(const k in D){const U=D[k];for(const O in U)c(U[O].object),delete U[O];delete D[k]}delete W[z],Object.keys(W).length===0&&delete i[N]}}}function C(){b(),o=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:_,disableUnusedAttributes:m}}function X3(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,c){c!==0&&(n.drawArraysInstanced(i,l,u,c),t.update(u,i,c))}function a(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let h=0;h<c;h++)f+=u[h];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function j3(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Ar&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const y=T===As&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==zi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Hr&&!y)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(Xe("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:S,maxSamples:w,samples:E}}function Y3(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Gs,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,v=d.clipIntersection,_=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!_)s?c(null):u();else{const m=s?0:i,x=m*4;let S=p.clippingState||null;l.value=S,S=c(g,f,x,h);for(let w=0;w!==x;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,h,g){const v=d!==null?d.length:0;let _=null;if(v!==0){if(_=l.value,g!==!0||_===null){const p=h+v*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(_===null||_.length<p)&&(_=new Float32Array(p));for(let x=0,S=h;x!==v;++x,S+=4)o.copy(d[x]).applyMatrix4(m,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}const Qs=4,Vx=[.125,.215,.35,.446,.526,.582],ko=20,$3=256,tu=new v0,Hx=new vt;let Sp=null,Mp=0,Ep=0,Tp=!1;const q3=new Y;class Gx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=q3}=s;Sp=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel(),Tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sp,Mp,Ep),this._renderer.xr.enabled=Tp,e.scissorTest=!1,Ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oa||e.mapping===Ll?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sp=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel(),Tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:As,format:Ar,colorSpace:Nd,depthBuffer:!1},r=Wx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wx(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=K3(s)),this._blurMaterial=Q3(s,e,t),this._ggxMaterial=Z3(s,e,t)}return r}_compileMaterial(e){const t=new Qr(new mr,e);this._renderer.compile(t,tu)}_sceneToCubeUV(e,t,i,r,s){const l=new Oi(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Hx),d.toneMapping=Yr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qr(new Ec,new fE({name:"PMREM.Background",side:Ci,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,_=v.material;let p=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,p=!0):(_.color.copy(Hx),p=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const w=this._cubeSize;Ua(r,S*w,x>2?w:0,w,w),d.setRenderTarget(r),p&&d.render(v,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===oa||e.mapping===Ll;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ua(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,tu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,h=d*f,{_lodMax:g}=this,v=this._sizeLods[i],_=3*v*(i>g-Qs?i-g+Qs:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-t,Ua(s,_,p,3*v,2*v),r.setRenderTarget(s),r.render(a,tu),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Ua(e,_,p,3*v,2*v),r.setRenderTarget(e),r.render(a,tu)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&mt("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ko-1),v=s/g,_=isFinite(s)?1+Math.floor(c*v):ko;_>ko&&Xe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ko}`);const p=[];let m=0;for(let T=0;T<ko;++T){const y=T/v,C=Math.exp(-y*y/2);p.push(C),T===0?m+=C:T<_&&(m+=2*C)}for(let T=0;T<p.length;T++)p[T]=p[T]/m;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const S=this._sizeLods[r],w=3*S*(r>x-Qs?r-x+Qs:0),E=4*(this._cubeSize-S);Ua(t,w,E,3*S,2*S),l.setRenderTarget(t),l.render(d,tu)}}function K3(n){const e=[],t=[],i=[];let r=n;const s=n-Qs+1+Vx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Qs?l=Vx[o-n+Qs-1]:o===0&&(l=0),t.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],h=6,g=6,v=3,_=2,p=1,m=new Float32Array(v*g*h),x=new Float32Array(_*g*h),S=new Float32Array(p*g*h);for(let E=0;E<h;E++){const T=E%3*2/3-1,y=E>2?0:-1,C=[T,y,0,T+2/3,y,0,T+2/3,y+1,0,T,y,0,T+2/3,y+1,0,T,y+1,0];m.set(C,v*g*E),x.set(f,_*g*E);const b=[E,E,E,E,E,E];S.set(b,p*g*E)}const w=new mr;w.setAttribute("position",new br(m,v)),w.setAttribute("uv",new br(x,_)),w.setAttribute("faceIndex",new br(S,p)),i.push(new Qr(w,null)),r>Qs&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Wx(n,e,t){const i=new $r(n,e,t);return i.texture.mapping=oh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ua(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Z3(n,e,t){return new Jr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Q3(n,e,t){const i=new Float32Array(ko),r=new Y(0,1,0);return new Jr({name:"SphericalGaussianBlur",defines:{n:ko,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Xx(){return new Jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function jx(){return new Jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function uh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class yE extends $r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hE(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ec(5,5,5),s=new Jr({name:"CubemapFromEquirect",uniforms:Nl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ci,blending:gs});s.uniforms.tEquirect.value=t;const o=new Qr(r,s),a=t.minFilter;return t.minFilter===Go&&(t.minFilter=ei),new n2(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function J3(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Yh||h===$h)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const v=new yE(g.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",u),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,g=h===Yh||h===$h,v=h===oa||h===Ll;if(g||v){let _=t.get(f);const p=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Gx(n)),_=g?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const m=f.image;return g&&m&&m.height>0||v&&m&&l(m)?(i===null&&(i=new Gx(n)),_=g?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function a(f,h){return h===Yh?f.mapping=oa:h===$h&&(f.mapping=Ll),f}function l(f){let h=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&h++;return h===g}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function c(f){const h=f.target;h.removeEventListener("dispose",c);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function eL(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&R_("WebGLRenderer: "+i+" extension not supported."),r}}}function tL(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function u(d){const f=[],h=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(h!==null){const m=h.array;v=h.version;for(let x=0,S=m.length;x<S;x+=3){const w=m[x+0],E=m[x+1],T=m[x+2];f.push(w,E,E,T,T,w)}}else{const m=g.array;v=g.version;for(let x=0,S=m.length/3-1;x<S;x+=3){const w=x+0,E=x+1,T=x+2;f.push(w,E,E,T,T,w)}}const _=new(g.count>=65535?cE:uE)(f,1);_.version=v;const p=s.get(d);p&&e.remove(p),s.set(d,_)}function c(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function nL(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function u(d,f,h){h!==0&&(n.drawElementsInstanced(i,f,s,d*o,h),t.update(f,i,h))}function c(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,h);let v=0;for(let _=0;_<h;_++)v+=f[_];t.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function iL(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function rL(n,e,t){const i=new WeakMap,r=new en;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let b=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var h=b;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),_===!0&&(S=3);let w=a.attributes.position.count*S,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*E*4*d),y=new aE(T,w,E,d);y.type=Hr,y.needsUpdate=!0;const C=S*4;for(let L=0;L<d;L++){const N=p[L],W=m[L],z=x[L],D=w*E*4*L;for(let k=0;k<N.count;k++){const U=k*C;g===!0&&(r.fromBufferAttribute(N,k),T[D+U+0]=r.x,T[D+U+1]=r.y,T[D+U+2]=r.z,T[D+U+3]=0),v===!0&&(r.fromBufferAttribute(W,k),T[D+U+4]=r.x,T[D+U+5]=r.y,T[D+U+6]=r.z,T[D+U+7]=0),_===!0&&(r.fromBufferAttribute(z,k),T[D+U+8]=r.x,T[D+U+9]=r.y,T[D+U+10]=r.z,T[D+U+11]=z.itemSize===4?r.w:1)}}f={count:d,texture:y,size:new xt(w,E)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let _=0;_<u.length;_++)g+=u[_];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function sL(n,e,t,i,r){let s=new WeakMap;function o(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function a(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const oL={[jM]:"LINEAR_TONE_MAPPING",[YM]:"REINHARD_TONE_MAPPING",[$M]:"CINEON_TONE_MAPPING",[i0]:"ACES_FILMIC_TONE_MAPPING",[KM]:"AGX_TONE_MAPPING",[ZM]:"NEUTRAL_TONE_MAPPING",[qM]:"CUSTOM_TONE_MAPPING"};function aL(n,e,t,i,r){const s=new $r(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Dl(e,t):void 0}),o=new $r(e,t,{type:As,depthBuffer:!1,stencilBuffer:!1}),a=new mr;a.setAttribute("position",new fr([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new fr([0,2,0,0,2,0],2));const l=new $b({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Qr(a,l),c=new v0(-1,1,1,-1,0,1);let d=null,f=null,h=!1,g,v=null,_=[],p=!1;this.setSize=function(m,x){s.setSize(m,x),o.setSize(m,x);for(let S=0;S<_.length;S++){const w=_[S];w.setSize&&w.setSize(m,x)}},this.setEffects=function(m){_=m,p=_.length>0&&_[0].isRenderPass===!0;const x=s.width,S=s.height;for(let w=0;w<_.length;w++){const E=_[w];E.setSize&&E.setSize(x,S)}},this.begin=function(m,x){if(h||m.toneMapping===Yr&&_.length===0)return!1;if(v=x,x!==null){const S=x.width,w=x.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return p===!1&&m.setRenderTarget(s),g=m.toneMapping,m.toneMapping=Yr,!0},this.hasRenderPass=function(){return p},this.end=function(m,x){m.toneMapping=g,h=!0;let S=s,w=o;for(let E=0;E<_.length;E++){const T=_[E];if(T.enabled!==!1&&(T.render(m,w,S,x),T.needsSwap!==!1)){const y=S;S=w,w=y}}if(d!==m.outputColorSpace||f!==m.toneMapping){d=m.outputColorSpace,f=m.toneMapping,l.defines={},dt.getTransfer(d)===Et&&(l.defines.SRGB_TRANSFER="");const E=oL[f];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(v),m.render(u,c),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const SE=new di,D_=new Dl(1,1),ME=new aE,EE=new Tb,TE=new hE,Yx=[],$x=[],qx=new Float32Array(16),Kx=new Float32Array(9),Zx=new Float32Array(4);function zl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Yx[r];if(s===void 0&&(s=new Float32Array(r),Yx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function En(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ch(n,e){let t=$x[e];t===void 0&&(t=new Int32Array(e),$x[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;n.uniform2fv(this.addr,e),Tn(t,e)}}function cL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;n.uniform3fv(this.addr,e),Tn(t,e)}}function fL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;n.uniform4fv(this.addr,e),Tn(t,e)}}function dL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(En(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,i))return;Zx.set(i),n.uniformMatrix2fv(this.addr,!1,Zx),Tn(t,i)}}function hL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(En(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,i))return;Kx.set(i),n.uniformMatrix3fv(this.addr,!1,Kx),Tn(t,i)}}function pL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(En(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,i))return;qx.set(i),n.uniformMatrix4fv(this.addr,!1,qx),Tn(t,i)}}function mL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _L(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;n.uniform2iv(this.addr,e),Tn(t,e)}}function gL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;n.uniform3iv(this.addr,e),Tn(t,e)}}function vL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;n.uniform4iv(this.addr,e),Tn(t,e)}}function xL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;n.uniform2uiv(this.addr,e),Tn(t,e)}}function SL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;n.uniform3uiv(this.addr,e),Tn(t,e)}}function ML(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;n.uniform4uiv(this.addr,e),Tn(t,e)}}function EL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(D_.compareFunction=t.isReversedDepthBuffer()?f0:c0,s=D_):s=SE,t.setTexture2D(e||s,r)}function TL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||EE,r)}function wL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||TE,r)}function AL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ME,r)}function CL(n){switch(n){case 5126:return lL;case 35664:return uL;case 35665:return cL;case 35666:return fL;case 35674:return dL;case 35675:return hL;case 35676:return pL;case 5124:case 35670:return mL;case 35667:case 35671:return _L;case 35668:case 35672:return gL;case 35669:case 35673:return vL;case 5125:return xL;case 36294:return yL;case 36295:return SL;case 36296:return ML;case 35678:case 36198:case 36298:case 36306:case 35682:return EL;case 35679:case 36299:case 36307:return TL;case 35680:case 36300:case 36308:case 36293:return wL;case 36289:case 36303:case 36311:case 36292:return AL}}function RL(n,e){n.uniform1fv(this.addr,e)}function bL(n,e){const t=zl(e,this.size,2);n.uniform2fv(this.addr,t)}function PL(n,e){const t=zl(e,this.size,3);n.uniform3fv(this.addr,t)}function LL(n,e){const t=zl(e,this.size,4);n.uniform4fv(this.addr,t)}function DL(n,e){const t=zl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NL(n,e){const t=zl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function IL(n,e){const t=zl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function UL(n,e){n.uniform1iv(this.addr,e)}function FL(n,e){n.uniform2iv(this.addr,e)}function OL(n,e){n.uniform3iv(this.addr,e)}function kL(n,e){n.uniform4iv(this.addr,e)}function BL(n,e){n.uniform1uiv(this.addr,e)}function zL(n,e){n.uniform2uiv(this.addr,e)}function VL(n,e){n.uniform3uiv(this.addr,e)}function HL(n,e){n.uniform4uiv(this.addr,e)}function GL(n,e,t){const i=this.cache,r=e.length,s=ch(t,r);En(i,s)||(n.uniform1iv(this.addr,s),Tn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=D_:o=SE;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function WL(n,e,t){const i=this.cache,r=e.length,s=ch(t,r);En(i,s)||(n.uniform1iv(this.addr,s),Tn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||EE,s[o])}function XL(n,e,t){const i=this.cache,r=e.length,s=ch(t,r);En(i,s)||(n.uniform1iv(this.addr,s),Tn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||TE,s[o])}function jL(n,e,t){const i=this.cache,r=e.length,s=ch(t,r);En(i,s)||(n.uniform1iv(this.addr,s),Tn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ME,s[o])}function YL(n){switch(n){case 5126:return RL;case 35664:return bL;case 35665:return PL;case 35666:return LL;case 35674:return DL;case 35675:return NL;case 35676:return IL;case 5124:case 35670:return UL;case 35667:case 35671:return FL;case 35668:case 35672:return OL;case 35669:case 35673:return kL;case 5125:return BL;case 36294:return zL;case 36295:return VL;case 36296:return HL;case 35678:case 36198:case 36298:case 36306:case 35682:return GL;case 35679:case 36299:case 36307:return WL;case 35680:case 36300:case 36308:case 36293:return XL;case 36289:case 36303:case 36311:case 36292:return jL}}class $L{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=CL(t.type)}}class qL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YL(t.type)}}class KL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const wp=/(\w+)(\])?(\[|\.)?/g;function Qx(n,e){n.seq.push(e),n.map[e.id]=e}function ZL(n,e,t){const i=n.name,r=i.length;for(wp.lastIndex=0;;){const s=wp.exec(i),o=wp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Qx(t,u===void 0?new $L(a,n,e):new qL(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new KL(a),Qx(t,d)),t=d}}}class Yf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ZL(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Jx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const QL=37297;let JL=0;function eD(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ey=new qe;function tD(n){dt._getMatrix(ey,dt.workingColorSpace,n);const e=`mat3( ${ey.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Id:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ty(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+eD(n.getShaderSource(e),a)}else return s}function nD(n,e){const t=tD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iD={[jM]:"Linear",[YM]:"Reinhard",[$M]:"Cineon",[i0]:"ACESFilmic",[KM]:"AgX",[ZM]:"Neutral",[qM]:"Custom"};function rD(n,e){const t=iD[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hf=new Y;function sD(){dt.getLuminanceCoefficients(hf);const n=hf.x.toFixed(4),e=hf.y.toFixed(4),t=hf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(du).join(`
`)}function aD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function du(n){return n!==""}function ny(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iy(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uD=/^[ \t]*#include +<([\w\d./]+)>/gm;function N_(n){return n.replace(uD,fD)}const cD=new Map;function fD(n,e){let t=nt[e];if(t===void 0){const i=cD.get(e);if(i!==void 0)t=nt[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return N_(t)}const dD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ry(n){return n.replace(dD,hD)}function hD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sy(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pD={[Hf]:"SHADOWMAP_TYPE_PCF",[fu]:"SHADOWMAP_TYPE_VSM"};function mD(n){return pD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _D={[oa]:"ENVMAP_TYPE_CUBE",[Ll]:"ENVMAP_TYPE_CUBE",[oh]:"ENVMAP_TYPE_CUBE_UV"};function gD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":_D[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const vD={[Ll]:"ENVMAP_MODE_REFRACTION"};function xD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yD={[XM]:"ENVMAP_BLENDING_MULTIPLY",[ib]:"ENVMAP_BLENDING_MIX",[rb]:"ENVMAP_BLENDING_ADD"};function SD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":yD[n.combine]||"ENVMAP_BLENDING_NONE"}function MD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ED(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mD(t),u=gD(t),c=xD(t),d=SD(t),f=MD(t),h=oD(t),g=aD(s),v=r.createProgram();let _,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(du).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(du).join(`
`),p.length>0&&(p+=`
`)):(_=[sy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(du).join(`
`),p=[sy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yr?"#define TONE_MAPPING":"",t.toneMapping!==Yr?nt.tonemapping_pars_fragment:"",t.toneMapping!==Yr?rD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,nD("linearToOutputTexel",t.outputColorSpace),sD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(du).join(`
`)),o=N_(o),o=ny(o,t),o=iy(o,t),a=N_(a),a=ny(a,t),a=iy(a,t),o=ry(o),a=ry(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=m+_+o,S=m+p+a,w=Jx(r,r.VERTEX_SHADER,x),E=Jx(r,r.FRAGMENT_SHADER,S);r.attachShader(v,w),r.attachShader(v,E),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(L){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(v)||"",W=r.getShaderInfoLog(w)||"",z=r.getShaderInfoLog(E)||"",D=N.trim(),k=W.trim(),U=z.trim();let O=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,E);else{const P=ty(r,w,"vertex"),te=ty(r,E,"fragment");mt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+P+`
`+te)}else D!==""?Xe("WebGLProgram: Program Info Log:",D):(k===""||U==="")&&(G=!1);G&&(L.diagnostics={runnable:O,programLog:D,vertexShader:{log:k,prefix:_},fragmentShader:{log:U,prefix:p}})}r.deleteShader(w),r.deleteShader(E),y=new Yf(r,v),C=lD(r,v)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let C;this.getAttributes=function(){return C===void 0&&T(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,QL)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JL++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=E,this}let TD=0;class wD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AD(e),t.set(e,i)),i}}class AD{constructor(e){this.id=TD++,this.code=e,this.usedTimes=0}}function CD(n){return n===aa||n===Ld||n===Dd}function RD(n,e,t,i,r,s){const o=new h0,a=new wD,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,C,b,L,N,W){const z=L.fog,D=N.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=e.get(y.envMap||k,U),G=O&&O.mapping===oh?O.image.height:null,P=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Xe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const te=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ce=te!==void 0?te.length:0;let Fe=0;D.morphAttributes.position!==void 0&&(Fe=1),D.morphAttributes.normal!==void 0&&(Fe=2),D.morphAttributes.color!==void 0&&(Fe=3);let Ce,Ne,K,ae;if(P){const pe=kr[P];Ce=pe.vertexShader,Ne=pe.fragmentShader}else Ce=y.vertexShader,Ne=y.fragmentShader,a.update(y),K=a.getVertexShaderID(y),ae=a.getFragmentShaderID(y);const le=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Ve=N.isInstancedMesh===!0,De=N.isBatchedMesh===!0,it=!!y.map,Ae=!!y.matcap,Ge=!!O,tt=!!y.aoMap,He=!!y.lightMap,$=!!y.bumpMap,ut=!!y.normalMap,Ht=!!y.displacementMap,B=!!y.emissiveMap,Ze=!!y.metalnessMap,Ye=!!y.roughnessMap,ft=y.anisotropy>0,ge=y.clearcoat>0,Je=y.dispersion>0,R=y.iridescence>0,M=y.sheen>0,H=y.transmission>0,Q=ft&&!!y.anisotropyMap,ne=ge&&!!y.clearcoatMap,me=ge&&!!y.clearcoatNormalMap,re=ge&&!!y.clearcoatRoughnessMap,Z=R&&!!y.iridescenceMap,ee=R&&!!y.iridescenceThicknessMap,xe=M&&!!y.sheenColorMap,we=M&&!!y.sheenRoughnessMap,_e=!!y.specularMap,fe=!!y.specularColorMap,ve=!!y.specularIntensityMap,We=H&&!!y.transmissionMap,$e=H&&!!y.thicknessMap,F=!!y.gradientMap,ue=!!y.alphaMap,J=y.alphaTest>0,Se=!!y.alphaHash,he=!!y.extensions;let ie=Yr;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ie=n.toneMapping);const oe={shaderID:P,shaderType:y.type,shaderName:y.name,vertexShader:Ce,fragmentShader:Ne,defines:y.defines,customVertexShaderID:K,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:De,batchingColor:De&&N._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&N.instanceColor!==null,instancingMorph:Ve&&N.morphTexture!==null,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:it,matcap:Ae,envMap:Ge,envMapMode:Ge&&O.mapping,envMapCubeUVHeight:G,aoMap:tt,lightMap:He,bumpMap:$,normalMap:ut,displacementMap:Ht,emissiveMap:B,normalMapObjectSpace:ut&&y.normalMapType===ab,normalMapTangentSpace:ut&&y.normalMapType===C_,packedNormalMap:ut&&y.normalMapType===C_&&CD(y.normalMap.format),metalnessMap:Ze,roughnessMap:Ye,anisotropy:ft,anisotropyMap:Q,clearcoat:ge,clearcoatMap:ne,clearcoatNormalMap:me,clearcoatRoughnessMap:re,dispersion:Je,iridescence:R,iridescenceMap:Z,iridescenceThicknessMap:ee,sheen:M,sheenColorMap:xe,sheenRoughnessMap:we,specularMap:_e,specularColorMap:fe,specularIntensityMap:ve,transmission:H,transmissionMap:We,thicknessMap:$e,gradientMap:F,opaque:y.transparent===!1&&y.blending===dl&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:Se,combine:y.combine,mapUv:it&&g(y.map.channel),aoMapUv:tt&&g(y.aoMap.channel),lightMapUv:He&&g(y.lightMap.channel),bumpMapUv:$&&g(y.bumpMap.channel),normalMapUv:ut&&g(y.normalMap.channel),displacementMapUv:Ht&&g(y.displacementMap.channel),emissiveMapUv:B&&g(y.emissiveMap.channel),metalnessMapUv:Ze&&g(y.metalnessMap.channel),roughnessMapUv:Ye&&g(y.roughnessMap.channel),anisotropyMapUv:Q&&g(y.anisotropyMap.channel),clearcoatMapUv:ne&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(y.sheenRoughnessMap.channel),specularMapUv:_e&&g(y.specularMap.channel),specularColorMapUv:fe&&g(y.specularColorMap.channel),specularIntensityMapUv:ve&&g(y.specularIntensityMap.channel),transmissionMapUv:We&&g(y.transmissionMap.channel),thicknessMapUv:$e&&g(y.thicknessMap.channel),alphaMapUv:ue&&g(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ut||ft),vertexNormals:!!D.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(it||ue),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&ut===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:N.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Fe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:it&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===Et,decodeVideoTextureEmissive:B&&y.emissiveMap.isVideoTexture===!0&&dt.getTransfer(y.emissiveMap.colorSpace)===Et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cs,flipSided:y.side===Ci,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:he&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&y.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function _(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const b in y.defines)C.push(b),C.push(y.defines[b]);return y.isRawShaderMaterial===!1&&(p(C,y),m(C,y),C.push(n.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function p(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function m(y,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),y.push(o.mask)}function x(y){const C=h[y.type];let b;if(C){const L=kr[C];b=Xb.clone(L.uniforms)}else b=y.uniforms;return b}function S(y,C){let b=c.get(C);return b!==void 0?++b.usedTimes:(b=new ED(n,C,y,r),u.push(b),c.set(C,b)),b}function w(y){if(--y.usedTimes===0){const C=u.indexOf(y);u[C]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function T(){a.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:x,acquireProgram:S,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:T}}function bD(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function PD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function oy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ay(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,v,_,p){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:g,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},n[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=g,m.materialVariant=o(f),m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function l(f,h,g,v,_,p){const m=a(f,h,g,v,_,p);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function u(f,h,g,v,_,p){const m=a(f,h,g,v,_,p);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||PD),i.length>1&&i.sort(h||oy),r.length>1&&r.sort(h||oy)}function d(){for(let f=e,h=n.length;f<h;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:c}}function LD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ay,n.set(i,[o])):r>=s.length?(o=new ay,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function DD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new vt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function ND(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ID=0;function UD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FD(n){const e=new DD,t=ND(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,s=new qt,o=new qt;function a(u){let c=0,d=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let h=0,g=0,v=0,_=0,p=0,m=0,x=0,S=0,w=0,E=0,T=0;u.sort(UD);for(let C=0,b=u.length;C<b;C++){const L=u[C],N=L.color,W=L.intensity,z=L.distance;let D=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===aa?D=L.shadow.map.texture:D=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=N.r*W,d+=N.g*W,f+=N.b*W;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],W);T++}else if(L.isDirectionalLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const U=L.shadow,O=t.get(L);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,i.directionalShadow[h]=O,i.directionalShadowMap[h]=D,i.directionalShadowMatrix[h]=L.shadow.matrix,m++}i.directional[h]=k,h++}else if(L.isSpotLight){const k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(N).multiplyScalar(W),k.distance=z,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[v]=k;const U=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,U.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[v]=U.matrix,L.castShadow){const O=t.get(L);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=D,S++}v++}else if(L.isRectAreaLight){const k=e.get(L);k.color.copy(N).multiplyScalar(W),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[_]=k,_++}else if(L.isPointLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const U=L.shadow,O=t.get(L);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,O.shadowCameraNear=U.camera.near,O.shadowCameraFar=U.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=D,i.pointShadowMatrix[g]=L.shadow.matrix,x++}i.point[g]=k,g++}else if(L.isHemisphereLight){const k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(W),k.groundColor.copy(L.groundColor).multiplyScalar(W),i.hemi[p]=k,p++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==h||y.pointLength!==g||y.spotLength!==v||y.rectAreaLength!==_||y.hemiLength!==p||y.numDirectionalShadows!==m||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==w||y.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=_,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,y.directionalLength=h,y.pointLength=g,y.spotLength=v,y.rectAreaLength=_,y.hemiLength=p,y.numDirectionalShadows=m,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=w,y.numLightProbes=T,i.version=ID++)}function l(u,c){let d=0,f=0,h=0,g=0,v=0;const _=c.matrixWorldInverse;for(let p=0,m=u.length;p<m;p++){const x=u[p];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),d++}else if(x.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),h++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(_),f++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(_),v++}}}return{setup:a,setupView:l,state:i}}function ly(n){const e=new FD(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(t)}function c(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function OD(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ly(n),e.set(r,[a])):s>=o.length?(a=new ly(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const kD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zD=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],VD=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],uy=new qt,nu=new Y,Ap=new Y;function HD(n,e,t){let i=new m0;const r=new xt,s=new xt,o=new en,a=new Kb,l=new Zb,u={},c=t.maxTextureSize,d={[vo]:Ci,[Ci]:vo,[cs]:cs},f=new Jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:kD,fragmentShader:BD}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new mr;g.setAttribute("position",new br(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qr(g,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hf;let p=this.type;this.render=function(E,T,y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;this.type===WM&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hf);const C=n.getRenderTarget(),b=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(gs),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const W=p!==this.type;W&&T.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(D=>D.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,D=E.length;z<D;z++){const k=E[z],U=k.shadow;if(U===void 0){Xe("WebGLShadowMap:",k,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const O=U.getFrameExtents();r.multiply(O),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/O.x),r.x=s.x*O.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/O.y),r.y=s.y*O.y,U.mapSize.y=s.y));const G=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=G,U.map===null||W===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===fu){if(k.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new $r(r.x,r.y,{format:aa,type:As,minFilter:ei,magFilter:ei,generateMipmaps:!1}),U.map.texture.name=k.name+".shadowMap",U.map.depthTexture=new Dl(r.x,r.y,Hr),U.map.depthTexture.name=k.name+".shadowMapDepth",U.map.depthTexture.format=Cs,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Un,U.map.depthTexture.magFilter=Un}else k.isPointLight?(U.map=new yE(r.x),U.map.depthTexture=new Gb(r.x,Zr)):(U.map=new $r(r.x,r.y),U.map.depthTexture=new Dl(r.x,r.y,Zr)),U.map.depthTexture.name=k.name+".shadowMap",U.map.depthTexture.format=Cs,this.type===Hf?(U.map.depthTexture.compareFunction=G?f0:c0,U.map.depthTexture.minFilter=ei,U.map.depthTexture.magFilter=ei):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Un,U.map.depthTexture.magFilter=Un);U.camera.updateProjectionMatrix()}const P=U.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<P;te++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,te),n.clear();else{te===0&&(n.setRenderTarget(U.map),n.clear());const ce=U.getViewport(te);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),N.viewport(o)}if(k.isPointLight){const ce=U.camera,Fe=U.matrix,Ce=k.distance||ce.far;Ce!==ce.far&&(ce.far=Ce,ce.updateProjectionMatrix()),nu.setFromMatrixPosition(k.matrixWorld),ce.position.copy(nu),Ap.copy(ce.position),Ap.add(zD[te]),ce.up.copy(VD[te]),ce.lookAt(Ap),ce.updateMatrixWorld(),Fe.makeTranslation(-nu.x,-nu.y,-nu.z),uy.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),U._frustum.setFromProjectionMatrix(uy,ce.coordinateSystem,ce.reversedDepth)}else U.updateMatrices(k);i=U.getFrustum(),S(T,y,U.camera,k,this.type)}U.isPointLightShadow!==!0&&this.type===fu&&m(U,y),U.needsUpdate=!1}p=this.type,_.needsUpdate=!1,n.setRenderTarget(C,b,L)};function m(E,T){const y=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new $r(r.x,r.y,{format:aa,type:As})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,y,f,v,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,y,h,v,null)}function x(E,T,y,C){let b=null;const L=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)b=L;else if(b=y.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const N=b.uuid,W=T.uuid;let z=u[N];z===void 0&&(z={},u[N]=z);let D=z[W];D===void 0&&(D=b.clone(),z[W]=D,T.addEventListener("dispose",w)),b=D}if(b.visible=T.visible,b.wireframe=T.wireframe,C===fu?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:d[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,y.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=n.properties.get(b);N.light=y}return b}function S(E,T,y,C,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===fu)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const W=e.update(E),z=E.material;if(Array.isArray(z)){const D=W.groups;for(let k=0,U=D.length;k<U;k++){const O=D[k],G=z[O.materialIndex];if(G&&G.visible){const P=x(E,G,C,b);E.onBeforeShadow(n,E,T,y,W,P,O),n.renderBufferDirect(y,null,W,P,E,O),E.onAfterShadow(n,E,T,y,W,P,O)}}}else if(z.visible){const D=x(E,z,C,b);E.onBeforeShadow(n,E,T,y,W,D,null),n.renderBufferDirect(y,null,W,D,E,null),E.onAfterShadow(n,E,T,y,W,D,null)}}const N=E.children;for(let W=0,z=N.length;W<z;W++)S(N[W],T,y,C,b)}function w(E){E.target.removeEventListener("dispose",w);for(const y in u){const C=u[y],b=E.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}function GD(n,e){function t(){let F=!1;const ue=new en;let J=null;const Se=new en(0,0,0,0);return{setMask:function(he){J!==he&&!F&&(n.colorMask(he,he,he,he),J=he)},setLocked:function(he){F=he},setClear:function(he,ie,oe,pe,Be){Be===!0&&(he*=pe,ie*=pe,oe*=pe),ue.set(he,ie,oe,pe),Se.equals(ue)===!1&&(n.clearColor(he,ie,oe,pe),Se.copy(ue))},reset:function(){F=!1,J=null,Se.set(-1,0,0,0)}}}function i(){let F=!1,ue=!1,J=null,Se=null,he=null;return{setReversed:function(ie){if(ue!==ie){const oe=e.get("EXT_clip_control");ie?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const pe=he;he=null,this.setClear(pe)}},getReversed:function(){return ue},setTest:function(ie){ie?le(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ie){J!==ie&&!F&&(n.depthMask(ie),J=ie)},setFunc:function(ie){if(ue&&(ie=gb[ie]),Se!==ie){switch(ie){case Hm:n.depthFunc(n.NEVER);break;case Gm:n.depthFunc(n.ALWAYS);break;case Wm:n.depthFunc(n.LESS);break;case Pl:n.depthFunc(n.LEQUAL);break;case Xm:n.depthFunc(n.EQUAL);break;case jm:n.depthFunc(n.GEQUAL);break;case Ym:n.depthFunc(n.GREATER);break;case $m:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=ie}},setLocked:function(ie){F=ie},setClear:function(ie){he!==ie&&(he=ie,ue&&(ie=1-ie),n.clearDepth(ie))},reset:function(){F=!1,J=null,Se=null,he=null,ue=!1}}}function r(){let F=!1,ue=null,J=null,Se=null,he=null,ie=null,oe=null,pe=null,Be=null;return{setTest:function(se){F||(se?le(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(se){ue!==se&&!F&&(n.stencilMask(se),ue=se)},setFunc:function(se,ze,Ie){(J!==se||Se!==ze||he!==Ie)&&(n.stencilFunc(se,ze,Ie),J=se,Se=ze,he=Ie)},setOp:function(se,ze,Ie){(ie!==se||oe!==ze||pe!==Ie)&&(n.stencilOp(se,ze,Ie),ie=se,oe=ze,pe=Ie)},setLocked:function(se){F=se},setClear:function(se){Be!==se&&(n.clearStencil(se),Be=se)},reset:function(){F=!1,ue=null,J=null,Se=null,he=null,ie=null,oe=null,pe=null,Be=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f={},h=new WeakMap,g=[],v=null,_=!1,p=null,m=null,x=null,S=null,w=null,E=null,T=null,y=new vt(0,0,0),C=0,b=!1,L=null,N=null,W=null,z=null,D=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,O=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=O>=1):G.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=O>=2);let P=null,te={};const ce=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Ce=new en().fromArray(ce),Ne=new en().fromArray(Fe);function K(F,ue,J,Se){const he=new Uint8Array(4),ie=n.createTexture();n.bindTexture(F,ie),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let oe=0;oe<J;oe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ue+oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return ie}const ae={};ae[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(n.DEPTH_TEST),o.setFunc(Pl),$(!1),ut(ox),le(n.CULL_FACE),tt(gs);function le(F){c[F]!==!0&&(n.enable(F),c[F]=!0)}function be(F){c[F]!==!1&&(n.disable(F),c[F]=!1)}function Ve(F,ue){return f[F]!==ue?(n.bindFramebuffer(F,ue),f[F]=ue,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ue),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function De(F,ue){let J=g,Se=!1;if(F){J=h.get(ue),J===void 0&&(J=[],h.set(ue,J));const he=F.textures;if(J.length!==he.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,oe=he.length;ie<oe;ie++)J[ie]=n.COLOR_ATTACHMENT0+ie;J.length=he.length,Se=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,Se=!0);Se&&n.drawBuffers(J)}function it(F){return v!==F?(n.useProgram(F),v=F,!0):!1}const Ae={[Oo]:n.FUNC_ADD,[zR]:n.FUNC_SUBTRACT,[VR]:n.FUNC_REVERSE_SUBTRACT};Ae[HR]=n.MIN,Ae[GR]=n.MAX;const Ge={[WR]:n.ZERO,[XR]:n.ONE,[jR]:n.SRC_COLOR,[zm]:n.SRC_ALPHA,[QR]:n.SRC_ALPHA_SATURATE,[KR]:n.DST_COLOR,[$R]:n.DST_ALPHA,[YR]:n.ONE_MINUS_SRC_COLOR,[Vm]:n.ONE_MINUS_SRC_ALPHA,[ZR]:n.ONE_MINUS_DST_COLOR,[qR]:n.ONE_MINUS_DST_ALPHA,[JR]:n.CONSTANT_COLOR,[eb]:n.ONE_MINUS_CONSTANT_COLOR,[tb]:n.CONSTANT_ALPHA,[nb]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(F,ue,J,Se,he,ie,oe,pe,Be,se){if(F===gs){_===!0&&(be(n.BLEND),_=!1);return}if(_===!1&&(le(n.BLEND),_=!0),F!==BR){if(F!==p||se!==b){if((m!==Oo||w!==Oo)&&(n.blendEquation(n.FUNC_ADD),m=Oo,w=Oo),se)switch(F){case dl:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ax:n.blendFunc(n.ONE,n.ONE);break;case lx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ux:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:mt("WebGLState: Invalid blending: ",F);break}else switch(F){case dl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ax:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case lx:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ux:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",F);break}x=null,S=null,E=null,T=null,y.set(0,0,0),C=0,p=F,b=se}return}he=he||ue,ie=ie||J,oe=oe||Se,(ue!==m||he!==w)&&(n.blendEquationSeparate(Ae[ue],Ae[he]),m=ue,w=he),(J!==x||Se!==S||ie!==E||oe!==T)&&(n.blendFuncSeparate(Ge[J],Ge[Se],Ge[ie],Ge[oe]),x=J,S=Se,E=ie,T=oe),(pe.equals(y)===!1||Be!==C)&&(n.blendColor(pe.r,pe.g,pe.b,Be),y.copy(pe),C=Be),p=F,b=!1}function He(F,ue){F.side===cs?be(n.CULL_FACE):le(n.CULL_FACE);let J=F.side===Ci;ue&&(J=!J),$(J),F.blending===dl&&F.transparent===!1?tt(gs):tt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Se=F.stencilWrite;a.setTest(Se),Se&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),B(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(F){L!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),L=F)}function ut(F){F!==OR?(le(n.CULL_FACE),F!==N&&(F===ox?n.cullFace(n.BACK):F===kR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),N=F}function Ht(F){F!==W&&(U&&n.lineWidth(F),W=F)}function B(F,ue,J){F?(le(n.POLYGON_OFFSET_FILL),(z!==ue||D!==J)&&(z=ue,D=J,o.getReversed()&&(ue=-ue),n.polygonOffset(ue,J))):be(n.POLYGON_OFFSET_FILL)}function Ze(F){F?le(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Ye(F){F===void 0&&(F=n.TEXTURE0+k-1),P!==F&&(n.activeTexture(F),P=F)}function ft(F,ue,J){J===void 0&&(P===null?J=n.TEXTURE0+k-1:J=P);let Se=te[J];Se===void 0&&(Se={type:void 0,texture:void 0},te[J]=Se),(Se.type!==F||Se.texture!==ue)&&(P!==J&&(n.activeTexture(J),P=J),n.bindTexture(F,ue||ae[F]),Se.type=F,Se.texture=ue)}function ge(){const F=te[P];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Je(){try{n.compressedTexImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function M(){try{n.texSubImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function H(){try{n.texSubImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function ne(){try{n.compressedTexSubImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function me(){try{n.texStorage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function re(){try{n.texStorage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function Z(){try{n.texImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function ee(){try{n.texImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function xe(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function we(F,ue){d[F]!==ue&&(n.pixelStorei(F,ue),d[F]=ue)}function _e(F){Ce.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ce.copy(F))}function fe(F){Ne.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ne.copy(F))}function ve(F,ue){let J=u.get(ue);J===void 0&&(J=new WeakMap,u.set(ue,J));let Se=J.get(F);Se===void 0&&(Se=n.getUniformBlockIndex(ue,F.name),J.set(F,Se))}function We(F,ue){const Se=u.get(ue).get(F);l.get(ue)!==Se&&(n.uniformBlockBinding(ue,Se,F.__bindingPointIndex),l.set(ue,Se))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},d={},P=null,te={},f={},h=new WeakMap,g=[],v=null,_=!1,p=null,m=null,x=null,S=null,w=null,E=null,T=null,y=new vt(0,0,0),C=0,b=!1,L=null,N=null,W=null,z=null,D=null,Ce.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:be,bindFramebuffer:Ve,drawBuffers:De,useProgram:it,setBlending:tt,setMaterial:He,setFlipSided:$,setCullFace:ut,setLineWidth:Ht,setPolygonOffset:B,setScissorTest:Ze,activeTexture:Ye,bindTexture:ft,unbindTexture:ge,compressedTexImage2D:Je,compressedTexImage3D:R,texImage2D:Z,texImage3D:ee,pixelStorei:we,getParameter:xe,updateUBOMapping:ve,uniformBlockBinding:We,texStorage2D:me,texStorage3D:re,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:Q,compressedTexSubImage3D:ne,scissor:_e,viewport:fe,reset:$e}}function WD(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new xt,c=new WeakMap,d=new Set;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return g?new OffscreenCanvas(R,M):Ud("canvas")}function _(R,M,H){let Q=1;const ne=Je(R);if((ne.width>H||ne.height>H)&&(Q=H/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const me=Math.floor(Q*ne.width),re=Math.floor(Q*ne.height);f===void 0&&(f=v(me,re));const Z=M?v(me,re):f;return Z.width=me,Z.height=re,Z.getContext("2d").drawImage(R,0,0,me,re),Xe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+me+"x"+re+")."),Z}else return"data"in R&&Xe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(R,M,H,Q,ne,me=!1){if(R!==null){if(n[R]!==void 0)return n[R];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re;Q&&(re=e.get("EXT_texture_norm16"),re||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===n.RED&&(H===n.FLOAT&&(Z=n.R32F),H===n.HALF_FLOAT&&(Z=n.R16F),H===n.UNSIGNED_BYTE&&(Z=n.R8),H===n.UNSIGNED_SHORT&&re&&(Z=re.R16_EXT),H===n.SHORT&&re&&(Z=re.R16_SNORM_EXT)),M===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.R8UI),H===n.UNSIGNED_SHORT&&(Z=n.R16UI),H===n.UNSIGNED_INT&&(Z=n.R32UI),H===n.BYTE&&(Z=n.R8I),H===n.SHORT&&(Z=n.R16I),H===n.INT&&(Z=n.R32I)),M===n.RG&&(H===n.FLOAT&&(Z=n.RG32F),H===n.HALF_FLOAT&&(Z=n.RG16F),H===n.UNSIGNED_BYTE&&(Z=n.RG8),H===n.UNSIGNED_SHORT&&re&&(Z=re.RG16_EXT),H===n.SHORT&&re&&(Z=re.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RG8UI),H===n.UNSIGNED_SHORT&&(Z=n.RG16UI),H===n.UNSIGNED_INT&&(Z=n.RG32UI),H===n.BYTE&&(Z=n.RG8I),H===n.SHORT&&(Z=n.RG16I),H===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),H===n.UNSIGNED_INT&&(Z=n.RGB32UI),H===n.BYTE&&(Z=n.RGB8I),H===n.SHORT&&(Z=n.RGB16I),H===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),H===n.UNSIGNED_INT&&(Z=n.RGBA32UI),H===n.BYTE&&(Z=n.RGBA8I),H===n.SHORT&&(Z=n.RGBA16I),H===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&(H===n.UNSIGNED_SHORT&&re&&(Z=re.RGB16_EXT),H===n.SHORT&&re&&(Z=re.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),M===n.RGBA){const ee=me?Id:dt.getTransfer(ne);H===n.FLOAT&&(Z=n.RGBA32F),H===n.HALF_FLOAT&&(Z=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Z=ee===Et?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&re&&(Z=re.RGBA16_EXT),H===n.SHORT&&re&&(Z=re.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function w(R,M){let H;return R?M===null||M===Zr||M===fc?H=n.DEPTH24_STENCIL8:M===Hr?H=n.DEPTH32F_STENCIL8:M===cc&&(H=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zr||M===fc?H=n.DEPTH_COMPONENT24:M===Hr?H=n.DEPTH_COMPONENT32F:M===cc&&(H=n.DEPTH_COMPONENT16),H}function E(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Un&&R.minFilter!==ei?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function T(R){const M=R.target;M.removeEventListener("dispose",T),C(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&d.delete(M)}function y(R){const M=R.target;M.removeEventListener("dispose",y),L(M)}function C(R){const M=i.get(R);if(M.__webglInit===void 0)return;const H=R.source,Q=h.get(H);if(Q){const ne=Q[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(R),Object.keys(Q).length===0&&h.delete(H)}i.remove(R)}function b(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const H=R.source,Q=h.get(H);delete Q[M.__cacheKey],o.memory.textures--}function L(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ne=0;ne<M.__webglFramebuffer[Q].length;ne++)n.deleteFramebuffer(M.__webglFramebuffer[Q][ne]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=R.textures;for(let Q=0,ne=H.length;Q<ne;Q++){const me=i.get(H[Q]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(H[Q])}i.remove(R)}let N=0;function W(){N=0}function z(){return N}function D(R){N=R}function k(){const R=N;return R>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function U(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function O(R,M){const H=i.get(R);if(R.isVideoTexture&&ft(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){const Q=R.image;if(Q===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{be(H,R,M);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+M)}function G(R,M){const H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){be(H,R,M);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+M)}function P(R,M){const H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){be(H,R,M);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+M)}function te(R,M){const H=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){Ve(H,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+M)}const ce={[qm]:n.REPEAT,[ps]:n.CLAMP_TO_EDGE,[Km]:n.MIRRORED_REPEAT},Fe={[Un]:n.NEAREST,[sb]:n.NEAREST_MIPMAP_NEAREST,[Hc]:n.NEAREST_MIPMAP_LINEAR,[ei]:n.LINEAR,[qh]:n.LINEAR_MIPMAP_NEAREST,[Go]:n.LINEAR_MIPMAP_LINEAR},Ce={[lb]:n.NEVER,[hb]:n.ALWAYS,[ub]:n.LESS,[c0]:n.LEQUAL,[cb]:n.EQUAL,[f0]:n.GEQUAL,[fb]:n.GREATER,[db]:n.NOTEQUAL};function Ne(R,M){if(M.type===Hr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ei||M.magFilter===qh||M.magFilter===Hc||M.magFilter===Go||M.minFilter===ei||M.minFilter===qh||M.minFilter===Hc||M.minFilter===Go)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ce[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ce[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ce[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Fe[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Fe[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==Hc&&M.minFilter!==Go||M.type===Hr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function K(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",T));const Q=M.source;let ne=h.get(Q);ne===void 0&&(ne={},h.set(Q,ne));const me=U(M);if(me!==R.__cacheKey){ne[me]===void 0&&(ne[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[me].usedTimes++;const re=ne[R.__cacheKey];re!==void 0&&(ne[R.__cacheKey].usedTimes--,re.usedTimes===0&&b(M)),R.__cacheKey=me,R.__webglTexture=ne[me].texture}return H}function ae(R,M,H){return Math.floor(Math.floor(R/H)/M)}function le(R,M,H,Q){const me=R.updateRanges;if(me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,H,Q,M.data);else{me.sort((we,_e)=>we.start-_e.start);let re=0;for(let we=1;we<me.length;we++){const _e=me[re],fe=me[we],ve=_e.start+_e.count,We=ae(fe.start,M.width,4),$e=ae(_e.start,M.width,4);fe.start<=ve+1&&We===$e&&ae(fe.start+fe.count-1,M.width,4)===We?_e.count=Math.max(_e.count,fe.start+fe.count-_e.start):(++re,me[re]=fe)}me.length=re+1;const Z=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),xe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let we=0,_e=me.length;we<_e;we++){const fe=me[we],ve=Math.floor(fe.start/4),We=Math.ceil(fe.count/4),$e=ve%M.width,F=Math.floor(ve/M.width),ue=We,J=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,$e,F,ue,J,H,Q,M.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function be(R,M,H){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);const ne=K(R,M),me=M.source;t.bindTexture(Q,R.__webglTexture,n.TEXTURE0+H);const re=i.get(me);if(me.version!==re.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const J=dt.getPrimaries(dt.workingColorSpace),Se=M.colorSpace===js?null:dt.getPrimaries(M.colorSpace),he=M.colorSpace===js||J===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let ee=_(M.image,!1,r.maxTextureSize);ee=ge(M,ee);const xe=s.convert(M.format,M.colorSpace),we=s.convert(M.type);let _e=S(M.internalFormat,xe,we,M.normalized,M.colorSpace,M.isVideoTexture);Ne(Q,M);let fe;const ve=M.mipmaps,We=M.isVideoTexture!==!0,$e=re.__version===void 0||ne===!0,F=me.dataReady,ue=E(M,ee);if(M.isDepthTexture)_e=w(M.format===Wo,M.type),$e&&(We?t.texStorage2D(n.TEXTURE_2D,1,_e,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,_e,ee.width,ee.height,0,xe,we,null));else if(M.isDataTexture)if(ve.length>0){We&&$e&&t.texStorage2D(n.TEXTURE_2D,ue,_e,ve[0].width,ve[0].height);for(let J=0,Se=ve.length;J<Se;J++)fe=ve[J],We?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,xe,we,fe.data):t.texImage2D(n.TEXTURE_2D,J,_e,fe.width,fe.height,0,xe,we,fe.data);M.generateMipmaps=!1}else We?($e&&t.texStorage2D(n.TEXTURE_2D,ue,_e,ee.width,ee.height),F&&le(M,ee,xe,we)):t.texImage2D(n.TEXTURE_2D,0,_e,ee.width,ee.height,0,xe,we,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,_e,ve[0].width,ve[0].height,ee.depth);for(let J=0,Se=ve.length;J<Se;J++)if(fe=ve[J],M.format!==Ar)if(xe!==null)if(We){if(F)if(M.layerUpdates.size>0){const he=zx(fe.width,fe.height,M.format,M.type);for(const ie of M.layerUpdates){const oe=fe.data.subarray(ie*he/fe.data.BYTES_PER_ELEMENT,(ie+1)*he/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ie,fe.width,fe.height,1,xe,oe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ee.depth,xe,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,_e,fe.width,fe.height,ee.depth,0,fe.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,ee.depth,xe,we,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,_e,fe.width,fe.height,ee.depth,0,xe,we,fe.data)}else{We&&$e&&t.texStorage2D(n.TEXTURE_2D,ue,_e,ve[0].width,ve[0].height);for(let J=0,Se=ve.length;J<Se;J++)fe=ve[J],M.format!==Ar?xe!==null?We?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,xe,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,_e,fe.width,fe.height,0,fe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,fe.width,fe.height,xe,we,fe.data):t.texImage2D(n.TEXTURE_2D,J,_e,fe.width,fe.height,0,xe,we,fe.data)}else if(M.isDataArrayTexture)if(We){if($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,_e,ee.width,ee.height,ee.depth),F)if(M.layerUpdates.size>0){const J=zx(ee.width,ee.height,M.format,M.type);for(const Se of M.layerUpdates){const he=ee.data.subarray(Se*J/ee.data.BYTES_PER_ELEMENT,(Se+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,ee.width,ee.height,1,xe,we,he)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,xe,we,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,ee.width,ee.height,ee.depth,0,xe,we,ee.data);else if(M.isData3DTexture)We?($e&&t.texStorage3D(n.TEXTURE_3D,ue,_e,ee.width,ee.height,ee.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,xe,we,ee.data)):t.texImage3D(n.TEXTURE_3D,0,_e,ee.width,ee.height,ee.depth,0,xe,we,ee.data);else if(M.isFramebufferTexture){if($e)if(We)t.texStorage2D(n.TEXTURE_2D,ue,_e,ee.width,ee.height);else{let J=ee.width,Se=ee.height;for(let he=0;he<ue;he++)t.texImage2D(n.TEXTURE_2D,he,_e,J,Se,0,xe,we,null),J>>=1,Se>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),d.add(M),J.onpaint=pe=>{const Be=pe.changedElements;for(const se of d)Be.includes(se.image)&&(se.needsUpdate=!0)},J.requestPaint();return}const Se=0,he=n.RGBA,ie=n.RGBA,oe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Se,he,ie,oe,ee),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ve.length>0){if(We&&$e){const J=Je(ve[0]);t.texStorage2D(n.TEXTURE_2D,ue,_e,J.width,J.height)}for(let J=0,Se=ve.length;J<Se;J++)fe=ve[J],We?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,xe,we,fe):t.texImage2D(n.TEXTURE_2D,J,_e,xe,we,fe);M.generateMipmaps=!1}else if(We){if($e){const J=Je(ee);t.texStorage2D(n.TEXTURE_2D,ue,_e,J.width,J.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,we,ee)}else t.texImage2D(n.TEXTURE_2D,0,_e,xe,we,ee);p(M)&&m(Q),re.__version=me.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ve(R,M,H){if(M.image.length!==6)return;const Q=K(R,M),ne=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);const me=i.get(ne);if(ne.version!==me.__version||Q===!0){t.activeTexture(n.TEXTURE0+H);const re=dt.getPrimaries(dt.workingColorSpace),Z=M.colorSpace===js?null:dt.getPrimaries(M.colorSpace),ee=M.colorSpace===js||re===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,we=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let ie=0;ie<6;ie++)!xe&&!we?_e[ie]=_(M.image[ie],!0,r.maxCubemapSize):_e[ie]=we?M.image[ie].image:M.image[ie],_e[ie]=ge(M,_e[ie]);const fe=_e[0],ve=s.convert(M.format,M.colorSpace),We=s.convert(M.type),$e=S(M.internalFormat,ve,We,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,ue=me.__version===void 0||Q===!0,J=ne.dataReady;let Se=E(M,fe);Ne(n.TEXTURE_CUBE_MAP,M);let he;if(xe){F&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,$e,fe.width,fe.height);for(let ie=0;ie<6;ie++){he=_e[ie].mipmaps;for(let oe=0;oe<he.length;oe++){const pe=he[oe];M.format!==Ar?ve!==null?F?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,0,0,pe.width,pe.height,ve,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,$e,pe.width,pe.height,0,pe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,0,0,pe.width,pe.height,ve,We,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,$e,pe.width,pe.height,0,ve,We,pe.data)}}}else{if(he=M.mipmaps,F&&ue){he.length>0&&Se++;const ie=Je(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,$e,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(we){F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,_e[ie].width,_e[ie].height,ve,We,_e[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,$e,_e[ie].width,_e[ie].height,0,ve,We,_e[ie].data);for(let oe=0;oe<he.length;oe++){const Be=he[oe].image[ie].image;F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,0,0,Be.width,Be.height,ve,We,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,$e,Be.width,Be.height,0,ve,We,Be.data)}}else{F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ve,We,_e[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,$e,ve,We,_e[ie]);for(let oe=0;oe<he.length;oe++){const pe=he[oe];F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,0,0,ve,We,pe.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,$e,ve,We,pe.image[ie])}}}p(M)&&m(n.TEXTURE_CUBE_MAP),me.__version=ne.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function De(R,M,H,Q,ne,me){const re=s.convert(H.format,H.colorSpace),Z=s.convert(H.type),ee=S(H.internalFormat,re,Z,H.normalized,H.colorSpace),xe=i.get(M),we=i.get(H);if(we.__renderTarget=M,!xe.__hasExternalTextures){const _e=Math.max(1,M.width>>me),fe=Math.max(1,M.height>>me);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,me,ee,_e,fe,M.depth,0,re,Z,null):t.texImage2D(ne,me,ee,_e,fe,0,re,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ye(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ne,we.__webglTexture,0,Ze(M)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ne,we.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(R,M,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const Q=M.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,me=w(M.stencilBuffer,ne),re=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ye(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze(M),me,M.width,M.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze(M),me,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,me,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,R)}else{const Q=M.textures;for(let ne=0;ne<Q.length;ne++){const me=Q[ne],re=s.convert(me.format,me.colorSpace),Z=s.convert(me.type),ee=S(me.internalFormat,re,Z,me.normalized,me.colorSpace);Ye(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze(M),ee,M.width,M.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze(M),ee,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ee,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(R,M,H){const Q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(M.depthTexture);if(ne.__renderTarget=M,(!ne.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,M.depthTexture);const xe=s.convert(M.depthTexture.format),we=s.convert(M.depthTexture.type);let _e;M.depthTexture.format===Cs?_e=n.DEPTH_COMPONENT24:M.depthTexture.format===Wo&&(_e=n.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,_e,M.width,M.height,0,xe,we,null)}}else O(M.depthTexture,0);const me=ne.__webglTexture,re=Ze(M),Z=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,ee=M.depthTexture.format===Wo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Cs)Ye(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Z,me,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,ee,Z,me,0);else if(M.depthTexture.format===Wo)Ye(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Z,me,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,ee,Z,me,0);else throw new Error("Unknown depthTexture format")}function Ge(R){const M=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=Q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let Q=0;Q<6;Q++)Ae(M.__webglFramebuffer[Q],R,Q);else{const Q=R.texture.mipmaps;Q&&Q.length>0?Ae(M.__webglFramebuffer[0],R,0):Ae(M.__webglFramebuffer,R,0)}else if(H){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),it(M.__webglDepthbuffer[Q],R,!1);else{const ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,me)}}else{const Q=R.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),it(M.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(R,M,H){const Q=i.get(R);M!==void 0&&De(Q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ge(R)}function He(R){const M=R.texture,H=i.get(R),Q=i.get(M);R.addEventListener("dispose",y);const ne=R.textures,me=R.isWebGLCubeRenderTarget===!0,re=ne.length>1;if(re||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,o.memory.textures++),me){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let ee=0;ee<M.mipmaps.length;ee++)H.__webglFramebuffer[Z][ee]=n.createFramebuffer()}else H.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)H.__webglFramebuffer[Z]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(re)for(let Z=0,ee=ne.length;Z<ee;Z++){const xe=i.get(ne[Z]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&Ye(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<ne.length;Z++){const ee=ne[Z];H.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);const xe=s.convert(ee.format,ee.colorSpace),we=s.convert(ee.type),_e=S(ee.internalFormat,xe,we,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),fe=Ze(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,_e,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),it(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)De(H.__webglFramebuffer[Z][ee],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else De(H.__webglFramebuffer[Z],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(M)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Z=0,ee=ne.length;Z<ee;Z++){const xe=ne[Z],we=i.get(xe);let _e=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,we.__webglTexture),Ne(_e,xe),De(H.__webglFramebuffer,R,xe,n.COLOR_ATTACHMENT0+Z,_e,0),p(xe)&&m(_e)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,Q.__webglTexture),Ne(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)De(H.__webglFramebuffer[ee],R,M,n.COLOR_ATTACHMENT0,Z,ee);else De(H.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,Z,0);p(M)&&m(Z),t.unbindTexture()}R.depthBuffer&&Ge(R)}function $(R){const M=R.textures;for(let H=0,Q=M.length;H<Q;H++){const ne=M[H];if(p(ne)){const me=x(R),re=i.get(ne).__webglTexture;t.bindTexture(me,re),m(me),t.unbindTexture()}}}const ut=[],Ht=[];function B(R){if(R.samples>0){if(Ye(R)===!1){const M=R.textures,H=R.width,Q=R.height;let ne=n.COLOR_BUFFER_BIT;const me=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(R),Z=M.length>1;if(Z)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const ee=R.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[xe]);const we=i.get(M[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,H,Q,0,0,H,Q,ne,n.NEAREST),l===!0&&(ut.length=0,Ht.length=0,ut.push(n.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ut.push(me),Ht.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ht)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,re.__webglColorRenderbuffer[xe]);const we=i.get(M[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ze(R){return Math.min(r.maxSamples,R.samples)}function Ye(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ft(R){const M=o.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function ge(R,M){const H=R.colorSpace,Q=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Nd&&H!==js&&(dt.getTransfer(H)===Et?(Q!==Ar||ne!==zi)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",H)),M}function Je(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=W,this.getTextureUnits=z,this.setTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=P,this.setTextureCube=te,this.rebindTextures=tt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function XD(n,e){function t(i,r=js){let s;const o=dt.getTransfer(r);if(i===zi)return n.UNSIGNED_BYTE;if(i===s0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===o0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tE)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nE)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===JM)return n.BYTE;if(i===eE)return n.SHORT;if(i===cc)return n.UNSIGNED_SHORT;if(i===r0)return n.INT;if(i===Zr)return n.UNSIGNED_INT;if(i===Hr)return n.FLOAT;if(i===As)return n.HALF_FLOAT;if(i===iE)return n.ALPHA;if(i===rE)return n.RGB;if(i===Ar)return n.RGBA;if(i===Cs)return n.DEPTH_COMPONENT;if(i===Wo)return n.DEPTH_STENCIL;if(i===sE)return n.RED;if(i===a0)return n.RED_INTEGER;if(i===aa)return n.RG;if(i===l0)return n.RG_INTEGER;if(i===u0)return n.RGBA_INTEGER;if(i===Gf||i===Wf||i===Xf||i===jf)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zm||i===Qm||i===Jm||i===e_)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===e_)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===t_||i===n_||i===i_||i===r_||i===s_||i===Ld||i===o_)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===t_||i===n_)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===i_)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===r_)return s.COMPRESSED_R11_EAC;if(i===s_)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ld)return s.COMPRESSED_RG11_EAC;if(i===o_)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===a_||i===l_||i===u_||i===c_||i===f_||i===d_||i===h_||i===p_||i===m_||i===__||i===g_||i===v_||i===x_||i===y_)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===a_)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===l_)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===u_)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===c_)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===f_)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===d_)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===h_)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===p_)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===m_)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===__)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===g_)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===v_)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===x_)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===y_)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===S_||i===M_||i===E_)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===S_)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===M_)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===E_)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===T_||i===w_||i===Dd||i===A_)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===T_)return s.COMPRESSED_RED_RGTC1_EXT;if(i===w_)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===A_)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const jD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $D{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new pE(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Jr({vertexShader:jD,fragmentShader:YD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qr(new lh(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qD extends ma{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,h=null,g=null;const v=typeof XRWebGLBinding<"u",_=new $D,p={},m=t.getContextAttributes();let x=null,S=null;const w=[],E=[],T=new xt;let y=null;const C=new Oi;C.viewport=new en;const b=new Oi;b.viewport=new en;const L=[C,b],N=new i2;let W=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=w[K];return ae===void 0&&(ae=new ip,w[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=w[K];return ae===void 0&&(ae=new ip,w[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=w[K];return ae===void 0&&(ae=new ip,w[K]=ae),ae.getHandSpace()};function D(K){const ae=E.indexOf(K.inputSource);if(ae===-1)return;const le=w[ae];le!==void 0&&(le.update(K.inputSource,K.frame,u||o),le.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",U);for(let K=0;K<w.length;K++){const ae=E[K];ae!==null&&(E[K]=null,w[K].disconnect(ae))}W=null,z=null,_.reset();for(const K in p)delete p[K];e.setRenderTarget(x),h=null,f=null,d=null,r=null,S=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",k),r.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,be=null,Ve=null;m.depth&&(Ve=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?Wo:Cs,be=m.stencil?fc:Zr);const De={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new $r(f.textureWidth,f.textureHeight,{format:Ar,type:zi,depthTexture:new Dl(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new $r(h.framebufferWidth,h.framebufferHeight,{format:Ar,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function U(K){for(let ae=0;ae<K.removed.length;ae++){const le=K.removed[ae],be=E.indexOf(le);be>=0&&(E[be]=null,w[be].disconnect(le))}for(let ae=0;ae<K.added.length;ae++){const le=K.added[ae];let be=E.indexOf(le);if(be===-1){for(let De=0;De<w.length;De++)if(De>=E.length){E.push(le),be=De;break}else if(E[De]===null){E[De]=le,be=De;break}if(be===-1)break}const Ve=w[be];Ve&&Ve.connect(le)}}const O=new Y,G=new Y;function P(K,ae,le){O.setFromMatrixPosition(ae.matrixWorld),G.setFromMatrixPosition(le.matrixWorld);const be=O.distanceTo(G),Ve=ae.projectionMatrix.elements,De=le.projectionMatrix.elements,it=Ve[14]/(Ve[10]-1),Ae=Ve[14]/(Ve[10]+1),Ge=(Ve[9]+1)/Ve[5],tt=(Ve[9]-1)/Ve[5],He=(Ve[8]-1)/Ve[0],$=(De[8]+1)/De[0],ut=it*He,Ht=it*$,B=be/(-He+$),Ze=B*-He;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ze),K.translateZ(B),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ve[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ye=it+B,ft=Ae+B,ge=ut-Ze,Je=Ht+(be-Ze),R=Ge*Ae/ft*Ye,M=tt*Ae/ft*Ye;K.projectionMatrix.makePerspective(ge,Je,R,M,Ye,ft),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ae=K.near,le=K.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(le=_.depthFar)),N.near=b.near=C.near=ae,N.far=b.far=C.far=le,(W!==N.near||z!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),W=N.near,z=N.far),N.layers.mask=K.layers.mask|6,C.layers.mask=N.layers.mask&-5,b.layers.mask=N.layers.mask&-3;const be=K.parent,Ve=N.cameras;te(N,be);for(let De=0;De<Ve.length;De++)te(Ve[De],be);Ve.length===2?P(N,C,b):N.projectionMatrix.copy(C.projectionMatrix),ce(K,N,be)};function ce(K,ae,le){le===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=b_*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(K){return p[K]};let Fe=null;function Ce(K,ae){if(c=ae.getViewerPose(u||o),g=ae,c!==null){const le=c.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let be=!1;le.length!==N.cameras.length&&(N.cameras.length=0,be=!0);for(let Ae=0;Ae<le.length;Ae++){const Ge=le[Ae];let tt=null;if(h!==null)tt=h.getViewport(Ge);else{const $=d.getViewSubImage(f,Ge);tt=$.viewport,Ae===0&&(e.setRenderTargetTextures(S,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(S))}let He=L[Ae];He===void 0&&(He=new Oi,He.layers.enable(Ae),He.viewport=new en,L[Ae]=He),He.matrix.fromArray(Ge.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ge.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(tt.x,tt.y,tt.width,tt.height),Ae===0&&(N.matrix.copy(He.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),be===!0&&N.cameras.push(He)}const Ve=r.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Ae=d.getDepthInformation(le[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(Ae,r.renderState)}if(Ve&&Ve.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Ae=0;Ae<le.length;Ae++){const Ge=le[Ae].camera;if(Ge){let tt=p[Ge];tt||(tt=new pE,p[Ge]=tt);const He=d.getCameraImage(Ge);tt.sourceTexture=He}}}}for(let le=0;le<w.length;le++){const be=E[le],Ve=w[le];be!==null&&Ve!==void 0&&Ve.update(be,ae,u||o)}Fe&&Fe(K,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Ne=new vE;Ne.setAnimationLoop(Ce),this.setAnimationLoop=function(K){Fe=K},this.dispose=function(){}}}const KD=new qt,wE=new qe;wE.set(-1,0,0,0,1,0,0,0,1);function ZD(n,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,mE(n)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,m,x,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(_,p):p.isMeshLambertMaterial?(s(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(_,p),d(_,p)):p.isMeshPhongMaterial?(s(_,p),c(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(_,p),f(_,p),p.isMeshPhysicalMaterial&&h(_,p,S)):p.isMeshMatcapMaterial?(s(_,p),g(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),v(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,m,x):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Ci&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Ci&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const m=e.get(p),x=m.envMap,S=m.envMapRotation;x&&(_.envMap.value=x,_.envMapRotation.value.setFromMatrix4(KD.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(wE),_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,m,x){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*m,_.scale.value=x*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function h(_,p,m){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ci&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=m.texture,_.transmissionSamplerSize.value.set(m.width,m.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,p){p.matcap&&(_.matcap.value=p.matcap)}function v(_,p){const m=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(m.matrixWorld),_.nearDistance.value=m.shadow.camera.near,_.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QD(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){const S=x.program;i.uniformBlockBinding(m,S)}function u(m,x){let S=r[m.id];S===void 0&&(g(m),S=c(m),r[m.id]=S,m.addEventListener("dispose",_));const w=x.program;i.updateUBOMapping(m,w);const E=e.render.frame;s[m.id]!==E&&(f(m),s[m.id]=E)}function c(m){const x=d();m.__bindingPointIndex=x;const S=n.createBuffer(),w=m.__size,E=m.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const x=r[m.id],S=m.uniforms,w=m.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,T=S.length;E<T;E++){const y=Array.isArray(S[E])?S[E]:[S[E]];for(let C=0,b=y.length;C<b;C++){const L=y[C];if(h(L,E,C,w)===!0){const N=L.__offset,W=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let D=0;D<W.length;D++){const k=W[D],U=v(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,N+z,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):ArrayBuffer.isView(k)?L.__data.set(new k.constructor(k.buffer,k.byteOffset,L.__data.length)):(k.toArray(L.__data,z),z+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(m,x,S,w){const E=m.value,T=x+"_"+S;if(w[T]===void 0)return typeof E=="number"||typeof E=="boolean"?w[T]=E:ArrayBuffer.isView(E)?w[T]=E.slice():w[T]=E.clone(),!0;{const y=w[T];if(typeof E=="number"||typeof E=="boolean"){if(y!==E)return w[T]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(y.equals(E)===!1)return y.copy(E),!0}}return!1}function g(m){const x=m.uniforms;let S=0;const w=16;for(let T=0,y=x.length;T<y;T++){const C=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,L=C.length;b<L;b++){const N=C[b],W=Array.isArray(N.value)?N.value:[N.value];for(let z=0,D=W.length;z<D;z++){const k=W[z],U=v(k),O=S%w,G=O%U.boundary,P=O+G;S+=G,P!==0&&w-P<U.storage&&(S+=w-P),N.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=U.storage}}}const E=S%w;return E>0&&(S+=w-E),m.__size=S,m.__cache={},this}function v(m){const x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",m),x}function _(m){const x=m.target;x.removeEventListener("dispose",_);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const m in r)n.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}const JD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ir=null;function eN(){return Ir===null&&(Ir=new kb(JD,16,16,aa,As),Ir.name="DFG_LUT",Ir.minFilter=ei,Ir.magFilter=ei,Ir.wrapS=ps,Ir.wrapT=ps,Ir.generateMipmaps=!1,Ir.needsUpdate=!0),Ir}class tN{constructor(e={}){const{canvas:t=mb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=zi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=h,_=new Set([u0,l0,a0]),p=new Set([zi,Zr,cc,fc,s0,o0]),m=new Uint32Array(4),x=new Int32Array(4),S=new Y;let w=null,E=null;const T=[],y=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let L=!1,N=null;this._outputColorSpace=nr;let W=0,z=0,D=null,k=-1,U=null;const O=new en,G=new en;let P=null;const te=new vt(0);let ce=0,Fe=t.width,Ce=t.height,Ne=1,K=null,ae=null;const le=new en(0,0,Fe,Ce),be=new en(0,0,Fe,Ce);let Ve=!1;const De=new m0;let it=!1,Ae=!1;const Ge=new qt,tt=new Y,He=new en,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Ht(){return D===null?Ne:1}let B=i;function Ze(A,V){return t.getContext(A,V)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${n0}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",pe,!1),B===null){const V="webgl2";if(B=Ze(V,A),B===null)throw Ze(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw mt("WebGLRenderer: "+A.message),A}let Ye,ft,ge,Je,R,M,H,Q,ne,me,re,Z,ee,xe,we,_e,fe,ve,We,$e,F,ue,J;function Se(){Ye=new eL(B),Ye.init(),F=new XD(B,Ye),ft=new j3(B,Ye,e,F),ge=new GD(B,Ye),ft.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),Je=new iL(B),R=new bD,M=new WD(B,Ye,ge,R,ft,F,Je),H=new J3(b),Q=new a2(B),ue=new W3(B,Q),ne=new tL(B,Q,Je,ue),me=new sL(B,ne,Q,ue,Je),ve=new rL(B,ft,M),we=new Y3(R),re=new RD(b,H,Ye,ft,ue,we),Z=new ZD(b,R),ee=new LD,xe=new OD(Ye),fe=new G3(b,H,ge,me,g,l),_e=new HD(b,me,ft),J=new QD(B,Je,ft,ge),We=new X3(B,Ye,Je),$e=new nL(B,Ye,Je),Je.programs=re.programs,b.capabilities=ft,b.extensions=Ye,b.properties=R,b.renderLists=ee,b.shadowMap=_e,b.state=ge,b.info=Je}Se(),v!==zi&&(C=new aL(v,t.width,t.height,r,s));const he=new qD(b,B);this.xr=he,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(A){A!==void 0&&(Ne=A,this.setSize(Fe,Ce,!1))},this.getSize=function(A){return A.set(Fe,Ce)},this.setSize=function(A,V,q=!0){if(he.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=A,Ce=V,t.width=Math.floor(A*Ne),t.height=Math.floor(V*Ne),q===!0&&(t.style.width=A+"px",t.style.height=V+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(Fe*Ne,Ce*Ne).floor()},this.setDrawingBufferSize=function(A,V,q){Fe=A,Ce=V,Ne=q,t.width=Math.floor(A*q),t.height=Math.floor(V*q),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(v===zi){mt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){Xe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,V,q,X){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,V,q,X),ge.viewport(O.copy(le).multiplyScalar(Ne).round())},this.getScissor=function(A){return A.copy(be)},this.setScissor=function(A,V,q,X){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,V,q,X),ge.scissor(G.copy(be).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(A){ge.setScissorTest(Ve=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,q=!0){let X=0;if(A){let j=!1;if(D!==null){const ye=D.texture.format;j=_.has(ye)}if(j){const ye=D.texture.type,Me=p.has(ye),Te=fe.getClearColor(),Ue=fe.getClearAlpha(),Oe=Te.r,Qe=Te.g,rt=Te.b;Me?(m[0]=Oe,m[1]=Qe,m[2]=rt,m[3]=Ue,B.clearBufferuiv(B.COLOR,0,m)):(x[0]=Oe,x[1]=Qe,x[2]=rt,x[3]=Ue,B.clearBufferiv(B.COLOR,0,x))}else X|=B.COLOR_BUFFER_BIT}V&&(X|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),fe.dispose(),ee.dispose(),xe.dispose(),R.dispose(),H.dispose(),me.dispose(),ue.dispose(),J.dispose(),re.dispose(),he.dispose(),he.removeEventListener("sessionstart",ot),he.removeEventListener("sessionend",kt),Bt.stop()};function ie(A){A.preventDefault(),px("WebGLRenderer: Context Lost."),L=!0}function oe(){px("WebGLRenderer: Context Restored."),L=!1;const A=Je.autoReset,V=_e.enabled,q=_e.autoUpdate,X=_e.needsUpdate,j=_e.type;Se(),Je.autoReset=A,_e.enabled=V,_e.autoUpdate=q,_e.needsUpdate=X,_e.type=j}function pe(A){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Be(A){const V=A.target;V.removeEventListener("dispose",Be),se(V)}function se(A){ze(A),R.remove(A)}function ze(A){const V=R.get(A).programs;V!==void 0&&(V.forEach(function(q){re.releaseProgram(q)}),A.isShaderMaterial&&re.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,q,X,j,ye){V===null&&(V=$);const Me=j.isMesh&&j.matrixWorld.determinant()<0,Te=An(A,V,q,X,j);ge.setMaterial(X,Me);let Ue=q.index,Oe=1;if(X.wireframe===!0){if(Ue=ne.getWireframeAttribute(q),Ue===void 0)return;Oe=2}const Qe=q.drawRange,rt=q.attributes.position;let ke=Qe.start*Oe,wt=(Qe.start+Qe.count)*Oe;ye!==null&&(ke=Math.max(ke,ye.start*Oe),wt=Math.min(wt,(ye.start+ye.count)*Oe)),Ue!==null?(ke=Math.max(ke,0),wt=Math.min(wt,Ue.count)):rt!=null&&(ke=Math.max(ke,0),wt=Math.min(wt,rt.count));const rn=wt-ke;if(rn<0||rn===1/0)return;ue.setup(j,X,Te,q,Ue);let Zt,Ct=We;if(Ue!==null&&(Zt=Q.get(Ue),Ct=$e,Ct.setIndex(Zt)),j.isMesh)X.wireframe===!0?(ge.setLineWidth(X.wireframeLinewidth*Ht()),Ct.setMode(B.LINES)):Ct.setMode(B.TRIANGLES);else if(j.isLine){let Hn=X.linewidth;Hn===void 0&&(Hn=1),ge.setLineWidth(Hn*Ht()),j.isLineSegments?Ct.setMode(B.LINES):j.isLineLoop?Ct.setMode(B.LINE_LOOP):Ct.setMode(B.LINE_STRIP)}else j.isPoints?Ct.setMode(B.POINTS):j.isSprite&&Ct.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))Ct.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Hn=j._multiDrawStarts,Re=j._multiDrawCounts,Pi=j._multiDrawCount,_t=Ue?Q.get(Ue).bytesPerElement:1,Ji=R.get(X).currentProgram.getUniforms();for(let Lr=0;Lr<Pi;Lr++)Ji.setValue(B,"_gl_DrawID",Lr),Ct.render(Hn[Lr]/_t,Re[Lr])}else if(j.isInstancedMesh)Ct.renderInstances(ke,rn,j.count);else if(q.isInstancedBufferGeometry){const Hn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Re=Math.min(q.instanceCount,Hn);Ct.renderInstances(ke,rn,Re)}else Ct.render(ke,rn)};function Ie(A,V,q){A.transparent===!0&&A.side===cs&&A.forceSinglePass===!1?(A.side=Ci,A.needsUpdate=!0,wn(A,V,q),A.side=vo,A.needsUpdate=!0,wn(A,V,q),A.side=cs):wn(A,V,q)}this.compile=function(A,V,q=null){q===null&&(q=A),E=xe.get(q),E.init(V),y.push(E),q.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),A!==q&&A.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),E.setupLights();const X=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ye=j.material;if(ye)if(Array.isArray(ye))for(let Me=0;Me<ye.length;Me++){const Te=ye[Me];Ie(Te,q,j),X.add(Te)}else Ie(ye,q,j),X.add(ye)}),E=y.pop(),X},this.compileAsync=function(A,V,q=null){const X=this.compile(A,V,q);return new Promise(j=>{function ye(){if(X.forEach(function(Me){R.get(Me).currentProgram.isReady()&&X.delete(Me)}),X.size===0){j(A);return}setTimeout(ye,10)}Ye.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let je=null;function fn(A){je&&je(A)}function ot(){Bt.stop()}function kt(){Bt.start()}const Bt=new vE;Bt.setAnimationLoop(fn),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(A){je=A,he.setAnimationLoop(A),A===null?Bt.stop():Bt.start()},he.addEventListener("sessionstart",ot),he.addEventListener("sessionend",kt),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(A,V);const q=he.enabled===!0&&he.isPresenting===!0,X=C!==null&&(D===null||q)&&C.begin(b,D);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(V),V=he.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,V,D),E=xe.get(A,y.length),E.init(V),E.state.textureUnits=M.getTextureUnits(),y.push(E),Ge.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),De.setFromProjectionMatrix(Ge,Gr,V.reversedDepth),Ae=this.localClippingEnabled,it=we.init(this.clippingPlanes,Ae),w=ee.get(A,T.length),w.init(),T.push(w),he.enabled===!0&&he.isPresenting===!0){const Me=b.xr.getDepthSensingMesh();Me!==null&&Lt(Me,V,-1/0,b.sortObjects)}Lt(A,V,0,b.sortObjects),w.finish(),b.sortObjects===!0&&w.sort(K,ae),ut=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ut&&fe.addToRenderList(w,A),this.info.render.frame++,it===!0&&we.beginShadows();const j=E.state.shadowsArray;if(_e.render(j,A,V),it===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&C.hasRenderPass())===!1){const Me=w.opaque,Te=w.transmissive;if(E.setupLights(),V.isArrayCamera){const Ue=V.cameras;if(Te.length>0)for(let Oe=0,Qe=Ue.length;Oe<Qe;Oe++){const rt=Ue[Oe];yt(Me,Te,A,rt)}ut&&fe.render(A);for(let Oe=0,Qe=Ue.length;Oe<Qe;Oe++){const rt=Ue[Oe];At(w,A,rt,rt.viewport)}}else Te.length>0&&yt(Me,Te,A,V),ut&&fe.render(A),At(w,A,V)}D!==null&&z===0&&(M.updateMultisampleRenderTarget(D),M.updateRenderTargetMipmap(D)),X&&C.end(b),A.isScene===!0&&A.onAfterRender(b,A,V),ue.resetDefaultState(),k=-1,U=null,y.pop(),y.length>0?(E=y[y.length-1],M.setTextureUnits(E.state.textureUnits),it===!0&&we.setGlobalState(b.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?w=T[T.length-1]:w=null,N!==null&&N.renderEnd()};function Lt(A,V,q,X){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||De.intersectsSprite(A)){X&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ge);const Me=me.update(A),Te=A.material;Te.visible&&w.push(A,Me,Te,q,He.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||De.intersectsObject(A))){const Me=me.update(A),Te=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),He.copy(Me.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(Ge)),Array.isArray(Te)){const Ue=Me.groups;for(let Oe=0,Qe=Ue.length;Oe<Qe;Oe++){const rt=Ue[Oe],ke=Te[rt.materialIndex];ke&&ke.visible&&w.push(A,Me,ke,q,He.z,rt)}}else Te.visible&&w.push(A,Me,Te,q,He.z,null)}}const ye=A.children;for(let Me=0,Te=ye.length;Me<Te;Me++)Lt(ye[Me],V,q,X)}function At(A,V,q,X){const{opaque:j,transmissive:ye,transparent:Me}=A;E.setupLightsView(q),it===!0&&we.setGlobalState(b.clippingPlanes,q),X&&ge.viewport(O.copy(X)),j.length>0&&Vn(j,V,q),ye.length>0&&Vn(ye,V,q),Me.length>0&&Vn(Me,V,q),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function yt(A,V,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){const ke=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new $r(1,1,{generateMipmaps:!0,type:ke?As:zi,minFilter:Go,samples:Math.max(4,ft.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const ye=E.state.transmissionRenderTarget[X.id],Me=X.viewport||O;ye.setSize(Me.z*b.transmissionResolutionScale,Me.w*b.transmissionResolutionScale);const Te=b.getRenderTarget(),Ue=b.getActiveCubeFace(),Oe=b.getActiveMipmapLevel();b.setRenderTarget(ye),b.getClearColor(te),ce=b.getClearAlpha(),ce<1&&b.setClearColor(16777215,.5),b.clear(),ut&&fe.render(q);const Qe=b.toneMapping;b.toneMapping=Yr;const rt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),it===!0&&we.setGlobalState(b.clippingPlanes,X),Vn(A,q,X),M.updateMultisampleRenderTarget(ye),M.updateRenderTargetMipmap(ye),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let wt=0,rn=V.length;wt<rn;wt++){const Zt=V[wt],{object:Ct,geometry:Hn,material:Re,group:Pi}=Zt;if(Re.side===cs&&Ct.layers.test(X.layers)){const _t=Re.side;Re.side=Ci,Re.needsUpdate=!0,Dt(Ct,q,X,Hn,Re,Pi),Re.side=_t,Re.needsUpdate=!0,ke=!0}}ke===!0&&(M.updateMultisampleRenderTarget(ye),M.updateRenderTargetMipmap(ye))}b.setRenderTarget(Te,Ue,Oe),b.setClearColor(te,ce),rt!==void 0&&(X.viewport=rt),b.toneMapping=Qe}function Vn(A,V,q){const X=V.isScene===!0?V.overrideMaterial:null;for(let j=0,ye=A.length;j<ye;j++){const Me=A[j],{object:Te,geometry:Ue,group:Oe}=Me;let Qe=Me.material;Qe.allowOverride===!0&&X!==null&&(Qe=X),Te.layers.test(q.layers)&&Dt(Te,V,q,Ue,Qe,Oe)}}function Dt(A,V,q,X,j,ye){A.onBeforeRender(b,V,q,X,j,ye),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(b,V,q,X,A,ye),j.transparent===!0&&j.side===cs&&j.forceSinglePass===!1?(j.side=Ci,j.needsUpdate=!0,b.renderBufferDirect(q,V,X,j,A,ye),j.side=vo,j.needsUpdate=!0,b.renderBufferDirect(q,V,X,j,A,ye),j.side=cs):b.renderBufferDirect(q,V,X,j,A,ye),A.onAfterRender(b,V,q,X,j,ye)}function wn(A,V,q){V.isScene!==!0&&(V=$);const X=R.get(A),j=E.state.lights,ye=E.state.shadowsArray,Me=j.state.version,Te=re.getParameters(A,j.state,ye,V,q,E.state.lightProbeGridArray),Ue=re.getProgramCacheKey(Te);let Oe=X.programs;X.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,X.fog=V.fog;const Qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;X.envMap=H.get(A.envMap||X.environment,Qe),X.envMapRotation=X.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",Be),Oe=new Map,X.programs=Oe);let rt=Oe.get(Ue);if(rt!==void 0){if(X.currentProgram===rt&&X.lightsStateVersion===Me)return dn(A,Te),rt}else Te.uniforms=re.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,q,Te),A.onBeforeCompile(Te,b),rt=re.acquireProgram(Te,Ue),Oe.set(Ue,rt),X.uniforms=Te.uniforms;const ke=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=we.uniform),dn(A,Te),X.needsLights=_a(A),X.lightsStateVersion=Me,X.needsLights&&(ke.ambientLightColor.value=j.state.ambient,ke.lightProbe.value=j.state.probe,ke.directionalLights.value=j.state.directional,ke.directionalLightShadows.value=j.state.directionalShadow,ke.spotLights.value=j.state.spot,ke.spotLightShadows.value=j.state.spotShadow,ke.rectAreaLights.value=j.state.rectArea,ke.ltc_1.value=j.state.rectAreaLTC1,ke.ltc_2.value=j.state.rectAreaLTC2,ke.pointLights.value=j.state.point,ke.pointLightShadows.value=j.state.pointShadow,ke.hemisphereLights.value=j.state.hemi,ke.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ke.spotLightMatrix.value=j.state.spotLightMatrix,ke.spotLightMap.value=j.state.spotLightMap,ke.pointShadowMatrix.value=j.state.pointShadowMatrix),X.lightProbeGrid=E.state.lightProbeGridArray.length>0,X.currentProgram=rt,X.uniformsList=null,rt}function bi(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Yf.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function dn(A,V){const q=R.get(A);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function vn(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;S.setFromMatrixPosition(V.matrixWorld);for(let q=0,X=A.length;q<X;q++){const j=A[q];if(j.texture!==null&&j.boundingBox.containsPoint(S))return j}return null}function An(A,V,q,X,j){V.isScene!==!0&&(V=$),M.resetTextureUnits();const ye=V.fog,Me=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?V.environment:null,Te=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:dt.workingColorSpace,Ue=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Oe=H.get(X.envMap||Me,Ue),Qe=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,rt=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ke=!!q.morphAttributes.position,wt=!!q.morphAttributes.normal,rn=!!q.morphAttributes.color;let Zt=Yr;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Zt=b.toneMapping);const Ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Hn=Ct!==void 0?Ct.length:0,Re=R.get(X),Pi=E.state.lights;if(it===!0&&(Ae===!0||A!==U)){const Nt=A===U&&X.id===k;we.setState(X,A,Nt)}let _t=!1;X.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Pi.state.version||Re.outputColorSpace!==Te||j.isBatchedMesh&&Re.batching===!1||!j.isBatchedMesh&&Re.batching===!0||j.isBatchedMesh&&Re.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Re.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Re.instancing===!1||!j.isInstancedMesh&&Re.instancing===!0||j.isSkinnedMesh&&Re.skinning===!1||!j.isSkinnedMesh&&Re.skinning===!0||j.isInstancedMesh&&Re.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Re.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Re.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Re.instancingMorph===!1&&j.morphTexture!==null||Re.envMap!==Oe||X.fog===!0&&Re.fog!==ye||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==we.numPlanes||Re.numIntersection!==we.numIntersection)||Re.vertexAlphas!==Qe||Re.vertexTangents!==rt||Re.morphTargets!==ke||Re.morphNormals!==wt||Re.morphColors!==rn||Re.toneMapping!==Zt||Re.morphTargetsCount!==Hn||!!Re.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Re.__version=X.version);let Ji=Re.currentProgram;_t===!0&&(Ji=wn(X,V,j),N&&X.isNodeMaterial&&N.onUpdateProgram(X,Ji,Re));let Lr=!1,bs=!1,ga=!1;const Rt=Ji.getUniforms(),sn=Re.uniforms;if(ge.useProgram(Ji.program)&&(Lr=!0,bs=!0,ga=!0),X.id!==k&&(k=X.id,bs=!0),Re.needsLights){const Nt=vn(E.state.lightProbeGridArray,j);Re.lightProbeGrid!==Nt&&(Re.lightProbeGrid=Nt,bs=!0)}if(Lr||U!==A){ge.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Rt.setValue(B,"projectionMatrix",A.projectionMatrix),Rt.setValue(B,"viewMatrix",A.matrixWorldInverse);const Ls=Rt.map.cameraPosition;Ls!==void 0&&Ls.setValue(B,tt.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&Rt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Rt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,bs=!0,ga=!0)}if(Re.needsLights&&(Pi.state.directionalShadowMap.length>0&&Rt.setValue(B,"directionalShadowMap",Pi.state.directionalShadowMap,M),Pi.state.spotShadowMap.length>0&&Rt.setValue(B,"spotShadowMap",Pi.state.spotShadowMap,M),Pi.state.pointShadowMap.length>0&&Rt.setValue(B,"pointShadowMap",Pi.state.pointShadowMap,M)),j.isSkinnedMesh){Rt.setOptional(B,j,"bindMatrix"),Rt.setOptional(B,j,"bindMatrixInverse");const Nt=j.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Rt.setValue(B,"boneTexture",Nt.boneTexture,M))}j.isBatchedMesh&&(Rt.setOptional(B,j,"batchingTexture"),Rt.setValue(B,"batchingTexture",j._matricesTexture,M),Rt.setOptional(B,j,"batchingIdTexture"),Rt.setValue(B,"batchingIdTexture",j._indirectTexture,M),Rt.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Rt.setValue(B,"batchingColorTexture",j._colorsTexture,M));const Ps=q.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&ve.update(j,q,Ji),(bs||Re.receiveShadow!==j.receiveShadow)&&(Re.receiveShadow=j.receiveShadow,Rt.setValue(B,"receiveShadow",j.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&V.environment!==null&&(sn.envMapIntensity.value=V.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=eN()),bs){if(Rt.setValue(B,"toneMappingExposure",b.toneMappingExposure),Re.needsLights&&es(sn,ga),ye&&X.fog===!0&&Z.refreshFogUniforms(sn,ye),Z.refreshMaterialUniforms(sn,X,Ne,Ce,E.state.transmissionRenderTarget[A.id]),Re.needsLights&&Re.lightProbeGrid){const Nt=Re.lightProbeGrid;sn.probesSH.value=Nt.texture,sn.probesMin.value.copy(Nt.boundingBox.min),sn.probesMax.value.copy(Nt.boundingBox.max),sn.probesResolution.value.copy(Nt.resolution)}Yf.upload(B,bi(Re),sn,M)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Yf.upload(B,bi(Re),sn,M),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Rt.setValue(B,"center",j.center),Rt.setValue(B,"modelViewMatrix",j.modelViewMatrix),Rt.setValue(B,"normalMatrix",j.normalMatrix),Rt.setValue(B,"modelMatrix",j.matrixWorld),X.uniformsGroups!==void 0){const Nt=X.uniformsGroups;for(let Ls=0,va=Nt.length;Ls<va;Ls++){const D0=Nt[Ls];J.update(D0,Ji),J.bind(D0,Ji)}}return Ji}function es(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function _a(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,V,q){const X=R.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),R.get(A.texture).__webglTexture=V,R.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const q=R.get(A);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0};const Cn=B.createFramebuffer();this.setRenderTarget=function(A,V=0,q=0){D=A,W=V,z=q;let X=null,j=!1,ye=!1;if(A){const Te=R.get(A);if(Te.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(B.FRAMEBUFFER,Te.__webglFramebuffer),O.copy(A.viewport),G.copy(A.scissor),P=A.scissorTest,ge.viewport(O),ge.scissor(G),ge.setScissorTest(P),k=-1;return}else if(Te.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Te.__hasExternalTextures)M.rebindTextures(A,R.get(A.texture).__webglTexture,R.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qe=A.depthTexture;if(Te.__boundDepthTexture!==Qe){if(Qe!==null&&R.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const Ue=A.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ye=!0);const Oe=R.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[V])?X=Oe[V][q]:X=Oe[V],j=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?X=R.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?X=Oe[q]:X=Oe,O.copy(A.viewport),G.copy(A.scissor),P=A.scissorTest}else O.copy(le).multiplyScalar(Ne).floor(),G.copy(be).multiplyScalar(Ne).floor(),P=Ve;if(q!==0&&(X=Cn),ge.bindFramebuffer(B.FRAMEBUFFER,X)&&ge.drawBuffers(A,X),ge.viewport(O),ge.scissor(G),ge.setScissorTest(P),j){const Te=R.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,Te.__webglTexture,q)}else if(ye){const Te=V;for(let Ue=0;Ue<A.textures.length;Ue++){const Oe=R.get(A.textures[Ue]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ue,Oe.__webglTexture,q,Te)}}else if(A!==null&&q!==0){const Te=R.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Te.__webglTexture,q)}k=-1},this.readRenderTargetPixels=function(A,V,q,X,j,ye,Me,Te=0){if(!(A&&A.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ue=Ue[Me]),Ue){ge.bindFramebuffer(B.FRAMEBUFFER,Ue);try{const Oe=A.textures[Te],Qe=Oe.format,rt=Oe.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te),!ft.textureFormatReadable(Qe)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(rt)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-X&&q>=0&&q<=A.height-j&&B.readPixels(V,q,X,j,F.convert(Qe),F.convert(rt),ye)}finally{const Oe=D!==null?R.get(D).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,V,q,X,j,ye,Me,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ue=Ue[Me]),Ue)if(V>=0&&V<=A.width-X&&q>=0&&q<=A.height-j){ge.bindFramebuffer(B.FRAMEBUFFER,Ue);const Oe=A.textures[Te],Qe=Oe.format,rt=Oe.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te),!ft.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ke),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(V,q,X,j,F.convert(Qe),F.convert(rt),0);const wt=D!==null?R.get(D).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,wt);const rn=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await _b(B,rn,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ke),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.deleteBuffer(ke),B.deleteSync(rn),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,q=0){const X=Math.pow(2,-q),j=Math.floor(A.image.width*X),ye=Math.floor(A.image.height*X),Me=V!==null?V.x:0,Te=V!==null?V.y:0;M.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,Me,Te,j,ye),ge.unbindTexture()};const nn=B.createFramebuffer(),Qi=B.createFramebuffer();this.copyTextureToTexture=function(A,V,q=null,X=null,j=0,ye=0){let Me,Te,Ue,Oe,Qe,rt,ke,wt,rn;const Zt=A.isCompressedTexture?A.mipmaps[ye]:A.image;if(q!==null)Me=q.max.x-q.min.x,Te=q.max.y-q.min.y,Ue=q.isBox3?q.max.z-q.min.z:1,Oe=q.min.x,Qe=q.min.y,rt=q.isBox3?q.min.z:0;else{const sn=Math.pow(2,-j);Me=Math.floor(Zt.width*sn),Te=Math.floor(Zt.height*sn),A.isDataArrayTexture?Ue=Zt.depth:A.isData3DTexture?Ue=Math.floor(Zt.depth*sn):Ue=1,Oe=0,Qe=0,rt=0}X!==null?(ke=X.x,wt=X.y,rn=X.z):(ke=0,wt=0,rn=0);const Ct=F.convert(V.format),Hn=F.convert(V.type);let Re;V.isData3DTexture?(M.setTexture3D(V,0),Re=B.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(M.setTexture2DArray(V,0),Re=B.TEXTURE_2D_ARRAY):(M.setTexture2D(V,0),Re=B.TEXTURE_2D),ge.activeTexture(B.TEXTURE0),ge.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),ge.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),ge.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Pi=ge.getParameter(B.UNPACK_ROW_LENGTH),_t=ge.getParameter(B.UNPACK_IMAGE_HEIGHT),Ji=ge.getParameter(B.UNPACK_SKIP_PIXELS),Lr=ge.getParameter(B.UNPACK_SKIP_ROWS),bs=ge.getParameter(B.UNPACK_SKIP_IMAGES);ge.pixelStorei(B.UNPACK_ROW_LENGTH,Zt.width),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Zt.height),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,Oe),ge.pixelStorei(B.UNPACK_SKIP_ROWS,Qe),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,rt);const ga=A.isDataArrayTexture||A.isData3DTexture,Rt=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const sn=R.get(A),Ps=R.get(V),Nt=R.get(sn.__renderTarget),Ls=R.get(Ps.__renderTarget);ge.bindFramebuffer(B.READ_FRAMEBUFFER,Nt.__webglFramebuffer),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let va=0;va<Ue;va++)ga&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,R.get(A).__webglTexture,j,rt+va),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,R.get(V).__webglTexture,ye,rn+va)),B.blitFramebuffer(Oe,Qe,Me,Te,ke,wt,Me,Te,B.DEPTH_BUFFER_BIT,B.NEAREST);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||R.has(A)){const sn=R.get(A),Ps=R.get(V);ge.bindFramebuffer(B.READ_FRAMEBUFFER,nn),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Qi);for(let Nt=0;Nt<Ue;Nt++)ga?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,sn.__webglTexture,j,rt+Nt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,sn.__webglTexture,j),Rt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ps.__webglTexture,ye,rn+Nt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ps.__webglTexture,ye),j!==0?B.blitFramebuffer(Oe,Qe,Me,Te,ke,wt,Me,Te,B.COLOR_BUFFER_BIT,B.NEAREST):Rt?B.copyTexSubImage3D(Re,ye,ke,wt,rn+Nt,Oe,Qe,Me,Te):B.copyTexSubImage2D(Re,ye,ke,wt,Oe,Qe,Me,Te);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Rt?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Re,ye,ke,wt,rn,Me,Te,Ue,Ct,Hn,Zt.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Re,ye,ke,wt,rn,Me,Te,Ue,Ct,Zt.data):B.texSubImage3D(Re,ye,ke,wt,rn,Me,Te,Ue,Ct,Hn,Zt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,ke,wt,Me,Te,Ct,Hn,Zt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,ke,wt,Zt.width,Zt.height,Ct,Zt.data):B.texSubImage2D(B.TEXTURE_2D,ye,ke,wt,Me,Te,Ct,Hn,Zt);ge.pixelStorei(B.UNPACK_ROW_LENGTH,Pi),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,Ji),ge.pixelStorei(B.UNPACK_SKIP_ROWS,Lr),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,bs),ye===0&&V.generateMipmaps&&B.generateMipmap(Re),ge.unbindTexture()},this.initRenderTarget=function(A){R.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){W=0,z=0,D=null,ge.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const nN=[663319,729625,863008,996134,1060643,1125409,1195309,1324582,1394484,1457962,1458221,1528123,1657136,1727298,1790776,1860681,1989951,2059856,2123590,2321997,2455636,2654811,2788450,2987625,3120752,3254391,3388030,3521669,3720844,3854483,3988122,4121761,4255144,5631411,7268279],cy=1,pf=4,iN=35,rN=5,Cp=6,sN=250,oN=.8;function aN(){const n=Ke.useRef(null);return Ke.useEffect(()=>{if(!n.current)return;const e=n.current,t=e.clientWidth,i=e.clientHeight,r=new tN({antialias:!0,alpha:!0});r.setSize(t,i),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.shadowMap.enabled=!0,r.shadowMap.type=WM,r.toneMapping=i0,r.toneMappingExposure=1.3,e.appendChild(r.domElement);const s=new Db,o=new mr,a=300,l=new Float32Array(a*3);for(let z=0;z<a;z++)l[z*3]=(Math.random()-.5)*30,l[z*3+1]=(Math.random()-.5)*30,l[z*3+2]=(Math.random()-.5)*15;o.setAttribute("position",new br(l,3));const u=new dE({color:7268279,size:.045,transparent:!0,opacity:.6,sizeAttenuation:!0}),c=new Hb(o,u);s.add(c);const d=new Oi(42,t/i,.1,100);d.position.set(0,0,18);const f=new t2(7268279,.15);s.add(f);const h=new e2(11206621,1.6);h.position.set(-5,7,10),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),s.add(h);const g=new Fx(1722934,2.5,28);g.position.set(6,-4,8),s.add(g);const v=new Fx(7268279,.9,22);v.position.set(0,-7,-5),s.add(v);const _=new _0(cy,48,48),p=[];for(let z=0;z<iN;z++){const D=new qb({color:nN[z],roughness:.32,metalness:.6}),k=new Qr(_,D);k.castShadow=!0,k.receiveShadow=!0,s.add(k);const U=6,O=new Y((Math.random()-.5)*U,(Math.random()-.5)*U,(Math.random()-.5)*U),G=new Y((Math.random()-.5)*1.2,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2);p.push({mesh:k,pos:O,vel:G})}const m=new r2,x=new xt(-99,-99),S=new Gs(new Y(0,0,1),0),w=new Y;let E=!1;const T=z=>{const D=e.getBoundingClientRect();x.x=(z.clientX-D.left)/D.width*2-1,x.y=-((z.clientY-D.top)/D.height)*2+1,E=!0,m.setFromCamera(x,d),m.ray.intersectPlane(S,w)},y=()=>{E=!1};e.addEventListener("mousemove",T),e.addEventListener("mouseleave",y);const C=new Y,b=new s2;let L;const N=()=>{L=requestAnimationFrame(N);const z=Math.min(b.getDelta(),.05);p.forEach(D=>{if(C.copy(D.pos).negate().multiplyScalar(rN),D.vel.addScaledVector(C,z),E){const k=D.pos.x-w.x,U=D.pos.y-w.y,O=D.pos.z-w.z,G=Math.sqrt(k*k+U*U+O*O);if(G<Cp&&G>.01){const P=Math.pow((Cp-G)/Cp,2)*sN;D.vel.x+=k/G*P*z,D.vel.y+=U/G*P*z,D.vel.z+=O/G*P*z}}p.forEach(k=>{if(k===D)return;const U=D.pos.distanceTo(k.pos),O=cy*2.2;if(U<O&&U>.001){const P=(O-U)*18;C.subVectors(D.pos,k.pos).normalize().multiplyScalar(P),D.vel.addScaledVector(C,z),k.vel.addScaledVector(C,-z)}}),D.vel.multiplyScalar(oN),D.pos.addScaledVector(D.vel,z),["x","y","z"].forEach(k=>{D.pos[k]>pf&&(D.pos[k]=pf,D.vel[k]*=-.5),D.pos[k]<-pf&&(D.pos[k]=-pf,D.vel[k]*=-.5)}),D.mesh.position.copy(D.pos)}),c.rotation.y+=8e-4,c.rotation.x+=3e-4,r.render(s,d)};N();const W=()=>{const z=e.clientWidth,D=e.clientHeight;d.aspect=z/D,d.updateProjectionMatrix(),r.setSize(z,D)};return window.addEventListener("resize",W),()=>{cancelAnimationFrame(L),e.removeEventListener("mousemove",T),e.removeEventListener("mouseleave",y),window.removeEventListener("resize",W),r.dispose(),e.contains(r.domElement)&&e.removeChild(r.domElement)}},[]),I.jsx("div",{ref:n,style:{width:"100%",height:"100%"}})}function lN({words:n}){const[e,t]=Ke.useState(0),[i,r]=Ke.useState(!1);return Ke.useEffect(()=>{const s=setInterval(()=>{r(!0),setTimeout(()=>{t(o=>(o+1)%n.length),r(!1)},700)},2700);return()=>clearInterval(s)},[]),I.jsx("span",{style:{display:"inline-block",transition:"transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)",transform:i?"rotateX(90deg) scale(0.8)":"rotateX(0deg) scale(1)",opacity:i?0:1,transformOrigin:"center bottom",perspective:"600px"},children:n[e]})}function uN(){const n=Ke.useRef(null);Ke.useEffect(()=>{const t=cn.context(()=>{cn.timeline({delay:.5}).fromTo(".hero-badge",{opacity:0,y:10},{opacity:1,y:0,duration:.5,ease:"power2.out"}).fromTo(".hero-name",{opacity:0,y:30},{opacity:1,y:0,duration:.7,ease:"power3.out"},"-=0.2").fromTo(".hero-tagline",{opacity:0,y:20},{opacity:1,y:0,duration:.6,ease:"power2.out"},"-=0.4").fromTo(".hero-cta",{opacity:0,y:15},{opacity:1,y:0,duration:.5,ease:"power2.out"},"-=0.3").fromTo(".hero-stats",{opacity:0,x:30},{opacity:1,x:0,duration:.7,ease:"power3.out",stagger:.1},"-=0.5")},n);return()=>t.revert()},[]);const{personal:e}=pa;return I.jsx("section",{id:"hero",ref:n,className:Gt.hero,children:I.jsxs("div",{className:`${Gt.inner} container`,children:[I.jsxs("div",{className:Gt.left,children:[I.jsxs("h1",{className:`${Gt.greeting} hero-name`,onMouseLeave:()=>{document.querySelectorAll(`.${Gt.magnetLetter}`).forEach(t=>{t.style.transform="translate(0, 0)"})},children:["Hi,I'm".split("").map((t,i)=>I.jsx("span",{className:Gt.magnetLetter,onMouseMove:r=>{const s=r.currentTarget.getBoundingClientRect(),o=s.left+s.width/2,a=s.top+s.height/2,l=(r.clientX-o)/s.width,u=(r.clientY-a)/s.height;r.currentTarget.style.transform=`translate(${l*-40}px, ${u*-40}px)`},onMouseLeave:r=>{r.currentTarget.style.transform="translate(0, 0)"},children:t},i)),I.jsx("a",{className:`${Gt.bracket} hero-name`,onMouseLeave:()=>{document.querySelectorAll(`.${Gt.magnetLetter}`).forEach(t=>{t.style.transform="translate(0, 0)"})},children:"{".split("").map((t,i)=>I.jsx("span",{className:Gt.magnetLetter,onMouseMove:r=>{const s=r.currentTarget.getBoundingClientRect(),o=s.left+s.width/2,a=s.top+s.height/2,l=(r.clientX-o)/s.width,u=(r.clientY-a)/s.height;r.currentTarget.style.transform=`translate(${l*-40}px, ${u*-40}px)`},onMouseLeave:r=>{r.currentTarget.style.transform="translate(0, 0)"},children:t},i))})]}),I.jsxs("h1",{className:`${Gt.name} hero-name`,onMouseLeave:()=>{document.querySelectorAll(`.${Gt.magnetLetter}`).forEach(t=>{t.style.transform="translate(0, 0)"})},children:["Debarghya".split("").map((t,i)=>I.jsx("span",{className:Gt.magnetLetter,onMouseMove:r=>{const s=r.currentTarget.getBoundingClientRect(),o=s.left+s.width/2,a=s.top+s.height/2,l=(r.clientX-o)/s.width,u=(r.clientY-a)/s.height;r.currentTarget.style.transform=`translate(${l*-40}px, ${u*-40}px)`},onMouseLeave:r=>{r.currentTarget.style.transform="translate(0, 0)"},children:t},i)),I.jsx("br",{}),"Datta".split("").map((t,i)=>I.jsx("span",{className:Gt.magnetLetter,onMouseMove:r=>{const s=r.currentTarget.getBoundingClientRect(),o=s.left+s.width/2,a=s.top+s.height/2,l=(r.clientX-o)/s.width,u=(r.clientY-a)/s.height;r.currentTarget.style.transform=`translate(${l*-40}px, ${u*-40}px)`},onMouseLeave:r=>{r.currentTarget.style.transform="translate(0, 0)"},children:t},i))]}),I.jsxs("p",{className:`${Gt.role} hero-name`,style:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:[I.jsx(lN,{words:["FULL","MERN"]}),"-STACK DEVELOPER".split("").map((t,i)=>I.jsx("span",{className:Gt.magnetLetter,onMouseMove:r=>{const s=r.currentTarget.getBoundingClientRect(),o=s.left+s.width/2,a=s.top+s.height/2,l=(r.clientX-o)/s.width,u=(r.clientY-a)/s.height;r.currentTarget.style.transform=`translate(${l*-60}px, ${u*-60}px)`},onMouseLeave:r=>{r.currentTarget.style.transform="translate(0, 0)"},children:t===" "?" ":t},i))]}),I.jsx("p",{className:`${Gt.tagline} hero-tagline`,children:e.tagline.split(" ").map((t,i,r)=>I.jsxs("span",{style:{display:"inline-block",whiteSpace:"nowrap"},children:[t.split("").map((s,o)=>I.jsx("span",{className:Gt.magnetLetter,onMouseMove:a=>{const l=a.currentTarget.getBoundingClientRect(),u=l.left+l.width/2,c=l.top+l.height/2,d=a.clientX-u,f=a.clientY-c,h=Math.sqrt(d*d+f*f)||1,g=60;if(h<g){const v=(g-h)/g;a.currentTarget.style.transform=`translate(${-d/h*v*150}px, ${-f/h*v*150}px)`}},onMouseLeave:a=>{a.currentTarget.style.transform="translate(0, 0)"},children:s},o)),i<r.length-1&&" "]},i))}),I.jsx("a",{className:`${Gt.bracket2} hero-name`,onMouseLeave:()=>{document.querySelectorAll(`.${Gt.magnetLetter}`).forEach(t=>{t.style.transform="translate(0, 0)"})},children:"};".split("").map((t,i)=>I.jsx("span",{className:Gt.magnetLetter,onMouseMove:r=>{const s=r.currentTarget.getBoundingClientRect(),o=s.left+s.width/2,a=s.top+s.height/2,l=(r.clientX-o)/s.width,u=(r.clientY-a)/s.height;r.currentTarget.style.transform=`translate(${l*-40}px, ${u*-40}px)`},onMouseLeave:r=>{r.currentTarget.style.transform="translate(0, 0)"},children:t},i))})]}),I.jsxs("div",{className:Gt.right,children:[I.jsx("div",{className:Gt.threeCanvas,children:I.jsx(aN,{})}),I.jsx("p",{className:Gt.canvasHint,children:"hover to disturb"})]})]})})}function cN(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function fN(n,e,t){return e&&cN(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fn,$f,Vi,Js,eo,pl,AE,Uo,ml,CE,ms,Sr,RE,bE=function(){return Fn||typeof window<"u"&&(Fn=window.gsap)&&Fn.registerPlugin&&Fn},PE=1,nl=[],lt=[],qr=[],Pu=Date.now,I_=function(e,t){return t},dN=function(){var e=ml.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,lt),r.push.apply(r,qr),lt=i,qr=r,I_=function(o,a){return t[o](a)}},fo=function(e,t){return~qr.indexOf(e)&&qr[qr.indexOf(e)+1][t]},Lu=function(e){return!!~CE.indexOf(e)},ri=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},ii=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},mf="scrollLeft",_f="scrollTop",U_=function(){return ms&&ms.isPressed||lt.cache++},Fd=function(e,t){var i=function r(s){if(s||s===0){PE&&(Vi.history.scrollRestoration="manual");var o=ms&&ms.isPressed;s=r.v=Math.round(s)||(ms&&ms.iOS?1:0),e(s),r.cacheID=lt.cache,o&&I_("ss",s)}else(t||lt.cache!==r.cacheID||I_("ref"))&&(r.cacheID=lt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ci={s:mf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Fd(function(n){return arguments.length?Vi.scrollTo(n,Sn.sc()):Vi.pageXOffset||Js[mf]||eo[mf]||pl[mf]||0})},Sn={s:_f,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ci,sc:Fd(function(n){return arguments.length?Vi.scrollTo(ci.sc(),n):Vi.pageYOffset||Js[_f]||eo[_f]||pl[_f]||0})},_i=function(e,t){return(t&&t._ctx&&t._ctx.selector||Fn.utils.toArray)(e)[0]||(typeof e=="string"&&Fn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},hN=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},yo=function(e,t){var i=t.s,r=t.sc;Lu(e)&&(e=Js.scrollingElement||eo);var s=lt.indexOf(e),o=r===Sn.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+o]||ri(e,"scroll",U_);var a=lt[s+o],l=a||(lt[s+o]=Fd(fo(e,i),!0)||(Lu(e)?r:Fd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=Fn.getProperty(e,"scrollBehavior")==="smooth"),l},F_=function(e,t,i){var r=e,s=e,o=Pu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,v){var _=Pu();v||_-o>l?(s=r,r=g,a=o,o=_):i?r+=g:r=s+(g-s)/(_-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(g){var v=a,_=s,p=Pu();return(g||g===0)&&g!==r&&c(g),o===a||p-a>u?0:(r+(i?_:-_))/((i?p:o)-v)*1e3};return{update:c,reset:d,getVelocity:f}},iu=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},fy=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},LE=function(){ml=Fn.core.globals().ScrollTrigger,ml&&ml.core&&dN()},DE=function(e){return Fn=e||bE(),!$f&&Fn&&typeof document<"u"&&document.body&&(Vi=window,Js=document,eo=Js.documentElement,pl=Js.body,CE=[Vi,Js,eo,pl],Fn.utils.clamp,RE=Fn.core.context||function(){},Uo="onpointerenter"in pl?"pointer":"mouse",AE=un.isTouch=Vi.matchMedia&&Vi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Vi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Sr=un.eventTypes=("ontouchstart"in eo?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in eo?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return PE=0},500),$f=1),ml||LE(),$f};ci.op=Sn;lt.cache=0;var un=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){$f||DE(Fn)||console.warn("Please gsap.registerPlugin(Observer)"),ml||LE();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,g=i.wheelSpeed,v=i.event,_=i.onDragStart,p=i.onDragEnd,m=i.onDrag,x=i.onPress,S=i.onRelease,w=i.onRight,E=i.onLeft,T=i.onUp,y=i.onDown,C=i.onChangeX,b=i.onChangeY,L=i.onChange,N=i.onToggleX,W=i.onToggleY,z=i.onHover,D=i.onHoverEnd,k=i.onMove,U=i.ignoreCheck,O=i.isNormalizer,G=i.onGestureStart,P=i.onGestureEnd,te=i.onWheel,ce=i.onEnable,Fe=i.onDisable,Ce=i.onClick,Ne=i.scrollSpeed,K=i.capture,ae=i.allowClicks,le=i.lockAxis,be=i.onLockAxis;this.target=a=_i(a)||eo,this.vars=i,h&&(h=Fn.utils.toArray(h)),r=r||1e-9,s=s||0,g=g||1,Ne=Ne||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Vi.getComputedStyle(pl).lineHeight)||22);var Ve,De,it,Ae,Ge,tt,He,$=this,ut=0,Ht=0,B=i.passive||!c&&i.passive!==!1,Ze=yo(a,ci),Ye=yo(a,Sn),ft=Ze(),ge=Ye(),Je=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Sr[0]==="pointerdown",R=Lu(a),M=a.ownerDocument||Js,H=[0,0,0],Q=[0,0,0],ne=0,me=function(){return ne=Pu()},re=function(pe,Be){return($.event=pe)&&h&&hN(pe.target,h)||Be&&Je&&pe.pointerType!=="touch"||U&&U(pe,Be)},Z=function(){$._vx.reset(),$._vy.reset(),De.pause(),d&&d($)},ee=function(){var pe=$.deltaX=fy(H),Be=$.deltaY=fy(Q),se=Math.abs(pe)>=r,ze=Math.abs(Be)>=r;L&&(se||ze)&&L($,pe,Be,H,Q),se&&(w&&$.deltaX>0&&w($),E&&$.deltaX<0&&E($),C&&C($),N&&$.deltaX<0!=ut<0&&N($),ut=$.deltaX,H[0]=H[1]=H[2]=0),ze&&(y&&$.deltaY>0&&y($),T&&$.deltaY<0&&T($),b&&b($),W&&$.deltaY<0!=Ht<0&&W($),Ht=$.deltaY,Q[0]=Q[1]=Q[2]=0),(Ae||it)&&(k&&k($),it&&(_&&it===1&&_($),m&&m($),it=0),Ae=!1),tt&&!(tt=!1)&&be&&be($),Ge&&(te($),Ge=!1),Ve=0},xe=function(pe,Be,se){H[se]+=pe,Q[se]+=Be,$._vx.update(pe),$._vy.update(Be),u?Ve||(Ve=requestAnimationFrame(ee)):ee()},we=function(pe,Be){le&&!He&&($.axis=He=Math.abs(pe)>Math.abs(Be)?"x":"y",tt=!0),He!=="y"&&(H[2]+=pe,$._vx.update(pe,!0)),He!=="x"&&(Q[2]+=Be,$._vy.update(Be,!0)),u?Ve||(Ve=requestAnimationFrame(ee)):ee()},_e=function(pe){if(!re(pe,1)){pe=iu(pe,c);var Be=pe.clientX,se=pe.clientY,ze=Be-$.x,Ie=se-$.y,je=$.isDragging;$.x=Be,$.y=se,(je||(ze||Ie)&&(Math.abs($.startX-Be)>=s||Math.abs($.startY-se)>=s))&&(it||(it=je?2:1),je||($.isDragging=!0),we(ze,Ie))}},fe=$.onPress=function(oe){re(oe,1)||oe&&oe.button||($.axis=He=null,De.pause(),$.isPressed=!0,oe=iu(oe),ut=Ht=0,$.startX=$.x=oe.clientX,$.startY=$.y=oe.clientY,$._vx.reset(),$._vy.reset(),ri(O?a:M,Sr[1],_e,B,!0),$.deltaX=$.deltaY=0,x&&x($))},ve=$.onRelease=function(oe){if(!re(oe,1)){ii(O?a:M,Sr[1],_e,!0);var pe=!isNaN($.y-$.startY),Be=$.isDragging,se=Be&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),ze=iu(oe);!se&&pe&&($._vx.reset(),$._vy.reset(),c&&ae&&Fn.delayedCall(.08,function(){if(Pu()-ne>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(M.createEvent){var Ie=M.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,Vi,1,ze.screenX,ze.screenY,ze.clientX,ze.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(Ie)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,d&&Be&&!O&&De.restart(!0),it&&ee(),p&&Be&&p($),S&&S($,se)}},We=function(pe){return pe.touches&&pe.touches.length>1&&($.isGesturing=!0)&&G(pe,$.isDragging)},$e=function(){return($.isGesturing=!1)||P($)},F=function(pe){if(!re(pe)){var Be=Ze(),se=Ye();xe((Be-ft)*Ne,(se-ge)*Ne,1),ft=Be,ge=se,d&&De.restart(!0)}},ue=function(pe){if(!re(pe)){pe=iu(pe,c),te&&(Ge=!0);var Be=(pe.deltaMode===1?l:pe.deltaMode===2?Vi.innerHeight:1)*g;xe(pe.deltaX*Be,pe.deltaY*Be,0),d&&!O&&De.restart(!0)}},J=function(pe){if(!re(pe)){var Be=pe.clientX,se=pe.clientY,ze=Be-$.x,Ie=se-$.y;$.x=Be,$.y=se,Ae=!0,d&&De.restart(!0),(ze||Ie)&&we(ze,Ie)}},Se=function(pe){$.event=pe,z($)},he=function(pe){$.event=pe,D($)},ie=function(pe){return re(pe)||iu(pe,c)&&Ce($)};De=$._dc=Fn.delayedCall(f||.25,Z).pause(),$.deltaX=$.deltaY=0,$._vx=F_(0,50,!0),$._vy=F_(0,50,!0),$.scrollX=Ze,$.scrollY=Ye,$.isDragging=$.isGesturing=$.isPressed=!1,RE(this),$.enable=function(oe){return $.isEnabled||(ri(R?M:a,"scroll",U_),o.indexOf("scroll")>=0&&ri(R?M:a,"scroll",F,B,K),o.indexOf("wheel")>=0&&ri(a,"wheel",ue,B,K),(o.indexOf("touch")>=0&&AE||o.indexOf("pointer")>=0)&&(ri(a,Sr[0],fe,B,K),ri(M,Sr[2],ve),ri(M,Sr[3],ve),ae&&ri(a,"click",me,!0,!0),Ce&&ri(a,"click",ie),G&&ri(M,"gesturestart",We),P&&ri(M,"gestureend",$e),z&&ri(a,Uo+"enter",Se),D&&ri(a,Uo+"leave",he),k&&ri(a,Uo+"move",J)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=Ae=it=!1,$._vx.reset(),$._vy.reset(),ft=Ze(),ge=Ye(),oe&&oe.type&&fe(oe),ce&&ce($)),$},$.disable=function(){$.isEnabled&&(nl.filter(function(oe){return oe!==$&&Lu(oe.target)}).length||ii(R?M:a,"scroll",U_),$.isPressed&&($._vx.reset(),$._vy.reset(),ii(O?a:M,Sr[1],_e,!0)),ii(R?M:a,"scroll",F,K),ii(a,"wheel",ue,K),ii(a,Sr[0],fe,K),ii(M,Sr[2],ve),ii(M,Sr[3],ve),ii(a,"click",me,!0),ii(a,"click",ie),ii(M,"gesturestart",We),ii(M,"gestureend",$e),ii(a,Uo+"enter",Se),ii(a,Uo+"leave",he),ii(a,Uo+"move",J),$.isEnabled=$.isPressed=$.isDragging=!1,Fe&&Fe($))},$.kill=$.revert=function(){$.disable();var oe=nl.indexOf($);oe>=0&&nl.splice(oe,1),ms===$&&(ms=0)},nl.push($),O&&Lu(a)&&(ms=$),$.enable(v)},fN(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();un.version="3.15.0";un.create=function(n){return new un(n)};un.register=DE;un.getAll=function(){return nl.slice()};un.getById=function(n){return nl.filter(function(e){return e.vars.id===n})[0]};bE()&&Fn.registerPlugin(un);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Le,za,at,Mt,ki,St,x0,Od,hc,Du,hu,gf,qn,fh,O_,li,dy,hy,Va,NE,Rp,IE,oi,k_,UE,FE,zs,B_,y0,_l,S0,Nu,z_,bp,vf=1,Kn=Date.now,Pp=Kn(),dr=0,pu=0,py=function(e,t,i){var r=Ui(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},my=function(e,t){return t&&(!Ui(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},pN=function n(){return pu&&requestAnimationFrame(n)},_y=function(){return fh=1},gy=function(){return fh=0},Or=function(e){return e},mu=function(e){return Math.round(e*1e5)/1e5||0},OE=function(){return typeof window<"u"},kE=function(){return Le||OE()&&(Le=window.gsap)&&Le.registerPlugin&&Le},la=function(e){return!!~x0.indexOf(e)},BE=function(e){return(e==="Height"?S0:at["inner"+e])||ki["client"+e]||St["client"+e]},zE=function(e){return fo(e,"getBoundingClientRect")||(la(e)?function(){return Jf.width=at.innerWidth,Jf.height=S0,Jf}:function(){return fs(e)})},mN=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=fo(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?BE(s):e["client"+s])||0}},_N=function(e,t){return!t||~qr.indexOf(e)?zE(e):function(){return Jf}},Wr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=fo(e,i))?o()-zE(e)()[s]:la(e)?(ki[i]||St[i])-BE(r):e[i]-e["offset"+r])},xf=function(e,t){for(var i=0;i<Va.length;i+=3)(!t||~t.indexOf(Va[i+1]))&&e(Va[i],Va[i+1],Va[i+2])},Ui=function(e){return typeof e=="string"},Jn=function(e){return typeof e=="function"},_u=function(e){return typeof e=="number"},Fo=function(e){return typeof e=="object"},ru=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Fa=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Oa=Math.abs,VE="left",HE="top",M0="right",E0="bottom",Qo="width",Jo="height",Iu="Right",Uu="Left",Fu="Top",Ou="Bottom",mn="padding",sr="margin",Il="Width",T0="Height",xn="px",or=function(e){return at.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},gN=function(e){var t=or(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},vy=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},fs=function(e,t){var i=t&&or(e)[O_]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},kd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},GE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},vN=function(e){return function(t){return Le.utils.snap(GE(e),t)}},w0=function(e){var t=Le.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},xN=function(e){return function(t,i){return w0(GE(e))(t,i.direction)}},yf=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},Pn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},bn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Sf=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},xy={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Mf={toggleActions:"play",anticipatePin:0},Bd={top:0,left:0,center:.5,bottom:1,right:1},qf=function(e,t){if(Ui(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Bd?Bd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ef=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,g=Mt.createElement("div"),v=la(i)||fo(i,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,p=v?St:i.tagName==="IFRAME"?i.contentDocument.body:i,m=e.indexOf("start")!==-1,x=m?u:c,S="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((_||l)&&v?"fixed;":"absolute;"),(_||l||!v)&&(S+=(r===Sn?M0:E0)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=m,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],Kf(g,0,r,m),g},Kf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Il]=1,s["border"+a+Il]=0,s[i.p]=t+"px",Le.set(e,s)},st=[],V_={},pc,yy=function(){return Kn()-dr>34&&(pc||(pc=requestAnimationFrame(xs)))},ka=function(){(!oi||!oi.isPressed||oi.startX>St.clientWidth)&&(lt.cache++,oi?pc||(pc=requestAnimationFrame(xs)):xs(),dr||ca("scrollStart"),dr=Kn())},Lp=function(){FE=at.innerWidth,UE=at.innerHeight},gu=function(e){lt.cache++,(e===!0||!qn&&!IE&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!k_||FE!==at.innerWidth||Math.abs(at.innerHeight-UE)>at.innerHeight*.25))&&Od.restart(!0)},ua={},yN=[],WE=function n(){return bn(et,"scrollEnd",n)||Xo(!0)},ca=function(e){return ua[e]&&ua[e].map(function(t){return t()})||yN},Ni=[],XE=function(e){for(var t=0;t<Ni.length;t+=5)(!e||Ni[t+4]&&Ni[t+4].query===e)&&(Ni[t].style.cssText=Ni[t+1],Ni[t].getBBox&&Ni[t].setAttribute("transform",Ni[t+2]||""),Ni[t+3].uncache=1)},jE=function(){return lt.forEach(function(e){return Jn(e)&&++e.cacheID&&(e.rec=e())})},A0=function(e,t){var i;for(li=0;li<st.length;li++)i=st[li],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Nu=!0,t&&XE(t),t||ca("revert")},YE=function(e,t){lt.cache++,(t||!ui)&&lt.forEach(function(i){return Jn(i)&&i.cacheID++&&(i.rec=0)}),Ui(e)&&(at.history.scrollRestoration=y0=e)},ui,ea=0,Sy,SN=function(){if(Sy!==ea){var e=Sy=ea;requestAnimationFrame(function(){return e===ea&&Xo(!0)})}},$E=function(){St.appendChild(_l),S0=!oi&&_l.offsetHeight||at.innerHeight,St.removeChild(_l)},My=function(e){return hc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Xo=function(e,t){if(ki=Mt.documentElement,St=Mt.body,x0=[at,Mt,ki,St],dr&&!e&&!Nu){Pn(et,"scrollEnd",WE);return}$E(),ui=et.isRefreshing=!0,Nu||jE();var i=ca("refreshInit");NE&&et.sort(),t||A0(),lt.forEach(function(r){Jn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),st.slice(0).forEach(function(r){return r.refresh()}),Nu=!1,st.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),z_=1,My(!0),st.forEach(function(r){var s=Wr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),My(!1),z_=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),lt.forEach(function(r){Jn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),YE(y0,1),Od.pause(),ea++,ui=2,xs(2),st.forEach(function(r){return Jn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ui=et.isRefreshing=!1,ca("refresh")},H_=0,Zf=1,ku,xs=function(e){if(e===2||!ui&&!Nu){et.isUpdating=!0,ku&&ku.update(0);var t=st.length,i=Kn(),r=i-Pp>=50,s=t&&st[0].scroll();if(Zf=H_>s?-1:1,ui||(H_=s),r&&(dr&&!fh&&i-dr>200&&(dr=0,ca("scrollEnd")),hu=Pp,Pp=i),Zf<0){for(li=t;li-- >0;)st[li]&&st[li].update(0,r);Zf=1}else for(li=0;li<t;li++)st[li]&&st[li].update(0,r);et.isUpdating=!1}pc=0},G_=[VE,HE,E0,M0,sr+Ou,sr+Iu,sr+Fu,sr+Uu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Qf=G_.concat([Qo,Jo,"boxSizing","max"+Il,"max"+T0,"position",sr,mn,mn+Fu,mn+Iu,mn+Ou,mn+Uu]),MN=function(e,t,i){gl(i);var r=e._gsap;if(r.spacerIsNative)gl(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Dp=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=G_.length,o=t.style,a=e.style,l;s--;)l=G_[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[E0]=a[M0]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Qo]=kd(e,ci)+xn,o[Jo]=kd(e,Sn)+xn,o[mn]=a[sr]=a[HE]=a[VE]="0",gl(r),a[Qo]=a["max"+Il]=i[Qo],a[Jo]=a["max"+T0]=i[Jo],a[mn]=i[mn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},EN=/([A-Z])/g,gl=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(EN,"-$1").toLowerCase())}},Tf=function(e){for(var t=Qf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Qf[s],i[Qf[s]]);return r.t=e,r},TN=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Jf={left:0,top:0},Ey=function(e,t,i,r,s,o,a,l,u,c,d,f,h,g){Jn(e)&&(e=e(l)),Ui(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?qf("0"+e.substr(3),i):0));var v=h?h.time():0,_,p,m;if(h&&h.seek(0),isNaN(e)||(e=+e),_u(e))h&&(e=Le.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&Kf(a,i,r,!0);else{Jn(t)&&(t=t(l));var x=(e||"0").split(" "),S,w,E,T;m=_i(t,l)||St,S=fs(m)||{},(!S||!S.left&&!S.top)&&or(m).display==="none"&&(T=m.style.display,m.style.display="block",S=fs(m),T?m.style.display=T:m.style.removeProperty("display")),w=qf(x[0],S[r.d]),E=qf(x[1]||"0",i),e=S[r.p]-u[r.p]-c+w+s-E,a&&Kf(a,E,r,i-E<20||a._isStart&&E>20),i-=i-E}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var y=e+i,C=o._isStart;_="scroll"+r.d2,Kf(o,y,r,C&&y>20||!C&&(d?Math.max(St[_],ki[_]):o.parentNode[_])<=y+1),d&&(u=fs(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+xn))}return h&&m&&(_=fs(m),h.seek(f),p=fs(m),h._caScrollDist=_[r.p]-p[r.p],e=e/h._caScrollDist*f),h&&h.seek(v),h?e:Math.round(e)},wN=/(webkit|moz|length|cssText|inset)/i,Ty=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===St){e._stOrig=s.cssText,a=or(e);for(o in a)!+o&&!wN.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},qE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},wf=function(e,t,i){var r={};r[t.p]="+="+i,Le.set(e,r)},wy=function(e,t){var i=yo(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,h=l.onComplete,g={};u=u||i();var v=qE(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return v(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&xs()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=Le.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Pn(e,"wheel",i.wheelHandler),et.isTouch&&Pn(e,"touchmove",i.wheelHandler),s},et=function(){function n(t,i){za||n.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),B_(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!pu){this.update=this.refresh=this.kill=Or;return}i=vy(Ui(i)||_u(i)||i.nodeType?{trigger:i}:i,Mf);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,g=s.pinSpacing,v=s.invalidateOnRefresh,_=s.anticipatePin,p=s.onScrubComplete,m=s.onSnapComplete,x=s.once,S=s.snap,w=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,y=s.fastScrollEnd,C=s.preventOverlaps,b=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ci:Sn,L=!d&&d!==0,N=_i(i.scroller||at),W=Le.core.getCache(N),z=la(N),D=("pinType"in i?i.pinType:fo(N,"pinType")||z&&"fixed")==="fixed",k=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],U=L&&i.toggleActions.split(" "),O="markers"in i?i.markers:Mf.markers,G=z?0:parseFloat(or(N)["border"+b.p2+Il])||0,P=this,te=i.onRefreshInit&&function(){return i.onRefreshInit(P)},ce=mN(N,z,b),Fe=_N(N,z),Ce=0,Ne=0,K=0,ae=yo(N,b),le,be,Ve,De,it,Ae,Ge,tt,He,$,ut,Ht,B,Ze,Ye,ft,ge,Je,R,M,H,Q,ne,me,re,Z,ee,xe,we,_e,fe,ve,We,$e,F,ue,J,Se,he;if(P._startClamp=P._endClamp=!1,P._dir=b,_*=45,P.scroller=N,P.scroll=T?T.time.bind(T):ae,De=ae(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(NE=1,i.refreshPriority===-9999&&(ku=P)),W.tweenScroll=W.tweenScroll||{top:wy(N,Sn),left:wy(N,ci)},P.tweenTo=le=W.tweenScroll[b.p],P.scrubDuration=function(se){We=_u(se)&&se,We?ve?ve.duration(se):ve=Le.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:We,paused:!0,onComplete:function(){return p&&p(P)}}):(ve&&ve.progress(1).kill(),ve=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),_e=0,l||(l=r.vars.id)),S&&((!Fo(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in St.style&&Le.set(z?[St,ki]:N,{scrollBehavior:"auto"}),lt.forEach(function(se){return Jn(se)&&se.target===(z?Mt.scrollingElement||ki:N)&&(se.smooth=!1)}),Ve=Jn(S.snapTo)?S.snapTo:S.snapTo==="labels"?vN(r):S.snapTo==="labelsDirectional"?xN(r):S.directional!==!1?function(se,ze){return w0(S.snapTo)(se,Kn()-Ne<500?0:ze.direction)}:Le.utils.snap(S.snapTo),$e=S.duration||{min:.1,max:2},$e=Fo($e)?Du($e.min,$e.max):Du($e,$e),F=Le.delayedCall(S.delay||We/2||.1,function(){var se=ae(),ze=Kn()-Ne<500,Ie=le.tween;if((ze||Math.abs(P.getVelocity())<10)&&!Ie&&!fh&&Ce!==se){var je=(se-Ae)/Ze,fn=r&&!L?r.totalProgress():je,ot=ze?0:(fn-fe)/(Kn()-hu)*1e3||0,kt=Le.utils.clamp(-je,1-je,Oa(ot/2)*ot/.185),Bt=je+(S.inertia===!1?0:kt),Lt,At,yt=S,Vn=yt.onStart,Dt=yt.onInterrupt,wn=yt.onComplete;if(Lt=Ve(Bt,P),_u(Lt)||(Lt=Bt),At=Math.max(0,Math.round(Ae+Lt*Ze)),se<=Ge&&se>=Ae&&At!==se){if(Ie&&!Ie._initted&&Ie.data<=Oa(At-se))return;S.inertia===!1&&(kt=Lt-je),le(At,{duration:$e(Oa(Math.max(Oa(Bt-fn),Oa(Lt-fn))*.185/ot/.05||0)),ease:S.ease||"power3",data:Oa(At-se),onInterrupt:function(){return F.restart(!0)&&Dt&&Fa(P,Dt)},onComplete:function(){P.update(),Ce=ae(),r&&!L&&(ve?ve.resetTo("totalProgress",Lt,r._tTime/r._tDur):r.progress(Lt)),_e=fe=r&&!L?r.totalProgress():P.progress,m&&m(P),wn&&Fa(P,wn)}},se,kt*Ze,At-se-kt*Ze),Vn&&Fa(P,Vn,le.tween)}}else P.isActive&&Ce!==se&&F.restart(!0)}).pause()),l&&(V_[l]=P),f=P.trigger=_i(f||h!==!0&&h),he=f&&f._gsap&&f._gsap.stRevert,he&&(he=he(P)),h=h===!0?f:_i(h),Ui(a)&&(a={targets:f,className:a}),h&&(g===!1||g===sr||(g=!g&&h.parentNode&&h.parentNode.style&&or(h.parentNode).display==="flex"?!1:mn),P.pin=h,be=Le.core.getCache(h),be.spacer?Ye=be.pinState:(E&&(E=_i(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),be.spacerIsNative=!!E,E&&(be.spacerState=Tf(E))),be.spacer=Je=E||Mt.createElement("div"),Je.classList.add("pin-spacer"),l&&Je.classList.add("pin-spacer-"+l),be.pinState=Ye=Tf(h)),i.force3D!==!1&&Le.set(h,{force3D:!0}),P.spacer=Je=be.spacer,we=or(h),me=we[g+b.os2],M=Le.getProperty(h),H=Le.quickSetter(h,b.a,xn),Dp(h,Je,we),ge=Tf(h)),O){Ht=Fo(O)?vy(O,xy):xy,$=Ef("scroller-start",l,N,b,Ht,0),ut=Ef("scroller-end",l,N,b,Ht,0,$),R=$["offset"+b.op.d2];var ie=_i(fo(N,"content")||N);tt=this.markerStart=Ef("start",l,ie,b,Ht,R,0,T),He=this.markerEnd=Ef("end",l,ie,b,Ht,R,0,T),T&&(Se=Le.quickSetter([tt,He],b.a,xn)),!D&&!(qr.length&&fo(N,"fixedMarkers")===!0)&&(gN(z?St:N),Le.set([$,ut],{force3D:!0}),Z=Le.quickSetter($,b.a,xn),xe=Le.quickSetter(ut,b.a,xn))}if(T){var oe=T.vars.onUpdate,pe=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){P.update(0,0,1),oe&&oe.apply(T,pe||[])})}if(P.previous=function(){return st[st.indexOf(P)-1]},P.next=function(){return st[st.indexOf(P)+1]},P.revert=function(se,ze){if(!ze)return P.kill(!0);var Ie=se!==!1||!P.enabled,je=qn;Ie!==P.isReverted&&(Ie&&(ue=Math.max(ae(),P.scroll.rec||0),K=P.progress,J=r&&r.progress()),tt&&[tt,He,$,ut].forEach(function(fn){return fn.style.display=Ie?"none":"block"}),Ie&&(qn=P,P.update(Ie)),h&&(!w||!P.isActive)&&(Ie?MN(h,Je,Ye):Dp(h,Je,or(h),re)),Ie||P.update(Ie),qn=je,P.isReverted=Ie)},P.refresh=function(se,ze,Ie,je){if(!((qn||!P.enabled)&&!ze)){if(h&&se&&dr){Pn(n,"scrollEnd",WE);return}!ui&&te&&te(P),qn=P,le.tween&&!Ie&&(le.tween.kill(),le.tween=0),ve&&ve.pause(),v&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Me){return Me.vars.immediateRender&&Me.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var fn=ce(),ot=Fe(),kt=T?T.duration():Wr(N,b),Bt=Ze<=.01||!Ze,Lt=0,At=je||0,yt=Fo(Ie)?Ie.end:i.end,Vn=i.endTrigger||f,Dt=Fo(Ie)?Ie.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),wn=P.pinnedContainer=i.pinnedContainer&&_i(i.pinnedContainer,P),bi=f&&Math.max(0,st.indexOf(P))||0,dn=bi,vn,An,es,_a,Cn,nn,Qi,A,V,q,X,j,ye;for(O&&Fo(Ie)&&(j=Le.getProperty($,b.p),ye=Le.getProperty(ut,b.p));dn-- >0;)nn=st[dn],nn.end||nn.refresh(0,1)||(qn=P),Qi=nn.pin,Qi&&(Qi===f||Qi===h||Qi===wn)&&!nn.isReverted&&(q||(q=[]),q.unshift(nn),nn.revert(!0,!0)),nn!==st[dn]&&(bi--,dn--);for(Jn(Dt)&&(Dt=Dt(P)),Dt=py(Dt,"start",P),Ae=Ey(Dt,f,fn,b,ae(),tt,$,P,ot,G,D,kt,T,P._startClamp&&"_startClamp")||(h?-.001:0),Jn(yt)&&(yt=yt(P)),Ui(yt)&&!yt.indexOf("+=")&&(~yt.indexOf(" ")?yt=(Ui(Dt)?Dt.split(" ")[0]:"")+yt:(Lt=qf(yt.substr(2),fn),yt=Ui(Dt)?Dt:(T?Le.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Ae):Ae)+Lt,Vn=f)),yt=py(yt,"end",P),Ge=Math.max(Ae,Ey(yt||(Vn?"100% 0":kt),Vn,fn,b,ae()+Lt,He,ut,P,ot,G,D,kt,T,P._endClamp&&"_endClamp"))||-.001,Lt=0,dn=bi;dn--;)nn=st[dn]||{},Qi=nn.pin,Qi&&nn.start-nn._pinPush<=Ae&&!T&&nn.end>0&&(vn=nn.end-(P._startClamp?Math.max(0,nn.start):nn.start),(Qi===f&&nn.start-nn._pinPush<Ae||Qi===wn)&&isNaN(Dt)&&(Lt+=vn*(1-nn.progress)),Qi===h&&(At+=vn));if(Ae+=Lt,Ge+=Lt,P._startClamp&&(P._startClamp+=Lt),P._endClamp&&!ui&&(P._endClamp=Ge||-.001,Ge=Math.min(Ge,Wr(N,b))),Ze=Ge-Ae||(Ae-=.01)&&.001,Bt&&(K=Le.utils.clamp(0,1,Le.utils.normalize(Ae,Ge,ue))),P._pinPush=At,tt&&Lt&&(vn={},vn[b.a]="+="+Lt,wn&&(vn[b.p]="-="+ae()),Le.set([tt,He],vn)),h&&!(z_&&P.end>=Wr(N,b)))vn=or(h),_a=b===Sn,es=ae(),Q=parseFloat(M(b.a))+At,!kt&&Ge>1&&(X=(z?Mt.scrollingElement||ki:N).style,X={style:X,value:X["overflow"+b.a.toUpperCase()]},z&&or(St)["overflow"+b.a.toUpperCase()]!=="scroll"&&(X.style["overflow"+b.a.toUpperCase()]="scroll")),Dp(h,Je,vn),ge=Tf(h),An=fs(h,!0),A=D&&yo(N,_a?ci:Sn)(),g?(re=[g+b.os2,Ze+At+xn],re.t=Je,dn=g===mn?kd(h,b)+Ze+At:0,dn&&(re.push(b.d,dn+xn),Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=dn+xn)),gl(re),wn&&st.forEach(function(Me){Me.pin===wn&&Me.vars.pinSpacing!==!1&&(Me._subPinOffset=!0)}),D&&ae(ue)):(dn=kd(h,b),dn&&Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=dn+xn)),D&&(Cn={top:An.top+(_a?es-Ae:A)+xn,left:An.left+(_a?A:es-Ae)+xn,boxSizing:"border-box",position:"fixed"},Cn[Qo]=Cn["max"+Il]=Math.ceil(An.width)+xn,Cn[Jo]=Cn["max"+T0]=Math.ceil(An.height)+xn,Cn[sr]=Cn[sr+Fu]=Cn[sr+Iu]=Cn[sr+Ou]=Cn[sr+Uu]="0",Cn[mn]=vn[mn],Cn[mn+Fu]=vn[mn+Fu],Cn[mn+Iu]=vn[mn+Iu],Cn[mn+Ou]=vn[mn+Ou],Cn[mn+Uu]=vn[mn+Uu],ft=TN(Ye,Cn,w),ui&&ae(0)),r?(V=r._initted,Rp(1),r.render(r.duration(),!0,!0),ne=M(b.a)-Q+Ze+At,ee=Math.abs(Ze-ne)>1,D&&ee&&ft.splice(ft.length-2,2),r.render(0,!0,!0),V||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Rp(0)):ne=Ze,X&&(X.value?X.style["overflow"+b.a.toUpperCase()]=X.value:X.style.removeProperty("overflow-"+b.a));else if(f&&ae()&&!T)for(An=f.parentNode;An&&An!==St;)An._pinOffset&&(Ae-=An._pinOffset,Ge-=An._pinOffset),An=An.parentNode;q&&q.forEach(function(Me){return Me.revert(!1,!0)}),P.start=Ae,P.end=Ge,De=it=ui?ue:ae(),!T&&!ui&&(De<ue&&ae(ue),P.scroll.rec=0),P.revert(!1,!0),Ne=Kn(),F&&(Ce=-1,F.restart(!0)),qn=0,r&&L&&(r._initted||J)&&r.progress()!==J&&r.progress(J||0,!0).render(r.time(),!0,!0),(Bt||K!==P.progress||T||v||r&&!r._initted)&&(r&&!L&&(r._initted||K||r.vars.immediateRender!==!1)&&r.totalProgress(T&&Ae<-.001&&!K?Le.utils.normalize(Ae,Ge,0):K,!0),P.progress=Bt||(De-Ae)/Ze===K?0:K),h&&g&&(Je._pinOffset=Math.round(P.progress*ne)),ve&&ve.invalidate(),isNaN(j)||(j-=Le.getProperty($,b.p),ye-=Le.getProperty(ut,b.p),wf($,b,j),wf(tt,b,j-(je||0)),wf(ut,b,ye),wf(He,b,ye-(je||0))),Bt&&!ui&&P.update(),c&&!ui&&!B&&(B=!0,c(P),B=!1)}},P.getVelocity=function(){return(ae()-it)/(Kn()-hu)*1e3||0},P.endAnimation=function(){ru(P.callbackAnimation),r&&(ve?ve.progress(1):r.paused()?L||ru(r,P.direction<0,1):ru(r,r.reversed()))},P.labelToScroll=function(se){return r&&r.labels&&(Ae||P.refresh()||Ae)+r.labels[se]/r.duration()*Ze||0},P.getTrailing=function(se){var ze=st.indexOf(P),Ie=P.direction>0?st.slice(0,ze).reverse():st.slice(ze+1);return(Ui(se)?Ie.filter(function(je){return je.vars.preventOverlaps===se}):Ie).filter(function(je){return P.direction>0?je.end<=Ae:je.start>=Ge})},P.update=function(se,ze,Ie){if(!(T&&!Ie&&!se)){var je=ui===!0?ue:P.scroll(),fn=se?0:(je-Ae)/Ze,ot=fn<0?0:fn>1?1:fn||0,kt=P.progress,Bt,Lt,At,yt,Vn,Dt,wn,bi;if(ze&&(it=De,De=T?ae():je,S&&(fe=_e,_e=r&&!L?r.totalProgress():ot)),_&&h&&!qn&&!vf&&dr&&(!ot&&Ae<je+(je-it)/(Kn()-hu)*_?ot=1e-4:ot===1&&Ge>je+(je-it)/(Kn()-hu)*_&&(ot=.9999)),ot!==kt&&P.enabled){if(Bt=P.isActive=!!ot&&ot<1,Lt=!!kt&&kt<1,Dt=Bt!==Lt,Vn=Dt||!!ot!=!!kt,P.direction=ot>kt?1:-1,P.progress=ot,Vn&&!qn&&(At=ot&&!kt?0:ot===1?1:kt===1?2:3,L&&(yt=!Dt&&U[At+1]!=="none"&&U[At+1]||U[At],bi=r&&(yt==="complete"||yt==="reset"||yt in r))),C&&(Dt||bi)&&(bi||d||!r)&&(Jn(C)?C(P):P.getTrailing(C).forEach(function(es){return es.endAnimation()})),L||(ve&&!qn&&!vf?(ve._dp._time-ve._start!==ve._time&&ve.render(ve._dp._time-ve._start),ve.resetTo?ve.resetTo("totalProgress",ot,r._tTime/r._tDur):(ve.vars.totalProgress=ot,ve.invalidate().restart())):r&&r.totalProgress(ot,!!(qn&&(Ne||se)))),h){if(se&&g&&(Je.style[g+b.os2]=me),!D)H(mu(Q+ne*ot));else if(Vn){if(wn=!se&&ot>kt&&Ge+1>je&&je+1>=Wr(N,b),w)if(!se&&(Bt||wn)){var dn=fs(h,!0),vn=je-Ae;Ty(h,St,dn.top+(b===Sn?vn:0)+xn,dn.left+(b===Sn?0:vn)+xn)}else Ty(h,Je);gl(Bt||wn?ft:ge),ee&&ot<1&&Bt||H(Q+(ot===1&&!wn?ne:0))}}S&&!le.tween&&!qn&&!vf&&F.restart(!0),a&&(Dt||x&&ot&&(ot<1||!bp))&&hc(a.targets).forEach(function(es){return es.classList[Bt||x?"add":"remove"](a.className)}),o&&!L&&!se&&o(P),Vn&&!qn?(L&&(bi&&(yt==="complete"?r.pause().totalProgress(1):yt==="reset"?r.restart(!0).pause():yt==="restart"?r.restart(!0):r[yt]()),o&&o(P)),(Dt||!bp)&&(u&&Dt&&Fa(P,u),k[At]&&Fa(P,k[At]),x&&(ot===1?P.kill(!1,1):k[At]=0),Dt||(At=ot===1?1:3,k[At]&&Fa(P,k[At]))),y&&!Bt&&Math.abs(P.getVelocity())>(_u(y)?y:2500)&&(ru(P.callbackAnimation),ve?ve.progress(1):ru(r,yt==="reverse"?1:!ot,1))):L&&o&&!qn&&o(P)}if(xe){var An=T?je/T.duration()*(T._caScrollDist||0):je;Z(An+($._isFlipped?1:0)),xe(An)}Se&&Se(-je/T.duration()*(T._caScrollDist||0))}},P.enable=function(se,ze){P.enabled||(P.enabled=!0,Pn(N,"resize",gu),z||Pn(N,"scroll",ka),te&&Pn(n,"refreshInit",te),se!==!1&&(P.progress=K=0,De=it=Ce=ae()),ze!==!1&&P.refresh())},P.getTween=function(se){return se&&le?le.tween:ve},P.setPositions=function(se,ze,Ie,je){if(T){var fn=T.scrollTrigger,ot=T.duration(),kt=fn.end-fn.start;se=fn.start+kt*se/ot,ze=fn.start+kt*ze/ot}P.refresh(!1,!1,{start:my(se,Ie&&!!P._startClamp),end:my(ze,Ie&&!!P._endClamp)},je),P.update()},P.adjustPinSpacing=function(se){if(re&&se){var ze=re.indexOf(b.d)+1;re[ze]=parseFloat(re[ze])+se+xn,re[1]=parseFloat(re[1])+se+xn,gl(re)}},P.disable=function(se,ze){if(se!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,ze||ve&&ve.pause(),ue=0,be&&(be.uncache=1),te&&bn(n,"refreshInit",te),F&&(F.pause(),le.tween&&le.tween.kill()&&(le.tween=0)),!z)){for(var Ie=st.length;Ie--;)if(st[Ie].scroller===N&&st[Ie]!==P)return;bn(N,"resize",gu),z||bn(N,"scroll",ka)}},P.kill=function(se,ze){P.disable(se,ze),ve&&!ze&&ve.kill(),l&&delete V_[l];var Ie=st.indexOf(P);Ie>=0&&st.splice(Ie,1),Ie===li&&Zf>0&&li--,Ie=0,st.forEach(function(je){return je.scroller===P.scroller&&(Ie=1)}),Ie||ui||(P.scroll.rec=0),r&&(r.scrollTrigger=null,se&&r.revert({kill:!1}),ze||r.kill()),tt&&[tt,He,$,ut].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),ku===P&&(ku=0),h&&(be&&(be.uncache=1),Ie=0,st.forEach(function(je){return je.pin===h&&Ie++}),Ie||(be.spacer=0)),i.onKill&&i.onKill(P)},st.push(P),P.enable(!1,!1),he&&he(P),r&&r.add&&!Ze){var Be=P.update;P.update=function(){P.update=Be,lt.cache++,Ae||Ge||P.refresh()},Le.delayedCall(.01,P.update),Ze=.01,Ae=Ge=0}else P.refresh();h&&SN()},n.register=function(i){return za||(Le=i||kE(),OE()&&window.document&&n.enable(),za=pu),za},n.defaults=function(i){if(i)for(var r in i)Mf[r]=i[r];return Mf},n.disable=function(i,r){pu=0,st.forEach(function(o){return o[r?"kill":"disable"](i)}),bn(at,"wheel",ka),bn(Mt,"scroll",ka),clearInterval(gf),bn(Mt,"touchcancel",Or),bn(St,"touchstart",Or),yf(bn,Mt,"pointerdown,touchstart,mousedown",_y),yf(bn,Mt,"pointerup,touchend,mouseup",gy),Od.kill(),xf(bn);for(var s=0;s<lt.length;s+=3)Sf(bn,lt[s],lt[s+1]),Sf(bn,lt[s],lt[s+2])},n.enable=function(){if(at=window,Mt=document,ki=Mt.documentElement,St=Mt.body,Le){if(hc=Le.utils.toArray,Du=Le.utils.clamp,B_=Le.core.context||Or,Rp=Le.core.suppressOverwrites||Or,y0=at.history.scrollRestoration||"auto",H_=at.pageYOffset||0,Le.core.globals("ScrollTrigger",n),St){pu=1,_l=document.createElement("div"),_l.style.height="100vh",_l.style.position="absolute",$E(),pN(),un.register(Le),n.isTouch=un.isTouch,zs=un.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),k_=un.isTouch===1,Pn(at,"wheel",ka),x0=[at,Mt,ki,St],Le.matchMedia?(n.matchMedia=function(c){var d=Le.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},Le.addEventListener("matchMediaInit",function(){jE(),A0()}),Le.addEventListener("matchMediaRevert",function(){return XE()}),Le.addEventListener("matchMedia",function(){Xo(0,1),ca("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return Lp(),Lp})):console.warn("Requires GSAP 3.11.0 or later"),Lp(),Pn(Mt,"scroll",ka);var i=St.hasAttribute("style"),r=St.style,s=r.borderTopStyle,o=Le.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=fs(St),Sn.m=Math.round(a.top+Sn.sc())||0,ci.m=Math.round(a.left+ci.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(St.setAttribute("style",""),St.removeAttribute("style")),gf=setInterval(yy,250),Le.delayedCall(.5,function(){return vf=0}),Pn(Mt,"touchcancel",Or),Pn(St,"touchstart",Or),yf(Pn,Mt,"pointerdown,touchstart,mousedown",_y),yf(Pn,Mt,"pointerup,touchend,mouseup",gy),O_=Le.utils.checkPrefix("transform"),Qf.push(O_),za=Kn(),Od=Le.delayedCall(.2,Xo).pause(),Va=[Mt,"visibilitychange",function(){var c=at.innerWidth,d=at.innerHeight;Mt.hidden?(dy=c,hy=d):(dy!==c||hy!==d)&&gu()},Mt,"DOMContentLoaded",Xo,at,"load",Xo,at,"resize",gu],xf(Pn),st.forEach(function(c){return c.enable(0,1)}),l=0;l<lt.length;l+=3)Sf(bn,lt[l],lt[l+1]),Sf(bn,lt[l],lt[l+2])}else if(Mt){var u=function c(){n.enable(),Mt.removeEventListener("DOMContentLoaded",c)};Mt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(bp=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(gf)||(gf=r)&&setInterval(yy,r),"ignoreMobileResize"in i&&(k_=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(xf(bn)||xf(Pn,i.autoRefreshEvents||"none"),IE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=_i(i),o=lt.indexOf(s),a=la(s);~o&&lt.splice(o,a?6:2),r&&(a?qr.unshift(at,r,St,r,ki,r):qr.unshift(s,r))},n.clearMatchMedia=function(i){st.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(Ui(i)?_i(i):i).getBoundingClientRect(),a=o[s?Qo:Jo]*r||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},n.positionInViewport=function(i,r,s){Ui(i)&&(i=_i(i));var o=i.getBoundingClientRect(),a=o[s?Qo:Jo],l=r==null?a/2:r in Bd?Bd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},n.killAll=function(i){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=ua.killAll||[];ua={},r.forEach(function(s){return s()})}},n}();et.version="3.15.0";et.saveStyles=function(n){return n?hc(n).forEach(function(e){if(e&&e.style){var t=Ni.indexOf(e);t>=0&&Ni.splice(t,5),Ni.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),B_())}}):Ni};et.revert=function(n,e){return A0(!n,e)};et.create=function(n,e){return new et(n,e)};et.refresh=function(n){return n?gu(!0):(za||et.register())&&Xo(!0)};et.update=function(n){return++lt.cache&&xs(n===!0?2:0)};et.clearScrollMemory=YE;et.maxScroll=function(n,e){return Wr(n,e?ci:Sn)};et.getScrollFunc=function(n,e){return yo(_i(n),e?ci:Sn)};et.getById=function(n){return V_[n]};et.getAll=function(){return st.filter(function(n){return n.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!dr};et.snapDirectional=w0;et.addEventListener=function(n,e){var t=ua[n]||(ua[n]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(n,e){var t=ua[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};et.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],h=Le.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(g){d.length||h.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Jn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Jn(s)&&(s=s(),Pn(et,"refresh",function(){return s=e.batchMax()})),hc(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(et.create(u))}),t};var Ay=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Np=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(un.isTouch?" pinch-zoom":""):"none",e===ki&&n(St,t)},Af={auto:1,scroll:1},AN=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Le.core.getCache(s),a=Kn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Af[(l=or(s)).overflowY]||Af[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!la(s)&&(Af[(l=or(s)).overflowY]||Af[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},KE=function(e,t,i,r){return un.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&AN,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&Pn(Mt,un.eventTypes[0],Ry,!1,!0)},onDisable:function(){return bn(Mt,un.eventTypes[0],Ry,!0)}})},CN=/(input|label|select|textarea)/i,Cy,Ry=function(e){var t=CN.test(e.target.tagName);(t||Cy)&&(e._gsapAllow=!0,Cy=t)},RN=function(e){Fo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=_i(e.target)||ki,c=Le.core.globals().ScrollSmoother,d=c&&c.get(),f=zs&&(e.content&&_i(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=yo(u,Sn),g=yo(u,ci),v=1,_=(un.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,m=Jn(r)?function(){return r(a)}:function(){return r||2.8},x,S,w=KE(u,e.type,!0,s),E=function(){return S=!1},T=Or,y=Or,C=function(){l=Wr(u,Sn),y=Du(zs?1:0,l),i&&(T=Du(0,Wr(u,ci))),x=ea},b=function(){f._gsap.y=mu(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},L=function(){if(S){requestAnimationFrame(E);var O=mu(a.deltaY/2),G=y(h.v-O);if(f&&G!==h.v+h.offset){h.offset=G-h.v;var P=mu((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",h.cacheID=lt.cache,xs()}return!0}h.offset&&b(),S=!0},N,W,z,D,k=function(){C(),N.isActive()&&N.vars.scrollY>l&&(h()>l?N.progress(1)&&h(l):N.resetTo("scrollY",l))};return f&&Le.set(f,{y:"+=0"}),e.ignoreCheck=function(U){return zs&&U.type==="touchmove"&&L()||v>1.05&&U.type!=="touchstart"||a.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){S=!1;var U=v;v=mu((at.visualViewport&&at.visualViewport.scale||1)/_),N.pause(),U!==v&&Np(u,v>1.01?!0:i?!1:"x"),W=g(),z=h(),C(),x=ea},e.onRelease=e.onGestureStart=function(U,O){if(h.offset&&b(),!O)D.restart(!0);else{lt.cache++;var G=m(),P,te;i&&(P=g(),te=P+G*.05*-U.velocityX/.227,G*=Ay(g,P,te,Wr(u,ci)),N.vars.scrollX=T(te)),P=h(),te=P+G*.05*-U.velocityY/.227,G*=Ay(h,P,te,Wr(u,Sn)),N.vars.scrollY=y(te),N.invalidate().duration(G).play(.01),(zs&&N.vars.scrollY>=l||P>=l-1)&&Le.to({},{onUpdate:k,duration:G})}o&&o(U)},e.onWheel=function(){N._ts&&N.pause(),Kn()-p>1e3&&(x=0,p=Kn())},e.onChange=function(U,O,G,P,te){if(ea!==x&&C(),O&&i&&g(T(P[2]===O?W+(U.startX-U.x):g()+O-P[1])),G){h.offset&&b();var ce=te[2]===G,Fe=ce?z+U.startY-U.y:h()+G-te[1],Ce=y(Fe);ce&&Fe!==Ce&&(z+=Ce-Fe),h(Ce)}(G||O)&&xs()},e.onEnable=function(){Np(u,i?!1:"x"),et.addEventListener("refresh",k),Pn(at,"resize",k),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){Np(u,!0),bn(at,"resize",k),et.removeEventListener("refresh",k),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new un(e),a.iOS=zs,zs&&!h()&&h(1),zs&&Le.ticker.add(Or),D=a._dc,N=Le.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:qE(h,h(),function(){return N.pause()})},onUpdate:xs,onComplete:D.vars.onComplete}),a};et.sort=function(n){if(Jn(n))return st.sort(n);var e=at.pageYOffset||0;return et.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),st.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};et.observe=function(n){return new un(n)};et.normalizeScroll=function(n){if(typeof n>"u")return oi;if(n===!0&&oi)return oi.enable();if(n===!1){oi&&oi.kill(),oi=n;return}var e=n instanceof un?n:RN(n);return oi&&oi.target===e.target&&oi.kill(),la(e.target)&&(oi=e),e};et.core={_getVelocityProp:F_,_inputObserver:KE,_scrollers:lt,_proxies:qr,bridge:{ss:function(){dr||ca("scrollStart"),dr=Kn()},ref:function(){return qn}}};kE()&&Le.registerPlugin(et);const bN="_about_27umg_1",PN="_grid_27umg_3",LN="_left_27umg_10",DN="_intro_27umg_12",NN="_body_27umg_25",IN="_right_27umg_61",UN="_panel_27umg_67",FN="_panelTitle_27umg_79",ON="_certItem_27umg_88",kN="_extraItem_27umg_89",BN="_certTitle_27umg_103",zN="_extraRole_27umg_104",VN="_certIssuer_27umg_110",HN="_extraOrg_27umg_111",Yn={about:bN,grid:PN,left:LN,intro:DN,body:NN,right:IN,panel:UN,panelTitle:FN,certItem:ON,extraItem:kN,certTitle:BN,extraRole:zN,certIssuer:VN,extraOrg:HN};cn.registerPlugin(et);function GN({active:n=!1}){const e=Ke.useRef(null);Ke.useEffect(()=>{const o=cn.context(()=>{cn.fromTo(".about-text",{opacity:0,y:30},{opacity:1,y:0,duration:.8,stagger:.15,ease:"power2.out",scrollTrigger:{trigger:e.current,start:"top 75%"}}),cn.fromTo(".about-extra",{opacity:0,x:20},{opacity:1,x:0,duration:.7,stagger:.1,ease:"power2.out",scrollTrigger:{trigger:e.current,start:"top 70%"}})},e);return()=>o.revert()},[]);const{personal:t,summary:i,extracurricular:r,certifications:s}=pa;return I.jsx("section",{id:"about",ref:e,className:`${Yn.about} section`,children:I.jsxs("div",{className:"container",children:[I.jsxs("div",{className:"section-header",children:[I.jsx("span",{className:`section-label ${n?"active":""}`,children:"About"}),I.jsx("div",{className:"section-line"})]}),I.jsxs("div",{className:Yn.grid,children:[I.jsxs("div",{className:Yn.left,children:[I.jsxs("p",{className:`${Yn.intro} about-text`,children:["I'm ",I.jsx("strong",{children:t.name}),", a final-year Computer Science student at KIIT University with a passion for building real, production-grade software."]}),I.jsx("p",{className:`${Yn.body} about-text`,children:i})]}),I.jsxs("div",{className:Yn.right,children:[I.jsxs("div",{className:`${Yn.panel} about-extra`,children:[I.jsx("h3",{className:Yn.panelTitle,children:"Certifications"}),s.map(o=>I.jsxs("div",{className:Yn.certItem,children:[I.jsx("span",{className:Yn.certTitle,children:o.title}),I.jsx("span",{className:Yn.certIssuer,children:o.issuer})]},o.title))]}),I.jsxs("div",{className:`${Yn.panel} about-extra`,children:[I.jsx("h3",{className:Yn.panelTitle,children:"Beyond Code"}),r.map(o=>I.jsxs("div",{className:Yn.extraItem,children:[I.jsx("span",{className:Yn.extraRole,children:o.role}),I.jsx("span",{className:Yn.extraOrg,children:o.org})]},o.role))]})]})]})]})})}const WN="_projects_11q18_1",XN="_grid_11q18_3",jN="_card_11q18_9",YN="_cardOpen_11q18_39",$N="_cardLeft_11q18_49",qN="_cardHeader_11q18_63",KN="_cardMeta_11q18_70",ZN="_cardNumber_11q18_76",QN="_cardCategory_11q18_83",JN="_toggleBtn_11q18_91",eI="_cardTitle_11q18_127",tI="_cardDesc_11q18_135",nI="_techRow_11q18_143",iI="_tech_11q18_143",rI="_cardFooter_11q18_166",sI="_link_11q18_174",oI="_cardRight_11q18_190",aI="_highlightsTitle_11q18_202",lI="_highlightsList_11q18_211",uI="_highlightItem_11q18_219",cI="_highlightDot_11q18_228",fI="_cardRightFooter_11q18_238",Ut={projects:WN,grid:XN,card:jN,cardOpen:YN,cardLeft:$N,cardHeader:qN,cardMeta:KN,cardNumber:ZN,cardCategory:QN,toggleBtn:JN,cardTitle:eI,cardDesc:tI,techRow:nI,tech:iI,cardFooter:rI,link:sI,cardRight:oI,highlightsTitle:aI,highlightsList:lI,highlightItem:uI,highlightDot:cI,cardRightFooter:fI};cn.registerPlugin(et);const by=()=>I.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:I.jsx("path",{d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})}),Py=()=>I.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[I.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6",strokeLinecap:"round",strokeLinejoin:"round"}),I.jsx("polyline",{points:"15 3 21 3 21 9",strokeLinecap:"round",strokeLinejoin:"round"}),I.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3",strokeLinecap:"round",strokeLinejoin:"round"})]});function dI({active:n=!1}){const e=Ke.useRef(null),[t,i]=Ke.useState(new Set),r=o=>{i(a=>{const l=new Set(a);return l.has(o)?l.delete(o):l.add(o),l})};Ke.useEffect(()=>{const o=cn.context(()=>{cn.fromTo(".project-card",{opacity:0,y:40},{opacity:1,y:0,duration:.7,stagger:.18,ease:"power3.out",scrollTrigger:{trigger:e.current,start:"top 75%"}})},e);return()=>o.revert()},[]);const{projects:s}=pa;return I.jsx("section",{id:"projects",ref:e,className:`${Ut.projects} section`,children:I.jsxs("div",{className:"container",children:[I.jsxs("div",{className:"section-header",children:[I.jsx("span",{className:`section-label ${n?"active":""}`,children:"Projects"}),I.jsx("div",{className:"section-line"})]}),I.jsx("div",{className:Ut.grid,children:s.map(o=>{const a=t.has(o.id);return I.jsxs("div",{className:`${Ut.card} project-card ${a?Ut.cardOpen:""}`,children:[I.jsxs("div",{className:Ut.cardLeft,children:[I.jsxs("div",{className:Ut.cardHeader,children:[I.jsxs("div",{className:Ut.cardMeta,children:[I.jsx("span",{className:Ut.cardNumber,children:o.number}),I.jsx("span",{className:Ut.cardCategory,children:o.category})]}),I.jsxs("button",{className:Ut.toggleBtn,onClick:()=>r(o.id),children:[a?"Close":"View details",I.jsx("svg",{width:"11",height:"11",viewBox:"0 0 12 12",fill:"none",children:I.jsx("path",{d:a?"M8 2L4 6l4 4":"M4 6h8M8 2l4 4-4 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),I.jsx("h3",{className:Ut.cardTitle,children:o.title}),I.jsx("p",{className:Ut.cardDesc,children:o.description}),I.jsx("div",{className:Ut.techRow,children:o.tech.map(l=>I.jsx("span",{className:Ut.tech,children:l},l))}),!a&&I.jsxs("div",{className:Ut.cardFooter,children:[o.github&&I.jsxs("a",{href:o.github,target:"_blank",rel:"noreferrer",className:Ut.link,children:[I.jsx(by,{})," GitHub"]}),o.demo&&I.jsxs("a",{href:o.demo,target:"_blank",rel:"noreferrer",className:Ut.link,children:[I.jsx(Py,{})," Live Demo"]})]})]}),a&&I.jsxs("div",{className:Ut.cardRight,children:[I.jsx("h4",{className:Ut.highlightsTitle,children:"Key Features"}),I.jsx("ul",{className:Ut.highlightsList,children:o.highlights.map(l=>I.jsxs("li",{className:Ut.highlightItem,children:[I.jsx("span",{className:Ut.highlightDot}),l]},l))}),I.jsxs("div",{className:Ut.cardRightFooter,children:[o.github&&I.jsxs("a",{href:o.github,target:"_blank",rel:"noreferrer",className:Ut.link,children:[I.jsx(by,{})," GitHub"]}),o.demo&&I.jsxs("a",{href:o.demo,target:"_blank",rel:"noreferrer",className:Ut.link,children:[I.jsx(Py,{})," Live Demo"]})]})]})]},o.id)})})]})})}const hI="_skills_1xrz8_1",pI="_grid_1xrz8_5",mI="_group_1xrz8_11",_I="_groupHeader_1xrz8_29",gI="_groupIcon_1xrz8_38",vI="_groupLabel_1xrz8_51",xI="_items_1xrz8_65",yI="_skillItem_1xrz8_71",SI="_skillDot_1xrz8_77",MI="_skillName_1xrz8_86",yr={skills:hI,grid:pI,group:mI,groupHeader:_I,groupIcon:gI,groupLabel:vI,items:xI,skillItem:yI,skillDot:SI,skillName:MI};cn.registerPlugin(et);const EI=[{label:"Languages",key:"languages",icon:"{",icon2:"}"},{label:"Frontend",key:"frontend",icon:"◈",icon2:""},{label:"Backend",key:"backend",icon:"⟳",icon2:""},{label:"Databases",key:"databases",icon:"▦",icon2:""},{label:"Tools",key:"tools",icon:"⚙",icon2:""},{label:"Concepts",key:"concepts",icon:"◎",icon2:""}];function TI({active:n=!1}){const e=Ke.useRef(null);Ke.useEffect(()=>{const i=cn.context(()=>{cn.fromTo(".skill-group",{opacity:0,y:30},{opacity:1,y:0,duration:.6,stagger:.1,ease:"power2.out",scrollTrigger:{trigger:e.current,start:"top 75%"}})},e);return()=>i.revert()},[]);const{skills:t}=pa;return I.jsx("section",{id:"skills",ref:e,className:`${yr.skills} section`,children:I.jsxs("div",{className:"container",children:[I.jsxs("div",{className:"section-header",children:[I.jsx("span",{className:`section-label ${n?"active":""}`,children:"Skills"}),I.jsx("div",{className:"section-line"})]}),I.jsx("div",{className:yr.grid,children:EI.map(({label:i,key:r,icon:s,icon2:o})=>I.jsxs("div",{className:`${yr.group} skill-group`,children:[I.jsxs("div",{className:yr.groupHeader,children:[I.jsx("span",{className:yr.groupIcon,children:s}),I.jsx("h3",{className:yr.groupLabel,children:i}),I.jsx("span",{className:yr.groupIcon,children:o})]}),I.jsx("div",{className:yr.items,children:t[r].map(a=>I.jsxs("div",{className:yr.skillItem,children:[I.jsx("span",{className:yr.skillDot}),I.jsx("span",{className:yr.skillName,children:a})]},a))})]},r))})]})})}const wI="_cols_o5da4_2",AI="_card_o5da4_10",CI="_cardLeft_o5da4_16",RI="_dot_o5da4_23",bI="_line_o5da4_32",PI="_cardRight_o5da4_39",LI="_cardHeader_o5da4_44",DI="_role_o5da4_52",NI="_company_o5da4_60",II="_metaCol_o5da4_66",UI="_period_o5da4_74",FI="_type_o5da4_81",OI="_points_o5da4_91",kI="_point_o5da4_91",BI="_pointDot_o5da4_107",$n={cols:wI,card:AI,cardLeft:CI,dot:RI,line:bI,cardRight:PI,cardHeader:LI,role:DI,company:NI,metaCol:II,period:UI,type:FI,points:OI,point:kI,pointDot:BI};cn.registerPlugin(et);function zI({active:n=!1}){const e=Ke.useRef(null);Ke.useEffect(()=>{const i=cn.context(()=>{cn.fromTo(".exp-item",{opacity:0,x:-20},{opacity:1,x:0,duration:.7,stagger:.15,ease:"power2.out",scrollTrigger:{trigger:e.current,start:"top 75%"}})},e);return()=>i.revert()},[]);const{experience:t}=pa;return I.jsx("section",{id:"experience",ref:e,className:`${$n.exp} section`,children:I.jsx("div",{className:"container",children:I.jsx("div",{className:$n.cols,children:I.jsxs("div",{children:[I.jsxs("div",{className:"section-header",children:[I.jsx("span",{className:`section-label ${n?"active":""}`,children:"Experience"}),I.jsx("div",{className:"section-line"})]}),t.map(i=>I.jsxs("div",{className:`${$n.card} exp-item`,children:[I.jsxs("div",{className:$n.cardLeft,children:[I.jsx("div",{className:$n.dot}),I.jsx("div",{className:$n.line})]}),I.jsxs("div",{className:$n.cardRight,children:[I.jsxs("div",{className:$n.cardHeader,children:[I.jsxs("div",{children:[I.jsx("h3",{className:$n.role,children:i.role}),I.jsx("p",{className:$n.company,children:i.company})]}),I.jsxs("div",{className:$n.metaCol,children:[I.jsx("span",{className:$n.period,children:i.period}),I.jsx("a",{href:"https://drive.google.com/file/d/1_Heb7aW8GAGTW55vkQ7YDKR3kuOMor2o/view?usp=sharing",target:"_blank",rel:"noreferrer",className:$n.type,children:i.type})]})]}),I.jsx("ul",{className:$n.points,children:i.points.map(r=>I.jsxs("li",{className:$n.point,children:[I.jsx("span",{className:$n.pointDot}),r]},r))})]})]},i.company))]})})})})}const VI="_contact_1aray_1",HI="_inner_1aray_3",GI="_left_1aray_10",WI="_heading_1aray_12",XI="_headingAccent_1aray_21",jI="_sub_1aray_25",YI="_emailLink_1aray_33",$I="_linksGrid_1aray_51",qI="_socialCard_1aray_57",KI="_socialLabel_1aray_86",ZI="_socialHandle_1aray_99",on={contact:VI,inner:HI,left:GI,heading:WI,headingAccent:XI,sub:jI,emailLink:YI,linksGrid:$I,socialCard:qI,socialLabel:KI,socialHandle:ZI};cn.registerPlugin(et);function QI({active:n=!1}){const e=Ke.useRef(null);Ke.useEffect(()=>{const i=cn.context(()=>{cn.fromTo(".contact-el",{opacity:0,y:25},{opacity:1,y:0,duration:.7,stagger:.12,ease:"power2.out",scrollTrigger:{trigger:e.current,start:"top 75%"}})},e);return()=>i.revert()},[]);const{personal:t}=pa;return I.jsx("section",{id:"contact",ref:e,className:`${on.contact} section`,children:I.jsxs("div",{className:"container",children:[I.jsxs("div",{className:"section-header",children:[I.jsx("span",{className:`section-label ${n?"active":""}`,children:"Contact"}),I.jsx("div",{className:"section-line"})]}),I.jsxs("div",{className:on.inner,children:[I.jsxs("div",{className:on.left,children:[I.jsxs("h2",{className:`${on.heading} contact-el`,children:["Let's build",I.jsx("br",{}),I.jsx("span",{className:on.headingAccent,children:"something"})]}),I.jsx("p",{className:`${on.sub} contact-el`,children:"I'm open to full-time roles, internships, and freelance projects. Reach out and let's talk."}),I.jsxs("a",{href:`mailto:${t.email}`,className:`${on.emailLink} contact-el`,children:[t.email,I.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:I.jsx("path",{d:"M3 8h10M9.5 4.5L13 8l-3.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),I.jsx("div",{className:on.right,children:I.jsxs("div",{className:`${on.linksGrid} contact-el`,children:[I.jsxs("a",{href:t.github,target:"_blank",rel:"noreferrer",className:on.socialCard,children:[I.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:I.jsx("path",{d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"})}),I.jsx("span",{className:on.socialLabel,children:"GitHub"}),I.jsx("span",{className:on.socialHandle,children:"@chocomoco24"})]}),I.jsxs("a",{href:t.instagram,target:"_blank",rel:"noreferrer",className:on.socialCard,children:[I.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:I.jsx("path",{d:"M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 1.5A4 4 0 003.5 7.5v9A4 4 0 007.5 20.5h9a4 4 0 004-4v-9a4 4 0 00-4-4h-9zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"})}),I.jsx("span",{className:on.socialLabel,children:"Instagram"}),I.jsx("span",{className:on.socialHandle,children:"@pyaaz._"})]}),I.jsxs("a",{href:t.linkedin,target:"_blank",rel:"noreferrer",className:on.socialCard,children:[I.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:[I.jsx("path",{d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),I.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),I.jsx("span",{className:on.socialLabel,children:"LinkedIn"}),I.jsx("span",{className:on.socialHandle,children:"debarghya4"})]}),I.jsxs("a",{href:`mailto:${t.email}`,className:`${on.socialCard}`,children:[I.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:I.jsx("path",{d:"M22 5.924c-.793.352-1.647.588-2.538.694a4.47 4.47 0 001.959-2.47 8.936 8.936 0 01-2.83 1.082 4.458 4.458 0 00-7.59 4.061A12.646 12.646 0 013 4.81a4.458 4.458 0 001.38 5.94 4.42 4.42 0 01-2.02-.56v.06a4.458 4.458 0 003.57 4.37 4.485 4.485 0 01-2.012.077 4.459 4.459 0 004.16 3.09 8.938 8.938 0 01-5.535 1.91c-.36 0-.714-.02-1.063-.062a12.61 12.61 0 006.83 2.002c8.2 0 12.68-6.79 12.68-12.68 0-.193-.005-.386-.014-.577A9.053 9.053 0 0022 5.924z"})}),I.jsx("span",{className:on.socialLabel,children:"Twitter"}),I.jsx("span",{className:on.socialHandle,children:"@debarghyadatta4"})]})]})})]})]})})}const JI="_footer_trrgj_1",eU="_inner_trrgj_6",tU="_left_trrgj_13",nU="_logo_trrgj_19",iU="_dot_trrgj_25",rU="_copy_trrgj_27",Ba={footer:JI,inner:eU,left:tU,logo:nU,dot:iU,copy:rU};function sU(){const{personal:n}=pa,e=new Date().getFullYear();return I.jsx("footer",{className:Ba.footer,children:I.jsx("div",{className:`${Ba.inner} container`,children:I.jsxs("div",{className:Ba.left,children:[I.jsxs("span",{className:Ba.logo,children:[I.jsx("span",{className:Ba.dot,children:"."}),"Portfolio"]}),I.jsxs("span",{className:Ba.copy,children:["© ",e," ",n.name,". All rights reserved. //  Built with ❤️ by CHOCOMOCO"]})]})})})}const oU="_pill_14j2r_1",aU="_pillLink_14j2r_53",lU="_pillLinkActive_14j2r_129",uU="_fabBtn_14j2r_149",cU="_fabResume_14j2r_151",fU="_fabVisible_14j2r_247",Lo={pill:oU,pillLink:aU,pillLinkActive:lU,fabBtn:uU,fabResume:cU,fabVisible:fU},Ly=[{label:"About",href:"#about"},{label:"Projects",href:"#projects"},{label:"Skills",href:"#skills"},{label:"Experience",href:"#experience"},{label:"Contact",href:"#contact"}];function dU(){const n=Ke.useRef(null),[e,t]=Ke.useState(""),[i,r]=Ke.useState(!1),{setLoading:s}=GM();return Ke.useEffect(()=>{const{loaded:o}=hR(s);o()},[]),Ke.useEffect(()=>{cn.fromTo(n.current,{y:-60,opacity:0,scale:.95},{y:0,opacity:1,scale:1,duration:.9,ease:"power3.out",delay:.3})},[]),Ke.useEffect(()=>{const o=()=>{const a=window.scrollY/(document.body.scrollHeight-window.innerHeight);r(a>=.35)};return window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]),Ke.useEffect(()=>{const o=Ly.map(u=>u.href.slice(1)),a=[],l=document.getElementById("hero");if(l){const u=new IntersectionObserver(([c])=>{c.isIntersecting&&t("")},{rootMargin:"-40% 0px -55% 0px",threshold:0});u.observe(l),a.push(u)}return o.forEach(u=>{const c=document.getElementById(u);if(!c)return;const d=new IntersectionObserver(([f])=>{f.isIntersecting&&t(u)},{rootMargin:"-40% 0px -55% 0px",threshold:0});d.observe(c),a.push(d)}),()=>a.forEach(u=>u.disconnect())},[]),I.jsxs(I.Fragment,{children:[I.jsx(gR,{}),I.jsx("ul",{ref:n,className:Lo.pill,children:Ly.map(o=>{const a=o.href.slice(1),l=e===a;return I.jsx("li",{children:I.jsx("a",{href:o.href,className:`${Lo.pillLink} ${l?Lo.pillLinkActive:""}`,children:o.label})},o.href)})}),I.jsx(ER,{}),I.jsxs("main",{children:[I.jsx(uN,{}),I.jsx(GN,{active:e==="about"}),I.jsx(dI,{active:e==="projects"}),I.jsx(TI,{active:e==="skills"}),I.jsx(zI,{active:e==="experience"}),I.jsx(QI,{active:e==="contact"})]}),I.jsx(sU,{}),I.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`${Lo.fabBtn} ${i?Lo.fabVisible:""}`,"aria-label":"Back to top",children:I.jsx("svg",{width:"25",height:"25",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:I.jsx("path",{d:"M12 19V5M5 12l7-7 7 7",strokeLinecap:"round",strokeLinejoin:"round"})})}),I.jsxs("a",{href:"https://drive.google.com/file/d/1ZgRMh2SbvTeMjgj9xAVYLdBhZ_D2YLlQ/view?usp=sharing",target:"_blank",rel:"noreferrer",className:`${Lo.fabResume} ${i?Lo.fabVisible:""}`,"aria-label":"View Resume",children:[I.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[I.jsx("path",{d:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z",strokeLinecap:"round",strokeLinejoin:"round"}),I.jsx("polyline",{points:"14 2 14 8 20 8",strokeLinecap:"round",strokeLinejoin:"round"}),I.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13",strokeLinecap:"round"}),I.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17",strokeLinecap:"round"}),I.jsx("polyline",{points:"10 9 9 9 8 9",strokeLinecap:"round",strokeLinejoin:"round"})]}),I.jsx("span",{children:"Resume"})]})]})}function hU(){return I.jsx(pR,{children:I.jsx(dU,{})})}W1(document.getElementById("root")).render(I.jsx(Ke.StrictMode,{children:I.jsx(hU,{})}));
