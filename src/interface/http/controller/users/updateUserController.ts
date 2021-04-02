import UpdateUser from '@app/users/updateUser'
import { Request, Response } from 'express'

const updateUserController = async (request: Request, response: Response) => {
  const { id } = request.params
  const { name, phoneNumber } = request.body
  const user = await UpdateUser({ id, name, phoneNumber })
  return response.status(200).json(user)
}

export default updateUserController
