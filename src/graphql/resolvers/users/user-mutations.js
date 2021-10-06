import { Users, Posts, Comments } from '../../models'
const userMutations = {
    // create a new Users
    createUser: (parent, args) => {
        const { name, email, phone } = args?.createUserInputType;
        if (name && email && phone) {
            const isUser = User.findOne({ email })
            if (isUser) throw new Error(`User ${email} already exists`);
            const newUser = new User(
                args.createUserInputType
            );
            newUser.save(() => {

            }).then(() => {
                return newUser
            }).catch(() => {
                return {}
            });

        } else {
            throw new Error('All field are must ')
        }
    },
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