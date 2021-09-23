import { friends } from '../data/friends'
import { friendType } from './types'
import { GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLString } from 'graphql'

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is a root query',
  fields: {
    friends: {
      type: GraphQLList(friendType),
      resolve: () => friends
    },
    friend: {
      type: friendType,
      args: { 
        id: { type: GraphQLString }
      },
      resolve: (_, args) => friends.find(friend => friend.id === args.id)
    }
  }
})

const rootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'This is a root mutation',
  fields: {}
})

const schema = new GraphQLSchema({ query: rootQuery, mutation: rootMutation })

export default schema