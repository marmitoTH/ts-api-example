import bcrypt from 'bcryptjs'

class Passwords {
  static SALT_LENGTH = 8

  static async hash(password: string) {
    return await bcrypt.hash(password, this.SALT_LENGTH)
  }

  static async compare(password: string, hash: string) {
    return await bcrypt.compare(password, hash)
  }
}

export default Passwords
