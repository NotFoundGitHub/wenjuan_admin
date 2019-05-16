webpackJsonp([19],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("xd7I"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var u=n("C7Lr")({name:"App"},a,!1,function(e){n("Z/iV")},null,null).exports,s=n("3XdE"),i=n("2bvH"),o=n("lC5x"),c=n.n(o),p=n("J0Oq"),d=n.n(p),f=n("gyMJ"),m={getUser:function(e){var t=this;return d()(c.a.mark(function n(){var r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.getUser();case 2:r=t.sent,e.commit("SET_NICKNAME",r);case 4:case"end":return t.stop()}},n,t)}))()}},l={SET_USER:function(e,t){e.username=t},SET_NICKNAME:function(e,t){e.nickname=t}},h={username:"",nickname:""},v={};r.default.use(i.a);var w=new i.a.Store({state:h,actions:m,mutations:l,getters:v}),g=n("Jn+4"),x=n.n(g);r.default.use(x.a),r.default.use(s.a);var b=new s.a({routes:[{path:"/",redirect:"/survey/mySurvey"},{path:"/user",component:function(){return n.e(14).then(n.bind(null,"md3T"))},children:[{path:"login",name:"login",component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"PFpV"))},meta:{notLogin:!0}},{path:"regist",name:"regist",component:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"KE/r"))},meta:{notLogin:!0}},{path:"updatePass",name:"updatePass",component:function(){return n.e(8).then(n.bind(null,"vM14"))},meta:{notLogin:!0}}]},{path:"/survey",name:"survey",component:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"rwnm"))},meta:{title:"问卷"},redirect:"/survey/mySurvey",children:[{path:"addSurvey",name:"addSurvey",component:function(){return n.e(11).then(n.bind(null,"j4ED"))},meta:{title:"增加问卷"}},{path:"mySurvey",name:"mySurvey",component:function(){return n.e(2).then(n.bind(null,"LEpT"))},meta:{title:"我的问卷"}},{path:"updateSurvey",name:"updateSurvey",component:function(){return n.e(3).then(n.bind(null,"gvNN"))},meta:{title:"更新问卷"}},{path:"surveyData",name:"surveyData",component:function(){return n.e(1).then(n.bind(null,"WFq6"))},meta:{title:"问卷数据"}}]},{path:"/quests",name:"quests",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"7kz1"))},meta:{title:"我的问卷"},redirect:"/quests/addQuest",children:[{path:"addQuest",name:"addQuest",component:function(){return n.e(7).then(n.bind(null,"2uIA"))},meta:{title:"增加题目",next:"questDeatil",index:0}},{path:"questDeatil",name:"questDeatil",component:function(){return n.e(5).then(n.bind(null,"5A91"))},meta:{title:"问卷详情",next:"publishQuest",pre:"addQuest",index:1}},{path:"publishQuest",name:"publishQuest",component:function(){return n.e(4).then(n.bind(null,"2wa3"))},meta:{title:"发布问卷",pre:"questDeatil",index:2}}]},{path:"/home",component:function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"KR8f"))},redirect:"/home/surveyPage",meta:{notLogin:!0},children:[{path:"surveyPage",name:"surveyPage",component:function(){return n.e(6).then(n.bind(null,"fUXG"))},meta:{notLogin:!0}}]},{path:"/thanks",name:"thanks",component:function(){return n.e(10).then(n.bind(null,"tqLv"))},meta:{notLogin:!0}},{path:"*",name:"404",component:function(){return n.e(13).then(n.bind(null,"fDPW"))},meta:{notLogin:!0}}]});b.beforeEach(function(e,t,n){x.a.LoadingBar.start();var r=w.state.username,a=window.localStorage.getItem("username");e.meta.notLogin||r||a?n():n({name:"login"})}),b.afterEach(function(e){x.a.LoadingBar.finish()});var y=b,k=(n("kroL"),n("qC7U")),S=n.n(k);S.a.config.autoSetContainer=!0,r.default.use(S.a),r.default.config.productionTip=!1,r.default.use(x.a),new r.default({el:"#app",router:y,store:w,components:{App:u},template:"<App/>"})},"Z/iV":function(e,t){},gyMJ:function(e,t,n){"use strict";var r=n("lC5x"),a=n.n(r),u=n("J0Oq"),s=n.n(u),i=n("aozt"),o=n.n(i);o.a.defaults.withCredentials=!0;var c={getUser:function(){var e=this;return s()(a.a.mark(function t(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/api/user/get");case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}},t,e)}))()},login:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/api/user/login",e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},n,t)}))()},regist:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/api/user/regist",e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},n,t)}))()},getVerify:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/api/user/verify",e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},n,t)}))()},modifyPassword:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/api/user/modifyPassword",e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},n,t)}))()},addSurvey:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/api/survey",e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},n,t)}))()},getSurvey:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/api/survey",{params:e});case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},n,t)}))()},updateSurvey:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.put("/api/survey",e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},n,t)}))()},delSurvey:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("/api/survey",{params:e});case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},n,t)}))()},addQuest:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/api/quest",e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},n,t)}))()},getQuest:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/api/quest",{params:e});case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},n,t)}))()},delQuest:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("/api/quest",{params:e});case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},n,t)}))()},addAnswer:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/api/answer",e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},n,t)}))()},getAnswer:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/api/answer",{params:e});case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},n,t)}))()},getHandleArr:function(e){var t=this;return s()(a.a.mark(function n(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/api/handleArr",{params:e});case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},n,t)}))()}};t.a=c},kroL:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.dfe1eacc90ad2d935e6e.js.map