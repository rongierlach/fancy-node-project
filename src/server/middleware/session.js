import R from 'ramda'
import config from 'config'
import convert from 'koa-convert'
import session from 'koa-generic-session'
import MongoStore from 'koa-generic-session-mongo'

const {db: {uri: url}, session: sessionOpts} = config

const storeLens = R.lensProp('store')
const storeValue = new MongoStore({url})
const setStore = R.set(storeLens, storeValue)

export default R.compose(
  convert,
  session,
  setStore
)(sessionOpts)
