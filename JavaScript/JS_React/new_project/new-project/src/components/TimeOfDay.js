import React from 'react'

export default function TimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const hStyle = {
        color: "#FF8C00",
        fontSize: "24px",
    }

    if (hours < 12) {
        timeOfDay = 'morning';
        hStyle.color = "blue"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon';
        hStyle.color = "orange"
    } else {
        timeOfDay = 'night';
        hStyle.color = "red"
    }

    return (
        <h1 style={hStyle}>Good  {timeOfDay}</h1>
    )
}