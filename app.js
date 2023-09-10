const express = require('express');
const app = express();
const connectDB = require('./db/database');

const sequelize = require('./db/database');
const exp = require('constants');

const port = 3000;
app.use(express.static('./public'));

sequelize.sync()
    .then((result) => {
        app.listen(port);
        console.log('server listning on port 3000');
    })
    .catch(err => console.log(err));