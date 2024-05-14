const fs = require("fs");
// import fs from 'fs/promises'

console.log(`Starting`);



// fs.writeFileSync("smarth.txt", "Hi there my name is smarth and i am learnign about fs system")
    fs.writeFile("max.txt", "Hi my name is max and i am dog", (err)=>{
        if(err)
        console.log(err);
        fs.readFile("max.txt", (error, data)=>{
            console.log(error, data.toString());
            
        })
    })

    // append
    fs.appendFile("max.txt","I was taken away because i bit someone",(err)=>{
        if(err){
            console.log(err);
            
        }
    })

console.log(`Finished`);



    
