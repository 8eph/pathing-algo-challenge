const pathApp = require('../../src/pathApp')

test('05 keep direction, even in compact space', () => {
  const [letters, pathAsCharacters] = pathApp('tests/input/05_keep_direction_even_in_compact_space')

  expect(letters).toBe('BLAH')
  expect(pathAsCharacters).toBe('@B+++B|+-L-+A+++A-+Hx')
})
