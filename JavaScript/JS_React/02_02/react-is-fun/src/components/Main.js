import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import MyInfo from './MyInfo';

function Main() {
    return (
        <div>
            <Header />
            <Content />
            <h1>This content from the Main</h1>
            <MyInfo />
            <Footer />
        </div>
    );
};


// same as above function calls arrow functions
const Main = () => (
    <div>
        <Header />
        <Content />
        <h1>This content from the Main</h1>
        <MyInfo />
        <Footer />
    </div>
);

export default Main;