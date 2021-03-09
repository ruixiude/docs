(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{441:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"advanced-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-setup"}},[s._v("#")]),s._v(" Advanced Setup")]),s._v(" "),a("p",[s._v("Additional configuration options when creating an ObjectBox database.")]),s._v(" "),a("h2",{attrs:{id:"objectbox-advanced-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objectbox-advanced-setup"}},[s._v("#")]),s._v(" ObjectBox - Advanced Setup")]),s._v(" "),a("p",[s._v("First, "),a("a",{attrs:{href:"https://docs.objectbox.io/getting-started",target:"_blank",rel:"noopener noreferrer"}},[s._v("add and apply the ObjectBox plugin"),a("OutboundLink")],1),s._v(" to your project.")]),s._v(" "),a("p",[s._v("To then change the default behavior of the ObjectBox plugin and processor read on for advanced setup options.")]),s._v(" "),a("h2",{attrs:{id:"manually-add-libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-add-libraries"}},[s._v("#")]),s._v(" Manually Add Libraries")]),s._v(" "),a("p",[s._v("If the ObjectBox plugin does not automatically add the required library and annotation processor to your dependencies, you can add them manually. In your app’s "),a("code",[s._v("build.gradle")]),s._v(" file, add the objectbox-android library and the objectbox-processor annotation processor.")]),s._v(" "),a("p",[s._v("For Android projects using Java:")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("dependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// all below should be added automatically by the plugin")]),s._v("\n    implementation "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"io.objectbox:objectbox-android:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("objectboxVersion")]),s._v('"')]),s._v("\n    annotationProcessor "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"io.objectbox:objectbox-processor:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("objectboxVersion")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Apply plugin after dependencies block so they are not overwritten.")]),s._v("\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'io.objectbox'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("For Android projects using Kotlin:")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("dependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// all below should be added automatically by the plugin")]),s._v("\n    implementation "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"io.objectbox:objectbox-android:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("objectboxVersion")]),s._v('"')]),s._v("\n    kapt "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"io.objectbox:objectbox-processor:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("objectboxVersion")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// some useful Kotlin extension functions")]),s._v("\n    implementation "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"io.objectbox:objectbox-kotlin:'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("objectboxVersion")]),s._v('"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Apply plugin after dependencies block so they are not overwritten.")]),s._v("\napply plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'io.objectbox'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"change-the-model-file-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-the-model-file-path"}},[s._v("#")]),s._v(" Change the Model File Path")]),s._v(" "),a("p",[s._v("By default the ObjectBox model file is stored in "),a("code",[s._v("module-name/objectbox-models/default.json")]),s._v(". You can change the file path and name by passing the objectbox.modelPath argument to the ObjectBox annotation processor.")]),s._v(" "),a("p",[s._v("In your app’s "),a("code",[s._v("build.gradle")]),s._v(" file, add the necessary processor option.")]),s._v(" "),a("p",[s._v("For Android projects using Java:")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("android "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    defaultConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        javaCompileOptions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            annotationProcessorOptions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                arguments "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"objectbox.modelPath"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("projectDir")]),s._v('/schemas/objectbox.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("For Android projects using Kotlin:")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("kapt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    arguments "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("arg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"objectbox.modelPath"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),s._v("projectDir")]),s._v('/schemas/objectbox.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"change-the-myobjectbox-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-the-myobjectbox-package"}},[s._v("#")]),s._v(" Change the MyObjectBox package")]),s._v(" "),a("blockquote",[a("p",[s._v("Since 1.5.0")])]),s._v(" "),a("p",[s._v("By default the MyObjectBox class is generated in the same or a parent package of your entity classes. You can define a specific package by passing the objectbox.myObjectBoxPackage argument to the ObjectBox annotation processor.")]),s._v(" "),a("p",[s._v("In your app’s "),a("code",[s._v("build.gradle")]),s._v(" file, add the necessary processor option.")]),s._v(" "),a("p",[s._v("For Android projects using Java:")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("android "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    defaultConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        javaCompileOptions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            annotationProcessorOptions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                arguments "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"objectbox.myObjectBoxPackage"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"com.example.custom"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("For Android projects using Kotlin:")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("kapt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    arguments "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("arg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"objectbox.myObjectBoxPackage"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"com.example.custom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"enable-debug-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-debug-mode"}},[s._v("#")]),s._v(" Enable Debug Mode")]),s._v(" "),a("p",[s._v("You can enable debug output for the annotation processor if you encounter issues while setting up your project and entity classes.")]),s._v(" "),a("p",[s._v("In your app’s "),a("code",[s._v("build.gradle")]),s._v(" file, add the necessary options and then run Gradle with the --info  option to see the debug output.")]),s._v(" "),a("p",[s._v("For Android projects using Java:")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("android "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    defaultConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        javaCompileOptions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            annotationProcessorOptions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                arguments "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'objectbox.debug'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("For Android projects using Kotlin:")]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("kapt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    arguments "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("arg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"objectbox.debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"enable-daocompat-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-daocompat-mode"}},[s._v("#")]),s._v(" Enable DaoCompat mode")]),s._v(" "),a("p",[s._v("ObjectBox can help you migrate from greenDAO by generating classes with a greenDAO-like API.")]),s._v(" "),a("p",[s._v("See the "),a("a",{attrs:{href:"http://greenrobot.org/greendao/documentation/objectbox-compat/",target:"_blank",rel:"noopener noreferrer"}},[s._v("DaoCompat documentation"),a("OutboundLink")],1),s._v(" on how to enable and use this feature.")])])}),[],!1,null,null,null);t.default=e.exports}}]);