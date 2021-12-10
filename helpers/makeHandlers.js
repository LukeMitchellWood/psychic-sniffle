const formatConfigKey = require('./formatConfigKey')

module.exports = function makeConfigHandlers({config, handlerFactory, configName, configValue}) {
  return config.reduce((handlers, config) => {
    handlers[formatConfigKey(config[configName])] = handlerFactory(config[configName])(config[configValue])
    return handlers
  }, {})
}