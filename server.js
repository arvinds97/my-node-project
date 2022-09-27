const express = require('express')
const app = express() //creating an instance of express

app.get('/hello', (req,res) => {
    res.send('Hello World!');
});

const PORT = 4000;
app.listen(PORT)

