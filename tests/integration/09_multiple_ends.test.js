const pathApp = require('../../src/pathApp')

test('09 multiple ends', () => {
  expect(() => {
    pathApp('tests/input/09_multiple_ends')
  }).toThrow('Map must have exactly one of each marker (start and end)')
})
