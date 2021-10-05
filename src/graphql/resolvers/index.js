import { commentMutations, commentQuerys } from './comments';
import { postMutations, postQuerys } from './posts';
import { userMutations, userQuerys } from './users';

const resolvers = {
    Query: {
        ...commentQuerys,
        ...postQuerys,
        ...userQuerys
    },
    Mutation: {
        ...commentMutations,
        ...postMutations,
        ...userMutations
    }
}

export default resolvers;