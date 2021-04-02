import app from './app'
import Logger from '@infra/Logger'

const port = process.env.PORT

app.listen(port, () => {
  Logger.info(`Server is running on port ${port}...`)
})
