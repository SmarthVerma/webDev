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


/// object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

// Extracting properties from the object
const { firstName, age } = person;

console.log(firstName); // Output: John
// console.log(lastName); // Output: Doe
console.log(age); // Output: 30

//nested

const student = {
    naam: 'Alice',
    saal: 20,
    scores: {
        math: 90,
        science: 80
    }
};

const {naam, saal, scores: { math, science } } = student;

console.log(math); // Output: 90
console.log(science); // Output: 80