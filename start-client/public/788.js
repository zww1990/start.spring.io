(self.webpackChunkspring_initializr=self.webpackChunkspring_initializr||[]).push([[788],{3788:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var o=n(3379),r=n.n(o),a=n(7795),i=n.n(a),p=n(569),l=n.n(p),c=n(3565),s=n.n(c),d=n(9216),u=n.n(d),h=n(4589),f=n.n(h),b=n(5212),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u();r()(b.Z,m);b.Z&&b.Z.locals&&b.Z.locals;var g=n(5697),y=n.n(g),x=n(7294),v=n(885),w=n(9208),C=n.n(w),E=n(666),k=n(9670),O=n(4855),j=n(8509),P=n(5695);function R(e){var t=e.shareUrl,n=e.open,o=e.onClose,r=(0,x.useState)("Copy"),a=(0,v.Z)(r,2),i=a[0],p=a[1],l=(0,x.useRef)(null),c=(0,x.useRef)(null),s=(0,x.useRef)(null),d=(0,P.Z)();(0,x.useEffect)((function(){var e=function(e){var t=C()(l,"current");t&&!t.contains(e.target)&&o()};return document.addEventListener("mousedown",e),C()(c,"current")&&C()(c,"current").focus(),function(){document.removeEventListener("mousedown",e)}}),[o,c]);(0,x.useEffect)((function(){return C()(l,"current")&&n&&(0,j.Qp)(C()(l,"current")),function(){(0,j.tP)()}}),[l,n]);var u="".concat(d.origin,"/#!").concat(t);return x.createElement(E.Z,{component:null},n&&x.createElement(k.Z,{onEnter:function(){p("Copy")},classNames:"popup",timeout:300},x.createElement("div",{className:"popup-share"},x.createElement("div",{className:"popop-share-container",ref:l},x.createElement("div",{className:"popup-header"},x.createElement("h1",null,"Share your configuration")),x.createElement("div",{className:"popup-content"},x.createElement("label",{htmlFor:"input-share"},"Use this link to share the current configuration. Attributes can be removed from the URL if you want to rely on our defaults."),x.createElement("div",{className:"control"},x.createElement("input",{onFocus:function(e){e.target.select()},id:"input-share",className:"input ".concat("Copied!"===i?"padding-lg":""),onKeyDown:function(e){"Escape"===e.key&&o()},readOnly:!0,value:u,ref:c}),x.createElement(O.CopyToClipboard,{onCopy:function(){p("Copied!"),c.current.focus(),setTimeout((function(){o()}),1e3)},text:u},x.createElement("a",{href:"/#",onClick:function(e){e.preventDefault()},className:"button",ref:s},x.createElement("span",{className:"button-content",tabIndex:"-1"},x.createElement("span",null,i)))))),x.createElement("div",{className:"popup-action"},x.createElement("a",{href:"/#",onClick:function(e){e.preventDefault(),o()},className:"button"},x.createElement("span",{className:"button-content",tabIndex:"-1"},x.createElement("span",null,"Close"),x.createElement("span",{className:"secondary desktop-only"},"ESC"))))))))}R.propTypes={shareUrl:y().string.isRequired,open:y().bool.isRequired,onClose:y().func.isRequired};const D=R;var S=n(3665);function T(e){var t=e.shareUrl,n=e.open,o=e.onClose;return x.createElement(x.Fragment,null,x.createElement(D,{open:n||!1,shareUrl:t,onClose:o}),x.createElement(S.aV,{open:n||!1}))}T.propTypes={shareUrl:y().string.isRequired,open:y().bool.isRequired,onClose:y().func.isRequired};const N=T},640:(e,t,n)=>{"use strict";var o=n(1742),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,p,l,c,s=!1;t||(t={}),n=t.debug||!1;try{if(i=o(),p=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(c),p.selectNodeContents(c),l.addRange(p),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(o){n&&console.error("unable to copy using execCommand: ",o),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(o){n&&console.error("unable to copy using clipboardData: ",o),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(p):l.removeAllRanges()),c&&document.body.removeChild(c),i()}return s}},5212:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o=n(8081),r=n.n(o),a=n(3645),i=n.n(a)()(r());i.push([e.id,'.popup-share{z-index:10000;position:fixed;top:50%;margin-top:-150px;left:0;right:0;-webkit-transition:all .15s;-moz-transition:all .15s;-ms-transition:all .15s;-o-transition:all .15s;transition:all .15s}.popup-share .popop-share-container{width:500px;margin:0 auto;background:#fff}.popup-share:before{content:" ";height:60px;width:500px;position:absolute;bottom:-60px;left:0}.popup-share .popup-content{padding:24px;padding-top:8px;padding-bottom:16px}.popup-share .popup-content label{display:block;font-size:15px;color:#000;line-height:24px;padding-top:8px;font-weight:300}.popup-share .popup-content .control{position:relative;padding-bottom:8px}.popup-share .popup-content .input{padding-right:70px}.popup-share .popup-content .input.padding-lg{padding-right:88px}.popup-share .popup-content .button{position:absolute;top:5px;right:2px;margin:0}.popup-share .popup-content .button span.button-content span{font-size:12px;padding:.2rem .5rem .1rem}.popup-share .popup-header{position:relative;padding:6px 16px 2px;border-bottom:1px solid #ebebeb}.popup-share .popup-header h1{font-size:20px;line-height:20px;font-weight:600}.popup-share .popup-header .close{display:block;position:absolute;top:15px;right:6px;padding:4px 8px;height:22px;cursor:pointer;opacity:.7;color:#000}.popup-share .popup-header .close svg{width:16px}.popup-share .popup-header .close:hover{opacity:1}.popup-share .popup-action{text-align:center;border-top:1px solid #dce8e8;padding:16px 0 8px}.popup-enter{opacity:0}.popup-enter-active{opacity:1;transition:all 300ms}.popup-exit{opacity:1}.popup-exit-active{opacity:0;transition:all 300ms}@media(min-width: 1650px){#header p{font-size:20px;line-height:2rem;margin-top:1rem}}@media(max-width: 1000px){body.light #header,body.dark #header{width:auto}body.light .colset-main,body.dark .colset-main{background:none}body.light .colset-main>.right,body.dark .colset-main>.right{padding-bottom:2rem}body.light .colset,body.dark .colset{display:block}body.light .colset>.left,body.light .colset>.right,body.dark .colset>.left,body.dark .colset>.right{flex:none;padding-right:0}body.light .desktop-only,body.dark .desktop-only{display:none !important}.placeholder-button-explore{width:125px}.placeholder-button-submit{width:136px}.placeholder-button-dep{width:85.45px}.placeholder-button-download{width:148.13px}}@media(max-width: 1200px){.dependency-header .button span span .desktop-only{display:none}}@media(min-width: 320px)and (max-width: 1000px){.placeholder-button-dep{width:87.45px}}@media(min-width: 1000px)and (max-width: 1200px){.placeholder-button-dep{width:134.73px}.placeholder-button-download{width:144.13px}}.not-mobile{display:block}.is-mobile{display:none}@media(min-width: 320px)and (max-width: 767px){#side-left,#side-right{display:none}.control-inline input{max-width:none}.control-placeholder .placeholder-input{max-width:none}#main{padding:0 12px}.actions,.explorer-actions{left:0;right:0;padding-left:0;padding-right:0}.actions .actions-container,.explorer-actions .actions-container{padding:8px 0;height:44px}.actions .button>span>span,.explorer-actions .button>span>span{padding:.7rem .6rem .6rem}.actions .button,.explorer-actions .button{font-size:14px}.explorer-actions{padding:8px 0;height:44px}a.button,button.button{margin-right:6px;font-size:14px}a.button:last-child,button.button:last-child{margin-right:0}a.button>span>span,button.button>span>span{padding:.7rem .6rem .6rem}.popup-share .popop-share-container{width:auto}.explorer{left:0;right:0;bottom:0}.explorer .colset-explorer{padding:0 5px}.explorer .colset-explorer .left{display:none}.explorer .colset-explorer .right .head{display:none}.explorer .colset-explorer .right .explorer-content{top:45px;right:0;left:0;bottom:65px;margin:0}.more{padding:1rem 0;text-align:center}.not-mobile{display:none}.is-mobile{display:block}.navigation .navigation-content{padding:0 10px;margin:0 auto}.navigation .navigation-content .navigation-content-wrap{margin:0}.navigation .navigation-content #header h2,.navigation .navigation-content #header .header-mobile{margin-bottom:.4rem;border-bottom:1px solid rgba(255,255,255,.4)}.navigation .navigation-content ul{margin:0 -10px;padding:0}.navigation .navigation-content ul li{border-bottom:1px solid rgba(255,255,255,.2)}.navigation .navigation-content ul li a{display:block;font-size:16px;line-height:1.5rem;padding:16px}.dialog-dependencies{top:0;left:0;right:0;margin:0;bottom:0;width:auto}.dialog-dependencies .control-input .input{padding:7px 10px 3px;padding-right:45px}.dialog-dependencies .control-input .input::placeholder{font-size:13px}.dialog-dependencies .control-input .help{display:none}.dialog-dependencies ul li a.dependency.selected .icon-enter{display:none}.dialog-dependencies ul li a.dependency{padding:13px 10px}.actions .placeholder-button,.explorer-actions .placeholder-button{height:41.5px;margin-right:6px}.actions .placeholder-button:last-child,.explorer-actions .placeholder-button:last-child{margin-right:0}.placeholder-button-submit{width:98.39px}.placeholder-button-explore{width:88.55px}.placeholder-button-share{width:82.77px}.placeholder-button-download{width:108.73px}.placeholder-button-dep{width:87.45px}.explorer-select .placeholder-select{margin:0 -5px;height:33px}ul.dependencies-list li a{opacity:1}#header h2{text-align:center;padding:.5rem 0}#header h2 strong{font-size:32px;line-height:2rem}#header h2 span{font-size:22px;line-height:2rem;font-weight:600}hr.divider{display:none}.control-inline,.control-placeholder{display:block}.control-inline label,.control-inline .placeholder-label,.control-placeholder label,.control-placeholder .placeholder-label{flex:none;text-align:left}.control-inline input,.control-inline .group-radio,.control-inline .placeholder-input,.control-placeholder input,.control-placeholder .group-radio,.control-placeholder .placeholder-input{margin-left:0}}',""]);const p=i},4300:(e,t,n)=>{"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=p(n(7294)),a=p(n(640)),i=["text","onCopy","options","children"];function p(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}(this,n)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(l,e);var t,n,o,p=h(l);function l(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return m(f(e=p.call.apply(p,[this].concat(n))),"onClick",(function(t){var n=e.props,o=n.text,i=n.onCopy,p=n.children,l=n.options,c=r.default.Children.only(p),s=(0,a.default)(o,l);i&&i(o,s),c&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(t)})),e}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=s(e,i),o=r.default.Children.only(t);return r.default.cloneElement(o,c(c({},n),{},{onClick:this.onClick}))}}])&&d(t.prototype,n),o&&d(t,o),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.default.PureComponent);t.CopyToClipboard=g,m(g,"defaultProps",{onCopy:void 0,options:void 0})},4855:(e,t,n)=>{"use strict";var o=n(4300).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},1742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);