import React from 'react';
import '../style/style.css';

function TimePredictor() {
    const hours = new Date().getHours;
    const styles = {
        fontSize: 30,
        backgroundColor: "#87ceeb",
        textAlign: "center",
    }
    let timeOfDay;
    
    if (hours < 12) {
        timeOfDay = 'Morning';
        styles.color = "green";
    }
    else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Afternoon';
        styles.color = "orange";
    }
    else {
        timeOfDay = 'Night';
        styles.color = "Red";
    }

    return (
        
        <h1 style={styles}>Good {timeOfDay} </h1>

    );
};

export default TimePredictor;