!function(){"use strict";var e={"./assets/admin/src/dashboard/index.js":function(e,t,n){n.r(t);var r=n("./assets/admin/src/dashboard/store/store.js"),l=n("./assets/admin/src/dashboard/tabs/dashboard/index.js");n("./assets/admin/src/dashboard/tabs/elementor-blocks/index.js");function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,c,o=[],i=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);i=!0);}catch(e){s=!0,l=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw l}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e=a((0,r.useStateValue)(),2),t=e[0].tab,n=e[1],c=[{slug:"dashboard",name:"Editor",component:l.default}];return wp.element.createElement("div",{className:"page"},wp.element.createElement("div",{className:"header"},wp.element.createElement("div",{className:"logo"}),wp.element.createElement("div",{className:"header-right"},wp.element.createElement("ul",{className:"menu menu-admin"},c.map((function(e,r){return wp.element.createElement("li",{key:r,className:t.slug===e.slug?"active":"",onClick:function(){n({type:"set",tab:e})}},wp.element.createElement("a",{href:"#"},e.name))}))),wp.element.createElement("div",{className:"flex"},wp.element.createElement("ul",{className:"menu"},wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://wp.me/P4Ams0-9Sn/",target:"_blank"},"Knowledge Base")))))),wp.element.createElement("div",{className:"content"},wp.element.createElement(t.component,null)),wp.element.createElement("div",{className:"footer"}))}},"./assets/admin/src/dashboard/store/reducer.js":function(e,t,n){n.r(t),n.d(t,{initialState:function(){return m}});var r=n("./assets/admin/src/dashboard/tabs/dashboard/index.js");function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var a=["type"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m={styleType:"button",position:"outside",format:"",btnText:"Copy",btnAfterCopyText:"Copy",btnTitle:"Copy",style:CopyDashboardVars.style,isUpdated:!1,post:CopyDashboardVars.onEdit?CopyDashboardVars.post:{post_title:""},meta:CopyDashboardVars.onEdit?CopyDashboardVars.meta:{"button-copy-text":"Copy","button-position":"outside","button-text":"Copy","button-title":"Copy","copy-format":"",selector:"pre",style:"button"},tab:{slug:"dashboard",name:"Editor",component:r.default}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=s(t,a);return"set"===n?o(o({},e),r):e}},"./assets/admin/src/dashboard/store/store.js":function(e,t,n){n.r(t),n.d(t,{StateContext:function(){return l},StateProvider:function(){return a},useStateValue:function(){return c}});var r=n("@wordpress/element"),l=(0,r.createContext)(),a=function(e){var t=e.reducer,n=e.initialState,a=e.children;return wp.element.createElement(l.Provider,{value:(0,r.useReducer)(t,n)},a)},c=function(){return(0,r.useContext)(l)}},"./assets/admin/src/dashboard/tabs/dashboard/index.js":function(e,t,n){n.r(t);var r=n("./assets/admin/src/dashboard/store/store.js"),l=n("./assets/admin/src/dashboard/tabs/dashboard/preview.js"),a=n("./assets/admin/src/dashboard/tabs/dashboard/settings.js"),c=n("jquery"),o=n.n(c),i=n("@wordpress/element"),s=n("./assets/admin/src/utils/index.js");function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,c,o=[],i=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);i=!0);}catch(e){s=!0,l=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw l}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e=b((0,r.useStateValue)(),2),t=e[0],n=t.isUpdated,c=t.meta,m=(t.style,t.post),u=e[1],d=m.post_title,f=b((0,i.useState)("Cancel"),2),y=f[0],v=f[1],w=b((0,i.useState)(CopyDashboardVars.onEdit?"Save Changes":"Create"),2),g=w[0],E=w[1],h=c["button-copy-text"]||"",j=c["button-position"]||"",S=c["button-text"]||"",N=c["button-title"]||"",O=c["copy-format"]||"",_=c.selector||"",x=c.style||"";return wp.element.createElement("div",null,wp.element.createElement("div",{className:"row"},wp.element.createElement("div",{className:"col"},wp.element.createElement("div",{className:"field post-title"},wp.element.createElement("span",{className:"label"},"Post Title"),wp.element.createElement("input",{type:"text",value:d,className:"post-title",placeholder:"Post Title",onChange:function(e){u({type:"set",post:p(p({},m),{},{post_title:e.target.value}),isUpdated:!0})}})))),wp.element.createElement("div",{className:"row"},wp.element.createElement("div",{className:"col"},wp.element.createElement(a.default,null)),wp.element.createElement("div",{className:"col"},wp.element.createElement(l.default,null))),wp.element.createElement("div",null,wp.element.createElement("button",{className:"button button-primary save-btn",disabled:!n,onClick:function(){CopyDashboardVars.onEdit?E("Saving..."):E("Creating..."),o().ajax({url:CopyDashboardVars.ajax_url,type:"POST",data:{action:"ctc_save_changes",on_edit:CopyDashboardVars.onEdit,style_type:x,position:j,format:O,btn_text:S,btn_after_copy_text:h,btn_title:N,selector:_,style:x,post:m,nonce:CopyDashboardVars.nonce},success:function(e){E("Redirecting..."),window.location.href=(0,s.unescape)(e.data.edit_post_url)}})}},g),wp.element.createElement("button",{className:"button",onClick:function(){v("Redirecting..."),window.location.href=CopyDashboardVars.editUrl}},y)))}},"./assets/admin/src/dashboard/tabs/dashboard/preview.js":function(e,t,n){n.r(t);var r=n("@wordpress/element"),l=n("@wordpress/hooks"),a=n("./assets/admin/src/dashboard/store/store.js"),c=n("jquery"),o=n.n(c);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,c,o=[],i=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);i=!0);}catch(e){s=!0,l=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw l}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=function(){return wp.element.createElement("svg",{viewBox:"-21 0 512 512",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:"m186.667969 416c-49.984375 0-90.667969-40.683594-90.667969-90.667969v-218.664062h-37.332031c-32.363281 0-58.667969 26.300781-58.667969 58.664062v288c0 32.363281 26.304688 58.667969 58.667969 58.667969h266.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-37.332031zm0 0"}),wp.element.createElement("path",{d:"m469.332031 58.667969c0-32.40625-26.261719-58.667969-58.664062-58.667969h-224c-32.40625 0-58.667969 26.261719-58.667969 58.667969v266.664062c0 32.40625 26.261719 58.667969 58.667969 58.667969h224c32.402343 0 58.664062-26.261719 58.664062-58.667969zm0 0"}))};t.default=function(){var e=i((0,a.useStateValue)(),2),t=e[0],n=e[1],c=t.style,s=t.meta,u=c.btn_color,p=c.btn_bg_color,d=c.btn_l_padding,b=c.btn_t_padding,f=c.btn_r_padding,y=c.btn_b_padding,v=c.btn_l_margin,w=c.btn_t_margin,g=c.btn_r_margin,E=c.btn_b_margin,h=c.btn_tl_radius,j=c.btn_tr_radius,S=c.btn_br_radius,N=c.btn_bl_radius,O=c.btn_font_size,_=c.btn_line_height,x=c.btn_h_color,C=c.btn_h_bg_color,P=c.svg_icon_color,k=c.svg_icon_width,A=c.svg_icon_t_padding,D=c.svg_icon_r_padding,T=c.svg_icon_b_padding,I=c.svg_icon_l_padding,B=c.svg_icon_h_color,U=c.cover_color,V=c.cover_font_size,z=(s["button-copy-text"],s["button-position"]||""),F=s["button-text"]||"",H=s["button-title"]||"",M=(s["copy-format"],s.selector,s.style||""),R=function(){var e=o()("#ctc-style");e.length||((e=document.createElement("style")).id="ctc-style",e.type="text/css",e.media="screen",e.innerHTML="",document.head.appendChild(e),e=o()("#ctc-style"));var t="\n            #preview .ctc-style-cover .ctc-button {\n                color: ".concat(U,";\n                font-size: ").concat(V,"px;\n            }\n            #preview .ctc-style-svg-icon .ctc-button {\n                padding-top: ").concat(A,"px;\n                padding-right: ").concat(D,"px;\n                padding-bottom: ").concat(T,"px;\n                padding-left: ").concat(I,"px;\n                color: ").concat(P,";\n            }\n            #preview .ctc-style-svg-icon svg {\n                fill: ").concat(P,";\n                width: ").concat(k,"px;\n            }\n            #preview .ctc-style-svg-icon .ctc-button:hover {\n                color: ").concat(B,";\n            }\n            #preview .ctc-style-svg-icon .ctc-button:hover svg {\n                fill: ").concat(B,";\n            }\n\n            #preview .ctc-style-button .ctc-button {\n                color: ").concat(u,";\n                background-color: ").concat(p,";\n                font-size: ").concat(O,"px;\n                line-height: ").concat(_,"px;\n                padding-left: ").concat(d,"px;\n                padding-top: ").concat(b,"px;\n                padding-right: ").concat(f,"px;\n                padding-bottom: ").concat(y,"px;\n                margin-left: ").concat(v,"px;\n                margin-top: ").concat(w,"px;\n                margin-right: ").concat(g,"px;\n                margin-bottom: ").concat(E,"px;\n                border-top-left-radius: ").concat(h,"px;\n                border-top-right-radius: ").concat(j,"px;\n                border-bottom-right-radius: ").concat(S,"px;\n                border-bottom-left-radius: ").concat(N,"px;\n            }\n            #preview .ctc-style-button .ctc-button:hover {\n                color: ").concat(x,";\n                background-color: ").concat(C,";\n            }\n            #preview .ctc-style-button .ctc-button svg {\n                fill: ").concat(u,";\n                width: ").concat(O,"px;\n            }\n            #preview .ctc-style-button .ctc-button:hover svg {\n                fill: ").concat(x,";\n            }\n        ");e.html(t)},W=(0,l.applyFilters)("ctc.settings.customize",!1);return(0,r.useEffect)((function(){!1!==W&&R()}),[c]),wp.element.createElement("div",{id:"preview",className:"ctc-preview"},wp.element.createElement("h2",null,"Preview"),wp.element.createElement("div",{className:"ctc-preview-wrap ctc-position-".concat(z," ctc-style-").concat(M)},""===M||"button"===M?wp.element.createElement(React.Fragment,null,"inside"===z?wp.element.createElement("div",{className:"ctc-preview-target"},wp.element.createElement("button",{className:"ctc-button",title:H},F),"Hello World"):null,""===z||"outside"===z?wp.element.createElement(React.Fragment,null,wp.element.createElement("button",{className:"ctc-button",title:H},F),wp.element.createElement("div",{className:"ctc-preview-target"},"Hello World")):null):null,"svg-icon"===M?wp.element.createElement(React.Fragment,null,"inside"===z?wp.element.createElement("div",{className:"ctc-preview-target"},wp.element.createElement("button",{className:"ctc-button",title:H},wp.element.createElement(m,null)),"Hello World"):null,"outside"===z?wp.element.createElement(React.Fragment,null,wp.element.createElement("button",{className:"ctc-button",title:H},wp.element.createElement(m,null)),wp.element.createElement("div",{className:"ctc-preview-target"},"Hello World")):null):null,"cover"===M?wp.element.createElement("div",{className:"ctc-preview-target"},wp.element.createElement("span",{className:"ctc-button",title:H},F),"Hello World"):null),wp.element.createElement("form",{id:"ctc-style-form",className:"".concat(!1===W?"is-free":""," ").concat(M?"style-"+M:""),onChange:function(e){e.preventDefault();var t=e.target.name,r=e.target.value;t=(t=t.replaceAll("ctc-","")).replaceAll("-","_");var a=(0,l.applyFilters)("ctc.settings.submit",!1,t,r,c);!1!==a&&(n({type:"set",style:a,isUpdated:!0}),R())}},!1===W?wp.element.createElement("div",{className:"upgrade"},wp.element.createElement("a",{href:CopyDashboardVars.upgradeUrl},"Upgrade to Premium to Access")):null,wp.element.createElement("table",{className:"style-svg-icon widefat striped",style:{display:"svg-icon"===M?"table":"none"}},wp.element.createElement("tbody",null,wp.element.createElement("tr",null,wp.element.createElement("th",{colspan:"2"},wp.element.createElement("b",null,"Normal Style"))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Icon Color"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"color",className:"ctc-svg-icon-color",name:"ctc-svg-icon-color",value:P}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Icon Size"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-svg-icon-width",name:"ctc-svg-icon-width",value:k}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Icon Padding"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-svg-icon-t-padding",name:"ctc-svg-icon-t-padding",value:A}),wp.element.createElement("input",{type:"number",className:"ctc-svg-icon-r-padding",name:"ctc-svg-icon-r-padding",value:D}),wp.element.createElement("input",{type:"number",className:"ctc-svg-icon-b-padding",name:"ctc-svg-icon-b-padding",value:T}),wp.element.createElement("input",{type:"number",className:"ctc-svg-icon-l-padding",name:"ctc-svg-icon-l-padding",value:I}))),wp.element.createElement("tr",null,wp.element.createElement("th",{colspan:"2"},wp.element.createElement("b",null,"Hover Style"))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Icon Color"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"color",className:"ctc-svg-icon-h-color",name:"ctc-svg-icon-h-color",value:B}))))),wp.element.createElement("table",{className:"style-cover widefat striped",style:{display:"cover"===M?"table":"none"}},wp.element.createElement("tbody",null,wp.element.createElement("tr",null,wp.element.createElement("td",null,"Text Color"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"color",className:"ctc-cover-color",name:"ctc-cover-color",value:U}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Font Size"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-cover-font-size",name:"ctc-cover-font-size",value:V}))))),wp.element.createElement("table",{className:"style-button widefat striped",style:{display:"button"===M?"table":"none"}},wp.element.createElement("tbody",null,wp.element.createElement("tr",null,wp.element.createElement("th",{colspan:"2"},wp.element.createElement("b",null,"Normal Style"))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Button Color"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"color",className:"ctc-btn-color",name:"ctc-btn-color",value:u}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Button Background Color"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"color",className:"ctc-btn-bg-color",name:"ctc-btn-bg-color",value:p}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Font Size"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-btn-font-size",name:"ctc-btn-font-size",value:O}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Line Height"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-btn-line-height",name:"ctc-btn-line-height",value:_}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Button Padding"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-btn-t-padding",name:"ctc-btn-t-padding",value:b}),wp.element.createElement("input",{type:"number",className:"ctc-btn-r-padding",name:"ctc-btn-r-padding",value:f}),wp.element.createElement("input",{type:"number",className:"ctc-btn-b-padding",name:"ctc-btn-b-padding",value:y}),wp.element.createElement("input",{type:"number",className:"ctc-btn-l-padding",name:"ctc-btn-l-padding",value:d}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Button Margin"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-btn-t-margin",name:"ctc-btn-t-margin",value:w}),wp.element.createElement("input",{type:"number",className:"ctc-btn-r-margin",name:"ctc-btn-r-margin",value:g}),wp.element.createElement("input",{type:"number",className:"ctc-btn-b-margin",name:"ctc-btn-b-margin",value:E}),wp.element.createElement("input",{type:"number",className:"ctc-btn-l-margin",name:"ctc-btn-l-margin",value:v}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Border Radius"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"number",className:"ctc-btn-tl-radius",name:"ctc-btn-tl-radius",value:h}),wp.element.createElement("input",{type:"number",className:"ctc-btn-tr-radius",name:"ctc-btn-tr-radius",value:j}),wp.element.createElement("input",{type:"number",className:"ctc-btn-br-radius",name:"ctc-btn-br-radius",value:S}),wp.element.createElement("input",{type:"number",className:"ctc-btn-bl-radius",name:"ctc-btn-bl-radius",value:N}))),wp.element.createElement("tr",null,wp.element.createElement("th",{colspan:"2"},wp.element.createElement("b",null,"Hover Style"))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Button Color"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"color",className:"ctc-btn-h-color",name:"ctc-btn-h-color",value:x}))),wp.element.createElement("tr",null,wp.element.createElement("td",null,"Button Background Color"),wp.element.createElement("td",null,wp.element.createElement("input",{type:"color",className:"ctc-btn-h-bg-color",name:"ctc-btn-h-bg-color",value:C})))))))}},"./assets/admin/src/dashboard/tabs/dashboard/settings.js":function(e,t,n){n.r(t);var r=n("./assets/admin/src/dashboard/store/store.js");function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,c,o=[],i=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);i=!0);}catch(e){s=!0,l=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw l}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=[{name:"Button",value:"button"},{name:"Icon",value:"svg-icon"},{name:"Cover",value:"cover"}],u=[{name:"Inside",value:"inside"},{name:"Outside",value:"outside"}],p=[{name:"Default",value:"default"},{name:"Google Docs",value:"google-docs"},{name:"Email",value:"email"}];t.default=function(){var e=i((0,r.useStateValue)(),2),t=e[0].meta,n=e[1],l=t["button-copy-text"]||"",a=t["button-position"]||"",o=t["button-text"]||"",s=t["button-title"]||"",d=t["copy-format"]||"",b=t.selector||"",f=t.style||"";return wp.element.createElement("div",{className:"ctc-settings"},wp.element.createElement("h2",null,"Settings"),wp.element.createElement("div",{className:"field"},wp.element.createElement("span",{className:"label"},"Selector"),wp.element.createElement("input",{type:"text",value:b,placeholder:"E.g. pre, .my-class, #my-id",onChange:function(e){n({type:"set",meta:c(c({},t),{},{selector:e.target.value}),isUpdated:!0})}})),wp.element.createElement("div",{className:"field"},wp.element.createElement("span",{className:"label"},"Format"),wp.element.createElement("select",{onChange:function(e){n({type:"set",meta:c(c({},t),{},{"copy-format":e.target.value}),isUpdated:!0})}},p.map((function(e,t){return wp.element.createElement("option",{key:t,value:e.value,selected:d===e.value},e.name)})))),wp.element.createElement("div",{className:"field"},wp.element.createElement("span",{className:"label"},"Style"),wp.element.createElement("select",{onChange:function(e){n({type:"set",meta:c(c({},t),{},{style:e.target.value}),isUpdated:!0})}},m.map((function(e,t){return wp.element.createElement("option",{key:t,value:e.value,selected:f===e.value},e.name)})))),"cover"===f?null:wp.element.createElement("div",{className:"field"},wp.element.createElement("span",{className:"label"},"Position"),wp.element.createElement("select",{onChange:function(e){n({type:"set",meta:c(c({},t),{},{"button-position":e.target.value}),isUpdated:!0})}},u.map((function(e,t){return wp.element.createElement("option",{key:t,value:e.value,selected:a===e.value},e.name)})))),"button"===f?wp.element.createElement("div",{className:"field"},wp.element.createElement("span",{className:"label"},"Button Text"),wp.element.createElement("input",{type:"text",value:o,placeholder:"Copy",onChange:function(e){n({type:"set",meta:c(c({},t),{},{"button-text":e.target.value}),isUpdated:!0})}})):null,wp.element.createElement("div",{className:"field"},wp.element.createElement("span",{className:"label"},"After Copy Button Text"),wp.element.createElement("input",{type:"text",value:l,placeholder:"Copied",onChange:function(e){n({type:"set",meta:c(c({},t),{},{"button-copy-text":e.target.value}),isUpdated:!0})}})),wp.element.createElement("div",{className:"field"},wp.element.createElement("span",{className:"label"},"Button Title"),wp.element.createElement("input",{type:"text",value:s,placeholder:"Copy",onChange:function(e){n({type:"set",meta:c(c({},t),{},{"button-title":e.target.value}),isUpdated:!0})}})))}},"./assets/admin/src/dashboard/tabs/elementor-blocks/index.js":function(e,t,n){n.r(t);t.default=function(){return wp.element.createElement("div",null,wp.element.createElement("h2",null,"Elementor Blocks"),wp.element.createElement("p",null,"Below are the Elementor blocks that are available for use."),wp.element.createElement("div",{className:"blocks-list"},CopyDashboardVars.elementor.blocks.map((function(e,t){return wp.element.createElement("div",{className:"ctc-block",key:t},wp.element.createElement("div",{className:"ctc-block-title"},e.name),wp.element.createElement("div",{className:"ctc-block-description"},e.description),wp.element.createElement("div",{className:"ctc-block-actions"},wp.element.createElement("label",{htmlFor:"ctc-block-".concat(t)},"Enable ",wp.element.createElement("input",{type:"checkbox",id:"ctc-block-".concat(t),className:"ctc-block-toggle"}))))}))))}},"./assets/admin/src/utils/index.js":function(e,t,n){n.r(t),n.d(t,{getToday:function(){return r},unescape:function(){return l}});var r=function(){return new Date},l=function(e){return e?e=(e=(e=e.replaceAll("&amp;","&")).replaceAll("&#215;","x")).replaceAll("&#8211;","-"):e}},jquery:function(e){e.exports=jQuery},"@wordpress/element":function(e){e.exports=wp.element},"@wordpress/hooks":function(e){e.exports=wp.hooks}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){n.r(r),n.d(r,{Root:function(){return m}});var e=n("jquery"),t=n.n(e),l=n("@wordpress/element"),a=n("./assets/admin/src/dashboard/index.js"),c=n("./assets/admin/src/dashboard/store/reducer.js"),o=n("./assets/admin/src/dashboard/store/store.js");function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(l=r.key,a=void 0,a=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===i(a)?a:String(a)),r)}var l,a}var m=function(){return wp.element.createElement(o.StateProvider,{reducer:c.default,initialState:c.initialState},wp.element.createElement(a.default,null))},u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"setup",value:function(){(0,l.render)((0,l.createElement)(m),document.getElementById("ctc-dashboard-root"))}}])&&s(t.prototype,n),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t()(document).ready((function(){window.ctcDashboard=new u,null!==document.getElementById("ctc-dashboard-root")&&window.ctcDashboard.setup()}))}()}();