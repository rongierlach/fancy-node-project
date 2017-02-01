const bundlePaths = require('./.bundle-paths.json')
const api = require(bundlePaths.api)
const server = require(bundlePaths.server)

// let's roll
api.start()
server.start()
