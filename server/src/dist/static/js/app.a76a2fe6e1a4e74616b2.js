webpackJsonp([1],{"6jg2":function(t,e){},"7zck":function(t,e){},"9IOw":function(t,e){},LPQh:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return"/login"!==this.$route.path?a("div",[a("v-navigation-drawer",{attrs:{fixed:"",app:"",clipped:t.$vuetify.breakpoint.lgAndUp},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-tile",{on:{click:function(e){t.navigateTo({name:"dashboard"})}}},[a("v-list-tile-action",[a("v-icon",[t._v("home")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Home")])],1)],1),t._v(" "),a("v-list-tile",{on:{click:function(e){t.navigateTo({name:"register"})}}},[a("v-list-tile-action",[a("v-icon",[t._v("contact_mail")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Contact")])],1)],1)],1)],1),t._v(" "),a("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",app:"","clipped-left":t.$vuetify.breakpoint.lgAndUp}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),a("v-toolbar-title",{staticClass:"header-title",on:{click:function(e){t.navigateTo({path:"/"})}}},[t._v("Todo")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-menu",{attrs:{"offset-y":"","open-on-hover":""}},[a("v-btn",{attrs:{slot:"activator",flat:"",dark:""},slot:"activator"},[t._v(t._s(this.$store.state.user.name)+" "+t._s(this.$store.state.user.surname))]),t._v(" "),a("v-list",t._l(t.navItems,function(e){return a("v-list-tile",{key:e.title,on:{click:function(a){t.userMenu(e.title)}}},[a("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1)],1)],1):t._e()},staticRenderFns:[]};var o={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var i={name:"App",data:function(){return{}},components:{PageHeader:a("VU/8")({data:function(){return{drawer:!1,navItems:[{title:"Logout"},{title:"Register"}]}},methods:{navigateTo:function(t){this.$router.push(t)},userMenu:function(t){"Logout"===t?(this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({path:"/login"})):this.$router.push({name:"register"})}}},s,!1,function(t){a("aPQa")},"data-v-bd2287e2",null).exports,PageFooter:a("VU/8")({data:function(){return{}}},o,!1,function(t){a("v9Rg")},"data-v-00215a88",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{id:"inspire"}},[e("page-header"),this._v(" "),e("v-content",[e("v-container",{attrs:{fluid:""}},[e("router-view")],1)],1),this._v(" "),e("page-footer")],1)],1)},staticRenderFns:[]};var l=a("VU/8")(i,r,!1,function(t){a("SKhs")},null,null).exports,c=a("/ocq"),d=a("mtWM"),u=a.n(d),v=a("NYxO"),p=a("424j");n.a.use(v.a);var f=new v.a.Store({strict:!0,plugins:[Object(p.a)()],state:{token:null,user:null,isUserLoggedIn:!1},mutations:{setToken:function(t,e){t.token=e,t.isUserLoggedIn=!!e},setUser:function(t,e){t.user=e}},actions:{setToken:function(t,e){(0,t.commit)("setToken",e)},setUser:function(t,e){(0,t.commit)("setUser",e)}}}),m=function(){return u.a.create({baseUrl:"http://46.101.167.54/",headers:{Authorization:"Bearer "+f.state.token}})},h=function(t){return m().post("/new-project",t)},_=function(){return m().get("/projectsGetter")},g=function(t){return m().get("/getProject/"+t)},x=function(t){return m().post("/editProject/"+t._id,t)},b={data:function(){return{pagination:{sortBy:"status"},search:"",selected:[],startDateMenu:"",headers:[{text:"Project Name",align:"left",value:"name"},{text:"Phase",value:"phase"},{text:"Start Date",value:"start"},{text:"Planned Finish",value:"finish"},{text:"Status",value:"status"}],items:[],loading:!0}},methods:{navigateTo:function(t){this.$router.push(t)},showProject:function(t){this.$router.push({name:"showProject",params:{id:t}})}},created:function(){var t=this;_().then(function(e){t.loading=!1,t.items=e.data.data}).catch(function(e){t.loading=!1,console.log(e.data)})}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm10:"",md10:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dense:"",dark:"",color:"indigo"}},[a("v-toolbar-title",[t._v("Projects")])],1),t._v(" "),a("v-card-title",[a("v-btn",{attrs:{color:"primary",small:"",dark:""},on:{click:function(e){t.navigateTo({name:"newProject"})}}},[t._v("New Project")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-card-text",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,search:t.search,loading:t.loading,items:t.items},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"pointer",on:{click:function(a){t.showProject(e.item._id)}}},[t._v(t._s(e.item.projectName))]),t._v(" "),a("td",{class:e.item.phase},[t._v(t._s(e.item.phase))]),t._v(" "),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.startDate))]),t._v(" "),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.finishDate))]),t._v(" "),a("td",{staticClass:"text-xs-left"},[a("v-chip",{attrs:{color:e.item.status,small:"",outline:""}},[t._v(t._s(e.item.status))])],1)]}}])},[a("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}),t._v(" "),a("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v('\n            Your search for "'+t._s(t.search)+'" found no results.\n          ')])],1)],1)],1)],1)],1)},staticRenderFns:[]};var j=a("VU/8")(b,k,!1,function(t){a("6jg2")},"data-v-4288ab5a",null).exports,D=function(t){return m().post("register",t)},w=function(t){return m().post("login",t)},y={data:function(){return{credentials:{username:"",password:""},loading:!1,snackbar:!1,y:"top",x:null,mode:"",timeout:6e3,snackText:""}},methods:{submit:function(){var t=this;this.loading=!0,w(this.credentials).then(function(e){e.data.error?(t.loading=!1,t.snackbar=!0,t.snackText=e.data.error):(t.loading=!1,t.$store.dispatch("setToken",e.data.token),t.$store.dispatch("setUser",e.data.user),t.$router.push({name:"dashboard"}))}).catch(function(e){t.loading=!1,console.log(e.data)})}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dense:"",dark:"",color:"indigo"}},[a("v-toolbar-title",[t._v("Login")]),t._v(" "),a("v-spacer")],1),t._v(" "),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{"prepend-icon":"person",label:"Login",type:"text"},model:{value:t.credentials.username,callback:function(e){t.$set(t.credentials,"username",e)},expression:"credentials.username"}}),t._v(" "),a("v-text-field",{attrs:{"prepend-icon":"lock",label:"Password",id:"password",type:"password"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.submit(e):null}},model:{value:t.credentials.password,callback:function(e){t.$set(t.credentials,"password",e)},expression:"credentials.password"}})],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",dark:"",loading:t.loading},on:{click:t.submit}},[t._v("Login")])],1)],1)],1),t._v(" "),a("v-snackbar",{attrs:{timeout:t.timeout,top:"top"===t.y,bottom:"bottom"===t.y,right:"right"===t.x,left:"left"===t.x,"multi-line":"multi-line"===t.mode,vertical:"vertical"===t.mode},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackText)+"\n    "),a("v-btn",{attrs:{flat:"",color:"pink"},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)},staticRenderFns:[]};var P=a("VU/8")(y,$,!1,function(t){a("U2XJ")},"data-v-d3ca1b56",null).exports,M={data:function(){return{credentials:{username:"",password:"",name:"",surname:"",permission:""},password2:"",snackbar:!1,y:"top",x:null,mode:"",timeout:6e3,snackText:"",permissionsList:["Admin","User"],loading:!1}},methods:{submit:function(){var t=this;this.loading=!0,this.credentials.password===this.password2?D(this.credentials).then(function(e){e.data.error?(t.snackbar=!0,t.loading=!1,t.snackText="Something Went Wrong..."):(t.loading=!1,console.log(e.data.user),t.$store.dispatch("setToken",e.data.token),t.$store.dispatch("setUser",e.data.user),t.$router.push({name:"dashboard"}))}).catch(function(e){t.loading=!1,console.log(e)}):(this.snackbar=!0,this.loading=!1,this.snackText="პაროლი ერთმანეთს არ ემთხვევა")}}},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md8:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dense:"",dark:"",color:"indigo"}},[a("v-toolbar-title",[t._v("Register")]),t._v(" "),a("v-spacer")],1),t._v(" "),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{"prepend-icon":"email",label:"Email",type:"text"},model:{value:t.credentials.username,callback:function(e){t.$set(t.credentials,"username",e)},expression:"credentials.username"}}),t._v(" "),a("v-text-field",{attrs:{"prepend-icon":"person",label:"Name",type:"text"},model:{value:t.credentials.name,callback:function(e){t.$set(t.credentials,"name",e)},expression:"credentials.name"}}),t._v(" "),a("v-text-field",{attrs:{"prepend-icon":"person",label:"Surname",type:"text"},model:{value:t.credentials.surname,callback:function(e){t.$set(t.credentials,"surname",e)},expression:"credentials.surname"}}),t._v(" "),a("v-select",{attrs:{"prepend-icon":"star",label:"Permission",items:t.permissionsList},model:{value:t.credentials.permission,callback:function(e){t.$set(t.credentials,"permission",e)},expression:"credentials.permission"}}),t._v(" "),a("v-text-field",{attrs:{"prepend-icon":"lock",label:"Password",id:"password",type:"password"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.submit(e):null}},model:{value:t.credentials.password,callback:function(e){t.$set(t.credentials,"password",e)},expression:"credentials.password"}}),t._v(" "),a("v-text-field",{attrs:{"prepend-icon":"lock",label:"Re-type Password",id:"password2",type:"password"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.submit(e):null}},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}})],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",loading:t.loading},on:{click:t.submit}},[t._v("Register")])],1)],1),t._v(" "),a("v-snackbar",{attrs:{timeout:t.timeout,top:"top"===t.y,bottom:"bottom"===t.y,right:"right"===t.x,left:"left"===t.x,"multi-line":"multi-line"===t.mode,vertical:"vertical"===t.mode},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackText)+"\n    "),a("v-btn",{attrs:{flat:"",color:"pink"},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)],1)},staticRenderFns:[]};var C=a("VU/8")(M,T,!1,function(t){a("YB27")},"data-v-f4622532",null).exports,S={data:function(){return{headline:"New Project",projectName:"",phase:"",loading:!1,startDate:"",sDate:"",fDate:"",finishDate:"",description:"",status:"",newProject:{phases:["Pre-Study","Planning","Execution","Closing"],status:["In-Progress","On-Hold","Postponed","Canceled","Complete"]}}},methods:{navigateTo:function(t){this.$router.push(t)},save:function(){var t=this;this.loading=!0;var e={projectName:this.projectName,phase:this.phase,startDate:this.startDate,finishDate:this.finishDate,description:this.description,status:this.status,author:this.$store.state.user};h(e).then(function(e){t.loading=!1,e.data.error?console.log(e.data.error):(t.loading=!1,t.navigateTo({name:"dashboard"}))}).catch(function(t){console.log(t.data)})},close:function(){this.navigateTo({name:"dashboard"})}}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[a("v-card",{staticClass:"elevation-5"},[a("v-toolbar",{attrs:{dense:"",dark:"",color:"indigo"}},[a("v-toolbar-title",[t._v("New Project")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.navigateTo("/")}}},[a("v-icon",[t._v("arrow_back")])],1)],1),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("v-text-field",{attrs:{label:"Project name"},model:{value:t.projectName,callback:function(e){t.projectName=e},expression:"projectName"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-select",{attrs:{label:"Phase",items:t.newProject.phases},model:{value:t.phase,callback:function(e){t.phase=e},expression:"phase"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-select",{attrs:{label:"Status",items:t.newProject.status},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-menu",{ref:"startDate",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":t.sDate},on:{"update:returnValue":function(e){t.sDate=e}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}},[a("v-text-field",{attrs:{slot:"activator",label:"Start Date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.sDate,callback:function(e){t.sDate=e},expression:"sDate"}}),t._v(" "),a("v-date-picker",{on:{input:function(e){t.$refs.startDate.save(t.sDate)}},model:{value:t.sDate,callback:function(e){t.sDate=e},expression:"sDate"}})],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-menu",{ref:"finishDate",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":t.fDate},on:{"update:returnValue":function(e){t.fDate=e}},model:{value:t.finishDate,callback:function(e){t.finishDate=e},expression:"finishDate"}},[a("v-text-field",{attrs:{slot:"activator",label:"Finish Date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.fDate,callback:function(e){t.fDate=e},expression:"fDate"}}),t._v(" "),a("v-date-picker",{on:{input:function(e){t.$refs.finishDate.save(t.fDate)}},model:{value:t.fDate,callback:function(e){t.fDate=e},expression:"fDate"}})],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("v-text-field",{attrs:{label:"Short Description","multi-line":""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.close(e)}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",loading:t.loading,flat:""},nativeOn:{click:function(e){return t.save(e)}}},[t._v("Save")])],1)],1)],1)],1)},staticRenderFns:[]};var N=a("VU/8")(S,U,!1,function(t){a("o7Xa")},"data-v-3932361c",null).exports,E=function(t){return m().post("newTask",t)},V=function(t){return m().get("tasksGetter/"+t.id)},R=function(t){return m().post("modifyTask/"+t[0]._id,t)},F=function(t){return m().post("deleteTask/"+t._id,t)},O={props:["selected","edited"],data:function(){return{header:"Details",header2:"Edit Mode",editMode:!0,loading:!1,dateMenu:!1,timeMenu:!1}},methods:{save:function(){var t=this;this.loading=!0;var e=[];e.push(this.selected),e.push(this.$store.state.user),R(e).then(function(e){e.data.error?(t.loading=!1,console.log(e.data.error)):(t.loading=!1,t.edited.push("done"))})}},created:function(){}},z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:""}},[t.editMode?a("h4",[t._v(t._s(t.header))]):t._e(),t._v(" "),t.editMode?t._e():a("h4",[t._v(t._s(t.header2))]),t._v(" "),a("div",{staticClass:"elevation-3 white"},[a("v-toolbar",{staticClass:"white",attrs:{dense:"",flat:""}},[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.editMode=!t.editMode}}},[a("v-icon",{attrs:{color:"orange"}},[t._v("edit")])],1)],1),t._v(" "),t.editMode?a("div",{staticClass:"background"},[a("h3",[t._v("Title: ")]),a("p",[t._v(t._s(t.selected.title))]),t._v(" "),a("h3",[t._v("Description: ")]),t._v(" "),a("p",[t._v(t._s(t.selected.body))]),t._v(" "),a("h3",[t._v("Due Date:")]),t._v(" "),a("p",[t._v(t._s(t.selected.deadline.date)+" / "+t._s(t.selected.deadline.time))])]):t._e()],1),t._v(" "),t.editMode?t._e():a("v-container",{staticClass:"elevation-3 background",attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.selected.title,callback:function(e){t.$set(t.selected,"title",e)},expression:"selected.title"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Description","multi-line":""},model:{value:t.selected.body,callback:function(e){t.$set(t.selected,"body",e)},expression:"selected.body"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md6:"",sm4:""}},[a("v-menu",{ref:"dateMenu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":t.selected.deadline.date},on:{"update:returnValue":function(e){t.$set(t.selected.deadline,"date",e)}},model:{value:t.dateMenu,callback:function(e){t.dateMenu=e},expression:"dateMenu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Due Date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.selected.deadline.date,callback:function(e){t.$set(t.selected.deadline,"date",e)},expression:"selected.deadline.date"}}),t._v(" "),a("v-date-picker",{on:{input:function(e){t.$refs.dateMenu.save(t.selected.deadline.date)}},model:{value:t.selected.deadline.date,callback:function(e){t.$set(t.selected.deadline,"date",e)},expression:"selected.deadline.date"}})],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md6:"",sm4:""}},[a("v-menu",{ref:"timeMenu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,format:"ampm","max-width":"290px","min-width":"290px","return-value":t.selected.deadline.time},on:{"update:returnValue":function(e){t.$set(t.selected.deadline,"time",e)}},model:{value:t.timeMenu,callback:function(e){t.timeMenu=e},expression:"timeMenu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Due Time","prepend-icon":"access_time",readonly:""},slot:"activator",model:{value:t.selected.deadline.time,callback:function(e){t.$set(t.selected.deadline,"time",e)},expression:"selected.deadline.time"}}),t._v(" "),a("v-time-picker",{on:{change:function(e){t.$refs.timeMenu.save(t.selected.deadline.time)}},model:{value:t.selected.deadline.time,callback:function(e){t.$set(t.selected.deadline,"time",e)},expression:"selected.deadline.time"}})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"success",loading:t.loading},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var L={props:["createdTodo"],data:function(){return{loading:!1,title:"",body:"",dateMenu:"",timeMenu:"",date:null,time:null,status:!0}},methods:{submit:function(){var t=this;this.loading=!0;var e={title:this.title,body:this.body,status:this.status,deadline:{date:this.date,time:this.time},author:this.$store.state.user,projectId:this.$route.params.id};E(e).then(function(e){if(e.data.error)console.log(e.data.error);else{t.loading=!1;var a=e.data.todo;t.createdTodo.push({toggleComp:!0}),t.createdTodo.push(a)}}).catch(function(t){console.log(t)})}}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:""}},[a("h4",[t._v("New")]),t._v(" "),a("v-container",{staticClass:"elevation-3 background",attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Description","multi-line":""},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md6:"",sm4:""}},[a("v-menu",{ref:"dateMenu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":t.date},on:{"update:returnValue":function(e){t.date=e}},model:{value:t.dateMenu,callback:function(e){t.dateMenu=e},expression:"dateMenu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Due Date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),a("v-date-picker",{on:{input:function(e){t.$refs.dateMenu.save(t.date)}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md6:"",sm4:""}},[a("v-menu",{ref:"timeMenu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,format:"ampm","max-width":"290px","min-width":"290px","return-value":t.time},on:{"update:returnValue":function(e){t.time=e}},model:{value:t.timeMenu,callback:function(e){t.timeMenu=e},expression:"timeMenu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Due Time","prepend-icon":"access_time",readonly:""},slot:"activator",model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),t._v(" "),a("v-time-picker",{on:{change:function(e){t.$refs.timeMenu.save(t.time)}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",loading:t.loading},on:{click:t.submit}},[t._v("Submit")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var A={components:{TodoDetails:a("VU/8")(O,z,!1,function(t){a("v67v")},"data-v-a86a6876",null).exports,NewTaskComponent:a("VU/8")(L,I,!1,function(t){a("9IOw")},"data-v-dae4b012",null).exports},data:function(){return{newTodoComponent:!1,todoDetailsComponent:!1,headers:[{text:"Body",align:"left",sortable:!1,value:"name"},{text:"Reg. Date",value:"regDate"},{text:"Deadline",value:"deadline"},{text:"Status",value:"status"}],items:[],loading:!1,selected:[],edited:[],createdTodo:[]}},watch:{createdTodo:function(t){this.createdTodo[0].toggleComp&&(this.newTodoComponent=!1,this.items.push(this.createdTodo[1]))},edited:function(){"done"===this.edited[0]&&(this.todoDetailsComponent=!1)}},methods:{todoSelected:function(t){this.selected=t,this.newTodoComponent=!1,this.todoDetailsComponent=!0},newTodo:function(){this.newTodoComponent=!0,this.todoDetailsComponent=!1},completeTask:function(t,e){var a=this;this.loading=!0,F(t).then(function(t){a.loading=!1,a.items.splice(e,1)})}},created:function(){var t=this;V({id:this.$route.params.id}).then(function(e){t.items=e.data.todos}).catch(function(t){console.log(t)})}},H={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("h4",{staticClass:"pointer",on:{click:t.newTodo}},[t._v("Tasks")]),t._v(" "),a("div",{staticClass:"lines"}),t._v(" "),a("ul",{staticClass:"list elevation-3"},t._l(t.items,function(e,n){return a("li",{staticClass:"lines"},[a("v-btn",{attrs:{icon:""},on:{click:function(a){t.completeTask(e,n)}}},[a("v-icon",{attrs:{color:"green"}},[t._v("done")])],1),t._v(" "),a("span",{staticClass:"pointer",on:{click:function(a){t.todoSelected(e)}}},[t._v(t._s(e.title))]),t._v(" "),a("span",{staticClass:"right"},[a("v-icon",[t._v("date_range")]),t._v(t._s(e.deadline.date.slice(5)))],1)],1)}))]),t._v(" "),t.todoDetailsComponent?a("Todo-Details",{attrs:{xs12:"",selected:t.selected,edited:t.edited}}):t._e(),t._v(" "),t.newTodoComponent?a("New-Task-Component",{attrs:{xs12:"",createdTodo:t.createdTodo}}):t._e()],1)],1)},staticRenderFns:[]};var B={components:{TodoIndex:a("VU/8")(A,H,!1,function(t){a("LPQh")},"data-v-72b1f576",null).exports},data:function(){return{project:{},descPanel:!1,loading:!1,editMode:!1,phases:["Pre-Study","Planning","Execution","Closing"],status:["In-Progress","On-Hold","Postponed","Canceled","Complete"],dateMenu:!1,dateMenu2:!1}},methods:{mode:function(){this.editMode=!this.editMode,this.descPanel=!0},changeProject:function(){var t=this;this.loading=!0,x(this.project).then(function(e){t.loading=!1,console.log(e.data)}).catch(function(e){t.loading=!1,console.log(e.data)})}},created:function(){var t=this;g(this.$route.params.id).then(function(e){t.project=e.data.project}).catch(function(t){console.log(t.data)})}},J={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{staticClass:"grid-list-md"},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("div",{staticStyle:{display:"inline-block"}},[a("h3",{staticClass:"display-3 left"},[t._v(t._s(t.project.projectName))]),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:t.mode}},[a("v-icon",{attrs:{color:"orange"}},[t._v("edit")])],1)],1),t._v(" "),t.editMode?t._e():a("table",[a("tr",[a("td",[a("strong",[t._v("Project Phase: ")])]),t._v(" "),a("td",{class:t.project.phase},[t._v(t._s(t.project.phase))])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Project Status: ")])]),t._v(" "),a("td",{class:t.project.status},[t._v(t._s(t.project.status))])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Project Start Date: ")])]),t._v(" "),a("td",[t._v(t._s(t.project.startDate))])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Project Finish Date: ")])]),t._v(" "),a("td",[t._v(t._s(t.project.finishDate))])]),t._v(" "),a("tr",[a("td",{staticClass:"pointer",on:{click:function(e){t.descPanel=!t.descPanel}}},[t._v("Show Description")])])]),t._v(" "),t.editMode?a("table",[a("tr",[a("td",[a("strong",[t._v("Project Name: ")])]),t._v(" "),a("td",[a("v-text-field",{model:{value:t.project.projectName,callback:function(e){t.$set(t.project,"projectName",e)},expression:"project.projectName"}})],1)]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Project Phase: ")])]),t._v(" "),a("td",[a("v-select",{attrs:{items:t.phases},model:{value:t.project.phase,callback:function(e){t.$set(t.project,"phase",e)},expression:"project.phase"}})],1)]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Project Status: ")])]),t._v(" "),a("td",[a("v-select",{attrs:{items:t.status},model:{value:t.project.status,callback:function(e){t.$set(t.project,"status",e)},expression:"project.status"}})],1)]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Project Start Date: ")])]),t._v(" "),a("td",[a("v-menu",{ref:"dateMenu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":t.project.startDate},on:{"update:returnValue":function(e){t.$set(t.project,"startDate",e)}},model:{value:t.dateMenu,callback:function(e){t.dateMenu=e},expression:"dateMenu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Start Date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.project.startDate,callback:function(e){t.$set(t.project,"startDate",e)},expression:"project.startDate"}}),t._v(" "),a("v-date-picker",{on:{input:function(e){t.$refs.dateMenu.save(t.project.startDate)}},model:{value:t.project.startDate,callback:function(e){t.$set(t.project,"startDate",e)},expression:"project.startDate"}})],1)],1)]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Project Finish Date: ")])]),t._v(" "),a("td",[a("v-menu",{ref:"dateMenu2",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":t.project.finishDate},on:{"update:returnValue":function(e){t.$set(t.project,"finishDate",e)}},model:{value:t.dateMenu2,callback:function(e){t.dateMenu2=e},expression:"dateMenu2"}},[a("v-text-field",{attrs:{slot:"activator",label:"Start Date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.project.finishDate,callback:function(e){t.$set(t.project,"finishDate",e)},expression:"project.finishDate"}}),t._v(" "),a("v-date-picker",{on:{input:function(e){t.$refs.dateMenu2.save(t.project.finishDate)}},model:{value:t.project.finishDate,callback:function(e){t.$set(t.project,"finishDate",e)},expression:"project.finishDate"}})],1)],1)])]):t._e()]),t._v(" "),t.descPanel?a("v-flex",{staticClass:"mt-4",attrs:{md4:""}},[a("h2",[t._v("Short Description")]),t._v(" "),t.editMode?t._e():a("p",{staticClass:"mt-3"},[t._v(t._s(t.project.description))]),t._v(" "),t.editMode?a("v-text-field",{attrs:{color:"red","multi-line":"",label:"Description"},model:{value:t.project.description,callback:function(e){t.$set(t.project,"description",e)},expression:"project.description"}}):t._e(),t._v(" "),a("div",[t.editMode?a("v-btn",{staticStyle:{float:"right"},attrs:{small:"",loading:t.loading,color:"primary"},on:{click:t.changeProject}},[t._v("Save")]):t._e()],1)],1):t._e()],1),t._v(" "),a("v-divider",{staticClass:"my-3"}),t._v(" "),a("v-container",[a("todo-index",{staticClass:"mr-2"})],1)],1)},staticRenderFns:[]};var Q=a("VU/8")(B,J,!1,function(t){a("PbwE")},"data-v-135e0b38",null).exports;n.a.use(c.a);var W=new c.a({mode:"history",routes:[{path:"/",name:"dashboard",component:j},{path:"/new-project",name:"newProject",component:N},{path:"/project/show/:id",name:"showProject",component:Q},{path:"/login",name:"login",component:P},{path:"/register",name:"register",component:C}]}),X=a("3EgV"),Y=a.n(X),q=a("9JMe");a("7zck");n.a.config.productionTip=!1,n.a.use(Y.a),Object(q.sync)(f,W),new n.a({el:"#app",router:W,store:f,components:{App:l},template:"<App/>"})},PbwE:function(t,e){},SKhs:function(t,e){},U2XJ:function(t,e){},YB27:function(t,e){},aPQa:function(t,e){},o7Xa:function(t,e){},v67v:function(t,e){},v9Rg:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a76a2fe6e1a4e74616b2.js.map