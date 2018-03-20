const assert = require('assert')
const app = require('../../src/app')

describe('\'portfolios\' service', () => {
  it('registered the service', () => {
    const service = app.service('portfolios')

    assert.ok(service, 'Registered the service')
  })

  it('creates a portfolio', async () => {
    const portfolio = await app.service('portfolios').create({
      symbol: 'BTC',
      amount: 0.5
    })

    // Verify data has been set to what we'd expect
    assert.equal(portfolio.symbol, 'BTC')
    assert.equal(portfolio.amount, 0.5)
  })

  it('doesn\'t save extra data', async () => {
    const portfolio = await app.service('portfolios').create({
      symbol: 'ETH',
      amount: 1.25,
      foo: 'bar'
    })

    // Verify we haven't save erroneous data
    assert.ok(!portfolio.foo)
  })
})
