// Create function that reverse the string
// Example "Hi my name is Fred" -> "derF si eman ym iH"
// 
import React from "react";
export default function ReverseString() {
    function RS(str) {
        let newStr = '';
        for (let i = 0; i < str.lenght; i++) {
            newStr += str[i - 1];
            console.log( 'test', newStr);
        };
        return newStr;
    }
    console.log(RS('Hi my name is Fred'));

        return (
            <div>
                <h1>
                </h1>
            </div>
        )
    }