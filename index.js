const express = require('express');
const app = express();
const port = 8000;
const mongoConnect = require('./mongoConnect');
const routes = require('./routes');

mongoConnect();
app.use(routes);
app.use(express.json());

app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
});