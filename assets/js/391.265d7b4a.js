(window.webpackJsonp=window.webpackJsonp||[]).push([[391],{709:function(t,s,a){"use strict";a.r(s);var r=a(4),_=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mysql性能提高方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql性能提高方案"}},[t._v("#")]),t._v(" MySQL性能提高方案")]),t._v(" "),s("h2",{attrs:{id:"短连接模式问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#短连接模式问题"}},[t._v("#")]),t._v(" 短连接模式问题")]),t._v(" "),s("p",[t._v("短连接模式：线程连接到数据库后，"),s("strong",[t._v("执行完很少的SQL就直接断开")]),t._v("。")]),t._v(" "),s("p",[t._v("MySQL建立连接成本高，包括三次握手以及登录权限校验。因此连接资源非常珍贵，如果某个连接处理SQL比较慢，就会出现以下情况：")]),t._v(" "),s("ul",[s("li",[t._v("连接数暴涨，超过max_connections后"),s("strong",[t._v("数据库就会拒绝连接")]),t._v("，业务上看数据库处于不可用状态。")]),t._v(" "),s("li",[t._v("如果调高max_connections的值，可能导致"),s("strong",[t._v("系统负载进一步扩大")]),t._v("，已经连接的线程可能拿不到CPU资源执行SQL业务。")])]),t._v(" "),s("p",[s("font",{staticStyle:{background:"rgb(240, 240, 236)"},attrs:{color:"#d94a33"}},[s("strong",[t._v("max_connections")])]),t._v("："),s("strong",[t._v("最大连接数")]),t._v("。超过该阈值后拒绝后续所有线程的连接。")],1),t._v(" "),s("p",[s("font",{staticStyle:{background:"rgb(240, 240, 236)"},attrs:{color:"#d94a33"}},[s("strong",[t._v("wait_timeout")])]),t._v("："),s("strong",[t._v("最大线程空闲时长")]),t._v("。当一个线程空闲wait_timeout秒后，就会被MySQL直接踢掉断开连接。")],1),t._v(" "),s("p",[t._v("💡异常连接和断开很常见，业务端代码要保证有"),s("strong",[t._v("连接重试")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"方案一、占据连接不工作的线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案一、占据连接不工作的线程"}},[t._v("#")]),t._v(" 方案一、占据连接不工作的线程")]),t._v(" "),s("p",[s("strong",[t._v("事务外空闲连接")]),t._v("：一些select查询语句，短查询。断开连接后影响不大。")]),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[s("strong",[t._v("如果连接数过多，可以断开事务外空闲太久的连接，还不够可以断开事务内空闲太久的连接")])]),t._v("。而如何找到并判断哪些线程是空闲的连接，哪些是事务中的连接？可以通过如下语句查看"),s("strong",[t._v("具体事务状态")]),t._v("：")],1),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" information_schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innodb_trx\\G\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("font",{staticStyle:{background:"rgb(240, 240, 236)"},attrs:{color:"#d94a33"}},[s("strong",[t._v("trx_mysql_thread_id")])]),t._v("会显示还处在事务中的线程id，因此剩余的线程就是空闲的事务之外的。在服务端使用下面语句断开连接5，此时连接5的线程发起下次请求后会报错，提示已断开连接。")],1),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" connection "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"方案二、减少连接过程的消耗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案二、减少连接过程的消耗"}},[t._v("#")]),t._v(" 方案二、减少连接过程的消耗")]),t._v(" "),s("p",[t._v("场景：短连接数暴增，数据库被"),s("strong",[t._v("多个连接行为")]),t._v("打挂了，而实际连接的线程数量还没有达到最大阈值。")]),t._v(" "),s("p",[t._v("方案：可以使用"),s("font",{staticStyle:{background:"rgb(240, 240, 236)"},attrs:{color:"#d94a33"}},[s("strong",[t._v("-skip-grant-tables")])]),t._v("参数重启数据库，这样"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("整个MySQL会跳过所有的权限验证阶段，包括连接过程和语句执行过程")])]),t._v("。")],1),t._v(" "),s("p",[t._v("问题：数据库存在安全问题。")]),t._v(" "),s("h2",{attrs:{id:"慢查询性能问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#慢查询性能问题"}},[t._v("#")]),t._v(" 慢查询性能问题")]),t._v(" "),s("p",[t._v("在上线之前，可以"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("通过模拟数据对数据库进行预排查")])]),t._v("，从而节省下故障复盘时间：")],1),t._v(" "),s("ol",[s("li",[t._v("上线前在测试环境，把慢查询日志(slow log)打开，同时把long_query_time设置为0，"),s("strong",[t._v("保证所有SQL语句都会被记录在慢查询日志")]),t._v("。")]),t._v(" "),s("li",[t._v("在测试表插入模拟线上的数据，做一遍回归测试。")]),t._v(" "),s("li",[t._v("观察慢查询日志里每类语句的输出，并留意"),s("font",{staticStyle:{background:"rgb(240, 240, 236)"},attrs:{color:"#d94a33"}},[s("strong",[t._v("Rows_examined")])]),t._v("字段(server层统计)扫描行数是否符合预期。")],1),t._v(" "),s("li",[t._v("可以使用开源工具pt-query-digest分析所有SQL语句返回的结果。")])]),t._v(" "),s("p",[t._v("MySQL引发慢查询的性能问题，大体上包含如下三种可能，下面具体分析以下三种情况以及对应的解决方案。")]),t._v(" "),s("h3",{attrs:{id:"情况一、索引没有设计好"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#情况一、索引没有设计好"}},[t._v("#")]),t._v(" 情况一、索引没有设计好")]),t._v(" "),s("p",[t._v("MySQL支持Online DDL，在这种场景下"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("通过紧急创建索引来解决")])]),t._v("。在上线或者并发场景下，最高效的做法就是直接执行alter table语句。")],1),t._v(" "),s("p",[t._v("假设数据库服务是一主一备，那么DDL方案如下，虽然比较古老但是"),s("strong",[t._v("效率是最高")]),t._v("的：")]),t._v(" "),s("ol",[s("li",[t._v("备库上执行set sql_log_bin=off，不写binlog，然后执行alter table语句在备库上添加索引。")]),t._v(" "),s("li",[t._v("执行主备切换")]),t._v(" "),s("li",[t._v("在由主库切换过来的备库上执行set sql_log_bin=off，然后执行alter table，与当前主库保持同步。")])]),t._v(" "),s("p",[t._v("更稳妥的方案是采用gh-ost这样的方案。")]),t._v(" "),s("h3",{attrs:{id:"情况二、语句没写好"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#情况二、语句没写好"}},[t._v("#")]),t._v(" 情况二、语句没写好")]),t._v(" "),s("p",[t._v("SQL语句没写好导致没有使用上B+树索引的快速定位功能。")]),t._v(" "),s("p",[t._v("MySQL5.7提供"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("query_rewrite")])]),t._v("语句重写功能。具体来说可以"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("提前在MySQL中插入一条新的规则匹配样式")])]),t._v("，当前客户端的SQL查询语句如果满足规则，则MySQL会"),s("strong",[t._v("自动修改")]),t._v("为性能更高的SQL语句。")],1),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" query_rewrite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rewrite_rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" replacement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern_database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select * from t where id + 1 = ?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select * from t where id = ? - 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"db1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("call")]),t._v(" query_rewrite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flush_rewrite_rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"情况三、mysql选错了索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#情况三、mysql选错了索引"}},[t._v("#")]),t._v(" 情况三、MySQL选错了索引")]),t._v(" "),s("p",[t._v("方案：直接在原语句或者在查询重写上"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("加force index")])]),t._v("，指定SQL语句使用哪个索引。")],1),t._v(" "),s("h2",{attrs:{id:"qps暴增问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qps暴增问题"}},[t._v("#")]),t._v(" QPS暴增问题")]),t._v(" "),s("p",[t._v("某个SQL语句的QPS暴涨，或者是"),s("strong",[t._v("某个新功能bug")]),t._v("，导致整个MySQL压力过大。")]),t._v(" "),s("p",[t._v("最理想的解决方案是让业务把整个“功能”下掉，具体可以有以下几种方法：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("方案一：全新的业务bug导致。DB运维如果比较规范，此时可以业务方将功能下掉，然后"),s("strong",[t._v("数据库方面直接将相关的白名单")]),t._v("去掉。")])]),t._v(" "),s("li",[s("p",[t._v("方案二：如果这个功能是单独特定数据库用户导致的。那么可以用管理员账号"),s("strong",[t._v("直接删除该用户，断开现有连接")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("方案三：如果这个功能和主体功能是部署在一起并且是耦合的。可以通过"),s("strong",[t._v("控制功能对应的SQL语句")]),t._v("来降低QPS，比如可以利用上面的SQL重写，"),s("font",{attrs:{color:"red"}},[s("strong",[t._v("把所有压力大的SQL语句全都改写为“select 1”并返回")])]),t._v("。")],1)])]),t._v(" "),s("p",[t._v("上述方案一二的依赖于规范的运维体系。方案三如果业务和功能耦合度比较高，可能会影响误伤其它的业务，所以仅适合应急情况下的止血处理。")]),t._v(" "),s("h2",{attrs:{id:"磁盘io瓶颈问题解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#磁盘io瓶颈问题解决方案"}},[t._v("#")]),t._v(" 磁盘IO瓶颈问题解决方案")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("方案一、设置binlog_group_commit_sync_delay和binlog_group_commit_sync_no_delay_count两个参数，延长刷盘的时机，减少磁盘IO次数。")]),t._v(" "),s("p",[t._v("缺点：可能会延长SQL语句的i响应时间")])]),t._v(" "),s("li",[s("p",[t._v("方案二、设置sync_binlog改为大于1，分组刷盘提交")]),t._v(" "),s("p",[t._v("缺点：数据库宕机可能会导致内存中N个事务日志的丢失")])]),t._v(" "),s("li",[s("p",[t._v("方案三、设置innodb_flush_log_at_trx_commit为0，将redolog写到文件系统的page cache")]),t._v(" "),s("p",[t._v("缺点：主机断电丢失redolog")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);