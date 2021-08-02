const pathApp = require('../../src/pathApp')

test('07 no end', () => {
  expect(() => {
    pathApp('tests/input/07_no_end')
  }).toThrow('Map must have exactly one of each marker (start and end)')
})
