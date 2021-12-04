/*
 * @Date: 2021-12-02 10:35:26
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-02 11:15:48
 */
let a = [1,2,3]
let b = [2,4,5]

//取交集
let mix1 = a.filter(e => b.includes(e))

let aSet = new Set(a)
let bSet = new Set(b)
let mix2 = Array.from(a.filter(e => bSet.has(e)))

let mix3 = a.filter(e => b.indexOf(e) > -1)

//取并集
let plus1 = b.concat(a.filter(e => !b.includes(e)))

let plus2 = Array.from(new Set(a.concat(b)))

let plus3 = b.concat(a.filter(e => b.indexOf(e) < 0))

// 取差集
let diff = a.concat(b).filter(e => !a.includes(e) || !b.includes(e))

let diff2 = Array.from(new Set(b.concat(a).filter(e => !aSet.has(e) || !bSet.has(e))))

let diff3 = a.concat(b).filter(e => b.indexOf(e) < 0 || a.indexOf(e) < 0)