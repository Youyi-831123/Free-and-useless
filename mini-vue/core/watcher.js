/*
 * @Date: 2022-03-07 10:29:17
 * @LastEditors: youyi
 * @LastEditTime: 2022-03-07 11:07:38
 */
class Watcher{
    constructor(vm, key, cb){
        this.vm = vm
        this.key = key
        // 回调函数负责更新视图
        this.cb = cb

        // 把watcher对象记录到Dep类的静态属性target上
        Dep.target = this
        // 触发get 方法，在get中调用 addSub
        this.oldValue = vm[key]

        Dep.target = null
    }
    //数据变化时更新视图
    update(){
        const newValue = this.vm[this.key]
        if(newValue === this.oldValue) return
        //更新视图
        this.cb(newValue)
    }
}