// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students=[`smarth`,`shivansh`,`mogna`,`Sarthak`,`arpit`,`karn`,`doggyStyleIlike`,`anjali`,`subhashSubermanu`,`krishanPratap`,`dickhead`];

const Gryffindor=[];
const Hufflepuff = [];
const Ravenclaw = [];
const Slytherin = [];

    for(let i=0; i<students.length; i++){
        let name=students[i];
            if(name.length<6){
                Gryffindor.push(name);

            }
            else if(name.length<8){
                Hufflepuff.push(name);
            }
            else if(name.length<12){
                Ravenclaw.push(name);
            }
            else{
                Slytherin.push(name);
            }
    }

    console.log("Gryffindor",Gryffindor)
    console.log("Hufflepuff",Hufflepuff);
    console.log("Ravenclaw",Ravenclaw);
    console.log("Slytherin",Slytherin);


        // sir methood

        let houses= [];

        for (const name of students) {
            if (name.length < 6) {
              houses.push("Gryffindor");
            } else if (name.length < 8) {
              houses.push("Hufflepuff");
            } else if (name.length < 12) {
              houses.push("Ravenclaw");
            } else {
              houses.push("Slytherin");
            }
        }

        console.log(houses);