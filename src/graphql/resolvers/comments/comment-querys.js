
import { Comments } from '../../models'
const commentQuerys = {
    getComments: async (_, args) => {
        return Comments.find({});
    }
}
export default commentQuerys