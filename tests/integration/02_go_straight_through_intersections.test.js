const pathApp = require('../../src/pathApp')

test('02 go straight through intersections', () => {
  const [letters, pathAsCharacters] = pathApp('tests/input/02_go_straight_through_intersections')

  expect(letters).toBe('ABCD')
  expect(pathAsCharacters).toBe('@|A+---B--+|+--C-+|-||+---D--+|x')
})
