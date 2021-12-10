import config from './exampleConfig.json';
import makeConfigHandlers from './helpers/makeHandlers';
import makeErrorHandler from './helpers/makeErrorHandler';
const errorHandlers = makeConfigHandlers({
    config: config.errors,
    handlerFactory: makeErrorHandler,
    configName: 'name',
    configValue: 'message'
});
module.exports = { errorHandlers };