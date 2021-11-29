import React from "react";
export default function BigO() {
    const nemo = ['Nemo', "Aza", "Mona", "Nemo2", "Mat"];
    const large_arr = new Array(100).fill('Nemo');
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
    return (
        <div></div>
    )
}