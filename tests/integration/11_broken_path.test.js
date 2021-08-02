const pathApp = require('../../src/pathApp')

test('11 broken path', () => {
  expect(() => {
    pathApp('tests/input/11_broken_path')
  }).toThrow('Unable to move forward, path broken')
})
