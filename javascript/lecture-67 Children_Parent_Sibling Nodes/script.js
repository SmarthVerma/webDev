alert(document.documentElement.parentNode);

console.log("HEllo world");

document.body.childNodes
document.body.childNodes[1].childNodes

let cons = document.body.childNodes[1];

cons.firstElementChild.style.color = "green";
cons.firstElementChild.style.backgroundColor="Yellow" 


let cos2 =cons.children[2].parentElement;

let cos3 =cons.children[2];
let cos4 =cons.children[2].nextElementSibling;
let cos5 =cons.children[2].previousElementSibling;


    // EXTRA
//  elem.childNodes[0]=== elem.firstChild
//  elem.childNodes[elem.childNodes.length-1]=== elem.lastChild