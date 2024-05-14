const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// app.get or app.post or app.put or app.delete(path, handler)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/aboutUs", (req, res) => {
  res.send("Hello welcome to our site");
});
app.get("/contactUs", (req, res) => {
  res.send("You can contact us thru whatsapp");
});

app.get("/Catalog", (req, res) => {
  res.send("photo gallery");
});
app.get("/Catalog/jaypee", (req, res) => {
  res.send("photo gallery of japyee");
});

app.get("/Catalog/MRA_DAV", (req, res) => {
  res.send("photo gallery of MRA DAV");
});
// power of :slug
app.get("/Catalog/:slug", (req, res) => {
  console.log(req);
  // for http://localhost:3000/catalog/adhaui?mode=dark&region=pakistan
  console.log(req.params); // output: params{slug:'adhaui'}
  console.log(req.query); // output: query{mode:'dark', region:'pakistan'}

  res.send(`photo gallery ha of ${req.params.slug}`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
