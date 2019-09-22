require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 5000;
// const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT http://localhost:${PORT}`);
});
