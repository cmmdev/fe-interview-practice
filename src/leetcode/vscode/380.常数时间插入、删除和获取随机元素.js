/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] 常数时间插入、删除和获取随机元素
 */
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.map = new Map();
    this.items = [];
    
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) {
        return false;
    } else {
        this.items.push(val)
        this.map.set(val, this.items.length-1)
        return true;
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) {
        return false;
    } else {
        let oldIndex = this.map.get(val)
        let lastIndex = this.items.length-1
        let lastVal = this.items[lastIndex]

        if (lastIndex != oldIndex) {
            this.items[oldIndex] = lastVal
            this.map.set(lastVal, oldIndex)
        }
        this.map.delete(val)
        this.items.pop()
        return true;
    }
    
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.items[Math.floor(Math.random()*this.items.length)]  
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

//  obj = new RandomizedSet()
//  obj.insert(0)
//  obj.insert(1)
//  obj.remove(0)
//  obj.insert(2)
//  obj.remove(1)
//  console.log(obj.getRandom())
//  console.log(obj.items)
//  console.log(obj.map)
