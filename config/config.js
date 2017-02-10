import logger from './logger'
import head from './head'
import api from './api'
import server from './server'
import db from './db'
import auth from './auth'
import redis from './redis'
import session from './session'

const env = process.env.NODE_ENV

export {
  env,
  head,
  api,
  server,
  db,
  redis,
  session,
  auth,
  logger
}
