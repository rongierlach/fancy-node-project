import mount from 'koa-mount'
import endpoints from './endpoints'

export default
  mount('/api', endpoints)
