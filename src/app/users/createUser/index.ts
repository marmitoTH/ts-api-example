import ICreateUserDTO from './ICreateUserDTO'
import UsersRepository from '@infra/database/repositories/UsersRepository'
import AppError, { ErrorType } from '@infra/AppError'
import Passwords from '@infra/Passwords'

const createUser = async (dto: ICreateUserDTO) => {
  const repository = new UsersRepository()
  const { name, email, phoneNumber, password } = dto
  const existentUser = await repository.findByEmail(email)

  if (existentUser) {
    throw new AppError(ErrorType.EmailInUseException)
  }

  const hashedPassword = await Passwords.hash(password)

  const newUser = await repository.bootstrap({
    name,
    email,
    phoneNumber,
    password: hashedPassword
  })

  return { ...newUser, password: undefined }
}

export default createUser
