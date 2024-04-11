// array is object

let name=["Snmarth", "verma", "sexy",5,6]

console.log(name);
console.log(name.length)
console.log(name[2])
name[2]=5665
console.log(name[2])


//methods

console.log(name.toString())

console.log(name.join("."))

console.log(name.pop())

console.log(name.push("sam"))
console.log(name.push("tam"))

console.log(name);

console.log(name.shift())
console.log(name);

console.log(name.unshift("jaccob"))
console.log(name);

delete name[3]
console.log(name);

let c=[4,6,2,3]
let e=["A","B","D"]

console.log(name.concat(e,c))

name.sort()

console.log(name);

name.splice()

