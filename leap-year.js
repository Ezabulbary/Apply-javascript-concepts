function leapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
}

let myYear = 2100;
let isYearLeapYear = leapYear(myYear);
console.log('is year is leap year', isYearLeapYear);