(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{505:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"集成测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集成测试"}},[t._v("#")]),t._v(" 集成测试")]),t._v(" "),e("h2",{attrs:{id:"集成测试说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集成测试说明"}},[t._v("#")]),t._v(" 集成测试说明")]),t._v(" "),e("p",[t._v("什么是集成测试？")]),t._v(" "),e("p",[t._v("集成测试是通过收集和展示已注册测试设备发送的日志，来检验SDK集成有效性和完整性的一个服务。 所有由注册设备发送的应用日志将实时地进行展示，您可以方便地查看包括应用版本、渠道名称、自定义事件、页面访问情况等数据，提升集成与调试的工作效率。")]),t._v(" "),e("p",[e("strong",[t._v("注意：")])]),t._v(" "),e("p",[t._v("使用集成测试之后，所有测试数据不会进入应用正式的统计后台，只能在”【管理】—【集成测试】—【实时日志】”里查看，您不必再担心因为测试而导致的数据污染问题，让数据更加真实有效的反应用户使用情况。")]),t._v(" "),e("h2",{attrs:{id:"集成测试准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集成测试准备"}},[t._v("#")]),t._v(" 集成测试准备")]),t._v(" "),e("p",[t._v("首先确认如下内容：")]),t._v(" "),e("ul",[e("li",[t._v("确认已经在App对应的Application.onCreate函数中调用初始化函数UMConfigure.init。")]),t._v(" "),e("li",[t._v("确认所需的权限都已经添加：INTERNET, READ_PHONE_STATE等。")]),t._v(" "),e("li",[t._v("确认AppKey已经正确的在UMConfigure.init中传入，或者已正确写入AndroidManifest.xml。")]),t._v(" "),e("li",[t._v("确认App所有的Activity中都重载了onResume和onPause方法，并在对应的位置调用了MobclickAgent.onResume和MobclickAgent.onPause接口。")]),t._v(" "),e("li",[t._v("确认测试手机(或者模拟器)已成功连入网络。使用集成测试模式请先在程序入口处调用如下代码，打开调试模式：")])]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打开统计SDK调试模式")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UMConfigure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLogEnabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"u-app后台设备添加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#u-app后台设备添加"}},[t._v("#")]),t._v(" U-App后台设备添加")]),t._v(" "),e("p",[t._v("点此进入["),e("a",{attrs:{href:"https://developer.umeng.com/docs/119267/detail/119463",target:"_blank",rel:"noopener noreferrer"}},[t._v("集成测试设备添加的详细说明"),e("OutboundLink")],1),t._v("]")]),t._v(" "),e("h2",{attrs:{id:"集成测试结果查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集成测试结果查看"}},[t._v("#")]),t._v(" 集成测试结果查看")]),t._v(" "),e("p",[t._v("使用集成测试请点击 "),e("a",{attrs:{href:"https://mobile.umeng.com/platform/integration/device",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);