(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||g[f]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8984:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return g}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={},l="\u4ee3\u7801\u91cd\u6784",s={unversionedId:"refactor",id:"refactor",isDocsHomePage:!1,title:"\u4ee3\u7801\u91cd\u6784",description:"\u73b0\u5728\u6211\u4eec\u6bcf\u5199\u4e00\u4e2a\u4f8b\u5b50\u90fd\u8981\u5199\u4e00\u5806\u6a21\u7248\u4ee3\u7801\u975e\u5e38\u9ebb\u70e6\u3002\u8fd9\u7bc7\u6587\u7ae0\u5c31\u6765\u5c06\u4ee3\u7801\u5c01\u88c5\u91cd\u6784\u4e0b\uff0c\u4ee3\u7801\u5c01\u88c5\u4e3b\u8981\u53c2\u8003 ogl \u548c threejs\u3002",source:"@site/docs/12-refactor.md",sourceDirName:".",slug:"/refactor",permalink:"/learn-webgl/docs/refactor",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/12-refactor.md",version:"current",sidebarPosition:12,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5750\u6807\u7a7a\u95f4",permalink:"/learn-webgl/docs/coordinate-space"},next:{title:"\u6781\u5750\u6807\u7cfb / \u7403",permalink:"/learn-webgl/docs/polar-sphere"}},c=[{value:"Renderer",id:"renderer",children:[]},{value:"Scene",id:"scene",children:[]},{value:"Mesh",id:"mesh",children:[]},{value:"Geometry",id:"geometry",children:[]},{value:"Program",id:"program",children:[]}],u={toc:c};function g(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4ee3\u7801\u91cd\u6784"},"\u4ee3\u7801\u91cd\u6784"),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6bcf\u5199\u4e00\u4e2a\u4f8b\u5b50\u90fd\u8981\u5199\u4e00\u5806\u6a21\u7248\u4ee3\u7801\u975e\u5e38\u9ebb\u70e6\u3002\u8fd9\u7bc7\u6587\u7ae0\u5c31\u6765\u5c06\u4ee3\u7801\u5c01\u88c5\u91cd\u6784\u4e0b\uff0c\u4ee3\u7801\u5c01\u88c5\u4e3b\u8981\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oframe/ogl"},"ogl")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrdoob/three.js"},"threejs"),"\u3002"),(0,i.kt)("h2",{id:"renderer"},"Renderer"),(0,i.kt)("p",null,"\u6e32\u67d3\u5668\u7528\u6765\u6e32\u67d3\u4e00\u4e2a\u573a\u666f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class Renderer {\n  constructor() {\n    this.gl = createGl()\n    this.gl.enable(this.gl.DEPTH_TEST)\n    this.gl.clearColor(0, 0, 0, 0)\n  }\n\n  render(scene, { clear = true } = {}) {\n    const gl = this.gl\n    if (clear) {\n      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)\n    }\n\n    scene.children.forEach(mesh => {\n      mesh.draw(this)\n    })\n  }\n}\n")),(0,i.kt)("h2",{id:"scene"},"Scene"),(0,i.kt)("p",null,"\u4e00\u4e2a\u573a\u666f\u4e2d\u6709\u4e00\u5806\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Mesh"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class Scene {\n  constructor() {\n    this.children = []\n  }\n\n  add(child) {\n    if (this.children.find(c => c === child)) return\n    this.children.push(child)\n  }\n\n  remove(child) {\n    this.children = this.children.filter(c => c !== child)\n  }\n}\n")),(0,i.kt)("h2",{id:"mesh"},"Mesh"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Mesh")," \u4e5f\u5c31\u662f\u6211\u4eec\u8981\u6e32\u67d3\u7684\u6a21\u578b\u3002\u5b83\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"geometry")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"program")," \u7684\u7ec4\u5408\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class Mesh {\n  constructor(geometry, program) {\n    this.geometry = geometry\n    this.program = program\n  }\n\n  draw(renderer) {\n    this.program.use()\n    this.geometry.draw(renderer, this.program, renderer.gl.TRIANGLES)\n  }\n}\n")),(0,i.kt)("h2",{id:"geometry"},"Geometry"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class Geometry {\n  constructor(attributes) {\n    this.drawRange = { start: 0, count: 0 }\n    this.attributes = Object.create(null)\n\n    Object.keys(attributes).forEach((k) => this.setAttribute(k, attributes[k]))\n  }\n\n  setAttribute(name, attribute) {\n    attribute.size = attribute.size || 3\n    attribute.target = attribute.target || 0x8892\n    attribute.stride = attribute.stride || 0\n    attribute.offset = attribute.offset || 0\n    attribute.normalized = attribute.normalized || false\n    attribute.type = attribute.type || attribute.value.constructor === Float32Array ? 0x1406 : attribute.value.constructor === Uint16Array ? 0x1403 : 0x1405\n    attribute.count = attribute.count || (attribute.stride ? attribute.value.byteLength / attribute.stride : attribute.value.length / attribute.size)\n    this.attributes[name] = attribute\n\n    if (name === 'index') {\n      this.drawRange.count = attribute.count\n    } else if (!this.attributes.index) {\n      this.drawRange.count = Math.max(this.drawRange.count, attribute.count)\n    }\n  }\n\n  draw(renderer, program, mode = 0x0004) {\n    const gl = renderer.gl\n\n    const index = this.attributes.index\n    if (index) {\n      if (index.buffer) {\n        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index.buffer)\n      } else {\n        index.buffer = gl.createBuffer()\n        gl.bindBuffer(index.target, index.buffer)\n        gl.bufferData(index.target, index.value, gl.STATIC_DRAW)\n      }\n    }\n\n    program.attributeMap.forEach((loc, { name }) => {\n      const item = this.attributes[name]\n      if (!item) throw new Error(`Cannot found attribute ${name} in geometry`)\n\n      if (!item.buffer) {\n        item.buffer = gl.createBuffer()\n        gl.bindBuffer(item.target, item.buffer)\n        gl.bufferData(item.target, item.value, gl.STATIC_DRAW)\n      }\n\n      gl.bindBuffer(item.target, item.buffer)\n      gl.vertexAttribPointer(loc, item.size, item.type, item.normalized, item.stride, item.offset)\n      gl.enableVertexAttribArray(loc)\n    })\n\n    if (index) {\n      gl.drawElements(mode, this.drawRange.count, index.type, this.drawRange.start)\n    } else {\n      gl.drawArrays(mode, this.drawRange.start, this.drawRange.count)\n    }\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class BoxGeometry extends Geometry {\n  constructor() {\n    super(createBox(1, 1, 1, 1, 1, 1))\n  }\n}\n")),(0,i.kt)("h2",{id:"program"},"Program"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class Program {\n  constructor(renderer, { vs, fs, uniforms = {}, cullFace = renderer.gl.BACK } = {}) {\n    const gl = renderer.gl\n\n    this.renderer = renderer\n    this.uniforms = uniforms\n    this.cullFace = cullFace\n    this.program = gl.createProgram()\n\n    const v = createShader(gl, gl.VERTEX_SHADER, vs)\n    const f = createShader(gl, gl.FRAGMENT_SHADER, fs)\n    gl.attachShader(this.program, v)\n    gl.attachShader(this.program, f)\n    gl.linkProgram(this.program)\n    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {\n      throw new Error(gl.getProgramInfoLog(this.program))\n    }\n    gl.deleteShader(v)\n    gl.deleteShader(f)\n\n    this.uniformMap = new Map()\n    const numUnis = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS)\n    for (let i = 0; i < numUnis; i++) {\n      const uniform = gl.getActiveUniform(this.program, i)\n      this.uniformMap.set(uniform, gl.getUniformLocation(this.program, uniform.name))\n    }\n\n    this.attributeMap = new Map()\n    const numAttribs = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES)\n    for (let i = 0; i < numAttribs; i++) {\n      const attribute = gl.getActiveAttrib(this.program, i)\n      this.attributeMap.set(attribute, gl.getAttribLocation(this.program, attribute.name))\n    }\n  }\n\n  use() {\n    const gl = this.renderer.gl\n    gl.useProgram(this.program)\n\n    if (this.cullFace) {\n      gl.enable(gl.CULL_FACE)\n    } else {\n      gl.disable(gl.CULL_FACE)\n    }\n\n    this.uniformMap.forEach((loc, { name, type }) => {\n      const value = this.uniforms[name]\n\n      if (!value) throw new Error(`${name} is not provided`)\n\n      switch (type) {\n        case 5126:\n            return value.length ? gl.uniform1fv(loc, value) : gl.uniform1f(loc, value); // FLOAT\n        case 35664:\n            return gl.uniform2fv(loc, value); // FLOAT_VEC2\n        case 35665:\n            return gl.uniform3fv(loc, value); // FLOAT_VEC3\n        case 35666:\n            return gl.uniform4fv(loc, value); // FLOAT_VEC4\n        case 35670: // BOOL\n        case 5124: // INT\n        case 35678: // SAMPLER_2D\n        case 35680:\n            return value.length ? gl.uniform1iv(loc, value) : gl.uniform1i(loc, value); // SAMPLER_CUBE\n        case 35671: // BOOL_VEC2\n        case 35667:\n            return gl.uniform2iv(loc, value); // INT_VEC2\n        case 35672: // BOOL_VEC3\n        case 35668:\n            return gl.uniform3iv(loc, value); // INT_VEC3\n        case 35673: // BOOL_VEC4\n        case 35669:\n            return gl.uniform4iv(loc, value); // INT_VEC4\n        case 35674:\n            return gl.uniformMatrix2fv(loc, false, value); // FLOAT_MAT2\n        case 35675:\n            return gl.uniformMatrix3fv(loc, false, value); // FLOAT_MAT3\n        case 35676:\n            return gl.uniformMatrix4fv(loc, false, value); // FLOAT_MAT4\n      }\n    })\n  }\n}\n")))}g.isMDXComponent=!0}}]);