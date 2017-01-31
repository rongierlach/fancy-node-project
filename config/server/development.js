export default {
  port: Number(process.env.PORT) || 3000,
  hostname: process.env.HOSTNAME || `localhost:${Number(process.env.PORT)}`
}
