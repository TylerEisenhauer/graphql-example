import gql from 'graphql-tag'

import { authorResolver } from './resolvers/authorResolver.js'
import { authorBookResolver } from './resolvers/authorBookResolver.js'


export const typeDefs = gql`
  extend type Query {
    author(id: String!): Author 
  }

  type Author {
    id: String!
    firstName: String!
    lastName: String!
    books: [Book]
  }
`

export const resolvers = {
  Query: {
    author: authorResolver
  },
  Author: {
    books: authorBookResolver
  }
}
