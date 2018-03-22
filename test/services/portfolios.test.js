const assert = require('assert')
const app = require('../../src/app')

describe('\'portfolios\' service', () => {
  before(function () {
    return app.service('portfolios').remove(null, {})
  })

  it('registered the service', () => {
    const service = app.service('portfolios')

    assert.ok(service, 'Registered the service')
  })

  it('creates a portfolio', async () => {
    const portfolio = await app.service('portfolios').create({
      name: 'Default',
      currencies: [
        { symbol: 'BTC', amount: 0.5 },
        { symbol: 'LTC', amount: 0.75 }
      ]
    })

    // Verify data has been set to what we'd expect
    assert.equal(portfolio.name, 'Default')
    assert.equal(portfolio.currencies.length, 2)
    assert.equal(portfolio.currencies[0].symbol, 'BTC')
    assert.equal(portfolio.currencies[0].amount, 0.5)
    assert.equal(portfolio.currencies[1].symbol, 'LTC')
    assert.equal(portfolio.currencies[1].amount, 0.75)
  })

  it('doesn\'t save extra data', async () => {
    const portfolio = await app.service('portfolios').create({
      name: 'Main',
      currencies: [
        { symbol: 'BTC', amount: 0.5 }
      ],
      foo: 'bar'
    })

    // Verify we haven't save erroneous data
    assert.ok(!portfolio.foo)
  })
})
