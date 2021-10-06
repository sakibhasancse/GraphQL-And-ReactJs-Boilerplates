import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './graphql/resolvers';

const gqlFiles = readdirSync(join(__dirname, './graphql/typeDefs'));

let typeDefs = '';

gqlFiles.forEach((file) => {
    typeDefs += readFileSync(join(__dirname, './graphql/typeDefs', file), {
        encoding: 'utf8',
    });
});

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;