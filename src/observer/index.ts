import Dep from "./dep"

class Observer {
  value: any
  dep: any
  constructor (value) {

    this.value = value

    this.walk(value)

  }

  walk (obj: Object) {
    for( let key in obj ) {
      definedReactive(obj, key)
    }
  }
}

export function observe (value) {
  
  let ob

  ob = new Observer(value)

  return ob
}

export function definedReactive (obj: Object, key: string) {
  let value: any = obj[key]
  let dep = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      return value
    },
    set: function reactTibeSetter (newValue) {
      if (newValue === value) {
        return
      }
      value = newValue
      dep.notify()
    }
  })
}

