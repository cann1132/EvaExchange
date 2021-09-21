module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      registered: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Users;
  };