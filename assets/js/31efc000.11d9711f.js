(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[875],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return s}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(t),s=a,g=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6270:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var r=t(2122),a=t(9756),l=(t(7294),t(3905)),i={},o={unversionedId:"shader",id:"shader",isDocsHomePage:!1,title:"\u7740\u8272\u5668 / GLSL",description:"WebGL \u7a0b\u5e8f\u6267\u884c\u4e3b\u8981\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff0cCPU \u9636\u6bb5\u548c GPU \u9636\u6bb5\uff0c\u5728 CPU \u4e2d\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 JS \u6765\u7f16\u5199\u4ee3\u7801\uff0c\u4f46\u662f\u5982\u679c\u8981\u63a7\u5236 GPU \u7684\u6e32\u67d3\u903b\u8f91\u5c31\u9700\u8981\u4f7f\u7528\u7740\u8272\u5668\u3002",source:"@site/docs/5-shader.md",sourceDirName:".",slug:"/shader",permalink:"/learn-webgl/docs/shader",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/5-shader.md",version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6d45\u5c1d",permalink:"/learn-webgl/docs/taste"},next:{title:"\u53d8\u6362",permalink:"/learn-webgl/docs/transform"}},p=[{value:"\u9876\u70b9\u7740\u8272\u5668",id:"\u9876\u70b9\u7740\u8272\u5668",children:[{value:"attribute \u5b58\u50a8\u9650\u5b9a\u5b57",id:"attribute-\u5b58\u50a8\u9650\u5b9a\u5b57",children:[]}]},{value:"\u7247\u6bb5\u7740\u8272\u5668",id:"\u7247\u6bb5\u7740\u8272\u5668",children:[{value:"uniform \u5b58\u50a8\u9650\u5b9a\u5b57",id:"uniform-\u5b58\u50a8\u9650\u5b9a\u5b57",children:[]}]},{value:"GLSL",id:"glsl",children:[{value:"\u77e2\u91cf\u548c\u77e9\u9635",id:"\u77e2\u91cf\u548c\u77e9\u9635",children:[]},{value:"\u5206\u652f\u548c\u5faa\u73af",id:"\u5206\u652f\u548c\u5faa\u73af",children:[]},{value:"\u51fd\u6570",id:"\u51fd\u6570",children:[]},{value:"\u7cbe\u5ea6\u9650\u5b9a\u5b57",id:"\u7cbe\u5ea6\u9650\u5b9a\u5b57",children:[]}]},{value:"\u7acb\u65b9\u4f53",id:"\u7acb\u65b9\u4f53",children:[{value:"varying \u5b58\u50a8\u9650\u5b9a\u5b57",id:"varying-\u5b58\u50a8\u9650\u5b9a\u5b57",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],c={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"WebGL \u7a0b\u5e8f\u6267\u884c\u4e3b\u8981\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff0cCPU \u9636\u6bb5\u548c GPU \u9636\u6bb5\uff0c\u5728 CPU \u4e2d\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 JS \u6765\u7f16\u5199\u4ee3\u7801\uff0c\u4f46\u662f\u5982\u679c\u8981\u63a7\u5236 GPU \u7684\u6e32\u67d3\u903b\u8f91\u5c31\u9700\u8981\u4f7f\u7528\u7740\u8272\u5668\u3002"),(0,l.kt)("p",null,"GPU \u4e2d\u7684\u5904\u7406\u8fc7\u7a0b\u5927\u81f4\u5982\u4e0b\u56fe\uff0c\u5176\u4e2d\u84dd\u8272\u90e8\u5206\u662f\u6211\u4eec\u53ef\u4ee5\u63a7\u5236\u7684\uff08\u5ffd\u7565\u51e0\u4f55\u7740\u8272\u5668\uff0cWebGL\u4e2d\u6ca1\u6709\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://learnopengl-cn.github.io/01%20Getting%20started/04%20Hello%20Triangle/"},(0,l.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/25923128/121031222-be0a2300-c7dc-11eb-8fab-9c6a35687745.png",alt:"image"}))),(0,l.kt)("p",null,"\u4e4b\u524d\u6709\u4ecb\u7ecd\u8fc7\uff0cWebGL \u53ea\u80fd\u6e32\u67d3\u70b9\u3001\u7ebf\u548c\u4e09\u89d2\u5f62\uff0c\u90a3\u4e9b\u590d\u6742\u7684 3D \u6a21\u578b\u90fd\u662f\u4e00\u4e2a\u4e2a\u4e09\u89d2\u5f62\u7ec4\u6210\u7684\u3002\u4e00\u4e2a\u4e09\u89d2\u5f62\u662f\u7531 3 \u4e2a\u9876\u70b9\u7ec4\u6210\uff0c\u5982\u679c\u6211\u4eec\u60f3\u6e32\u67d3\u4e24\u4e2a\u4e09\u89d2\u5f62\uff0c\u5c31\u63d0\u4f9b 6 \u4e2a\u9876\u70b9\uff0cWebGL \u6bcf\u5904\u7406\u5b8c 3 \u4e2a\u9876\u70b9\u540e\u4f1a\u5c06\u8fd9\u4e09\u4e2a\u9876\u70b9\u8fde\u63a5\u6210\u4e00\u4e2a\u4e09\u89d2\u5f62\u3002"),(0,l.kt)("h2",{id:"\u9876\u70b9\u7740\u8272\u5668"},"\u9876\u70b9\u7740\u8272\u5668"),(0,l.kt)("p",null,"\u9876\u70b9\u7740\u8272\u5668\u7528\u6765\u5904\u7406\u6bcf\u4e2a\u9876\u70b9\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u9876\u70b9\u7740\u8272\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"attribute vec4 a_position;\n\nvoid main() {\n  gl_Position = a_position;\n}\n")),(0,l.kt)("p",null,"WebGL \u4f1a\u9ed8\u8ba4\u6267\u884c\u7740\u8272\u5668\u4e2d\u7684 main \u51fd\u6570\uff0c\u9876\u70b9\u7740\u8272\u5668\u4e2d\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"attribute")," \u5b58\u50a8\u9650\u5b9a\u5b57\u83b7\u53d6\u5916\u90e8\u4f20\u5165\u7684\u9876\u70b9\u4fe1\u606f\u3002\u7136\u540e\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"gl_Position")," \uff08\u5185\u7f6e\u53d8\u91cf\uff09\u8f93\u5165\u5904\u7406\u8fc7\u7684\u9876\u70b9\u4f4d\u7f6e\uff08\u6bd4\u5982\u5728\u9876\u70b9\u7740\u8272\u5668\u4e2d\u5c06\u9876\u70b9\u5de6\u79fb 10px\uff09\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u4f2a\u4ee3\u7801\u8868\u793a\u9876\u70b9\u7740\u8272\u5668\u662f\u5982\u4f55\u88ab\u6267\u884c\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const points = [\n  0, 0.5,\n  0.5, 0,\n  -0.5, -0.5\n]\n// \u4e09\u89d2\u5f62\u7684\u4e09\u4e2a\u9876\u70b9\uff0c\u5728 CPU \u4e2d\u63d0\u4f9b\u7684\u6570\u636e\n\nconst vertex = points.map(p => vertexShader(p))\n// \u83b7\u5f97\u6700\u7ec8\u7684\u9876\u70b9\u4f4d\u7f6e\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-how-it-works.html"},(0,l.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/25923128/121054661-282bc380-c7ef-11eb-95d4-4064dfa677dd.gif",alt:"vertex-shader-anim"}))),(0,l.kt)("p",null,"\u5982\u4e0a\u56fe\u4e2d\uff0c\u6211\u4eec\u4ece\u5916\u90e8\u8f93\u5165\u9876\u70b9\u5750\u6807\uff0c\u7136\u540e\u5728\u9876\u70b9\u7740\u8272\u5668\u4e2d\u5bf9\u5b83\u8fdb\u884c\u77e9\u9635\u8fd0\u7b97\uff0c\u7136\u540e\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"gl_Position")," \u53d8\u91cf\u8f93\u51fa\u65b0\u7684\u5750\u6807\u3002\uff08\u77e9\u9635\u53d8\u6362\u8bf7\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"/learn-webgl/docs/transform"},"\u4e0b\u7bc7\u6587\u7ae0"),"\uff09"),(0,l.kt)("h3",{id:"attribute-\u5b58\u50a8\u9650\u5b9a\u5b57"},"attribute \u5b58\u50a8\u9650\u5b9a\u5b57"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"attribute")," \u53ea\u80fd\u7528\u5728\u9876\u70b9\u7740\u8272\u5668\uff0c\u88ab\u7528\u6765\u8868\u793a\u9010\u9876\u70b9\u4fe1\u606f\uff0c\u6bd4\u5982\u9876\u70b9\u4f4d\u7f6e\u3001\u9876\u70b9\u989c\u8272\u7b49\u4fe1\u606f\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5b83\u6765\u83b7\u53d6\u5916\u90e8\u4f20\u9012\u8fc7\u6765\u7684\u4fe1\u606f\u3002\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e09\u4e2a\u9876\u70b9\u4f20\u9012\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"a_position")," \u53d8\u91cf\uff0c\u9876\u70b9\u7740\u8272\u5668\u4e0d\u662f\u4e00\u6b21\u6027\u83b7\u53d6\u5230\u8fd9\u4e9b\u9876\u70b9\uff0c\u800c\u662f\u4e00\u4e2a\u4e2a\u7684\u83b7\u53d6\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/learn-webgl/docs/taste"},"\u4e0a\u7bc7\u6587\u7ae0"),"\u4e2d\u6211\u4eec\u662f\u8fd9\u6837\u5411\u9876\u70b9\u7740\u8272\u5668\u4f20\u9012\u6570\u636e\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const positionLocation = gl.getAttribLocation(program, 'a_position')\nconst positionBuffer = gl.createBuffer()\ngl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)\ngl.bufferData(gl.ARRAY_BUFFER, new Float32Array([\n    0, 0.5,\n    0.5, 0,\n    -0.5, -0.5\n]), gl.STATIC_DRAW)\ngl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)\n")),(0,l.kt)("p",null,"\u6211\u4eec\u9996\u5148\u83b7\u53d6\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"a_position")," \u7684\u4f4d\u7f6e\u3002\u7531\u4e8e\u6211\u4eec\u9700\u8981\u4f20\u9012\u4e00\u5806\u7684\u9876\u70b9\uff0c\u6240\u4ee5\u8fd9\u91cc\u521b\u5efa\u4e00\u4e2a Buffer \u6765\u5b58\u653e\u8fd9\u4e9b\u9876\u70b9\u3002\u6211\u4eec\u8fd8\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"vertexAttribPointer")," \u544a\u8bc9 WebGL \u5982\u4f55\u83b7\u53d6 Buffer \u4e2d\u7684\u6570\u636e\u3002"),(0,l.kt)("h2",{id:"\u7247\u6bb5\u7740\u8272\u5668"},"\u7247\u6bb5\u7740\u8272\u5668"),(0,l.kt)("p",null,"\u5728\u9876\u70b9\u7740\u8272\u5668\u5904\u7406\u5b8c\u9876\u70b9\u540e\uff0cWebGL \u8fd8\u4f1a\u628a\u8fd9\u4e9b\u4e09\u89d2\u5f62\u8fdb\u884c\u63d2\u503c\uff0c\u5c06\u4e09\u89d2\u5f62\u53d8\u6210\u4e00\u4e2a\u4e2a\u50cf\u7d20\uff0c\u7136\u540e\u5bf9\u6bcf\u4e2a\u50cf\u7d20\u6267\u884c\u4e00\u6b21\u7247\u6bb5\u7740\u8272\u5668\uff0c\u7247\u6bb5\u7740\u8272\u5668\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"gl_FragColor")," \u5185\u7f6e\u53d8\u91cf\u8f93\u51fa\u8fd9\u4e2a\u50cf\u7d20\u7684\u989c\u8272\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/learn-webgl/docs/taste"},"\u4e0a\u7bc7\u6587\u7ae0"),"\u4e2d\u7684\u7247\u6bb5\u7740\u8272\u5668\u4ee3\u7801\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"precision mediump float;\nuniform vec4 u_color;\n\nvoid main() {\n  gl_FragColor = u_color;\n}\n")),(0,l.kt)("h3",{id:"uniform-\u5b58\u50a8\u9650\u5b9a\u5b57"},"uniform \u5b58\u50a8\u9650\u5b9a\u5b57"),(0,l.kt)("p",null,"\u6211\u4eec\u5148\u5ffd\u7565\u6bd4\u9876\u70b9\u7740\u8272\u5668\u591a\u51fa\u7684\u4e00\u884c\u4ee3\u7801 ",(0,l.kt)("inlineCode",{parentName:"p"},"precision mediump float;"),"\u3002\u6211\u4eec\u5728\u7247\u6bb5\u7740\u8272\u5668\u4e2d\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"uniform")," \u5b58\u50a8\u9650\u5b9a\u5b57\u83b7\u53d6\u4e86\u5916\u90e8\u4f20\u9012\u7684\u6570\u636e\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"uniform")," \u5b58\u50a8\u9650\u5b9a\u5b57\uff0c\u53ef\u4ee5\u7528\u5728\u7247\u6bb5\u7740\u8272\u5668\u4e5f\u53ef\u4ee5\u7528\u5728\u9876\u70b9\u7740\u8272\u5668\uff0c\u5b83\u662f\u5168\u5c40\u7684\uff0c\u5728\u7740\u8272\u5668\u7a0b\u5e8f\u4e2d\u662f\u72ec\u4e00\u65e0\u4e8c\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/learn-webgl/docs/taste"},"\u4e0a\u7bc7\u6587\u7ae0"),"\u6211\u4eec\u662f\u8fd9\u6837\u4f20\u9012\u6570\u636e\u5230\u7247\u6bb5\u7740\u8272\u5668\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const colorLocation = gl.getUniformLocation(program, 'u_color')\ngl.uniform4f(colorLocation, 0.93, 0, 0.56, 1)\n")),(0,l.kt)("p",null,"\u7531\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"uniform")," \u662f\u5168\u5c40\u552f\u4e00\u7684\uff0c\u76f8\u5f53\u4e8e\u5e38\u91cf\uff0c\u6240\u4ee5\u4e0d\u9700\u8981 Buffer\uff0c\u76f4\u63a5\u8bbe\u7f6e\u5b83\u7684\u503c\u5c31\u884c\u4e86\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"uniform4f")," \u65b9\u6cd5\u540e\u7f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"4f")," \u8868\u793a 4 \u4e2a\u6d6e\u70b9\u6570\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u7528\u6765\u8868\u793a\u4e00\u4e2a\u989c\u8272\u503c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"rgba"),"\u3002"),(0,l.kt)("h2",{id:"glsl"},"GLSL"),(0,l.kt)("p",null,"OpenGL \u7684\u7740\u8272\u5668\u4f7f\u7528 GLSL(OpenGL Shading Language) \u8bed\u8a00\u8fdb\u884c\u7f16\u5199\uff0c\u5b83\u6709\u70b9\u50cf C \u8bed\u8a00\u3002\u5728 OpenGL ES \u548c WebGL \u4e2d\u4f7f\u7528\u7684\u662f GLSL ES\u3002WebGL1 \u4e2d\u4f7f\u7528\u7684 GLSL 1.00 \u7248\u672c\u3002\u4e0b\u9762\u7b80\u5355\u4ecb\u7ecd GLSL \u7684\u8bed\u6cd5\uff0c\u66f4\u8be6\u7ec6\u6587\u6863\u8bf7\u70b9\u51fb\u4e0b\u65b9\u94fe\u63a5\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.khronos.org/registry/OpenGL/specs/es/2.0/GLSL_ES_Specification_1.00.pdf"},"https://www.khronos.org/registry/OpenGL/specs/es/2.0/GLSL_ES_Specification_1.00.pdf")),(0,l.kt)("p",null,"\u5b83\u662f\u5f3a\u7c7b\u578b\u8bed\u8a00\uff0c\u6bcf\u4e00\u53e5\u90fd\u5fc5\u987b\u6709\u5206\u53f7\u3002\u5b83\u548c JS \u8bed\u6cd5\u4e5f\u633a\u50cf\u3002"),(0,l.kt)("p",null,"\u6ce8\u91ca\u8bed\u6cd5\u548c JS \u4e00\u6837\uff0c\u53d8\u91cf\u540d\u89c4\u5219\u4e5f\u548c JS \u4e00\u6837\uff0c\u4e0d\u80fd\u4f7f\u7528\u5173\u952e\u5b57\uff0c\u4fdd\u7559\u5b57\uff0c\u4e0d\u80fd\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"gl_"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"webgl_")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"_webgl_")," \u5f00\u5934\u3002\u8fd0\u7b97\u7b26\u57fa\u672c\u4e5f\u548c JS \u4e00\u6837\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"++")," ",(0,l.kt)("inlineCode",{parentName:"p"},"--")," ",(0,l.kt)("inlineCode",{parentName:"p"},"+=")," ",(0,l.kt)("inlineCode",{parentName:"p"},"&&")," ",(0,l.kt)("inlineCode",{parentName:"p"},"||")," \u8fd8\u6709\u4e09\u5143\u8fd0\u7b97\u7b26\u90fd\u652f\u6301\u3002"),(0,l.kt)("p",null,"GLSL \u4e2d\u4e3b\u8981\u6709\u4e09\u79cd\u6570\u636e\u503c\u7c7b\u578b\uff0c\u6d6e\u70b9\u6570\u3001\u6574\u6570\u548c\u5e03\u5c14\u3002\u6ce8\u610f\u6d6e\u70b9\u6570\u5fc5\u987b\u8981\u5e26\u5c0f\u6570\u70b9\u3002\u7c7b\u578b\u8f6c\u6362\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"float"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"int")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")," \u51fd\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"float f = float(1);\n")),(0,l.kt)("h3",{id:"\u77e2\u91cf\u548c\u77e9\u9635"},"\u77e2\u91cf\u548c\u77e9\u9635"),(0,l.kt)("h3",{id:"\u5206\u652f\u548c\u5faa\u73af"},"\u5206\u652f\u548c\u5faa\u73af"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"if (true) {} else if (true) {} else {}\nfor (int i = 0; i < 3; i++) {\n    continue; // \u6216 break\n}\n")),(0,l.kt)("h3",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,l.kt)("h3",{id:"\u7cbe\u5ea6\u9650\u5b9a\u5b57"},"\u7cbe\u5ea6\u9650\u5b9a\u5b57"),(0,l.kt)("p",null,"\u7cbe\u5ea6\u9650\u5b9a\u5b57\u7528\u6765\u63a7\u5236\u6570\u503c\u7684\u7cbe\u5ea6\uff0c\u8d8a\u9ad8\u7684\u7cbe\u5ea6\u4e5f\u5c31\u610f\u5473\u7740\u66f4\u6162\u7684\u6027\u80fd\uff0c\u6240\u4ee5\u6211\u4eec\u8981\u5408\u7406\u7684\u63a7\u5236\u7a0b\u5e8f\u7684\u7cbe\u5ea6\u3002GLSL \u4e2d\u6709\u4e09\u79cd\u7cbe\u5ea6 ",(0,l.kt)("inlineCode",{parentName:"p"},"highp"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"mediump")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"lowp"),"\uff0c\u5206\u522b\u662f\u9ad8\u3001\u4e2d\u548c\u4f4e\u7cbe\u5ea6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"mediump float size; // \u58f0\u660e\u4e00\u4e2a\u4e2d\u7cbe\u5ea6\u6d6e\u70b9\u6570\nhighp int len; // \u58f0\u660e\u4e00\u4e2a\u9ad8\u7cbe\u5ea6\u6574\u6570\nlowp vec4 v; // \u4f4e\u7cbe\u5ea6\u77e2\u91cf\n")),(0,l.kt)("p",null,"\u8fd9\u6837\u4e00\u4e2a\u4e00\u4e2a\u7684\u53d8\u91cf\u58f0\u660e\uff0c\u975e\u5e38\u9ebb\u70e6\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4e00\u6b21\u6027\u58f0\u660e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"precision mediump float; // \u6d6e\u70b9\u6570\u5168\u90e8\u4f7f\u7528\u4e2d\u7cbe\u5ea6\n")),(0,l.kt)("p",null,"GLSL \u5e2e\u6211\u4eec\u8bbe\u7f6e\u4e86\u4e00\u4e9b\u9ed8\u8ba4\u53d8\u91cf\u7cbe\u5ea6\u3002\u9876\u70b9\u7740\u8272\u5668\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"int")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"float")," \u90fd\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"highp"),"\u3002"),(0,l.kt)("p",null,"\u7247\u5143\u7740\u8272\u5668\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"int")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"mediump"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"float")," \u6ca1\u6709\u5b9a\u4e49\u3002\u8fd9\u4e5f\u5c31\u662f\u4e3a\u4ec0\u4e48\u4e0a\u9762\u7247\u5143\u7740\u8272\u5668\u4e2d\u7b2c\u4e00\u884c\u4ee3\u7801\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"precision mediump float;")," \u4e86\uff0c\u56e0\u4e3a OpenGL \u6ca1\u6709\u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0c\u6240\u4ee5\u5fc5\u987b\u5f97\u6211\u4eec\u81ea\u5df1\u8bbe\u7f6e\u3002"),(0,l.kt)("p",null,"\u53e6\u5916 ",(0,l.kt)("inlineCode",{parentName:"p"},"sampler2D")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"samplerCube")," \u90fd\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"lowp"),"\uff08\u5b83\u4eec\u4e3b\u8981\u7528\u6765\u6e32\u67d3\u56fe\u7247\uff0c\u540e\u9762\u4f1a\u8be6\u7ec6\u8bb2\u89e3\uff09\u3002"),(0,l.kt)("h2",{id:"\u7acb\u65b9\u4f53"},"\u7acb\u65b9\u4f53"),(0,l.kt)("p",null,"\u5b66\u4e60\u4e86\u7740\u8272\u5668\u76f8\u5173\u77e5\u8bc6\uff0c\u73b0\u5728\u518d\u6765\u6e32\u67d3\u4e00\u4e2a 3D \u7acb\u65b9\u4f53\u5427\u3002"),(0,l.kt)("p",null,"\u7acb\u65b9\u4f53\u4e00\u5171\u6709 6 \u4e2a\u9762\uff0c\u4e00\u4e2a\u9762\u53ef\u4ee5\u7528\u4e24\u4e2a\u4e09\u89d2\u5f62\u7ec4\u6210\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2a\u7acb\u65b9\u4f53\u9700\u8981 12 \u4e2a\u4e09\u89d2\u5f62\uff0c36 \u4e2a\u9876\u70b9\uff01"),(0,l.kt)("p",null,"\u7136\u800c\u5b9e\u9645\u4e0a\u7acb\u65b9\u4f53\u5176\u5b9e\u53ea\u9700\u8981 8 \u4e2a\u9876\u70b9\u5c31\u884c\u4e86\uff0c\u56e0\u4e3a\u4e00\u4e2a\u9876\u70b9\u53ef\u4ee5\u88ab\u591a\u4e2a\u9762\u590d\u7528\u3002\u5728 WebGL \u4e2d\u5176\u5b9e\u4e5f\u53ef\u4ee5\u590d\u7528\u9876\u70b9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const gl = createGl()\n\nconst program = createProgramFromSource(gl, `\nattribute vec4 aPos;\nattribute vec4 aColor;\nvarying vec4 vColor;\n\nvoid main() {\n  gl_Position = aPos;\n  vColor = aColor;\n}\n`, `\nprecision mediump float;\nvarying vec4 vColor;\n\nvoid main() {\n  gl_FragColor = vColor;\n}\n`)\n\nconst points = new Float32Array([\n  -0.5,0.5,-0.5, 0.5,0.5,-0.5, 0.5,-0.5,-0.5, -0.5,-0.5,-0.5,\n  0.5,0.5,0.5, -0.5,0.5,0.5, -0.5,-0.5,0.5, 0.5,-0.5,0.5\n  // \u7acb\u65b9\u4f53\u7684 8 \u4e2a\u9876\u70b9\n])\nconst colors = new Float32Array([\n  1,0,0, 0,1,0, 0,0,1, 1,0,1,\n  0,0,0, 0,0,0, 0,0,0, 0,0,0\n  // \u6bcf\u4e2a\u9876\u70b9\u7684\u989c\u8272\n])\nconst indices = new Uint8Array([ // \u9762\u7684\u7d22\u5f15\uff0c\u503c\u662f points \u7684\u4e0b\u6807\n  0, 1, 2, 0, 2, 3, // \u524d\n  1, 4, 2, 4, 7, 2, // \u53f3\n  4, 5, 6, 4, 6, 7, // \u540e\n  5, 3, 6, 5, 0, 3, // \u5de6\n  0, 5, 4, 0, 4, 1, // \u4e0a\n  7, 6, 3, 7, 3, 2  // \u4e0b\n])\n\nconst [posLoc, posBuffer] = createAttrBuffer(gl, program, 'aPos', points)\nconst [colorLoc, colorBuffer] = createAttrBuffer(gl, program, 'aColor', colors)\nconst indexBuffer = gl.createBuffer()\ngl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)\ngl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW)\n\ngl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)\ngl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0)\ngl.enableVertexAttribArray(posLoc)\n\ngl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)\ngl.vertexAttribPointer(colorLoc, 3, gl.FLOAT, false, 0, 0)\ngl.enableVertexAttribArray(colorLoc)\n\ngl.enable(gl.DEPTH_TEST)\ngl.clearColor(0, 0, 0, 0)\ngl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)\n\ngl.drawElements(\n  gl.TRIANGLES, // \u8981\u6e32\u67d3\u7684\u56fe\u5143\u7c7b\u578b\n  indices.length, // \u8981\u6e32\u67d3\u7684\u5143\u7d20\u6570\u91cf\n  gl.UNSIGNED_BYTE, // \u5143\u7d20\u6570\u7ec4\u7f13\u51b2\u533a\u4e2d\u7684\u503c\u7684\u7c7b\u578b\n  0 // \u5143\u7d20\u6570\u7ec4\u7f13\u51b2\u533a\u4e2d\u7684\u504f\u79fb\u91cf, \u5b57\u8282\u5355\u4f4d\n)\n\nfunction createShader(gl, type, source) {\n  const shader = gl.createShader(type)\n  gl.shaderSource(shader, source)\n  gl.compileShader(shader)\n  return shader;\n}\n\nfunction createProgramFromSource(gl, vertex, fragment) {\n  const vertexShader = createShader(gl, gl.VERTEX_SHADER,vertex)\n  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragment)\n  const program = gl.createProgram()\n  gl.attachShader(program, vertexShader)\n  gl.attachShader(program, fragmentShader)\n  gl.linkProgram(program)\n  gl.useProgram(program)\n  return program\n}\n\nfunction createAttrBuffer(gl, program, attr, data) {\n  const location = gl.getAttribLocation(program, attr)\n  const buffer = gl.createBuffer();\n  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)\n  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)\n  return [location, buffer]\n}\n")),(0,l.kt)("p",null,"\u8981\u5b9e\u73b0\u590d\u7528\u9876\u70b9\uff0c\u9700\u8981\u4f7f\u7528\u9876\u70b9\u7d22\u5f15\uff0c\u8fd9\u6837 WebGL \u5c31\u53ef\u4ee5\u901a\u8fc7\u7d22\u5f15\u627e\u5230\u5bf9\u5e94\u9876\u70b9\uff0c\u56e0\u4e3a\u7d22\u5f15\u4e0b\u6807\u90fd\u662f\u6574\u6570\u4e14\u6700\u5927\u4e3a 7 \uff08\u56e0\u4e3a\u53ea\u6709 8 \u4e2a\u9876\u70b9\uff09\uff0c\u6240\u4ee5\u8fd9\u91cc\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u521b\u5efa Buffer \u6765\u5b58\u653e\u8fd9\u4e9b\u7d22\u5f15\uff0c\u548c\u5176\u4ed6 ",(0,l.kt)("inlineCode",{parentName:"p"},"attribute")," \u6570\u636e\u4e0d\u540c\uff0c\u7d22\u5f15\u6570\u636e\u7684\u7ed1\u5b9a\u76ee\u6807\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"ELEMENT_ARRAY_BUFFER"),"\u3002"),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u6ca1\u6709\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"drawArrays"),"\uff0c\u800c\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"drawElements"),"\u3002 \u5b83\u4eec\u7684\u4e3b\u8981\u533a\u522b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"drawArrays")," \u662f\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"ARRAY_BUFFER")," \u6765\u6e32\u67d3\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"drawElements")," \u662f\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"ELEMENT_ARRAY_BUFFER")," \u6765\u6e32\u67d3\uff08\u6839\u636e\u7d22\u5f15\u6765\u6e32\u67d3\uff09\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u6e32\u67d3\u7684\u662f\u4e09\u7ef4\u7269\u4f53\uff0c\u9700\u8981\u533a\u5206\u54ea\u4e2a\u9876\u70b9\u5728\u524d\u54ea\u4e2a\u9876\u70b9\u5728\u540e\u3002\u4e0a\u9762\u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"gl.enable(gl.DEPTH_TEST)")," \u542f\u7528\u4e86\u6df1\u5ea6\u6d4b\u8bd5\uff0c\u5e76\u4e14\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)")," \u540c\u65f6\u91cd\u7f6e\u989c\u8272\u7f13\u5b58\u548c\u6df1\u5ea6\u7f13\u5b58\u3002\u6df1\u5ea6\u7f13\u5b58\u6620\u5c04\u53ef\u4ee5\u56de\u987e",(0,l.kt)("a",{parentName:"p",href:"/learn-webgl/docs/coordinate"},"\u5750\u6807\u7cfb"),"\u3002"),(0,l.kt)("h3",{id:"varying-\u5b58\u50a8\u9650\u5b9a\u5b57"},"varying \u5b58\u50a8\u9650\u5b9a\u5b57"),(0,l.kt)("p",null,"\u5b58\u50a8\u9650\u5b9a\u5b57\u5176\u5b9e\u4e00\u5171\u6709\u4e09\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"attribute"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"uniform")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"varying"),"\u3002\u4e0a\u9762\u5df2\u7ecf\u4ecb\u7ecd\u4e86\u524d\u4e24\u4e2a\uff0c\u5b83\u4eec\u90fd\u662f\u4ece\u5916\u90e8 JS \u83b7\u53d6\u6570\u636e\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"varying")," \u6709\u70b9\u7279\u6b8a\uff0c\u5b83\u7528\u4e8e\u4ece\u9876\u70b9\u7740\u8272\u5668\u5411\u7247\u5143\u7740\u8272\u5668\u4f20\u9001\u6570\u636e\u3002\u4e0a\u9762\u4f8b\u5b50\u4e2d\u6211\u4eec\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"aColor")," \u8d4b\u503c\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"vColor"),"\uff0c\u7136\u540e\u5728\u7247\u5143\u7740\u8272\u5668\u4e2d\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"vColor")," \u4e86\u3002\n\u53eb ",(0,l.kt)("inlineCode",{parentName:"p"},"varying")," \u4e5f\u662f\u6709\u539f\u56e0\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u5148\u6765\u770b\u770b\u4e0a\u9762\u4ee3\u7801\u6700\u7ec8\u6e32\u67d3\u6210\u4ec0\u4e48\u6837\u5b50\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25923128/121994270-8ea87700-cdd7-11eb-922d-6c2c7e41f837.png",alt:"image"})),(0,l.kt)("p",null,"\u9876\u70b9\u7740\u8272\u5668\u662f\u9010\u9876\u70b9\u7684\uff0c\u7247\u6bb5\u7740\u8272\u5668\u662f\u9010\u50cf\u7d20\u7684\uff0c\u663e\u7136\u50cf\u7d20\u4f1a\u6bd4\u9876\u70b9\u591a\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"varying")," \u53d8\u91cf\u4ece\u9876\u70b9\u7740\u8272\u5668\u5411\u7247\u5143\u7740\u8272\u5668\u4f20\u9012\u65f6\u4f1a\u88ab OpenGL \u63d2\u503c\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u5b9a\u4e49\u4e86\u4e09\u89d2\u5f62 3 \u4e2a\u9876\u70b9\u7684\u989c\u8272\uff0c\u4e09\u89d2\u5f62\u5185\u90e8\u7684\u50cf\u7d20\u90fd\u662f\u6839\u636e\u8fd9 3 \u4e2a\u9876\u70b9\u989c\u8272\u63d2\u503c\u51fa\u6765\u7684\u3002\u6bd4\u5982\u4e00\u4e2a\u7ebf\u6bb5\u4e00\u4e2a\u7aef\u70b9\u662f\u7ea2\u8272\uff0c\u53e6\u4e00\u4e2a\u662f\u7eff\u8272\uff0c\u90a3\u4e48\u8fd9\u4e2a\u7ebf\u6bb5\u4e2d\u95f4\u5c31\u662f 50% \u7684\u7ea2\u8272\u548c 50% \u7684\u7eff\u8272\u3002"),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u8bb2\u89e3\u4e86\u7740\u8272\u5668\u76f8\u5173\u77e5\u8bc6\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 GLSL \u7f16\u5199\u9876\u70b9\u7740\u8272\u5668\u548c\u7247\u6bb5\u7740\u8272\u5668\u6765\u63a7\u5236\u7269\u4f53\u5404\u4e2a\u9876\u70b9\u548c\u4f4d\u7f6e\u548c\u6bcf\u4e2a\u50cf\u7d20\u7684\u989c\u8272\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u9876\u70b9\u7740\u8272\u5668\u548c\u7247\u6bb5\u7740\u8272\u5668\u662f\u5728 GPU \u4e2d\u6267\u884c\uff0c\u6211\u4eec\u9700\u8981\u7ed9\u4ed6\u4eec\u4f20\u9012\u6570\u636e\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"attribute")," \u53ea\u80fd\u5728\u9876\u70b9\u7740\u8272\u5668\u4e2d\u4f7f\u7528\uff0c\u53ef\u4ee5\u7528\u5b83\u6765\u4f20\u9012\u9010\u9876\u70b9\u7684\u6570\u636e\uff0c\u6211\u4eec\u4f1a\u521b\u5efa\u4e00\u4e2a Buffer \u628a\u6570\u636e\u653e\u5165 Buffer \u4e2d\u53d1\u9001\u5230 GPU\uff0c\u4e3a\u4e86\u63d0\u5347\u6027\u80fd\uff0c\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Float32Array"),"\uff0c\u8fd9\u6837\u5728 GPU \u4e2d\u5c31\u65e0\u9700\u518d\u89e3\u7801\u6570\u636e\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"uniform")," \u7c7b\u4f3c\u5168\u5c40\u5e38\u91cf\uff0c\u5728\u9876\u70b9\u7740\u8272\u5668\u548c\u7247\u6bb5\u7740\u8272\u5668\u4e2d\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u4e00\u822c\u4f1a\u4f7f\u7528\u5b83\u4f20\u9012\u4e00\u4e9b\u77e9\u9635\uff0c\u540e\u9762\u6587\u7ae0\u4f1a\u6709\u8bb2\u89e3\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"varying")," \u662f\u7528\u4e8e\u4ece\u9876\u70b9\u7740\u8272\u5668\u5411\u7247\u5143\u7740\u8272\u5668\u4f20\u9001\u6570\u636e\uff0c\u6570\u636e\u5728\u4f20\u9012\u5230\u7247\u6bb5\u7740\u8272\u5668\u4e4b\u524d\u4f1a\u88ab\u63d2\u503c\u3002"),(0,l.kt)("p",null,"\u5728\u6587\u7ae0\u7684\u6700\u540e\u6211\u4eec\u6e32\u67d3\u4e86\u4e00\u4e2a\u7acb\u65b9\u4f53\uff0c\u4f46\u662f\u770b\u8d77\u6765\u5c31\u50cf\u4e00\u4e2a\u6b63\u65b9\u5f62\uff0c\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u5728\u6b63\u524d\u65b9\u770b\u8fd9\u4e2a\u7acb\u65b9\u4f53\uff0c\u4e3a\u4e86\u8ba9\u5b83\u770b\u8d77\u6765\u50cf\u4e00\u4e2a\u7acb\u65b9\u4f53\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u5b83\u8f6c\u52a8\u8d77\u6765\uff0c\u5982\u4f55\u8f6c\u52a8\u7acb\u65b9\u4f53\u5462\uff1f\u4e0b\u7bc7\u6587\u7ae0\u5c06\u4f1a\u8be6\u7ec6\u8bb2\u89e3\u3002"))}u.isMDXComponent=!0}}]);