(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{711:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"监控mysql状态是否正常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监控mysql状态是否正常"}},[s._v("#")]),s._v(" 监控MySQL状态是否正常")]),s._v(" "),t("p",[t("font",{staticStyle:{background:"rgb(240, 240, 236)"},attrs:{color:"#d94a33"}},[t("strong",[s._v("innodb_thread_concurrency")])]),s._v("：控制InnoDB"),t("strong",[s._v("并发线程")]),s._v("上限，一旦超过这个阈值，InnoDB接收到新的请求时就会进入等待状态。一般情况下设置为64~128之间某个值。")],1),s._v(" "),t("p",[s._v("想要检测当前MySQL状态是否正常，实际上相当于检测当前并发线程数是否过多超出了阈值，导致系统不可用。")]),s._v(" "),t("h2",{attrs:{id:"select-1判断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#select-1判断"}},[s._v("#")]),s._v(" select 1判断")]),s._v(" "),t("p",[s._v("如果通过select 1成功返回，只能说明这个库的进程还在(即使当前并发线程数已经达到上限也能够正常返回)，但是对某个数据表的查询依然会继续阻塞。因此通过select 1并不能检查当前数据库的状态是否可用。")]),s._v(" "),t("p",[t("strong",[s._v("并发连接")]),s._v("：执行show processlist结果看到的连接数，一般情况下并发连接数会大于并发线程数，")]),s._v(" "),t("p",[t("strong",[s._v("并发查询/并发线程")]),s._v("：真正"),t("strong",[s._v("消耗CPU资源")]),s._v("，正在执行查询事务的线程数量。")]),s._v(" "),t("p",[s._v("某个线程进入查询事务时，"),t("font",{attrs:{color:"red"}},[t("strong",[s._v("如果遇到锁等待，那么该线程就不会算入当前MySQL的并发线程数当中，“并发线程”计数减一")])]),s._v("。因为进入锁等待后，该线程并"),t("strong",[s._v("不会吃CPU资源")]),s._v("，最多也就占用内存。MySQL这么设计的原因主要有两个：")],1),s._v(" "),t("ul",[t("li",[s._v("提高数据库的并发能力")]),s._v(" "),t("li",[s._v("避免整个系统锁住。防止出现CPU利用率为0而整个数据库处于不可用的状态。")])]),s._v(" "),t("h2",{attrs:{id:"查表判断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查表判断"}},[s._v("#")]),s._v(" 查表判断")]),s._v(" "),t("p",[s._v("在系统库创建一个表，里面随便放入一行数据，并"),t("strong",[s._v("定期执行")]),s._v("。相比于上面一种方法，因为这里是具体对某个表的查询，因此超过并发线程数时会被阻塞。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("health_check"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("💣存在的问题：磁盘空间占用率占满后就不能正常写binlog，后续所有"),t("strong",[s._v("更新语句")]),s._v("和事务提交都会被阻塞住。而此时系统是可以正常"),t("strong",[s._v("读数据")]),s._v("的，感受不到磁盘的情况。")]),s._v(" "),t("h2",{attrs:{id:"更新判断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新判断"}},[s._v("#")]),s._v(" 更新判断")]),s._v(" "),t("p",[s._v("在外部表上将查询语句改为"),t("strong",[s._v("执行更新语句")]),s._v("，因为更新语句会提交事务并且写binlog，所以如果磁盘空间不足就会超时不返回，从而确认“当前系统不可用”。")]),s._v(" "),t("p",[s._v("而对于一主多从的结构，因为主备库都会执行更新检测，执行时机存在先后差异，并且存在行冲突。因此系统活性表需要"),t("strong",[s._v("以每个主备库的"),t("font",{staticStyle:{background:"rgb(240, 240, 236)"},attrs:{color:"#d94a33"}},[s._v("server_id")]),s._v("作为主键")],1),s._v("来更新插入行记录("),t("strong",[s._v("主备库的"),t("font",{staticStyle:{background:"rgb(240, 240, 236)"},attrs:{color:"#d94a33"}},[s._v("server_id")]),s._v("是不同且唯一的")],1),s._v(")，每个库各自维护自己的检测时间。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("health_check"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("t_modified"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@server_id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("duplicate")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" t_modified"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("💣存在的问题：“"),t("strong",[s._v("判定慢")]),s._v("”。具体来说，上述更新语句需要的IO资源少，执行比较快且能立刻返回。可能下一时刻系统上的SQL就已经执行的很慢了，而前一时刻DBA拿到更新语句的返回结果，还认为“当前数据库系统正常”。")]),s._v(" "),t("p",[t("font",{attrs:{color:"red"}},[t("strong",[s._v("外部检测的缺陷在于，检测查询的时机是随机的，可能系统在当前时刻就已经出现问题，却需要等到下一次检测才能发现")])]),s._v("。")],1),s._v(" "),t("h2",{attrs:{id:"内部统计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内部统计"}},[s._v("#")]),s._v(" 内部统计")]),s._v(" "),t("p",[t("font",{staticStyle:{background:"rgb(240, 240, 236)"},attrs:{color:"#d94a33"}},[t("strong",[s._v("performance_schema")])]),s._v("库中的"),t("font",{staticStyle:{background:"rgb(240, 240, 236)"},attrs:{color:"#d94a33"}},[t("strong",[s._v("file_summary_by_event_name")])]),s._v("表统计了每次IO请求的时间，"),t("strong",[s._v("通过内部每次IO请求的时间(比如单次IO耗时超过阈值)，判断出当前数据库是否因为磁盘利用率导致系统不可用")]),s._v("。")],1),s._v(" "),t("p",[s._v("因为每次操作数据库，"),t("font",{staticStyle:{background:"rgb(240, 240, 236)"},attrs:{color:"#d94a33"}},[t("strong",[s._v("performance_schema")])]),s._v("都会统计IO的时间戳信息，是有损的。因此只需要打开用到的统计功能。")],1),s._v(" "),t("ul",[t("li",[t("p",[s._v('binlog对应的行数据是event_name="wait/io/file/sql/binlog"')])]),s._v(" "),t("li",[t("p",[s._v("执行以下语句打开redo log的时间监控")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" setup_instruments "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" ENABLED"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'YES'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Timed"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'YES'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%wait/io/file/innodb/innodb_log_file%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("根据IO统计信息的MAX_TIMER的值来判断，如果单次IO请求时间超过某个阈值，则判断系统异常。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" event_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("MAX_TIMER_WAIT  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" performance_schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("file_summary_by_event_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" event_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wait/io/file/innodb/innodb_log_file'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wait/io/file/sql/binlog'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" MAX_TIMER_WAIT"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000000000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("把先前的统计信息清空，方便后续的监控")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("truncate")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" performance_schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("file_summary_by_event_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"其它监控指标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它监控指标"}},[s._v("#")]),s._v(" 其它监控指标")]),s._v(" "),t("p",[s._v("服务状态监控：外部系统和第三方中间件。")]),s._v(" "),t("p",[s._v("服务质量监控：接口响应时间来判断。")]),s._v(" "),t("p",[s._v("基础监控：硬盘、CPU、网络、内存")])])}),[],!1,null,null,null);t.default=n.exports}}]);