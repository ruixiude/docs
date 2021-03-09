(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{419:function(e,s,n){"use strict";n.r(s);var t=n(42),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"使用指南"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用指南"}},[e._v("#")]),e._v(" 使用指南")]),e._v(" "),n("p",[e._v("MMKV 的使用非常简单，所有变更立马生效，无需调用 "),n("code",[e._v("sync")]),e._v("、"),n("code",[e._v("apply")]),e._v("。")]),e._v(" "),n("h2",{attrs:{id:"配置-mmkv-根目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-mmkv-根目录"}},[e._v("#")]),e._v(" 配置 MMKV 根目录")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("在 App 启动时初始化 MMKV，设定 MMKV 的根目录（files/mmkv/），例如在 "),n("code",[e._v("Application")]),e._v(" 里：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public void onCreate() {\n    super.onCreate();\n\n    String rootDir = MMKV.initialize(this);\n    System.out.println("mmkv root: " + rootDir);\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])])])]),e._v(" "),n("h2",{attrs:{id:"crud-操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#crud-操作"}},[e._v("#")]),e._v(" CRUD 操作")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("MMKV 提供一个"),n("strong",[e._v("全局的实例")]),e._v("，可以直接使用：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('import com.tencent.mmkv.MMKV;\n...\nMMKV kv = MMKV.defaultMMKV();\n\nkv.encode("bool", true);\nSystem.out.println("bool: " + kv.decodeBool("bool"));\n\nkv.encode("int", Integer.MIN_VALUE);\nSystem.out.println("int: " + kv.decodeInt("int"));\n\nkv.encode("long", Long.MAX_VALUE);\nSystem.out.println("long: " + kv.decodeLong("long"));\n\nkv.encode("float", -3.14f);\nSystem.out.println("float: " + kv.decodeFloat("float"));\n\nkv.encode("double", Double.MIN_VALUE);\nSystem.out.println("double: " + kv.decodeDouble("double"));\n\nkv.encode("string", "Hello from mmkv");\nSystem.out.println("string: " + kv.decodeString("string"));\n\nbyte[] bytes = {\'m\', \'m\', \'k\', \'v\'};\nkv.encode("bytes", bytes);\nSystem.out.println("bytes: " + new String(kv.decodeBytes("bytes")));\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br")])]),n("p",[e._v("可以看到，MMKV 在使用上还是比较简单的。")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("删除 & 查询")]),e._v("：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('MMKV kv = MMKV.defaultMMKV();\n\nkv.removeValueForKey("bool");\nSystem.out.println("bool: " + kv.decodeBool("bool"));\n    \nkv.removeValuesForKeys(new String[]{"int", "long"});\nSystem.out.println("allKeys: " + Arrays.toString(kv.allKeys()));\n\nboolean hasBool = kv.containsKey("bool");\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])])]),e._v(" "),n("li",[n("p",[e._v("如果不同业务需要"),n("strong",[e._v("区别存储")]),e._v("，也可以单独创建自己的实例：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('MMKV kv = MMKV.mmkvWithID("MyID");\nkv.encode("bool", true);\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])])]),e._v(" "),n("li",[n("p",[e._v("如果业务需要"),n("strong",[e._v("多进程访问")]),e._v("，那么在初始化的时候加上标志位 "),n("code",[e._v("MMKV.MULTI_PROCESS_MODE")]),e._v("：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('MMKV kv = MMKV.mmkvWithID("InterProcessKV", MMKV.MULTI_PROCESS_MODE);\nkv.encode("bool", true);\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])])])]),e._v(" "),n("h2",{attrs:{id:"支持的数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#支持的数据类型"}},[e._v("#")]),e._v(" 支持的数据类型")]),e._v(" "),n("ul",[n("li",[e._v("支持以下 Java 语言基础类型：\n"),n("ul",[n("li",[n("code",[e._v("boolean、int、long、float、double、byte[]")])])])]),e._v(" "),n("li",[e._v("支持以下 Java 类和容器：\n"),n("ul",[n("li",[n("code",[e._v("String、Set<String>")])]),e._v(" "),n("li",[e._v("任何实现了"),n("code",[e._v("Parcelable")]),e._v("的类型")])])])]),e._v(" "),n("h2",{attrs:{id:"sharedpreferences-迁移"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sharedpreferences-迁移"}},[e._v("#")]),e._v(" SharedPreferences 迁移")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("MMKV 提供了 "),n("code",[e._v("importFromSharedPreferences()")]),e._v(" 函数，可以比较方便地迁移数据过来。")])]),e._v(" "),n("li",[n("p",[e._v("MMKV 还额外实现了一遍 "),n("code",[e._v("SharedPreferences")]),e._v("、"),n("code",[e._v("SharedPreferences.Editor")]),e._v(" 这两个 interface，在迁移的时候只需两三行代码即可，其他 CRUD 操作代码都不用改。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('private void testImportSharedPreferences() {\n    //SharedPreferences preferences = getSharedPreferences("myData", MODE_PRIVATE);\n    MMKV preferences = MMKV.mmkvWithID("myData");\n    // 迁移旧数据\n    {\n        SharedPreferences old_man = getSharedPreferences("myData", MODE_PRIVATE);\n        preferences.importFromSharedPreferences(old_man);\n        old_man.edit().clear().commit();\n    }\n    // 跟以前用法一样\n    SharedPreferences.Editor editor = preferences.edit();\n    editor.putBoolean("bool", true);\n    editor.putInt("int", Integer.MIN_VALUE);\n    editor.putLong("long", Long.MAX_VALUE);\n    editor.putFloat("float", -3.14f);\n    editor.putString("string", "hello, imported");\n    HashSet<String> set = new HashSet<String>();\n    set.add("W"); set.add("e"); set.add("C"); set.add("h"); set.add("a"); set.add("t");\n    editor.putStringSet("string-set", set);\n    // 无需调用 commit()\n    //editor.commit();\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br")])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);