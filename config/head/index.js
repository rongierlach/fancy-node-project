import {evolve} from 'ramda'
import development from './development'
import production from './production'

export default process.env.NODE_ENV !== 'production'
  ? development
  : evolve(development, production)
