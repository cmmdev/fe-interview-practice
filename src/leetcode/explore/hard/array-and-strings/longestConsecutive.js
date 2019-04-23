/**
 * 最长连续序列
给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 O(n)。

示例:

输入: [100, 4, 200, 1, 3, 2]
输出: 4
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
 */

/**
* @param {number[]} nums
* @return {number}
*/
var longestConsecutive = function (nums) {
    const rangeMap = new Map()
    nums.forEach(num => {
        if (!rangeMap.get(num)) {
            rangeMap.set(num, [num, num])
        }
    })
    nums.forEach(num => {
        if (rangeMap.get(num - 1) || rangeMap.get(num + 1)) {
            if (rangeMap.get(num - 1)) {
                let [min, max] = rangeMap.get(num)
                rangeMap.set(num, rangeMap.get(num - 1))

                rangeMap.get(num)[0] = Math.min(rangeMap.get(num)[0], min)
                rangeMap.get(num)[1] = Math.max(rangeMap.get(num)[1], max)
            }

            if (rangeMap.get(num + 1)) {
                let [min, max] = rangeMap.get(num)
                rangeMap.set(num, rangeMap.get(num + 1))
                rangeMap.get(num)[0] = Math.min(rangeMap.get(num)[0], min)
                rangeMap.get(num)[1] = Math.max(rangeMap.get(num)[1], max)
            }
        }
    })
    let max = 0;
    nums.forEach(num => {
        let range = rangeMap.get(num)[1] - rangeMap.get(num)[0] + 1
        if (range > max) {max = range}
    })
    console.log(rangeMap)
    return max
};

// console.log(longestConsecutive([1, 2, 0, 1]))
console.log(longestConsecutive([-4,-1,4,-5,1,-6,9,-6,0,2,2,7,0,9,-3,8,9,-2,-6,5,0,3,4,-2]))