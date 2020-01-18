require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

const PORT = process.env.PORT || 5000;
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT http://localhost:${PORT}`);
});
