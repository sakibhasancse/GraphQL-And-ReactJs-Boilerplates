
import { getPosts } from './services'
const postQuerys = {
    getPosts: async (_, args) => getPosts(args)
}
export default postQuerys