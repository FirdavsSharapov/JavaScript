import React from 'react';

class ClassBasedComponents extends React.Component {
    // if you want to declare your method beyond of render method
    // then you can declare it in here

    yourMethodHere(){
        const date1 = new Date();
        return date1;
    }

    render() {
        // you can call it in here 
        this.yourMethodHere();
        console.log(this.yourMethodHere());
        // and your method return anything then:
        const myMethod = this.yourMethodHere();
        return (
            <div>
                <h1>{myMethod}</h1>
            </div>
        );
    };
};

 export default ClassBasedComponents;