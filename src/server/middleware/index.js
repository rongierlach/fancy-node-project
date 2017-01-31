import compose from 'koa-compose'

import logger from './logger'
// import session from './session'
import cors from './cors'
import bodyarser from './bodyparser'

// // webpack hot middleware
// import {env} from '../../../config'
// import {compact} from '../../../tools/helpers'
// import webpack from 'webpack'
// import webpackConfig from '../../../tools/config.babel.js'
// // import { devMiddleware, hotMiddleware } from 'koa-webpack-dev-middleware'
//
// // const hot = env !== 'production' ?

export default compose([
  logger,
  // session,
  cors,
  bodyarser
])
