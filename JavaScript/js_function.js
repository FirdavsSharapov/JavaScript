// Named function
function findBiggerFraction(a,b) {
    var result;
    console.log("This is 'Named Function' And looking for bigger fraction");
    a>b ?  result = ["firstFraction: ", a] : ["secondFraction :", b];
    return result;
}
var firstfraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggerFraction(firstfraction, secondFraction);

console.log(fractionResult); 


/*
Annonimous function
*/
var c = 5/7;
var d = 18/25;
var theBiggest = function(){
    console.log("This is 'Annonimous Function' And looking for bigger fraction");
    var result;
    a>b? result = ["c", c] : result = ["d", d];
    console.log(result);
}
theBiggest();

/*
Const and let
*/

const MYCONSTANT = 5;
console.log(MYCONSTANT);

function logScope (){
    let localVar = 2;
    if (localVar) { 
        let localVar = "I'm different!";
        console.log("nested localVar: ", localVar);
    }
    console.log("logScope localVar: ", localVar);
}

logScope();

