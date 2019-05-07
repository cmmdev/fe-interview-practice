
a = Object.create(null)
b = Object.create(a)
a['a'] = "aaaa"
console.log(b.__proto__)
console.log(b.a)
// ----------------------------------------

a=Object.create(null);
b={};
b.__proto__ = a;
a['a'] = 'aaaa';
console.dir(b.__proto__);
console.log(b.a);

// ----------------------------------------

function Test() {
}

t = new Test()
t.__proto__ == Test.prototype

// first function：(Function.prototype)
Function.prototype === Function.__proto__
// first object: (Object.prototype)
Object.prototype.__proto__ === null
// 函数对象引用愿对象
Test.prototype.__proto__ == Object.prototype
// Test = new Function('return 1;')
Test.__proto__ == Function.prototype
// t引用函数原型
t.__proto__ == Test.prototype