import { Request, Response } from 'express'
import createUserService from '@app/users/createUser'

const createUserController = async (request: Request, response: Response) => {
  const { name, email, phoneNumber, password } = request.body
  const user = await createUserService({ name, email, phoneNumber, password })
  return response.status(201).json(user)
}

export default createUserController
