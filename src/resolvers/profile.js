const profileTypeDef = `
    type Profile {
        id: ID!
        role: String!
        name: String!
        email: String!
        smtpEmail:String
        smtpPassword:String
        smtpHost:String
        smtpPort:Int
        smtpSubject:String
        emailTemplate:String

    }

    input UpdateProfileInput {
      name: String!
      email: String!
      smtpEmail:String
      smtpPassword:String
      smtpHost:String
      smtpPort:String
      smtpSubject:String
      emailTemplate:String
    }
`;
const profileResolvers = {
  Query: {
    profile: async (root, args, { models, auth }) => {
      
      const user = await models.user.findOne({
        where: {
          id: auth.getUserId(),
        },
      });
      console.log(user)
      return user;
    },
  },
  Mutation: {
    updateProfile: async (parent, { input }, { models, auth }, info) => {
      const user = await models.user.findOne({
        where: { id: auth.getUserId() },
      });
      await user.update({
        name: input.name,
        phone: input.phone,
        email: input.email,
        comments: input.comments,
        smtpEmail:input.smtpEmail,
        smtpPassword:input.smtpPassword,
        smtpHost:input.smtpHost,
        smtpPort:input.smtpPort,
        smtpSubject:input.smtpSubject,
        emailTemplate:input.emailTemplate,
        setup: input.setup
      });
      return {
        id: user.id,
        role: user.role,
        name: user.name,
        phone: user.phone,
        email: user.email,
        comments: user.comments,
        active: user.active,
        setup: user.setup,
        smtpEmail:user.smtpEmail,
        smtpPassword:user.smtpPassword,
        smtpHost:user.smtpHost,
        smtpPort:user.smtpPort,
        smtpSubject:user.smtpSubject,
        emailTemplate:user.emailTemplate,
        expiration: user.expiration,
      };
    },
  },
};


module.exports = {
    profileResolvers,
    profileTypeDef
};
