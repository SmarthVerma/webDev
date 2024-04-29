console.log(`hello m hecker`);
console.log(`hello m tecker`);

setTimeout(()=>{
    console.log(`i will run after sometime hehe1`);
},0);
setTimeout(()=>{
    console.log(`i will run after sometime hehe2`);
},0);
setTimeout(()=>{
    console.log(`i will run after sometime hehe3`);
},0);

console.log(`i always come last`);


const fn=()=> {
  console.log("I m still here");
}


const callback=(name, function1) => {
  console.log(`your name is: `, name)
  function1();
}


const loadScript= (src, funta) => {
  let sc=document.createElement("script"); 
  sc.src=src;   
  sc.onload= funta("harry",fn)
  document.head.append(sc)
}

loadScript(`https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js`, callback);

