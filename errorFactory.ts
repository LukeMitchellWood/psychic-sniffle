import config from './exampleConfig.json'
import makeConfigHandlers from './helpers/makeHandlers'
import makeErrorHandler from './helpers/makeErrorHandler'

const errorHandlers = makeConfigHandlers<Error>({
  config: config.errors,
  handlerFactory: makeErrorHandler,
  configName: 'name',
  configValue: 'message'
})

console.log(errorHandlers);

module.exports = { errorHandlers }
