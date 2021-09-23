import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

export const friendType = new GraphQLObjectType({
  name: 'Friend',
  description: 'Friends available for transfers',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    balance: { type: GraphQLInt }
  }
})
