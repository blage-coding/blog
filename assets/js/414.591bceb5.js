(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{732:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"es高级用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es高级用法"}},[s._v("#")]),s._v(" ES高级用法")]),s._v(" "),t("h2",{attrs:{id:"_1-数据聚合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据聚合"}},[s._v("#")]),s._v(" 1.数据聚合")]),s._v(" "),t("p",[s._v("数据聚合类似于数据库的groupby，聚合的字段不能是可分词的Text，否则就无法进行计算和分类")]),s._v(" "),t("p",[s._v("其中aggs聚合和query同级。")]),s._v(" "),t("ul",[t("li",[s._v("aggs桶聚合：对文档分组，size指定聚合结果的数量，order指定聚合结果的排序方式，field指定聚合字段，"),t("strong",[s._v('类型使用"terms')]),s._v('"。最终返回搜索结果的_count会统计桶内的文档数量。')]),s._v(" "),t("li",[s._v("度量聚合：用来计算一些值，最大值、平均值。"),t("strong",[s._v('子聚合类型使用"stat')]),s._v('"')]),s._v(" "),t("li",[s._v("管道聚合：以其它聚合的结果为基础再做聚合")])]),s._v(" "),t("p",[s._v("业务场景：点击搜索时，前端除了发送一个"),t("strong",[s._v("查询请求")]),s._v("，还会发送一个"),t("strong",[s._v("聚合请求来缩小下面查询列表的范围")]),s._v("。聚合过滤的结果要基于查询所得到的结果，"),t("strong",[s._v("也就是查询和聚合的查询结果要使用相同的条件")]),s._v("，这样子查询虹桥后，聚合城市得到的结果才只有上海。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/blage-coding/picx-images-hosting@master/20230515/image-20230303212938215.m286i4q9egw.webp",alt:"image-20230303212938215"}})]),s._v(" "),t("h2",{attrs:{id:"_2-自动补全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-自动补全"}},[s._v("#")]),s._v(" 2.自动补全")]),s._v(" "),t("p",[s._v("拼音分词器pinyin-analyzer：对Text进行拼音分词。"),t("strong",[s._v('适合在创建倒排索引时使用，如果在搜索时也采用拼音分词器，那么搜索"狮子"也会把"师资"搜素出来')]),s._v("，搜索狮子->shizi->匹配倒排索引中的shizi词条。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/blage-coding/picx-images-hosting@master/20230515/image-20230304093952648.32thdi36cwo0.webp",alt:"image-20230304093952648"}})]),s._v(" "),t("p",[s._v("自定义分词器：先通过ik分词器->把分好的字段通过pinyin分词器。创建索引库时在settings中配置，tokenizer将文本按照分词器规则切割成词条，filter对上一步获取的词条做进一步的处理。")]),s._v(" "),t("p",[s._v("自动补全查询：①需要有completion类型的字段，并且字段值是多词条的数组(用String数组或者集合存储)②suggest查询")]),s._v(" "),t("p",[s._v("DSL语句分析：")]),s._v(" "),t("ul",[t("li",[s._v("构建了两个分词器text_anlyzer和completion_analyzer，其中text_anlyzer对text进行了切割分词，而completion_analyzer针对的是keyword不进行切割分词。")]),s._v(" "),t("li",[s._v('"filter"下面自定义了更详细的配置，包括是否保留中文作为terms词条、是否保留拼音全拼。')]),s._v(" "),t("li",[s._v('"mapping"中每个字段的analyzer用来指定'),t("font",{attrs:{color:"red"}},[t("strong",[s._v("创建索引时使用哪种分词器")])]),s._v("，search_analyzer指明"),t("font",{attrs:{color:"red"}},[t("strong",[s._v("搜索时采用哪种分词器")])]),s._v("。")],1),s._v(" "),t("li",[s._v("向索引库中插入数据时，"),t("strong",[s._v("后端需要向建立自动补全的字段的值(keyword)填入suggestion字段")]),s._v("。")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("PUT /hotel\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"settings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"analysis"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"analyzer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"text_anlyzer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tokenizer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ik_max_word"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"filter"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"py"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"completion_analyzer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tokenizer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"filter"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"py"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"filter"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"py"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pinyin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keep_full_pinyin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keep_joined_full_pinyin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keep_original"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"limit_first_letter_length"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"remove_duplicated_term"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"none_chinese_pinyin_tokenize"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mappings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"properties"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"analyzer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text_anlyzer"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"search_analyzer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ik_smart"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"copy_to"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"all"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"all"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"analyzer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text_anlyzer"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"search_analyzer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ik_smart"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"suggestion"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"completion"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"analyzer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"completion_analyzer"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br")])]),t("h2",{attrs:{id:"_3-数据同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据同步"}},[s._v("#")]),s._v(" 3.数据同步")]),s._v(" "),t("p",[s._v("数据库数据变化时要保证Elasticsearch的数据也要同步变化。当搜索业务和数据库不在同一个微服务时需要另外考虑。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("方案一：同步调用，先改数据库->再改es")])]),s._v(" "),t("li",[t("p",[s._v("方案二：异步通知，写完数据库后通过MQ发布通知，此时数据库服务结束。es收到消息通知执行业务。")])]),s._v(" "),t("li",[t("p",[s._v("方案三：canal监听数据库binlog，然后通知es数据变更情况。")])])]),s._v(" "),t("p",[s._v("采用RabbitMQ方案:")]),s._v(" "),t("ul",[t("li",[s._v("MQ基于内存，因此插入数据库业务消息不需要传递整个对象，传递给一个对象的id即可。后续消费者再根据id从数据库中读取数据进行插入。")]),s._v(" "),t("li",[s._v("插入和更新可以写在同一个api，这是基于es查询的特性。")])]),s._v(" "),t("h2",{attrs:{id:"_4-es集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-es集群"}},[s._v("#")]),s._v(" 4.ES集群")]),s._v(" "),t("p",[s._v("海量数据存储问题：将索引库数据逻辑上分成N个分片，存储到多个节点")]),s._v(" "),t("p",[s._v("单点故障问题：将分片数据在"),t("strong",[s._v("不同节点")]),s._v("备份")]),s._v(" "),t("p",[s._v("集群脑裂问题：当主节点宕机后(其它节点因为网络问题和当前主节点连接不上)，其他节点会选举一个成为主节点，此时若先前的主节点恢复，则做增删改时会同时有多个主节点进行控制，最终造成数据不一致。依次规定要想选主节点成功，选票必须超过(候选节点+1)/2。")]),s._v(" "),t("p",[s._v("es节点类型：")]),s._v(" "),t("ul",[t("li",[s._v("候选主节点：参与集群选主")]),s._v(" "),t("li",[s._v("data节点：数据的crud")]),s._v(" "),t("li",[s._v("coordinator协调节点：路由请求到其它节点，合并查询结果")])]),s._v(" "),t("p",[s._v("新增文档流程：当新增一个文档(数据)，会对"),t("strong",[s._v("文档的id进行哈希算法")]),s._v("再加取余运算("),t("strong",[s._v("分片")]),s._v("大小)，最终根据结果存储到对应的分片(注意得到的结果是分片i，而不是节点i)。如果查询时不指定id，比如MatchAll，那么会把请求发送到每一个分片上，最终由协调节点来汇总搜索结果。")]),s._v(" "),t("p",[s._v("故障转移：主节点会监控集群中的节点状态，如果有节点宕机，会立刻将宕机节点的分片数据迁移到其他节点上面确保数据安全。")])])}),[],!1,null,null,null);t.default=r.exports}}]);