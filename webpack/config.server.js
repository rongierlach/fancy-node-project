import config from '../config'
import { resolve } from 'path'
import { compact, makeRule } from '../tools/helpers'

import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack'
import LogCompilerErrorsPlugin from './plugins/logCompilerErrors'
import WriteBundlePathsToJSONPlugin from './plugins/WriteBundlePathsToJSON'

const DEBUG = config.env !== 'production'
// const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

export default {
  entry: {
    server: compact([
      resolve(__dirname, '../src/server/index.js'),
      // DEBUG ? hotMiddlewareScript : null
    ])
  },
  output: {
    path: './bundles',
    pathinfo: DEBUG,
    publicPath: './public',
    libraryTarget: 'umd',
    umdNamedDefine: false,
    filename: `[name].js`
  },
  target: 'node',
  module: {
    rules: [
      makeRule(/\.jsx?$/, 'standard-loader', 'pre'),
      makeRule(/\.jsx?$/, 'babel-loader')
    ]
  },
  resolve: {
    alias: {
      config$: resolve(__dirname, '../config'),
      logger$: resolve(__dirname, '../tools/logger.js'),
      helpers$: resolve(__dirname, '../tools/helpers.js')
    }
  },
  plugins: compact([
    new DefinePlugin({DEBUG: JSON.stringify(DEBUG)}),
    // DEBUG ? new HotModuleReplacementPlugin() : null,
    new LogCompilerErrorsPlugin(),
    new WriteBundlePathsToJSONPlugin()
  ]),
  stats: {
    chunks: true, // Makes the build much quieter
    colors: true, // Shows colors in the console
    hash: true,
    version: false,
    timings: true
  }
}
