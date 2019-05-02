/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.items = new Array(k).fill(undefined)
    this.front = -1;
    this.rear = -1;
    this.k = k
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) return false

    const k = this.k
    if (this.isEmpty()) {
        this.front = this.rear = 0
    } else {
        this.rear = (this.rear + k + 1) % k
    }
    this.items[this.rear] = value
    return true
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) return false

    if (this.front == this.rear) { // 只有一个元素
        this.front = this.rear = -1; 
    } else {
        const k = this.k
        this.front = (this.front + k + 1) % k;
    }
    return true

};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) {
        return -1;
    } 
    return this.items[this.front]
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) return -1;
    return this.items[this.rear]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.front == -1;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    const k = this.k
    return (this.rear - this.front + k) % k == (k - 1)
};


// var obj = new MyCircularQueue(6)
// obj.enQueue(6)
// console.log('obj:', obj.items, obj.front, obj.rear)
// obj.Rear()
// console.log('obj:', obj.items, obj.front, obj.rear)
// var param_4 = obj.Rear()
// console.log('obj:', obj.items, obj.front, obj.rear)
// var param_2 = obj.deQueue()
// console.log('obj:', obj.items, obj.front, obj.rear)
// var param_1 = obj.enQueue(5)
// console.log('obj:', obj.items, obj.front, obj.rear)
// var param_4 = obj.Rear()
// console.log('obj:', obj.items, obj.front, obj.rear)
// var param_2 = obj.deQueue()
// console.log('obj:', obj.items, obj.front, obj.rear)
// var param_3 = obj.Front()
// console.log('obj:', obj.items, obj.front, obj.rear)
// var param_2 = obj.deQueue()
// console.log('obj:', obj.items, obj.front, obj.rear)
// var param_2 = obj.deQueue()
// console.log('obj:', obj.items, obj.front, obj.rear)
// var param_2 = obj.deQueue()
// console.log('obj:', obj.items, obj.front, obj.rear)





