import compose from 'koa-compose'
import {compact} from 'helpers'

// import webpack from './webpack'
import logger from './logger'
import cors from './cors'
import bodyparser from './bodyparser'

export default compose(
  compact([
    // DEBUG ? webpack : null, // eslint-disable-line no-undef
    logger,
    cors,
    bodyparser
  ])
)
