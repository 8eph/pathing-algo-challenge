const pathApp = require('../../src/pathApp')

test('13 fake turn', () => {
  expect(() => {
    pathApp('tests/input/13_fake_turn')
  }).toThrow('Unable to change direction')
})
