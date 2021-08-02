function Point (x, y, value) {
  this.x = x
  this.y = y
  this.value = value
  this.traversed = false
}

Point.prototype.directionToPoint = function (point) {
  if (point.x > this.x) return 'r'
  if (point.x < this.x) return 'l'
  if (point.y > this.y) return 'd'
  if (point.y < this.y) return 'u'

  throw Error('Cannot determine direction for same point')
}

Point.prototype.isSame = function (point) {
  return point && (point.x === this.x && point.y === this.y)
}

Point.prototype.isDifferent = function (point) {
  return !this.isSame(point)
}

Point.prototype.setTraversed = function (traversed) {
  this.traversed = traversed
}

Point.prototype.isEndMarker = function () {
  return this.value === 'x'
}

Point.prototype.valueHasLetter = function () {
  const isLetter = this.value.toUpperCase() !== this.value.toLowerCase()

  // also has to be upper-case
  return isLetter && this.value === this.value.toUpperCase()
}

Point.prototype.isTurn = function () {
  return this.value === '+'
}

module.exports = Point
