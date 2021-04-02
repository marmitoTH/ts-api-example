import deleteUser from '@app/users/deleteUser'
import { Request, Response } from 'express'

const deleteUserController = async (request: Request, response: Response) => {
  const { id } = request.params
  await deleteUser(id)
  return response.status(200).json()
}

export default deleteUserController
