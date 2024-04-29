console.log("Write a program to calculate factorial of a number using reduce and using loops");


let a=prompt("Enter your number: ");
a=parseInt(a);

let ans=1;

    for(let i=a; i>0; i--){
        ans*=i;
    }
alert("Your factorial asnweer: "+ans);
