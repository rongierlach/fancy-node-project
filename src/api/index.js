import db from './db'
import api from './api'
import logger from 'logger'
import config from 'config'

const {api: {port}} = config

export const start = async => {
  try {
    await db()
    logger.info('Connected to database')
  } catch (error) {
    logger.error('Unable to connect to database')
  }

  await api.listen(port)
  logger.info(`API started on port ${port}`)
}
