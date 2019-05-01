/*
 * @lc app=leetcode.cn id=166 lang=javascript
 *
 * [166] 分数到小数
 */
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {

    if (denominator == 0) {
        return ""
    } else if(numerator == 0) {
        return "0"
    }else if (denominator < 0) {
        if (numerator < 0) {
            return fractionToDecimal(-numerator, -denominator)
        } else {
            return "-" + fractionToDecimal(numerator, -denominator)
        }
    } else if (numerator < 0) {
        return "-" + fractionToDecimal(-numerator, denominator)
    }


    let integ = Math.floor(numerator / denominator) // 整数
    let rem = numerator % denominator // 余数

    let frac = [] // 分数位
    let loopMap = new Map() // 记录已出现过的余数
    let loopStartIndex = -1;

    while (true) {
        if (rem == 0) {
            break; // 被整除
        }
        if (loopMap.has(rem)) {
            loopStartIndex = loopMap.get(rem)
            break; // 余数重复出现
        }

        let temp = rem
        rem = rem * 10
        let times = Math.floor(rem / denominator)
        frac.push(times)
        rem = rem % denominator
        loopMap.set(temp, frac.length - 1)
    }
    if (frac.length == 0) {
        return String(integ)
    } else if (loopStartIndex < 0) {
        return String(integ) + "." + frac.join('')
    } else {
        return String(integ) + "." + frac.slice(0, loopStartIndex).join('') + '(' + frac.slice(loopStartIndex).join('') + ')'
    }
};

console.log(fractionToDecimal(-11, 13))

