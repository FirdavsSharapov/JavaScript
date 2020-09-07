import React from 'react';
import '../style/style.css';

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

function App() {
    const days_checkboxes =
        days.map(day => (
            <div className=".checkboxes">
                <input id={day} type="checkbox">
                </input>
                <p>{day}</p>
            </div>
        ));
    return (
        <div className="body">
            {days_checkboxes}
        </div>
    );
};

export default App;