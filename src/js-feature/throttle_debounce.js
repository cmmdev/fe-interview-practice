function throttle(fn, delay, immediate) {
  let timer
  let previous

  let ret= function() {
    if (immediate) {
      fn.apply(this.arguments);
      immediate = false
      return
    }

    let elapsed = previous ? Date.now() - previous : 0
    if (elapsed < delay) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        previous = Date.now()
        timer = null
      }, delay - elapsed)
    } else {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }

      fn.apply(this, arguments)
      previous = Date.now()
    }
  }

  ret.cancel = function() {
    clearTimeout(timer)
    timer=null
  }

  return ret
}

function debounce(fn, delay) {
  let timer

  let ret = function() {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
  ret.cancel = function(){
    clearTimeout(timer)
    timer = null
  }

  return ret
}
