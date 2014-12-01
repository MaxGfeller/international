module.exports = function(list, element) {
  var elements = element.querySelectorAll('[data-i18n]')
  ;[].slice.call(elements).map(function(el) {
    var t = el.dataset.i18n
    if(list[t]) el.textContent = list[t]
  })
}
