const env = process.env.NODE_ENV
const root = env === 'production' ? 'build' : 'src'
const url = env === 'test' ? process.env.DB_TEST_URL : process.env.DB_URL

const type =
  env === 'test' ? process.env.DB_TEST_TYPE : process.env.DB_TEST_TYPE

const settings = {
  type: type,
  url: url,
  entities: [`${root}/infra/database/models/**/*.[t|j]s`],
  migrations: [`${root}/infra/database/migrations/**/*.[t|j]s`],
  cli: {
    entitiesDir: `${root}/infra/database/models`,
    migrationsDir: `${root}/infra/database/migrations`
  }
}

module.exports = settings
