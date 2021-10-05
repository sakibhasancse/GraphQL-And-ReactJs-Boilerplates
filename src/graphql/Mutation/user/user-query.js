
import { GraphQLString, GraphQLNonNull } from 'graphql'
import userInputType from './create-user-mutation'
export const getUser = {
    type: 'UserType',
    args: {
        item_query: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (obj, args, viewer, info) => { userInputType(obj, args, viewer, info) }

}