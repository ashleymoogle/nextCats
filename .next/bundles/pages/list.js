module.exports=webpackJsonp([3],[function(t,e,r){t.exports=r(95)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports=require("next/head")},,,,function(t,e,r){t.exports=r(69)},function(t,e,r){(function(e){var n="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(70),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}).call(e,function(){return this}())},function(t,e,r){(function(e,r){!function(e){"use strict";function n(t,e,r,n){var o=e&&e.prototype instanceof i?e:i,a=Object.create(o.prototype),u=new p(n||[]);return a._invoke=l(t,r,u),a}function o(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function a(){}function u(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){this.arg=t}function f(t){function e(r,n,i,a){var u=o(t[r],t,n);if("throw"!==u.type){var s=u.arg,f=s.value;return f instanceof c?Promise.resolve(f.arg).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(f).then(function(t){s.value=t,i(s)},a)}a(u.arg)}function n(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return i=i?i.then(n,n):n()}"object"==typeof r&&r.domain&&(e=r.domain.bind(e));var i;this._invoke=n}function l(t,e,r){var n=T;return function(i,a){if(n===A)throw new Error("Generator is already running");if(n===P){if("throw"===i)throw a;return v()}for(;;){var u=r.delegate;if(u){if("return"===i||"throw"===i&&u.iterator[i]===m){r.delegate=null;var s=u.iterator.return;if(s){var c=o(s,u.iterator,a);if("throw"===c.type){i="throw",a=c.arg;continue}}if("return"===i)continue}var c=o(u.iterator[i],u.iterator,a);if("throw"===c.type){r.delegate=null,i="throw",a=c.arg;continue}i="next",a=m;var f=c.arg;if(!f.done)return n=j,f;r[u.resultName]=f.value,r.next=u.nextLoc,r.delegate=null}if("next"===i)r.sent=r._sent=a;else if("throw"===i){if(n===T)throw n=P,a;r.dispatchException(a)&&(i="next",a=m)}else"return"===i&&r.abrupt("return",a);n=A;var c=o(t,e,r);if("normal"===c.type){n=r.done?P:j;var f={value:c.arg,done:r.done};if(c.arg!==L)return f;r.delegate&&"next"===i&&(a=m)}else"throw"===c.type&&(n=P,i="throw",a=c.arg)}}}function h(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function y(t){if(t){var e=t[g];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(b.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=m,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:m,done:!0}}var m,b=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},g=w.iterator||"@@iterator",x=w.toStringTag||"@@toStringTag",E="object"==typeof t,_=e.regeneratorRuntime;if(_)return void(E&&(t.exports=_));_=e.regeneratorRuntime=E?t.exports:{},_.wrap=n;var T="suspendedStart",j="suspendedYield",A="executing",P="completed",L={},O=u.prototype=i.prototype;a.prototype=O.constructor=u,u.constructor=a,u[x]=a.displayName="GeneratorFunction",_.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},_.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(O),t},_.awrap=function(t){return new c(t)},s(f.prototype),_.async=function(t,e,r,o){var i=new f(n(t,e,r,o));return _.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},s(O),O[g]=function(){return this},O[x]="Generator",O.toString=function(){return"[object Generator]"},_.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},_.values=y,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.tryEntries.forEach(d),!t)for(var e in this)"t"===e.charAt(0)&&b.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=b.call(o,"catchLoc"),u=b.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&b.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?this.next=o.finallyLoc:this.complete(i),L},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),d(r),L}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;d(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:y(t),resultName:e,nextLoc:r},L}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,function(){return this}(),r(71))},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){y&&d&&(y=!1,d.length?p=d.concat(p):v=-1,p.length&&u())}function u(){if(!y){var t=o(a);y=!0;for(var e=p.length;e;){for(d=p,p=[];++v<e;)d&&d[v].run();v=-1,e=p.length}d=null,y=!1,i(t)}}function s(t,e){this.fun=t,this.array=e}function c(){}var f,l,h=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(t){l=n}}();var d,p=[],y=!1,v=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];p.push(new s(t,e)),1!==p.length||y||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=c,h.addListener=c,h.once=c,h.off=c,h.removeListener=c,h.removeAllListeners=c,h.emit=c,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(73),i=n(o);e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,r){function n(o,a){try{var u=e[o](a),s=u.value}catch(t){return void r(t)}return u.done?void t(s):i.default.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)})}return n("next")})}}},function(t,e,r){t.exports={default:r(74),__esModule:!0}},function(t,e,r){r(54),r(22),r(38),r(75),t.exports=r(9).Promise},function(t,e,r){"use strict";var n,o=r(17),i=r(26),a=r(8),u=r(10),s=r(76),c=r(7),f=r(53),l=r(52),h=r(11),d=r(77),p=r(78),y=r(59).set,v=r(83),m=r(35)("species"),b=r(84),w=r(85),g="Promise",x=a.process,E="process"==s(x),_=a[g],T=function(){},j=function(t){var e,r=new _(T);return t&&(r.constructor=function(t){t(T,T)}),(e=_.resolve(r)).catch(T),e===r},A=function(){function t(e){var r=new _(e);return y(r,t.prototype),r}var e=!1;try{if(e=_&&_.resolve&&j(),y(t,_),t.prototype=o.create(_.prototype,{constructor:{value:t}}),t.resolve(5).then(function(){})instanceof t||(e=!1),e&&r(30)){var n=!1;_.resolve(o.setDesc({},"then",{get:function(){n=!0}})),e=n}}catch(t){e=!1}return e}(),P=function(t,e){return!(!i||t!==_||e!==n)||v(t,e)},L=function(t){var e=l(t)[m];return void 0!=e?e:t},O=function(t){var e;return!(!f(t)||"function"!=typeof(e=t.then))&&e},B=function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=h(e),this.reject=h(r)},k=function(t){try{t()}catch(t){return{error:t}}},R=function(t,e){if(!t.n){t.n=!0;var r=t.c;w(function(){for(var n=t.v,o=1==t.s,i=0,u=function(e){var r,i,a=o?e.ok:e.fail,u=e.resolve,s=e.reject;try{a?(o||(t.h=!0),r=a===!0?n:a(n),r===e.promise?s(TypeError("Promise-chain cycle")):(i=O(r))?i.call(r,u,s):u(r)):s(n)}catch(t){s(t)}};r.length>i;)u(r[i++]);r.length=0,t.n=!1,e&&setTimeout(function(){var e,r,o=t.p;S(o)&&(E?x.emit("unhandledRejection",n,o):(e=a.onunhandledrejection)?e({promise:o,reason:n}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",n)),t.a=void 0},1)})}},S=function(t){var e,r=t._d,n=r.a||r.c,o=0;if(r.h)return!1;for(;n.length>o;)if(e=n[o++],e.fail||!S(e.promise))return!1;return!0},U=function(t){var e=this;e.d||(e.d=!0,e=e.r||e,e.v=t,e.s=2,e.a=e.c.slice(),R(e,!0))},F=function(t){var e,r=this;if(!r.d){r.d=!0,r=r.r||r;try{if(r.p===t)throw TypeError("Promise can't be resolved itself");(e=O(t))?w(function(){var n={r:r,d:!1};try{e.call(t,u(F,n,1),u(U,n,1))}catch(t){U.call(n,t)}}):(r.v=t,r.s=1,R(r,!1))}catch(t){U.call({r:r,d:!1},t)}}};A||(_=function(t){h(t);var e=this._d={p:d(this,_,g),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};try{t(u(F,e,1),u(U,e,1))}catch(t){U.call(e,t)}},r(90)(_.prototype,{then:function(t,e){var r=new B(b(this,_)),n=r.promise,o=this._d;return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,o.c.push(r),o.a&&o.a.push(r),o.s&&R(o,!1),n},catch:function(t){return this.then(void 0,t)}})),c(c.G+c.W+c.F*!A,{Promise:_}),r(34)(_,g),r(91)(g),n=r(9)[g],c(c.S+c.F*!A,g,{reject:function(t){var e=new B(this),r=e.reject;return r(t),e.promise}}),c(c.S+c.F*(!A||j(!0)),g,{resolve:function(t){if(t instanceof _&&P(t.constructor,this))return t;var e=new B(this),r=e.resolve;return r(t),e.promise}}),c(c.S+c.F*!(A&&r(92)(function(t){_.all(t).catch(function(){})})),g,{all:function(t){var e=L(this),r=new B(e),n=r.resolve,i=r.reject,a=[],u=k(function(){p(t,!1,a.push,a);var r=a.length,u=Array(r);r?o.each.call(a,function(t,o){var a=!1;e.resolve(t).then(function(t){a||(a=!0,u[o]=t,--r||n(u))},i)}):n(u)});return u&&i(u.error),r.promise},race:function(t){var e=L(this),r=new B(e),n=r.reject,o=k(function(){p(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},function(t,e,r){var n=r(44),o=r(35)("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=(e=Object(t))[o])?r:i?n(e):"Object"==(a=n(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e){t.exports=function(t,e,r){if(!(t instanceof e))throw TypeError(r+": use the 'new' operator!");return t}},function(t,e,r){var n=r(10),o=r(79),i=r(80),a=r(52),u=r(81),s=r(82);t.exports=function(t,e,r,c){var f,l,h,d=s(t),p=n(r,c,e?2:1),y=0;if("function"!=typeof d)throw TypeError(t+" is not iterable!");if(i(d))for(f=u(t.length);f>y;y++)e?p(a(l=t[y])[0],l[1]):p(t[y]);else for(h=d.call(t);!(l=h.next()).done;)o(h,p,l.value,e)}},function(t,e,r){var n=r(52);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&n(i.call(t)),e}}},function(t,e,r){var n=r(32),o=r(35)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||i[o]===t)}},function(t,e,r){var n=r(24),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(76),o=r(35)("iterator"),i=r(32);t.exports=r(9).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[n(t)]}},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},function(t,e,r){var n=r(52),o=r(11),i=r(35)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||void 0==(r=n(a)[i])?e:o(r)}},function(t,e,r){var n,o,i,a=r(8),u=r(86).set,s=a.MutationObserver||a.WebKitMutationObserver,c=a.process,f=a.Promise,l="process"==r(44)(c),h=function(){var t,e,r;for(l&&(t=c.domain)&&(c.domain=null,t.exit());n;)e=n.domain,r=n.fn,e&&e.enter(),r(),e&&e.exit(),n=n.next;o=void 0,t&&t.enter()};if(l)i=function(){c.nextTick(h)};else if(s){var d=1,p=document.createTextNode("");new s(h).observe(p,{characterData:!0}),i=function(){p.data=d=-d}}else i=f&&f.resolve?function(){f.resolve().then(h)}:function(){u.call(a,h)};t.exports=function(t){var e={fn:t,next:void 0,domain:l&&c.domain};o&&(o.next=e),n||(n=e,i()),o=e}},function(t,e,r){var n,o,i,a=r(10),u=r(87),s=r(88),c=r(89),f=r(8),l=f.process,h=f.setImmediate,d=f.clearImmediate,p=f.MessageChannel,y=0,v={},m="onreadystatechange",b=function(){var t=+this;if(v.hasOwnProperty(t)){var e=v[t];delete v[t],e()}},w=function(t){b.call(t.data)};h&&d||(h=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return v[++y]=function(){u("function"==typeof t?t:Function(t),e)},n(y),y},d=function(t){delete v[t]},"process"==r(44)(l)?n=function(t){l.nextTick(a(b,t,1))}:p?(o=new p,i=o.port2,o.port1.onmessage=w,n=a(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(t){f.postMessage(t+"","*")},f.addEventListener("message",w,!1)):n=m in c("script")?function(t){s.appendChild(c("script"))[m]=function(){s.removeChild(this),b.call(t)}}:function(t){setTimeout(a(b,t,1),0)}),t.exports={set:h,clear:d}},function(t,e){t.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},function(t,e,r){t.exports=r(8).document&&document.documentElement},function(t,e,r){var n=r(53),o=r(8).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,r){var n=r(27);t.exports=function(t,e){for(var r in e)n(t,r,e[r]);return t}},function(t,e,r){"use strict";var n=r(9),o=r(17),i=r(30),a=r(35)("species");t.exports=function(t){var e=n[t];i&&e&&!e[a]&&o.setDesc(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,r){var n=r(35)("iterator"),o=!1;try{var i=[7][n]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i=[7],a=i[n]();a.next=function(){return{done:r=!0}},i[n]=function(){return a},t(i)}catch(t){}return r}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(68),i=n(o),a=r(72),u=n(a),s=r(1),c=n(s),f=r(13),l=n(f),h=r(14),d=n(h),p=r(18),y=n(p),v=r(55),m=n(v),b=r(62),w=n(b),g=r(64),x=n(g),E=r(94),_=n(E),T=r(65),j={menu:{width:"100%",display:"flex"}},A=function(t){function e(){return(0,l.default)(this,e),(0,y.default)(this,(e.__proto__||(0,c.default)(e)).apply(this,arguments))}return(0,m.default)(e,t),(0,d.default)(e,[{key:"render",value:function(){return w.default.createElement("div",{className:(0,T.style)(j.menu)},w.default.createElement(x.default,null,w.default.createElement("title",null,"CATS"),w.default.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),w.default.createElement("div",null,w.default.createElement("ul",null,w.default.createElement("li",null,w.default.createElement(_.default,{href:"/"},w.default.createElement("a",null,"Home"))),w.default.createElement("li",null,w.default.createElement(_.default,{href:"/list"},w.default.createElement("a",null,"List"))))))}}],[{key:"getInitialProps",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(i.default.mark(function t(e){var r=e.req;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r?{userAgent:r.headers["user-agent"]}:{userAgent:navigator.userAgent});case 1:case"end":return t.stop()}},t,this)}));return t}()}]),e}(w.default.Component);e.default=A},function(t,e){t.exports=require("next/link")},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(68),i=n(o),a=r(72),u=n(a),s=r(1),c=n(s),f=r(13),l=n(f),h=r(14),d=n(h),p=r(18),y=n(p),v=r(55),m=n(v),b=r(62),w=n(b),g=r(93),x=n(g),E=r(96),_=n(E);r(97);var T=r(65),j={items:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}},A=function(t){function e(){return(0,l.default)(this,e),(0,y.default)(this,(e.__proto__||(0,c.default)(e)).apply(this,arguments))}return(0,m.default)(e,t),(0,d.default)(e,[{key:"render",value:function(){return console.log(this.props.data[0]),w.default.createElement("div",null,w.default.createElement(x.default,null),w.default.createElement("div",{className:(0,T.style)(j.items)},this.props.data.map(function(t){return w.default.createElement(_.default,{key:t.id,data:t})})))}}],[{key:"getInitialProps",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(i.default.mark(function t(e){var r,n,o;e.req;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return r=t.sent,t.next=5,r.json();case 5:return n=t.sent,o=[n[0],n[1],n[2],n[3],n[4]],t.abrupt("return",{data:o});case 8:case"end":return t.stop()}},t,this)}));return t}()}]),e}(w.default.Component);e.default=A},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(68),i=n(o),a=r(72),u=n(a),s=r(1),c=n(s),f=r(13),l=n(f),h=r(14),d=n(h),p=r(18),y=n(p),v=r(55),m=n(v),b=r(62),w=n(b),g=r(65),x={itemsingle:{width:"30%",textAlign:"center",margin:"5px",padding:"5px",border:"2px solid grey",borderRadius:"5px",display:"flex",justifyContent:"space-between",flexDirection:"column"},itemimage:{display:"block",maxWidth:"100%",maxHeight:"200px"},itemtitle:{fontWeight:"bolder",fontSize:"large",textDecoration:"underline",padding:"5px"},itembody:{fontStyle:"italic",fontWeight:"bolder"},itemstop:{display:"flex",justifyContent:"space-between"}},E=function(t){function e(){return(0,l.default)(this,e),(0,y.default)(this,(e.__proto__||(0,c.default)(e)).apply(this,arguments))}return(0,m.default)(e,t),(0,d.default)(e,[{key:"render",value:function(){console.log(this.props);var t=this.props.data;return w.default.createElement("div",{className:(0,g.style)(x.itemsingle)},w.default.createElement("div",{className:(0,g.style)(x.itemstop)},w.default.createElement("div",null,w.default.createElement("img",{className:(0,g.style)(x.itemimage),src:"/static/img/"+t.id+".jpg"})),w.default.createElement("div",{className:(0,g.style)(x.itemtitle)},t.title)),w.default.createElement("div",{className:(0,g.style)(x.itembody)},t.body))}}],[{key:"getInitialProps",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,u.default)(i.default.mark(function t(e){var r=e.req;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r?{userAgent:r.headers["user-agent"]}:{userAgent:navigator.userAgent});case 1:case"end":return t.stop()}},t,this)}));return t}()}]),e}(w.default.Component);e.default=E},function(t,e,r){r(98),t.exports=self.fetch.bind(self)},function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return m.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function a(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function u(t){var e=new FileReader,r=a(e);return e.readAsArrayBuffer(t),r}function s(t){var e=new FileReader,r=a(e);return e.readAsText(t),r}function c(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(m.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(m.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(m.arrayBuffer&&m.blob&&w(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!g(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(u)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return s(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(t){var e=t.toUpperCase();return x.indexOf(e)>-1?e:t}function d(t,e){e=e||{};var r=e.body;if("string"==typeof t)this.url=t;else{if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=h(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function y(t){var e=new o;return t.split("\r\n").forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function v(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var m={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(m.arrayBuffer)var b=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(t){return t&&DataView.prototype.isPrototypeOf(t)},g=ArrayBuffer.isView||function(t){return t&&b.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,n){t=e(t),n=r(n);var o=this.map[t];this.map[t]=o?o+","+n:n},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,n){this.map[e(t)]=r(n)},o.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var x=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},l.call(d.prototype),l.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];v.redirect=function(t,e){if(E.indexOf(e)===-1)throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=d,t.Response=v,t.fetch=function(t,e){return new Promise(function(r,n){var o=new d(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new v(e,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"==typeof o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}]);