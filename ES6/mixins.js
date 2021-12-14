/*
 * @Date: 2021-12-14 22:25:12
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-14 22:32:34
 */
export function mixins(...list) {
    return function (target) {
        //Object.assign(target, ...source)
        Object.assign(target.prototype, ...list)
    }
}