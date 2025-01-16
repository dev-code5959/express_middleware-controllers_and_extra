//application configure

const express =require('express');
const app = new express();
const router = require('./src/routes/api');



//application Routes

app.use('/api', router);


module.exports = app;