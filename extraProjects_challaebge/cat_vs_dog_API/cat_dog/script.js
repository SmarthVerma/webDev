
console.log(`Welcome to my world BABY!!!`);

async function getMe_aCuteDogURL() {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let json = await response.json();
    return json.message;
}

async function logginURL() {
    let url = await getMe_aCuteDogURL();
    // console.log(url);
    let dog = document.querySelector(".dog")
    // console.log(dog);
    dog.innerHTML = `<img src="${url}" alt="" width="220" height="220"/>`

}
async function getMe_aCuteCatURL() {
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    let json = await response.json();
    console.log(json); // important to understand                                 
    0.



    return json[0].url;
}

async function logginURL_cat() {
    let url = await getMe_aCuteCatURL();
    console.log(url);
    let cat = document.querySelector(".cat")
    console.log(cat);
    cat.innerHTML = `<img src="${url}" alt="" width="220" height="220"/>`

}

let dog = document.querySelector(".dog").firstElementChild;
//   console.log(dog);

logginURL();
logginURL_cat();

console.log(`mode j aare ha`);