const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routes/router');

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));