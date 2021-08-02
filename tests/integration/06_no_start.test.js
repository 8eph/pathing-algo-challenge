const pathApp = require('../../src/pathApp')

test('06 no start', () => {
  expect(() => {
    pathApp('tests/input/06_no_start')
  }).toThrow('No start point was defined')
})
