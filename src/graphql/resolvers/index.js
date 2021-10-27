import { commentMutations, commentQuerys } from './comments';
import { postMutations, postQuerys } from './posts';
import { userMutations, userQuerys } from './users';
import { PostsQuery } from './posts/services';
import { CommentsQuery } from './comments/commnet-services';
// import { UsersQuery } from './users/services';


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
    },
    Posts: PostsQuery,
    Comments: CommentsQuery,
    // Users: UsersQuery,
}

export default resolvers;