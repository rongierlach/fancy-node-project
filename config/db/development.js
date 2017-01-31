export default {
  host: process.env.DB_HOST || 'http://localhost:27017/node-project',
  user: process.env.DB_USER || 'admin',
  pass: process.env.DB_PASS || 'password'
}
