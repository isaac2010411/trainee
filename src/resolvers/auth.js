const bcrypt = require("bcryptjs") ;
const crypto = require("crypto") ;
// const { sendEmail } = require("../../emailSender") ;

const userAuthTypeDefs = `
    type RegisterPayload {
        id: ID!
        role: String!
        name: String!
        email: String!
        lastLogin: String!
        active: Boolean!
    }

    input RegisterUserInput {
      name: String!
      email: String!
      password: String!
    }

    type LoginPayload {
      token: String!
      user: User!
    }
    input LoginWithSocialInput {
      email: String!
      name: String!
      phone: String
    }
    input LoginInput {
      password: String!
      email: String!
    }
    input RequestPasswordResetInput {
      email: String!
      callBackUrl: String!
    }
    input VerifyPasswordResetInput {
      token: String!
    }
    type VerifyPasswordResetPayload {
      id: ID!
      email: String!
    }
    input ResetPasswordInput {
      email: String!
      password: String!
    }
`;
const userAuthResolvers = {
  Query: {
    me: async (root, args, { models, auth }) => {
      const user = await models.user.findOne({
        where: { id: auth.getUserId() }
      });
      return user;
    },
    // getAccountList: async (root, args, { models }) => {
    //   const accounts = await models.account.findAll();
    //   return {
    //     nodes: accounts.map(({ id, name }) => ({ id, name })),
    //   };
    // },
  },
  Mutation: {
    registerUser: async (parent, { input }, { models }, info) => {
      const userExist = await models.user.findOne({
        where: { email: input.email },
      });
      if(userExist) {
        return false;
      }
      const user = await models.user.create({
        password: bcrypt.hashSync(input.password, bcrypt.genSaltSync(10)),
        role: "normal",
        name: input.name,
        phone: input.phone ?  input.phone : null , 
        email: input.email,
        active: false,
      });
      return true;
    },
    login: async (parent, { input }, { models , auth }, info) => {
      
      const user = await models.user.findOne({
        where: { email: input.email },
      });
     
      if (!user) {
        throw Error("No user found");
      }
      const match = await bcrypt.compare(input.password, user.password);
      if (!match) {
        throw Error("password mismatched");
      }
    //   if (!user.active) {
    //     throw Error("The user is not active");
    //   }
    //   const expiration = user.getDataValue("expiration");
    //   if (expiration <= new Date()) {
    //     throw Error("The user has been expired");
    //   }
      const token = auth.signInWithJWT(user);
    //   console.log(token)
      return {
        token, 
        user,
      };
    },
    loginWithSocial: async (root, { input }, { models , auth }) => {
      let user = await models.user.findOne({
        where: {
          email: input.email,
        }, 
      });
      if (!user && input.phone) {
        user = await models.user.create({
          password: bcrypt.hashSync("dummy", bcrypt.genSaltSync(10)),
          role: "normal",
          name: input.name,
          phone: input.phone,
          email: input.email,
          active: false,
          comments: "nice",
          expiration: new Date(new Date().setMonth(new Date().getMonth() + 1)),
        });
      } else if (!user) {
        throw new Error("MISSING_PHONE");
      }
      const token = auth.signInWithJWT(user);
      return {
        token,
        user,
      };
    },
    logout: async (parent, args, { auth }) => {
      auth.logout();
      return true;
    },
    requestPasswordReset: async (
      parent,
      { input: { email, callBackUrl } },
      { models }
    ) => {
      const user = await models.user.findOne({
        where: {
          email,
        },
        attributes: ["id"],
      });
      if (!user) {
        throw Error("No user found with this email address");
      }
      const buf = crypto.randomBytes(20);
      const token = buf.toString("hex");

      const existingReset = await models.passwordResets.findOne({
        where: {
          userId: user.id,
        },
      });
      const newReset = {
        token,
        expiredAt: new Date(new Date().setMonth(new Date().getHours() + 1)),
        userId: user.id,
      };
      if (!existingReset) {
        await models.passwordResets.create(newReset);
      } else {
        await models.passwordResets.update(newReset, {
          where: { userId: user.id },
        });
      }
      const url = `${callBackUrl}?token=${token}`;
      const html = `
      <div>
      <a href="${url}">${url}</a>
      </div>
      `;
      await sendEmail(email, "Reset Password", html);
      return true;
    },
    verifyPasswordReset: async (parent, { input: { token } }, { models }) => {
      const passwordReset = await models.passwordResets.findOne({
        where: {
          token,
        },
        attributes: ["id", "expiredAt"],
        include: ["user"],
      });
      if (!passwordReset) {
        throw Error("Invalid Token");
      }
      if (passwordReset.expiredAt < new Date()) {
        throw Error("Token Expired");
      }
      return {
        email: passwordReset.user.email,
        id: passwordReset.user.id,
      };
    },

    resetPassword: async (
      parent,
      { input: { email, password } },
      { models }
    ) => {
      const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
      await models.user.update(
        {
          password: passwordHash,
        },
        {
          where: {
            email,
          },
        }
      );
      return true;
    },
  },
};


module.exports = {
    userAuthTypeDefs,
    userAuthResolvers
};

