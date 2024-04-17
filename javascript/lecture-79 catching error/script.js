let a = prompt("Enter first number");
let b = prompt("Enter second number");

    if(isNaN(a) || isNaN(b)){
        throw SyntaxError("Number daal bsdk")
    }
let sum = parseInt(a)+ parseInt(b);

alert(`Your answer is ${sum}`);
console.log(`Your answer is ${sum}`);

try {
    console.log(`Your answer is`, sum*x);
    } catch (error) {
        console.log('Error aarela ha bhidu');
        
    }

/*  if an exception happens in scheduled code, like in setTimeoOut, then try... catch wont catch it
    try {
        
    } catch (error) {
        
    }

    */

/*

    try {
        hey
    } catch (error) {
        alert(error.name)
        alert(error.message)
        alert(error.stack)
    }

*/

        // finally try catch

        function main(){

            try {
                let x=1;
            console.log(`Your answer is`, sum * x);
            return true
            } catch (error) {
                console.log('something went wrong');
                return false
            }
            finally{
                console.log('They ran successfully now clossing db files');
            }
        }

    let c= main();


