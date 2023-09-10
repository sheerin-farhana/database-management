
const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize('mydatabase','root',process.env.MYSQL,{
    dialect:'mysql',
    host:'localhost'});


module.exports = sequelize;