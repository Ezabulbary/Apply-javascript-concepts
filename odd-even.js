// even Number 

function evenNumber(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

const number = 150;
const even = evenNumber(number);
console.log('Is number even', even);

const myNumber = 119;
const isMyNumberEven = evenNumber(myNumber);
console.log('Is my number even', isMyNumberEven);


// Odd number 

function oddNumber(numbers){
    if(numbers % 2 != 0){
        return true;
    }
    return false;
}


const numberIs = 13;
const isNumberOdd = oddNumber(numberIs);
console.log('Is number Odd', isNumberOdd);


const myNumberIs = 1400;
const isMyNumberOdd = oddNumber(myNumberIs);
console.log('Is my number Odd', isMyNumberOdd);