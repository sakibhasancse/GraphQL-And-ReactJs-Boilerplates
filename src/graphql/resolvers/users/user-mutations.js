import { addNewUser, loginUser, updateUser } from "./services";

const userMutations = {
    // create a new Users
    createUser: (parent, args) => addNewUser(args?.createUserInputType),
    loginUser: async (parent, args) => loginUser(args?.loginUserInputType),
    //delete user from the database
    updateUser: async (parent, args, context) => updateUser(parent, args, context)

}

export default userMutations