const express = require('express');
const app = express();
const port = 4000;
// require('dotenv').config()
const dbConnect = require('./dbConnect');

app.listen(port, (err) => {
    console.log(`App is runing on port ${port}`);
});
