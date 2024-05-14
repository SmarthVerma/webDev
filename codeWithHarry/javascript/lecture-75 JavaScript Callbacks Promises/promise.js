console.log("This is promise");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("tera luck bhot chutiya ha");
  } else {
    setTimeout(() => {
      console.log("i am done");
      resolve("Acchi kismat ha ri teri(resolve)");
    }, 3000);
  }
});
let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("tera luck bhot chutiya ha2");
  } else {
    setTimeout(() => {
      console.log("i am done2");
      resolve("Acchi kismat ha ri teri2(resolve)");
    }, 2500);
  }
});
let prom3 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("tera luck bhot chutiya ha3");
  } else {
    setTimeout(() => {
      console.log("i am done3");
      resolve("Acchi kismat ha ri teri3(resolve)");
    }, 2100);
  }
});
let prom4 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("tera luck bhot chutiya ha4");
  } else {
    setTimeout(() => {
      console.log("i am done4");
      resolve("Acchi kismat ha ri teri4(resolve)");
    }, 2000);
  }
});
let prom5 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("tera luck bhot chutiya ha5");
  } else {
    setTimeout(() => {
      console.log("i am done5");
      resolve("Acchi kismat ha ri teri5(resolve)");
    }, 1500);
  }
});

// prom1
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// can run independently
// prom1.then((a) => {
//     console.log(a+2)
// }).catch((err) =>{
//     console.log(err);
// }
// )
    // chaininig
// prom1
//   .then((a) => {
//     console.log(`madarchd1`, a);
//     return a + 1;
//   })            
//   .then((a) =>{
//     console.log(`madarchd2`, a);
//     return a + 1;
//   }).then((a)=>{
//     console.log(`madarchd3`, a);
//     return a + 1;
//   });

let p1= Promise.all([prom1, prom2, prom3, prom4, prom5])

p1.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err);
})

let p2= Promise.allSettled([prom1, prom2, prom3, prom4, prom5])

p2.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err);
})

let p3= Promise.race([prom1, prom2, prom3, prom4, prom5])

p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err);
})

let p4= Promise.any([prom1, prom2, prom3, prom4, prom5])

p4.then((a)=>{
    console.log(a)
}).catch(err=>{+
    console.log(err);
})

let p5= Promise.resolve([prom1, prom2, prom3, prom4, prom5])
let p6= Promise.reject([prom1, prom2, prom3, prom4, prom5])





