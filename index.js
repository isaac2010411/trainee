const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { execute, subscribe } =require('graphql') ;
const { createServer } =require('http') ;
const { SubscriptionServer } =require('subscriptions-transport-ws') ;
const {schema} = require('./src/schema');
const cors = require('cors');

const path= require("path");
const publicPath = path.join(__dirname,'build');
//models db
const models = require('./models').db;
const { Auth } = require('./src/auth');

// Initialize the app
const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000 ;
const CLIENTPORT =process.env.PORT || 3000
const server = express();
server.use(express.static(publicPath));

server.use('*', cors()); 


server.use('/graphql',
 bodyParser.json(), 
 graphqlExpress(async (req , res )=>{

    let auth = new Auth({req,res});
    await auth.authenticate();
     
    return{
        schema ,
        context:{
            auth: auth,
            models:models,
        }} 
    })
);

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`,
}));

server.get('*', (req, res) => {    
    res.sendFile(path.join(publicPath , 'index.html'));
 });


// Wrap the Express server
const ws = createServer(server);

//Start the server
const promises = [];
if (process.env.NODE_ENV === "development") {
    promises.push(models.sequelize.sync());
};

Promise.all(promises).then(() => {
    ws.listen(PORT, () => {
    console.log(`Apollo Server is now running on http://localhost:${PORT}`);
    // Set up the WebSocket for handling GraphQL subscriptions
        let wsServer = new SubscriptionServer({
            execute,
            subscribe,
            schema,
            onConnect: (connectionParams, webSocket) => {
                if (connectionParams.authToken) {
                    // return validateToken(connectionParams.authToken)
                    //     .then(findUser(connectionParams.authToken))
                    //     .then((user) => {
                            // console.log(connectionParams.authToken)
                            return {
                                currentUser: connectionParams.authToken,
                            }
                //         });
                // }
                // throw new Error('Missing auth token!');
             }}
            },
            {
            server: ws,
            // path: '/subscriptions',
        });
        console.log(`Apollo Server subscriptions is now running on ws://localhost:${PORT}/subscriptions`)
    })
   
});
