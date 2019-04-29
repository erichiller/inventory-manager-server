import { ApolloServer, gql } from "apollo-server-express";
import { GraphQLSchema, GraphQLObjectType, GraphQLBoolean , GraphQLScalarType } from 'graphql'
import express from "express";
import { GraphQLUpload ,} from 'graphql-upload'
import { Stream } from "stream";


const typeDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  type Query {
    uploads: [File]
  }
  type Mutation {
    singleUpload(file: Upload!): File!
  }
`;



// interface File {
//     filename: string,
//     mimetype: string,
//     encoding: string,
// }
// interface Query {
//     uploads: () => File[]
// }
// interface Mutation {
//     singleUpload: processFileUploads
// }

// interface ResolversT {
//     Query: Query;
//     Mutation: Mutation;
// }

interface GraphQLUpload {
    stream: Stream;
    filename: string;
    mimetype: string,
    encoding: string,
}

const resolvers = {
    Query: {
        uploads: (parent, args) => {
            console.log("query();")
            // Return the record of files uploaded from your DB or API or filesystem.
        }
    },
    Mutation: {
        async singleUpload(parent, args): Promise<File> {
            return args.file.then(file => {
                return file;
            })
            // const { stream, filename, mimetype, encoding } = await file;

            // // 1. Validate file metadata.

            // // 2. Stream file contents into cloud storage:
            // // https://nodejs.org/api/stream.html

            // // 3. Record the file upload in your DB.
            // // const id = await recordFile( … )

            // console.log("singleUpload();")

            // return { filename, mimetype, encoding };
        }
    },
    // Upload: GraphQLUpload
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);