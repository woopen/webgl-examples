(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[832],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||c;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8698:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),c=(n(7294),n(3905)),o={},i={unversionedId:"transform",id:"transform",isDocsHomePage:!1,title:"\u53d8\u6362",description:"`js",source:"@site/docs/6-transform.md",sourceDirName:".",slug:"/transform",permalink:"/learn-webgl/docs/transform",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/6-transform.md",version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7740\u8272\u5668",permalink:"/learn-webgl/docs/shader"},next:{title:"\u5750\u6807\u7a7a\u95f4",permalink:"/learn-webgl/docs/coordinate-space"}},s=[{value:"2D \u5e73\u79fb",id:"2d-\u5e73\u79fb",children:[]},{value:"2D \u7f29\u653e",id:"2d-\u7f29\u653e",children:[]},{value:"2D \u53cd\u5c04",id:"2d-\u53cd\u5c04",children:[]},{value:"2D \u9519\u5207",id:"2d-\u9519\u5207",children:[]},{value:"2D \u65cb\u8f6c",id:"2d-\u65cb\u8f6c",children:[]},{value:"3D \u53d8\u6362",id:"3d-\u53d8\u6362",children:[]},{value:"\u77e9\u9635",id:"\u77e9\u9635",children:[]},{value:"\u9f50\u6b21\u5750\u6807",id:"\u9f50\u6b21\u5750\u6807",children:[]}],l={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"const canvas = document.createElement('canvas')\ncanvas.width = canvas.height = 300;\ndocument.body.appendChild(canvas)\nconst ctx = canvas.getContext('2d')\n\nconst points = [[0,0],[0,100],[100,100],[100,0]] // \u6b63\u65b9\u5f62\u7684 4 \u4e2a\u9876\u70b9\nctx.beginPath()\npoints.forEach(p => ctx.lineTo(...transform(p))) \n// \"transform\" \u51fd\u6570\u4e3a\u4e0b\u65b9\u5c0f\u8282\u6307\u5b9a\u7684\u53d8\u6362\u51fd\u6570\n// \u4e0b\u9762\u7684 \"transform\" \u51fd\u6570\u8fd4\u56de\u65b0\u7684\u5750\u6807\u4f4d\u7f6e\nctx.closePath()\nctx.fillStyle='rgba(0,255,255,1)'\nctx.fill()\n")),(0,c.kt)("h2",{id:"2d-\u5e73\u79fb"},"2D \u5e73\u79fb"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"function translate([x, y], dx, dy) {\n  return [x + dx, y + dy]\n}\n")),(0,c.kt)("h2",{id:"2d-\u7f29\u653e"},"2D \u7f29\u653e"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"function scale([x, y], s = 1) {\n  return [x * s, y * s]\n}\n")),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25923128/121117746-3f989a00-c84b-11eb-86ee-e284c758bad6.png",alt:"image"})),(0,c.kt)("h2",{id:"2d-\u53cd\u5c04"},"2D \u53cd\u5c04"),(0,c.kt)("h2",{id:"2d-\u9519\u5207"},"2D \u9519\u5207"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"function skew([x, y]) {\n  return [x + 1 * y, y]\n}\n")),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25923128/121117699-255ebc00-c84b-11eb-86c0-63fee61d149d.png",alt:"image"})),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-css"},"div {\n  transform: skew(30deg);\n}\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"function skew([x, y], sx = 0, sy = 0) {\n  const rad = r => r * Math.PI / 180\n  return [x + Math.tan(rad(sx)) * y, y + Math.tan(rad(sy)) * x]\n}\n")),(0,c.kt)("h2",{id:"2d-\u65cb\u8f6c"},"2D \u65cb\u8f6c"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25923128/121117579-f34d5a00-c84a-11eb-9a89-10be9215ab55.png",alt:"image"})),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"function rotate([x, y], deg = 0) {\n  const rad = deg * Math.PI / 180\n  return [\n     x * Math.cos(rad) - y * Math.sin(rad), \n     x * Math.sin(rad) + y * Math.cos(rad)\n  ]\n}\n")),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25923128/121117617-019b7600-c84b-11eb-9677-04020c5ae3cd.png",alt:"image"})),(0,c.kt)("h2",{id:"3d-\u53d8\u6362"},"3D \u53d8\u6362"),(0,c.kt)("h2",{id:"\u77e9\u9635"},"\u77e9\u9635"),(0,c.kt)("h2",{id:"\u9f50\u6b21\u5750\u6807"},"\u9f50\u6b21\u5750\u6807"))}u.isMDXComponent=!0}}]);