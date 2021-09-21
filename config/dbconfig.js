module.exports = {
    HOST: "localhost",
    USER: "evaexchange",
    PASSWORD: "eva",
    DB: "eva",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 40000,
      idle: 20000
    }
  };