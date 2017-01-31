import Koa from 'koa'

import middleware from './middleware'
// import auth from './auth'
import routes from './routes'

const app = new Koa()
app.keys = JSON.parse(process.env.COOKIE_SECRETS)

app
  .use(middleware)
  // .use(auth)
  .use(routes)

export default app
