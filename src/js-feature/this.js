// this：谁调用指向谁；
// 箭头函数指向外层this
function Test(name) {
  this.name = name;
}

Test.prototype.go = function() {
  
  let hello = 'hello string'
  inner =() => {
    console.dir(caller)
    console.log(hello + this.name+arguments)
  }
  return inner
}

new Test('cmm').go()()