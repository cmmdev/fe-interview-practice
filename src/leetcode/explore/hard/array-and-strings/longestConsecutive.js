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
var longestConsecutive = function(nums) {
  const startMap = new Map()
  const endMap = new Map()

  nums.forEach(num => {
    startMap.set(num, num)
    endMap.set(num, num)
  })

  nums.forEach(num => {
    let start, end
    if (startMap.get(num - 1) && endMap.get(num + 1)) {
      start = startMap.get(num - 1)
      end = endMap.get(num + 1)
    } else if (startMap.get(num - 1)) {
      start = startMap.get(num - 1)
      end = num
    } else if (endMap.get(num + 1)) {
      start = num
      end = endMap.get(num + 1)
    } else {
      return
    }
    startMap.set(end, Math.min(start, startMap.get(end)))
    endMap.set(start, Math.max(end, endMap.get(start)))
  })

  let max = 0
  nums.forEach(num => {
    let range = endMap.get(num) - startMap.get(num) + 1
    if (range > max) {
      max = range
    }
  })
  return max
}

exports.longestConsecutive = longestConsecutive

console.log(longestConsecutive([4, 1, 2, 0, 1, 5, 1, 2, 3]))
console.log(
  longestConsecutive([
    -4,
    -1,
    4,
    -5,
    1,
    -6,
    9,
    -6,
    0,
    2,
    2,
    7,
    0,
    9,
    -3,
    8,
    9,
    -2,
    -6,
    5,
    0,
    3,
    4,
    -2
  ])
)
