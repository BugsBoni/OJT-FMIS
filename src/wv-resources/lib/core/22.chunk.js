/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[22],{431:function(Ca){(function(){Ca.exports={rU:function(){function va(e,n){this.scrollLeft=e;this.scrollTop=n}function r(e){if(null===e||"object"!==typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"===typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.");}function oa(e,n){if("Y"===
n)return e.clientHeight+b<e.scrollHeight;if("X"===n)return e.clientWidth+b<e.scrollWidth}function la(e,n){e=z.getComputedStyle(e,null)["overflow"+n];return"auto"===e||"scroll"===e}function ka(e){var n=oa(e,"Y")&&la(e,"Y");e=oa(e,"X")&&la(e,"X");return n||e}function ha(e){var n=(a()-e.startTime)/468;var h=.5*(1-Math.cos(Math.PI*(1<n?1:n)));n=e.bx+(e.x-e.bx)*h;h=e.ex+(e.y-e.ex)*h;e.method.call(e.ZC,n,h);n===e.x&&h===e.y||z.requestAnimationFrame(ha.bind(z,e))}function da(e,n,h){var ba=a();if(e===w.body){var y=
z;var aa=z.scrollX||z.pageXOffset;e=z.scrollY||z.pageYOffset;var fa=f.scroll}else y=e,aa=e.scrollLeft,e=e.scrollTop,fa=va;ha({ZC:y,method:fa,startTime:ba,bx:aa,ex:e,x:n,y:h})}var z=window,w=document;if(!("scrollBehavior"in w.documentElement.style&&!0!==z.wja)){var x=z.HTMLElement||z.Element,f={scroll:z.scroll||z.scrollTo,scrollBy:z.scrollBy,dQ:x.prototype.scroll||va,scrollIntoView:x.prototype.scrollIntoView},a=z.performance&&z.performance.now?z.performance.now.bind(z.performance):Date.now,b=RegExp("MSIE |Trident/|Edge/").test(z.navigator.userAgent)?
1:0;z.scroll=z.scrollTo=function(e,n){void 0!==e&&(!0===r(e)?f.scroll.call(z,void 0!==e.left?e.left:"object"!==typeof e?e:z.scrollX||z.pageXOffset,void 0!==e.top?e.top:void 0!==n?n:z.scrollY||z.pageYOffset):da.call(z,w.body,void 0!==e.left?~~e.left:z.scrollX||z.pageXOffset,void 0!==e.top?~~e.top:z.scrollY||z.pageYOffset))};z.scrollBy=function(e,n){void 0!==e&&(r(e)?f.scrollBy.call(z,void 0!==e.left?e.left:"object"!==typeof e?e:0,void 0!==e.top?e.top:void 0!==n?n:0):da.call(z,w.body,~~e.left+(z.scrollX||
z.pageXOffset),~~e.top+(z.scrollY||z.pageYOffset)))};x.prototype.scroll=x.prototype.scrollTo=function(e,n){if(void 0!==e)if(!0===r(e)){if("number"===typeof e&&void 0===n)throw new SyntaxError("Value could not be converted");f.dQ.call(this,void 0!==e.left?~~e.left:"object"!==typeof e?~~e:this.scrollLeft,void 0!==e.top?~~e.top:void 0!==n?~~n:this.scrollTop)}else n=e.left,e=e.top,da.call(this,this,"undefined"===typeof n?this.scrollLeft:~~n,"undefined"===typeof e?this.scrollTop:~~e)};x.prototype.scrollBy=
function(e,n){void 0!==e&&(!0===r(e)?f.dQ.call(this,void 0!==e.left?~~e.left+this.scrollLeft:~~e+this.scrollLeft,void 0!==e.top?~~e.top+this.scrollTop:~~n+this.scrollTop):this.scroll({left:~~e.left+this.scrollLeft,top:~~e.top+this.scrollTop,behavior:e.behavior}))};x.prototype.scrollIntoView=function(e){if(!0===r(e))f.scrollIntoView.call(this,void 0===e?!0:e);else{for(e=this;e!==w.body&&!1===ka(e);)e=e.parentNode||e.host;var n=e.getBoundingClientRect(),h=this.getBoundingClientRect();e!==w.body?(da.call(this,
e,e.scrollLeft+h.left-n.left,e.scrollTop+h.top-n.top),"fixed"!==z.getComputedStyle(e).position&&z.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):z.scrollBy({left:h.left,top:h.top,behavior:"smooth"})}}}}}})()}}]);}).call(this || window)