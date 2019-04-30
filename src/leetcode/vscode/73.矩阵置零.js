/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  // find 0的位置和坐标
  let found = false;
  let sx = -1, sy = -1
  let len = matrix.length
  let width = len > 0 ? matrix[0].length : 0
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < width; j++) {
          if (matrix[i][j] ==0) {
              found = true;
              sy = i;
              sx = j;
              break;
          }
      }
      if (found) break;
  }
  
  if (!found) return;
  // 信息存在sy行和sx列
  for (let i = 0; i < len ; i++) {
      for (let j = 0; j < width; j++) {
        if (i != sy &&  j != sx)
          if (matrix[i][j] ==0) {
              matrix[sy][j]=0
              matrix[i][sx]=0
          }
      }
  }

  for (let i = 0; (i < len); i++) {
    if (i == sy) continue
      for (let j = 0; (j < width); j++) {
        if (j == sx) continue
          if (matrix[sy][j] ==0 || matrix[i][sx] ==0) {
              matrix[i][j] = 0
          }
      }
  }

  for (let i = 0; i < len; i++) {
    matrix[i][sx] = 0
  }
  for (let j = 0; j < width; j++) {
    matrix[sy][j] = 0
  }
};
