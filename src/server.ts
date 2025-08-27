import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'
import transactions = require('./routes/transactions')

const app = fastify()

app.register(transactions.transactionsRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
