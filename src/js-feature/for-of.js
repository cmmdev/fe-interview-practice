function numberIterator(num) {
  let count = 0;
  return {
    [Symbol.iterator]: function() {
      return {
        next() {
          if (count < num) {
            return ({done: false, value: count++})

          } else {
            return ({done: true})
          }
        }
      }
    }
  }
}

for (let item of numberIterator(10)) {
  console.log(item)
}