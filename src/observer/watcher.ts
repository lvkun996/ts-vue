export default class Wacther {
  value: any
  vm: any
  cb: () => {}
  constructor (value, vm, cb) {
    this.value = value
    this.vm = vm
    this.cb = cb
  }

  update () {

  }
  
}