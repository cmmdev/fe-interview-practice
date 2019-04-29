/**
 * 
 * 最长回文子串
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 * 
 */


 /**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length <= 1) return s
    const len = s.length
    let maxL = 0;
    let maxR = 0;
    let maxLen = 1;

    for (let i = 0; i < len; i++) {
        let lIndex = i
        let rIndex = i
        while (lIndex >= 0 && lIndex < len && s[lIndex] == s[rIndex]) {
            if (rIndex-lIndex + 1 > maxLen) {
                maxLen = rIndex-lIndex + 1
                maxL = lIndex
                maxR = rIndex
            }
            lIndex--;
            rIndex++;
        }

        lIndex = i
        rIndex = i+1
        while (lIndex >= 0 && lIndex < len && s[lIndex] == s[rIndex]) {
            if (rIndex-lIndex + 1 > maxLen) {
                maxLen = rIndex-lIndex + 1
                maxL = lIndex
                maxR = rIndex
            }
            lIndex--;
            rIndex++;
        }
    }
    return s.slice(maxL,maxR+1)
};

console.log(longestPalindrome('cbbd'))