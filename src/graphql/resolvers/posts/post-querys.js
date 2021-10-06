
import { Posts } from '../../models'
const postQuerys = {
    getPosts: async (_, args) => {

        return await Posts.find({});
    }
}
export default postQuerys