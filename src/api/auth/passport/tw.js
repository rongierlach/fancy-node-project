const {auth: {tw: authOptions}} = config // eslint-disable-line no-undef
import {Strategy} from 'passport-twitter'

export default
  new Strategy(authOptions, async (resp, done) => {
    // verify a user in here...
    done(null, resp)
  })
