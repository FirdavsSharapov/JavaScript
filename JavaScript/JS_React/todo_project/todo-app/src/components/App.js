import React from 'react';
import '../style/style.css';

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

function App() {
    const days_checkboxes =
        days.map(day => (
            <span className=".checkboxes">
                <input id={day} type="checkbox">
                </input>
                <p>{day}</p>
            </span>
        ));
    return (
        <div className="body">
            {days_checkboxes}
        </div>
    );
};


export default App;