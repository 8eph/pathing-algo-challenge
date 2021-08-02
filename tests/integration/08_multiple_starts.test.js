const pathApp = require('../../src/pathApp')

test('08 multiple starts', () => {
  expect(() => {
    pathApp('tests/input/08_multiple_starts')
  }).toThrow('Map must have exactly one of each marker (start and end)')
})
