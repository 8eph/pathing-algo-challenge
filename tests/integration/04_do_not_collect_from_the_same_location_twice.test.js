const pathApp = require('../../src/pathApp')

test('04 do not collect from the same location twice', () => {
  const [letters, pathAsCharacters] = pathApp('tests/input/04_do_not_collect_from_the_same_location_twice')

  expect(letters).toBe('GOONIES')
  expect(pathAsCharacters).toBe('@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x')
})
