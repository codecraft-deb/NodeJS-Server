const express = require('express');
const app = express();
const port = 8000;
const mongoConnect = require('./mongoConnect');

mongoConnect();

app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
});