module.exports = {
    HOST: "localhost",
    USER: "evaexchange",
    PASSWORD: "eva",
    DB: "eva123",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };