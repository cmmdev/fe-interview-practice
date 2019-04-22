/**
 * 第一个缺失的正数
给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

示例 1:

输入: [1,2,0]
输出: 3
示例 2:

输入: [3,4,-1,1]
输出: 2
示例 3:

输入: [7,8,9,11,12]
输出: 1
说明:

你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let len  = nums.length
  for (let i = 0; i < len; i++) {
    let num = nums[i]

    if (num == i + 1 || num > len || num <= 0) {
      continue
    }

    do {
      let temp = nums[num - 1]
      nums[num - 1] = num
      num = temp
    } while (!(num == nums[num - 1] || num <= 0 || num > len))
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] != i+1) {
      return i+1
    }
  }
  return len+1
}


console.log(firstMissingPositive([1]))
