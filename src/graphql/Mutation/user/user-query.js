
import { GraphQLString, GraphQLNonNull } from 'graphql'
export const getUser = {
    type: 'UserType',
    args: {
        item_query: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (obj, args, viewer, info) => { }

}