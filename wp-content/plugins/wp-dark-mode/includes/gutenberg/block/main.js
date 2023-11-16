!function(){"use strict";var e,t={917:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,a=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(a)?a:String(a)),o)}var a}function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}var __=wp.i18n.__,o=wp.element,a=o.Component,l=o.Fragment,i=wpDarkMode.pluginUrl+"assets/images/",c=function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)}(p,o);var a,c,m,s,u=(m=p,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var t,r=n(m);if(s){var o=n(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return function(t,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(this,t)});function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),u.apply(this,arguments)}return a=p,(c=[{key:"render",value:function(){var e=this.props.style;return wp.element.createElement(l,null,wp.element.createElement("div",{className:"wp-dark-mode-switcher wp-dark-mode-ignore style-".concat(e)},2===e?wp.element.createElement("label",{className:"wp-dark-mode-ignore",htmlFor:"wp-dark-mode-switch"},wp.element.createElement("div",{className:"wp-dark-mode-ignore toggle"}," "),wp.element.createElement("div",{className:"wp-dark-mode-ignore modes"},wp.element.createElement("p",{className:"wp-dark-mode-ignore light"}," ",__("Light")," "),wp.element.createElement("p",{className:"wp-dark-mode-ignore dark"}," ",__("Dark")," "))):3===e?wp.element.createElement("label",{htmlFor:"wp-dark-mode-switch",className:"wp-dark-mode-ignore"},wp.element.createElement("img",{className:"sun-light",src:i+"btn-13/sun.svg",alt:__("Light")}),wp.element.createElement("div",{className:"toggle wp-dark-mode-ignore"}," "),wp.element.createElement("img",{className:"moon-light",src:i+"btn-13/moon.svg",alt:__("Light")})):4===e?wp.element.createElement(l,null,wp.element.createElement("img",{className:"wp-dark-mode-ignore sun-light",src:i+"/btn-4/sun-light.png",alt:__("Light")}),wp.element.createElement("img",{className:"wp-dark-mode-ignore sun-dark",src:i+"/btn-4/sun-dark.png",alt:__("Dark")}),wp.element.createElement("label",{className:"wp-dark-mode-ignore",htmlFor:"wp-dark-mode-switch"},wp.element.createElement("div",{className:"wp-dark-mode-ignore toggle"}," ")),wp.element.createElement("img",{className:"wp-dark-mode-ignore moon-dark",src:i+"/btn-4/moon-dark.png",alt:__("Dark")}),wp.element.createElement("img",{className:"wp-dark-mode-ignore moon-light",src:i+"/btn-4/moon-light.png",alt:__("Dark")})):5===e?wp.element.createElement(l,null,wp.element.createElement("p",{className:"wp-dark-mode-ignore"}," ",__("Light")," "),wp.element.createElement("label",{className:"wp-dark-mode-ignore",htmlFor:"wp-dark-mode-switch"},wp.element.createElement("div",{className:"wp-dark-mode-ignore modes"},wp.element.createElement("img",{className:"wp-dark-mode-ignore light",src:i+"/btn-5/sun.png",alt:__("Light")}),wp.element.createElement("img",{className:"wp-dark-mode-ignore dark",src:i+"/btn-5/moon.png",alt:__("Dark")}))),wp.element.createElement("p",null," ",__("Dark")," ")):6===e||7===e?wp.element.createElement("label",{className:"wp-dark-mode-ignore",htmlFor:"wp-dark-mode-switch"},wp.element.createElement("div",{className:"wp-dark-mode-ignore modes"},wp.element.createElement("img",{className:"wp-dark-mode-ignore light",src:i+"/btn-6/sun.png",alt:__("Light")}),wp.element.createElement("img",{className:"wp-dark-mode-ignore dark",src:i+"/btn-6/moon.png",alt:__("Dark")}))):8===e?wp.element.createElement("label",{className:"wp-dark-mode-ignore",htmlFor:"wp-dark-mode-switch"},wp.element.createElement("div",{className:"wp-dark-mode-ignore toggle"}," "),wp.element.createElement("div",{className:"wp-dark-mode-ignore modes"},wp.element.createElement("img",{className:"wp-dark-mode-ignore light",src:i+"/btn-8/sun.png",alt:"Light"}),wp.element.createElement("img",{className:"wp-dark-mode-ignore dark",src:i+"/btn-8/moon.png",alt:"Dark"}))):9===e?wp.element.createElement("label",{htmlFor:"wp-dark-mode-switch",className:"wp-dark-mode-ignore"},wp.element.createElement("div",{className:"modes wp-dark-mode-ignore"},wp.element.createElement("img",{className:"light",src:i+"/btn-9/light.svg",alt:__("Light")}),wp.element.createElement("img",{className:"dark",src:i+"/btn-9/dark.svg",alt:__("Dark")}))):10===e?wp.element.createElement("label",{htmlFor:"wp-dark-mode-switch",className:"wp-dark-mode-ignore"},wp.element.createElement("div",{className:"modes wp-dark-mode-ignore"},wp.element.createElement("img",{className:"light",src:i+"/btn-10/sun.svg",alt:__("Light")}),wp.element.createElement("img",{className:"dark",src:i+"/btn-10/moon.svg",alt:__("Dark")}))):11===e?wp.element.createElement("label",{htmlFor:"wp-dark-mode-switch",className:"wp-dark-mode-ignore"},wp.element.createElement("div",{className:"modes wp-dark-mode-ignore"},wp.element.createElement("img",{className:"light",src:i+"/btn-11/sun.svg",alt:__("Light")}),wp.element.createElement("img",{className:"dark",src:i+"/btn-11/moon.svg",alt:__("Dark")}))):12===e?wp.element.createElement("label",{htmlFor:"wp-dark-mode-switch",className:"wp-dark-mode-ignore"},wp.element.createElement("div",{className:"modes wp-dark-mode-ignore"},wp.element.createElement("img",{className:"light",src:i+"/btn-12/sun.svg",alt:__("Light")}),wp.element.createElement("img",{className:"dark",src:i+"/btn-12/moon.svg",alt:__("Dark")}))):13===e?wp.element.createElement("label",{htmlFor:"wp-dark-mode-switch",className:"wp-dark-mode-ignore"},wp.element.createElement("img",{className:"sun-light",src:i+"/btn-13/sun.svg",alt:__("Light")}),wp.element.createElement("div",{className:"toggle wp-dark-mode-ignore"}," "),wp.element.createElement("img",{className:"moon-light",src:i+"/btn-13/moon.svg",alt:__("Dark")})):wp.element.createElement("label",{className:"wp-dark-mode-ignore",htmlFor:"wp-dark-mode-switch"},wp.element.createElement("div",{className:"wp-dark-mode-ignore modes"},wp.element.createElement("img",{className:"wp-dark-mode-ignore light",src:i+"btn-1/light.png",alt:__("Light")}),wp.element.createElement("img",{className:"wp-dark-mode-ignore dark",src:i+"btn-1/dark.png",alt:__("Dark")})))))}}])&&t(a.prototype,c),Object.defineProperty(a,"prototype",{writable:!1}),p}(a),m=c;function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,w(n.key),n)}}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function w(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}wp.i18n.__;var g=wp.element,y=g.Component,b=(g.Fragment,g.createRef,wp.components),h=(b.Placeholder,b.Spinner,b.PanelBody,b.SelectControl,wp.editor),v=(h.InspectorControls,h.BlockControls,h.AlignmentToolbar,function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(l,e);var t,r,n,o,a=(n=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(o){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}(this,e)});function l(){var e,t,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return t=d(e=a.call.apply(a,[this].concat(i))),r="state",n={value:e.props.value},(r=w(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,e}return t=l,(r=[{key:"render",value:function(){var e=this;return wp.element.createElement("div",{className:"image-choose-wrap"},["1.svg","2.svg","3.png","4.svg","5.svg","6.svg","7.svg","8.svg","9.png","10.png","11.png","12.png","13.png"].map((function(t,r){var n=!0;return(r+=1)>3&&!wpDarkMode.is_ultimate_active&&!wpDarkMode.is_pro_active&&(n=!1),wp.element.createElement("label",{className:"image-choose-opt ".concat(e.state.value==r?"active":""," ").concat(n?"":"switch-disabled"),htmlFor:"style_".concat(r)},wp.element.createElement("input",{type:"radio",className:"radio",id:"style_".concat(r),name:"switch_style",value:r,onChange:function(){var t=document.getElementById("style_".concat(r)).value;n?(e.setState({value:t}),e.props.onChange(t)):WPPOOL.Plugin("wp_dark_mode").show()}}),wp.element.createElement("img",{src:wpDarkMode.pluginUrl+"assets/images/button-presets/"+t,className:"image-choose-img"}))})))}}])&&u(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(y)),k=v;function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var N,S=wp.i18n.__,P=wp.element,C=P.Component,D=P.Fragment,R=(P.createRef,wp.components),T=(R.Placeholder,R.Spinner,R.PanelBody),L=(R.SelectControl,wp.editor),B=L.InspectorControls,M=L.BlockControls,x=L.AlignmentToolbar,A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(l,e);var t,r,n,o,a=(n=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(o){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),a.apply(this,arguments)}return t=l,(r=[{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.setAttributes;return wp.element.createElement(D,null,wp.element.createElement(B,null,wp.element.createElement(T,{title:S("Switch Style","wp-dark-mode")},wp.element.createElement(k,{value:t.style,onChange:function(e){r({style:parseInt(e)})}}))),wp.element.createElement(M,null,wp.element.createElement(x,{value:t.alignment,onChange:function(e){return r({alignment:e})}})),wp.element.createElement("div",{style:{textAlign:t.alignment}},wp.element.createElement(m,{style:t.style})))}}])&&O(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(C),F=A,I=window.React;function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U.apply(this,arguments)}function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Y(n.key),n)}}function W(e,t,r){return t&&J(e.prototype,t),r&&J(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function $(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}function G(e,t){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},G(e,t)}function K(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=V(e);if(t){var o=V(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Q(e)}(this,r)}}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}function X(e,t,r){return(t=Y(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Y(e){var t=function(e,t){if("object"!==q(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===q(t)?t:String(t)}var Z=wp.element,ee=Z.Component,te=Z.Fragment,re=function(e){$(r,e);var t=K(r);function r(){var e;H(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return X(Q(e=t.call.apply(t,[this].concat(o))),"is_saved",localStorage.getItem("wp_dark_mode_gb")),X(Q(e),"state",{type:e.is_saved?e.is_saved:"default"}),e}return W(r,[{key:"handleColorPalette",value:function(e){var t=document.getElementsByTagName("html")[0],r=document.getElementById("wpDarkModeThemeSwitchImg");t.classList.remove("wp-dark-mode-theme-default","wp-dark-mode-theme-darkmode","wp-dark-mode-theme-chathams","wp-dark-mode-theme-pumpkin","wp-dark-mode-theme-mustard","wp-dark-mode-theme-concord"),t.classList.add("wp-dark-mode-theme-".concat(e)),r.setAttribute("src","".concat(wpDarkMode.pluginUrl,"/includes/gutenberg/images/").concat(e,".png")),this.setState({type:e}),localStorage.setItem("wp_dark_mode_gb",e)}},{key:"render",value:function(){var e=this,t=this.state.type,r=wpDarkMode.is_pro_active||wpDarkMode.is_ultimate_active;return wp.element.createElement("div",null,Object.entries({default:"Default",darkmode:"Darkmode",chathams:"Chathams",pumpkin:"Pumpkin Spice",mustard:"Mustard Seed",concord:"Concord Jam"}).map((function(n,o){var a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,l,i=[],c=!0,m=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){m=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(m)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n,2),l=a[0],i=a[1];return wp.element.createElement("a",{href:"javascript:;",className:"".concat(t==l?"active":""," ").concat(!r&&"default"!==l&&"darkmode"!==l&&"disabled"),onClick:function(){r||"default"===l||"darkmode"===l?e.handleColorPalette(l):document.querySelector(".wp-dark-mode-promo").classList.remove("hidden")}},wp.element.createElement("img",{src:"".concat(wpDarkMode.pluginUrl,"/includes/gutenberg/images/").concat(l,".png"),alt:i}),wp.element.createElement("span",null," ",i," "),t==l?wp.element.createElement("span",{className:"tick"}," ✓ "):"",!r&&"default"!==l&&"darkmode"!==l&&wp.element.createElement("span",{className:"wp-darkmode-pro-badge"}," PRO "))})))}}]),r}(ee),ne=function(e){$(r,e);var t=K(r);function r(){return H(this,r),t.apply(this,arguments)}return W(r,[{key:"render",value:function(){var e=this.props.active;return wp.element.createElement(te,null,e?wp.element.createElement("div",{className:"wpdm-color-palettes-wrapper"},wp.element.createElement(re,null)):"")}}]),r}(ee),oe=ne,ae=wp.element.render;function le(){window.themeChooseActive=!window.themeChooseActive,ae(wp.element.createElement(oe,{active:window.themeChooseActive}),document.getElementById("wpdmColorPalettesContainer"))}document.addEventListener("DOMContentLoaded",(function(){setTimeout((function(){[1,"1",!0].includes(wpDarkMode.enable_block_editor)&&setTimeout((function(){!function(){var e=localStorage.getItem("wp_dark_mode_gb");e&&document.querySelector("html").classList.add("wp-dark-mode-theme-".concat(e));var t=document.querySelector(".edit-post-header__toolbar");t||(t=document.querySelector(".edit-widgets-header__navigable-toolbar-wrapper"));var r=document.createElement("div");r.classList.add("wpdm-theme-switch-wrapper"),console.log("node",r);var n='<div id="wpDarkModeThemeSwitch"><img id="wpDarkModeThemeSwitchImg" src="'.concat(wpDarkMode.pluginUrl,'/includes/gutenberg/images/default.png" /> <i class="wpdm-arrow down"></i> </div>');n+='<div id="wpdmColorPalettesContainer"></div> ',r.innerHTML=n,t&&(t.insertBefore(r,t.childNodes[1]),document.getElementById("wpDarkModeThemeSwitch").addEventListener("click",le))}()}),20)}),1)}));var ie=wp.i18n.__;(0,wp.blocks.registerBlockType)("wp-dark-mode-block/dark-mode-switch",{title:ie("Dark Mode Switch","wp-dark-mode"),icon:{src:function(e){return I.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",width:170.667,height:170.667,viewBox:"0 0 128 128"},e),N||(N=I.createElement("path",{d:"M46.2 2C36.1 4.7 27 10.1 18.6 18.4 10 27.1 5.4 34.6 2.3 45.2c-4.6 15.9-2.4 37.4 5 50.1 6.9 11.7 18.6 22.5 29.9 27.6 11.2 5 29.8 6.6 42.6 3.6 21.9-5.2 40.2-23 46.3-45 3-11.2 2.4-28.6-1.4-39.5-6.9-19.3-23.9-35.1-43.3-40C71.2-.6 56.2-.6 46.2 2zm19.4 27.2c-8.3 8.2-11 14.9-10.4 25.8 1 17.3 13.2 29.7 30.2 30.8 3.9.2 8.9-.1 11-.7 2.2-.6 4.2-.9 4.4-.6.8.7-5.8 9.4-9.8 12.7-2.2 1.9-6.6 4.8-9.7 6.4-5.4 2.7-6.6 2.9-17.3 2.9-11.1 0-11.8-.1-18.5-3.4-20.9-10.3-29.7-34.7-20.1-55.7 2.5-5.4 9.7-13.9 15-17.7 5.7-4.1 14.6-6.6 23.3-6.6l8.2-.1-6.3 6.2z"})))}},category:"common",attributes:{style:{type:"number",default:1},alignment:{type:"string"}},supports:{align:["center","wide","full"]},edit:F,save:function(e){var t=e.attributes,r=t.alignment,n=t.style;return wp.element.createElement("div",{style:{textAlign:r}}," ",wp.element.createElement(m,{style:n})," ")}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=function(t,r,o,a){if(!r){var l=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,a<l&&(l=a));if(i){e.splice(s--,1);var m=o();void 0!==m&&(t=m)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0,278:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,l=r[0],i=r[1],c=r[2],m=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var s=c(n)}for(t&&t(r);m<l.length;m++)a=l[m],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self.webpackChunkwp_dark_mode_dev=self.webpackChunkwp_dark_mode_dev||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[278],(function(){return n(917)}));o=n.O(o)}();