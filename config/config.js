import logger from './logger'
import server from './server'
import db from './db'
import auth from './auth'
import redis from './redis'
import session from './session'

const env = process.env.NODE_ENV

export {
  env,
  server,
  db,
  redis,
  session,
  auth,
  logger
}
