const Sequelize = require("sequelize");
const connection = new Sequelize("mysql://root:root@localhost:8889/node-wsf");
connection
    .authenticate()
    .then (function(){
        console.log("connected");
    })
    .catch(function(err){
        console.log(err);
    });

    module.exports = connection;