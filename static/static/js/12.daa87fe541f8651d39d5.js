webpackJsonp([12],{"KE/r":function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=r("4YfN"),s=r.n(t),i=r("gyMJ"),o=r("2bvH"),l={name:"regist",data:function(){return{formValidate:{nickname:"",username:"",vericode:"",password:""},ruleValidate:{nickname:[{required:!0,message:"用户名不能为空",trigger:"blur"}],username:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"输入正确邮箱格式",trigger:"blur"}],vericode:[{required:!0,message:"验证码不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},computed:s()({},Object(o.c)(["username"])),methods:s()({},Object(o.b)(["SET_USER"]),{handleSubmit:function(e){var a=this;this.$refs[e].validate(function(e){e?i.a.regist(a.formValidate).then(function(e){1==e.status?(a.SET_USER(a.formValidate.username),a.$Message.success(e.msg),window.localStorage.setItem("username",a.formValidate.username),a.$router.push({name:"survey"})):a.$Message.warning(e.msg)}).catch(function(e){a.$Message.error("请求错误或网络错误")}):a.$Message.error("格式错误")})},handleVerify:function(){var e=this,a=this.formValidate.username.trim();a?i.a.getVerify({username:a}).then(function(a){1==a.status?e.$Message.success(a.msg):e.$Message.warning(a.msg)}).catch(function(a){e.$Message.error("请求错误或网络错误")}):this.$Message.info("请输入邮箱账号")},handleReset:function(e){this.$refs[e].resetFields()}})},n={render:function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("Form",{ref:"formValidate",staticClass:"form",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":60}},[r("FormItem",{attrs:{label:"昵称",prop:"nickname"}},[r("Input",{attrs:{placeholder:"输入昵称",clearable:""},model:{value:e.formValidate.nickname,callback:function(a){e.$set(e.formValidate,"nickname",a)},expression:"formValidate.nickname"}},[r("Icon",{attrs:{slot:"prefix",type:"md-person"},slot:"prefix"})],1)],1),e._v(" "),r("FormItem",{attrs:{label:"邮箱",prop:"username"}},[r("Input",{attrs:{placeholder:"输入邮箱",clearable:""},model:{value:e.formValidate.username,callback:function(a){e.$set(e.formValidate,"username",a)},expression:"formValidate.username"}},[r("Icon",{attrs:{slot:"prefix",type:"md-mail"},slot:"prefix"})],1)],1),e._v(" "),r("FormItem",{attrs:{label:"验证码",prop:"vericode"}},[r("Input",{staticStyle:{width:"68%"},attrs:{placeholder:"输入验证码"},model:{value:e.formValidate.vericode,callback:function(a){e.$set(e.formValidate,"vericode",a)},expression:"formValidate.vericode"}},[r("Icon",{attrs:{slot:"prefix",type:"md-mail-open"},slot:"prefix"})],1),e._v(" "),r("Button",{attrs:{shape:"circle"},on:{click:e.handleVerify}},[e._v("发送验证码")])],1),e._v(" "),r("FormItem",{attrs:{label:"密码",prop:"password"}},[r("Input",{attrs:{placeholder:"输入密码",clearable:""},model:{value:e.formValidate.password,callback:function(a){e.$set(e.formValidate,"password",a)},expression:"formValidate.password"}},[r("Icon",{attrs:{slot:"prefix",type:"md-key"},slot:"prefix"})],1)],1),e._v(" "),r("ButtonGroup",{staticClass:"footer",attrs:{shape:"circle",size:"large"}},[r("Button",{attrs:{type:"primary"},on:{click:function(a){return e.handleSubmit("formValidate")}}},[e._v("注册")])],1)],1)],1)},staticRenderFns:[]};var c=r("C7Lr")(l,n,!1,function(e){r("RHYP")},"data-v-2b85d32e",null);a.default=c.exports},RHYP:function(e,a){}});