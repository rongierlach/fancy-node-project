import compose from 'koa-compose'
import passport from './passport'

export default compose([
  passport
])
