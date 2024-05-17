
console.log(`Welcome to my world BABY!!!`);
const dog = document.querySelector(".dog")
const cat = document.querySelector(".cat")
let dog_count= 0;
let cat_count= 0;
const dog_counter=document.querySelector(".dog-count")
const cat_counter=document.querySelector(".cat-count")



async function getMe_aCuteDogURL() {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let json = await response.json();
    return json.message;
}
async function getMe_aCuteCatURL() {
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    let json = await response.json();
    // console.log(json); // important to understand                                 

    return json[0].url;
}

const cat_update= async ()=>{
        let cat_url= await getMe_aCuteCatURL()
        cat.innerHTML = `<img src="${cat_url}" alt="" width="220" height="220" draggable="false"/>`
    


}
const dog_update= async ()=>{
    let doggy_url= await getMe_aCuteDogURL()
    dog.innerHTML = `<img src="${doggy_url}" alt="" width="220" height="220" draggable="false"/>` 

}


const update= async ()=>{ 
    let [doggy_url, cat_url]=await Promise.all([getMe_aCuteDogURL(), getMe_aCuteCatURL()])
    console.log(doggy_url, cat_url);
    // for cat
    cat.innerHTML = `<img src="${cat_url}" alt="" width="220" height="220" draggable="false"/>`
    // for dog 
    dog.innerHTML = `<img src="${doggy_url}" alt="" width="220" height="220" draggable="false"/>`    
}

update()



dog.addEventListener("click",()=>{
    dog_count++;
    dog_counter.innerHTML =`Dogs: ${dog_count}`
    console.log(cat_counter.innerHTML);
    cat_update()
    
})
cat.addEventListener("click",()=>{
    cat_count++;
    cat_counter.innerHTML = `Cats: ${cat_count}`
    dog_update()

})