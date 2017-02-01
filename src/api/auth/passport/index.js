import passport from 'koa-passport'
import facebookStrategy from './fb'
import twitterStrategy from './tw'

passport.use('facebook', facebookStrategy)
passport.use('twitter', twitterStrategy)

export default passport.initialize()
