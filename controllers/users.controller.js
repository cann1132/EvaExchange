const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

//creates a user.
exports.create = (req,res) => {
    if (!req.body.username){
        res.status(400).send({
            message:"Username must be provided."
        });
        return;
    }
  
    const user = {
        username: req.body.username,
        registered: req.body.registered ? req.body.registered : false
    };
  
    Users.create(user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured. Check logs for detail."
        });
    });
  };

//Register a user.
exports.registerUser = (req,res) => {
  
};

//
exports.getUserRegistered = (req,res) => {
  
};
    
//Checks registration status of the user.
exports.bulkUserCreate = (req,res) => {
  
};    
