import { ErrorRequestHandler } from 'express'
import AppError, { ErrorType } from '@infra/AppError'
import Logger from '@infra/Logger'

const getStatusCode = (errorType: ErrorType) => {
  switch (errorType) {
    case ErrorType.EmailInUseException:
      return 400
    case ErrorType.UserNotFoundException:
      return 404
    case ErrorType.UnknownErrorException:
    default:
      return 500
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  Logger.info(error)

  if (error instanceof AppError) {
    const message = error.type
    const status = getStatusCode(error.type)
    return response.status(status).json({ message })
  }

  return response.status(500).json({ message: 'Internal server error' })
}

export default errorHandler
