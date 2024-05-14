
const random= (arr)=>{
    let size=arr.length;
    let random_index = Math.floor(Math.random() * size)
    console.log(arr[random_index]);
}
let names=["smarth", "shivansh", "monga", "anuj", "aviral", "sidhhant"]
random(names)
