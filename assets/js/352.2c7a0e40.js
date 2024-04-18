(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{671:function(s,a,e){"use strict";e.r(a);var r=e(4),t=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装配置"}},[s._v("#")]),s._v(" 安装配置")]),s._v(" "),a("h2",{attrs:{id:"_1-安装步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装步骤"}},[s._v("#")]),s._v(" 1.安装步骤")]),s._v(" "),a("ul",[a("li",[s._v("解压安装包，命令: tar -zxvf redis-4.0.0.tar.gz-C /usr/local")]),s._v(" "),a("li",[s._v("安装Redis的依赖环境gcc，命令: yum install gcc-c++")]),s._v(" "),a("li",[s._v("进入/usr/local/redis-4.0.0，进行编译，命令: make")]),s._v(" "),a("li",[s._v("进入redis的src目录，进行安装，命令: make install")])]),s._v(" "),a("h2",{attrs:{id:"_2-修改redis-conf配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改redis-conf配置文件"}},[s._v("#")]),s._v(" 2.修改redis.conf配置文件")]),s._v(" "),a("p",[s._v("在远程服务器后台运行：")]),s._v(" "),a("ul",[a("li",[s._v("daemonize yes")]),s._v(" "),a("li",[s._v("protected-mode no")]),s._v(" "),a("li",[s._v("//bind 127.0.0.1    注释")])]),s._v(" "),a("p",[s._v("指定客户端连接密码("),a("strong",[s._v("后续所有操作都需要验证账户")]),s._v(")")]),s._v(" "),a("ul",[a("li",[s._v("requirepass 123456")]),s._v(" "),a("li",[s._v("登录 redis-cli -h localhost -p 6379 -a 123456")])]),s._v(" "),a("h2",{attrs:{id:"_3-基本指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-基本指令"}},[s._v("#")]),s._v(" 3.基本指令")]),s._v(" "),a("p",[a("font",{attrs:{color:"red"}},[a("strong",[s._v("开启后台服务，需要指明加载的配置文件。")])])],1),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("redis-server ../redis.conf \nredis-server &\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("关闭服务(如设置了密码需要提供密码)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kill -9或者redis-cli shutdown\nredis-cli -a 123456 shutdown\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("开启redis远程连接，修改redis.conf")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#bind 127.0.0.1  注释\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("远程连接")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("redis-cli -h 192.168.134.133 -p 6379 -a 123456\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("redis服务器防火墙需要关闭")]),s._v(" "),a("p",[s._v("redis总共有16个数据库，当前操作的默认是0号数据库")]),s._v(" "),a("h2",{attrs:{id:"_4-spring配置redis服务器和端口-以及密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-spring配置redis服务器和端口-以及密码"}},[s._v("#")]),s._v(" 4.Spring配置redis服务器和端口，以及密码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("redis:\n  host: 192.168.142.134\n  port: 6379\n  password: 123456\n  database: 0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);