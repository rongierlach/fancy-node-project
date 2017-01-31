import server from '../../server/production'

export default {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: `${server}/api/auth/facebook/callback`,
  profileFields: ['id', 'displayName', 'photos', 'email'],
  enableProof: true
}
