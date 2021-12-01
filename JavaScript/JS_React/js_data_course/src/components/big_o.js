import React from "react";
export default function BigO() {
    const nemo = ['Nemo', "Aza", "Mona", "Nemo2", "Mat"];
    const large_arr = new Array(100).fill('Nemo');

    // Log all pair in a array
    const boxes = [1, 2, 3, 4, 5];
    for (let i = 0; i < boxes.length; i++) {
        for (let j = 0; j < boxes.length; j++) {
            console.log('pairs: ', boxes[i], boxes[j])
        }
    }

    // three ways of the loop
    // first
    function findNemo(array) {
        let t0 = performance.now();
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 'Nemo') {
                console.log('Found Nemo!');
            }
            else {
                console.log('Nemo wasn\'t found');
            }
        }
        let t1 = performance.now();
        console.log('performance time: ', t1 - t0, ' ms');
    }
    findNemo(large_arr)

    //second ES6 version
    const findNemo2 = nemo => {
        nemo.forEach(element => {
            if (element === 'Nemo') {
                console.log('Found Nemo');
            }
        });
    }
    findNemo2(nemo);

    //third
    const findNemo3 = nemo => {
        for(let element of nemo){
            if (element === 'Nemo') {
                console.log('Found Nemo');
            }
        }
    }
    findNemo3(nemo);


    return (
        <div></div>
    )
}