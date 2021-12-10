const config = require('./exampleConfig.json')
const makeHandlersFromConfig = require('./helpers/makeHandlers')
const makeErrorHandler = require('./helpers/makeErrorHandler')

const errorHandlers = makeHandlersFromConfig({
  config: config.errors,
  handlerFactory: makeErrorHandler,
  configName: 'name',
  configValue: 'message'
})

console.log({ errorHandlers })

module.exports = { errorHandlers }