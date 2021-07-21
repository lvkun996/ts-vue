import { initLifecycle, callHook } from './lifecycle'

import { initEvents } from './event'

import { initState } from './state'

import { initRender } from './render'

import { Options } from '../types/options'

let uid = 0

export function initMixin (Vue) {

  Vue.prototype._init = function (options) {

    const vm = this

    vm._uid = uid++

    vm._isVue = true

    vm._self = vm

    initLifecycle(vm)

    initEvents(vm)

    initRender(vm)
    
    // callHook(vm, 'beforeCreate')

    initState(vm)
  }

}


