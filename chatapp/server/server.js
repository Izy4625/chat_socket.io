
const path = require('path');
const publicpath = path.join(__dirname,"/../public");
const port = process.env.PORT || 3001;
const express = require('express');

const app = express()
app.use(express.static(publicpath));

app.listen(port, ()=>{
    console.log('server is running in port 300')
})

