import fs from 'fs'
import path from 'path'

function WriteBundlePathsToJSONPlugin (pathToJSON = './.bundle-paths.json') {
  this.pathToJSON = pathToJSON
}

WriteBundlePathsToJSONPlugin.prototype.apply = function (compiler) {
  const pathToJSON = this.pathToJSON

  compiler.plugin('compilation', compilation => {
    compilation.plugin('after-optimize-chunk-assets', chunks => {
      const outputPath = path.resolve(__dirname, '../../', compilation.outputOptions.path)

      const fileContentString = fs.readFileSync(this.pathToJSON, {encoding: 'utf8'}) || '{}'
      const fileValue = JSON.parse(fileContentString)

      const bundlesObj = chunks.reduce((acc, {name, renderedHash}) => {
        acc[name] = name === 'client'
          ? {
            dev: path.join(outputPath, `${name}.js`),
            hashed: path.join(outputPath, `${name}.${renderedHash}.js`)
          }
          : path.join(outputPath, `${name}.js`)
        return acc
      }, fileValue)

      // write file
      fs.writeFileSync(pathToJSON, JSON.stringify(bundlesObj, null, 2))
    })
  })
}

export default WriteBundlePathsToJSONPlugin
