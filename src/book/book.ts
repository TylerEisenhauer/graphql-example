import gql from 'graphql-tag'

import { bookResolver } from './resolvers/bookResolver.js'
import { bookAuthorResolver } from './resolvers/bookAuthorResolver.js'

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
    book: bookResolver
  },
  Book: {
    author: bookAuthorResolver
  }
}
