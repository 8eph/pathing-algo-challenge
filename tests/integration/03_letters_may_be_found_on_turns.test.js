const pathApp = require('../../src/pathApp')

test('03 letters may be found on turns', () => {
  const [letters, pathAsCharacters] = pathApp('tests/input/03_letters_may_be_found_on_turns')

  expect(letters).toBe('ACB')
  expect(pathAsCharacters).toBe('@---A---+|||C---+|+-B-x')
})
