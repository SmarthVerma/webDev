const express = require("express");
const app = express();
const port = 5000;

const blog = require("./routes/blog");




app.use(express.static("public"));
app.use("/blog", blog);

app.get("/", (req, res) => {
    console.log(`abhi toh get chal ra ha`);
    
  res.send("Hello World312321");
});
//chaining

app.post("/", (req, res) => {
    console.log(`console m post chla`);
  res.send("post chal rae");
}).put("/", (req, res) => {
    console.log(`console m put chla`);
  res.send("put chal ra re");
}).delete("/", (req, res) => {
    console.log(`console m delete chla`);
  res.send("delete chal ra re");
});


//fulltush htmlfile open

app.get("/index", (req, res) => {
  console.log(`abhi toh get chal ra ha`);
 res.sendFile("templates/myIndex.html", { root: __dirname });

});

app.get("/api", (req, res) => {
  console.log(`abhi toh get chal ra ha`);
 res.json({a:4, b:9, c:11})

});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
