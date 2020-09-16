import React from 'react';

// hhtps://scrimba.com/p/p4Mrt9/cQnMDHD

class StateGlobal extends React.Component {
    constractor() {
        super();
        this.state = {
            answer: 'Yes',
        };
    };
    render(){
        return(
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                
            </div>
        )
    }
}

    export default StateGlobal;