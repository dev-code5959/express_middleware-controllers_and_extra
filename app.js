//application configure

const express =require('express');
const app = new express();
const router = require('./src/routes/api');
const cookieParser = require('cookie-parser')

//application Routes

app.use(express.json())
app.use(cookieParser())
app.use('/api/', router);

module.exports = app;