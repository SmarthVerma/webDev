// async function getData(){
//     // simutalting data coming from sever
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(464)
//         },3000)
//     })
// }

async function getData(){
    
//    let x= await fetch("https://jsonplaceholder.typicode.com/todos/1")
let x= await fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
    let data = await x.json()
    console.log(data);
    
}

    // settle means to resolve or reject 
    // resolve means peomise has settled successfully
    // reject means promise has settled unsucessfully

async function main(){
    console.log('Loading modules');

    console.log('Doing somehting');
    
    console.log('Load data');
    
    let data= await getData()

    console.log(data);

    console.log('process data');
    
    console.log('task 2');
    
}

main()