import compose from 'koa-compose'

import base from './base'
import publik from './public'
// import api from './api'
// import admin from './admin'

export default compose([
  base,
  publik
])
