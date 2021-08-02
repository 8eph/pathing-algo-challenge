const fs = require('fs')
const Point = require('./point')
const Map = require('./map')
const path = require('path')

/*
 * We're using paths to load maps from the CLI context and the test suite
 * There's probably a better way to avoid (changing) relative paths such
 * as a package.json export or an env variable.
 *
 * Found this here:
 * https://www.abeautifulsite.net/posts/determining-your-apps-base-directory-in-nodejs/
**/
const baseDir = path.join(__dirname, '../../')
global.__basedir = baseDir

let _startPointCount = 0
let _endPointCount = 0
let _startPoint = null

function loadMap (file) {
  const rawStringMap = loadRawStringMap(file)

  const map = initializeMap(rawStringMap)
  validateMapMarkers()

  return map
}

function loadRawStringMap (file) {
  const pathToFile = path.join(baseDir, '/', file)

  fs.access(pathToFile, fs.R_OK, err => {
    if (err) { throw Error('Path not found') }
  })

  const rawStringMap = fs.readFileSync(pathToFile, 'UTF8', (err) => {
    if (err) { throw Error('Could not read file') }
  })

  return rawStringMap
}

function initializeMap (rawStringMap) {
  const lines = rawStringMap.split(/\r?\n/)

  const flattenedMapMatrix = []

  lines.forEach(
    (line, y) => line.split('').forEach(
      (char, x) => {
        switch (char) {
          case ' ': {
            break
          }
          case '@': {
            _startPointCount++
            _startPoint = new Point(x, y, char)
            flattenedMapMatrix.push(_startPoint)
            break
          }
          case 'x': {
            _endPointCount++
            flattenedMapMatrix.push(new Point(x, y, char))
            break
          }
          default: flattenedMapMatrix.push(new Point(x, y, char))
        }
      }
    )
  )

  if (_startPoint === null) {
    throw Error('No start point was defined')
  }

  return new Map(flattenedMapMatrix, _startPoint)
}

function validateMapMarkers () {
  if (_startPointCount !== 1 || _endPointCount !== 1) {
    throw Error('Map must have exactly one of each marker (start and end)')
  }
}

module.exports = {
  loadMap
}
