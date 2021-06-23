(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[577],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),s=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=s(n.components);return r.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),g=s(t),d=a,b=g["".concat(c,".").concat(d)]||g[d]||u[d]||o;return t?r.createElement(b,l(l({ref:e},p),{},{components:t})):r.createElement(b,l({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8290:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),l={},i="\u76d2\u5b50 / \u9762\u5254\u9664",c={unversionedId:"box",id:"box",isDocsHomePage:!1,title:"\u76d2\u5b50 / \u9762\u5254\u9664",description:"\u4e0a\u7bc7\u6587\u7ae0\u6211\u4eec\u5b66\u5230\u4e86\u5982\u4f55\u53d8\u6362\u7269\u4f53\uff0c\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u8ba9\u7740\u8272\u5668\u4e2d\u7684\u7acb\u65b9\u4f53\u52a8\u8d77\u6765\u4e86\u3002",source:"@site/docs/7-box.md",sourceDirName:".",slug:"/box",permalink:"/learn-webgl/docs/box",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/7-box.md",version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u53d8\u6362",permalink:"/learn-webgl/docs/transform"},next:{title:"\u76f8\u673a",permalink:"/learn-webgl/docs/camera"}},s=[{value:"Box",id:"box",children:[]},{value:"\u9762\u5254\u9664",id:"\u9762\u5254\u9664",children:[]}],p={toc:s};function u(n){var e=n.components,t=(0,a.Z)(n,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u76d2\u5b50--\u9762\u5254\u9664"},"\u76d2\u5b50 / \u9762\u5254\u9664"),(0,o.kt)("p",null,"\u4e0a\u7bc7\u6587\u7ae0\u6211\u4eec\u5b66\u5230\u4e86\u5982\u4f55\u53d8\u6362\u7269\u4f53\uff0c\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u8ba9",(0,o.kt)("a",{parentName:"p",href:"/learn-webgl/docs/shader"},"\u7740\u8272\u5668"),"\u4e2d\u7684\u7acb\u65b9\u4f53\u52a8\u8d77\u6765\u4e86\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u770b\u89c1\u7acb\u65b9\u4f53\u6240\u6709\u7684\u9762\uff0c\u6211\u4eec\u8ba9\u7acb\u65b9\u4f53\u7ed5 X \u548c Y \u8f74\u65cb\u8f6c\u3002",(0,o.kt)("a",{parentName:"p",href:"/learn-webgl/docs/transform"},"\u4e0a\u7bc7\u6587\u7ae0"),"\u4e2d\u6211\u4eec\u603b\u7ed3\u4e86\u5404\u79cd\u65cb\u8f6c\u77e9\u9635\uff0c\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5de5\u5177\u77e9\u9635\u7c7b\uff0c\u4ee5\u540e\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e9b\u5de5\u5177\u77e9\u9635\u65b9\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Mat4 {\n  static fromXRotation(rad) {\n    const s = Math.sin(rad)\n    const c = Math.cos(rad)\n    return [\n      1, 0, 0, 0,\n      0, c, s, 0,\n      0, -s, c, 0,\n      0, 0, 0, 1\n    ]\n  }\n\n  static fromYRotation(rad) {\n    const s = Math.sin(rad)\n    const c = Math.cos(rad)\n    return [\n      c, 0, -s, 0,\n      0, 1, 0, 0,\n      s, 0, c, 0,\n      0, 0, 0, 1\n    ]\n  }\n\n  static multiply(a, b, out = []) {\n    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];\n    const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];\n    const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];\n    const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];\n\n    let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];\n    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;\n    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;\n    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;\n    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;\n\n    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];\n    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;\n    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;\n    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;\n    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;\n\n    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];\n    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;\n    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;\n    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;\n    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;\n\n    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];\n    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;\n    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;\n    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;\n    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;\n    return out;\n  }\n}\n")),(0,o.kt)("p",null,"\u8fd9\u91cc\u76f4\u63a5\u4f7f\u7528\u4e0a\u7bc7\u6587\u7ae0\u4e2d\u7684\u65cb\u8f6c\u77e9\u9635\uff0c\u9700\u8981\u6ce8\u610f\u8fd9\u91cc\u5c06\u5b83\u8f6c\u7f6e\u4e86\u4e00\u4e0b\uff0c\u56e0\u4e3a OpenGL \u4e2d\u7684\u77e9\u9635\u662f\u5217\u4e3b\u5e8f\u7684\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u5728",(0,o.kt)("a",{parentName:"p",href:"/learn-webgl/docs/shader"},"\u7740\u8272\u5668"),"\u4e2d\u7684\u7acb\u65b9\u4f53\u4ee3\u7801\u7684\u57fa\u7840\u4e0a\u6dfb\u52a0\u65b0\u7684\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{6,10,55,60-68} run","{6,10,55,60-68}":!0,run:!0},"const gl = createGl()\n\nconst program = createProgramFromSource(gl, `\nattribute vec4 aPos;\nattribute vec4 aColor;\nuniform mat4 uMat;\nvarying vec4 vColor;\n\nvoid main() {\n  gl_Position = uMat * aPos;\n  vColor = aColor;\n}\n`, `\nprecision mediump float;\nvarying vec4 vColor;\n\nvoid main() {\n  gl_FragColor = vColor;\n}\n`)\n\nconst points = new Float32Array([\n  -0.5,0.5,-0.5, 0.5,0.5,-0.5, 0.5,-0.5,-0.5, -0.5,-0.5,-0.5,\n  0.5,0.5,0.5, -0.5,0.5,0.5, -0.5,-0.5,0.5, 0.5,-0.5,0.5\n  // \u7acb\u65b9\u4f53\u7684 8 \u4e2a\u9876\u70b9\n])\nconst colors = new Float32Array([\n  1,0,0, 0,1,0, 0,0,1, 1,0,1,\n  0,0,0, 0,0,0, 0,0,0, 0,0,0\n  // \u6bcf\u4e2a\u9876\u70b9\u7684\u989c\u8272\n])\nconst indices = new Uint8Array([ // \u9762\u7684\u7d22\u5f15\uff0c\u503c\u662f points \u7684\u4e0b\u6807\n  0, 1, 2, 0, 2, 3, // \u524d\n  1, 4, 2, 4, 7, 2, // \u53f3\n  4, 5, 6, 4, 6, 7, // \u540e\n  5, 3, 6, 5, 0, 3, // \u5de6\n  0, 5, 4, 0, 4, 1, // \u4e0a\n  7, 6, 3, 7, 3, 2  // \u4e0b\n])\n\nconst [posLoc, posBuffer] = createAttrBuffer(gl, program, 'aPos', points)\nconst [colorLoc, colorBuffer] = createAttrBuffer(gl, program, 'aColor', colors)\nconst indexBuffer = gl.createBuffer()\ngl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)\ngl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW)\n\ngl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)\ngl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0)\ngl.enableVertexAttribArray(posLoc)\n\ngl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)\ngl.vertexAttribPointer(colorLoc, 3, gl.FLOAT, false, 0, 0)\ngl.enableVertexAttribArray(colorLoc)\n\nconst matLoc = gl.getUniformLocation(program, 'uMat')\n\ngl.enable(gl.DEPTH_TEST)\ngl.clearColor(0, 0, 0, 0)\n\nlet r = 0\nfunction draw() {\n  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)\n  gl.uniformMatrix4fv(matLoc, false, Mat4.multiply(Mat4.fromXRotation(r), Mat4.fromYRotation(r)))\n  gl.drawElements(gl.TRIANGLES,indices.length,gl.UNSIGNED_BYTE,0)\n  r += 0.01\n  requestAnimationFrame(draw)\n}\ndraw()\n\nfunction createShader(gl, type, source) {\n  const shader = gl.createShader(type)\n  gl.shaderSource(shader, source)\n  gl.compileShader(shader)\n  return shader;\n}\n\nfunction createProgramFromSource(gl, vertex, fragment) {\n  const vertexShader = createShader(gl, gl.VERTEX_SHADER,vertex)\n  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragment)\n  const program = gl.createProgram()\n  gl.attachShader(program, vertexShader)\n  gl.attachShader(program, fragmentShader)\n  gl.linkProgram(program)\n  gl.useProgram(program)\n  return program\n}\n\nfunction createAttrBuffer(gl, program, attr, data) {\n  const location = gl.getAttribLocation(program, attr)\n  const buffer = gl.createBuffer();\n  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)\n  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)\n  return [location, buffer]\n}\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"uniformMatrix4fv")," \u7ed9\u9876\u70b9\u7740\u8272\u5668\u4f20\u9012\u65cb\u8f6c\u77e9\u9635\uff0c\u5b83\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u662f\u5426\u8f6c\u7f6e\u77e9\u9635\uff0c\u56e0\u4e3a\u6211\u4eec\u7684\u77e9\u9635\u5c31\u662f\u5217\u4e3b\u5e8f\u7684\uff0c\u6240\u4ee5\u65e0\u9700\u8f6c\u7f6e\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/learn-webgl/docs/transform"},"\u4e0a\u7bc7\u6587\u7ae0"),"\u4e2d\u4ecb\u7ecd\u4e86\u4f7f\u7528\u77e9\u9635\u7684\u597d\u5904\u4e4b\u4e00\u5c31\u662f\u53ef\u4ee5\u7ec4\u5408\u53d8\u6362\uff0c\u8fd9\u91cc\u6211\u4eec\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Mat4.multiply(Mat4.fromXRotation(r), Mat4.fromYRotation(r))")," \u5c06\u4e24\u4e2a\u65cb\u8f6c\u7ed3\u5408\u8d77\u6765\uff0c\u7136\u540e\u5728\u5e94\u7528\u5230\u7acb\u65b9\u4f53\u7684\u5404\u4e2a\u9876\u70b9\uff0c\u8ba9\u7acb\u65b9\u4f53\u7ed5 X \u548c Y \u8f74\u65cb\u8f6c\u8d77\u6765\u3002"),(0,o.kt)("h2",{id:"box"},"Box"),(0,o.kt)("p",null,"\u6211\u4eec\u53d1\u73b0\u6e32\u67d3\u51fa\u6765\u7acb\u65b9\u4f53\u662f\u6e10\u53d8\u8272\u7684\uff0c\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u6307\u5b9a\u4e86 8 \u4e2a\u9876\u70b9\u7684\u989c\u8272\uff0c\u6bcf\u4e2a\u9876\u70b9\u989c\u8272\u90fd\u4e0d\u540c\uff0cWebGL \u4f1a\u5c06\u9876\u70b9\u7740\u8272\u5668\u4f20\u9012\u7ed9\u7247\u6bb5\u7740\u8272\u5668\u7684\u989c\u8272\u8fdb\u884c\u63d2\u503c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u8981\u6bcf\u4e2a\u9762\u90fd\u662f\u4e0d\u540c\u8272\u7eaf\u8272\uff0c\u6211\u4eec\u9700\u8981\u6307\u5b9a\u6bcf\u4e2a\u9762\u7684\u989c\u8272\u503c\u76f8\u540c\uff0c\u8fd9\u6837 WebGL \u5bf9\u76f8\u540c\u989c\u8272\u76f4\u63a5\u8fdb\u884c\u63d2\u503c\uff0c\u8fd8\u662f\u76f8\u540c\u7684\u989c\u8272\u3002\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e2a\u6548\u679c\u6211\u4eec\u5c31\u4e0d\u80fd\u5171\u7528\u9876\u70b9\u4e86\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u9762\u989c\u8272\u90fd\u4e0d\u540c\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5355\u72ec\u521b\u5efa 6 \u4e2a\u9762\u7136\u540e\u5c06\u8fd9\u4e2a 6 \u4e2a\u9762\u7ec4\u5408\u8d77\u6765\u3002\u4e3a\u4e86\u65b9\u4fbf\u540e\u9762\u4f7f\u7528\uff0c\u6211\u4eec\u5c06\u5b83\u5c01\u88c5\u6210\u901a\u7528\u51fd\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function createBox(width = 1, height = 1, depth = 1, widthSeg = 1, heightSeg = 1, depthSeg = 1) {\n  const segWidth = width / widthSeg\n  const segHeight = height / heightSeg\n  const segDepth = height / depthSeg\n  const halfWidth = width / 2\n  const halfHeight = height / 2\n  const halfDepth = depth / 2\n\n  const position = []\n  const index = []\n\n  let numVertex = 0\n  // front, bottom\n  buildPlane(widthSeg, heightSeg, segWidth, segHeight, halfWidth, halfHeight, halfDepth, 1, -1, 0, 1, 2)\n  buildPlane(widthSeg, heightSeg, segWidth, segHeight, halfWidth, halfHeight, -halfDepth, -1, -1, 0, 1, 2)\n\n  // left, right\n  buildPlane(depthSeg, heightSeg, segDepth, segHeight, halfDepth, halfHeight, -halfWidth, 1, -1, 2, 1, 0)\n  buildPlane(depthSeg, heightSeg, segDepth, segHeight, halfDepth, halfHeight, halfWidth, -1, -1, 2, 1, 0)\n\n  // top, bottom\n  buildPlane(widthSeg, depthSeg, segWidth, segDepth, halfWidth, halfDepth, halfHeight, 1, 1, 0, 2, 1)\n  buildPlane(widthSeg, depthSeg, segWidth, segDepth, halfWidth, halfDepth, -halfHeight, 1, -1, 0, 2, 1)\n\n  function buildPlane(uSeg, vSeg, uLen, vLen, halfU, halfV, depth, uDir, vDir, ix, iy, iz) {\n    const maxU = uSeg + 1\n    const maxV = vSeg + 1\n\n    let x, y, pos = []\n    for (let i = 0; i < maxV; i++) {\n      y = i * vLen - halfV\n      for (let j = 0; j < maxU; j++) {\n        x = j * uLen - halfU\n        pos[ix] = x * uDir\n        pos[iy] = y * vDir\n        pos[iz] = depth\n        position.push(...pos)\n      }\n    }\n\n    let a, b, c, d\n    for (let i = 0; i < vSeg; i++) {\n      for (let j = 0; j < uSeg; j++) {\n        a = numVertex + j + maxU * i\n        b = numVertex + j + maxV * (i + 1)\n        c = b + 1\n        d = a + 1\n        index.push(a, b, c, a, c, d)\n      }\n    }\n\n    numVertex += (maxU * maxV)\n  }\n\n  return {\n    position: new Float32Array(position),\n    index: numVertex > 65536 ? new Uint32Array(index) : new Uint16Array(index),\n  }\n}\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6307\u5b9a\u76d2\u5b50\u7684\u5bbd\u5ea6\u3001\u9ad8\u5ea6\u548c\u6df1\u5ea6\uff0c\u5e76\u4e14\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u6bcf\u4e2a\u9762\u7684\u6709\u51e0\u884c\u548c\u51e0\u5217\u3002\u5b83\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u91cc\u9762\u5305\u542b\u9876\u70b9\u4f4d\u7f6e\u548c\u7d22\u5f15\u3002"),(0,o.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u6709\u70b9\u590d\u6742\uff0c\u9700\u8981\u82b1\u70b9\u65f6\u95f4\u6d88\u5316\u4e00\u4e0b\uff0c\u57fa\u672c\u601d\u8def\u662f\u5206\u522b\u6784\u5efa\u76d2\u5b50\u7684 6 \u4e2a\u9762\u3002\u6bd4\u5982\u5728\u6784\u5efa\u6b63\u9762\u65f6\uff0c\u6211\u4eec\u5c06\u9762\u79fb\u52a8\u5230\u5750\u6807\u8f74\u7684\u6b63\u4e2d\u95f4\u5e76\u53cd\u8f6c Y \u8f74\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u4ece\u5de6\u4e0a\u89d2\u7b2c\u4e00\u4e2a\u70b9\u4f5c\u4e3a\u8d77\u70b9\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\u6211\u4eec\u4e0a\u9762\u91c7\u7528\u7684\u662f",(0,o.kt)("a",{parentName:"p",href:"/learn-webgl/docs/coordinate"},"\u53f3\u624b\u5750\u6807\u7cfb"),"\uff0c\u6b63\u9762\u7684 Z \u6b63\u503c\uff0c\u80cc\u9762\u662f\u8d1f\u503c\u3002"),(0,o.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u9700\u8981\u6307\u5b9a\u6bcf\u4e2a\u9762\u7684\u989c\u8272\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const box = createBox()\nlet colors = []\nlet size = box.position.length / 6 / 3\npushColor(1, 0, 0)\npushColor(0, 1, 0)\npushColor(0, 0, 1)\npushColor(1, 1, 0)\npushColor(0, 1, 1)\npushColor(1, 0, 1)\nfunction pushColor(r, g, b) {\n  for (let i = 0; i < size; i++) {\n    colors.push(r, g, b)\n  }\n}\ncolors = new Float32Array(colors)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"run hide",run:!0,hide:!0},"const renderer = new Renderer()\nconst geometry = new BoxGeometry()\n\nlet colors = []\nlet size = geometry.attributes.position.value.length / 6 / 3\npushColor(1, 0, 0)\npushColor(0, 1, 0)\npushColor(0, 0, 1)\npushColor(1, 1, 0)\npushColor(0, 1, 1)\npushColor(1, 0, 1)\nfunction pushColor(r, g, b) {\n  for (let i = 0; i < size; i++) {\n    colors.push(r, g, b)\n  }\n}\ngeometry.setAttribute('color', { value: new Float32Array(colors) })\n\nconst program = new Program(renderer, {\n  vs: `\n    attribute vec4 position;\n    attribute vec3 color;\n    uniform mat4 world;\n    varying vec3 vColor;\n\n    void main() {\n      vColor = color;\n      gl_Position = world * position;\n    }\n  `,\n  fs: `\n    precision highp float;\n    varying vec3 vColor;\n\n    void main() {\n      gl_FragColor = vec4(vColor, 1);\n    }\n  `,\n  cullFace: 0\n})\n\nconst mesh = new Mesh(geometry, program)\nconst scene = new Scene()\nscene.add(mesh)\n\nlet r = 0\nfunction draw() {\n  program.uniforms.world = Mat4.multiply(Mat4.fromXRotation(r), Mat4.fromYRotation(r))\n  renderer.render(scene)\n  r += 0.01\n  requestAnimationFrame(draw)\n}\ndraw()\n")),(0,o.kt)("p",null,"\u770b\u4e0a\u65b9\u7684\u6e32\u67d3\u7ed3\u679c\uff0c\u4e0d\u77e5\u9053\u6709\u6ca1\u6709\u540c\u5b66\u6ce8\u610f\u5230\u6211\u4eec\u5c06\u6b63\u9762\u8bbe\u7f6e\u4e3a\u7ea2\u8272\uff0c\u80cc\u9762\u8bbe\u7f6e\u4e3a\u7eff\u8272\uff0c\u4f46\u662f\u6e32\u67d3\u51fa\u6765\u5374\u662f\u7eff\u8272\u7684\u9762\u5728\u524d\u3002\u8fd9\u662f\u56e0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"createBox")," \u4e2d\u4f7f\u7528\u7684\u662f",(0,o.kt)("strong",{parentName:"p"},"\u53f3\u624b\u5750\u6807\u7cfb"),"\uff0c\u8fd9\u4e5f\u662f OpenGL \u4f20\u7edf\u5750\u6807\u7cfb\uff0c\u4e0d\u8fc7\u5728",(0,o.kt)("a",{parentName:"p",href:"/learn-webgl/docs/coordinate"},"\u5750\u6807\u7cfb"),"\u4e2d\u6709\u5f3a\u8c03\uff0c\u6807\u51c6\u5750\u6807\u7cfb\u4e2d\u5b9e\u9645\u4e0a\u662f",(0,o.kt)("strong",{parentName:"p"},"\u5de6\u624b\u5750\u6807\u7cfb"),"\uff0cZ \u503c\u5c0f\u7684\u5728 Z \u503c\u5927\u7684\u524d\u9762\u3002"),(0,o.kt)("h2",{id:"\u9762\u5254\u9664"},"\u9762\u5254\u9664"),(0,o.kt)("p",null,"\u4e0a\u9762\u6e32\u67d3\u7684\u7acb\u65b9\u4f53\uff0c\u6211\u4eec\u4e00\u6b21\u5e76\u4e0d\u80fd\u770b\u89c1\u5b83\u7684\u6240\u6709\u7684\u9762\uff0c\u53ea\u80fd\u770b\u89c1 3 \u4e2a\u9762\uff0c\u4f46\u662f\u6211\u4eec\u5374\u6e32\u67d3\u4e86\u6240\u6709\u7684\u9762\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u8282\u7701\u6027\u80fd\uff0c\u6211\u4eec\u53ef\u4ee5\u53ea\u6e32\u67d3\u7528\u6237\u80fd\u770b\u5230\u7684\u9762\uff0c\u770b\u4e0d\u5230\u7684\u9762\u5c31\u4e0d\u6e32\u67d3\u4e86\u3002\u4e3a\u4e86\u505a\u5230\u8fd9\u4e00\u70b9\u6211\u4eec\u53ef\u4ee5\u53ea\u6e32\u67d3\u6b63\u9762\u9762\u5411\u7528\u6237\u7684\u9762\uff0c\u800c\u4e22\u5f03\u9762\u5411\u7528\u6237\u7684\u9762\u662f\u80cc\u9762\u7684\u9762\u3002\u5f53\u7136 OpenGL \u63d0\u4f9b\u4e86\u9762\u5254\u9664\u8fd9\u4e2a\u529f\u80fd\uff0cOpenGL \u80fd\u591f\u68c0\u67e5\u6240\u6709\u9762\u5411\u89c2\u5bdf\u8005\u7684\u9762\uff0c\u5e76\u6e32\u67d3\u5b83\u4eec\uff0c\u800c\u4e22\u5f03\u90a3\u4e9b\u80cc\u5411\u7684\u9762\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u9700\u8981\u8ba9 OpenGL \u80fd\u591f\u533a\u5206\u54ea\u4e2a\u9762\u662f\u6b63\u9762\uff0c\u54ea\u4e2a\u9762\u662f\u80cc\u9762\u3002\u6211\u4eec\u5df2\u7ecf\u77e5\u9053\u90a3\u4e9b\u590d\u6742\u6a21\u578b\u90fd\u662f\u7531\u4e00\u4e2a\u4e2a\u4e09\u89d2\u5f62\u7ec4\u6210\uff0c\u6211\u4eec\u8981\u533a\u5206\u9762\u7684\u6b63\u9762\u548c\u80cc\u9762\uff0c\u4e5f\u5c31\u662f\u533a\u5206\u8fd9\u4e00\u4e2a\u4e2a\u4e09\u89d2\u5f62\u7684\u6b63\u9762\u548c\u80cc\u9762\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e09\u89d2\u5f62\u5404\u4e2a\u9876\u70b9\u7684\u987a\u5e8f\u6765\u641e\u544a\u8bc9 OpenGL \u54ea\u4e2a\u662f\u6b63\u5411\u4e09\u89d2\u5f62\u54ea\u4e2a\u662f\u80cc\u5411\u4e09\u89d2\u5f62\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25923128/122080604-f8a13a80-ce30-11eb-89ec-1a71171b852a.png",alt:"image"})),(0,o.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u5f0f\u63cf\u8ff0\u4e09\u89d2\u5f62\u4e09\u4e2a\u9876\u70b9\u7684\u987a\u5e8f\uff0c\u5206\u522b\u662f\u987a\u65f6\u9488\u548c\u9006\u65f6\u9488\u3002\u9ed8\u8ba4\u60c5\u51b5 OpenGL \u5c06\u9006\u65f6\u9488\u987a\u5e8f\u7684\u4e09\u89d2\u5f62\u5904\u7406\u4e3a\u6b63\u5411\u4e09\u89d2\u5f62\u3002\u6211\u4eec\u540c\u6837\u53ef\u4ee5\u4f38\u51fa\u53f3\u624b\u63e1\u62f3\uff0c\u7136\u540e\u4f38\u51fa\u5927\u62c7\u6307\uff0c\u548c",(0,o.kt)("a",{parentName:"p",href:"/learn-webgl/docs/coordinate"},"\u5750\u6807\u7cfb"),"\u4e2d\u4e00\u6837\uff0c\u624b\u6307\u7684\u5f2f\u66f2\u548c\u4e09\u89d2\u5f62\u7684\u9876\u70b9\u7684\u987a\u5e8f\u4e00\u6837\uff0c\u5982\u679c\u5927\u62c7\u6307\u6307\u5411\u4f60\u8bf4\u660e\u8fd9\u4e2a\u9762\u662f\u6b63\u9762\u4f1a\u88ab\u6e32\u67d3\uff0c\u5426\u5219\u662f\u80cc\u9762\u4f1a\u88ab\u5254\u9664\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learnopengl-cn.github.io/04%20Advanced%20OpenGL/04%20Face%20culling/"},(0,o.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/25923128/122086365-3785bf00-ce36-11eb-8594-739ecbdace5f.png",alt:"image"}))),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u9762\u5254\u9664\u662f\u5173\u95ed\u7684\uff0c\u6211\u4eec\u9700\u8981\u542f\u7528\u5b83\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"gl.enable(gl.CULL_FACE)\n")),(0,o.kt)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u6307\u5b9a\u5254\u9664\u54ea\u4e2a\u9762\uff0c\u9ed8\u8ba4\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"gl.BACK"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"gl.cullFace(gl.FRONT)\ngl.cullFace(gl.BACK)\ngl.cullFace(gl.FRONT_AND_BACK)\n")),(0,o.kt)("p",null,"\u6211\u4eec\u8fd8\u80fd\u6307\u5b9a\u4ec0\u4e48\u987a\u5e8f\u8868\u793a\u7684\u662f\u6b63\u9762\uff0c\u9ed8\u8ba4\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"gl.CCW")," \u8868\u793a\u9006\u65f6\u9488\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"gl.frontFace(gl.CW)\ngl.frontFace(gl.CCW)\n")),(0,o.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u56de\u8fc7\u5934\uff0c\u518d\u6765\u770b\u4e0a\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"createBox")," \u51fd\u6570\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"buildPlane")," \u4e2d\u7b2c\u4e00\u4e2a\u5faa\u73af\u8ba1\u7b97\u51fa\u4e86\u9762\u7684\u9876\u70b9\u4f4d\u7f6e\uff0c\u7b2c\u4e8c\u4e2a\u5faa\u73af\u4e2d\u8ba1\u7b97\u4e86\u9762\u7684\u7d22\u5f15\uff0c\u6211\u4eec\u6c42\u51fa\u4e86\u6bcf\u4e2a\u5c0f\u683c\u5b50\u7684 4 \u4e2a\u9876\u70b9\uff0c\u5206\u522b\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"b"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"c")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"d"),"\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25923128/122088782-ac59f880-ce38-11eb-846e-53817f224358.png",alt:"image"})),(0,o.kt)("p",null,"\u7136\u540e\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"index.push(a, b, c, a, c, d)"),"\uff0c\u9700\u8981\u6ce8\u610f\u8fd9\u4e2a\u987a\u5e8f\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u4e3a\u9006\u65f6\u9488\u4e3a\u6b63\u9762\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"b")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," \u6784\u9020\u4e86\u4e00\u4e2a\u9006\u65f6\u9488\u987a\u5e8f\u7684\u4e09\u89d2\u5f62\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"a"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"c")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"d")," \u6784\u6210\u4e86\u53e6\u4e00\u4e2a\u9006\u65f6\u9488\u4e09\u89d2\u5f62\uff0c\u4e24\u4e2a\u4e09\u89d2\u5f62\u7ec4\u6210\u4e86\u4e00\u4e2a\u6b63\u65b9\u5f62\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"index.push(a, b, c, a, c, d)")," \u53d8\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"index.push(a, b, c, a, d, c)")," \u5c06\u7b2c\u4e8c\u4e2a\u4e09\u89d2\u5f62\u53d8\u6210\u987a\u65f6\u9488\uff0c\u90a3\u4e48\u6e32\u67d3\u7684\u7acb\u65b9\u4f53\uff0c\u5c06\u4f1a\u662f\u4e0b\u9762\u8fd9\u6837\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"run hide",run:!0,hide:!0},"const renderer = new Renderer()\nconst geometry = new BoxGeometry()\n\nlet colors = []\nlet size = geometry.attributes.position.value.length / 6 / 3\npushColor(1, 0, 0)\npushColor(0, 1, 0)\npushColor(0, 0, 1)\npushColor(1, 1, 0)\npushColor(0, 1, 1)\npushColor(1, 0, 1)\nfunction pushColor(r, g, b) {\n  for (let i = 0; i < size; i++) {\n    colors.push(r, g, b)\n  }\n}\ngeometry.setAttribute('color', { value: new Float32Array(colors) })\n\nfor (let i = 0, ai = geometry.attributes.index.value, l = ai.length; i < l; i += 6) {\n  const tmp = ai[i + 5]\n  ai[i + 5] = ai[i + 4]\n  ai[i + 4] = tmp\n}\n\nconst program = new Program(renderer, {\n  vs: `\n    attribute vec4 position;\n    attribute vec3 color;\n    uniform mat4 world;\n    varying vec3 vColor;\n\n    void main() {\n      vColor = color;\n      gl_Position = world * position;\n    }\n  `,\n  fs: `\n    precision highp float;\n    varying vec3 vColor;\n\n    void main() {\n      gl_FragColor = vec4(vColor, 1);\n    }\n  `\n})\n\nconst mesh = new Mesh(geometry, program)\nconst scene = new Scene()\nscene.add(mesh)\n\nlet r = 0\nfunction draw() {\n  program.uniforms.world = Mat4.multiply(Mat4.fromXRotation(r), Mat4.fromYRotation(r))\n  renderer.render(scene)\n  r += 0.01\n  requestAnimationFrame(draw)\n}\ndraw()\n")))}u.isMDXComponent=!0}}]);