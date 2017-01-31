import convert from 'koa-convert'
import koaLogger from 'winston-koa-logger'
import logger from '../../../tools/logger'

// https://github.com/Carlangueitor/winston-koa-logger
export default convert(koaLogger(logger))
