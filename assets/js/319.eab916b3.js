(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{639:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"核心功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心功能"}},[s._v("#")]),s._v(" 核心功能")]),s._v(" "),a("h2",{attrs:{id:"yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yaml"}},[s._v("#")]),s._v(" yaml")]),s._v(" "),a("p",[s._v("用于写properties的k-v值。缩进表示层级关系；对象采用{属性名字: 值,...}的方式，数组或者list采用[]，"),a("strong",[s._v("属性名+冒号后加空格")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("public class Person {\nprivate String userName;\nprivate Boolean boss;\nprivate Integer age;\nprivate Pet pet;\nprivate String[] interests;\nprivate List<String> animal;\nprivate Map<String, Object> score;\nprivate Set<Double> salarys;\nprivate Map<String, List<Pet>> allPets;}\n-------\nperson:\n  user-name: cungu\n  boss: false\n  age: 15\n  interests: [ss,s16s,5]\n  animal: [sk,ssl,8,5]\n  score:\n    {jisn: 5,sjf: 5}\n  salarys: [51,61115.333]\n  all-pets:\n    {sjnek: [{name: 88},{name: 89}],dog: []}\n  pet:\n    name: nie\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("其中String加了双引号则会转义为换行...，单引号全部解析为字符串。")]),s._v(" "),a("h2",{attrs:{id:"静态资源访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源访问"}},[s._v("#")]),s._v(" 静态资源访问")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("静态资源目录resources/static，resources/resources")]),s._v(" "),a("p",[s._v("原理：静态资源映射的路径是/**，请求时先去找RestController能不能处理，如果不能处理再把路径当成静态资源去找。开发时习惯把静态资源路径映射/resources/**")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("spring:\n  mvc:\n    static-path-pattern: /resources/**\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("welcome页(index.html)若在默认静态资源目录下，直接访问静态资源路径不加index.html能直接访问。")])]),s._v(" "),a("li",[a("p",[s._v("自定义Favicon，在静态资源添加favicon.ico图标，浏览器页能显示自定义图标。")])])]),s._v(" "),a("h2",{attrs:{id:"请求变量处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求变量处理"}},[s._v("#")]),s._v(" 请求变量处理")]),s._v(" "),a("ul",[a("li",[s._v('请求路径/user/{id}，采用RestFul+@PathVariable("id")')]),s._v(" "),a("li",[s._v("如果请求路径包含"),a("strong",[s._v("请求参数")]),s._v('/user?id=2，使用@RequestParam("id")')]),s._v(" "),a("li",[s._v("如果是"),a("strong",[s._v("通过post表单")]),s._v('传到服务器，也可以使用@RequestParam("id")')]),s._v(" "),a("li",[a("strong",[s._v("如果处理方法参数名和请求里变量名相同，则形参可以不加注解，springboot自动绑定")])]),s._v(" "),a("li",[a("font",{attrs:{color:"red",size:"5"}},[s._v("当需要进行页面跳转时，只能@Controller，此时return “redirect:/”才会生效，然后在需要把变量写到浏览器页面的方法用@responseBody，当且仅当controller所有方法都需要显示在页面才使用@RestController")])],1),s._v(" "),a("li",[s._v("session->jsessionid放入cookie->然后每次请求携带这个cookie，因此能找到对应会话存的变量。")]),s._v(" "),a("li",[s._v("分号;后矩阵变量@MatrixVariable(springBoot默认禁用，需要手动开启)")])]),s._v(" "),a("h2",{attrs:{id:"响应处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应处理"}},[s._v("#")]),s._v(" 响应处理")]),s._v(" "),a("p",[s._v("返回值解析器，判断是不是异步返回值")]),s._v(" "),a("p",[s._v("返回值处理器根据返回值类型，找到匹配的返回值处理器。")]),s._v(" "),a("ul",[a("li",[s._v("@ResponseBody\n"),a("ul",[a("li",[s._v("内容协商，浏览器告诉服务器它能接受什么样的内容数据")]),s._v(" "),a("li",[s._v("服务器生产对应内容类型数据")]),s._v(" "),a("li",[s._v("SpringMVC遍历消息转换器HttpMessageConverter，看谁能处理(支不支持将Person类转成json)")])])])]),s._v(" "),a("p",[s._v("请求头Accepter可以指示浏览器接受的数据类型")]),s._v(" "),a("h2",{attrs:{id:"thymeleaf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thymeleaf"}},[s._v("#")]),s._v(" Thymeleaf")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("创建一个包含公共块儿的公共页面common.html,并自定义声明片段")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<div th:fragment="headermenu" class="header-section">\n</div>\n--------id形式-------------\n<div id="headermenu" class="header-section">\n</div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("然后在其他页面使用th:insert(common代码块所有内容插入到a标签行内)，th:replace(common代码块整体替代a标签)导入")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<a th:replace="common::headermenu"></a>\n<a th:insert="common::headermenu"></a>\n------id形式------\n<a th:replace="common::#headermenu"></a>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"拦截器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拦截器"}},[s._v("#")]),s._v(" 拦截器")]),s._v(" "),a("p",[s._v("拦截器配置步骤：")]),s._v(" "),a("ol",[a("li",[s._v("编写拦截器配置类并放置在容器中(实现WebMvcConfigurer接口)，配置中指明加载哪些拦截器，拦截哪些路径\n"),a("ul",[a("li",[s._v('addPathPatterns("/**")：表示拦截所有请求路径，包括静态资源')]),s._v(" "),a("li",[s._v("excludePathPatterns")])])]),s._v(" "),a("li",[s._v("编写拦截器，实现HandleInterceptor接口\n"),a("ul",[a("li",[s._v("preHandle方法，在Controller方法之前执行")]),s._v(" "),a("li",[s._v("postHandle方法，在Controller方法之后执行")]),s._v(" "),a("li",[s._v("afterCompletion方法，在页面渲染结束之后执行")])])])]),s._v(" "),a("h2",{attrs:{id:"文件上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件上传"}},[s._v("#")]),s._v(" 文件上传")]),s._v(" "),a("p",[s._v('前端表单type="file"，如果上传的文件数量有多个，则添加multiple')]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("input")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("photos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("multiple")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Controller中，使用springboot封装好的的MultipartFile类来接收文件，服务器通过transferTo(new File(path+getOriginalFilename))方法来将文件保存到指定的路径。通过getOriginalFilename获取文件名。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@PostMapping("/upload")\npublic String upload(String email, String username, MultipartFile headerImg, MultipartFile[] photos) throws IOException {\n    if(!headerImg.isEmpty())\n    headerImg.transferTo(new File("/"+headerImg.getOriginalFilename()));\n    return "main";\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);