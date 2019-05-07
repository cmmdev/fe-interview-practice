function EventBus() {
  this._events = {}
}

EventBus.prototype.on = function(type, fn) {
  (this._events[type] || (this._events[type] = [])).push(fn)
}

EventBus.prototype.once= function(type, fn) {
  let fired = false;
  (this._events[type] || (this._events[type] = [])).push(
    function() {
      if (fired) return;
      fired = true;
      return fn.apply(this, arguments)
    }
  )
}

EventBus.prototype.off = function(type, fn) {
  if (this._events[type]) {
    this._events[type].splice(this._events[type].indexOf(fn), 1)
  }
}

EventBus.prototype.emit = function(type, ...args) {
  for (let fn of this._events[type]||[]) {
    fn.call(...args)
  }
}

// ------------------ test below --------------
bus = new EventBus()
function eventHandler1() {
  console.log('handling event1')
}
bus.on('event1', eventHandler1)

bus.on('event1', function() {
  console.log('handling event1 ++')
})

bus.once('event1', function() {
  console.log('handling event1 once');
})

bus.once('event2', function() {
  console.log('handling event2 once');
})

function split() {
  console.log('-------------split--------------')
}

bus.emit('event1')
split()
// bus.emit('event2')
split()
bus.emit('event1')
split()
bus.emit('event2')
split()
bus.off('event1', eventHandler1)
split()
bus.emit('event1')