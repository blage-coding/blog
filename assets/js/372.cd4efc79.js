(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{691:function(_,t,v){"use strict";v.r(t);var r=v(4),s=Object(r.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"内存脏页刷盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存脏页刷盘"}},[_._v("#")]),_._v(" 内存脏页刷盘")]),_._v(" "),t("p",[t("strong",[_._v("flush：将内存的脏数据页刷盘写入磁盘，更新磁盘数据的过程称之为flush")]),_._v("。刷盘后"),t("strong",[_._v("内存和磁盘的数据保持一致")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("脏页：内存中还没flush到磁盘的数据页")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("干净页：内存中已经flush磁盘的数据页")]),_._v("。")]),_._v(" "),t("h2",{attrs:{id:"_1-脏页刷盘触发时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-脏页刷盘触发时机"}},[_._v("#")]),_._v(" 1.脏页刷盘触发时机")]),_._v(" "),t("p",[_._v("一般来说MySQL关闭或者系统空闲都会触发flush刷盘，但是这两个场景下不太会考虑性能问题，主要讨论以下两种场景：")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("内存的redo log写满")])])]),_._v(" "),t("p",[_._v("此时必须停止所有操作，将checkpoint向前推进，包括触发change buffer的merge操作以及对应内存脏页落盘。")]),_._v(" "),t("p",[_._v("这种情况下，"),t("font",{attrs:{color:"red"}},[t("strong",[_._v("系统所有更新操作都会被堵住，写性能跌至0")])]),_._v("。")],1),_._v(" "),t("ul",[t("li",[t("strong",[_._v("内存空间不足需要刷盘")])])]),_._v(" "),t("p",[_._v("内存淘汰数据页时，如果淘汰掉的是干净页，那么直接将内存空间释放然后复用即可。而"),t("strong",[_._v("如果淘汰掉的是脏页，那么需要先将脏页flush变成干净页之后才能复用")]),_._v("。")]),_._v(" "),t("p",[t("font",{attrs:{color:"red"}},[t("strong",[_._v("如果当前查询需要淘汰过多的脏页，就会导致查询的响应时间变长")])]),_._v("。这也就是为什么MySQL会忽然抖动的原因。")],1),_._v(" "),t("h2",{attrs:{id:"_2-脏页落盘控制策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-脏页落盘控制策略"}},[_._v("#")]),_._v(" 2.脏页落盘控制策略")]),_._v(" "),t("p",[t("strong",[_._v("innodb_io_capacity：定义InnoDB的刷盘能力，值越大脏页flush速度越快")]),_._v("。一般建议设置成磁盘的IOPS。")]),_._v(" "),t("p",[_._v("InnoDB刷盘速度参考两个因素，脏页比例和redo log读写速度。根据当前脏页比例计算得到一个值N，然后根据当前redo log剩余的日志空间计算得到M。"),t("strong",[_._v("然后innoDB按照innodb_io_capacity定义的能力，乘上M和N的最大值来控制刷脏页的速度")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("innodb_flush_neighbors")]),_._v("：控制刷盘的"),t("strong",[_._v("连带")]),_._v("机制。值为1则表示刷盘的过程中，如果"),t("font",{attrs:{color:"red"}},[t("strong",[_._v("当前脏页旁边的数据页也是脏页，那么也会一并将其flush")])]),_._v("，直到最后数据页旁边不是脏页。")],1),_._v(" "),t("p",[_._v("对于IOPS比较小的设备(机械硬盘)建议"),t("strong",[_._v("设置为1")]),_._v("，"),t("strong",[_._v("自动刷新可以大大减少随机IO(寻找磁道、扇区")]),_._v(")。对于IOPS比较大的设备(SSD)"),t("strong",[_._v("则设置为0")]),_._v("，此时瓶颈在刷脏页操作，刷的脏页越多那么SQL语句响应时间越长。")])])}),[],!1,null,null,null);t.default=s.exports}}]);