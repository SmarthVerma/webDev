// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let a ="kjasugdiojasgdieDAJBJHIUVHHGE"

no_vowel(a);

function no_vowel(a=""){
    let count=0;

    for (const char of a) {
        if (
          char == "a" ||
          char == "e" ||
          char == "i" ||
          char == "o" ||
          char == "u" ||
          char == "A" ||
          char == "E" ||
          char == "I" ||
          char == "O" ||
          char == "U"
        ) {
          count++;
        }
    }   
    console.log(count)
}