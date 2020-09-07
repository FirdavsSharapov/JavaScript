import React from 'react';

function ReComponent(props) {
    return (
        <div>
            <img src={props.img} />
            <h3>Name: {props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    );

};

export default ReComponent;