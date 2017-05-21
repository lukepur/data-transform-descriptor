webpackJsonp([1],[,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=n(2),a=n(73),s=n(66),o=n.n(s);r.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"DataTransformTester",component:o.a}]})},function(t,e,n){"use strict";var r=n(2),a=n(15),s=n(21);r.a.use(a.b),e.a=new a.b.Store({modules:{ref:s.a}})},function(t,e,n){n(64);var r=n(1)(n(26),n(71),null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),a=n(18),s=n(19),o=n.n(s),u=n(17);r.a.config.productionTip=!1,new r.a({el:"#app",store:a.a,router:u.a,render:function(t){return t(o.a)}})},function(t,e,n){"use strict";var r=n(22),a={transformers:function(t){return t.transformers}};e.a={modules:{transformers:r.a},getters:a}},function(t,e,n){"use strict";var r=n(24),a=n(25),s=n(23),o=[r.a,a.a,s.a];e.a={state:o}},function(t,e,n){"use strict";var r=n(7),a=n.n(r),s={targets:{presence:!0,dataType:"array_of_number"}},o={output:{presence:!0,dataType:"number"}},u=function(t){return t.targets.reduce(function(t,e){return t+e},0)},i={name:"Add Array"};e.a=a()(s,o,u,i)},function(t,e,n){"use strict";var r=n(7),a=n.n(r),s={a:{presence:!0,dataType:"number"},b:{presence:!0,dataType:"number"}},o={output:{presence:!0,dataType:"number"}},u=function(t){return t.a+t.b},i={name:"Add"};e.a=a()(s,o,u,i)},function(t,e,n){"use strict";var r=n(7),a=n.n(r),s={a:{presence:!0,dataType:"number"},b:{presence:!0,dataType:"number"}},o={output:{presence:!0,dataType:"number"}},u=function(t){return t.a-t.b},i={name:"Subtract"};e.a=a()(s,o,u,i)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),a=n.n(r),s=n(15),o=n(68),u=n.n(o);e.default={name:"data-transformer-tester",data:function(){return{selectedTransformerIndex:-1,input:{}}},computed:a()({},n.i(s.a)({transformers:"transformers"}),{selectedTransformer:function(){return this.transformers[this.selectedTransformerIndex]},selectedTransformerInputConstraints:function(){return this.selectedTransformer?this.selectedTransformer.meta().inputConstraints:null}}),methods:{onTransformerChange:function(t){this.selectedTransformerIndex=t.target.value,this.input={}},update:function(t){this.input=a()({},t)}},components:{EditorObject:u.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"editor-number",props:{name:String,constraints:Object,value:[Number,String],update:Function}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(32),a=n.n(r),s=n(8),o=n.n(s),u=n(67),i=n.n(u);e.default={name:"editor-object",props:{name:String,constraints:Object,value:Object,update:Function},methods:{updateFnFor:function(t){var e=this;return function(n){e.update(o()({},e.value,a()({},t,n)))}}},components:{numberEditor:i.a}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},,function(t,e,n){n(63);var r=n(1)(n(27),n(70),"data-v-787ef3cb",null);t.exports=r.exports},function(t,e,n){var r=n(1)(n(28),n(72),null,null);t.exports=r.exports},function(t,e,n){var r=n(1)(n(29),n(69),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-container editor-object"},[n("h5",[t._v(t._s(t.name))]),t._v(" "),n("div",{staticClass:"object-items"},t._l(t.constraints,function(e,r){return n("div",{staticClass:"object-item"},[n(e.dataType+"Editor",{tag:"component",attrs:{name:r,constraints:e,value:t.value[r],update:t.updateFnFor(r)}})],1)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"data-transform-tester"},[n("h3",[t._v("Data Transform Tester")]),t._v(" "),n("div",[n("div",{staticClass:"transform-selector-container"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"tranform-selector"}},[t._v("Transformer")]),t._v(" "),n("select",{staticClass:"form-control",attrs:{id:"transform-selector","v-bind":t.selectedTransformerIndex},on:{change:t.onTransformerChange}},[n("option",{attrs:{selected:"",disabled:""}},[t._v("Select a transformer")]),t._v(" "),t._l(t.transformers,function(e,r){return n("option",{domProps:{value:r}},[t._v(t._s(e.meta().name))])})],2)]),t._v(" "),n("div",{staticClass:"inputs-container"},[n("EditorObject",{attrs:{name:"$",constraints:t.selectedTransformerInputConstraints,update:t.update,value:t.input}})],1),t._v(" "),n("div",[n("span",[t._v("Input: "+t._s(JSON.stringify(t.input))+" ")])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("router-view",{staticClass:"col"})],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("h1",[t._v("data-transform-descriptor")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-container editor-number"},[n("div",{staticClass:"form-group"},[n("label",[t._v(t._s(t.name))]),t._v(" "),n("input",{attrs:{type:"number"},domProps:{value:t.value},on:{change:function(e){return t.update(e.target.value)}}})])])},staticRenderFns:[]}}],[20]);
//# sourceMappingURL=app.1e4055effeca1e57425f.js.map