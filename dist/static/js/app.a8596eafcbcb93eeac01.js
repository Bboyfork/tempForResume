webpackJsonp([1],{"+oR9":function(e,t){},"66po":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("kV13"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-link",{attrs:{to:{path:"/"}}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var s=n("C7Lr")({name:"App"},a,!1,function(e){n("+oR9")},null,null).exports,o=n("5inH"),i=n("CtzY"),l=n.n(i),u={name:"HelloWorld",data:function(){return{userName:"",passWord:""}},methods:{signIn:function(){var e=this;this.axios.post("http://111.229.222.96:8081/ali/signIn",l.a.parse({userName:this.userName,passWord:this.passWord})).then(function(t){console.log(t.data),"success"===t.data&&(console.log("登录成功"),e.$router.push({path:"/HelloWorld2"})),"falseeee"===t.data&&alert("账户&密码错误")}).catch(function(e){console.log(13333+e)})}}},p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{attrs:{src:n("n8CQ")}}),e._v(" "),r("img",{attrs:{src:n("zs4t")}}),e._v(" "),r("div",{staticClass:"hello"},[e._v("\n    简陋的实现一下"),r("br"),e._v("\n    啊啊啊里里里里登录"),r("br"),e._v("\n    账号密码 admin 123456"),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",placeholder:"账号号号"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.passWord,expression:"passWord"}],attrs:{type:"password",placeholder:"密码码码"},domProps:{value:e.passWord},on:{input:function(t){t.target.composing||(e.passWord=t.target.value)}}}),r("br"),e._v(" "),r("div",{attrs:{type:"submit"},on:{click:function(t){return e.signIn()}}},[e._v("登陆")])])])},staticRenderFns:[]};var c=n("C7Lr")(u,p,!1,function(e){n("66po")},null,null).exports,d={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n登录成功ggg\n  ")])},staticRenderFns:[]};var m=n("C7Lr")({name:"HelloWorld2",data:function(){return{}}},d,!1,function(e){n("ZMVr")},null,null).exports;r.a.use(o.a);var v=new o.a({routes:[{path:"/",name:"HelloWorld",component:c},{path:"/HelloWorld2",component:m}]}),f=n("I29D"),g=n.n(f),h=n("Iufj"),_=n.n(h);r.a.use(_.a,g.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:v,components:{App:s},template:"<App/>"})},ZMVr:function(e,t){},n8CQ:function(e,t,n){e.exports=n.p+"static/img/img_1.86a1c27.png"},zs4t:function(e,t,n){e.exports=n.p+"static/img/img_2.9759bf1.jpg"}},["NHnr"]);
//# sourceMappingURL=app.a8596eafcbcb93eeac01.js.map