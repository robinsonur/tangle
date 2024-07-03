module.exports = {
  port: process.env.PORT || 3000,
  database: process.env.DATABASE || './tangle.sqlite',
  authSecretKey: process.env.SECRET || 'Tangle',
  authTokenExpiration: process.env.EXPIRES_IN || '1h'
}