import compose from 'koa-compose'

import logger from './logger'
import cors from './cors'
import bodyparser from './bodyparser'

// // webpack hot middleware
// import {env} from '../../../config'
// import {compact} from 'helpers'
// import webpack from 'webpack'
// import webpackConfig from '../../../tools/config.babel.js'
// // import { devMiddleware, hotMiddleware } from 'koa-webpack-dev-middleware'
//
// // const hot = env !== 'production' ?

export default compose([
  logger,
  cors,
  bodyparser
])
