const { merge } = require("lodash");

//type defs and resolvers
const { 
  userResolvers,
  userTypeDefs
} = require('./user');

//type defs and resolvers
const { 
  userAuthResolvers,
  userAuthTypeDefs
} = require('./auth');
const { profileTypeDef, profileResolvers } = require("./profile");


  // The GraphQL schema in string form
  const typeDefs = `
    type Query { 
        user:User!
        users:[User]
        me: RegisterPayload!
        profile:Profile!
    }

    type Mutation{
      createUser(input : InputCreateUser ):Boolean!
      registerUser(input: RegisterUserInput): Boolean!
      
      login(input: LoginInput): LoginPayload!
      loginWithSocial(input: LoginWithSocialInput): LoginPayload!
      logout: Boolean!
      requestPasswordReset(input: RequestPasswordResetInput): Boolean!
      verifyPasswordReset(input: VerifyPasswordResetInput): VerifyPasswordResetPayload!
      resetPassword(input: ResetPasswordInput): Boolean!
      updateProfile(input:UpdateProfileInput):Profile!
    }
  `;
  

  module.exports = {
      typeDefs:[
          typeDefs,
          userTypeDefs,
          userAuthTypeDefs,
          profileTypeDef
      ],
      resolvers :merge(
        //   resolvers,
          userResolvers,
          userAuthResolvers,
          profileResolvers
      )
  };
  
