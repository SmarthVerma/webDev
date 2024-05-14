const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!1");
});
app.get("/downloads", (req, res) => {
  res.send("Hello World!2");
});
app.get("/aboutUS", (req, res) => {
  res.send("Hello World!3");
});
app.get("/contact", (req, res) => {
  res.send("Hello World!4");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
