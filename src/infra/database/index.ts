import 'reflect-metadata'

import { createConnection } from 'typeorm'
import options from './options'

export default createConnection(options)
