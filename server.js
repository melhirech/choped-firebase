const express = require("express");
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, "/build")));

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/build/index.html')
})



app.listen(process.env.PORT || 4000)