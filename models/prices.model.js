module.exports = (sequelize, Sequelize) => {
    const Prices = sequelize.define("prices", {
      symbol: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      price:{
          type: Sequelize.DECIMAL(10,2)
      }
    });
  
    return Prices;
  };