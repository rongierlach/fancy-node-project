import serve from 'koa-static'

const publik = serve('./public')
publik._name = 'static /public'

export default publik
