define(["require","exports","OK/cookie","OK/logger"],(function(t,e,i,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MrgCounterDot=void 0;var n="mrgmaildot",s="__dot",r=function(){var t=this;this.link="",this.dotLink="",this.onClick=function(){if(t.element.classList.contains("x-ph__link_ext"))t.setLink(!1);else{var e=t.hasClicked();e||i.setCookie(n,"1",1),t.setLink(!e),o.success("mrg-mail-dot-click",e?"second":"first"),t.element.classList.remove(s)}}};r.prototype.activate=function(t){this.element=t,this.link=t.getAttribute("href"),this.dotLink=t.getAttribute("data-dot-link"),this.hasClicked()||t.classList.add(s),t.addEventListener("mousedown",this.onClick)},r.prototype.deactivate=function(t){this.element.removeEventListener("mousedown",this.onClick)},r.prototype.hasClicked=function(){return i.readCookie(n)},r.prototype.setLink=function(t){this.element.setAttribute("href",t?this.dotLink:this.link)},e.MrgCounterDot=r}));
//# sourceMappingURL=/res/source-maps/js/app/MrgCounterDot.js.map