
  // The GraphQL schema in string form
const userTypeDefs = `
    type User {
        name: String! 
        email:String!
        password:String!
        createdAt :String!
        active:String!
        role:String!
    }

    input InputCreateUser{
        name: String! 
        email:String!
        password:String!
        createdAt :String
        active:String
        role:String
    }
`;

  // The resolvers
 const userResolvers = {
    Query: { 
        users:async (root , args , { models , auth} )=>{
            // console.log(auth.payload)
            // if(!auth.payload){
            //     throw new Error("no logueado");
            // }

        let users = await models.user.findAll();
        return users;
        
    },
        user: () => {
            return {
                name:"isaac",
                email:"isaac@",
                password:"1234",
                createdAt :"String",
                active:"Boolean",
                role:"String"
            }
        },

    },
    Mutation:{
        createUser:async (parent , {input},{models}  )=>{
            // let { name , email } = input;
            // console.log(context)
            console.log(input);
            let user = await models.user.create({
                name:input.name,
                email:input.email,
                password:input.password,
                active:0,
                createdAt:new Date(),
                role:"normal"
            })

            return true
        }
    }
};




module.exports = {
    userTypeDefs,
    userResolvers
};
  