(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{435:function(t,e,l){"use strict";l.r(e);var n=l(4),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_160-相交链表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_160-相交链表"}},[t._v("#")]),t._v(" 160.相交链表")]),t._v(" "),e("p",[t._v("给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。")]),t._v(" "),e("blockquote",[e("p",[t._v("输入：intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1\n输出：Intersected at '2'")])]),t._v(" "),e("ol",[e("li",[t._v("第一种思路是先分别遍历两个链表求两个的长度，再让"),e("strong",[t._v("长的链表指针减去长度之差")]),t._v("，使"),e("strong",[t._v("链表指针对齐")]),t._v("，让两个指针同步走直到相碰，返回结果。")]),t._v(" "),e("li",[t._v("另一种思路很巧妙，利用表长关系(A单独+A公共)+B单独=(B单独+B公共)+A单独,指针同步走，"),e("strong",[t._v("哪一边指针走到尾部就指向另外一边链表的头进入第二轮")]),t._v("，最后返回第二轮相碰节点。")]),t._v(" "),e("li",[t._v("条件赋值简便写法:")])]),t._v(" "),e("ul",[e("li",[t._v("p=alen>blen?headA:headB;")]),t._v(" "),e("li",[t._v("q=alen>blen?headB:headA;")])])])}),[],!1,null,null,null);e.default=s.exports}}]);