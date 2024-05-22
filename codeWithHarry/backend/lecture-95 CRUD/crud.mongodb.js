use("video95")
        //CRUD
// https://www.mongodb.com/docs/manual/reference/operator/
db.createCollection("coins")
// console.log(`is modi back?`);


    //insertion as docs
/*
db.coins.insertOne({
    value:1,
    creation: "1991",
    photo: "gandhi",
    termninated: "2025"
})

db.coins.insertMany([
{
    value: 2,
    creation: "1991",
    photo: "nehru",
    termninated: "2025"
},
{
    value: 4,
    creation: "2000",
    photo: "bhagat_singh",
    termninated: "2025"
},
{
    value: 5,
    creation: "2003",
    photo: "bose",
    termninated: "2030"
},
{
    value: 10,
    creation: "2006",
    photo: "gandhi",
    termninated: "2045"
},
])

*/

    // Finding in docs
/*
    let a= db.coins.find({
        creation: "1991"
    })
    console.log(a);
    console.log("How many docs:"+ a.count() );
    // console.log("Array:", a.toArray() );
    
    
    let b= db.coins.findOne({
        creation: "1991"
    })
    console.log(b);
*/
    
    //Update
/*
db.coins.updateOne({value:4}, {$set:{value:0.5}})

db.coins.updateMany({photo: "gandhi"}, { $set: { photo: "not_gandhi"} })
*/

    //Deletion
/*
db.coins.insertOne({
    value: 50,
    "photo": "smarthy",
    "creation": "2003",
    "termination": "2070"
})

*/

db.coins.deleteOne({
    termination: "2070"
})
