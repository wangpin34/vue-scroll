export const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

export const throttle = (func, limit) => {
  let lastFunc
  let lastRan
  return function() {
    const context = this
    const args = arguments
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function() {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}

export const isNumber = function(arg) {
  return typeof arg === 'number' && arg !== NaN
}

export const isFunction = function(arg) {
  return typeof arg === 'function'
}

export const isObject = function(arg) {
  return Object.prototype.toString.call(arg) === '[object Object]'
}

export const isInteger = function(arg) {
  return isNumber(arg) && Math.round(arg) === arg
}

export const get = function(arg, path, def) {
  try {
    return eval(`arg.${path}`)
  } catch (err) {
    // ignore error
    return def
  }
}