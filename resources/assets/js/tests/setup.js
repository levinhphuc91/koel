// setup JSDOM
require('jsdom-global')()

// make document and global available globally
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { document } = (new JSDOM('')).window
global.document = document
global.window = global.document.defaultView

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})

// make common utils available globally as well
global.expect = require('expect')
global.sinon = require('sinon')
const testUtils = require('vue-test-utils')
global.shallow = testUtils.shallow
global.mount = testUtils.mount
