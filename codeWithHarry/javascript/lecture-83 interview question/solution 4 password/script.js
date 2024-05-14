let a = prompt("Enter your password");

function checker(a) {
    if (a.length < 8) {
        console.log(`too shoty`);
        
        return false;
    }
    if (!/[a-z]/.test(a)) {
        console.log("no smally letter");
        return false;
    }
    if (!/[A-Z]/.test(a)) {
        console.log("no capital letter");
        return false;
    }
    if (!/\d/.test(a)) {
        console.log("no numy letter");
        return false;
    }
    return true;
}

alert(checker(a));