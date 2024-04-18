(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{659:function(v,_,t){"use strict";t.r(_);var s=t(4),a=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"jvm面试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm面试"}},[v._v("#")]),v._v(" JVM面试")]),v._v(" "),_("h2",{attrs:{id:"一、什么是java类加载-什么是双亲委派机制-java类加载过程是怎么样"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是java类加载-什么是双亲委派机制-java类加载过程是怎么样"}},[v._v("#")]),v._v(" 一、什么是JAVA类加载？什么是双亲委派机制？JAVA类加载过程是怎么样？")]),v._v(" "),_("p",[v._v("1.类加载是指将类的.class文件的二进制数据读入JVM内存中，放在数据区的方法区中，然后在堆内创建一个该类的对象，其中"),_("strong",[v._v("封装了类在方法区中的数据结构")]),v._v("。")]),v._v(" "),_("p",[v._v("2.双亲委派机制就是在类加载的过程中，首先"),_("strong",[v._v("自底向上检查")]),v._v("类是否已经被加载，按照Custom->App->Extension->Bootstrap ClassLoader 类加载器顺序查找对应的缓存(不是继承关系)，如果有则返回。否则会"),_("strong",[v._v("自顶向下加载类")]),v._v("。目的是保证所有的类加载器只加载一次，"),_("strong",[v._v("保护JAVA底层的类不会被应用程序写的类覆盖")]),v._v("。")]),v._v(" "),_("p",[v._v("3.类加载过程：加载->连接->初始化。")]),v._v(" "),_("ul",[_("li",[v._v("加载")])]),v._v(" "),_("p",[v._v("把JAVA字节码数据加载到JVM内存中。")]),v._v(" "),_("ul",[_("li",[v._v("连接")])]),v._v(" "),_("p",[v._v("验证：检验加载的字节码信息是否符合JVM规范。\n准备：创建类或者接口的静态变量，并赋初值(还未初始化)。")]),v._v(" "),_("p",[_("strong",[v._v("JDK8之前，静态变量，常量池存储在方法区中，JDK8之后都迁移到了堆中。原先方法区的永久代被替换为元空间，它并不在虚拟机中，而是使用本地内存，防止OOM")]),v._v("。")]),v._v(" "),_("ul",[_("li",[v._v("解析")])]),v._v(" "),_("p",[v._v("符号引用转为直接引用，在栈中初始化该符号引用的指针，并使其指向堆中分配好的空间。")]),v._v(" "),_("h2",{attrs:{id:"二、jvm内存划分区域-一个对象从加载到jvm-再到被gc清除-都经历了什么过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、jvm内存划分区域-一个对象从加载到jvm-再到被gc清除-都经历了什么过程"}},[v._v("#")]),v._v(" 二、JVM内存划分区域？一个对象从加载到JVM，再到被GC清除，都经历了什么过程？")]),v._v(" "),_("p",[v._v("1.每个线程都有一个独立的虚拟机栈，线程中"),_("strong",[v._v("每个方法")]),v._v("都在虚拟机栈中开辟一个新的"),_("strong",[v._v("栈帧")]),v._v("。其中每个栈帧用于存储方法"),_("strong",[v._v("局部变量，操作数，方法出口，动态连接")]),v._v("等信息。")]),v._v(" "),_("p",[v._v("本地方法栈为虚拟机调用Native方法(非JAVA代码实现的方法)服务。")]),v._v(" "),_("p",[v._v("堆则用来存放所有"),_("strong",[v._v("对象实例和数组")]),v._v("。方法区则用来存储虚拟机加载的"),_("strong",[v._v("类型信息")]),v._v("、"),_("strong",[v._v("静态变量")]),v._v("，以及运行时的"),_("strong",[v._v("常量池")]),v._v("。\n"),_("strong",[v._v("其中类的静态变量以及静态代码块都是在类加载时创建的，除此外类的其他属性都是在对象初始化创建的。")])]),v._v(" "),_("img",{staticStyle:{zoom:"60%"},attrs:{src:"https://jsd.cdn.zzko.cn/gh/blage-coding/picx-images-hosting@master/20230516/fe7227f01bab432497bc3ce42ba5a204.4580kdnfc3e0.webp",alt:"Snipaste_2022-02-16_20-35-07"}}),v._v(" "),_("p",[v._v("2.用户创建一个对象，首先通过内存中class point找到方法区中的类型信息(元数据区中的class)。\n然后在JVM中实例化对象，在堆中开辟空间，半初始化对象(存在指令重排)。")]),v._v(" "),_("p",[_("strong",[v._v("对象会分配在堆内存中新生代Eden")]),v._v(".然后经过一次"),_("strong",[v._v("Minor GC")]),v._v(","),_("strong",[v._v("对象如果存活就会进入s区")]),v._v("，在后续每次GC中，如果"),_("strong",[v._v("对象一直存活就会在S区来回拷贝")]),v._v("，每移动一次年龄加一，最大年龄为15，"),_("strong",[v._v("超过一定年龄就会移入老年代")]),v._v("。")]),v._v(" "),_("p",[_("strong",[v._v("直到方法执行结束后栈中指针先移除掉")]),v._v("；堆中的对象经过"),_("strong",[v._v("Full GC")]),v._v("，则会被标记为垃圾，然后被GC进程清除。")]),v._v(" "),_("h2",{attrs:{id:"三、怎么确定一个对象到底是不是垃圾-什么是gc-root"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、怎么确定一个对象到底是不是垃圾-什么是gc-root"}},[v._v("#")]),v._v(" 三、怎么确定一个对象到底是不是垃圾？什么是GC Root？")]),v._v(" "),_("p",[v._v("1.引用计数：给堆中的对象创建一个引用计数来记录该对象被多少个栈指针所引用，每被引用一次就加一，当引用计数为零没有指针指向它时，则判断该对象为垃圾。\n但是这种方法有一个缺点，无法解决循环引用。就是当两个对象相互引用对方时，那么双方引用计数都为1，永远都不会被GC清除，就会产生"),_("strong",[v._v("内存泄露")]),v._v("，进而有可能造成"),_("strong",[v._v("内存溢出")]),v._v("。")]),v._v(" "),_("p",[v._v("2.根可达算法：这种方法就是通过"),_("strong",[v._v("从GC Root一直向下找引用，找不到的对象就是垃圾")]),v._v("。\nGC Root一般包括JVM Stack,Native Stack,常量池，以及静态变量。")]),v._v(" "),_("h2",{attrs:{id:"四、jvm有哪些垃圾回收算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、jvm有哪些垃圾回收算法"}},[v._v("#")]),v._v(" 四、JVM有哪些垃圾回收算法？")]),v._v(" "),_("p",[v._v("1.MarkSweep标记清除算法：分为两个 阶段，标记阶段先把垃圾内存标记出来， 然后再把标记的内存回收。缺点是"),_("strong",[v._v("会产生内碎")]),v._v("。")]),v._v(" "),_("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/blage-coding/picx-images-hosting@master/20230516/e48df0b4f3e5416a88d2e0dd8ac95709.12k9dpk7pbmo.webp"}}),v._v(" "),_("p",[v._v("2.copying拷贝算法：将内存分为大小相等的两半，"),_("strong",[v._v("只使用一半的内存空间创建对象")]),v._v("。垃圾回收时将这一半中存活的对象拷贝到另一半中，然后当前这一半就可以全部清除回收。好处是没有内碎片，因为复制回去时会复制到连续内存区域。缺点是"),_("strong",[v._v("浪费内存空间")]),v._v("，最多只能利用内存一半的空间创建对象，"),_("strong",[v._v("且GC效率和当前存活对象有关")]),v._v("。")]),v._v(" "),_("img",{staticStyle:{zoom:"60%"},attrs:{src:"https://jsd.cdn.zzko.cn/gh/blage-coding/picx-images-hosting@master/20230516/da266bb2b6624add8e1348d2e9e87a0f.56haixqrcjo0.webp",alt:"Snipaste_2022-02-16_20-35-07"}}),v._v(" "),_("p",[v._v("3.Markcompack标记压缩算法：GC时"),_("strong",[v._v("将存活对象往一端移动")]),v._v("，端边界后面的可以直接回收。")]),v._v(" "),_("p",[v._v("这三种算法各有利弊，除了要考虑回收后内存中对象的分布，还要考虑每种算法的复杂度。")]),v._v(" "),_("h2",{attrs:{id:"五、什么是stw-jvm有哪些垃圾回收器-他们是如何工作的-为什么要设计这么多垃圾回收器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、什么是stw-jvm有哪些垃圾回收器-他们是如何工作的-为什么要设计这么多垃圾回收器"}},[v._v("#")]),v._v(" 五、什么是STW?JVM有哪些垃圾回收器？他们是如何工作的？为什么要设计这么多垃圾回收器？")]),v._v(" "),_("p",[v._v("1.STW：Stop The World，在垃圾回收算法过程中，"),_("strong",[v._v("将JVM内存冻结的一个状态")]),v._v("。STW状态下，所有的线程(除了GC)都停止执行，native可以执行但是不能和JVM交互。"),_("strong",[v._v("GC算法优化的关键，就是减少STW，也是JVM调优关键")]),v._v("。")]),v._v(" "),_("p",[v._v("2.根据堆内存中是否分新生代和老年代，可以分为分代和不分代的垃圾回收器。")]),v._v(" "),_("ul",[_("li",[v._v("分代垃圾回收器：")])]),v._v(" "),_("p",[v._v("①Serial串行垃圾回收器：需要执行GC时暂停置为STW状态，由"),_("strong",[v._v("一个线程")]),v._v("负责GC，然后继续执行其他线程。缺点是"),_("strong",[v._v("多CPU架构下性能下降严重，一个线程GC回收不过来")]),v._v("。")]),v._v(" "),_("p",[v._v("②Parallel并行垃圾回收器：GC时"),_("strong",[v._v("增加多个线程进行垃圾回收")]),v._v("。PS+PO是JDK1.8默认的垃圾回收器。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/blage-coding/picx-images-hosting@master/20230516/65e4d0b34a2f41e99c97e29c7e3f1bbd.3c6mfwzbpfw0.webp",alt:"Snipaste_2022-02-16_22-55-28"}})]),v._v(" "),_("p",[v._v("③CMS:Concurrent Mark Sweep,核心思想是"),_("strong",[v._v("让线程和GC线程并行执行各自的任务")]),v._v("，基于"),_("strong",[v._v("标记清除算法")]),v._v("实现。\n初始标记阶段(STW)，"),_("strong",[v._v("只标记出GC Root根对象直接引用关联的对象")]),v._v("(类似于儿子节点)。\n并发标记阶段，多条并发标记线程进行可达性分析，标记出所有的废弃对象。此过程是和用户线程并发执行\n重新标记阶段(STW)，将刚才并发标记阶段"),_("strong",[v._v("用户线程新产生的废弃对象")]),v._v("标记出来。\n最后并发清除过程中，会把标记的废弃对象回收清除。这个过程中会产生浮动垃圾，"),_("strong",[v._v("此清除过程中用户线程产生的废弃对象由下一次GC清除")]),v._v("。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/blage-coding/picx-images-hosting@master/20230516/cf4f36b7b8154e42bbb163098d26f1f0.44fr8huordq0.webp",alt:"Snipaste_2022-02-16_22-57-24"}})]),v._v(" "),_("ul",[_("li",[v._v("不分代垃圾回收器")])]),v._v(" "),_("p",[v._v("①G1 Garbage First，堆内存中不再区分新生代和老年代，而是划分成一个个的region区域，虽然形式上不分代，但是逻辑上依旧分代。核心思想是"),_("strong",[v._v("每次GC只会回收废弃对象最多的Region")]),v._v(",价值小的Region先放着。清理时可以使用"),_("strong",[v._v("Copying算法")]),v._v("，直接将Region拷贝到另一个Region，避免内碎产生。")]),v._v(" "),_("p",[v._v("②ZGC完全不分代。")]),v._v(" "),_("p",[v._v("3.内存逐渐变大，因此需要更多更高效的垃圾回收器。")]),v._v(" "),_("h2",{attrs:{id:"六、什么是三色标记-如何解决错标记和漏标记的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、什么是三色标记-如何解决错标记和漏标记的问题"}},[v._v("#")]),v._v(" 六、什么是三色标记？如何解决错标记和漏标记的问题？")]),v._v(" "),_("p",[v._v("1.三色标记是CMS垃圾回收器的核心算法。黑色表示"),_("strong",[v._v("对象自己和成员对象")]),v._v("都已经标记完；灰色表示自己标记完，但是成员对象还没有标记；白色是指自己未标记完。")]),v._v(" "),_("p",[v._v("2."),_("strong",[v._v("由于CMS存在浮动垃圾并且GC线程和用户线程并发运行")]),v._v("，因此会出现错标记或者漏标记的情况(黑指向白)。CMS通过"),_("strong",[v._v("增量标记")]),v._v("，把黑色的都标记为灰色，这样子黑色下的白色就可以被发现。\nG1通过"),_("strong",[v._v("原始快照")]),v._v("保存变化的引用关系,通过扫描STAT来修改对应对象的颜色。")]),v._v(" "),_("h2",{attrs:{id:"七、如何打破双亲委派机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#七、如何打破双亲委派机制"}},[v._v("#")]),v._v(" 七、如何打破双亲委派机制？")]),v._v(" "),_("p",[v._v("自底向上：用户定义classloader->Application ClassLoader->Extension ClassLoader->Bootstrap ClassLoader")]),v._v(" "),_("p",[_("font",{attrs:{color:"red"}},[_("strong",[v._v("要打破双亲委派机制")])]),v._v("，只需要"),_("strong",[v._v("重写loadClass方法")]),v._v("。")],1),v._v(" "),_("h2",{attrs:{id:"八、对象创建创建时jvm会经过哪三步-对象在内存中的存储布局是怎样的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#八、对象创建创建时jvm会经过哪三步-对象在内存中的存储布局是怎样的"}},[v._v("#")]),v._v(" 八、对象创建创建时JVM会经过哪三步？对象在内存中的存储布局是怎样的？")]),v._v(" "),_("p",[v._v("1.对象创建时经过以下三步：①先在内存堆中给对象分配空间②初始化对象③把栈中的引用对象指向堆中分配好的空间。")]),v._v(" "),_("p",[v._v("2.对象存储布局包括：①四个字节的Markword对象头，来标记对象的属性，包括锁状态等等②四字节的"),_("strong",[v._v("类型指针")]),v._v("，指向方法区的class类 ③成员变量信息④字节填充，使得能被八字节整除。")]),v._v(" "),_("h2",{attrs:{id:"九、jvm内存屏障"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#九、jvm内存屏障"}},[v._v("#")]),v._v(" 九、JVM内存屏障")]),v._v(" "),_("p",[v._v("内存屏障解决了硬件层面的可见性和重排问题。loadstore屏障就表示前面这个volatile变量读和后面的写操作是"),_("strong",[v._v("不能进行指令重排")]),v._v("的。屏障分为四种屏障，loadstore,loadload,storeload,storestore")]),v._v(" "),_("p",[v._v("JVM规定volatile修饰的变量，写之前需要插入stroestore屏障，写之后加入storeload\n读之前加入loadload屏障，读之后加入loadstore屏障。")])])}),[],!1,null,null,null);_.default=a.exports}}]);