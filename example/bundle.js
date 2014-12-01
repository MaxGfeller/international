(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var int = require('../')

var t = {
  'en': {
    'switch-button': 'Click to switch language',
    'salutation': 'Welcome to the demo for international',
    'introduction': '`international` is a simple library for i18n. See the README for detailed information'
  },
  'de': {
    'switch-button': 'Klicken um Sprache zu wechseln',
    'salutation': 'Wilkommen zur Demo von international',
    'introduction': '`international` ist eine einfach Bibliothek für i18n. Schau das README an für genauere Informationen'
  }
}

active = 'en'

int(t.en, document.body)

document.querySelector('#switch-language').addEventListener('click', function() {
  var a = active === 'en' ? 'de' : 'en'
  active = a
  int(t[a], document.body)
})

},{"../":2}],2:[function(require,module,exports){
module.exports = function(list, element) {
  var elements = element.querySelectorAll('[data-i18n]')
  ;[].slice.call(elements).map(function(el) {
    var t = el.dataset.i18n
    if(list[t]) el.textContent = list[t]
  })
}

},{}]},{},[1])