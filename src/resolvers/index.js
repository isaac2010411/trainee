const { merge } = require("lodash");

//type defs and resolvers
const { 
  userResolvers,
  userTypeDefs
} = require('./user');


  // The GraphQL schema in string form
  const typeDefs = `
    type Query { 
        user:User!
        users:[User]
    }

    type Mutation{
      createUser(input : InputCreateUser ):User!
    }
  `;
  

  module.exports = {
      typeDefs:[
          typeDefs,
          userTypeDefs
      ],
      resolvers :merge(
        //   resolvers,
          userResolvers
      )
  };
  
