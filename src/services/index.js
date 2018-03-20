const portfolios = require('./portfolios/portfolios.service.js')
module.exports = function () {
  const app = this // eslint-disable-line no-unused-vars
  app.configure(portfolios)
}
