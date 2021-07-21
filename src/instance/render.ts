import { Options } from '../types/options'


/**
 * 
 * @description 模板渲染
 * 
 */

export function initRender (vm) {
  const opts: Options = vm.options

  const el = typeof opts.el === 'string' ? document.getElementById(opts.el) : opts.el
  
  if (el) {

   const fragment =  createFragment(el)

   compile(fragment)

   el.appendChild(fragment)
  }
 
}

function createFragment (node: Node): Node {
 let fragment =  document.createDocumentFragment()
 
 let childNodes = node.childNodes

 deepArray (childNodes).forEach( (childNode ) => {
    fragment.appendChild(childNode)
 })
 return fragment
}

/**
 * @description 模板编译
 */

function compile (fragment) {

  let childNodes = fragment.childNodes

  deepArray(childNodes).forEach( childNode => {
    
  })
}

function deepArray (nodes: NodeList): Node[] {
  return [].slice.call(nodes)
}



