import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQlString } from graphql;

const userInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    description: 'User',
    fields: () => {
        name: { type: GraphQLString }
    }
})

export default userInputType