import server from '../../server/development'

export default {
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: `${server.hostname}/api/auth/twitter/callback`
}
