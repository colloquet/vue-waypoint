!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueWaypoint=e():t.VueWaypoint=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=14)}([function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var u=e[o];"number"==typeof u[0]&&i[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(t,e){function n(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=s[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(l(i.parts[r],e))}else{for(var u=[],r=0;r<i.parts.length;r++)u.push(l(i.parts[r],e));s[i.id]={id:i.id,refs:1,parts:u}}}}function i(t){for(var e=[],n={},i=0;i<t.length;i++){var o=t[i],r=o[0],u=o[1],l=o[2],c=o[3],a={css:u,media:l,sourceMap:c};n[r]?n[r].parts.push(a):e.push(n[r]={id:r,parts:[a]})}return e}function o(t,e){var n=p(),i=y[y.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function r(t){t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function u(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function l(t,e){var n,i,o;if(e.singleton){var l=v++;n=h||(h=u(e)),i=c.bind(null,n,l,!1),o=c.bind(null,n,l,!0)}else n=u(e),i=a.bind(null,n),o=function(){r(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}function c(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var r=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(r,u[e]):t.appendChild(r)}}function a(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var s={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=f(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,y=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var o=i(t);return n(o,e),function(t){for(var r=[],u=0;u<o.length;u++){var l=o[u],c=s[l.id];c.refs--,r.push(c)}if(t){var a=i(t);n(a,e)}for(var u=0;u<r.length;u++){var c=r[u];if(0===c.refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete s[c.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){!function(e,n){t.exports=n()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){var i,o,r;!function(n,u){o=[],i=u,r="function"==typeof i?i.apply(e,o):i,!(void 0!==r&&(t.exports=r))}(this,function(){"use strict";var t="0.5.2",e=function(t,e){for(var n=1;e--;)n*=t--;return n},n=function(t,n){return n>t?0:e(t,n)/e(n,n)},i=function(t){return e(t,t)},o=function(t,e){var n=1;if(e)n=i(e);else{for(e=1;n<t;n*=++e);n>t&&(n/=e--)}for(var o=[0];e;n/=e--)o[e]=Math.floor(t/n),t%=n;return o},r=function(t,e){Object.keys(e).forEach(function(n){Object.defineProperty(t,n,{value:e[n],configurable:"next"==n})})},u=function(t,e){Object.defineProperty(t,e,{writable:!0})},l=function(t){var e,n=[];for(this.init();e=this.next();)n.push(t?t(e):e);return this.init(),n},c={toArray:l,map:l,forEach:function(t){var e;for(this.init();e=this.next();)t(e);this.init()},filter:function(t){var e,n=[];for(this.init();e=this.next();)t(e)&&n.push(e);return this.init(),n},lazyMap:function(t){return this._lazyMap=t,this},lazyFilter:function(t){if(Object.defineProperty(this,"next",{writable:!0}),"function"!=typeof t)this.next=this._next;else{"function"!=typeof this._next&&(this._next=this.next);var e=this._next.bind(this);this.next=function(){for(var n;n=e();)if(t(n))return n;return n}.bind(this)}return Object.defineProperty(this,"next",{writable:!1}),this}},a=function(t,e){var n=1<<t.length,i=function(){return n},o=Object.create(t.slice(),{length:{get:i}});return u(o,"index"),r(o,{valueOf:i,init:function(){o.index=0},nth:function(t){if(!(t>=n)){for(var e=0,i=[];t;t>>>=1,e++)1&t&&i.push(this[e]);return"function"==typeof o._lazyMap?o._lazyMap(i):i}},next:function(){return this.nth(this.index++)}}),r(o,c),o.init(),"function"==typeof e?o.map(e):o},s=function(t){var e=t&-t,n=t+e,i=n&-n,o=(i/e>>1)-1;return n|o},f=function(t,e,i){if(e||(e=t.length),e<1)throw new RangeError;if(e>t.length)throw new RangeError;var o=(1<<e)-1,l=n(t.length,e),a=1<<t.length,f=function(){return l},d=Object.create(t.slice(),{length:{get:f}});return u(d,"index"),r(d,{valueOf:f,init:function(){this.index=o},next:function(){if(!(this.index>=a)){for(var t=0,e=this.index,n=[];e;e>>>=1,t++)1&e&&(n[n.length]=this[t]);return this.index=s(this.index),"function"==typeof d._lazyMap?d._lazyMap(n):n}}}),r(d,c),d.init(),"function"==typeof i?d.map(i):d},d=function(t,e){var n=t,i=e,o=0;for(o=n.length-1;o>=0&&1==n[o];o--)i--;if(0==i){n[n.length]=1;for(var r=n.length-2;r>=0;r--)n[r]=r<e-1?1:0}else{for(var u=-1,l=-1,o=0;o<n.length;o++)if(0==n[o]&&u!=-1&&(l=o),1==n[o]&&(u=o),l!=-1&&u!=-1){n[l]=1,n[u]=0;break}i=e;for(var o=n.length-1;o>=u;o--)1==n[o]&&i--;for(var o=0;o<u;o++)n[o]=o<i?1:0}return n},p=function(t){for(var e=[],n=0;n<t;n++)e[n]=1;return e[0]=1,e},h=function(t,e,i){if(e||(e=t.length),e<1)throw new RangeError;if(e>t.length)throw new RangeError;var o=p(e),l=n(t.length,e),a=t.length,s=function(){return l},f=Object.create(t.slice(),{length:{get:s}});return u(f,"index"),r(f,{valueOf:s,init:function(){this.index=o.concat()},next:function(){if(!(this.index.length>a)){for(var t=0,n=this.index,i=[],o=0;o<n.length;o++,t++)n[o]&&(i[i.length]=this[t]);return d(this.index,e),"function"==typeof f._lazyMap?f._lazyMap(i):i}}}),r(f,c),f.init(),"function"==typeof i?f.map(i):f},v=function(t){var e=t.slice(),n=i(e.length);return e.index=0,e.next=function(){if(!(this.index>=n)){for(var t=this.slice(),i=o(this.index,this.length),r=[],u=this.length-1;u>=0;--u)r.push(t.splice(i[u],1)[0]);return this.index++,"function"==typeof e._lazyMap?e._lazyMap(r):r}},e},y=function(t,n,i){if(n||(n=t.length),n<1)throw new RangeError;if(n>t.length)throw new RangeError;var o=e(t.length,n),l=function(){return o},a=Object.create(t.slice(),{length:{get:l}});return u(a,"cmb"),u(a,"per"),r(a,{valueOf:function(){return o},init:function(){this.cmb=f(t,n),this.per=v(this.cmb.next())},next:function(){var t=this.per.next();if(!t){var e=this.cmb.next();if(!e)return;return this.per=v(e),this.next()}return"function"==typeof a._lazyMap?a._lazyMap(t):t}}),r(a,c),a.init(),"function"==typeof i?a.map(i):a},w=function(t){for(var n=0,i=1;i<=t;i++){var o=e(t,i);n+=o}return n},_=function(t,e){var n=w(t.length),i=function(){return n},o=Object.create(t.slice(),{length:{get:i}});return u(o,"cmb"),u(o,"per"),u(o,"nelem"),r(o,{valueOf:function(){return n},init:function(){this.nelem=1,this.cmb=f(t,this.nelem),this.per=v(this.cmb.next())},next:function(){var e=this.per.next();if(!e){var n=this.cmb.next();if(!n){if(this.nelem++,this.nelem>t.length)return;if(this.cmb=f(t,this.nelem),n=this.cmb.next(),!n)return}return this.per=v(n),this.next()}return"function"==typeof o._lazyMap?o._lazyMap(e):e}}),r(o,c),o.init(),"function"==typeof e?o.map(e):o},m=Array.prototype.slice,g=function(){if(!arguments.length)throw new RangeError;var t=m.call(arguments),e=t.reduce(function(t,e){return t*e.length},1),n=function(){return e},i=t.length,o=Object.create(t,{length:{get:n}});if(!e)throw new RangeError;return u(o,"index"),r(o,{valueOf:n,dim:i,init:function(){this.index=0},get:function(){if(arguments.length===this.length){for(var t=[],e=0;e<i;e++){var n=arguments[e];if(n>=this[e].length)return;t.push(this[e][n])}return"function"==typeof o._lazyMap?o._lazyMap(t):t}},nth:function(t){for(var e=[],n=0;n<i;n++){var r=this[n].length,u=t%r;e.push(this[n][u]),t-=u,t/=r}return"function"==typeof o._lazyMap?o._lazyMap(e):e},next:function(){if(!(this.index>=e)){var t=this.nth(this.index);return this.index++,t}}}),r(o,c),o.init(),o},b=function(t,e,n){if(e||(e=t.length),e<1)throw new RangeError;var i=t.length,o=Math.pow(i,e),l=function(){return o},a=Object.create(t.slice(),{length:{get:l}});return u(a,"index"),r(a,{valueOf:l,init:function(){a.index=0},nth:function(n){if(!(n>=o)){for(var r=[],u=0;u<e;u++){var l=n%i;r.push(t[l]),n-=l,n/=i}return"function"==typeof a._lazyMap?a._lazyMap(r):r}},next:function(){return this.nth(this.index++)}}),r(a,c),a.init(),"function"==typeof n?a.map(n):a},x=Object.create(null);return r(x,{C:n,P:e,factorial:i,factoradic:o,cartesianProduct:g,combination:f,bigCombination:h,permutation:y,permutationCombination:_,power:a,baseN:b,VERSION:t}),x})},function(t,e,n){!function(e,n){t.exports=n()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={install:function(t){t.prototype.$throttle=n._throttle},_throttle:function(t,e,n){n=n||this.$el;var i=!1,o=function(){i||(i=!0,window.requestAnimationFrame(function(){n.dispatchEvent(new window.CustomEvent(e)),i=!1}))};n.addEventListener(t,o)}};e.default=n,"undefined"!=typeof window&&window.Vue&&window.Vue.use(n)}])})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=n(1),u=i(r),l=n(0).combination,c={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{globalTriggers:["resize","scroll"]};c._windowGroup=[],c._customGroups={},u.default._throttle("resize","vue-collision-window_rect_update",window),window.addEventListener("vue-collision-window_rect_update",c._updateWindowRect),window.dispatchEvent(new Event("vue-collision-window_rect_update"));var n=!0,i=!1,r=void 0;try{for(var l,a=e.globalTriggers[Symbol.iterator]();!(n=(l=a.next()).done);n=!0){var s=l.value;u.default._throttle(s,"vue-collision-"+s,window),window.addEventListener("vue-collision-"+s,c.checkAllGroups)}}catch(t){i=!0,r=t}finally{try{!n&&a.return&&a.return()}finally{if(i)throw r}}t.directive("collision",{bind:function(t,e,n){if("undefined"==typeof e.modifiers.prevent&&c._windowGroup.push(n.child),"object"===o(e.value)&&e.value.length){var i=!0,r=!1,u=void 0;try{for(var l,a=e.value[Symbol.iterator]();!(i=(l=a.next()).done);i=!0){var s=l.value;c._pushVnodeToGroup(n.child,s)}}catch(t){r=!0,u=t}finally{try{!i&&a.return&&a.return()}finally{if(r)throw u}}}n.child._collisionObject={windowGroup:"undefined"==typeof e.modifiers.prevent,customGroupsList:"object"===o(e.value)?e.value:[]}},updated:function(t,e,n,i){if("undefined"==typeof e.modifiers.prevent){var r=c._windowGroup.findIndex(function(t){return t===i.child});c._windowGroup[r]=n.child}if("object"===o(e.oldValue)&&e.oldValue.length){var u=e.oldValue.filter(function(t){return e.value.indexOf(t)<0}),l=!0,a=!1,s=void 0;try{for(var f,d=u[Symbol.iterator]();!(l=(f=d.next()).done);l=!0){var p=f.value;_removeVnodeFromGroup(i.child,p)}}catch(t){a=!0,s=t}finally{try{!l&&d.return&&d.return()}finally{if(a)throw s}}var h=e.value.filter(function(t){return e.oldValue.indexOf(t)<0}),v=!0,y=!1,w=void 0;try{for(var _,m=h[Symbol.iterator]();!(v=(_=m.next()).done);v=!0){var g=_.value;c._pushVnodeToGroup(n.child,g)}}catch(t){y=!0,w=t}finally{try{!v&&m.return&&m.return()}finally{if(y)throw w}}var b=e.value.filter(function(t){return e.oldValue.indexOf(t)>-1}),x=!0,O=!1,G=void 0;try{for(var j,E=b[Symbol.iterator]();!(x=(j=E.next()).done);x=!0){var M=j.value,S=c._customGroups[M].vnodes.findIndex(function(t){return t===i.child});c._customGroups[customGroup].vnodes[S]=n.child}}catch(t){O=!0,G=t}finally{try{!x&&E.return&&E.return()}finally{if(O)throw G}}(u.lenght>0||h.lenght>0||b.lenght>0)&&(c._customGroups[customGroup]._combinations=c._combine(c._customGroups[customGroup].vnodes))}n.child._collisionObject.customGroups="object"===o(e.value)?e.value:[]},unbind:function(t,e,n){if("object"===o(e.value)&&e.oldValue.value){if("undefined"==typeof e.modifiers.prevent){var i=c._windowGroup.findIndex(function(t){return t===oldVNode.child});c._windowGroup.splice(i,1)}var r=!0,u=!1,l=void 0;try{for(var a,s=e.value[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var f=a.value;_removeVnodeFromGroup(n.child,f),c._customGroups[f]._combinations=c._combine(c._customGroups[f].vnodes)}}catch(t){u=!0,l=t}finally{try{!r&&s.return&&s.return()}finally{if(u)throw l}}}delete n.child._collisionObject}}),t.mixin({mounted:function(){"undefined"!=typeof this._collisionObject&&c.checkGroups([this],c._filterByGroups(this._collisionObject.customGroupsList))},updated:function(){"undefined"!=typeof this._collisionObject&&c.checkGroups([this],c._filterByGroups(this._collisionObject.customGroupsList))}})},checkAllGroups:function(){c.checkGroups()},checkGroups:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c._windowGroup,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c._customGroups,n=!0,i=!1,o=void 0;try{for(var r,u=t[Symbol.iterator]();!(n=(r=u.next()).done);n=!0){var l=r.value;c._checkCollision(c._windowRect,l.$el.getBoundingClientRect())?l.$emit("collide",window):l.$emit("non-collide",window)}}catch(t){i=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}var a=!0,s=!1,f=void 0;try{for(var d,p=Object.keys(e)[Symbol.iterator]();!(a=(d=p.next()).done);a=!0){var h=d.value,v=!0,y=!1,w=void 0;try{for(var _,m=e[h].combinations[Symbol.iterator]();!(v=(_=m.next()).done);v=!0){var g=_.value;c._checkCollision(g[0].$el.getBoundingClientRect(),g[1].$el.getBoundingClientRect())?(g[0].$emit("collide-"+h,g[1]),g[1].$emit("collide-"+h,g[0])):(g[0].$emit("non-collide-"+h,g[1]),g[1].$emit("non-collide-"+h,g[0]))}}catch(t){y=!0,w=t}finally{try{!v&&m.return&&m.return()}finally{if(y)throw w}}}}catch(t){s=!0,f=t}finally{try{!a&&p.return&&p.return()}finally{if(s)throw f}}},_updateWindowRect:function(){c._windowRect=c._getWindowRect()},_getWindowRect:function(){return{left:0,top:0,width:window.innerWidth,height:window.innerHeight}},_pushVnodeToGroup:function(t,e){c._customGroups.hasOwnProperty(e)||(c._customGroups[e]={vnodes:[],combinations:[]}),c._customGroups[e].vnodes.push(t),c._customGroups[e].combinations=c._combine(c._customGroups[e].vnodes)},_removeVnodeFromGroup:function(t,e){var n=c._customGroups[e].vnodes.findIndex(function(e){return e===t});c._customGroups[e].vnodes.splice(n,1),c._customGroups[e].combinations=c._combine(c._customGroups[e].vnodes)},_filterByGroups:function(t){var e=[],n=!0,i=!1,o=void 0;try{for(var r,u=t[Symbol.iterator]();!(n=(r=u.next()).done);n=!0){var l=r.value;e.push(c._customGroups[l])}}catch(t){i=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return e},_combine:function(t){var e=[];try{for(var n=l(t,2),i=void 0;i=n.next();)e.push(i)}catch(t){}return e},_checkCollision:function(t,e){return t.left<e.left+e.width&&t.left+t.width>e.left&&t.top<e.top+e.height&&t.height+t.top>e.top}};e.default=c,"undefined"!=typeof window&&window.Vue&&window.Vue.use(c)}])})},function(t,e,n){var i,o;n(13),i=n(5);var r=n(11);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-4795ebc7",t.exports=i},function(t,e,n){!function(e,n){t.exports=n()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={install:function(t){t.prototype.$throttle=n._throttle},_throttle:function(t,e,n){n=n||this.$el;var i=!1,o=function(){i||(i=!0,window.requestAnimationFrame(function(){n.dispatchEvent(new window.CustomEvent(e)),i=!1}))};return n.addEventListener(t,o),o}};e.default=n,"undefined"!=typeof window&&window.Vue&&window.Vue.use(n)}])})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),r=i(o);e.default={name:"waypoint",components:{WaypointCollider:r.default},data:function(){return{colliding:!1,lastScrollY:window.scrollY,lastScrollX:window.scrollX,direction:"down",_throttledScrollListener:void 0}},computed:{_scrollHandler:function(){return this.horizontal?this._handleCompleteScroll:this._handleVerticalScroll},_scrollVerticalDirection:function(){return Math.sign(window.scrollY-this.lastScrollY)},_scrollHorizontalDirection:function(){return Math.sign(window.scrollX-this.lastScrollX)},going:function(){return this.colliding?"in":"out"}},props:{active:{type:Boolean,default:!0},position:{type:String,default:void 0},horizontal:{type:Boolean,default:!1}},methods:{_vueWaypointHandle:function(t){this.colliding||(this.colliding=!0,this._emitWaypointEvent())},_vueWaypointHandleOff:function(t){this.colliding&&(this.colliding=!1,this._emitWaypointEvent())},_handleVerticalScroll:function(){this.direction=this._getDirection(),this.lastScrollY=window.scrollY},_handleCompleteScroll:function(){this.direction=this._getDirection(),this.lastScrollY=window.scrollY,this.lastScrollX=window.scrollX},_emitWaypointEvent:function(){this.$emit("waypoint-"+this.direction+"-"+this.going),this.$emit("waypoint",this.direction,this.going)},_getDirection:function(){if(this._scrollVerticalDirection>0)return"down";if(this._scrollVerticalDirection<0)return"up";if(this.horizontal)return this._scrollHorizontalDirection>0?"right":this._scrollHorizontalDirection<0?"left":void 0},_addEventListeners:function(){this._throttledScrollListener=this.$throttle("scroll","v-waypoint-throttled-scroll",window),window.addEventListener("v-waypoint-throttled-scroll",this._scrollHandler)},_updateEventListeners:function(){window.removeEventListener("v-waypoint-throttled-scroll",this._scrollHandler),window.addEventListener("v-waypoint-throttled-scroll",this._scrollHandler)},_removeEventListeners:function(){window.removeEventListener("scroll",this._throttledScrollListener),window.removeEventListener("v-waypoint-throttled-scroll",this._scrollHandler)}},watch:{active:function(){this.active?this._addEventListeners():this._removeEventListeners()}},created:function(){this.active&&this._addEventListeners()},updated:function(){this.active&&this._updateEventListeners()},beforeDestroy:function(){this.active&&this._removeEventListeners()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"waypoint-collider"}},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,".vue-waypoint__waypoint__collider[data-v-176bc24a]{position:relative;width:100%;height:100%}",""])},function(t,e,n){e=t.exports=n(0)(),e.push([t.i,".vue-waypoint__waypoint[data-v-4795ebc7]{width:100%;height:0}.vue-waypoint__waypoint.top[data-v-4795ebc7]{position:absolute;top:0}.vue-waypoint__waypoint.right[data-v-4795ebc7]{position:absolute;right:0}.vue-waypoint__waypoint.bottom[data-v-4795ebc7]{position:absolute;bottom:0}.vue-waypoint__waypoint.left[data-v-4795ebc7]{position:absolute;left:0}",""])},function(t,e,n){var i,o;n(12),i=n(6);var r=n(10);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-176bc24a",t.exports=i},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"vue-waypoint__waypoint__collider"})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"vue-waypoint__waypoint",class:[t.position]},[e("waypoint-collider",{directives:[{name:"collision",rawName:"v-collision"}],on:{collide:t._vueWaypointHandle,"non-collide":t._vueWaypointHandleOff}})])},staticRenderFns:[]}},function(t,e,n){var i=n(7);"string"==typeof i&&(i=[[t.i,i,""]]);n(1)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){var i=n(8);"string"==typeof i&&(i=[[t.i,i,""]]);n(1)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=i(o),u=n(4),l=i(u),c=n(3),a=i(c),s={install:function(t){t.use(l.default),t.use(r.default),t.component("v-waypoint",a.default)}};e.default=s,"undefined"!=typeof window&&window.Vue&&window.Vue.use(s)}])});