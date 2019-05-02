/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const len = T.length
    let res = new Array(len).fill(0)
    let stack = []
    for(let i =len-1; i>=0; i--) {
        while(stack.length > 0 && T[i] >T[stack[stack.length-1]]) {
            console.log(stack)
            stack.pop()
        }
        if (stack.length == 0) {
            res[i] = 0
        } else {
            res[i] = stack[stack.length-1] -i
        }
        console.log(stack)
        stack.push(i)
    }
    return res
    
};

dailyTemperatures([73,74,75,71,69,72,76,73]
    )
