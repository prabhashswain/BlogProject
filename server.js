const express = require('express');
require('dotenv').config()

const PORT = process.env.PORT || 3000

const app = express()

//server creation
app.listen(PORT,()=>{
    console.log('Server started');
})