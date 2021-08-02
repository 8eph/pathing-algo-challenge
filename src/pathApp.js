const mapLoader = require('./lib/mapLoader')
const pathFinder = require('./lib/pathFinder')

const usage = `
NAME
       pather - derive path of an ASCII map loaded from an input file

SYNOPSIS
       pather SOURCE_PATH

DESCRIPTION
       Traverses the ASCII map and returns collected characters and the path taken.

       Can also be included as a module, accepts SOURCE_PATH as the only argument.
`

function printUsageAndExit () {
  console.log(usage)

  throw new Error('Invalid parameters')
}

function main (path) {
  const map = mapLoader.loadMap(path)

  return pathFinder.findPath(map)
}

if (require.main === module) {
  const args = process.argv.slice(2)

  if (args.length !== 1) { printUsageAndExit() }

  const path = args.pop()

  const [letters, characters] = main(path)

  console.log(`${letters}\r\n${characters}`)
} else {
  module.exports = main
}
