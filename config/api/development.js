export default {
  port: Number(process.env.API_PORT) || 4000,
  hostname: process.env.API_HOSTNAME || `localhost:${Number(process.env.API_PORT)}`
}
