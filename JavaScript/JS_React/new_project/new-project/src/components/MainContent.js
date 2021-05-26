import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function MainContent(){
    return (
        <div>
            <Navbar />
            <h1>Firdavs Sharapov</h1>
            <p>Noob programmer that want to learn React</p>
            <ul>
                <li>Hawaii</li>
                <li>Los Angeles</li>
                <li>Paris</li>
            </ul>
            <Footer />
        </div>
    )
}