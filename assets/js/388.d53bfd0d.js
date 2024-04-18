(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{707:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"分区表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分区表"}},[s._v("#")]),s._v(" 分区表")]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("问题")]),s._v(" "),t("p",[s._v("为什么公司规范不让使用分区表？")])]),s._v(" "),t("h2",{attrs:{id:"分区表是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分区表是什么"}},[s._v("#")]),s._v(" 分区表是什么？")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("ftime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("ftime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARSET")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("latin1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" RANGE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("YEAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ftime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" p_2017 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" LESS THAN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" p_2018 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" LESS THAN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" p_2019 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" LESS THAN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" p_others "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" LESS THAN MAXVALUE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" t "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2017-4-1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2018-4-1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/blage-coding/picx-images-hosting@master/20230712/image.4u7vmabhvzq0.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("创建表t，并根据字段ftime的年份映射来划分成四个分区")]),s._v(" "),t("li",[s._v("每个字段都设置对应的分区规则，比如年份小于2017的行记录则放入分区p_2017")])]),s._v(" "),t("p",[s._v("因此分表后：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("对于引擎层来说，相当于有四个ibd表")]),s._v("。")]),s._v(" "),t("li",[t("strong",[s._v("对于server层来说，还是一个表")]),s._v("。")])]),s._v(" "),t("h2",{attrs:{id:"分区表的引擎层行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分区表的引擎层行为"}},[s._v("#")]),s._v(" 分区表的引擎层行为")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/blage-coding/picx-images-hosting@master/20230712/image.6nuf90mbjgc0.webp",alt:""}})]),s._v(" "),t("p",[s._v("对于分区表来说，InnoDB在第一条语句上加锁时，"),t("strong",[s._v("只会在p_2018这一个分区表上加锁")]),s._v("(2017-4-1,supremum)，其它分区表上的数据不会受到影响。")]),s._v(" "),t("p",[s._v("如果表t改成MyISAM引擎，结果依旧类似。"),t("font",{attrs:{color:"red"}},[t("strong",[s._v("MyISAM仅仅支持表锁，并且是在引擎层实现")])]),s._v("，因此sessionA执行后p_2018整个表都会被锁住。而"),t("strong",[s._v("落在其它分区的查询和操作不会受到影响")]),s._v("。")],1),s._v(" "),t("h2",{attrs:{id:"分区表的server层行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分区表的server层行为"}},[s._v("#")]),s._v(" 分区表的server层行为")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/blage-coding/picx-images-hosting@master/20230712/image.4sptkr505yg0.webp",alt:""}})]),s._v(" "),t("p",[t("font",{attrs:{color:"red"}},[t("strong",[s._v("对于DDL语句来说，分区表在server层看来只是一张表")])]),s._v("。")],1),s._v(" "),t("p",[s._v("sessionA持有的MDL锁不是单个分区表的锁，而是整个表t的MDL读锁。因此sessionB会被阻塞住。")]),s._v(" "),t("p",[s._v("而如果是在应用层代码手动分区的表，持有的MDL锁肯定不会阻塞到其它语句的查询，因为普通分表本身表之间都是独立的。")]),s._v(" "),t("h2",{attrs:{id:"分区表的打开表行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分区表的打开表行为"}},[s._v("#")]),s._v(" 分区表的打开表行为")]),s._v(" "),t("p",[s._v("分区表打开表的行为："),t("font",{attrs:{color:"red"}},[t("strong",[s._v("每当第一次访问一个分区表的时候，MySQL需要把所有的分区都访问一遍")])]),s._v("。这也是分区表广受诟病的地方！")],1),s._v(" "),t("p",[s._v("因此如果"),t("strong",[s._v("一个表下创建了很多个分区表")]),s._v("(MySQL启动"),t("font",{staticStyle:{background:"rgb(240, 240, 236)"},attrs:{color:"#d94a33"}},[t("strong",[s._v("open_files_limit")])]),s._v("默认最多打开1024个分区)，那么即使当前SQL语句只用到一个分区，语句执行时也会报错文件打开数过多。")],1),s._v(" "),t("h2",{attrs:{id:"分区表的应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分区表的应用场景"}},[s._v("#")]),s._v(" 分区表的应用场景")]),s._v(" "),t("p",[s._v("总而言之分区表具有以下特点：")]),s._v(" "),t("ul",[t("li",[s._v("优点在于对业务透明，并且相对于手动分表而言，业务代码更加简洁。")]),s._v(" "),t("li",[s._v("💣两个最大的"),t("strong",[s._v("缺点")]),s._v("在于①所有分区表公用MDL锁②第一次访问会打开访问所有的分区。")])]),s._v(" "),t("p",[s._v("✨方便处理历史数据：可以将一项业务的"),t("font",{attrs:{color:"red"}},[t("strong",[s._v("历史数据按照时间线进行分区")])]),s._v("。如果要删除某个时间段的历史数据，直接alter table t drop partition删除某个分区表。它会"),t("strong",[s._v("直接删除分区文件")]),s._v("，速度快。")],1),s._v(" "),t("p",[s._v("✨当然如果有成熟的"),t("strong",[s._v("分库分表中间件")]),s._v("，也可以代替分区表，比如"),t("strong",[s._v("dbrouter")])])])}),[],!1,null,null,null);t.default=r.exports}}]);