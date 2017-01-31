import R from 'ramda'
import convert from 'koa-convert'
import session from 'koa-generic-session'
import redis from 'koa-redis'

const { redis: redisOpts, session: sessionOpts } = config // eslint-disable-line no-undef

const storeLens = R.lensProp('store')
const storeValue = redis(redisOpts)
const setStore = R.set(storeLens, storeValue)

export default R.compose(
  convert,
  session,
  setStore
)(sessionOpts)
