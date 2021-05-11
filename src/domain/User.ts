class User {
  readonly id: string
  name: string
  email: string
  phoneNumber: string
  password: string
  readonly createdAt: Date
  readonly updatedAt: Date

  constructor(
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.phoneNumber = phoneNumber
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

export default User
