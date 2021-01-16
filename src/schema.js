const { makeExecutableSchema } = require('graphql-tools');
const { typeDefs , resolvers } = require('./resolvers');
  
  // Put together a schema
let schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });


module.exports = {
    schema
}