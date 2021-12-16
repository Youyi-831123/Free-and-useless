<!--
 * @Date: 2021-12-16 13:53:20
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-16 14:00:24
-->
position : relative 不脱离文档流，相当于自身定位

position : absolute 脱离文档流 定位是相对于离元素最近的设置了绝对或相对定位的父元素决定的，如果没有父元素设置绝对或相对定位，则元素相对于根元素即html元素定位

position : fixed 脱离文档流 相对于浏览器窗口定位

static 元素出现在正常流中