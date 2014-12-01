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
