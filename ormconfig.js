const { compilerOptions } = require('./tsconfig.json')

const IN_PRODUCTION = process.env.NODE_ENV === 'production'
const IN_TEST = process.env.NODE_ENV === 'test'

const root = IN_PRODUCTION ? compilerOptions.outDir : compilerOptions.rootDir
const url = IN_TEST ? process.env.DB_TEST_URL : process.env.DB_URL
const type = IN_TEST ? process.env.DB_TEST_TYPE : process.env.DB_TYPE

module.exports = {
  type: type,
  url: url,
  entities: [`${root}/infra/database/models/**/*.[t|j]s`],
  migrations: [`${root}/infra/database/migrations/**/*.[t|j]s`],
  cli: {
    entitiesDir: `${root}/infra/database/models`,
    migrationsDir: `${root}/infra/database/migrations`
  }
}
