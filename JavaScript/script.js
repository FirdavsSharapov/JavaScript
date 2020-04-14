var date = new Date();
var a = 5;
var b = 10;
var theNumberMatch;

document.body.innerHTML = "<h1>Today is: " + date + "</h1>";

if(a === b){
    documnt.body.innerHTML = theNumberMatch = true;
} else {
    document.body.innerHTML = theNumberMatch = false;
    
}

//Ternary operator - same as above
a == b ? console.log("Match"): console.log("Not match");

console.log("The numbers match: " + theNumberMatch);

//Arrays
var pens;
pens = ["red","orange","blue","green"];
