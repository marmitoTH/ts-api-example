import { getRepository, Repository } from 'typeorm'
import User from '../models/User'

class UsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  create(user: Partial<User>) {
    return this.repository.create(user)
  }

  async save(user: User) {
    return await this.repository.save(user)
  }

  async bootstrap(user: Partial<User>) {
    const newUser = this.create(user)
    return await this.save(newUser)
  }

  async remove(user: User) {
    return await this.repository.remove(user)
  }

  async findByID(id: string) {
    return await this.repository.findOne({ where: { id } })
  }

  async findByEmail(email: string) {
    return await this.repository.findOne({ where: { email } })
  }

  async findAll() {
    return await this.repository.findAndCount()
  }
}

export default UsersRepository
