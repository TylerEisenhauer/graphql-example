import gql from 'graphql-tag'

import { getAuthorResolver } from './resolvers/getAuthorResolver.js'
import { getAuthorBookResolver } from './resolvers/getAuthorBookResolver.js'


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
    author: getAuthorResolver
  },
  Author: {
    books: getAuthorBookResolver
  }
}
