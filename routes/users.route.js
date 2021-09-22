module.exports = app => {

    const users = require("../controllers/users.controller");

    var router = require("express").Router();

    router.post("/", users.create);

    app.use("/api/users",router);
}