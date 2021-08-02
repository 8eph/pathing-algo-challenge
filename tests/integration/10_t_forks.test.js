const pathApp = require('../../src/pathApp')

/**
 * The turn option at the T never becomes ambigious because we're counting markers at map load.
 * Defeats the purpose of the test case, but does throw an error as expected.
 */
test('10 t forks', () => {
  expect(() => {
    pathApp('tests/input/10_t_forks')
  }).toThrow('Map must have exactly one of each marker (start and end)')
})
