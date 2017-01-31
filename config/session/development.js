export default {
  key: process.env.COOKIE_NAME,
  allowEmpty: true,
  rolling: true,
  cookie: {
    path: '/',
    sign: true,
    overwrite: false,
    domain: process.env.COOKIE_DOMAIN,
    secure: process.env.USE_HTTPS === 'true' || false,
    maxAge: process.env.COOKIE_MAX_AGE || 24 * 60 * 1000
  }
}
