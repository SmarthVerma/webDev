/* let x,y=[4,6];

 console.log(x,y);
 
 */

let [x,y]=[4,6];

console.log(x,y);

let[b,v, ...sammi]=[4,7,9,4,6]

console.log(b,v,sammi);


// I CAN DESTRUCT OBJECT TOO


let obj={
    name: "Dog",
    pos: "DoggyStyle",
    fav: "bitches"
}



let {name,fav}=obj;   // same variable-> jo object m hoga

console.log(name,fav);