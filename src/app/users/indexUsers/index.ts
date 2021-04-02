import UsersRepository from '@infra/database/repositories/UsersRepository'

const indexUsers = async () => {
  const repository = new UsersRepository()
  const [users, amount] = await repository.findAll()
  const noPasswordUsers = users.map((user) => {
    return { ...user, password: undefined }
  })

  return { users: noPasswordUsers, metadata: { amount } }
}

export default indexUsers
