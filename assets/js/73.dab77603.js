(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{430:function(s,n,a){"use strict";a.r(n);var e=a(42),i=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"手动集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动集成"}},[s._v("#")]),s._v(" 手动集成")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("下载"),a("a",{attrs:{href:"https://mtj.baidu.com/web/sdk/index",target:"_blank",rel:"noopener noreferrer"}},[s._v("SDK"),a("OutboundLink")],1),s._v(" 。此文档描述"),a("code",[s._v("手动埋点SDK")]),s._v("配置方式，如果您使用的是"),a("code",[s._v("无埋点")]),s._v("版本，请参考"),a("a",{attrs:{href:"https://mtj.baidu.com/static/userguide/book/android/adconfig/circle/circle.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("可视化埋点"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("创建一个新的Android工程")])]),s._v(" "),a("li",[a("p",[s._v("将下载的SDK对应JAR包放入Android工程libs目录下。如需使用native crash分析功能，将so库放入libs/armeabi目录下；无需使用则不必引入")]),s._v(" "),a("p",[s._v("1）Android Studio工程配置")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://mtj.baidu.com/static/userguide/book/android/sdk/images/android_studio_libs.png",alt:"Android  Studio配置"}})]),s._v(" "),a("p",[s._v("添加完成后，配置build.gradle，将JAR包纳入编译：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" dependencies {\n     // 根据具体JAR名字替换\n     compile files('libs/Baidu_Mtj_3.7.4.2.jar')\n }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("如果需要使用native crash分析统计功能，则需要配置so库纳入编译：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" sourceSets {\n     main {\n         jniLibs.srcDirs = ['libs']\n     }\n }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("2）Eclipse工程配置")]),s._v(" "),a("p",[s._v("直接将JAR包拷贝到libs目录即可，如需使用so库支持native crash分析功能，一并拷贝到libs/ armeabi目录。")])]),s._v(" "),a("li",[a("p",[s._v("配置AndroidManifest.xml")]),s._v(" "),a("p",[s._v("1）添加权限声明")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' <uses-permission android:name="android.permission.INTERNET" />\n <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />\n <uses-permission android:name="android.permission.READ_PHONE_STATE" />\n <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n <uses-permission android:name="android.permission.BLUETOOTH" />\n <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n <uses-permission android:name="android.permission.WRITE_SETTINGS" />\n <uses-permission android:name="android.permission.GET_TASKS" />\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("2）添加业务配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' \x3c!-- 您从百度网站获取的APP KEY，根据实际您的APP申请的APP_KEY进行修改 --\x3e\n <meta-data\n     android:name="BaiduMobAd_STAT_ID"\n     android:value="a9e2ad84a2" /> \n\n \x3c!-- 渠道商编号 --\x3e\n <meta-data\n     android:name="BaiduMobAd_CHANNEL"\n     android:value="Baidu Market" />\n\n \x3c!-- 是否开启错误日志统计，默认为false --\x3e\n <meta-data\n     android:name="BaiduMobAd_EXCEPTION_LOG"\n     android:value="true" />\n\n \x3c!-- 日志仅在wifi网络下发送，默认为false --\x3e\n <meta-data\n     android:name="BaiduMobAd_ONLY_WIFI"\n     android:value="false" />\n\n \x3c!-- 是否获取基站位置信息 ,默认为true --\x3e\n <meta-data\n     android:name="BaiduMobAd_CELL_LOCATION"\n     android:value="true" />\n\n \x3c!-- 是否获取GPS位置信息，默认为true --\x3e\n <meta-data\n     android:name="BaiduMobAd_GPS_LOCATION"\n     android:value="true" />\n\n \x3c!-- 是否获取WIFI位置信息，默认为true --\x3e\n <meta-data\n     android:name="BaiduMobAd_WIFI_LOCATION"\n     android:value="true" />\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Java代码配置")]),s._v(" "),a("p",[s._v("3.7.4.2 版本及之前：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" // 如果没有页面和自定义事件统计埋点，此代码一定要设置，否则无法完成统计\n // 设置发送策略，建议使用 APP_START\n // 由于多进程等可能造成Application多次执行，建议此代码不要埋点在Application中，否则可能造    成启动次数偏高\n // 建议此代码埋点在统计路径触发的第一个页面中，若可能存在多个则建议都埋点\n StatService.setSendLogStrategy(this, SendStrategyEnum.APP_START, 1, false);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("后续版本：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" // 通过该接口可以控制敏感数据采集，true表示可以采集，false表示不可以采集，\n // 该方法一定要最优先调用，请在StatService.start(this)之前调用，采集这些数据可以帮助App运营人员更好的监控App的使用情况，\n // 建议有用户隐私策略弹窗的App，用户未同意前设置false,同意之后设置true\n StatService.setAuthorizedState(Context context,boolean false)\n\n // setSendLogStrategy已经@deprecated，建议使用新的start接口\n // 如果没有页面和自定义事件统计埋点，此代码一定要设置，否则无法完成统计\n // 进程第一次执行此代码，会导致发送上次缓存的统计数据；若无上次缓存数据，则发送空启动日志\n // 由于多进程等可能造成Application多次执行，建议此代码不要埋点在Application中，否则可能造    成启动次数偏高\n // 建议此代码埋点在统计路径触发的第一个页面中，若可能存在多个则建议都埋点\n StatService.start(this);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("编译项目并启动运行，5分钟左右后即可在"),a("a",{attrs:{href:"https://mtj.baidu.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("百度移动统计网站"),a("OutboundLink")],1),s._v("上看到对应的启动数据！")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);