function Mpromise(fun) {
  this.status = 'pending'; // [pending, fullfiled, rejected]
  this.value = undefined;

  function resolve(val) {
    this.status = 'resolved'
    this.value = val
  }

  function reject(err) {
    this.status = 'rejected'
    this.value = val
  }

  fun(resolve, reject)
}

// ..
Mpromise.prototype.then = function(onFullfiled, onRejected) {
  if (this.status == 'pending') {

  } else if (this.status == 'resolved') {

  } else {

  }
}

