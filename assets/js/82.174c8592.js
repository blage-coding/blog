(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{400:function(i,n,s){"use strict";s.r(n);var m=s(4),t=Object(m.a)({},(function(){var i=this,n=i._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[n("h1",{attrs:{id:"_152-乘积最大子数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_152-乘积最大子数组"}},[i._v("#")]),i._v(" 152.乘积最大子数组")]),i._v(" "),n("p",[i._v("给你一个整数数组 "),n("code",[i._v("nums")]),i._v(" ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。")]),i._v(" "),n("blockquote",[n("p",[i._v("输入: [2,3,-2,4]\n输出: 6")])]),i._v(" "),n("ol",[n("li",[n("p",[i._v("一开始想法是压缩数组，因为题目保证数组元素都是整数，因此"),n("strong",[i._v("可以把连续的正整数子数组压缩为它们的乘积")]),i._v("，之后再用双指针法遍历压缩后的数组，但是求最大乘积时情况比较复杂，要判断两个指针之间有一个负数？负数之间是否插有整数？碰到0又该怎么处理？可以达到时间O(n)空间O(1)。")])]),i._v(" "),n("li",[n("p",[i._v("动规。起初想用动规的时候发现，如果定义dp[i]表示插入nums[i]形成的最大子数组乘积，状态转移方程:\ndp[i]=max(nums[i]，dp[i-1]*nums[i]),最大乘积子数组会从负号断开,错过两个负号构成的最大子数组乘积的情况，就没使用动规。实际上，"),n("strong",[i._v("可以定义一个dpmax[i]表示插入nums[i]形成的最大子数组乘积,再定义dpmin[i]表示插入nums[i]形成的最小子数组乘积")]),i._v("，这样子dpmax[i]就会有三种情况，"),n("strong",[i._v("如果nums[i]为正数")]),i._v("，要么最大子数组没有断开dpmax[i]=dpmax[i-1]*nums[i]，要么前面为负数,nums[i]另起一个最大子数组作为最左端dpmax[i]=nums[i]。"),n("strong",[i._v("而如果nums[i]为负数")]),i._v("，它可能作为前面连续子数组中第二个负数dpmax[i]=dpmin[i-1]*nums[i]。因此状态转移方程有:")]),i._v(" "),n("p",[n("strong",[i._v("dpmax[i]=Math.max(nums[i]，dpmax[i-1]*nums[i]，dpmin[i-1]*nums[i]);")])]),i._v(" "),n("p",[n("strong",[i._v("dpmin[i]=Math.min(nums[i]，dpmax[i-1]*nums[i]，dpmin[i-1]*nums[i]);")])])])])])}),[],!1,null,null,null);n.default=t.exports}}]);