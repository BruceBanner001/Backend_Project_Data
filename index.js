const express = require('express');

const StoredData = require('./data/StoredData')

const App = express();

const cors = require('cors');

const PORT = process.env.PORT || 3000;

App.use(cors());

App.get("/", (req, res) => {
    res.send('Server Connected')
})

App.get("/data", (req, res) => {
    res.send(StoredData);
})

App.listen(PORT, () => {
    console.log('Connected....');
})
