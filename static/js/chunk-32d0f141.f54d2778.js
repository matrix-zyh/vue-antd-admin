(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32d0f141"],{"2bb7":function(e,t,a){},3993:function(e,t,a){"use strict";var r=a("cb92"),o=a.n(r);o.a},"3ca3":function(e,t,a){"use strict";var r=a("6547").charAt,o=a("69f3"),n=a("7dd0"),s="String Iterator",i=o.set,l=o.getterFor(s);n(String,"String",(function(e){i(this,{type:s,string:String(e),index:0})}),(function(){var e,t=l(this),a=t.string,o=t.index;return o>=a.length?{value:void 0,done:!0}:(e=r(a,o),t.index+=e.length,{value:e,done:!1})}))},"4a3e":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-card",{staticClass:"card",attrs:{title:e.$t("repository"),bordered:!1}},[a("repository-form",{ref:"repository",attrs:{showSubmit:!1}})],1),a("a-card",{staticClass:"card",attrs:{title:e.$t("task"),bordered:!1}},[a("task-form",{ref:"task",attrs:{showSubmit:!1}})],1),a("a-card",{attrs:{title:e.$t("user"),bordered:!1}},[a("table-form")],1),a("footer-tool-bar",[a("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.validate}},[e._v(e._s(e.$t("submit")))])],1)],1)},o=[],n=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("a-form",{staticClass:"form",attrs:{autoFormCreate:function(t){return e.form=t}},on:{submit:t.handleSubmit}},[r("a-row",{staticClass:"form-row"},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:t.$t("name"),fieldDecoratorId:"repository.name",fieldDecoratorOptions:{rules:[{required:!0,message:t.$t("nameInput"),whitespace:!0}]}}},[r("a-input",{attrs:{placeholder:t.$t("nameInput")}})],1)],1),r("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:t.$t("domain"),fieldDecoratorId:"repository.domain",fieldDecoratorOptions:{rules:[{required:!0,message:t.$t("domainInput"),whitespace:!0},{validator:t.validate}]}}},[r("a-input",{attrs:{addonBefore:"http://",addonAfter:".github.io",placeholder:t.$t("domainInput")}})],1)],1),r("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:t.$t("manager"),fieldDecoratorId:"repository.manager",fieldDecoratorOptions:{rules:[{required:!0,message:t.$t("managerSelect")}]}}},[r("a-select",{attrs:{placeholder:t.$t("managerSelect")}},[r("a-select-option",{attrs:{value:"王同学"}},[t._v("王同学")]),r("a-select-option",{attrs:{value:"李同学"}},[t._v("李同学")]),r("a-select-option",{attrs:{value:"黄同学"}},[t._v("黄同学")])],1)],1)],1)],1),r("a-row",{staticClass:"form-row"},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:t.$t("approval"),fieldDecoratorId:"repository.auditor",fieldDecoratorOptions:{rules:[{required:!0,message:t.$t("approvalSelect")}]}}},[r("a-select",{attrs:{placeholder:t.$t("approvalSelect")}},[r("a-select-option",{attrs:{value:"王晓丽"}},[t._v("王晓丽")]),r("a-select-option",{attrs:{value:"李军"}},[t._v("李军")])],1)],1)],1),r("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:t.$t("date"),fieldDecoratorId:"repository.effectiveDate",fieldDecoratorOptions:{rules:[{required:!0,message:t.$t("dateSelect")}]}}},[r("a-range-picker",{staticStyle:{width:"100%"}})],1)],1),r("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:t.$t("type"),fieldDecoratorId:"repository.type",fieldDecoratorOptions:{rules:[{required:!0,message:t.$t("typeSelect")}]}}},[r("a-select",{attrs:{placeholder:t.$t("typeSelect")}},[r("a-select-option",{attrs:{value:"公开"}},[t._v("公开")]),r("a-select-option",{attrs:{value:"私密"}},[t._v("私密")])],1)],1)],1)],1),t.showSubmit?r("a-form-item",[r("a-button",{attrs:{htmlType:"submit"}},[t._v("Submit")])],1):t._e()],1)},s=[],i={name:"RepositoryForm",props:["showSubmit"],i18n:a("c3c2"),methods:{handleSubmit:function(e){e.preventDefault(),this.form.validateFields((function(e,t){e||console.log("Received values of form: ",t)}))},validate:function(e,t,a){void 0!==t&&"iczer"!==t&&a("输入'iczer'试下？"),a()}}},l=i,c=(a("3993"),a("2877")),d=Object(c["a"])(l,n,s,!1,null,"1d22f9b0",null),u=d.exports,f=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("a-form",{staticClass:"form",attrs:{autoFormCreate:function(t){return e.form=t}},on:{submit:t.handleSubmit}},[r("a-row",{staticClass:"form-row"},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:"任务名",fieldDecoratorId:"task.name",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入任务名称",whitespace:!0}]}}},[r("a-input",{attrs:{placeholder:"请输入任务名称"}})],1)],1),r("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:"任务描述",fieldDecoratorId:"task.description",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入任务描述",whitespace:!0}]}}},[r("a-input",{attrs:{placeholder:"请输入任务描述"}})],1)],1),r("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:"执行人",fieldDecoratorId:"task.executor",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择执行人"}]}}},[r("a-select",{attrs:{placeholder:"请选择执行人"}},[r("a-select-option",{attrs:{value:"黄丽丽"}},[t._v("黄丽丽")]),r("a-select-option",{attrs:{value:"李大刀"}},[t._v("李大刀")])],1)],1)],1)],1),r("a-row",{staticClass:"form-row"},[r("a-col",{attrs:{lg:6,md:12,sm:24}},[r("a-form-item",{attrs:{label:"责任人",fieldDecoratorId:"task.manager",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择责任人"}]}}},[r("a-select",{attrs:{placeholder:"请选择责任人"}},[r("a-select-option",{attrs:{value:"王伟"}},[t._v("王伟")]),r("a-select-option",{attrs:{value:"李红军"}},[t._v("李红军")])],1)],1)],1),r("a-col",{attrs:{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24}},[r("a-form-item",{attrs:{label:"提醒时间",fieldDecoratorId:"task.time",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择提醒时间"}]}}},[r("a-time-picker",{staticStyle:{width:"100%"}})],1)],1),r("a-col",{attrs:{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24}},[r("a-form-item",{attrs:{label:"任务类型",fieldDecoratorId:"task.type",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择任务类型"}]}}},[r("a-select",{attrs:{placeholder:"请选择任务类型"}},[r("a-select-option",{attrs:{value:"定时执行"}},[t._v("定时执行")]),r("a-select-option",{attrs:{value:"周期执行"}},[t._v("周期执行")])],1)],1)],1)],1),t.showSubmit?r("a-form-item",[r("a-button",{attrs:{htmlType:"submit"}},[t._v("Submit")])],1):t._e()],1)},m=[],p={name:"TaskForm",props:["showSubmit"],methods:{handleSubmit:function(e){e.preventDefault(),this.form.validateFields((function(e,t){e||console.log("Received values of form: ",t)}))}}},v=p,b=(a("fbee"),Object(c["a"])(v,f,m,!1,null,"026688a2",null)),y=b.exports,h=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("form",{attrs:{autoFormCreate:function(t){return e.form=t}}},[r("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1},scopedSlots:t._u([t._l(["name","workId","department"],(function(e,a){return{key:e,fn:function(o,n){return[n.editable?r("a-input",{key:e,staticStyle:{margin:"-5px 0"},attrs:{value:o,placeholder:t.columns[a].title},on:{change:function(a){return t.handleChange(a.target.value,n.key,e)}}}):[t._v(t._s(o))]]}}})),{key:"operation",fn:function(e,a){return[a.editable?[a.isNew?r("span",[r("a",{on:{click:function(e){return t.saveRow(a.key)}}},[t._v("添加")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(e){return t.remove(a.key)}}},[r("a",[t._v("删除")])])],1):r("span",[r("a",{on:{click:function(e){return t.saveRow(a.key)}}},[t._v("保存")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(e){return t.cancle(a.key)}}},[t._v("取消")])],1)]:r("span",[r("a",{on:{click:function(e){return t.toggle(a.key)}}},[t._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(e){return t.remove(a.key)}}},[r("a",[t._v("删除")])])],1)]}}],null,!0)}),r("a-button",{staticStyle:{width:"100%","margin-top":"16px","margin-bottom":"8px"},attrs:{type:"dashed",icon:"plus"},on:{click:t.newMeber}},[t._v("新增成员")])],1)},g=[];a("4de4");function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function k(e){if(Array.isArray(e))return S(e)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function w(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}a("fb6a"),a("b0c0"),a("25f0");function _(e,t){if(e){if("string"===typeof e)return S(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?S(e,t):void 0}}function I(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function $(e){return k(e)||w(e)||_(e)||I()}var D=[{title:"成员姓名",dataIndex:"name",key:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"工号",dataIndex:"workId",key:"workId",width:"20%",scopedSlots:{customRender:"workId"}},{title:"所属部门",dataIndex:"department",key:"department",width:"40%",scopedSlots:{customRender:"department"}},{title:"操作",key:"action",scopedSlots:{customRender:"operation"}}],x=[{key:1,name:"小明",workId:"001",editable:!1,department:"行政部"},{key:2,name:"李莉",workId:"002",editable:!1,department:"IT部"},{key:3,name:"王小帅",workId:"003",editable:!1,department:"财务部"}],O={name:"TableForm",data:function(){return{columns:D,dataSource:x}},methods:{handleSubmit:function(e){e.preventDefault()},newMeber:function(){this.dataSource.push({key:this.dataSource.length+1,name:"",workId:"",department:"",editable:!0,isNew:!0})},remove:function(e){var t=this.dataSource.filter((function(t){return t.key!==e}));this.dataSource=t},saveRow:function(e){var t=this.dataSource.filter((function(t){return t.key===e}))[0];t.editable=!1,t.isNew=!1},toggle:function(e){var t=this.dataSource.filter((function(t){return t.key===e}))[0];t.editable=!t.editable},getRowByKey:function(e,t){var a=this.dataSource;return(t||a).filter((function(t){return t.key===e}))[0]},cancle:function(e){var t=this.dataSource.filter((function(t){return t.key===e}))[0];t.editable=!1},handleChange:function(e,t,a){var r=$(this.dataSource),o=r.filter((function(e){return t===e.key}))[0];o&&(o[a]=e,this.dataSource=r)}}},R=O,C=Object(c["a"])(R,h,g,!1,null,"1d7185f7",null),F=C.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"toolbar"},[a("div",{staticStyle:{float:"left"}},[e._t("extra")],2),a("div",{staticStyle:{float:"right"}},[e._t("default")],2)])},q=[],T={name:"FooterToolBar"},j=T,E=(a("8efc"),Object(c["a"])(j,A,q,!1,null,"0990a56b",null)),M=E.exports,P={name:"AdvancedForm",components:{FooterToolBar:M,TableForm:F,TaskForm:y,RepositoryForm:u},i18n:a("7e9f"),data:function(){return{loading:!1}},computed:{desc:function(){return this.$t("desc")}},methods:{validate:function(){this.$refs.repository.form.validateFields((function(e,t){e||console.log("Received values of form: ",t)})),this.$refs.task.form.validateFields((function(e,t){e||console.log("Received values of form: ",t)}))}}},N=P,B=(a("c916"),Object(c["a"])(N,r,o,!1,null,"1d622e23",null));t["default"]=B.exports},"4df4":function(e,t,a){"use strict";var r=a("0366"),o=a("7b0b"),n=a("9bdd"),s=a("e95a"),i=a("50c4"),l=a("8418"),c=a("35a1");e.exports=function(e){var t,a,d,u,f,m,p=o(e),v="function"==typeof this?this:Array,b=arguments.length,y=b>1?arguments[1]:void 0,h=void 0!==y,g=c(p),S=0;if(h&&(y=r(y,b>2?arguments[2]:void 0,2)),void 0==g||v==Array&&s(g))for(t=i(p.length),a=new v(t);t>S;S++)m=h?y(p[S],S):p[S],l(a,S,m);else for(u=g.call(p),f=u.next,a=new v;!(d=f.call(u)).done;S++)m=h?n(u,y,[d.value,S],!0):d.value,l(a,S,m);return a.length=S,a}},"7e9f":function(e,t){e.exports={messages:{CN:{desc:"高级表单常见于一次性输入和提交大批量数据的场景。",repository:"仓库管理",task:"任务管理",user:"用户管理",submit:"提交"},HK:{desc:"高級表單常見於一次性輸入和提交大批量數據的場景。",repository:"倉庫管理",task:"任務管理",user:"用戶管理",submit:"提交"},US:{desc:"Advanced forms are common in scenarios where large quantities of data are entered and submitted at one time.",repository:"Repository Manage",task:"Task Manage",user:"User Manage",submit:"submit"}}}},"8efc":function(e,t,a){"use strict";var r=a("fd4f"),o=a.n(r);o.a},a630:function(e,t,a){var r=a("23e7"),o=a("4df4"),n=a("1c7e"),s=!n((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:s},{from:o})},c3c2:function(e,t){e.exports={messages:{CN:{name:"仓库名",nameInput:"请输入仓库名称",domain:"仓库域名",domainInput:"请输入域名",manager:"仓库管理员",managerSelect:"请选择管理员",approval:"审批人",approvalSelect:"请选择审批人员",date:"生效日期",dateSelect:"请选择生效日期",type:"仓库类型",typeSelect:"请选择仓库类型"},HK:{name:"倉庫名",nameInput:"請輸入倉庫名稱",domain:"倉庫名稱",domainInput:"請輸入域名",manager:"倉庫管理員",managerSelect:"請選擇管理員",approval:"審批人",approvalSelect:"請選擇審批人員",date:"生效日期",dateSelect:"請選擇生效日期",type:"倉庫類型",typeSelect:"請選擇倉庫類型"},US:{name:"Repository Name",nameInput:"Please enter repository name",domain:"Repository Domain",domainInput:"Please enter domain name",manager:"Repository Manager",managerSelect:"Please select manager",approval:"Approval Person",approvalSelect:"Please select approval person",date:"Effective Date",dateSelect:"Please select the effective date",type:"Repository Type",typeSelect:"Please select repository type"}}}},c916:function(e,t,a){"use strict";var r=a("f10c"),o=a.n(r);o.a},cb92:function(e,t,a){},d28b:function(e,t,a){var r=a("746f");r("iterator")},e01a:function(e,t,a){"use strict";var r=a("23e7"),o=a("83ab"),n=a("da84"),s=a("5135"),i=a("861d"),l=a("9bf2").f,c=a("e893"),d=n.Symbol;if(o&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new d(e):void 0===e?d():d(e);return""===e&&(u[t]=!0),t};c(f,d);var m=f.prototype=d.prototype;m.constructor=f;var p=m.toString,v="Symbol(test)"==String(d("test")),b=/^Symbol\((.*)\)[^)]+$/;l(m,"description",{configurable:!0,get:function(){var e=i(this)?this.valueOf():this,t=p.call(e);if(s(u,e))return"";var a=v?t.slice(7,-1):t.replace(b,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:f})}},f10c:function(e,t,a){},fbee:function(e,t,a){"use strict";var r=a("2bb7"),o=a.n(r);o.a},fd4f:function(e,t,a){}}]);