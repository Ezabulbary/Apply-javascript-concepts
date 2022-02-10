// inche to feet

function myInches(inche){
    var feet = inche / 12;
    return feet;
}

var dadiInche = 120;
var feet = myInches(dadiInche);
console.log('dadi inches to feet', feet);


var dadaInche = 158;
var feet = myInches(dadaInche);
console.log('dadainche to feet', feet);


// km to mile

function mileToKilomiter(mile){
    var km = mile * 1.60934;
    return km;
}

var myKm = mileToKilomiter(48);
console.log('This is my KM: ', myKm);
