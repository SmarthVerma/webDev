let name= "SmarthVerma";

console.log(name+5);
console.log(name,5);

// 2nd question\

console.log(typeof name);

// 3rd quest

const obj={
    name: "SAmmy",
    age: 45,
    phone: 8789789465
}
console.log(obj);

obj.phone=7018836872;

console.log(obj);

// 4th question

obj.address= "Village chattera post office kanda, Dhrampur distt solan"

console.log(obj);


                // 5th question

// Define a dictionary object to store word-meaning pairs
let dictionary = {};

// Function to add word and meaning to the dictionary
function addWord(word, meaning) {
    dictionary[word] = meaning;
}

// Add words and their meanings
addWord("apple", "a round fruit with red or green skin and a whitish inside");
addWord("book", "a written or printed work consisting of pages glued or sewn together along one side and bound in covers");
addWord("cat", "a small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws");
addWord("tree", "a woody perennial plant, typically having a single stem or trunk growing to a considerable height");
addWord("sun", "the star around which the earth orbits, providing light and heat to the earth");

// Print the dictionary
console.log("Word-Meaning Dictionary:");
for (let word in dictionary) {
    console.log(`${word}: ${dictionary[word]}`);
}

