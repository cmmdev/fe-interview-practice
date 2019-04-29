/**
 * 
 * 快乐数
编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

示例: 

输入: 19
输出: true
解释: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 * 
 */

 /**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let visited = new Set()
    while(n != 1 && !visited.has(n)) {
        visited.add(n)

        console.log('loop:' + n)
        let arr = numb2arr(n)
        n = arr2num(arr)
        console.log('loop:' + n)

    }
    if (n==1) {
        return true
    }
    return false
    
};

function numb2arr(num) {
    let ret = []
    do {
        let time = Math.floor(num / 10)
        let rem = num % 10
        ret.push(rem)

        num = time
    } while(num > 0)
    return ret.reverse()
}

function arr2num(arr) {
    return arr.map(item=>item*item).reduce((a,b) => a+b, 0)
}

console.log(isHappy(2))