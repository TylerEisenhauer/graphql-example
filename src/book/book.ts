import gql from 'graphql-tag'

import { getBookResolver } from './resolvers/getBookResolver.js'
import { getBookAuthorResolver } from './resolvers/getBookAuthorResolver.js'

export const typeDefs = gql`
  extend type Query {
    book(id: String!): Book 
  }

  type Book {
    id: String!
    title: String!
    author: Author!
  }
`

export const resolvers = {
  Query: {
    book: getBookResolver
  },
  Book: {
    author: getBookAuthorResolver
  }
}
