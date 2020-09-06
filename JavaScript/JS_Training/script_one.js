var date = new Date();
var a = 5;
var b = 20;

// If condition in JS

if ((a >= 5) && (a <= 7)) {
    document.write("test");
} else {
    document.write("test2");
}

// Switch statatment condition

switch (a) {
    case 5:
    case 6:
        document.write(a + "case");
        break;
    default:
        document.write("default");
}

// ternary operator
// (condition) ? ifTrue : ifFalse

var canIVote = (a >= 18) ? true : false;

document.write(canIVote);

// Looping 
// while loop
var i = 1;
while (i <= 10) {
    document.write(i + "<br />");
    i++;
}

// do while loop
do {
    var guess = prompt("Guess the number from 1 - 15");
} while (guess != 15)
alert("You guessed 15!");

// for looping

for (j = 0; j <= 20; j++) {
    if ((j % 2) === 0) {
        continue;
    }

    if (j === 15) {
        break;
    }

    document.write(j + "<br />");
}


// function 
dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function InArray(arrayToCheck, value){
    for (i = 0; i < arrayToCheck.length; i++) {
        if (arrayToCheck[i] === value) {
            return true;
        }
    }
    return false;
};

document.write("In Array: ", InArray(dummyArray, 6), "<br/>");

// recursive functions
function factorial(num){
    if(num <=1){
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}


