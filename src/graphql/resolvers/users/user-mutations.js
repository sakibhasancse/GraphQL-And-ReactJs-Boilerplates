import { addNewUser, loginUser } from "./services";

const userMutations = {
    // create a new Users
    createUser: (parent, args) => addNewUser(args?.createUserInputType),
    loginUser: async (parent, args) => loginUser(args?.loginUserInputType),
    //delete user from the database
    deleteUser: (parent, args) => {
        // const { id } = args
        // const isUser = Users.findOne({ _id: id });
        // if (isUser) throw new Error(`User not found with id ${id}`);

        // const isPost = Posts.findOne({ "author": id });
        // if (isPost) {
        //     const isComment = Comments.findOne({ "postId": isPost._id });
        // }

        return {}
    }

}

export default userMutations