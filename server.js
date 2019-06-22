const express = require("express");
// const routes = require('./routes');
const PORT = process.env.PORT || 5000


const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', (req, res) => {
  res.send('Wecome to my API')
})

app.listen(PORT, () => {
  console.log(
    `🌎  ==> API Server now listening on PORT http://localhost:${PORT}`
  );
});
