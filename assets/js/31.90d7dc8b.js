(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{388:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-bcjmb.nitrocdn.com/TnSylzMAaqTUpyZGFJFCauZdmmedkCXh/assets/static/optimized/rev-dbfe93e/wordpress/wp-content/uploads/greenDAO-orm-640.png",alt:"greenDAO-orm-640"}}),e._v("\ngreenDAO is an object/relational mapping (ORM) tool for Android. It offers an object oriented interface to the relational database SQLite. ORM tools like greenDAO do many repetitive tasks for you and offer a simple interface to your data.")]),e._v(" "),a("h2",{attrs:{id:"gradle-plugin-and-dao-code-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle-plugin-and-dao-code-generation"}},[e._v("#")]),e._v(" Gradle plugin and DAO code generation")]),e._v(" "),a("p",[e._v("In order to use greenDAO in your Android project, you need to add the greenDAO Gradle plugin and add the greenDAO library. See the "),a("a",{attrs:{href:"https://github.com/greenrobot/greenDAO#add-greendao-to-your-project",target:"_blank",rel:"noopener noreferrer"}},[e._v("README on GitHub for instructions"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Then "),a("a",{attrs:{href:"http://greenrobot.org/greendao/documentation/modelling-entities/",target:"_blank",rel:"noopener noreferrer"}},[e._v("model your entities"),a("OutboundLink")],1),e._v(" and make your project, for example using "),a("strong",[e._v("Build > Make Project")]),e._v(" in Android Studio.")]),e._v(" "),a("h2",{attrs:{id:"core-classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-classes"}},[e._v("#")]),e._v(" Core Classes")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-bcjmb.nitrocdn.com/TnSylzMAaqTUpyZGFJFCauZdmmedkCXh/assets/static/optimized/rev-dbfe93e/wordpress/wp-content/uploads/Core-Classes-150.png",alt:"Core-Classes-150"}})]),e._v(" "),a("p",[e._v("Once you have "),a("strong",[e._v("defined at least one entity and built your project")]),e._v(", you can start using greenDAO in your Android project.")]),e._v(" "),a("p",[e._v("The following core classes are the essential interface to greenDAO:")]),e._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"http://greenrobot.org/files/greendao/javadoc/current/org/greenrobot/greendao/AbstractDaoMaster.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("DaoMaster"),a("OutboundLink")],1),e._v(":")]),e._v(" The entry point for using greenDAO. DaoMaster holds the database object (SQLiteDatabase) and manages DAO classes (not objects) for a specific schema. It has static methods to create the tables or drop them. Its inner classes OpenHelper and DevOpenHelper are SQLiteOpenHelper implementations that create the schema in the SQLite database.")]),e._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"http://greenrobot.org/files/greendao/javadoc/current/org/greenrobot/greendao/AbstractDaoSession.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("DaoSession"),a("OutboundLink")],1),e._v(":")]),e._v(" Manages all available DAO objects for a specific schema, which you can acquire using one of the getter methods. DaoSession provides also some generic persistence methods like insert, load, update, refresh and delete for entities. Lastly, a DaoSession objects also keeps track of an identity scope. For more details, have a look at the "),a("a",{attrs:{href:"http://greenrobot.org/greendao/documentation/sessions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("session documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"http://greenrobot.org/files/greendao/javadoc/current/org/greenrobot/greendao/AbstractDao.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("DAOs"),a("OutboundLink")],1),e._v(":")]),e._v(" Data access objects (DAOs) persists and queries for entities. For each entity, greenDAO generates a DAO. It has more persistence methods than DaoSession, for example: count, loadAll, and insertInTx.")]),e._v(" "),a("p",[a("strong",[e._v("Entities:")]),e._v(" Persistable objects. Usually, entities are objects representing a database row using standard Java properties (like a POJO or a JavaBean).")]),e._v(" "),a("h2",{attrs:{id:"core-initialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-initialization"}},[e._v("#")]),e._v(" Core Initialization")]),e._v(" "),a("p",[e._v("Finally, the first steps to initialize the database and the core greenDAO classes:")]),e._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// do this once, for example in your Application class")]),e._v("\nhelper "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("DaoMaster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("DevOpenHelper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"notes-db"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\ndb "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" helper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getWritableDatabase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\ndaoMaster "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("DaoMaster")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\ndaoSession "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" daoMaster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("newSession")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// do this in your activities/fragments to get hold of a DAO")]),e._v("\nnoteDao "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" daoSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getNoteDao")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[a("em",[e._v("Note: "),a("strong",[e._v("do not use DaoMaster.DevOpenHelper in production")]),e._v(", it drops all tables on schema changes (in onUpgrade()). Create and use your own subclass of DaoMaster.OpenHelper instead.")])]),e._v(" "),a("p",[e._v("The example assumes a Note entity exists. With its DAO ( noteDao object), we can call the persistence operation for this specific entity.")])])}),[],!1,null,null,null);t.default=n.exports}}]);