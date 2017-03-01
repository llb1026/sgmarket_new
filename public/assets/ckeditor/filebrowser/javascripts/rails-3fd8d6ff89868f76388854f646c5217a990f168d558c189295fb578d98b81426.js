!function(e,t){var n;e.rails=n={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input:file",linkDisableSelector:"a[data-disable-with]",CSRFProtection:function(t){var n=e('meta[name="csrf-token"]').attr("content");n&&t.setRequestHeader("X-CSRF-Token",n)},fire:function(t,n,i){var o=e.Event(n);return t.trigger(o,i),o.result!==!1},confirm:function(e){return confirm(e)},ajax:function(t){return e.ajax(t)},handleRemote:function(i){var o,r,a,s,l=i.data("cross-domain")||null,c=i.data("type")||e.ajaxSettings&&e.ajaxSettings.dataType;if(n.fire(i,"ajax:before")){if(i.is("form")){o=i.attr("method"),r=i.attr("action"),a=i.serializeArray();var u=i.data("ujs:submit-button");u&&(a.push(u),i.data("ujs:submit-button",null))}else i.is(n.inputChangeSelector)?(o=i.data("method"),r=i.data("url"),a=i.serialize(),i.data("params")&&(a=a+"&"+i.data("params"))):(o=i.data("method"),r=i.attr("href"),a=i.data("params")||null);return s={type:o||"GET",data:a,dataType:c,crossDomain:l,beforeSend:function(e,o){return o.dataType===t&&e.setRequestHeader("accept","*/*;q=0.5, "+o.accepts.script),n.fire(i,"ajax:beforeSend",[e,o])},success:function(e,t,n){i.trigger("ajax:success",[e,t,n])},complete:function(e,t){i.trigger("ajax:complete",[e,t])},error:function(e,t,n){i.trigger("ajax:error",[e,t,n])}},r&&(s.url=r),n.ajax(s)}return!1},handleMethod:function(n){var i=n.attr("href"),o=n.data("method"),r=n.attr("target"),a=e("meta[name=csrf-token]").attr("content"),s=e("meta[name=csrf-param]").attr("content"),l=e('<form method="post" action="'+i+'"></form>'),c='<input name="_method" value="'+o+'" type="hidden" />';s!==t&&a!==t&&(c+='<input name="'+s+'" value="'+a+'" type="hidden" />'),r&&l.attr("target",r),l.hide().append(c).appendTo("body"),l.submit()},disableFormElements:function(t){t.find(n.disableSelector).each(function(){var t=e(this),n=t.is("button")?"html":"val";t.data("ujs:enable-with",t[n]()),t[n](t.data("disable-with")),t.prop("disabled",!0)})},enableFormElements:function(t){t.find(n.enableSelector).each(function(){var t=e(this),n=t.is("button")?"html":"val";t.data("ujs:enable-with")&&t[n](t.data("ujs:enable-with")),t.prop("disabled",!1)})},allowAction:function(e){var t,i=e.data("confirm"),o=!1;return!i||(n.fire(e,"confirm")&&(o=n.confirm(i),t=n.fire(e,"confirm:complete",[o])),o&&t)},blankInputs:function(t,n,i){var o,r=e(),a=n||"input,textarea";return t.find(a).each(function(){o=e(this),(i?o.val():!o.val())&&(r=r.add(o))}),!!r.length&&r},nonBlankInputs:function(e,t){return n.blankInputs(e,t,!0)},stopEverything:function(t){return e(t.target).trigger("ujs:everythingStopped"),t.stopImmediatePropagation(),!1},callFormSubmitBindings:function(n,i){var o=n.data("events"),r=!0;return o!==t&&o.submit!==t&&e.each(o.submit,function(e,t){if("function"==typeof t.handler)return r=t.handler(i)}),r},disableElement:function(e){e.data("ujs:enable-with",e.html()),e.html(e.data("disable-with")),e.bind("click.railsDisable",function(e){return n.stopEverything(e)})},enableElement:function(e){e.data("ujs:enable-with")!==t&&(e.html(e.data("ujs:enable-with")),e.data("ujs:enable-with",!1)),e.unbind("click.railsDisable")}},e.ajaxPrefilter(function(e,t,i){e.crossDomain||n.CSRFProtection(i)}),e(document).delegate(n.linkDisableSelector,"ajax:complete",function(){n.enableElement(e(this))}),e(document).delegate(n.linkClickSelector,"click.rails",function(i){var o=e(this),r=o.data("method"),a=o.data("params");return n.allowAction(o)?(o.is(n.linkDisableSelector)&&n.disableElement(o),o.data("remote")!==t?!(!i.metaKey&&!i.ctrlKey||r&&"GET"!==r||a)||(n.handleRemote(o)===!1&&n.enableElement(o),!1):o.data("method")?(n.handleMethod(o),!1):void 0):n.stopEverything(i)}),e(document).delegate(n.inputChangeSelector,"change.rails",function(t){var i=e(this);return n.allowAction(i)?(n.handleRemote(i),!1):n.stopEverything(t)}),e(document).delegate(n.formSubmitSelector,"submit.rails",function(i){var o=e(this),r=o.data("remote")!==t,a=n.blankInputs(o,n.requiredInputSelector),s=n.nonBlankInputs(o,n.fileInputSelector);return n.allowAction(o)?a&&o.attr("novalidate")==t&&n.fire(o,"ajax:aborted:required",[a])?n.stopEverything(i):r?s?n.fire(o,"ajax:aborted:file",[s]):!e.support.submitBubbles&&e().jquery<"1.7"&&n.callFormSubmitBindings(o,i)===!1?n.stopEverything(i):(n.handleRemote(o),!1):void setTimeout(function(){n.disableFormElements(o)},13):n.stopEverything(i)}),e(document).delegate(n.formInputClickSelector,"click.rails",function(t){var i=e(this);if(!n.allowAction(i))return n.stopEverything(t);var o=i.attr("name"),r=o?{name:o,value:i.val()}:null;i.closest("form").data("ujs:submit-button",r)}),e(document).delegate(n.formSubmitSelector,"ajax:beforeSend.rails",function(t){this==t.target&&n.disableFormElements(e(this))}),e(document).delegate(n.formSubmitSelector,"ajax:complete.rails",function(t){this==t.target&&n.enableFormElements(e(this))})}(jQuery);