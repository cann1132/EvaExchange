module.exports = (sequelize, Sequelize) => {
    const Transactions = sequelize.define("transactions", {
      symbol: {
        type: Sequelize.STRING
      },
      action:{
          type: Sequelize.BOOLEAN
      },
      price:{
          type: Sequelize.DECIMAL(10,2)
      }
    });
  
    return Transactions;
  };