import { addNewUser, loginUser, updateUser } from "./services";

const userMutations = {
    // create a new Users
    createUser: (parent, args) => {
        return addNewUser(parent, args)
    },
    loginUser: async (parent, args) => loginUser(parent, args),
    //delete user from the database
    updateUser: async (parent, args, context) => updateUser(parent, args, context)

}

export default userMutations