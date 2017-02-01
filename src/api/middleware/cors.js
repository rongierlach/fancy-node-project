import convert from 'koa-convert'
import config from 'config'
import cors from 'koa-cors'

const corsOpts = {
  credentials: true,
  origin: config.api.hostname
}

// https://github.com/evert0n/koa-cors
export default convert(cors(corsOpts))
