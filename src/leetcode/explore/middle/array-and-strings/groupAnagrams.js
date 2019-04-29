/**
 * 
 * 字谜分组
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。
 * 
 * 
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()
  for (let i = 0; i < strs.length; i++) {
    let dict = {}
    strs[i].split('').forEach(c => {
      if (dict[c]) {
        dict[c] = dict[c]+1
      } else {
        dict[c] = 1
      }
    })
    key = Object.keys(dict).sort().map(c=>''+c+dict[c]).join('')
    if (!map.has(key)) {
      map.set(key,[strs[i]])
    } else {
      map.get(key).push(strs[i])
    }
  }
  let ret = []
  for (let item of map.values()){
    ret.push(item)
  }
  return ret
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))