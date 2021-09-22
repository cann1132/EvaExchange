module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      registered: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Users;
  };