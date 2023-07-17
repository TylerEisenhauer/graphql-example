import gql from 'graphql-tag'

import { addBookResolver } from './resolvers/addBookResolver.js'
import { deleteBookResolver } from './resolvers/deleteBookResolver.js'
import { getBookResolver } from './resolvers/getBookResolver.js'
import { getBookAuthorResolver } from './resolvers/getBookAuthorResolver.js'
import { updateBookResolver } from './resolvers/updateBookResolver.js'

export const typeDefs = gql`
  extend type Query {
    book(id: String!): Book 
  }

  extend type Mutation {
    addBook(book: AddBookInput!): Book 
    deleteBook(id: String!): Book 
    updateBook(id: String!, book: UpdateBookInput!): Book 
  }

  type Book {
    id: String!
    title: String!
    author: Author!
  }

  input AddBookInput {
    title: String!
    author: String!
  }

  input UpdateBookInput {
    title: String
    author: String
  }
`

export const resolvers = {
  Query: {
    book: getBookResolver
  },
  Mutation: {
    addBook: addBookResolver,
    deleteBook: deleteBookResolver,
    updateBook: updateBookResolver
  },
  Book: {
    author: getBookAuthorResolver
  }
}
