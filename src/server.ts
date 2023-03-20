import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactionsRoutes'

const app = fastify()

// get, post, put, patch, delete
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER RUNNING')
  })
