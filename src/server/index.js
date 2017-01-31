import db from './db'
import app from './app'
import logger from '../../tools/logger'

const {server: {port}} = config // eslint-disable-line no-undef

export const start = async _ => {
  logger.debug(JSON.stringify(config, null, 2)) // eslint-disable-line no-undef

  try {
    await db()
    logger.info('Connected to database')
  } catch (error) {
    logger.error('Unable to connect to database')
  }

  await app.listen(port)
  logger.info(`Server started on port ${port}`)
}
