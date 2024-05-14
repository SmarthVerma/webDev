let scroller= document.querySelector(".scroller")
let items =scroller.getElementsByTagName("li")

console.log("hello")
Array.from(items).forEach((item)=>{

    const dupilicate=item.cloneNode(true);
    scroller.appendChild(dupilicate);
})
    