import express from 'express';
const app = express();

app.get('/hello', (req, res) =>
    res.send('Hello, my name is Arvind! And I made a change '));

const PORT = 4000;
app.listen(PORT)