(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{741:function(a,t,s){"use strict";s.r(t);var r=s(4),n=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"散列与哈希算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#散列与哈希算法"}},[a._v("#")]),a._v(" 散列与哈希算法")]),a._v(" "),t("h2",{attrs:{id:"_1-斐波那契散列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-斐波那契散列"}},[a._v("#")]),a._v(" 1.斐波那契散列")]),a._v(" "),t("h3",{attrs:{id:"threadlocal散列算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal散列算法"}},[a._v("#")]),a._v(" ThreadLocal散列算法")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("ThreadLocalMap底层采用"),t("strong",[a._v("数组")]),a._v("存储每个变量副本，并对"),t("strong",[a._v("ThreadLocal")]),a._v("采用斐波那契散列计算元素存储的数组地址，"),t("strong",[a._v("产生碰撞时采用开放寻址法+1向后寻址")]),a._v("。")])]),a._v(" "),t("li",[t("p",[a._v("斐波那契数列是描述黄金分割法则的最经典表达式，因为当n趋于无穷大时，前一项与后一项比值的极限如果存在，那么它就等于(根号5 - 1)/2，约等于0.618")])]),a._v(" "),t("li",[t("p",[a._v("在"),t("strong",[a._v("平方散列")]),a._v("中，不再是利用value待散列值作为乘数，而是利用黄金分割法则生成，就得到了斐波那契散列中的"),t("strong",[a._v("哈希魔数")]),a._v(":")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("位数")]),a._v(" "),t("th",[a._v("散列乘方值")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("16")]),a._v(" "),t("td",[a._v("0.618*2^16=40503")])]),a._v(" "),t("tr",[t("td",[a._v("32")]),a._v(" "),t("td",[a._v("0.618*2^32=2654435769")])])])])]),a._v(" "),t("li",[t("p",[a._v("对于32位整数，最终得到的斐波那契散列公式如下："),t("font",{attrs:{color:"red"}},[t("strong",[a._v("index = (value * 2654435769) >> 28")])]),a._v(" 。其中右移28位相当于保留高4位，无特别意义。当然这里右移操作也可以改成取余计算&(length-1)，其中length表示ThreadLocal的容量大小。")],1)])]),a._v(" "),t("h3",{attrs:{id:"🚀抽奖场景应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🚀抽奖场景应用"}},[a._v("#")]),a._v(" 🚀抽奖场景应用")]),a._v(" "),t("p",[a._v("在抽奖场景中，使用斐波那契散列生成随机数：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" hashcode "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" val "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x61c88647")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x61c88647")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" hashcode"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("128")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[a._v("这里还进行一轮加法运算，目的是增加多种运算法则，既有乘法又有加法，从而散列更充分。")]),a._v(" "),t("li",[a._v("选择大于100的最近2的幂次方数进行"),t("strong",[a._v("与运算")]),a._v("，实际上与取余运算等价，目的是为了提高运算效率。")])]),a._v(" "),t("h2",{attrs:{id:"_2-hashmap散列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-hashmap散列"}},[a._v("#")]),a._v(" 2.HashMap散列")]),a._v(" "),t("h3",{attrs:{id:"扰动函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扰动函数"}},[a._v("#")]),a._v(" 扰动函数")]),a._v(" "),t("p",[a._v("哈希索引下标计算：")]),a._v(" "),t("p",[a._v("①首先根据key.hashCode()计算得到一个哈希值。")]),a._v(" "),t("p",[a._v("②经过扰动函数进行均匀散列，减少碰撞。具体来说，取哈希值的高16位与原哈希值进行异或操作。"),t("strong",[a._v("从而增加低位的随机性")]),a._v("，")]),a._v(" "),t("p",[a._v("③将上述得到的结果与哈希表初始大小(8)进行与操作。")]),a._v(" "),t("p",[a._v("具体计算公式如下：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("hash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("h "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("hashCode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("h "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"扩容拆分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩容拆分"}},[a._v("#")]),a._v(" 扩容拆分")]),a._v(" "),t("p",[a._v("在HashMap进行扩容时，所有元素不需要重新计算哈希值填入到新数组的位置。只需要判断原哈希值在旧数组大小(2的幂次方数)二进制比特位上是否为1，那么新索引位置为旧索引加上旧数组大小。")]),a._v(" "),t("p",[a._v("举例：从16扩容到32，那么原哈希值低5位的大小在16~31之间的，元素的索引都需要改变。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hash "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" oldCap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//不动")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//移动到新的位置;")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"🚀路由组件运用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🚀路由组件运用"}},[a._v("#")]),a._v(" 🚀路由组件运用")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" idx "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("size "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("dbKeyAttr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("hashCode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("dbKeyAttr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("hashCode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("这里路由场景中选择HashMap扰动函数的散列算法，"),t("strong",[a._v("根据订单uID值散列到分库表的索引中")]),a._v("。注意这里库表要求尽量是2的幂次方数，否则进行与运算的散列效果不好。")]),a._v(" "),t("li",[a._v("实际上大厂的路由策略基本都是除法散列。因为后续如果增加数据库，扩容比较简单。使用扰动函数主要①场景不大②可以结合源码学习知识。")])]),a._v(" "),t("h2",{attrs:{id:"_3-漫谈threadlocal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-漫谈threadlocal"}},[a._v("#")]),a._v(" 3.漫谈ThreadLocal")]),a._v(" "),t("h3",{attrs:{id:"thread-threadlocal-threadlocalmap三者关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thread-threadlocal-threadlocalmap三者关系"}},[a._v("#")]),a._v(" Thread,ThreadLocal,ThreadLocalMap三者关系")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/blage-coding/picx-images-hosting@master/20230902/image.48slyb5c0bi0.webp",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("一个线程Thread对应一个ThreadLocalMap，和多个ThreadLocal，"),t("strong",[a._v("每个ThreadLocal相当于一个工具类，用于一对一管理线程里的每个变量副本")]),a._v("。一个线程要想保存多个变量副本，就需要创建多个ThreadLocal。")]),a._v(" "),t("li",[a._v("ThreadLocalMap底层是一个Entry数组，"),t("strong",[a._v("保存多对K-V键值对")]),a._v("，K是ThreadLocal对象，V值为副本变量值。其中K值并没有采用传统ThreadLocal的hashcode方法，而是采用斐波那契散列令哈希槽位分配得更均匀。")])]),a._v(" "),t("h3",{attrs:{id:"弱引用与内存泄漏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#弱引用与内存泄漏"}},[a._v("#")]),a._v(" 弱引用与内存泄漏")]),a._v(" "),t("p",[a._v("前提："),t("strong",[a._v("ThreadLocalMap")]),a._v("采用"),t("font",{attrs:{color:"red"}},[t("strong",[a._v("弱引用")])]),a._v("来引用key(ThreadLocal对象)。"),t("strong",[a._v("当前ThreadLocal对象被多个对象引用")]),a._v("。")],1),a._v(" "),t("p",[a._v("为什么需要设置为弱引用？")]),a._v(" "),t("ul",[t("li",[a._v("假设当前除了当前线程ThreadLocalMap以外，引用ThreadLocal的所有对象都GC回收了，即使没有手动删除，因为ThreadLocal是弱引用，最后也会被GC回收。")]),a._v(" "),t("li",[a._v("在java8中，副本变量value则在下一次get,set方法调用时(或是在"),t("strong",[a._v("线程结束时")]),a._v(")，会自动将Entry中key为null的对象进行回收，避免内存泄露的问题。因此只要ThreadLocal对象被回收，那么对应的线程变量也会被回收。")]),a._v(" "),t("li",[a._v("场景举例：一般来说ThreadLocalMap生命周期和Thread一样长，"),t("strong",[a._v("线程使用结束后会归还给线程池进行重用")]),a._v("，并不会销毁，如果是强引用场景下KV不再被使用但也不会GC回收，出现内存泄漏。而如果是弱引用场景下，就会被GC回收。")])]),a._v(" "),t("p",[a._v("然而即便如此，"),t("strong",[a._v("依然存在当前线程结束，但是ThreadLocal对象被另一个对象强引用持有，从而发生内存泄露的情况")]),a._v("。比如：①静态变量持有ThreadLocal强引用②异步任务当中使用了ThreadLocal对象③线程池任务中使用。因此为了避免内存泄露的情况，使用完后都需要手动删除。")]),a._v(" "),t("h3",{attrs:{id:"🚀项目threadlocal手动删除的场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🚀项目threadlocal手动删除的场景"}},[a._v("#")]),a._v(" 🚀项目ThreadLocal手动删除的场景")]),a._v(" "),t("p",[t("font",{attrs:{color:"red"}},[t("strong",[a._v("①路由项目中，执行切面方法，拿到被注解的的属性值并生成分库索引后，最后关系销毁ThreadLocal")])])],1),a._v(" "),t("p",[t("font",{attrs:{color:"red"}},[t("strong",[a._v("②抽奖项目中，xxl-job执行定时任务，扫描个人活动记录进行补偿")])])],1),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" userTakeActicityRepository"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scanInboiceMqState")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("finally")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("remove")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"_4-雪崩标准测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-雪崩标准测试"}},[a._v("#")]),a._v(" 4.雪崩标准测试")]),a._v(" "),t("p",[a._v("密码学上雪崩效应指的是输入轻微变化，输出会发生显著变化。简单来说，如果使用斐波那契散列，当从8库32表扩容到16库32表时，根据路由算法得到的每个区间得数据变化量应该为50%。")])])}),[],!1,null,null,null);t.default=n.exports}}]);