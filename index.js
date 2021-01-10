const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress   } = require('apollo-server-express');
const {schema} = require('./src/schema');
const cors = require('cors')
// Initialize the app
const app = express();
app.use(cors());
const models = require('./models').db
// The GraphQL endpoint
app
.use('/graphql',
bodyParser.json(),
graphqlExpress((req , res )=>{ 
    return{
        schema,
        context:{
            headers:req.headers,
            models:models
        }
    }}
));

// GraphiQL, a visual editor for queries
app
.use('/graphiql',   
graphiqlExpress({ 
    endpointURL: '/graphql' 
    }
));

// Start the server
const promises = [];
if (process.env.NODE_ENV === "development") {
    promises.push(models.sequelize.sync());
}
Promise.all(promises).then(() => {

  app.listen(3001, () => {
  console.log('Go to http://localhost:3001/graphiql to run queries!');
});
  
})
