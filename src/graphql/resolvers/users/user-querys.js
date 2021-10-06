
import { User } from '../../models'
const userQuerys = {
    getUsers: async (_, args) => {
        return User.find({});
    }
}
export default userQuerys
