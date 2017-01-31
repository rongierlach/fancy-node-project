// load in environt variables from .env file
import dotenv from 'dotenv'
dotenv.load()

// names of required environment variables
const REQUIRED_VAR_NAMES = [
  'NODE_ENV',
  'HOSTNAME',
  'PORT',
  'DB_HOST',
  'REDIS_URL',
  'COOKIE_NAME',
  'COOKIE_DOMAIN',
  'COOKIE_MAX_AGE',
  'USE_HTTPS'
]

// throw error if any required variables are missing
REQUIRED_VAR_NAMES.forEach(name => {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} is missing`)
  }
})

export default require('./config')
