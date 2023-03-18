import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

// get, post, put, patch, delete
app.get('/hello', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER RUNNING')
  })
