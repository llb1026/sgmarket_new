!function(){function e(e){return e.type==CKEDITOR.NODE_TEXT&&0<e.getLength()&&(!i||!e.isReadOnly())}function t(e){return!(e.type==CKEDITOR.NODE_ELEMENT&&e.isBlockBoundary(CKEDITOR.tools.extend({},CKEDITOR.dtd.$empty,CKEDITOR.dtd.$nonEditable)))}function n(n,s){function l(n,i){var o=this,a=new CKEDITOR.dom.walker(n);a.guard=i?t:function(e){!t(e)&&(o._.matchBoundary=!0)},a.evaluator=e,a.breakOnFalse=1,n.startContainer.type==CKEDITOR.NODE_TEXT&&(this.textNode=n.startContainer,this.offset=n.startOffset-1),this._={matchWord:i,walker:a,matchBoundary:!1}}function c(e,t){var i=n.createRange();return i.setStart(e.textNode,t?e.offset:e.offset+1),i.setEndAt(n.editable(),CKEDITOR.POSITION_BEFORE_END),i}function d(e){var t=n.getSelection().getRanges()[0],i=n.editable();return t&&!e?(e=t.clone(),e.collapse(!0)):(e=n.createRange(),e.setStartAt(i,CKEDITOR.POSITION_AFTER_START)),e.setEndAt(i,CKEDITOR.POSITION_BEFORE_END),e}var u=new CKEDITOR.style(CKEDITOR.tools.extend({attributes:{"data-cke-highlight":1},fullMatch:1,ignoreReadonly:1,childRule:function(){return 0}},n.config.find_highlight,!0));l.prototype={next:function(){return this.move()},back:function(){return this.move(!0)},move:function(e){var t=this.textNode;if(null===t)return o.call(this);if(this._.matchBoundary=!1,t&&e&&0<this.offset)this.offset--;else if(t&&this.offset<t.getLength()-1)this.offset++;else{for(t=null;!(t||(t=this._.walker[e?"previous":"next"].call(this._.walker),this._.matchWord&&!t||this._.walker._.end)););this.offset=(this.textNode=t)&&e?t.getLength()-1:0}return o.call(this)}};var h=function(e,t){this._={walker:e,cursors:[],rangeLength:t,highlightRange:null,isMatched:0}};h.prototype={toDomRange:function(){var e=n.createRange(),t=this._.cursors;if(1>t.length){var i=this._.walker.textNode;if(!i)return null;e.setStartAfter(i)}else i=t[0],t=t[t.length-1],e.setStart(i.textNode,i.offset),e.setEnd(t.textNode,t.offset+1);return e},updateFromDomRange:function(e){var t=new l(e);this._.cursors=[];do e=t.next(),e.character&&this._.cursors.push(e);while(e.character);this._.rangeLength=this._.cursors.length},setMatched:function(){this._.isMatched=!0},clearMatched:function(){this._.isMatched=!1},isMatched:function(){return this._.isMatched},highlight:function(){if(!(1>this._.cursors.length)){this._.highlightRange&&this.removeHighlight();var e=this.toDomRange(),t=e.createBookmark();u.applyToRange(e,n),e.moveToBookmark(t),this._.highlightRange=e,t=e.startContainer,t.type!=CKEDITOR.NODE_ELEMENT&&(t=t.getParent()),t.scrollIntoView(),this.updateFromDomRange(e)}},removeHighlight:function(){if(this._.highlightRange){var e=this._.highlightRange.createBookmark();u.removeFromRange(this._.highlightRange,n),this._.highlightRange.moveToBookmark(e),this.updateFromDomRange(this._.highlightRange),this._.highlightRange=null}},isReadOnly:function(){return this._.highlightRange?this._.highlightRange.startContainer.isReadOnly():0},moveBack:function(){var e=this._.walker.back(),t=this._.cursors;return e.hitMatchBoundary&&(this._.cursors=t=[]),t.unshift(e),t.length>this._.rangeLength&&t.pop(),e},moveNext:function(){var e=this._.walker.next(),t=this._.cursors;return e.hitMatchBoundary&&(this._.cursors=t=[]),t.push(e),t.length>this._.rangeLength&&t.shift(),e},getEndCharacter:function(){var e=this._.cursors;return 1>e.length?null:e[e.length-1].character},getNextCharacterRange:function(e){var t,n;return n=this._.cursors,n=(t=n[n.length-1])&&t.textNode?new l(c(t)):this._.walker,new h(n,e)},getCursors:function(){return this._.cursors}};var m=function(e,t){var n=[-1];t&&(e=e.toLowerCase());for(var i=0;i<e.length;i++)for(n.push(n[i]+1);0<n[i+1]&&e.charAt(i)!=e.charAt(n[i+1]-1);)n[i+1]=n[n[i+1]-1]+1;this._={overlap:n,state:0,ignoreCase:!!t,pattern:e}};m.prototype={feedCharacter:function(e){for(this._.ignoreCase&&(e=e.toLowerCase());;){if(e==this._.pattern.charAt(this._.state))return this._.state++,this._.state==this._.pattern.length?(this._.state=0,2):1;if(!this._.state)return 0;this._.state=this._.overlap[this._.state]}},reset:function(){this._.state=0}};var g=/[.,"'?!;: \u0085\u00a0\u1680\u280e\u2028\u2029\u202f\u205f\u3000]/,f=function(e){if(!e)return!0;var t=e.charCodeAt(0);return 9<=t&&13>=t||8192<=t&&8202>=t||g.test(e)},p={searchRange:null,matchRange:null,find:function(e,t,i,o,a,r){this.matchRange?(this.matchRange.removeHighlight(),this.matchRange=this.matchRange.getNextCharacterRange(e.length)):this.matchRange=new h(new l(this.searchRange),e.length);for(var s=new m(e,!t),u=0,g="%";null!==g;){for(this.matchRange.moveNext();(g=this.matchRange.getEndCharacter())&&(u=s.feedCharacter(g),2!=u);)this.matchRange.moveNext().hitMatchBoundary&&s.reset();if(2==u){if(i){var p=this.matchRange.getCursors(),E=p[p.length-1],p=p[0],T=n.createRange();if(T.setStartAt(n.editable(),CKEDITOR.POSITION_AFTER_START),T.setEnd(p.textNode,p.offset),p=T,E=c(E),p.trim(),E.trim(),p=new l(p,!0),E=new l(E,!0),!f(p.back().character)||!f(E.next().character))continue}return this.matchRange.setMatched(),!1!==a&&this.matchRange.highlight(),!0}}return this.matchRange.clearMatched(),this.matchRange.removeHighlight(),!(!o||r)&&(this.searchRange=d(1),this.matchRange=null,arguments.callee.apply(this,Array.prototype.slice.call(arguments).concat([!0])))},replaceCounter:0,replace:function(e,t,o,a,r,s,l){if(i=1,e=0,e=this.hasMatchOptionsChanged(t,a,r),!this.matchRange||!this.matchRange.isMatched()||this.matchRange._.isReplaced||this.matchRange.isReadOnly()||e)e&&this.matchRange&&(this.matchRange.clearMatched(),this.matchRange.removeHighlight(),this.matchRange=null),e=this.find(t,a,r,s,!l);else{if(this.matchRange.removeHighlight(),t=this.matchRange.toDomRange(),o=n.document.createText(o),!l){var c=n.getSelection();c.selectRanges([t]),n.fire("saveSnapshot")}t.deleteContents(),t.insertNode(o),l||(c.selectRanges([t]),n.fire("saveSnapshot")),this.matchRange.updateFromDomRange(t),l||this.matchRange.highlight(),this.matchRange._.isReplaced=!0,this.replaceCounter++,e=1}return i=0,e},matchOptions:null,hasMatchOptionsChanged:function(e,t,n){return e=[e,t,n].join("."),t=this.matchOptions&&this.matchOptions!=e,this.matchOptions=e,t}},E=n.lang.find;return{title:E.title,resizable:CKEDITOR.DIALOG_RESIZE_NONE,minWidth:350,minHeight:170,buttons:[CKEDITOR.dialog.cancelButton(n,{label:n.lang.common.close})],contents:[{id:"find",label:E.find,title:E.find,accessKey:"",elements:[{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtFindFind",label:E.findWhat,isChanged:!1,labelLayout:"horizontal",accessKey:"F"},{type:"button",id:"btnFind",align:"left",style:"width:100%",label:E.find,onClick:function(){var e=this.getDialog();p.find(e.getValueOf("find","txtFindFind"),e.getValueOf("find","txtFindCaseChk"),e.getValueOf("find","txtFindWordChk"),e.getValueOf("find","txtFindCyclic"))||alert(E.notFoundMsg)}}]},{type:"fieldset",className:"cke_dialog_find_fieldset",label:CKEDITOR.tools.htmlEncode(E.findOptions),style:"margin-top:29px",children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"txtFindCaseChk",isChanged:!1,label:E.matchCase},{type:"checkbox",id:"txtFindWordChk",isChanged:!1,label:E.matchWord},{type:"checkbox",id:"txtFindCyclic",isChanged:!1,"default":!0,label:E.matchCyclic}]}]}]},{id:"replace",label:E.replace,accessKey:"M",elements:[{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtFindReplace",label:E.findWhat,isChanged:!1,labelLayout:"horizontal",accessKey:"F"},{type:"button",id:"btnFindReplace",align:"left",style:"width:100%",label:E.replace,onClick:function(){var e=this.getDialog();p.replace(e,e.getValueOf("replace","txtFindReplace"),e.getValueOf("replace","txtReplace"),e.getValueOf("replace","txtReplaceCaseChk"),e.getValueOf("replace","txtReplaceWordChk"),e.getValueOf("replace","txtReplaceCyclic"))||alert(E.notFoundMsg)}}]},{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtReplace",label:E.replaceWith,isChanged:!1,labelLayout:"horizontal",accessKey:"R"},{type:"button",id:"btnReplaceAll",align:"left",style:"width:100%",label:E.replaceAll,isChanged:!1,onClick:function(){var e=this.getDialog();for(p.replaceCounter=0,p.searchRange=d(1),p.matchRange&&(p.matchRange.removeHighlight(),p.matchRange=null),n.fire("saveSnapshot");p.replace(e,e.getValueOf("replace","txtFindReplace"),e.getValueOf("replace","txtReplace"),e.getValueOf("replace","txtReplaceCaseChk"),e.getValueOf("replace","txtReplaceWordChk"),!1,!0););p.replaceCounter?(alert(E.replaceSuccessMsg.replace(/%1/,p.replaceCounter)),n.fire("saveSnapshot")):alert(E.notFoundMsg)}}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(E.findOptions),children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"txtReplaceCaseChk",isChanged:!1,label:E.matchCase},{type:"checkbox",id:"txtReplaceWordChk",isChanged:!1,label:E.matchWord},{type:"checkbox",id:"txtReplaceCyclic",isChanged:!1,"default":!0,label:E.matchCyclic}]}]}]}],onLoad:function(){var e,t=this,n=0;this.on("hide",function(){n=0}),this.on("show",function(){n=1}),this.selectPage=CKEDITOR.tools.override(this.selectPage,function(i){return function(o){i.call(t,o);var s,l=t._.tabs[o];if(s="find"===o?"txtFindWordChk":"txtReplaceWordChk",e=t.getContentElement(o,"find"===o?"txtFindFind":"txtFindReplace"),t.getContentElement(o,s),l.initialized||(CKEDITOR.document.getById(e._.inputId),l.initialized=!0),n){var c;o="find"===o?1:0;var d,l=1-o,u=r.length;for(d=0;d<u;d++)s=this.getContentElement(a[o],r[d][o]),c=this.getContentElement(a[l],r[d][l]),c.setValue(s.getValue())}}})},onShow:function(){p.searchRange=d();var e=this.getParentEditor().getSelection().getSelectedText(),t=this.getContentElement(s,"find"==s?"txtFindFind":"txtFindReplace");t.setValue(e),t.select(),this.selectPage(s),this[("find"==s&&this._.editor.readOnly?"hide":"show")+"Page"]("replace")},onHide:function(){var e;p.matchRange&&p.matchRange.isMatched()&&(p.matchRange.removeHighlight(),n.focus(),(e=p.matchRange.toDomRange())&&n.getSelection().selectRanges([e])),delete p.matchRange},onFocus:function(){return"replace"==s?this.getContentElement("replace","txtFindReplace"):this.getContentElement("find","txtFindFind")}}}var i,o=function(){return{textNode:this.textNode,offset:this.offset,character:this.textNode?this.textNode.getText().charAt(this.offset):null,hitMatchBoundary:this._.matchBoundary}},a=["find","replace"],r=[["txtFindFind","txtFindReplace"],["txtFindCaseChk","txtReplaceCaseChk"],["txtFindWordChk","txtReplaceWordChk"],["txtFindCyclic","txtReplaceCyclic"]];CKEDITOR.dialog.add("find",function(e){return n(e,"find")}),CKEDITOR.dialog.add("replace",function(e){return n(e,"replace")})}();