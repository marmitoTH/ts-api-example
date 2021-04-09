import i18n from '@interface/i18n'

export enum ErrorType {
  UnknownErrorException,
  EmailInUseException,
  UserNotFoundException
}

class AppError {
  readonly id: number
  readonly type: string
  readonly message: string

  constructor(type: ErrorType) {
    this.id = type
    this.type = Object.values(ErrorType)[type] as string
    this.message = i18n.__(`errors.${this.type}`)
  }
}

export default AppError
