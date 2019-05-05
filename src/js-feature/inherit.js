function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

/// --------------- babel implementation above --------------------
function Cat(name) {
  this.name = name;
}

Cat.prototype.meow = function() {
  console.log('meaow')
}

function Tiger(name) {
  this.name = name;
}


let inherits = function (subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
    }
  })
  subClass.__proto__ = superClass
}


