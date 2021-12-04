/*
 * @Date: 2021-12-04 21:29:37
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-04 21:47:46
 * 基本类型数据都是深拷贝
 * 引用类型都是存储在堆里面，拷贝仅仅是拷贝了地址
 */

// 解构赋值一维数组，对象是深拷贝, 二维则不生效
let arr = [1,2,3]
let arr2 = [...arr]
arr2.push(4)
// arr2 != arr

// 大部分情况的深拷贝

let newList = JSON.parse(JSON.stringify(list))

//手写
function deepClone(sourse) {
    // 临时容器 判断是数组与对象的最准确方式 ------》 通过构造器查看
    const targetObj = sourse.constructor = Array ? [] : {}
    for(let keys in sourse){
        // hasProperty 返回布尔值 指示对象自身属性中是否有指定属性（健）
        if(sourse.hasOwnProperty(keys)){
            // 数组与对象
            if(sourse[keys] && sourse[keys] === 'object'){
                targetObj[keys] = sourse[keys].constructor === Array ? [] : {}
                targetObj[keys] = deepClone(sourse[keys])
            } else {
                // 基础类型
                targetObj[keys] = sourse[keys]
            }
        }
    }
    return targetObj
}


