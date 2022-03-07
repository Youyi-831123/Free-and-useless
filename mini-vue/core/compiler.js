/*
 * @Date: 2022-03-07 11:18:07
 * @LastEditors: youyi
 * @LastEditTime: 2022-03-07 16:17:34
 */
class Compiler {
    constructor(vm){
        this.vm = vm
        this.el = vm.$el
        this.compiler(this.el)
    }
    //编译模版，处理文本节点和元素节点
    compiler(el){
        const childNodes = el.childNodes
        Array.from(childNodes).forEach(node => {
            if(this.isTextNode(node)){
                this.compilerText(node)
            } else if (this.isElementNode(node)){
                this.compilerElement(node)
            }
            // 判断node节点是否有子节点，如果有，递归调用compile
            if(node.childNodes.length){
                this.compiler(node)
            }
        })
    }
    // 编译元素节点，处理指令
    compilerElement(node){
        Array.from(node.attributes).forEach(attr => {
            let attrName = attr.name
            if(this.isDirective(attrName)){
                // 减去v-
                attrName = attrName.substr(2)
                const key = attr.value
                this.update(node, key, attrName)
            }
        })
    }
    //执行对应指令的方法
    update(node, key, attrName){
        let updateFn = this[attrName + 'Updater']
        updateFn && updateFn.call(this, node, this.vm[key], key)
    }

    //v-text
    textUpdater(node, value, key){
        node.textContent = value
        //创建watcher对象，当数据改变时更新视图
        new Watcher(this.vm, key, (newValue => {
            node.textContent = newValue
        }))
    }

    // v-model
    modelUpdater(node, value, key){
        node.value = value
        //创建watcher对象，当数据改变时更新视图
        new Watcher(this.vm, key, (newValue) => {
            node.value = newValue
        })
        //双向绑定
        node.addEventListener('input', () => {
            this.vm[key] = node.value
        })
    }
    // 编译文本节点，处理插值表达式
    compilerText(node){
        const reg = /\{\{(.+?)\}\}/
        let value = node.textContent
        if(reg.test(value)){
            // 匹配带括号的子表达式
            const key = RegExp.$1.trim()
            node.textContent = value.replace(reg, this.vm[key])
            //创建watcher对象，当数据改变时更新视图
            new Watcher(this.vm, key, (newValue) => {
                node.textContent = newValue
            })
        }
    }
    isDirective(attrName){
        return attrName.startsWith('v-')
    }
    isTextNode(node) {
        return node.nodeType === 3
    }
    isElementNode(node) {
        return node.nodeType === 1
    }
}