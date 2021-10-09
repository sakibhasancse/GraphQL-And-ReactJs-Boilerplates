
import { getPostsComments } from '../../models'
const commentQuerys = {
    getComments: async (_, args) => getPostsComments(_, args)
}

export default commentQuerys