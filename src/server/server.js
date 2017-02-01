import Koa from 'koa'
import config from 'config'

import middleware from './middleware'
import routes from './routes'

const {session: {cookie: {secrets: keys}}} = config

const server = new Koa()
server.keys = JSON.parse(keys)

server
  .use(middleware)
  .use(routes)

export default server
