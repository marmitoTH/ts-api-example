import ICreateUserDTO from './ICreateUserDTO'
import UsersRepository from '@infra/database/repositories/UsersRepository'
import AppError, { ErrorType } from '@infra/AppError'
import Passwords from '@infra/Passwords'

const createUser = async (data: ICreateUserDTO) => {
  const repository = new UsersRepository()
  const existentUser = await repository.findByEmail(data.email)

  if (existentUser) {
    throw new AppError(ErrorType.EmailInUseException)
  }

  const password = await Passwords.hash(data.password)
  const newUser = await repository.bootstrap({ ...data, password })

  return { ...newUser, password: undefined }
}

export default createUser
