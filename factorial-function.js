// how to call factorial in function

function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}

let myFactorial = 7;
let factorialNumber = getFactorial(myFactorial);
console.log('My Factorial NUmber is: ', factorialNumber);  