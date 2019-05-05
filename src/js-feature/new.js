function Test(name, age) {
  this.a = name
  this.b = age
  return {'a':'a'}
}

function Test2(name, age) {
  this.a = name
  this.b = age

  this.say = function() {
    console.log('a:' + this.a + ',b:' + this.b)
  }
}

function newClazz(Fn) {
  return function() {
    let ret = {}
    let obj = Fn.call(ret, ...arguments)
    if (obj) {
      return obj;
    } else {
      return ret
    }
  }
}

let o1 = newClazz(Test)('cmm',30)
let o2 = newClazz(Test2)('twf',29)


