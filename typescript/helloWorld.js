var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * @Date: 2021-12-13 22:00:47
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-13 23:02:17
 */
// 强类型
var flag = true;
var num = 12;
var arr = [1, 2, 3];
var arr1 = [1, 2, 3];
var arr2 = [1, '22', 3];
// 枚举 首字母大写
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
})(Flag || (Flag = {}));
var s = Flag.success;
// 任意类型any 来获取元素
var box = document.getElementById('box');
// undefined
var unum;
console.log(unum);
// void 无返回值
function get() {
    console.log('无返回值');
}
// never 不会出现的值 
var a;
a = (function () {
    throw new Error('错误🙅');
})();
function run() {
    return '123';
}
function run2() {
    return 123;
}
// 函数传参 ？为缺省值 非必选
// 可选参数放在必选参数后面
function getInfo(name, age) {
    return "".concat(name, "---").concat(age);
}
console.log(getInfo('123'));
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.run = function () {
        return "".concat(this.name);
    };
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(name) {
        return _super.call(this, name) || this;
    }
    return BMW;
}(Car));
var b = new BMW('宝马');
b.run();
// 泛型
function test(name) {
    return name;
}
test(123);
// 转化成js
// tsc helloWorld.ts
// 实时转化成js
// tsc --init 然后打开tsconfig.json 找到outDir：‘./js’ 输出到目录
