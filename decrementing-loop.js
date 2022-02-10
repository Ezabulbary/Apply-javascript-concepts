// decrementing - loop.js

// while loop 
function getFactorial(number){
    let factorial = 1;
    let i = number;
    while(i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

let myNumber = 6;
let myFactorial = getFactorial(myNumber);

console.log('My decrementing While Loop number', myFactorial);

// for loop 

function getForFactorial(number){
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

let myForNumber = 7;
let myForFactorial = getForFactorial(myFactorial);

console.log('My Dicrementing FOr Loop Number', myForFactorial);
