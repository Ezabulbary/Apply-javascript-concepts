// how to call factorial in function

// for loop 
function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}

let myFactorial = 7;
let factorialNumber = getFactorial(myFactorial);
console.log('My First Factorial NUmber is: ', factorialNumber);  

// while loop 

function getFactorial(number){
    let factorial = 1;
    let i = 1;
    while (i < number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

let myNumber = 9;
let myFactorialNumber = getFactorial(myNumber);

console.log('My Seconde Factorial NUmber is: ', myFactorialNumber);