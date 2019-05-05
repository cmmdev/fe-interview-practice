function spawn(afun) {
  return new Promise((resolve, reject) => {
    let gen = afun()
    try {
      let done = false,
        value = undefined
      function execute(gen, value, done) {
        if (!done) {
          let current = gen.next(value)
          done = current.done
          value = current.value
          if (
            value &&
            typeof value == 'object' &&
            typeof value.then == 'function'
          ) {
            value.then(x => execute(gen, x, done))
          } else {
            execute(gen, value, done)
          }
        } else {
          resolve(value)
        }
      }
      execute(gen, value, done)
    } catch (err) {
      reject(err)
    }
  })
}

let getName = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('cmm'), 1000)
  })
}

let getAge = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(20), 1000)
  })
}

function* test() {
  let name = yield getName()
  let age = yield getAge()
  return name + age
}

console.dir(spawn(test))