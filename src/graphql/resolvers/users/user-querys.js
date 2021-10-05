
import { Posts } from '../../models'
const postQuerys = {
    getPosts: async (_, args) => {
        return Posts.find();
    }
}
export default postQuerys