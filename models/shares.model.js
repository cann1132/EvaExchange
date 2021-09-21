module.exports = (sequelize, Sequelize) => {
    const Shares = sequelize.define("shares", {
      username: {
        type: Sequelize.STRING
      },
      symbol: {
        type: Sequelize.STRING(3)
      },
      rate:{
          type: Sequelize.DECIMAL(10,2)
      },
      register:{
          type: Sequelize.BOOLEAN
      }
    });
  
    return Shares;
  };