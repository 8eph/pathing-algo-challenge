const valuesFromPoints = (points) =>
  points
    .map(point => point.value)
    .join('')

module.exports = {
  valuesFromPoints
}
