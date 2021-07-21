import { initMixin } from './initMixin'
import { stateMixin } from './state'

import { Options } from '../types/options'

function Vue (options: Options) {

  this._init(options)

}

initMixin(Vue)

stateMixin(Vue)


export default Vue


