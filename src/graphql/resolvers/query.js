export const Query = {
    //return users only
    user: (_, args, { data }) => {
        if (!args.query) {
            return data.users
        }

        return data.users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))

    },
    //return posts only
    post: (_, args, { data }) => {
        if (!args.query) {
            return data.posts
        }
        return data.posts.filter(post => {
            const isTitleMatch = post.name.toLowerCase().includes(args.query.toLowerCase());
            const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
            return isTitleMatch || isBodyMatch;
        })

    },
    //return commnets only
    Comments: (parent, args, { data }) => {
        if (!args.query) {
            return data.comments
        }
    }
}