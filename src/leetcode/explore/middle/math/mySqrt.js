/**
 * 
 * x 的平方根
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
 * 
 */

 /**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x == 0 ) {
        return 0
    }
    let x0 = 1, y0 = 1;
    while(true) {
        y1 = y0 + 1/(2*y0)*(x-x0);

        if (Math.abs(y0-y1) == 0) {
            let ret = y0;
            if (ret*ret > x) {return ret-1}
            return ret
        }
        y0 = y1;
        x0 = y0*y0;
    }
};      

console.log(mySqrt(2147395599))