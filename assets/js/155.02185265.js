(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{472:function(n,s,t){"use strict";t.r(s);var e=t(4),r=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"_222-完全二叉树的节点个数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_222-完全二叉树的节点个数"}},[n._v("#")]),n._v(" "),s("a",{attrs:{href:"https://leetcode.cn/problems/count-complete-tree-nodes/",target:"_blank",rel:"noopener noreferrer"}},[n._v("222. 完全二叉树的节点个数"),s("OutboundLink")],1)]),n._v(" "),s("h2",{attrs:{id:"_1-完全二叉树中的子问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-完全二叉树中的子问题"}},[n._v("#")]),n._v(" 1.完全二叉树中的子问题")]),n._v(" "),s("p",[n._v("核心思路是"),s("font",{attrs:{color:"red"}},[s("strong",[n._v("找到满二叉树，因为它的节点个数可以直接根据树高进行计算")])]),n._v("。对于一棵完全二叉树：")],1),n._v(" "),s("ul",[s("li",[n._v("左子树的树高等于右子树的树高：说明"),s("strong",[n._v("左子树一定是一棵满二叉树")]),n._v("。此时只需要遍历右子树")]),n._v(" "),s("li",[n._v("左子树不等于右子树的树高：右子树高肯定小于左子树书高。说明"),s("strong",[n._v("右子树一定是一棵满二叉树")]),n._v("。此时只需要遍历左子树。")])]),n._v(" "),s("p",[n._v("计算树高时，因为完全二叉树的结构，每次只需要遍历左孩子节点，存在则层数加一。")]),n._v(" "),s("p",[n._v("树高计算时间复杂度O(log2 n)，整个二叉树的总层数O(log2 n)，每一层都会有两个节点进行树高计算，因此总时间复杂度O(log2 n * log2 n)")]),n._v(" "),s("div",{staticClass:"language-jade line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("class Solution {\n    public int countNodes(TreeNode root) {\n        int res=0;\n        while(root!=null){\n            int leftdep=getDepth(root.left);\n            int rightdep=getDepth(root.right);\n            if(leftdep==rightdep){\n                res+=(1<<leftdep);\n                root=root.right;\n            }\n            else{\n                res+=(1<<rightdep);\n                root=root.left;\n            }\n        }\n        return res;\n    }\n    public int getDepth(TreeNode root){\n        int  depth=0;\n        while(root!=null){\n            root=root.left;\n            depth++;\n        }\n        return depth;\n    }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);