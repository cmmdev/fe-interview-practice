/**
 * Product of Array Except Self
给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

示例:

输入: [1,2,3,4]
输出: [24,12,8,6]
说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

进阶：
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  if (!nums || nums.length <= 1) return NaN

  let prefix = []
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (i == 0) {
      prefix[i] = nums[i]
    } else {
      prefix[i] = prefix[i - 1] * nums[i]
    }
  }

  // nums posfix
  for (let i = len - 1; i >= 0; i--) {
    if (i == len - 1) {
      continue
    } else {
      nums[i] = nums[i] * nums[i + 1]
    }
  }

  let head = nums[1]
  let tail = prefix[len - 2]

  for (let i = len - 2; i >= 1; i--) {
    prefix[i] = prefix[i - 1] * nums[i + 1]
  }
  prefix[0] = head
  prefix[len - 1] = tail

  return prefix
}

exports.productExceptSelf = productExceptSelf

// console.log(productExceptSelf([2, 1, 3, 4]))
