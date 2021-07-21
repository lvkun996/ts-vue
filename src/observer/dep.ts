import Wacther from "./watcher"

export default class Dep  {
  static strget: typeof Wacther
  subs: typeof Wacther[]
  constructor () {
    this.subs = []
  }

  addSubs (Watcher) {
    this.subs.push(Wacther)
  }

  notify () {
    this.subs.forEach( sub => {
      sub.update()
    })
  }
}