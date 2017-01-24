import config from '../config'
import { resolve } from 'path'
import logger from '../tools/logger'
import { compact, makeRule } from '../tools/helpers'

import LogCompilerErrorsPlugin from './plugins/logCompilerErrors'
import WriteBundlePathsToJSONPlugin from './plugins/WriteBundlePathsToJSON'
import { HotModuleReplacementPlugin } from 'webpack'

const DEBUG = config.env !== 'production'

export default {
  entry: {
    client: compact([
      resolve(__dirname, '../src/client/index.js'),
      DEBUG ? 'webpack-hot-middleware/client' : null
    ])
  },
  output: {
    path: './bundles',
    pathinfo: DEBUG,
    publicPath: './public',
    hashDigestLength: 7,
    libraryTarget: 'umd',
    umdNamedDefine: false,
    filename: `[name]${DEBUG ? '' : '.[chunkhash]'}.js`
  },
  target: 'node',
  module: {
    rules: compact([
      makeRule(/\.jsx?$/, 'standard-loader', 'pre'),
      makeRule(/\.jsx?$/, 'babel-loader')
    ])
  },
  plugins: compact([
    DEBUG ? new HotModuleReplacementPlugin() : null,
    new LogCompilerErrorsPlugin(logger),
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
