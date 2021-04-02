export enum ErrorType {
  UnknownErrorException = 'Unknown error exception',
  EmailInUseException = 'Email is already in use',
  UserNotFoundException = 'User not found'
}

class AppError {
  readonly type: ErrorType

  constructor(type: ErrorType) {
    this.type = type
  }
}

export default AppError
