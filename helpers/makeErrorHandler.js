const { f } = require('./format')

module.exports = function makeErrorHandler(name) {
  return function errorHandler(message) {
    const e = new Error(`${f.reset}${f.italic}${message}${f.reset}\n\n`)
    e.name = `${f.red}${f.bold}${name} Error\0`
    return () => e
  }
}