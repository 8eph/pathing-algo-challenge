function Map (map, startPoint) {
  this.map = map
  this.startPoint = startPoint
  this.traversedPoints = []
  this.traversedLetters = []
}

Map.prototype.adjacentPoints = function (point) {
  const adjacentPointList = []
  const x = point.x
  const y = point.y

  /**
   * Shortening this type of code would make it less readable, so kept it as-is.
   */
  const leftAdjacent = this.findPointByCoordinates(x - 1, y)
  if (leftAdjacent) {
    adjacentPointList.push(leftAdjacent)
  }

  const rightAdjacent = this.findPointByCoordinates(x + 1, y)
  if (rightAdjacent) {
    adjacentPointList.push(rightAdjacent)
  }

  const upAdjacent = this.findPointByCoordinates(x, y - 1)
  if (upAdjacent) {
    adjacentPointList.push(upAdjacent)
  }

  const downAdjacent = this.findPointByCoordinates(x, y + 1)
  if (downAdjacent) {
    adjacentPointList.push(downAdjacent)
  }

  return adjacentPointList
}

/**
 * 1d array find. Not fast by any means.
**/
Map.prototype.findPointByCoordinates = function (x, y) {
  return this.map.find(point => point.x === x && point.y === y) || null
}

Map.prototype.setTraversed = function (x, y) {
  const point = this.findPointByCoordinates(x, y)

  this.traversedPoints.push(point)

  if (!point.traversed && point.valueHasLetter()) {
    this.traversedLetters.push(point)
  }
  point.setTraversed(true)
}

module.exports = Map
