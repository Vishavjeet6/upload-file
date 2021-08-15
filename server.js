const express = require('express');

const app = express();

global.__basedir = __dirname;

const initRoutes = require('./src/routes');

const port = 8080;

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
