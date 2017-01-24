import _logger from '../../tools/logger'

function LogCompilerErrorsPlugin (logger = _logger || console) {
  this.logger = logger
}

LogCompilerErrorsPlugin.prototype.apply = function (compiler) {
  const logger = this.logger

  // log errors and return
  compiler.plugin('failed', err => {
    if (err) {
      logger.error(err.stack || err)
      if (err.details) {
        logger.error(err.details)
      }
      return
    }
  })

  // log stats errors & warnings
  compiler.plugin('done', stats => {
    const { errors, warnings } = stats.toJson()

    if (stats.hasErrors()) {
      logger.error(errors)
    }

    if (stats.hasWarnings()) {
      logger.warn(warnings)
    }
  })
}

export default LogCompilerErrorsPlugin
