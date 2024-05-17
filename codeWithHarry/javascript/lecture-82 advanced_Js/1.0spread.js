function sum(a,b,c,d){
    return a+b+c+d;
}


let arr=[4,7,9,16]
console.log(sum(arr[0],arr[1],arr[2],arr[3]));
        //spread operator
console.log(sum(...arr));


    // Speacial case

    const obj={...arr};

    console.log(obj);
