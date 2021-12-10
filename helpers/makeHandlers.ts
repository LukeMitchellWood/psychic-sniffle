import { formatConfigKey } from './formatConfigKey'

type iHandler<T> = { [id: string]: () => T }
type iHandlerObject<T> = { [name: string]: iHandler<T> }
type iHandlerFactory<T> = (name: string) => (message: string) => iHandler<T>
type iConfigElement = { [key: string]: string }
type iConfigHandlerParameters<T> = {
  config: iConfigElement[],
  handlerFactory: iHandlerFactory<T>,
  configName: string,
  configValue: string
}
export default function makeConfigHandlers<T>({config, handlerFactory, configName, configValue}: iConfigHandlerParameters<T>) {
  return config.reduce((handlers: iHandlerObject<T>, config) => {
    handlers[formatConfigKey(config[configName])] = handlerFactory(config[configName])(config[configValue])
    return handlers
  }, {})
}
