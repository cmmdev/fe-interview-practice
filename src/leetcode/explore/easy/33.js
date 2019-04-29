/**
 * 
 * 整数反转
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 * 
 */

 /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ret = 0
    if (x >= 0) ret = arr2num(num2arrReverse(x))
    else ret = -arr2num(num2arrReverse(-x))
    if (ret < -Math.pow(2, 31) || ret > (Math.pow(2,31) - 1)) {
        return  0
    }
    return ret
};

function num2arrReverse(num1) {
    let ret = []
    let num = num1
    do {
        let time = Math.floor(num/10)
        let rem = num % 10
        ret.push(rem)
        
        num = time
    } while(num != 0)
    return ret.reverse()
}

function arr2num(arr) {
    return arr.reduce((acc, b, index) => acc + b * 10 ** index, 0)
}