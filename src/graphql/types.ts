import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList } from 'graphql'

export const friendType = new GraphQLObjectType({
  name: 'Friend',
  description: 'Friends available for transfers',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    balance: { type: GraphQLFloat }
  }
})

export const transactionType = new GraphQLObjectType({
  name: 'Transaction',
  description: 'Transaction',
  fields: {
    type: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    destinyFriendId: { type: GraphQLString },
    destinyFriendName: { type: GraphQLString },
    message: { type: GraphQLString }
  }
})

export const accountType = new GraphQLObjectType({
  name: 'Account',
  description: 'User account',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    transactions: { type: GraphQLList(transactionType) }
  }
})