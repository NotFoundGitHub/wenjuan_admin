webpackJsonp([14],{rwnm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("4YfN"),a=n.n(o),r=(n("gyMJ"),n("cjC/")),s=n("2bvH"),i={name:"survey",data:function(){return{}},components:{MyLayout:r.a},computed:a()({},Object(s.c)(["username","nickname"])),methods:a()({},Object(s.b)(["SET_USER"]),{logout:function(){this.$router.push({name:"login"}),window.localStorage.removeItem("username"),this.SET_USERNAME("")}}),mounted:function(){}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("my-layout",[n("div",{attrs:{slot:"head_nav"},slot:"head_nav"},[n("MenuItem",{attrs:{name:"1",to:{name:"mySurvey"}}},[n("Icon",{attrs:{type:"ios-keypad"}}),t._v("我的问卷\n    ")],1),t._v(" "),n("MenuItem",{attrs:{name:"2",to:{name:"addSurvey"}}},[n("Icon",{attrs:{type:"ios-navigate"}}),t._v("增加问卷\n    ")],1),t._v(" "),n("Dropdown",[n("a",{staticStyle:{color:"#fff"},attrs:{href:"javascript:void(0)"}},[t._v("\n        "+t._s(t.nickname)+"\n        "),n("Icon",{attrs:{type:"ios-arrow-down"}})],1),t._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",[t._v(t._s(t.username))]),t._v(" "),n("DropdownItem",{nativeOn:{click:function(e){return t.logout(e)}}},[t._v("退出登录")])],1)],1)],1),t._v(" "),n("div",{attrs:{slot:"card_box"},slot:"card_box"},[n("Card",{style:{"min-width":"800px",margin:"0 auto"}},[n("div",{staticStyle:{"min-height":"400px"}},[n("router-view")],1)])],1)])},staticRenderFns:[]};var c=n("C7Lr")(i,u,!1,function(t){n("v5/X")},"data-v-1d1252f7",null);e.default=c.exports},"v5/X":function(t,e){}});