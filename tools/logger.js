import {Logger, transports} from 'winston'
import File from 'winston-daily-rotate-file'
import m from 'moment'
import fs from 'fs'
import config from '../config'

const logDir = '.logs'
const {Console} = transports
const timestamp = _ => m().format('h:mm:ss A')

let logger

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

export default (_ => {
  if (!logger) {
    logger = new Logger({
      transports: [
        new Console({
          timestamp,
          colorize: true,
          level: config.logger.console.level
        }),
        new File({
          filename: `${logDir}/-info.log`,
          datePattern: 'yyyy-MM-dd',
          timestamp,
          prepend: true,
          level: config.logger.file.level
        })
      ]
    })
  }
  return logger
})()
