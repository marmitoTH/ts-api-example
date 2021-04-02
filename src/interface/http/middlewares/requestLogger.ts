import Logger from '@infra/Logger'
import { NextFunction, Request, Response } from 'express'

const requestLogger = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  Logger.info(request.method, request.url)
  next()
}

export default requestLogger
