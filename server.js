const express = require('express');
require('dotenv').config()

const PORT = process.env.PORT || 3000

const app = express()

//routes
app.get('/',(req,res)=>{
    res.send('Hello Express')
})
//server creation
app.listen(PORT,()=>{
    console.log('Server started');
})