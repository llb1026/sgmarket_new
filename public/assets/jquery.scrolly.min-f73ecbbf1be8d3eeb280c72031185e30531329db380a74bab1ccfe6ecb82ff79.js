!function(e){function t(t,a){var s,l,c;if(0==(s=e(t))[n])return i;switch(l=s[r]()[o],a.anchor){case"middle":c=l-(e(window).height()-s.outerHeight())/2;break;default:case o:c=Math.max(l,0)}return c-="function"==typeof a[r]?a[r]():a[r]}var n="length",i=null,o="top",r="offset",a="click.scrolly";e(window);e.fn.scrolly=function(r){var s,l,c,d,u=e(this);if(0==this[n])return u;if(this[n]>1){for(s=0;s<this[n];s++)e(this[s]).scrolly(r);return u}return d=i,c=u.attr("href"),"#"!=c.charAt(0)||c[n]<2?u:(l=jQuery.extend({anchor:o,easing:"swing",offset:0,parent:e("body,html"),pollOnce:!1,speed:1e3},r),l.pollOnce&&(d=t(c,l)),u.off(a).on(a,function(e){var n=d!==i?d:t(c,l);n!==i&&(e.preventDefault(),l.parent.stop().animate({scrollTop:n},l.speed,l.easing))}),void 0)}}(jQuery);