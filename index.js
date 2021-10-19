const express = require('express');
const port = 3000;
const host = '0.0.0.0';
const app = express();


app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hi")
})

app.listen(port, host)