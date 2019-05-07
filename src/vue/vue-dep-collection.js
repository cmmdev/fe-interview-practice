/**
 * 
 * 
定义observable对象（引入依赖）
defineReactive(obj, key, val) deps=[]
key1, key2

定义watcher
watcher(obj, key, cb) {
  key3() {return key1+key2}
  defineProperty(obj, key3, {
    get() {

    }
  })
}
 * 
 */


// function defineReactive(obj, key, val) {
//   let deps = []
//   Object.defineProperty(obj, key, {
//     get() {
//       if (Dep.target && deps.indexOf(Dep.target) ==-1) {
//         deps.push(Dep.target)
//       }
//     },
//     set(val) {
//       for (let dep of deps) {
//         dep()
//       }
//     }
//   })
// }

// const Dep = {
//   target: null
// }

// function watcher(obj, key ,cb) {
//   const onDepUpdated = () => {
//     const val = cb();
//     onComputeUpdate(val)
//   }

//   Object.defineProperty(obj,key, {
//     get() {
//       Dep.target = onDepUpdated
//       let val = cb(); // access key1 + key2
//       Dep.target = null;
//       return val;
//     },
//     set() {
//       console.log('can not set')
//     }
//   })
// }

// ----------------------- above is step by step -----------------------
// ----------------------- implement with class-----------------------
class Dep {
  constructor() {
    this.deps = []
  }

  depend() {
    if (Dep.target != null && this.deps.indexOf(Dep.target) == -1) {
      this.deps.depend(Dep.target)
    }
  }

  notify() {
    this.deps.forEach(dep => {
      dep()
    })

  }
}
Dep.target = null


class Observable {
  constructor(obj) {
    this.walk(obj)
  }

  walk(obj) {
    for (let key of Object.keys(obj)) {
      this.defineReactive(obj, key, obj[key])
    }
    return 
  }

  defineReactive(obj, key, val) {
    const dep = new Dep()
    Object.defineProperty(obj, key, {
      get() {
        dep.depend()
        return val
      },
      set(newVal) {
        dep.notify()
        val = newVal
      }
    })
  }
}

class Watcher {
  constructor(obj, key, cb, onComputeUpdate) {
    this.obj = obj;
    this.key = key;
    this.cb = cb;
    this.onComputeUpdate = onComputeUpdate
    this.defineComputed()
  }

  defineComputed() {
    let self = this;
    const onDepUpdated = () => {
      let val = self.cb();
      self.onComputeUpdate(val);
    }
    Object.defineProperty(this.obj, this.key, {
      get() {
        Dep.target = onDepUpdated
        let val = self.cb();
        Dep.target = null;
        return val
      },
      set() {
        console.log('can not set computed attribute')
      }
    })
  }
}

let o1 = new Observable({
  health: 3000,
  IQ: 150
})

new Watcher(o1, 'type', () => {
  return o1.health > 4000 ? '肉盾': '脆皮'
}, (val) => {
  console.log('英雄类型是' + val)
})

console.log('get o1:', o1.type)
o1.health = 5000
console.log('get o1:', o1.type)



