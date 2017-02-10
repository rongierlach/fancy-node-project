import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { applyMiddleware } from 'redux'

const logger = createLogger({
  diff: true,
  collapsed: true
})

export default applyMiddleware(thunk, logger)
