import fs from "fs/promises"
// can do awit thoud async fn
const read =await fs.readFile("max.txt")

fs.appendFile("smarth.txt","wowo this getting goooz")

console.log(read.toString());

