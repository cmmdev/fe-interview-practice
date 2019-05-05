function Mpromise(resolver) {
  this.status = 'pending'
  this.value = undefined
  this.callbacks = []

  let resolve = (val) => {
    this.value = val
    this.status = 'resolved'
    for (let cb of this.callbacks) {
      cb.resolve(this.value)
    }
  }

  let reject = (val) => {
    this.value = val
    this.status = 'rejected'

    for (let cb of this.callbacks) {
      cb.reject(this.value)
    }
  }

  try {
    resolver(resolve, reject)
  } catch (err) {
    reject(err)
  }
}

Mpromise.prototype.then = function(onFullfiled, onRejected) {
  onFullfiled = typeof onFullfiled === 'function' ? onFullfiled : function(v){return v}
  onRejected = typeof onRejected === 'function' ? onRejected : function(r){throw r}
      
  return new Mpromise((resolve, reject) => {
    if (this.status == 'pending') {
      this.callbacks.push({
        resolve: function(value) {
          try {
            let x = onFullfiled(value)
            resolvePromise(x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        },
        reject: function(value) {
          try {
            let x = onRejected(value)
            resolvePromise(x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }
      })
    } else if (this.status == 'resolved') {
      try {
        let x = onFullfiled(this.value)
        resolvePromise(x, resolve, reject)
      } catch (err) {
        reject(err)
      }
    } else {
      try {
        let x = onRejected(this.value)
        resolvePromise( x, resolve, reject)
      } catch (err) {
        reject(err)
      }
    }
  })
}

function resolvePromise(x, resolve, reject) {

  setTimeout(() => {
    try {
      if (typeof (x && x.then) == 'function') {
        x.then(val => {
          resolvePromise(val, resolve, reject)
        }, err => {
          reject(err)
        })
      } else {
        resolve(x)
      }
    } catch (err) {
      reject(err)
    }
  })
}
