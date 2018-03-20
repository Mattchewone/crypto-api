// Initializes the `portfolios` service on path `/portfolios`
const createService = require('feathers-nedb')
const createModel = require('../../models/portfolios.model')
const hooks = require('./portfolios.hooks')

module.exports = function () {
  const app = this
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'portfolios',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/portfolios', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('portfolios')

  service.hooks(hooks)
}
