(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{487:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"filtering"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#filtering"}},[t._v("#")]),t._v(" Filtering")]),t._v(" "),n("p",[t._v("Adding Sentry to your app gives you a great deal of very valuable information about errors and performance you wouldn't otherwise get. And lots of information is good -- as long as it's the right information, at a reasonable volume.")]),t._v(" "),n("p",[t._v("The Sentry SDKs have several configuration options to help you filter out events.")]),t._v(" "),n("p",[t._v("We also offer "),n("a",{attrs:{href:"https://docs.sentry.io/product/data-management-settings/filtering/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inbound Filters"),n("OutboundLink")],1),t._v(" to filter events in sentry.io. We recommend filtering at the client level though, because it removes the overhead of sending events you don't actually want.")]),t._v(" "),n("h2",{attrs:{id:"filtering-error-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#filtering-error-events"}},[t._v("#")]),t._v(" Filtering Error Events")]),t._v(" "),n("p",[t._v("Configure your SDK to filter error events by using the "),n("code",[t._v("beforeSend")]),t._v(" callback method and configuring, enabling, or disabling integrations.")]),t._v(" "),n("h3",{attrs:{id:"using-beforesend"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-beforesend"}},[t._v("#")]),t._v(" Using "),n("code",[t._v("beforeSend")])]),t._v(" "),n("p",[t._v("All Sentry SDKs support the "),n("code",[t._v("beforeSend")]),t._v(" callback method. "),n("code",[t._v("beforeSend")]),t._v(" is called immediately before the event is sent to the server, so it’s the final place where you can edit its data. It receives the event object as a parameter, so you can use that to modify the event’s data or drop it completely (by returning "),n("code",[t._v("null")]),t._v(") based on custom logic and the data available on the event.")]),t._v(" "),n("tabs",[n("tab",{attrs:{name:"Java"}},[n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sentry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SentryAndroid")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SentryAndroid")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add a callback that will be used before the event is sent to Sentry.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// With this callback, you can modify the event or, when returning null, also discard the event.")]),t._v("\n  options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBeforeSend")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" environment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEnvironment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("environment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TEST"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])])]),t._v(" "),n("tab",{attrs:{name:"Kotlin"}},[n("div",{staticClass:"language-kotlin line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sentry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SentryAndroid\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sentry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SentryOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BeforeSendCallback\n\nSentryAndroid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add a callback that will be used before the event is sent to Sentry.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// With this callback, you can modify the event or, when returning null, also discard the event.")]),t._v("\n  options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beforeSend "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BeforeSendCallback "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" environment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environment\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("environment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" environment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TEST"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      event\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])])])],1),t._v(" "),n("p",[t._v("Note also that breadcrumbs can be filtered, as discussed in "),n("a",{attrs:{href:"https://docs.sentry.io/product/error-monitoring/breadcrumbs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("our Breadcrumbs documentation"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("h4",{attrs:{id:"event-hints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-hints"}},[t._v("#")]),t._v(" Event Hints")]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("before-send")]),t._v(" callback is passed both the "),n("code",[t._v("event")]),t._v(" and a second argument, "),n("code",[t._v("hint")]),t._v(", that holds one or more hints.")]),t._v(" "),n("p",[t._v("Typically a "),n("code",[t._v("hint")]),t._v(" holds the original exception so that additional data can be extracted or grouping is affected. In this example, the fingerprint is forced to a common value if an exception of a certain type has been caught:")]),t._v(" "),n("p",[t._v("A "),n("code",[t._v("BiFunction<SentryEvent, Object, SentryEvent>")]),t._v(" can be used to mutate, discard (return null), or return a completely new event.")]),t._v(" "),n("tabs",[n("tab",{attrs:{name:"Java"}},[n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sentry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SentryAndroid")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SentryAndroid")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBeforeSend")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hint "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyHint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])])]),t._v(" "),n("tab",{attrs:{name:"Kotlin"}},[n("div",{staticClass:"language-kotlin line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sentry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SentryAndroid\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sentry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SentryOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BeforeSendCallback\n\nSentryAndroid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n  options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beforeSend "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BeforeSendCallback "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hint "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" MyHint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      event\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])])])],1),t._v(" "),n("p",[t._v("When the SDK creates an event or breadcrumb for transmission, that transmission is typically created from some sort of source object. For instance, an error event is typically created from a log record or exception instance. For better customization, SDKs send these objects to certain callbacks ("),n("code",[t._v("beforeSend")]),t._v(", "),n("code",[t._v("beforeBreadcrumb")]),t._v(" or the event processor system in the SDK).")]),t._v(" "),n("h3",{attrs:{id:"using-hints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-hints"}},[t._v("#")]),t._v(" Using Hints")]),t._v(" "),n("p",[t._v("Hints are available in two places:")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("beforeSend")]),t._v(" / "),n("code",[t._v("beforeBreadcrumb")])]),t._v(" "),n("li",[n("code",[t._v("eventProcessors")])])]),t._v(" "),n("p",[t._v("Event and breadcrumb "),n("code",[t._v("hints")]),t._v(" are objects containing various information used to put together an event or a breadcrumb. Typically "),n("code",[t._v("hints")]),t._v(" hold the original exception so that additional data can be extracted or grouping can be affected.")]),t._v(" "),n("p",[t._v("For events, such as "),n("code",[t._v("event_id")]),t._v(", "),n("code",[t._v("originalException")]),t._v(", "),n("code",[t._v("syntheticException")]),t._v(" (used internally to generate cleaner stack trace), and any other arbitrary "),n("code",[t._v("data")]),t._v(" that you attach.")]),t._v(" "),n("p",[t._v("For breadcrumbs, the use of "),n("code",[t._v("hints")]),t._v(" is implementation dependent. For XHR requests, the hint contains the xhr object itself; for user interactions the hint contains the DOM element and event name and so forth.")]),t._v(" "),n("p",[t._v("In this example, the fingerprint is forced to a common value if an exception of a certain type has been caught:")]),t._v(" "),n("tabs",[t._v('">'),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sentry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SentryAndroid")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("database"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sqlite"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SQLiteException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SentryAndroid")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBeforeSend")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getThrowable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SQLiteException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFingerprints")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("asList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"database-connection-error"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")]),t._v(" "),n("tab",{attrs:{name:"Kotlin"}},[n("div",{staticClass:"language-kotlin line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sentry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SentryAndroid\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sentry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SentryOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BeforeSendCallback\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("database"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sqlite"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SQLiteException\n\nSentryAndroid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n  options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beforeSend "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BeforeSendCallback "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hint "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("throwable "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" SQLiteException"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fingerprints "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"database-connection-error"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    event\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])])])],1),t._v(" "),n("h4",{attrs:{id:"hints-for-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hints-for-events"}},[t._v("#")]),t._v(" Hints for Events")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("originalException")])]),t._v(" "),n("p",[t._v("The original exception that caused the Sentry SDK to create the event. This is useful for changing how the Sentry SDK groups events or to extract additional information.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("syntheticException")])]),t._v(" "),n("p",[t._v("When a string or a non-error object is raised, Sentry creates a synthetic exception so you can get a basic stack trace. This exception is stored here for further data extraction.")])])]),t._v(" "),n("h4",{attrs:{id:"hints-for-breadcrumbs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hints-for-breadcrumbs"}},[t._v("#")]),t._v(" Hints for Breadcrumbs")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("event")])]),t._v(" "),n("p",[t._v("For breadcrumbs created from browser events, the Sentry SDK often supplies the event to the breadcrumb as a hint. This, for instance, can be used to extract data from the target DOM element into a breadcrumb.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("level")]),t._v(" / "),n("code",[t._v("input")])]),t._v(" "),n("p",[t._v("For breadcrumbs created from console log interceptions. This holds the original console log level and the original input data to the log function.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("response")]),t._v(" / "),n("code",[t._v("input")])]),t._v(" "),n("p",[t._v("For breadcrumbs created from HTTP requests. This holds the response object (from the fetch API) and the input parameters to the fetch function.")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("request")]),t._v(" / "),n("code",[t._v("response")]),t._v(" / "),n("code",[t._v("event")])]),t._v(" "),n("p",[t._v("For breadcrumbs created from HTTP requests. This holds the request and response object (from the node HTTP API) as well as the node event ("),n("code",[t._v("response")]),t._v(" or "),n("code",[t._v("error")]),t._v(").")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("xhr")])]),t._v(" "),n("p",[t._v("For breadcrumbs created from HTTP requests done via the legacy "),n("code",[t._v("XMLHttpRequest")]),t._v(" API. This holds the original xhr object.")])])]),t._v(" "),n("h3",{attrs:{id:"decluttering-sentry"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#decluttering-sentry"}},[t._v("#")]),t._v(" Decluttering Sentry")]),t._v(" "),n("p",[t._v("When used together with one of the logging framework integrations, the Android SDK captures all error logs as events. If you see a particular kind of error very often that has a "),n("code",[t._v("logger")]),t._v(" tag, you can ignore that particular logger entirely. For more information see our "),n("a",{attrs:{href:"https://docs.sentry.io/platforms/android/integrations/timber/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Timber"),n("OutboundLink")],1),t._v(" integration.")])],1)}),[],!1,null,null,null);s.default=e.exports}}]);