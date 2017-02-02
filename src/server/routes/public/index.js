import {resolve} from 'path'
import serve from 'koa-static'

const publik = serve(resolve(__dirname, '../../../public'))
publik._name = 'static /public'

export default publik
