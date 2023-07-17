import gql from 'graphql-tag'

import { addAuthorResolver } from './resolvers/addAuthorResolver.js'
import { deleteAuthorResolver } from './resolvers/deleteAuthorResolver.js'
import { getAuthorResolver } from './resolvers/getAuthorResolver.js'
import { getAuthorBookResolver } from './resolvers/getAuthorBookResolver.js'
import { updateAuthorResolver } from './resolvers/updateAuthorResolver.js'


export const typeDefs = gql`
  extend type Query {
    author(id: String!): Author 
  }

  extend type Mutation {
    addAuthor(author: AddAuthorInput!): Author 
    updateAuthor(id: String!, author: UpdateAuthorInput!): Author 
    deleteAuthor(id: String!): Author 
  }

  type Author {
    id: String!
    firstName: String!
    lastName: String!
    books: [Book]
  }

  input AddAuthorInput {
    firstName: String!
    lastName: String!
  }

  input UpdateAuthorInput {
    firstName: String
    lastName: String
  }
`

export const resolvers = {
  Query: {
    author: getAuthorResolver
  },
  Mutation: {
    addAuthor: addAuthorResolver,
    deleteAuthor: deleteAuthorResolver,
    updateAuthor: updateAuthorResolver
  },
  Author: {
    books: getAuthorBookResolver
  }
}
