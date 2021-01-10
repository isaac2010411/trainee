const  fs = require("fs") ;
const  path = require("path") ;
const  Sequelize = require("sequelize") ;
const  config = require("../config") ;
const basename = path.basename(__filename);
const db = {};

const database = config.envConfig.database;


//Loop over the array and create a new Sequelize instance for every database from config.js
const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  database
);

/**Add the Database Models**/
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = {
   db
};

