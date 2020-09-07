import React from 'react';
import '../style/style.css';

function TimePredictor() {
    const hours = new Date().getHours;
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = 'Morning';
    }
    else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Afternoon';
    }
    else {
        timeOfDay = 'Night';
    }

    return (
        <div className="timepredictor">
        <h1>Good {timeOfDay} </h1>
        </div>
    );
};

export default TimePredictor;