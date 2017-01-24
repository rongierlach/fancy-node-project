import config from '../config'
import { resolve } from 'path'
import { compact, makeRule } from '../tools/helpers'

import LogCompilerErrorsPlugin from './plugins/logCompilerErrors'
import WriteBundlePathsToJSONPlugin from './plugins/WriteBundlePathsToJSON'
import { HotModuleReplacementPlugin, NamedModulesPlugin } from 'webpack'

const DEBUG = config.env !== 'production'

export default {
  entry: {
    client: compact([
      // DEBUG ? 'react-hot-loader/patch' : null,
      // DEBUG ? 'webpack-hot-middleware/client' : null,
      resolve(__dirname, '../src/client/index.js')
    ])
  },
  output: {
    path: './bundles',
    pathinfo: DEBUG,
    publicPath: './public',
    hashDigestLength: 7,
    filename: `[name]${DEBUG ? '' : '.[chunkhash]'}.js`
  },
  target: 'web',
  // devtool: DEBUG ? 'inline-source-map' : null,
  module: {
    rules: compact([
      makeRule(/\.jsx?$/, 'standard-loader', 'pre'),
      makeRule(/\.jsx?$/, 'babel-loader')
    ])
  },
  plugins: compact([
    // DEBUG ? new HotModuleReplacementPlugin() : null,
    DEBUG ? new NamedModulesPlugin() : null,
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
