
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
        createdAt :String!
        active:String!
        role:String!
    }
`;

  // The resolvers
 const userResolvers = {
    Query: { 
        users:(root , { input } , {headers , models} )=>{
            console.log(headers)
            console.log(models)
            return [{
                name:"isaac",
                email:"isaac@",
                password:"1234", 
                createdAt :"String",
                active:"Boolean",
                role:"String",
            },
            {
                name:"joana"
                ,email:"joana@",
                password:"5678",
                createdAt :"String",
                active:"Boolean",
                role:"String"
            }
        ]
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
        createUser:(root , { input } , context  )=>{
            let { name , email } = input;
            console.log(context)
            console.log(name , email);
            return {
                name:"isaac",
                email:"isaac@",
                password:"1234",
                createdAt :"String",
                active:"Boolean",
                role:"String"
            }
        }
    }
};




module.exports = {
    userTypeDefs,
    userResolvers
};
  