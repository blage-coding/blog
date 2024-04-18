(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{715:function(t,a,s){"use strict";s.r(a);var e=s(4),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mybatis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis"}},[t._v("#")]),t._v(" Mybatis")]),t._v(" "),a("h2",{attrs:{id:"_1-mybatis-where-标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-mybatis-where-标签"}},[t._v("#")]),t._v(" 1.Mybatis<where>标签")]),t._v(" "),a("p",[t._v("Mybatis的<where>标签"),a("strong",[t._v("结合<if>标签")]),t._v("使用(替代1=1，"),a("strong",[t._v("优化过滤需要MySQL做")]),t._v("，减轻压力)：①子句开头为and或者or时，where标签会自动把它剔除。②至少一个if标签有内容才会插入where子句。")]),t._v(" "),a("p",[a("strong",[t._v("好处："),a("font",{attrs:{color:"red"}},[t._v("sql语句复用，涵盖指定条件查询和全表查询(查所有)两种查询情况，repository层不需要做null判断")]),t._v("。")],1)]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"data != null and data.systemId != ''\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" system_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{data.systemId}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"data != null and data.interfaceId != ''\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" interface_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{data.interfaceId}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"_2-mybatis-foreach-标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mybatis-foreach-标签"}},[t._v("#")]),t._v(" 2.mybatis<foreach>标签")]),t._v(" "),a("p",[t._v("mybatis实现可以通过<foreach>标签，实现把dao形参里的list集合插入到表中。好处在于高效，只用从连接池获取一次连接执行一条sql语句。")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("insertList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("parameterType")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("java.util.List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        INSERT INTO award(award_id, award_type, award_name, award_content, create_time, update_time)\n        VALUES\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("foreach")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("collection")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("separator")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            (\n            #{item.awardId},\n            #{item.awardType},\n            #{item.awardName},\n            #{item.awardContent},\n            NOW(),\n            NOW()\n            )\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("foreach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h2",{attrs:{id:"_3-mybatis拦截器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-mybatis拦截器"}},[t._v("#")]),t._v(" 3.Mybatis拦截器")]),t._v(" "),a("p",[t._v("Mybatis可以拦截的四大对象如下：")]),t._v(" "),a("ul",[a("li",[t._v("Executor (update, query, flushStatements, commit, rollback, getTransaction, close, isClosed)拦截执行器(查询缓存，数据库操作，事务管理)")]),t._v(" "),a("li",[t._v("ParameterHandler (getParameterObject, setParameters)拦截sql语句参数处理(给sql语句动态赋值具体实现，也就是#{}里面的参数)")]),t._v(" "),a("li",[t._v("ResultSetHandler (handleResultSets, handleOutputParameters)拦截结果集处理和组装(resulttype将结果映射成响应的结果对象)")]),t._v(" "),a("li",[t._v("StatementHandler (prepare, parameterize, batch, update, query)拦截sql语法构建的处理(创建封装statement对象。"),a("strong",[t._v("parameterize调用parameterhandler类方法对sql站位符进行赋值")]),t._v("。prepare方法根据"),a("strong",[t._v("Connection连接")]),t._v("获取statement对象)")])]),t._v(" "),a("p",[t._v("MappedStatement：对mapper.xml某个sql方法的封装，相当于一个sql语句，通过"),a("code",[t._v("Invocation")]),t._v(" 对象的 "),a("code",[t._v("getArgs()")]),t._v(" 方法获取到，getArgs()[1]表示传入sql语句第二个参数。")]),t._v(" "),a("p",[t._v("delegate.mappedStatement：存储"),a("strong",[t._v("映射语句")]),t._v("信息。映射语句定义了该执行哪个curd操作，以及sql语句与java对象如何映射。")]),t._v(" "),a("h2",{attrs:{id:"_4-mybatis驼峰与lombok"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-mybatis驼峰与lombok"}},[t._v("#")]),t._v(" 4.Mybatis驼峰与lombok")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Mybatis中的配置文件只能指定一份")]),t._v("，要么在spring的yml中configuration下添加所有的配置，要么在资源文件下创建mybatis-config.xml文件，所有配置添加里面，并用config-location指明位置。否则会报错")]),t._v(" "),a("li",[a("strong",[t._v("uId字段使用lombok@Data注解后，mybatis开启驼峰导致数据库接收不到数据")]),t._v("。原因是当使用@Data注解时，自动生成的setter,getter方法为getUId，不符合javaBean规范。 解决方法是"),a("strong",[t._v("遇到第二个字母大写的字段一定要重写getter,setter方法")]),t._v("。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);