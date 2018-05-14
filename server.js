const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port);
global.console.log(`Server started on port ${port}`);
