/**
 * 
 * 无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let len = s.length
  if (len <= 1) return len

  let maxLen = -1
  let start = 0,
    end = 0

  let charDict = new Map()
  let maxizedChar = undefined
  while (start <= end && end < len) {
    if (!charDict.has(s[end])) {
      charDict.set(s[end], 1)
      maxLen = Math.max(maxLen, (end-start+1))
      end++
    } else {
      maxizedChar = s[end]

      while (start <= end && maxizedChar !== undefined) {
        if (s[start] === maxizedChar) {
          maxizedChar = undefined
          start++
          end++
          break
        } else {
          charDict.delete(s[start])
          start++
        }
      }
    }
  }
  return maxLen
}

console.log(lengthOfLongestSubstring('tmmzuxt'))
