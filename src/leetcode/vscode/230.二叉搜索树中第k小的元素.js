/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let finised = false
    let ret = undefined

    function traversal(node, visit) {
        if (!node) return;
        if (finised) return;
        traversal(node.left, visit);
        visit(node.val)
        traversal(node.right, visit)
    }

    let count = 0
    traversal(root, val => {
        count++;
        if (count == k) {
            ret = val;
            finised = true
        }
    })

    return ret

    
};

