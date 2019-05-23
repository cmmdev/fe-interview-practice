function curry(fn, length) {
  return function() {
    const args = Array.prototype.slice.call(arguments)
    if (args.length >= length) {
      return fn.apply(this, args)
    } else {
      return curry(function() {
        let args2 = Array.prototype.slice.call(arguments)
        return fn.apply(this, args.concat(args2))
      }, length - args.length)
    }
  }
}

function curryFn(fn, length) {
  length = fn || fn.length
  return curry(fn, length)
}
