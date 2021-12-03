import React from "react";
export default function WorkingWithArray(){

// Defina working array
const string_array = ['a', 'b', 'c', 'd', 'e'];

// Push
string_array.push("f"); // O(1) because we simply push item at the back end of the array, so O is constant
console.log('pushed \'f\' to array', string_array);

// Pop
string_array.pop(); // O(1) because we simply pop item from the back of the array, so O is constant
console.log('pop \'f\' from array', string_array);

// Insert
// unshift
string_array.unshift("x"); // O(n) because we shift the array and change the positions of the element which requires itteration
console.log('unshift \'x\' to begining of the array', string_array);

// Insert
// unshift
string_array.splice(2, 0, 'alien'); // O(n) because we shift the array and change the positions of the element which requires itteration
console.log('splice \'alien\' we shifted array and add element in middle of the array', string_array);


return (
    <div>
        <h1>
            Never ever give up!
            Dust off and move worward!
        </h1>
    </div>
)
}