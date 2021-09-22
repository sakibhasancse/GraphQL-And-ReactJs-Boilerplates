//Demo Data for app
const users = [
    { id: "231", name: 'sakib', email: 'sakib@gain.com', phone: '123', posts: 12 },
    { id: "232", name: 'John', email: 'john@gain.com', phone: '123', posts: 13 },
    { id: "2343", name: 'mokbul', email: 'mokbul@gain.com', phone: '123', posts: 15 },
    { id: "2344", name: 'sa', email: 'mokbul@gain.com', phone: '123', posts: 14 },

]
const posts = [
    { id: "12", title: 'sakib', description: 'sadasdas', author: " 1", published: true },
    { id: "13", title: 'John', description: 'sadasdas', author: " 2", published: true },
    { id: "14", title: 'mokbul', description: 'sadasdas', author: " 3", published: true },
    { id: "15", title: 'sa', description: 'sadasdas', author: " 4", published: true }
]

const comments = [
    { id: "12", author: " 2", postId: "12", text: 'Hello, world commnt' },
    { id: "13", author: " 1", postId: "15", text: 'Hello, world commnt' },
    { id: "14", author: " 3", postId: "13", text: 'Hello, world commnt' },
    { id: "11", author: " 4", postId: "14", text: 'first, world commnt' },
    { id: "16", author: " 4", postId: "14", text: 'second, world commnt' },
    { id: "15", author: " 4", postId: "14", text: 'Hello, world commnt' }
]
export default { users, posts, comments }