class Logger {
  private static print(color: string, message: any, ...optionalParams: any[]) {
    if (process.env.ENABLE_LOG) {
      console.log(`[${new Date().toISOString()}]`, message, ...optionalParams)
    }
  }

  static info(message: any, ...optionalParams: any[]) {
    this.print('', message, ...optionalParams)
  }
}

export default Logger
