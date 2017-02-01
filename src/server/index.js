import server from './server'
import logger from 'logger'
import config from 'config'

const {server: {port}} = config

export const start = async _ => {
  await server.listen(port)
  logger.info(`Server started on port ${port}`)
}
