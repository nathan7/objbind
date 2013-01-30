module.exports =
function objBind() {
  var obj = arguments[0]
    , args = arguments.length === 1 ? [] : [].slice.call(arguments, 1)
    , newObj = Object.create(obj)

  for (var key in obj) {
    if (typeof obj[key] !== 'function') continue
    newObj[key] = Function.prototype.bind.apply(obj[key], [obj].concat(args))
  }

  return newObj
}
