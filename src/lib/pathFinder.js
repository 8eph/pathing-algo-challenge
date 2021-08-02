const { valuesFromPoints } = require('./outputFormatter')
const Point = require('./point')

let currentPoint
// used to simplify the initial traverse step, all it matters is that it's not the same
let previousPoint = new Point(-9999, -9999, null)
let map
let direction

function findPath (mapObject) {
  map = mapObject

  initializeStartPoint()

  while (!currentPoint.isEndMarker()) {
    traverse()
  }

  return [
    valuesFromPoints(map.traversedLetters),
    valuesFromPoints(map.traversedPoints)
  ]
}

/**
 * Traverse start point and set initial direction.
 */
function initializeStartPoint () {
  currentPoint = map.startPoint
  const starterAdjacentPoints = map.adjacentPoints(currentPoint)

  if (starterAdjacentPoints.length !== 1) {
    throw Error('Unable to determine initial direction')
  }

  const nextPoint = starterAdjacentPoints.pop()
  direction = currentPoint.directionToPoint(nextPoint)
  map.setTraversed(currentPoint.x, currentPoint.y)
}

function traverse () {
  // do not go beyond the end marker
  if (currentPoint.isEndMarker()) {
    return
  }

  // turn on a '+'
  if (currentPoint.isTurn()) {
    turn()
  }

  const possibleNextPoints = map.adjacentPoints(currentPoint).filter(
    point => !point.isSame(previousPoint)
  )

  if (possibleNextPoints.length === 0) {
    throw Error('Unable to move forward, path broken')
  }

  /**
   * Go forward if we can.
   * If the current value is +, we've already turned.
   *
   * Otherwise, we've turned (on a letter), as letters are not turns automatically.
   */
  for (const nextPoint of possibleNextPoints) {
    if (currentPoint.directionToPoint(nextPoint) === direction) {
      previousPoint = currentPoint
      currentPoint = nextPoint

      map.setTraversed(currentPoint.x, currentPoint.y)

      return
    }
  }

  return turn()
}

/**
 * Go either left or right from the current direction.
 * The traverse function handles going forward but we still capture attempts to go forward
 * if a direction change is not possible (the fake turn scenario).
 */
function turn () {
  const adjacentPoints = map.adjacentPoints(currentPoint).filter(
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
