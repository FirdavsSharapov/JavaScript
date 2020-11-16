import React from 'react';
import Header from './Navbar';
import MyInfo from './MyInfo';


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <MyInfo />
            </div>
        )
    }
}

export default App;