

function editDistance(s1, s2) {
  if (!s1) return s2
  else if (!s2) return s1

  const len1 = s1.length
  const len2 = s2.length

  let dp = new Array(len1).fill(undefined)
  dp.forEach((_, index) => {dp[index] = new Array(len2).fill(-1)})

  dp[0][0] = s1[0] == s2[0] ? 0 : 1
  for (let i = 1; i < len1; i++) {
    if (s1[i]==s2[0]) {
      dp[i][0] = i
    } else {
      dp[i][0] = dp[i-1][0] + 1
    }
  }

  for (let j = 1; j < len2; j++) {
    if (s2[j] == s1[0]) {
      dp[0][j] = j
    } else {
      dp[0][j] = dp[0][j-1] + 1
    }
  }

  for (let i = 1; i < len1; i++) {
    for (let j = 1; j < len2; j++) {
      if (s1[i] == s2[j]) {
        dp[i][j] = dp[i-1][j-1]
      } else {
        dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j-1], dp[i-1][j]) + 1
      }
    }
  }
  return dp[len1-1][len2-1]

}

console.log(editDistance("cmmxabc","cmyabcx"))