import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
console.log('hello dev', process.env.REACT_APP_API_URL)


const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API_URL || 'http://localhost:8080'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),

})

export default client;