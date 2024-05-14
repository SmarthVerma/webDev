const express = require("express");
const app = express();
const port = 3000;
const birds = require("./routes/birds");
app.use("/birds", birds);
app.use(express.static("public")); //built_in middleware




//middleware 1
app.use((req, res, next) =>{
  console.log("m1");
  next(); // if removed, then website will be hanged in buffering mode
});

//middleware 2
app.use((req, res, next) =>{
  console.log("m2");
  res.send("hacked by middleware m1")
//   next(); // ab kr skte  ha q ure res.send hogai
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
