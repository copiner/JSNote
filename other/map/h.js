
var cache = new Map()
function thing (el) {
  var api = cache.get(el)
  if (api) {
    return api
  }
  api = {
    method: method,
    method2: method2,
    method3: method3,
    destroy: () => cache.delete(el)
  }
  cache.set(el, api)
  return api
}
