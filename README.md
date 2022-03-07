<!--
 * @Date: 2021-11-25 13:36:50
 * @LastEditors: youyi
 * @LastEditTime: 2022-03-07 16:34:53
-->
# Free-and-useless
Free and useless
学习笔记📒

# mini-vue
mini vue在创建Vue实例时
Vue类负责把data中的属性注入到Vue实例，并调用Observer类和Compiler类。
Observer类负责数据劫持，把每一个data转换成getter和setter。其核心原理是通过Object.defineProperty实现。
Compiler类负责解析指令和插值表达式（更新视图的方法）。
Dep类负责收集依赖、添加观察者模式。通知data对应的所有观察者Watcher来更新视图。在Observer类把每一个data转换成getter和setter时，会创建一个Dep实例，用来负责收集依赖并发送通知。在每一个data中在getter中收集依赖。在setter中通知依赖，既通知所有Watcher实例新视图。
Watcher类负责数据更新后，使关联视图重新渲染。