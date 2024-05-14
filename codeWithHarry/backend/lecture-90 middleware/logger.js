const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs")


app.use((req,res,next)=>{
    let date= new Date()
    
    // time
   
    let time = date.toLocaleTimeString()
   
   
    
    fs.appendFileSync(
      "logs.txt",
      `\n\nDATE: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} \nTIME: ${time} \nreqMethod: ${req.method}`
    );
    next()
})

app.use((req,res,next)=>{
    // console.log(req.headers);
    req.smarth=" hi i am smarth and i am in"   
    next()
})

app.use((req,res,next)=>{
    // console.log(req.headers);
    req.smarth=" hi i am sammy and i am in"   
    next()
})

app.get("/", (req, res) => {
  res.send("Welcome to my_World!");
});

app.get("/new", (req, res) => {
  res.send(`Welcome ${req.smarth}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
