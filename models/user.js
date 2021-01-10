module.exports = (sequelize, DataTypes) => {
    // const dateConverter = (timestamp) => {
    //   const date = new Date(timestamp);
    //   const year = date.getFullYear();
    //   const month = date.getMonth();
    //   const day = date.getDate();
    //   return `${year}-${("00" + month).slice(-2)}-${("00" + day).slice(-2)}`;
    // };
    const user = sequelize.define(
      "user",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        role: {
          type: DataTypes.ENUM("admin", "normal"),
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        active: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        smtpEmail: {
          type: DataTypes.STRING(45),
          defaultValue: null,
        },
        smtpPassword: {
          type: DataTypes.STRING(45),
          defaultValue: null,
        },
        smtpHost: {
          type: DataTypes.STRING(45),
          defaultValue: null,
        },
        smtpPort: {
          type: DataTypes.STRING(45),
          defaultValue: null,
        },
        smtpSubject: {
          type: DataTypes.STRING(200),
          defaultValue: null,
        },
        emailTemplate: {
          type: DataTypes.STRING(1000),
          defaultValue: null,
        },
      },
    );
    return user;
  };  


    