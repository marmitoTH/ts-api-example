import UsersRepository from '@infra/database/repositories/UsersRepository'
import AppError, { ErrorType } from '@infra/AppError'
import IUpdateUserDTO from './IUpdateUserDTO'

const UpdateUser = async (data: IUpdateUserDTO) => {
  const repository = new UsersRepository()
  const { id, name, phoneNumber } = data
  const user = await repository.findByID(id)

  if (!user) {
    throw new AppError(ErrorType.UserNotFoundException)
  }

  if (name) {
    user.name = name
  }

  if (phoneNumber) {
    user.phoneNumber = phoneNumber
  }

  await repository.save(user)
  return { ...user, password: undefined }
}

export default UpdateUser
