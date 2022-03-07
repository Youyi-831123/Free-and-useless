/*
 * @Date: 2022-03-07 09:46:16
 * @LastEditors: youyi
 * @LastEditTime: 2022-03-07 16:33:07
 */
class Observer{
    constructor(data){
        this.walk(data)
    }
    // 遍历data中的属性，转化成响应式数据
    walk(data) {
        if(!data || typeof data !== 'object'){
            return
        }
        Object.keys(data).forEach((key) => {
            this.defineReactive(data, key, data[key])
        })
    }
    defineReactive(obj, key, value){
        const that = this
        //负责收集依赖，发送通知
        let dep = new Dep()
        // 递归深层数据，使其变成响应式数据
        this.walk(value)
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get () {
                Dep.target && dep.addSub(Dep.target)
                return value
            },
            set(newValue){
                if(value === newValue) return 
                value = newValue
                // 如果新设置的值为对象，也进行解构，转化成响应式数据
                that.walk(newValue)
                // 发送通知
                dep.notify()
            }
        })
    }
}