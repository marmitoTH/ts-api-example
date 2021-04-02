import 'express-async-errors'
import '@infra/database'

import express from 'express'

import router from './router'

import cors from 'cors'
import requestLogger from './middlewares/requestLogger'
import errorHandler from './middlewares/errorHandler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(requestLogger)
app.use(router)
app.use(errorHandler)

export default app
