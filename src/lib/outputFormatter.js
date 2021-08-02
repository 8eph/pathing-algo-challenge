/**
 * Thought this might be needed for stuff like debug output, but have removed the other functions since.
 * E.g. extract any logging (current step, current direction) into a separate module
 * and make it display debug output with CLI verbosity flags as an option.
 */

const valuesFromPoints = (points) =>
  points
    .map(point => point.value)
    .join('')

module.exports = {
  valuesFromPoints
}
