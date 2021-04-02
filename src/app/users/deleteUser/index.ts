import UsersRepository from '@infra/database/repositories/UsersRepository'
import AppError, { ErrorType } from '@infra/AppError'

const deleteUser = async (id: string) => {
  const repository = new UsersRepository()
  const user = await repository.findByID(id)

  if (!user) {
    throw new AppError(ErrorType.UserNotFoundException)
  }

  await repository.remove(user)
}

export default deleteUser
