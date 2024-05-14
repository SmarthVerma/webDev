const express = require("express");
const app = express();
const port = 5000;
const blog = require("./routes/blog");
const contact= require("./routes/contact")

app.use(express.static("public"));
app.use("/blog", blog);
app.use("/contact", contact);

// Handling GET request for "/"
app.get("/", (req, res) => {
  console.log(`abhi toh get chal ra ha (client console)`);
  res.send("Hello World312321");
});

// Handling POST request for "/"
app.post("/", (req, res) => {
  console.log(`console m post chla (client side)`);
  res.send("post chal rae (browser console)");
});

// Handling PUT request for "/"
app.put("/", (req, res) => {
  console.log(`console m put chla (client side)`);
  res.send("put chal ra re (browser console)");
});

// Handling DELETE request for "/"
app.delete("/", (req, res) => {
  console.log(`console m delete chla (client side)`);
  res.send("delete chal ra re (browser console)");
});
 
//fulltush htmlfile open

app.get("/myindex", (req, res) => {
  console.log(`abhi toh get chal ra ha`);
 res.sendFile("templates/myIndex.html", { root: __dirname });

});
// can also send json
app.get("/api", (req, res) => {
  console.log(`abhi toh get chal ra ha`);
 res.json({a:4, b:9, c:11})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
