const { valuesFromPoints } = require('./outputFormatter')
const Point = require('./point')

let currentPoint
let previousPoint = new Point(-9999, -9999, null)
let _map
let direction

function findPath (map) {
  _map = map

  initializeStartPoint()

  while (!currentPoint.isEndMarker()) {
    traverse()
  }

  return [
    valuesFromPoints(_map.traversedLetters),
    valuesFromPoints(_map.traversedPoints)
  ]
}

function initializeStartPoint () {
  currentPoint = _map.startPoint
  const starterAdjacentPoints = _map.adjacentPoints(currentPoint)

  if (starterAdjacentPoints.length !== 1) {
    throw Error('Unable to determine initial direction')
  }

  const nextPoint = starterAdjacentPoints.pop()
  direction = currentPoint.directionToPoint(nextPoint)
  _map.setTraversed(currentPoint.x, currentPoint.y)
}

function traverse () {
  if (currentPoint.isEndMarker()) {
    return
  }

  if (currentPoint.isTurn()) {
    turn()
  }

  const possibleNextPoints = _map.adjacentPoints(currentPoint).filter(
    point => !point.isSame(previousPoint)
  )

  if (possibleNextPoints.length === 0) {
    throw Error('Unable to move forward, path broken')
  }

  for (const nextPoint of possibleNextPoints) {
    if (currentPoint.directionToPoint(nextPoint) === direction) {
      previousPoint = currentPoint
      currentPoint = nextPoint

      _map.setTraversed(currentPoint.x, currentPoint.y)

      return
    }
  }

  return turn()
}

function turn () {
  const adjacentPoints = _map.adjacentPoints(currentPoint).filter(
    point => point.isDifferent(previousPoint)
  )

  const newDirection = adjacentPoints.reduce((accumulator, adjacentPoint) => {
    const newDirection = currentPoint.directionToPoint(adjacentPoint)

    if (newDirection !== direction) {
        accumulator = newDirection
    }

    return accumulator
  }, null)

  if (!newDirection || newDirection === direction) {
    throw Error('Unable to change direction')
  }

  direction = newDirection
}

module.exports = {
  findPath
}
