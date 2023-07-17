import './config.js'

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import connect from './connect.js'
import { schema } from './schema.js'

connect(process.env.MONGO_CONNECTION)

const server = new ApolloServer({
  schema
})

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000
  }
})

console.log(`🚀  Server ready at: ${url}`)
