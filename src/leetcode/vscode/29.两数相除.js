/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {

    const MAX = 2**31-1
    const MIN = -(2**31)
    let ans = 0, up = Math.abs(dividend), down = Math.abs(divisor)
    while(up >= down) {
        let base = down
        let count = 1
        while(up >= (base << 1) && (base << 1) > 0) {
            base <<= 1
            count <<= 1
        }
        ans += count
        up -= base
    }

    let sign = dividend * divisor >= 0

    if (sign && ans > MAX) return MAX
    else if (!sign && ans < MIN) return MIN
    else return sign ? ans: -ans
};
// console.log(divide(-2147483648, 1))
