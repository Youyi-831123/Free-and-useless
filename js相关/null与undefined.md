<!--
 * @Date: 2021-12-15 15:15:17
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-15 15:26:44
-->
null == undefined true
null === undefined false

typeOf null = 'object'
typeOf undefined = 'undefined'

相同点：用if判断时，两者都会转化成false

区别：
        null： Null类型，代表“空值”，代表一个空对象指针，使用typeOf运算得到 “object”，所以你可以认为它是一个特殊的对象值。

        undefined： Undefined类型，当一个声明了一个变量未初始化时，得到的就是undefined。

实际上，undefined值是派生自null值的


2、那到底什么时候是null,什么时候是undefined呢？

   null表示"没有对象"，即该处不应该有值。典型用法是：

（1） 作为函数的参数，表示该函数的参数不是对象。

（2） 作为对象原型链的终点。

undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：

（1）变量被声明了，但没有赋值时，就等于undefined。

（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。

（3）对象没有赋值的属性，该属性的值为undefined。

（4）函数没有返回值时，默认返回undefined。

