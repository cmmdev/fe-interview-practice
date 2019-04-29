# 数据结构

Data Structures and Algorithms explained and implemented in JavaScript [Demo](https://gum.co/dsajs)
[Github](https://github.com/amejiarosario/dsa.js)

## Linear Data Structures

1. Arrays: Built-in in most languages so not implemented here. Array Time complexity

2. Linked Lists: each data node has a link to the next (and previous). Code | Linked List Time Complexity

3. Queue: data flows in a "first-in, first-out" (FIFO) manner. Code | Queue Time Complexity

4. Stacks: data flows in a "last-in, first-out" (LIFO) manner. Code | Stack Time Complexity

## Non-Linear Data Structures

1. Trees: data nodes has zero or more adjacent nodes a.k.a. children. Each node can only have one parent node otherwise is a graph not a tree. Code | Docs
   1. Binary Trees: same as tree but only can have two children at most. Code | Docs
   2. Binary Search Trees (BST): same as binary tree, but the nodes value keep this order left < parent < right.Code | BST Time complexity
   3. AVL Trees: Self-balanced BST to maximize look up time. Code | AVL Tree docs | Self-balancing & tree rotations docs
   4. Red-Black Trees: Self-balanced BST more loose than AVL to maximize insertion speed. Code
2. Maps: key-value store.
   1. Hash Maps: implements map using a hash function. Code | HashMap time complexity
   2. Tree Maps: implement map using a self-balanced BST. Code | TreeMap docs | TreeMap time complexity
3. Graphs: data nodes that can have a connection or edge to zero or more adjacent nodes. Unlike trees, nodes can have multiple parents, loops. Code | Graph Time Complexity
