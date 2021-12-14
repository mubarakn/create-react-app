/*! For license information please see 992518d4.f582cd65.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9541],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},510:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(2784),n(3905)),i=["components"],l={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},s=void 0,u={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"npm start doesn\u2019t detect changes",source:"@site/../docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"Lewis Llobera",lastUpdatedAt:1581604862,formattedLastUpdatedAt:"2/13/2020",frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"Alternatives to Ejecting",permalink:"/docs/alternatives-to-ejecting"}},c=[{value:"<code>npm start</code> doesn\u2019t detect changes",id:"npm-start-doesnt-detect-changes",children:[],level:2},{value:"<code>npm start</code> fail due to watch error",id:"npm-start-fail-due-to-watch-error",children:[],level:2},{value:"<code>npm test</code> hangs or crashes on macOS Sierra",id:"npm-test-hangs-or-crashes-on-macos-sierra",children:[],level:2},{value:"<code>npm run build</code> exits too early",id:"npm-run-build-exits-too-early",children:[],level:2},{value:"<code>npm run build</code> fails on Heroku",id:"npm-run-build-fails-on-heroku",children:[],level:2},{value:"Moment.js locales are missing",id:"momentjs-locales-are-missing",children:[],level:2},{value:"<code>npm run build</code> fails to minify",id:"npm-run-build-fails-to-minify",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"npm-start-doesnt-detect-changes"},(0,a.kt)("inlineCode",{parentName:"h2"},"npm start")," doesn\u2019t detect changes"),(0,a.kt)("p",null,"When you save a file while ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start")," is running, the browser should refresh with the updated code."),(0,a.kt)("p",null,"If this doesn\u2019t happen, try one of the following workarounds:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check that your file is imported by your entrypoint. TypeScript will show errors on any of your source files, but webpack only reloads your files if they are directly or indirectly imported by one of your entrypoints."),(0,a.kt)("li",{parentName:"ul"},"If your project is in a Dropbox folder, try moving it out."),(0,a.kt)("li",{parentName:"ul"},"If the watcher doesn\u2019t see a file called ",(0,a.kt)("inlineCode",{parentName:"li"},"index.js")," and you\u2019re referencing it by the folder name, you ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/create-react-app/issues/1164"},"need to restart the watcher")," due to a webpack bug."),(0,a.kt)("li",{parentName:"ul"},"Some editors like Vim and IntelliJ have a \u201csafe write\u201d feature that currently breaks the watcher. You will need to disable it. Follow the instructions in ",(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/guides/development/#adjusting-your-text-editor"},"\u201cAdjusting Your Text Editor\u201d"),"."),(0,a.kt)("li",{parentName:"ul"},"If your project path contains parentheses, try moving the project to a path without them. This is caused by a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/webpack/watchpack/issues/42"},"webpack watcher bug"),"."),(0,a.kt)("li",{parentName:"ul"},"On Linux and macOS, you might need to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/webpack/docs/wiki/troubleshooting#not-enough-watchers"},"tweak system settings")," to allow more watchers."),(0,a.kt)("li",{parentName:"ul"},"If the project runs inside a virtual machine such as (a Vagrant provisioned) VirtualBox, create an ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file in your project directory if it doesn\u2019t exist, and add ",(0,a.kt)("inlineCode",{parentName:"li"},"CHOKIDAR_USEPOLLING=true")," to it. This ensures that the next time you run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start"),", the watcher uses the polling mode, as necessary inside a VM.")),(0,a.kt)("p",null,"If none of these solutions help please leave a comment ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/659"},"in this thread"),"."),(0,a.kt)("h2",{id:"npm-start-fail-due-to-watch-error"},(0,a.kt)("inlineCode",{parentName:"h2"},"npm start")," fail due to watch error"),(0,a.kt)("p",null,"If you are using a Linux operating system and see an error similar to: ",(0,a.kt)("inlineCode",{parentName:"p"},"ENOSPC: System limit for number of file watchers reached"),", you can fix the issue by increasing the ",(0,a.kt)("inlineCode",{parentName:"p"},"fs.inotify.max_user_watches")," setting of your operating system."),(0,a.kt)("p",null,"If you are running Debian, RedHat, or another similar Linux distribution, run the following in a terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p\n")),(0,a.kt)("p",null,"If you are running ArchLinux, run the following command instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system\n")),(0,a.kt)("p",null,"Then paste it in your terminal and press on enter to run it. You could find more information ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details"},"here"),"."),(0,a.kt)("h2",{id:"npm-test-hangs-or-crashes-on-macos-sierra"},(0,a.kt)("inlineCode",{parentName:"h2"},"npm test")," hangs or crashes on macOS Sierra"),(0,a.kt)("p",null,"If you run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm test")," and the console gets stuck after printing ",(0,a.kt)("inlineCode",{parentName:"p"},"react-scripts test")," to the console there might be a problem with your ",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/watchman/"},"Watchman")," installation as described in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/713"},"facebook/create-react-app#713"),"."),(0,a.kt)("p",null,"We recommend deleting ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," in your project and running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," if you use it) first. If it doesn't help, you can try one of the numerous workarounds mentioned in these issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/issues/1767"},"facebook/jest#1767")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/watchman/issues/358"},"facebook/watchman#358")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ember-cli/ember-cli/issues/6259"},"ember-cli/ember-cli#6259"))),(0,a.kt)("p",null,"It is reported that installing Watchman 4.7.0 or newer fixes the issue. If you use ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),", you can run these commands to update it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"watchman shutdown-server\nbrew update\nbrew reinstall watchman\n")),(0,a.kt)("p",null,"You can find ",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/watchman/docs/install.html#build-install"},"other installation methods")," on the Watchman documentation page."),(0,a.kt)("p",null,"If this still doesn\u2019t help, try running ",(0,a.kt)("inlineCode",{parentName:"p"},"launchctl unload -F ~/Library/LaunchAgents/com.github.facebook.watchman.plist"),"."),(0,a.kt)("p",null,"There are also reports that ",(0,a.kt)("em",{parentName:"p"},"uninstalling")," Watchman fixes the issue. So if nothing else helps, remove it from your system and try again."),(0,a.kt)("h2",{id:"npm-run-build-exits-too-early"},(0,a.kt)("inlineCode",{parentName:"h2"},"npm run build")," exits too early"),(0,a.kt)("p",null,"It is reported that ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build")," can fail on machines with limited memory and no swap space, which is common in cloud environments. Even with small projects this command can increase RAM usage in your system by hundreds of megabytes, so if you have less than 1 GB of available memory your build is likely to fail with the following message:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The build failed because the process exited too early. This probably means the system ran out of memory or someone called ",(0,a.kt)("inlineCode",{parentName:"p"},"kill -9")," on the process.")),(0,a.kt)("p",null,"If you are completely sure that you didn't terminate the process, consider ",(0,a.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04"},"adding some swap space")," to the machine you\u2019re building on, or build the project locally."),(0,a.kt)("h2",{id:"npm-run-build-fails-on-heroku"},(0,a.kt)("inlineCode",{parentName:"h2"},"npm run build")," fails on Heroku"),(0,a.kt)("p",null,"This may be a problem with case sensitive filenames.\nPlease refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/deployment#resolving-heroku-deployment-errors"},"this section"),"."),(0,a.kt)("h2",{id:"momentjs-locales-are-missing"},"Moment.js locales are missing"),(0,a.kt)("p",null,"If you use a ",(0,a.kt)("a",{parentName:"p",href:"https://momentjs.com/"},"Moment.js"),", you might notice that only the English locale is available by default. This is because the locale files are large, and you probably only need a subset of ",(0,a.kt)("a",{parentName:"p",href:"https://momentjs.com/#multiple-locale-support"},"all the locales provided by Moment.js"),"."),(0,a.kt)("p",null,"To add a specific Moment.js locale to your bundle, you need to import it explicitly."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import moment from 'moment';\nimport 'moment/locale/fr';\n")),(0,a.kt)("p",null,"If you are importing multiple locales this way, you can later switch between them by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"moment.locale()")," with the locale name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import moment from 'moment';\nimport 'moment/locale/fr';\nimport 'moment/locale/es';\n\n// ...\n\nmoment.locale('fr');\n")),(0,a.kt)("p",null,"This will only work for locales that have been explicitly imported before."),(0,a.kt)("h2",{id:"npm-run-build-fails-to-minify"},(0,a.kt)("inlineCode",{parentName:"h2"},"npm run build")," fails to minify"),(0,a.kt)("p",null,"Before ",(0,a.kt)("inlineCode",{parentName:"p"},"react-scripts@2.0.0"),", this problem was caused by third party ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," using modern JavaScript features because the minifier couldn't handle them during the build. This has been solved by compiling standard modern JavaScript features inside ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher."),(0,a.kt)("p",null,"If you're seeing this error, you're likely using an old version of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-scripts"),". You can either fix it by avoiding a dependency that uses modern syntax, or by upgrading to ",(0,a.kt)("inlineCode",{parentName:"p"},"react-scripts@>=2.0.0")," and following the migration instructions in the changelog."))}m.isMDXComponent=!0},7320:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,s=o(e),u=1;u<arguments.length;u++){for(var c in i=Object(arguments[u]))n.call(i,c)&&(s[c]=i[c]);if(t){l=t(i);for(var p=0;p<l.length;p++)r.call(i,l[p])&&(s[l[p]]=i[l[p]])}}return s}},3426:function(e,t,n){var r=n(7320),o=60103,a=60106;var i=60109,l=60110,s=60112;var u=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),l=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),c=p("react.lazy")}var m="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function y(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||h}function b(){}function k(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var g=k.prototype=new b;g.constructor=k,r(g,y.prototype),g.isPureReactComponent=!0;var w={current:null},v=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,r)&&!N.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:w.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===r?"."+x(s,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),_(i,t,n,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=r+x(l=e[u],u);s+=_(l,t,n,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=_(l=l.value,t,n,c=r+x(l,u++),i);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function S(e,t,n){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function P(){var e=I.current;if(null===e)throw Error(d(321));return e}},2784:function(e,t,n){n(3426)}}]);