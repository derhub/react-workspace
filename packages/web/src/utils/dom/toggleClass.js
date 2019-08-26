import * as cls from 'dom-helpers/class'

export default (el, className) => {
  if (cls.hasClass(el, className)) {
    cls.removeClass(el, className)
  } else {
    cls.addClass(el, className)
  }
}