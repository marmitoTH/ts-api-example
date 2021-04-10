import path from 'path'
import { ConnectionOptions } from 'typeorm'

const IN_TEST = process.env.NODE_ENV === 'test'

const options: object = {
  type: IN_TEST ? 'sqlite' : process.env.DB_TYPE,
  url: IN_TEST ? undefined : process.env.DB_URL,
  database: IN_TEST ? path.join(__dirname, 'sqlite.db') : undefined,
  entities: [path.join(__dirname, 'models/**/*.[t|j]s')],
  migrations: [path.join(__dirname, 'migrations/**/*.[t|j]s')],
  cli: {
    entitiesDir: path.join(__dirname, 'models'),
    migrationsDir: path.join(__dirname, 'migrations')
  }
}

export default options as ConnectionOptions
