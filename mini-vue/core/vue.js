/*
 * @Date: 2022-03-05 15:37:28
 * @LastEditors: youyi
 * @LastEditTime: 2022-03-07 16:26:42
 */
class Vue{
    constructor(options){
        // 1.保存options数据
        this.$options = options || {}
        this.$data = options.data || {}
        this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el 
        //2.为了方便调用vm.msg 把data中成员转化成getter和setter，并注入到vue实例中
        this._proxyData(this.$data)
        //3.调用observer类 监听数据变化
        new Observer(this.$data)
        //4.调用compiler类 解析指令与插值表达式
        new Compiler(this)
    }
    _proxyData(data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get() {
                    return data[key]
                },
                set(newValue) {
                    if(newValue === data[key]){
                        return
                    }
                    data[key] = newValue
                }
            })
        })
    }
}