webpackJsonp([6],{NMam:function(t,e){},dOTO:function(t,e,s){"use strict";function r(t){return Object.prototype.toString.call(t).slice(8,-1)}const i=function(t){if(null===t||void 0===t)return;const e=r(t);if("Date"===e){let e=new Date;return e.setTime(t.getTime()),e}if("Object"===e){if(!0===function(t){let e=[];return function t(s){if(s&&"Object"===r(s)){if(-1!==e.indexOf(s))return!0;for(var i in e.push(s),s)if(!0===s.hasOwnProperty(i)&&t(s[i]))return!0}return!1}(t)}(t))return t;let e={};for(let s in t)e[s]=i(t[s]);return e}if("Array"===e){let e=[];for(var s=0;s<t.length;s++)e.push(i(t[s]));return e}return t};t.exports=i},"fDO+":function(t,e,s){"use strict";var r=s("dOTO"),i=s.n(r),n={data:function(){return{valueList:[],oriList:[]}},props:{list:{type:Array,default:function(){return[]},required:!0}},filters:{},methods:{submit:function(){for(var t in this.list){var e=this.list[t];if(e.required&&!e.value.toString().length)return void this.$Message.error("请输入第"+(+t+1)+"问的值");var s=e.questIndex,r=e._id,i=e.value;this.valueList[t]={questIndex:s,_id:r,value:i}}"surveyPage"==this.$route.name&&this.$emit("submit",this.valueList)},reset:function(){var t=this;this.list.forEach(function(e,s){return e.value=t.oriList[s].value})}},mounted:function(){this.oriList=i()(this.list)}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myForm"},[s("Form",[t._l(t.list,function(e,r){return s("FormItem",{key:t._uid+"_"+r,attrs:{required:e.required}},[s("span",{staticClass:"title"},[e.required?s("span",{staticStyle:{color:"red","font-size":"20px","margin-right":"4px"}},[t._v("*")]):t._e(),t._v("\n        "+t._s(+e.questIndex+1+"."+e.title)+"\n      ")]),t._v(" "),s(e.type,{tag:"component",attrs:{type:e.kind?e.kind:null},model:{value:e.value,callback:function(s){t.$set(e,"value",s)},expression:"item.value"}},[e.children?t._l(e.children.list,function(i,n){return s(e.children.type,{key:t._uid+"_"+r+"_"+n,tag:"component",staticClass:"item",attrs:{label:i.label?i.label:null,value:i.value?i.value:null}},[t._v(t._s(i.title))])}):t._e()],2)],1)}),t._v(" "),s("FormItem",[s("Button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")]),t._v(" "),s("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"warning"},on:{click:t.reset}},[t._v("重置")])],1)],2)],1)},staticRenderFns:[]};var a=s("C7Lr")(n,u,!1,function(t){s("oU2s")},"data-v-2f825023",null);e.a=a.exports},fUXG:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("gyMJ"),i={name:"surveyPage",components:{MyForm:s("fDO+").a},props:{},data:function(){return{spinShow:!0,questList:[]}},watch:{},computed:{},methods:{handleSubmit:function(t){var e=this,s={survey:this.$route.query._id,answers:t};r.a.addAnswer(s).then(function(t){1==t.status?(e.$Message.success(t.msg),e.$router.push({name:"thanks"})):e.$Message.error(t.msg)}).catch(function(t){e.$Message.error("请求错误或网络错误")})}},created:function(){},mounted:function(){var t=this,e=this.$route.query._id;r.a.getQuest({survey:e}).then(function(e){1==e.status?(t.$Message.success(e.msg),t.questList=e.data,t.spinShow=!1):(t.$Message.error(e.msg),t.spinShow=!1)}).catch(function(e){t.$Message.error("请求错误或网络错误"),t.spinShow=!1})}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"questDeatil"},[e("h4",[this._v("题目详情")]),this._v(" "),e("my-form",{attrs:{list:this.questList},on:{submit:this.handleSubmit}}),this._v(" "),this.spinShow?e("Spin",{attrs:{size:"large",fix:""}}):this._e()],1)},staticRenderFns:[]};var u=s("C7Lr")(i,n,!1,function(t){s("NMam")},"data-v-29b469be",null);e.default=u.exports},oU2s:function(t,e){}});