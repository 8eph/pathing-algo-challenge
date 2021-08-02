const pathApp = require('../../src/pathApp')

test('01 basic example', () => {
  const [letters, pathAsCharacters] = pathApp('tests/input/01_basic_example')

  expect(letters).toBe('ACB')
  expect(pathAsCharacters).toBe('@---A---+|C|+---+|+-B-x')
})
