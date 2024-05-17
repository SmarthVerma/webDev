

async function print(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(45);
      }, 600);
    });
}
  // call krne ki zarurat ni, apne aap hi chlega
    (async function main(){
        let a= await print();
        console.log(a)
        let b= await print();
        console.log(b)
    })()
    

