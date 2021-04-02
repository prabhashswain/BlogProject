const express = require('express');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const homeRouter = require('./routes/homeRoute');
require('dotenv').config();
const connect = require('./config/db');

const PORT = process.env.PORT || 3000

const app = express()

//connect to mongo
connect();

//ejs setup
app.use(expressLayout)
app.set('view engine','ejs')
//static file config
app.use(express.static(path.join(__dirname+'/public/')))
//routes
app.use(homeRouter)
//server creation
app.listen(PORT,()=>{
    console.log('Server started');
})
