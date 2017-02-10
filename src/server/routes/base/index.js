import React from 'react'
import config from 'config'
import { get } from 'koa-route'
import Client from '../../../client'
import { renderToString } from 'react-dom/server'

const { head: props } = config
const html = renderToString(<Client {...props} />)

export default get('/', ctx => {
  ctx.body = html
})
