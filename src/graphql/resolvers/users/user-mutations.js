import { v4 } from 'uuid';
const userMutations = {
    // create a new Users
    createUser: (parent, args, { data, pubsub }) => {
        const { name, email, phone } = args?.createUserInputType;
        if (name && email && phone) {
            const isUser = data.users.some(user => user.email === email);
            if (isUser) throw new Error(`User ${email} already exists`);
            const newUser = { id: v4(), ...args.createUserInputType };
            data.users.push(newUser);
            //Authontic with access to publish user

            pubsub.publish('user', { user: newUser })
            return newUser

        } else {
            throw new Error('All field are must ')
        }
    },
    //delete user from the database
    deleteUser: (parent, args, { data }) => {
        const isUser = data.users.findIndex(user => user.id === args?.id);
        if (isUser === -1) throw new Error(`User not found with id ${args.id}`)
        const deleteUser = data.users.splice(isUser, 1);
        posts = data.posts.filter(post => {
            const isMathPost = post.author.id === args.id;
            if (isMathPost) {
                data.comments = data.comments.filter(comment => comment.postId !== post.id);
            }
            return !isMathPost
        });
        data.comments = data.comments.filter(comment => comment.postId !== args.id);
        return deleteUser[0]
    }

}

export default userMutations