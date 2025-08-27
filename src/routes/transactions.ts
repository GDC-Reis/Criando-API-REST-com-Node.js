import { FastifyInstance } from 'fastify'
import database = require('../database')

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transaction = await database
      .knex('transactions')
      .where('amount', 1000)
      .select('*')

    return transaction
  })
}
