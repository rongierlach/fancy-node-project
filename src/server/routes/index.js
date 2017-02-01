import compose from 'koa-compose'

import publik from './public'
import base from './base'
// import admin from './admin'

export default compose([
  publik,
  base
  // admin,
])
