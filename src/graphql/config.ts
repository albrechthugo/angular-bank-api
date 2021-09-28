import { GraphQLFloat, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import { doTransferToFriend, getAccount, getFriendBId, getFriends } from '../services'
import { accountType, friendType, transactionType } from './types'

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is a root query',
  fields: {
    friends: {
      type: GraphQLList(friendType),
      resolve: () => getFriends()
    },
    friend: {
      type: friendType,
      args: { 
        id: { type: GraphQLString }
      },
      resolve: (_, args) => getFriendBId(args.id)
    },
    account: {
      type: accountType,
      resolve: () => getAccount()
    }
  }
})

const rootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'This is a root mutation',
  fields: {
    transaction: {
      type: transactionType,
      args: {
        destinyFriendId: { type: GraphQLString },
        message: { type: GraphQLString },
        amount: { type: GraphQLFloat },
        type: { type: GraphQLString },
      },
      resolve: (_, args) => doTransferToFriend({
        destinyFriendId: args.destinyFriendId,
        type: args.type,
        amount: args.amount,
        message: args.message 
      })
    }
  }
})

const schema = new GraphQLSchema({ query: rootQuery, mutation: rootMutation })

export default schema