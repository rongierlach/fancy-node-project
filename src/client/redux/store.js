import rootReducer from './rootReducer'
import initialState from './initialState'
import middleware from './middleware'
import { createStore } from 'redux'

export default createStore(rootReducer, initialState, middleware)
