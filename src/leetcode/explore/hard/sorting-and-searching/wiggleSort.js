/**
 * 摆动排序 II
给定一个无序的数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

示例 1:

输入: nums = [1, 5, 1, 1, 6, 4]
输出: 一个可能的答案是 [1, 4, 1, 5, 1, 6]
示例 2:

输入: nums = [1, 3, 2, 2, 3, 1]
输出: 一个可能的答案是 [2, 3, 1, 3, 1, 2]
说明:
你可以假设所有输入都会得到有效的结果。

进阶:
你能用 O(n) 时间复杂度和 / 或原地 O(1) 额外空间来实现吗？
 * 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// inplace method
var wiggleSort1 = function(nums) {
  nums.sort((x,y) => x-y)
  let len = nums.length
  const halfLen = Math.floor(len / 2)
  const odd = halfLen % 2 == 1
  for (let i = 1; i < halfLen; i += 2) {
    if (odd) {
      ;[nums[i], nums[halfLen + i]] = [nums[halfLen + i], nums[i]]
    } else {
      ;[nums[i], nums[halfLen + i - 1]] = [nums[halfLen + i - 1], nums[i]]
    }
  }
  if (len % 2 == 1) {
    ;[nums[len - 2], nums[len - 1]] = [nums[len - 1], nums[len - 2]]
  }
}

// O(n) method
// 1. median value
// < x
// > x
// = x
// feed array
var wiggleSort2 = function(nums) {
  let len = nums.length
  let halfLen = Math.ceil(len / 2)
  let mid = findNth(nums, halfLen)

  let gts = nums.filter(num => num > mid)
  let lts = nums.filter(num => num < mid)
  let eqs = nums.filter(num => num == mid)

  let sLen = halfLen - lts.length
  let eLen = eqs.length - sLen

  lts = lts.concat(eqs.slice(0, sLen))
  gts = eqs.slice(0, eLen).concat(gts)

  for (let i = 0, len = Math.max(gts.length, lts.length); i < len; i++) {
    if (i < lts.length) {
      nums[i*2]=lts[i]
    }
    if (i < gts.length) {
      nums[i*2+1] = gts[i]
    }
  }
}

function findNth(nums, n) {
  if (nums.len == 1) {
    return nums[0]
  }
  let gts = nums.filter(num => num > nums[0])
  let lts = nums.filter(num => num < nums[0])
  let eqs = nums.filter(num => num == nums[0])
  if (n <= lts.length) {
    return findNth(lts, n)
  } else if (n > lts.length && n <= lts.length + eqs.length) {
    return eqs[0]
  } else {
    return findNth(gts, n - lts.length - eqs.length)
  }
}

console.log(wiggleSort1([1, 5, 1, 1, 6, 4, 7]))
exports.wiggleSort = wiggleSort1
