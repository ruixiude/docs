(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{450:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"data-browser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-browser"}},[t._v("#")]),t._v(" Data Browser")]),t._v(" "),s("p",[t._v("The ObjectBox Data Browser is an easy way to view what's happening in your database of your app using a web browser. Browse your app's data and gain insights.")]),t._v(" "),s("h2",{attrs:{id:"objectbox-data-browser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objectbox-data-browser"}},[t._v("#")]),t._v(" ObjectBox - Data Browser")]),t._v(" "),s("p",[t._v("The ObjectBox data browser (Object browser) allows you to")]),t._v(" "),s("ul",[s("li",[t._v("view the Objects and schema of your database inside a regular web browser,")]),t._v(" "),s("li",[t._v("and download Objects in JSON format.")])]),t._v(" "),s("p",[t._v("The Object browser runs directly on your device or on your development machine. Behind the scenes this works by bundling a simple HTTP browser into ObjectBox when building your app. If triggered, it will then provide a basic web interface to the data and schema in your Box Store.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gblobscdn.gitbook.com/assets%2F-LETufmyus5LFkviJjr4%2F-MNvute1ONEB52mlFqSD%2F-MNvv0ZWZClzzJUylHiA%2Fdata-browser.png?alt=media&token=0139f531-f8f8-462d-a4e7-ba7eca738a81",alt:"img"}})]),t._v(" "),s("p",[t._v("The Data Browser web app.")]),t._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),s("p",[t._v("We strongly recommend to use the Object browser "),s("strong",[t._v("only for debug builds")]),t._v(".")]),t._v(" "),s("p",[t._v("Add the "),s("code",[t._v("objectbox-android-objectbrowser")]),t._v(" library to your debug configuration, and the "),s("code",[t._v("objectbox-android")]),t._v(" library to your release configuration. Make sure to also "),s("strong",[t._v("apply the “io.objectbox” plugin after the dependencies block:")])]),t._v(" "),s("div",{staticClass:"language-groovy line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    debugImplementation "),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"io.objectbox:objectbox-android-objectbrowser:'),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("objectboxVersion")]),t._v('"')]),t._v("\n    releaseImplementation "),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"io.objectbox:objectbox-android:'),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("objectboxVersion")]),t._v('"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Apply plugin after dependencies block so they are not overwritten.")]),t._v("\napply plugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'io.objectbox'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("Otherwise the build will fail with a duplicate files error (like "),s("code",[t._v("Duplicate files copied in APK lib/armeabi-v7a/libobjectbox.so")]),t._v(") because the ObjectBox plugin will add the "),s("code",[t._v("objectbox-android")]),t._v(" library again.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("objectbox-android-objectbrowser")]),t._v(" artifact adds required permissions to your "),s("code",[t._v("AndroidManifest.xml")]),t._v(" (since version 2.2.0). The permissions added are:")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Required to provide the web interface --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.INTERNET"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Required to run keep-alive service when targeting API 28 or higher --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.FOREGROUND_SERVICE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("If you only use the browser library for debug builds as recommended above, they will not be added to your release build.")]),t._v(" "),s("p",[t._v("After creating your "),s("code",[t._v("BoxStore")]),t._v(", start the Object browser using an "),s("code",[t._v("AndroidObjectBrowser")]),t._v(" instance. Typically in the "),s("code",[t._v("onCreate()")]),t._v(" method of your "),s("code",[t._v("Application")]),t._v(" class:")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("boxStore "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyObjectBox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("androidContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuildConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DEBUG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" started "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AndroidObjectBrowser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("boxStore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ObjectBrowser"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Started: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" started"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"browse-data-on-your-device"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browse-data-on-your-device"}},[t._v("#")]),t._v(" Browse data on your device")]),t._v(" "),s("p",[t._v("When the app starts an Object browser notification should appear. Tapping it will launch a service to keep the app alive and opens the browser interface in the web browser on the device.")]),t._v(" "),s("p",[t._v("To stop the service keeping your app alive, tap the ‘Stop’ button in the notification.")]),t._v(" "),s("h2",{attrs:{id:"browse-data-on-your-dev-machine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browse-data-on-your-dev-machine"}},[t._v("#")]),t._v(" Browse data on your dev machine")]),t._v(" "),s("p",[t._v("To open the browser website on your development machine check the Logcat output when launching the app. It will print the port and the ADB command needed to forward the port to your machine:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("I/ObjectBrowser: ObjectBrowser started: http://localhost:8090/index.html\nI/ObjectBrowser: Command to forward ObjectBrowser to connected host: adb forward tcp:8090 tcp:8090\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("If available, port 8090 is used by default. So in most cases just run this command on your dev machine:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("adb forward tcp:8090 tcp:8090\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Once the port is forwarded you can open a browser and go to "),s("code",[t._v("http://localhost:8090/index.html")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"download-objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-objects"}},[t._v("#")]),t._v(" Download Objects")]),t._v(" "),s("p",[t._v("When viewing Objects tap the download button at the very bottom. This will download the Objects formatted as JSON.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gblobscdn.gitbook.com/assets%2F-LETufmyus5LFkviJjr4%2F-MNvute1ONEB52mlFqSD%2F-MNvvBAqztJegxEoCarS%2Fdata-browser-download.png?alt=media&token=12533191-8d0d-458a-ae1a-1faa839a584a",alt:"img"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);