import { f } from './format'

type iErrorHandler = (message: string) => () => Error
type iErrorType = () => Error
export default function makeErrorHandler(name: string): iErrorHandler {
  return function errorHandler(message: string): iErrorType {
    const e = new Error(`${f.reset}${f.italic}${message}${f.reset}\n\n`)
    e.name = `${f.red}${f.bold}${name} Error\0`
    return () => e
  }
}