const dotenv = require("dotenv") ;
dotenv.config();
const config = {
  development: {
    database: {
      username: process.env.CLIENTS_DB_USERNAME,
      password: process.env.CLIENTS_DB_PASSWORD,
      database: process.env.CLIENTS_DB_DATABASE,
      host: process.env.CLIENTS_DB_HOST,
      port :process.env.CLIENTS_DB_PORT,
      dialect: "mysql",
       operatorsAliases: 1,
    },
    email: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true",
      username: process.env.SMTP_USERNAME,
      password: process.env.SMTP_PASSWORD,
      fromEmail: process.env.SMTP_FROM_EMAIL,
      fromName: process.env.SMTP_FROM_NAME,
    },
  },
  production: {
    database: {
      username: process.env.CLIENTS_DB_USERNAME,
      password: process.env.CLIENTS_DB_PASSWORD,
      database: process.env.CLIENTS_DB_DATABASE,
      host: process.env.CLIENTS_DB_HOST,
      dialect: "mysql",
      operatorsAliases: false,
    },
    email: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true",
      username: process.env.SMTP_USERNAME,
      password: process.env.SMTP_PASSWORD,
      fromEmail: process.env.SMTP_FROM_EMAIL,
      fromName: process.env.SMTP_FROM_NAME,
    },
  },
};

const envConfig = config[process.env.NODE_ENV];

module.exports = {
  envConfig
};
 
