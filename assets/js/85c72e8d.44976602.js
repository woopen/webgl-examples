(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[890],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=s(t),d=a,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9036:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),l={},i={unversionedId:"taste",id:"taste",isDocsHomePage:!1,title:"\u6d45\u5c1d",description:"\u5728\u5b9e\u73b0\u7f16\u5199\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u8981\u77e5\u9053 WebGL \u53ea\u662f\u4e00\u4e2a\u5149\u6805\u5316\u5f15\u64ce\uff0c\u5b83\u975e\u5e38\u5e95\u5c42\uff0c\u5b83\u53ea\u80fd\u7528\u5b83\u6765\u753b\u70b9\uff0c\u7ebf\u548c\u4e09\u89d2\u5f62\uff0c\u90a3\u4e9b\u590d\u6742\u7684 3D \u6a21\u578b\u90fd\u662f\u7531\u4e00\u4e2a\u4e2a\u4e09\u89d2\u5f62\u7ec4\u6210\u3002\u53ea\u8981\u613f\u610f\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 canvas 2d \u6765\u5b9e\u73b0 3D \u6548\u679c\u3002",source:"@site/docs/4-taste.md",sourceDirName:".",slug:"/taste",permalink:"/learn-webgl/docs/taste",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/4-taste.md",version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u77e2\u91cf\u548c\u77e9\u9635",permalink:"/learn-webgl/docs/vector-matrix"},next:{title:"\u7740\u8272\u5668",permalink:"/learn-webgl/docs/shader"}},c=[{value:"\u4e09\u89d2\u5f62",id:"\u4e09\u89d2\u5f62",children:[]},{value:"High DPI",id:"high-dpi",children:[]}],s={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u5b9e\u73b0\u7f16\u5199\u4ee3\u7801\u4e4b\u524d\uff0c\u9700\u8981\u77e5\u9053 WebGL \u53ea\u662f\u4e00\u4e2a\u5149\u6805\u5316\u5f15\u64ce\uff0c\u5b83\u975e\u5e38\u5e95\u5c42\uff0c\u5b83\u53ea\u80fd\u7528\u5b83\u6765\u753b\u70b9\uff0c\u7ebf\u548c\u4e09\u89d2\u5f62\uff0c\u90a3\u4e9b\u590d\u6742\u7684 3D \u6a21\u578b\u90fd\u662f\u7531\u4e00\u4e2a\u4e2a\u4e09\u89d2\u5f62\u7ec4\u6210\u3002\u53ea\u8981\u613f\u610f\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 canvas 2d \u6765\u5b9e\u73b0 3D \u6548\u679c\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://sketchfab.com/3d-models/the-argonaut-4982efe9a03e42e6a867c33afd863ca5"},(0,o.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/25923128/120994009-ad46b680-c7b6-11eb-82cf-9fed33463719.png",alt:"image"}))),(0,o.kt)("p",null,"\u6bd4\u5982\u4e0a\u65b9\u8fd9\u8f86\u6c7d\u8f66\u6a21\u578b\uff0c\u5b83\u5176\u5b9e\u662f\u7531 267300 \u4e2a\u4e09\u89d2\u5f62\u7ec4\u6210\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u70b9\u51fb\u8fd9\u4e2a\u94fe\u63a5\u67e5\u770b\u8fd9\u4e2a\u6a21\u578b\u8be6\u60c5 ",(0,o.kt)("a",{parentName:"p",href:"https://sketchfab.com/3d-models/the-argonaut-4982efe9a03e42e6a867c33afd863ca5"},"https://sketchfab.com/3d-models/the-argonaut-4982efe9a03e42e6a867c33afd863ca5")," \u3002"),(0,o.kt)("p",null,"\u53ef\u80fd\u6709\u540c\u5b66\u4f1a\u95ee\u4e86\uff0c\u4e3a\u4ec0\u4e48\u5c31\u662f\u4e09\u89d2\u5f62\uff0c\u800c\u4e0d\u662f 5 \u8fb9\u5f62\uff0c6 \u8fb9\u5f62\u5462\uff1f"),(0,o.kt)("p",null,"\u56e0\u4e3a\u4e09\u89d2\u5f62\u6709\u5f88\u591a\u7684\u4f18\u52bf\uff0c\u6bd4\u5982\u4e09\u89d2\u5f62\u4e00\u5b9a\u5728\u4e00\u4e2a\u5e73\u9762\u4e0a\uff0c\u4efb\u4f55\u591a\u8fb9\u5f62\u90fd\u53ef\u4ee5\u4f7f\u7528\u4e09\u89d2\u5f62\u7ec4\u6210\u7b49\u6027\u503c\u3002"),(0,o.kt)("h2",{id:"\u4e09\u89d2\u5f62"},"\u4e09\u89d2\u5f62"),(0,o.kt)("p",null,"\u73b0\u5728\u5c31\u8ba9\u6211\u4eec\u4ece\u6700\u7b80\u5355\u56fe\u5f62\u5f00\u59cb\u5427\uff0c\u6e32\u67d3\u4e00\u4e2a\u4e09\u89d2\u5f62\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const canvas = document.createElement('canvas')\ncanvas.width = canvas.height = 300\ndocument.body.append(canvas)\nconst gl = canvas.getContext('webgl')\n\ngl.viewport(0, 0, gl.canvas.width, gl.canvas.height)\n// \u544a\u8bc9 webgl \u5982\u4f55\u5c06 NDC \u5750\u6807 \u53d8\u4e3a\u5c4f\u5e55\u4e0a\u7684\u5750\u6807\n\nconst vertexShader = gl.createShader(gl.VERTEX_SHADER) // \u521b\u5efa\u4e00\u4e2a\u9876\u70b9\u7740\u8272\u5668\ngl.shaderSource(vertexShader, `\n  attribute vec4 a_position;\n\n  void main() {\n    gl_Position = a_position; // \u8bbe\u7f6e\u9876\u70b9\u4f4d\u7f6e\n  }\n`) // \u7f16\u5199\u9876\u70b9\u7740\u8272\u5668\u4ee3\u7801\ngl.compileShader(vertexShader) // \u7f16\u8bd1\u7740\u8272\u5668\n\nconst fragmentShader = gl.createShader(gl.FRAGMENT_SHADER) // \u521b\u5efa\u4e00\u4e2a\u7247\u5143\u7740\u8272\u5668\ngl.shaderSource(fragmentShader, `\n  precision mediump float;\n  uniform vec4 u_color;\n\n  void main() {\n    gl_FragColor = u_color; // \u8bbe\u7f6e\u7247\u5143\u989c\u8272\n  }\n`) // \u7f16\u5199\u7247\u5143\u7740\u8272\u5668\u4ee3\u7801\ngl.compileShader(fragmentShader) // \u7f16\u8bd1\u7740\u8272\u5668\n\nconst program = gl.createProgram() // \u521b\u5efa\u4e00\u4e2a\u7a0b\u5e8f\ngl.attachShader(program, vertexShader) // \u6dfb\u52a0\u9876\u70b9\u7740\u8272\u5668\ngl.attachShader(program, fragmentShader) // \u6dfb\u52a0\u7247\u5143\u7740\u8272\u5668\ngl.linkProgram(program) // \u8fde\u63a5 program \u4e2d\u7684\u7740\u8272\u5668\n\ngl.useProgram(program) // \u544a\u8bc9 webgl \u7528\u8fd9\u4e2a program \u8fdb\u884c\u6e32\u67d3\n\nconst colorLocation = gl.getUniformLocation(program, 'u_color') // \u83b7\u53d6 u_color \u53d8\u91cf\u4f4d\u7f6e\ngl.uniform4f(colorLocation, 0.93, 0, 0.56, 1) // \u8bbe\u7f6e\u5b83\u7684\u503c\n\nconst positionLocation = gl.getAttribLocation(program, 'a_position') \n// \u83b7\u53d6 a_position \u4f4d\u7f6e\nconst positionBuffer = gl.createBuffer() \n// \u521b\u5efa\u4e00\u4e2a\u9876\u70b9\u7f13\u51b2\u5bf9\u8c61\uff0c\u8fd4\u56de\u5176 ID\uff0c\u7528\u6765\u653e\u4e09\u89d2\u5f62\u9876\u70b9\u6570\u636e\uff0c\ngl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer) \n// \u5c06\u8fd9\u4e2a\u9876\u70b9\u7f13\u51b2\u5bf9\u8c61\u7ed1\u5b9a\u5230 gl.ARRAY_BUFFER\n// \u540e\u7eed\u5bf9 gl.ARRAY_BUFFER \u7684\u64cd\u4f5c\u90fd\u4f1a\u6620\u5c04\u5230\u8fd9\u4e2a\u7f13\u5b58\ngl.bufferData(gl.ARRAY_BUFFER, new Float32Array([\n    0, 0.5,\n    0.5, 0,\n    -0.5, -0.5\n]),  // \u4e09\u89d2\u5f62\u7684\u4e09\u4e2a\u9876\u70b9\n     // \u56e0\u4e3a\u4f1a\u5c06\u6570\u636e\u53d1\u9001\u5230 GPU\uff0c\u4e3a\u4e86\u7701\u53bb\u6570\u636e\u89e3\u6790\uff0c\u8fd9\u91cc\u4f7f\u7528 Float32Array \u76f4\u63a5\u4f20\u9001\u6570\u636e\ngl.STATIC_DRAW // \u8868\u793a\u7f13\u51b2\u533a\u7684\u5185\u5bb9\u4e0d\u4f1a\u7ecf\u5e38\u66f4\u6539\n)\n// \u5c06\u9876\u70b9\u6570\u636e\u52a0\u5165\u7684\u521a\u521a\u521b\u5efa\u7684\u7f13\u5b58\u5bf9\u8c61\n\ngl.vertexAttribPointer( // \u544a\u8bc9 OpenGL \u5982\u4f55\u4ece Buffer \u4e2d\u83b7\u53d6\u6570\u636e\n    positionLocation, // \u9876\u70b9\u5c5e\u6027\u7684\u7d22\u5f15\n    2, // \u7ec4\u6210\u6570\u91cf\uff0c\u5fc5\u987b\u662f1\uff0c2\uff0c3\u62164\u3002\u6211\u4eec\u53ea\u63d0\u4f9b\u4e86 x \u548c y\n    gl.FLOAT, // \u6bcf\u4e2a\u5143\u7d20\u7684\u6570\u636e\u7c7b\u578b\n    false, // \u662f\u5426\u5f52\u4e00\u5316\u5230\u7279\u5b9a\u7684\u8303\u56f4\uff0c\u5bf9 FLOAT \u7c7b\u578b\u6570\u636e\u8bbe\u7f6e\u65e0\u6548\n    0, // stride \u6b65\u957f \u6570\u7ec4\u4e2d\u4e00\u884c\u957f\u5ea6\uff0c0 \u8868\u793a\u6570\u636e\u662f\u7d27\u5bc6\u7684\u6ca1\u6709\u7a7a\u9699\uff0c\u8ba9OpenGL\u51b3\u5b9a\u5177\u4f53\u6b65\u957f\n    0 // offset \u5b57\u8282\u504f\u79fb\u91cf\uff0c\u5fc5\u987b\u662f\u7c7b\u578b\u7684\u5b57\u8282\u957f\u5ea6\u7684\u500d\u6570\u3002\n)\ngl.enableVertexAttribArray(positionLocation);\n// \u5f00\u542f attribute \u53d8\u91cf\uff0c\u4f7f\u9876\u70b9\u7740\u8272\u5668\u80fd\u591f\u8bbf\u95ee\u7f13\u51b2\u533a\u6570\u636e\n\ngl.clearColor(0, 1, 1, 1) // \u8bbe\u7f6e\u6e05\u7a7a\u989c\u8272\u7f13\u51b2\u65f6\u7684\u989c\u8272\u503c\ngl.clear(gl.COLOR_BUFFER_BIT) // \u6e05\u7a7a\u989c\u8272\u7f13\u51b2\u533a\uff0c\u4e5f\u5c31\u662f\u6e05\u7a7a\u753b\u5e03\n\ngl.drawArrays( // \u4ece\u6570\u7ec4\u4e2d\u7ed8\u5236\u56fe\u5143\n    gl.TRIANGLES, // \u6e32\u67d3\u4e09\u89d2\u5f62\n    0,  // \u4ece\u6570\u7ec4\u4e2d\u54ea\u4e2a\u70b9\u5f00\u59cb\u6e32\u67d3\n    3   // \u9700\u8981\u7528\u5230\u591a\u5c11\u4e2a\u70b9\uff0c\u4e09\u89d2\u5f62\u7684\u4e09\u4e2a\u9876\u70b9\n)\n")),(0,o.kt)("p",null,"\u6e32\u67d3\u7ed3\u679c\u5982\u4e0b\u56fe\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25923128/120929285-0d881a80-c71b-11eb-82fe-4813aeb0609e.png",alt:"image"})),(0,o.kt)("p",null,"\u53ef\u89c1 WebGL \u7684\u4ee3\u7801\u975e\u5e38\u7e41\u7410\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u4e09\u89d2\u5f62\u5c31\u9700\u8981\u7f16\u5199\u8fd9\u4e48\u591a\u7684\u4ee3\u7801\u3002\u4e0b\u9762\u5c06\u4e00\u6b65\u6b65\u7684\u5206\u6790\u4e0a\u9762\u7684\u4ee3\u7801\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u77e5\u9053 WebGL \u5c31\u662f\u4e00\u4e2a\u975e\u5e38\u5927\u7684\u72b6\u6001\u673a\uff0c\u5b83\u63d0\u4f9b\u7684\u65b9\u6cd5\u90fd\u662f\u6539\u53d8 WebGL \u7684\u67d0\u4e2a\u72b6\u6001\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5728 CPU \u4e2d\u4f7f\u7528 JS \u8bbe\u7f6e WebGL \u7684\u72b6\u6001\uff0c\u51c6\u5907\u6570\u636e\u548c\u7740\u8272\u5668\u7a0b\u5e8f\uff0c\u7136\u540e\u53d1\u9001\u7ed9 GPU \u6267\u884c\u3002"),(0,o.kt)("p",null,"\u4e0a\u65b9\u4ee3\u7801\u53ef\u4ee5\u5206\u4e3a\u5982\u4e0b\u51e0\u6b65\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u56e0\u4e3a WebGL \u7684\u5750\u6807\u662f -1 \u5230 1\uff0c\u6240\u4ee5\u9996\u5148\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"viewport")," \u8bbe\u7f6e\u89c6\u53e3\u5927\u5c0f\u4fe1\u606f\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u521b\u5efa\u9876\u70b9\u548c\u7247\u6bb5\u7740\u8272\u5668\uff08\u5173\u4e8e\u7740\u8272\u5668\u60c5\u51b5",(0,o.kt)("a",{parentName:"li",href:"/learn-webgl/docs/shader"},"\u4e0b\u7bc7\u6587\u7ae0"),"\uff09\uff0c\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u7a0b\u5e8f\uff0c\u6765\u8fde\u63a5\u9876\u70b9\u548c\u7247\u6bb5\u7740\u8272\u5668\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7136\u540e\u83b7\u53d6\u7740\u8272\u5668\u4e2d\u7684\u53d8\u91cf\uff0c\u8bbe\u7f6e\u5982\u4f55\u5c06\u503c\u4f20\u9012\u7ed9\u7740\u8272\u5668\u3002\u4e09\u89d2\u5f62\u662f\u7531 3 \u4e2a\u9876\u70b9\u7ec4\u6210\uff0c\u6240\u4ee5\u51c6\u5907\u4e86 3 \u4e2a\u70b9\u7684\u5750\u6807\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u6e05\u5c4f\u989c\u8272\uff0c\u5e76\u6e05\u5c4f\uff0c",(0,o.kt)("strong",{parentName:"li"},"WebGL \u4e2d\u7684\u989c\u8272\u662f 0 \u5230 1\uff0c\u800c\u4e0d\u662f 0 \u5230 255"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6e32\u67d3\u4e09\u89d2\u5f62")),(0,o.kt)("p",null,"\u5173\u4e8e\u7740\u8272\u5668\u7684\u90e8\u5206\u5c06\u5728",(0,o.kt)("a",{parentName:"p",href:"/learn-webgl/docs/shader"},"\u4e0b\u4e00\u7bc7\u6587\u7ae0"),"\u4e2d\u8bb2\u89e3\u3002"),(0,o.kt)("h2",{id:"high-dpi"},"High DPI"),(0,o.kt)("p",null,"\u6bcf\u6b21\u90fd\u521b\u5efa canvas\uff0c\u83b7\u53d6 WebGL \u4e0a\u4e0b\u6587\u975e\u5e38\u9ebb\u70e6\uff0c\u8fd9\u91cc\u5c31\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"createGl")," \u65b9\u6cd5\uff0c\u4ee5\u540e\u90fd\u76f4\u63a5\u7528\u8be5\u65b9\u6cd5\u83b7\u53d6 WebGL \u4e0a\u4e0b\u6587\u3002 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function createGl(width = 500, height = 500) {\n  const canvas = document.createElement('canvas')\n  const gl = canvas.getContext('gl')\n  const dpr = window.devicePixelRatio || 1\n\n  canvas.style.width = `${width}px`\n  canvas.style.height = `${height}px`\n  canvas.width = dpr * width\n  canvas.height = dpr * height\n  gl.viewport(0, 0, canvas.width, canvas.height)\n\n  document.body.append(canvas)\n  return gl\n}\n")),(0,o.kt)("p",null,"\u5728\u9ad8\u6e05\u5c4f\u4e0a\u6211\u4eec\u6e32\u67d3\u7684\u56fe\u5f62\u53ef\u80fd\u4f1a\u6a21\u7cca\uff0c\u8fd9\u662f\u56e0\u4e3a CSS \u50cf\u7d20\u548c\u5b9e\u9645\u50cf\u7d20\u4e0d\u4e00\u81f4\uff0c\u4f8b\u5982\u5728 DPR \u4e3a 2 \u7684\u5c4f\u5e55\u4e0a 100px \u7684 css \u50cf\u7d20\uff0c\u5b9e\u9645\u5360\u7528 200px\u3002\n\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5c06 canvas \u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"dpr * css size")," \u7684\u5927\u5c0f\u3002"))}p.isMDXComponent=!0}}]);