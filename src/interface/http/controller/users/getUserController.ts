import getUser from '@app/users/getUser'
import { Request, Response } from 'express'

const getUserController = async (request: Request, response: Response) => {
  const { id } = request.params
  const user = await getUser(id)
  return response.status(200).json(user)
}

export default getUserController
