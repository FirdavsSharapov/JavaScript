import React from 'react';
import ContactCards from './ContactCards';

export default function App() {
    return (
        <div className='contacts'>
            <ContactCards contact={{
                name: "Firuz Sharapov",
                imgUrl: "http://placekitten.com/300/200",
                phone: "347-5694314",
                email: "f.sharapov@mail.ru"
            }}
            />
            <ContactCards contact={{
                name: "Farukh Sharapov",
                imgUrl: "http://placekitten.com/400/200",
                phone: "347-5694312",
                email: "f.sharapov@mail.com"
            }}
            />
        </div>
    )
}