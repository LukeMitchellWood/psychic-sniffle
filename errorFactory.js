const config = require('./exampleConfig.json')
const makeHandlersFromConfig = require('./helpers/makeHandlers')
const makeErrorHandler = require('./helpers/makeErrorHandler')

const errorHandlers = makeHandlersFromConfig({
  config: config.errors,
  handlerFactory: makeErrorHandler,
  configName: 'name',
  configValue: 'message'
})

module.exports = { errorHandlers }