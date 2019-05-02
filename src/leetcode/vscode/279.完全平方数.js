/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let upper = Math.floor(Math.sqrt(n))
    let candidates = []
    for(let i =1;i <= upper; i++) {
        candidates.push(i*i)
    }
    
    let que = [0]
    let map = new Map()
    map.set(0, 0);

    while(que.length > 0) {
        let base = que.shift();
        for (let i =0, len = candidates.length; i < len && candidates[i] <= n-base; i++) {
            if(!map.has(base+candidates[i])) {
                map.set(base+candidates[i], 1+map.get(base))
                que.push(base+candidates[i])
                if (map.has(n)) {
                    return map.get(n)
                }
            }
        }
    }
    
};
