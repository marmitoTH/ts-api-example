import { ErrorRequestHandler } from 'express'
import AppError, { ErrorType } from '@infra/AppError'
import Logger from '@infra/Logger'

const getStatusCode = (errorID: number) => {
  switch (errorID) {
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
    const status = getStatusCode(error.id)
    return response.status(status).json({
      error: { type: error.type, message: error.message }
    })
  }

  return response.status(500).json({ message: 'Internal server error' })
}

export default errorHandler
