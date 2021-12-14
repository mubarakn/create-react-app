/*! For license information please see d01c30f5.238a78bc.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7429],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9215:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(2784),n(3905)),a=["components"],l={id:"using-the-public-folder",title:"Using the Public Folder"},s=void 0,u={unversionedId:"using-the-public-folder",id:"using-the-public-folder",title:"Using the Public Folder",description:"Note: this feature is available with react-scripts@0.5.0 and higher.",source:"@site/../docs/using-the-public-folder.md",sourceDirName:".",slug:"/using-the-public-folder",permalink:"/docs/using-the-public-folder",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/using-the-public-folder.md",tags:[],version:"current",lastUpdatedBy:"e-w-h",lastUpdatedAt:1620837025,formattedLastUpdatedAt:"5/12/2021",frontMatter:{id:"using-the-public-folder",title:"Using the Public Folder"},sidebar:"docs",previous:{title:"Loading .graphql Files",permalink:"/docs/loading-graphql-files"},next:{title:"Code Splitting",permalink:"/docs/code-splitting"}},c=[{value:"Changing the HTML",id:"changing-the-html",children:[],level:2},{value:"Adding Assets Outside of the Module System",id:"adding-assets-outside-of-the-module-system",children:[],level:2},{value:"When to Use the <code>public</code> Folder",id:"when-to-use-the-public-folder",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: this feature is available with ",(0,i.kt)("inlineCode",{parentName:"p"},"react-scripts@0.5.0")," and higher.")),(0,i.kt)("h2",{id:"changing-the-html"},"Changing the HTML"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," folder contains the HTML file so you can tweak it, for example, to ",(0,i.kt)("a",{parentName:"p",href:"/docs/title-and-meta-tags"},"set the page title"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag with the compiled code will be added to it automatically during the build process."),(0,i.kt)("h2",{id:"adding-assets-outside-of-the-module-system"},"Adding Assets Outside of the Module System"),(0,i.kt)("p",null,"You can also add other assets to the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," folder."),(0,i.kt)("p",null,"Note that we normally encourage you to ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," assets in JavaScript files instead.\nFor example, see the sections on ",(0,i.kt)("a",{parentName:"p",href:"/docs/adding-a-stylesheet"},"adding a stylesheet")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/adding-images-fonts-and-files"},"adding images and fonts"),".\nThis mechanism provides a number of benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scripts and stylesheets get minified and bundled together to avoid extra network requests."),(0,i.kt)("li",{parentName:"ul"},"Missing files cause compilation errors instead of 404 errors for your users."),(0,i.kt)("li",{parentName:"ul"},"Result filenames include content hashes so you don\u2019t need to worry about browsers caching their old versions.")),(0,i.kt)("p",null,"However there is an ",(0,i.kt)("strong",{parentName:"p"},"escape hatch")," that you can use to add an asset outside of the module system."),(0,i.kt)("p",null,"If you put a file into the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," folder, it will ",(0,i.kt)("strong",{parentName:"p"},"not")," be processed by webpack. Instead it will be copied into the build folder untouched. To reference assets in the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," folder, you need to use an environment variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"PUBLIC_URL"),"."),(0,i.kt)("p",null,"Inside ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),", you can use it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />\n')),(0,i.kt)("p",null,"Only files inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," folder will be accessible by ",(0,i.kt)("inlineCode",{parentName:"p"},"%PUBLIC_URL%")," prefix. If you need to use a file from ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", you\u2019ll have to copy it there to explicitly specify your intention to make this file a part of the build."),(0,i.kt)("p",null,"When you run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build"),", Create React App will substitute ",(0,i.kt)("inlineCode",{parentName:"p"},"%PUBLIC_URL%")," with a correct absolute path so your project works even if you use client-side routing or host it at a non-root URL."),(0,i.kt)("p",null,"In JavaScript code, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.PUBLIC_URL")," for similar purposes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"render() {\n  // Note: this is an escape hatch and should be used sparingly!\n  // Normally we recommend using `import` for getting asset URLs\n  // as described in \u201cAdding Images and Fonts\u201d above this section.\n  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;\n}\n")),(0,i.kt)("p",null,"Keep in mind the downsides of this approach:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"None of the files in ",(0,i.kt)("inlineCode",{parentName:"li"},"public")," folder get post-processed or minified."),(0,i.kt)("li",{parentName:"ul"},"Missing files will not be called at compilation time, and will cause 404 errors for your users."),(0,i.kt)("li",{parentName:"ul"},"Result filenames won\u2019t include content hashes so you\u2019ll need to add query arguments or rename them every time they change.")),(0,i.kt)("h2",{id:"when-to-use-the-public-folder"},"When to Use the ",(0,i.kt)("inlineCode",{parentName:"h2"},"public")," Folder"),(0,i.kt)("p",null,"Normally we recommend importing ",(0,i.kt)("a",{parentName:"p",href:"/docs/adding-a-stylesheet"},"stylesheets"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/adding-images-fonts-and-files"},"images, and fonts")," from JavaScript.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," folder is useful as a workaround for a number of less common cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need a file with a specific name in the build output, such as ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Manifest"},(0,i.kt)("inlineCode",{parentName:"a"},"manifest.webmanifest")),"."),(0,i.kt)("li",{parentName:"ul"},"You have thousands of images and need to dynamically reference their paths."),(0,i.kt)("li",{parentName:"ul"},"You want to include a small script like ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CodeByZach/pace"},(0,i.kt)("inlineCode",{parentName:"a"},"pace.js"))," outside of the bundled code."),(0,i.kt)("li",{parentName:"ul"},"Some libraries may be incompatible with webpack and you have no other option but to include it as a ",(0,i.kt)("inlineCode",{parentName:"li"},"<script>")," tag.")),(0,i.kt)("p",null,"Note that if you add a ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," that declares global variables, you should read the topic ",(0,i.kt)("a",{parentName:"p",href:"/docs/using-global-variables"},"Using Global Variables")," in the next section which explains how to reference them."))}d.isMDXComponent=!0},7320:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,l,s=o(e),u=1;u<arguments.length;u++){for(var c in a=Object(arguments[u]))n.call(a,c)&&(s[c]=a[c]);if(t){l=t(a);for(var p=0;p<l.length;p++)r.call(a,l[p])&&(s[l[p]]=a[l[p]])}}return s}},3426:function(e,t,n){var r=n(7320),o=60103,i=60106;var a=60109,l=60110,s=60112;var u=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),a=p("react.provider"),l=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),c=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function b(){}function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var k=g.prototype=new b;k.constructor=g,r(k,y.prototype),k.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,i={},a=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,r)&&!N.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:v.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function U(e,t,n,r,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return a=a(s=e),e=""===r?"."+P(s,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),U(a,t,n,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=r+P(l=e[u],u);s+=U(l,t,n,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=U(l=l.value,t,n,c=r+P(l,u++),a);else if("object"===l)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function _(e,t,n){if(null==e)return e;var r=[],o=0;return U(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function L(){var e=x.current;if(null===e)throw Error(f(321));return e}},2784:function(e,t,n){n(3426)}}]);