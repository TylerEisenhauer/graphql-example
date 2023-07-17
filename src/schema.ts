import gql from 'graphql-tag'
import { makeExecutableSchema } from '@graphql-tools/schema'
import merge from 'lodash/merge.js'

import {
  typeDefs as Author,
  resolvers as AuthorResolvers,
} from './author/index.js'
import {
  typeDefs as Book,
  resolvers as BookResolvers,
} from './book/index.js'

const Query = gql`
  type Query {
    _empty: String
  }
`

const resolvers = {}

export const schema = makeExecutableSchema({
  typeDefs: [Query, Author, Book],
  resolvers: merge(resolvers, AuthorResolvers, BookResolvers)
})