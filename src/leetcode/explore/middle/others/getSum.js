/**
 * 
 * 两整数之和
不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。

示例 1:

输入: a = 1, b = 2
输出: 3
示例 2:

输入: a = -2, b = 3
输出: 1

 * 
 */

 /**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    
    while (b != 0) {
        [a, b] = [a ^ b, a & b]
        b = b << 1
    }
    return a
    
};

console.log(getSum(1,2), getSum(-3, -4), getSum(3, 9))