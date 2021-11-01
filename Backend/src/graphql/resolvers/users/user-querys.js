
import { Users } from '../../models'
const userQuerys = {
    getUsers: async (_, args) => {
        return Users.find({});
    }
}
export default userQuerys
