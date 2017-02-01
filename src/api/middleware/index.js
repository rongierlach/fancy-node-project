import compose from 'koa-compose'

import logger from './logger'
import cors from './cors'
import bodyparser from './bodyparser'

export default compose([
  logger,
  cors,
  bodyparser
])
