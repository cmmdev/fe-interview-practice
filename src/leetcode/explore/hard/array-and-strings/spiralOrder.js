/**
 * 螺旋矩阵
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

/**
* @param {number[][]} matrix
* @return {number[]}
*/
var spiralOrder = function (matrix) {

    if (!matrix || !matrix.length) return []
    const H = matrix.length
    const W = matrix[0].length
    if (!W) return []

    let ret = []

    const R = Math.ceil(Math.min(H, W) / 2)

    for (let i = 0; i < R; i++) {
        let width = W - 2 * i
        let height = H - 2 * i

        if (width == 1) {
           ret.push(...visit(matrix, i, i, height, 1))
        } else if (height == 1) {
           ret.push(...visit(matrix, i, i, width, 0))
        } else {
            ret.push(...visit(matrix, i, i, width-1, 0))
            ret.push(...visit(matrix, W-i-1, i, height-1, 1))
            ret.push(...visit(matrix, W-i-1, H-i-1, width-1, 2))
            ret.push(...visit(matrix, i, H-i-1, height-1, 3))
        }
    }
    return ret
};

// direction: 0: 右；1；下；2：左；3：上
function visit(matrix, startX, startY, len, direction) {
    let ret = []
    for (let i = 0; i < len; i++) {
        if (direction === 0) {
            ret.push(matrix[startY][startX + i])
        } else if (direction === 1) {
            ret.push(matrix[startY + i][startX ])
        } else if (direction === 2) {
            ret.push(matrix[startY][startX - i])
        } else if (direction === 3) {
            ret.push(matrix[startY -i][startX])
        }
    }
    return ret;
}

console.log(spiralOrder([
    [ 1, 2, 3, 4 ],
    [ 4,6,7,8 ],
    [ 9,10,11,12 ],
    [ 13,14,15,16 ]
   ]))

//    console.log(spiralOrder([
//     [1,2],[3,4]
//    ]))