(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{645:function(e,t,s){"use strict";s.r(t);var a=s(4),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"servlet优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#servlet优化"}},[e._v("#")]),e._v(" "),t("font",{attrs:{color:"red",size:"5"}},[e._v("Servlet优化")])],1),e._v(" "),t("h2",{attrs:{id:"反射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反射"}},[e._v("#")]),e._v(" 反射")]),e._v(" "),t("p",[e._v("先前对应一个功能会请求一个servlet再找DAO，代码冗余。优化的做法是可以用一个统一的servlet处理，不同功能由这个servlet中的不同方法处理响应，在会话中存放一个操作字段，来通过swtich跳转对应方法。")]),e._v(" "),t("p",[e._v("上述方法switch过长时，"),t("font",{attrs:{color:"red"}},[t("strong",[e._v("可以使用反射技术获取方法名直接invoke调用")]),e._v("。")])],1),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Method[] methods = this.getClass().getDeclaredMethods();\n\tfor (Method m : methods) {\n        String methodname = m.getName();\n        if (methodname.equals(operate)) {\n            try {\n            m.invoke(this, req, resp);\n            }\n          \tcatch (IllegalAccessException e) {\n            throw new RuntimeException(e);\n            } catch (InvocationTargetException e) {\n            throw new RuntimeException(e);\n            }\n        \treturn;\n        }\n\t}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br")])]),t("h2",{attrs:{id:"dispatcher控制器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dispatcher控制器"}},[e._v("#")]),e._v(" Dispatcher控制器")]),e._v(" "),t("p",[e._v("通过servletpath(add.do)=>截取到add=>把add对应上它的controller。"),t("strong",[e._v("好处在于当有多个实体的servlet时，不需要一个个单独写反射代码，全部由工厂生成")]),e._v("。")]),e._v(" "),t("ul",[t("li",[e._v("设置配置文件")]),e._v(" "),t("li",[e._v("t通过类加载器反射，解析加载配置文件")]),e._v(" "),t("li",[e._v("获取一个个bean，并实例化对应controller对象，和key丢到map中")]),e._v(" "),t("li",[e._v("通过servletpath获取key，然后从map中找到对应的对象。")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('protected void init(){\n//通过类加载去读取资源文件\nInputStream inputStream = getClass().getClassLoader().getResourceAsStream("applicationContext.xml");\n//创建工厂\nDocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();\n//创建DocumentBuilder对象\nDocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();\n//创建document对象\nDocument document=documentBuilder.parse(inputStream);\n//获取所有bean节点\nNodeList beanNodeList = document.getElementsByTagName("bean");\nfor (int i = 0; i < beanNodeList.getLength(); i++) {\n    Node beanNode = beanNodeList.item(i);\n    if (beanNode.getNodeType() == Node.ELEMENT_NODE) {\n        Element beanElement = (Element) beanNode;\n        String beanId = beanElement.getAttribute("id");\n        String className = beanElement.getAttribute("class");\n        //通过类名反射创建一个实例对象\n        Object beanObj = forName(className).newInstance();\n        //beanMap<controllerName,controllerObject>\n        beanMap.put(beanId, beanObj);\n    }\n}\n----------\nprotected void service(HttpServletRequest req, HttpServletResponse resp){\n//通过ServletPath()可以获取页面请求url的路径\nString servletpath = req.getServletPath();\nString controllerName = servletpath.substring(1,servletpath.lastIndexOf(".do"));\nObject controllerBeanobj = beanMap.get(servletPath);\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br")])]),t("p",[t("font",{attrs:{color:"blue"}},[e._v("这里bean节点的集合NodeList分类两类节点，一类是文本节点，一类是元素节点。NodeList类似于数组，通过NodeList.item(i)遍历，NodeList.getLength()获取长度。然后把每个节点强转成Element类型，就可以通过getAttributr()来读取每一个bean标签里的属性值。")])],1),e._v(" "),t("h2",{attrs:{id:"提取视图资源处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提取视图资源处理"}},[e._v("#")]),e._v(" 提取视图资源处理")]),e._v(" "),t("p",[e._v("把所有的重定向和使用Thymeleaf视图都交给Dispatcher进行处理，具体做法是：")]),e._v(" "),t("ul",[t("li",[e._v("设置controller中所有的方法都会返回一个String，"),t("strong",[e._v("把对应要重定向的资源或者是视图资源以String的方式以为返回值输出")]),e._v("。")]),e._v(" "),t("li",[e._v("在DispatcherController中对于重定向处理，则使用中央控制器的HttpServletResponse来进行，对于视图资源请求则直接调用父类方法即可。")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Object returnObj = method.invoke(controllerBeanobj, req);\nString methodReturnStr = (String) returnObj;\n//视图处理\nif (methodReturnStr.startsWith("redirect:")) {\n    String redirectStr=methodReturnStr.substring("redirect:".length());\n    resp.sendRedirect(redirectStr);\n}\nelse {\n    super.processTemplate(methodReturnStr, req, resp);\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("h2",{attrs:{id:"统一获取请求过程传的参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#统一获取请求过程传的参数"}},[e._v("#")]),e._v(" 统一获取请求过程传的参数")]),e._v(" "),t("p",[e._v("把所有业务方法中通过req.getParameter获取页面参数数据的部分都抽取出去，由Dispatcher控制器统一负责实现，要解决的问题：")]),e._v(" "),t("ul",[t("li",[e._v("要知道每个DeclaredMethod方法的参数名，参数类型。在idea中java-compiler添加-parameters，编译时能够通过"),t("strong",[e._v("method.getParameters()获取到的参数包含名称信息")]),e._v("。")]),e._v(" "),t("li",[t("strong",[e._v("参数名称：parameter.getName()。参数类型：parameter.getType().getName()")])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('for (int i = 0; i < parameters.length; i++) {\n    Parameter parameter = parameters[i];\n    if (parameter.getName().equals("req")) {\n        parametersValues[i] = req;\n    }else if(parameter.getName().equals("resp")){\n        parametersValues[i] = resp;\n    }else if(parameter.getName().equals("session")){\n        parametersValues[i] = req.getSession();\n    }else {\n        Object paraValue;\n        //针对类型名来初始化对应实参的类型\nif (parameter.getType().getName().equals("java.lang.Integer")) {\n  paraValue= Integer.parseInt(req.getParameter(parameter.getName()));\n        }\n        parametersValues[i] = req.getParameter(parameter.getName());\n    }}\n//将参数数组传入方法中\nObject returnObj = method.invoke(controllerBeanobj, parametersValues);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);