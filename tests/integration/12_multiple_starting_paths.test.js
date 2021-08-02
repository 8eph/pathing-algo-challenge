const pathApp = require('../../src/pathApp')

test('12 Multiple starting points', () => {
  expect(() => {
    pathApp('tests/input/12_multiple_starting_paths')
  }).toThrow('Unable to determine initial direction')
})
