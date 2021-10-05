import resolvers from './graphql/resolvers'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { join } from 'path';
import { readFileSync, readdirSync } from 'fs';

let typeDefs = '';
const gqlFiles = readdirSync(join(__dirname, './graphql/typeDefs'));

gqlFiles.forEach((file) => {
    typeDefs += readFileSync(join(__dirname, './graphql/typeDefs', file), {
        encoding: 'utf8'
    });
})

console.log(gqlFiles)
const Schema = makeExecutableSchema({
    resolvers,
    typeDefs
})

export default Schema