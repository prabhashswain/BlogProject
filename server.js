const express = require('express');
const expressLayout = require('express-ejs-layouts');
const homeRouter = require('./routes/homeRoute');
require('dotenv').config()

const PORT = process.env.PORT || 3000

const app = express()

//ejs setup
app.use(expressLayout)
app.set('view engine','ejs')
//routes
app.use(homeRouter)
//server creation
app.listen(PORT,()=>{
    console.log('Server started');
})