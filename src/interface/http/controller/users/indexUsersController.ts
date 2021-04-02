import indexUsers from '@app/users/indexUsers'
import { Request, Response } from 'express'

const indexUsersController = async (request: Request, response: Response) => {
  const data = await indexUsers()
  return response.status(200).json(data)
}

export default indexUsersController
