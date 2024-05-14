    // traditional
 let fruits= [`banana`, `apple`, `grapes`, `mango`, `pineappple`];

    // for(let i=0; i<fruits.length; i++){
    //     console.log(fruits[i]);
        
    // }

    // for-of



    for(const any of fruits){
        console.log(any);
    }

  let num = [1, 67, 7, 78, 79, 3, 16, 498];
    let num2=[]

    for (const any of num) {
      num2.push(any)
    }

    console.log(num);
    console.log(num2);
    
for (const key of num2) {
    console.log(key);
    
}