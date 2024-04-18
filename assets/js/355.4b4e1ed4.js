(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{675:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redisson分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redisson分布式锁"}},[s._v("#")]),s._v(" Redisson分布式锁")]),s._v(" "),t("p",[s._v("导入依赖，注入redissonClient对象，通过该对象来使用各种redis分布式锁。")]),s._v(" "),t("h2",{attrs:{id:"可重入锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可重入锁"}},[s._v("#")]),s._v(" 可重入锁")]),s._v(" "),t("p",[s._v("场景：A方法调用B方法，A和B都要获取同一把锁。")]),s._v(" "),t("p",[s._v("lock()方法是"),t("strong",[s._v("阻塞式等待方法")]),s._v("，获取不到会一直等待，直到获取到锁开始执行业务。不需要自旋锁重复自调用。")]),s._v(" "),t("p",[s._v("内置"),t("strong",[s._v("看门狗自动续上锁的TTL")]),s._v("，防止业务执行时间过长；"),t("strong",[s._v("如果lock()自己指定过期时间则看门狗失效")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RLock")]),s._v(" lock"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redissonClient"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getLock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my-lock"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//名字相同就是同一把锁")]),s._v("\n    lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//加锁，并默认添加TTL")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// lock/lock(10,TimeUnit.SECONDS);")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行业务")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("finally")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unlock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//释放锁")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"读写锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读写锁"}},[s._v("#")]),s._v(" 读写锁")]),s._v(" "),t("p",[s._v("向redis中写数据之前添加写锁，在修改数据过程中它是一个排他锁，只能存在一个写锁；读数据之前添加读锁，它是一个共享锁，写锁没释放就必须等待。")]),s._v(" "),t("h2",{attrs:{id:"闭锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#闭锁"}},[s._v("#")]),s._v(" 闭锁")]),s._v(" "),t("p",[s._v('redissonClient.getCountDownLatch("door")，当分布式闭锁都调用countDown()达到设置次数后，主锁才执行await后业务。')]),s._v(" "),t("h2",{attrs:{id:"信号量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#信号量"}},[s._v("#")]),s._v(" 信号量")]),s._v(" "),t("p",[s._v("只有当redis中的信号量value大于0，才能够获取信号量。")]),s._v(" "),t("p",[s._v("缓存数据和数据库一致性问题：数据库写后删缓存模式。实时性一致性要求高的数据就不应该读redis，直接查数据库。缓存只适合于最终一致性，给数据添加过期时间TTL,保证拿到当前最新数据即可。")])])}),[],!1,null,null,null);t.default=e.exports}}]);