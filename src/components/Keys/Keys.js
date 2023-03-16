import React from 'react';

const Keys = ({changeNote}) => {

    //receives state handler from parent, sets the value to what is pressed
    function handleChange(e) {
        // console.log(e.target.value)
        changeNote(e.target.value)
    }
    return (
        <div className = "keys">
            <button onClick = {(e) => handleChange(e)} value = 'A'>A</button>
            <button onClick = {(e) => handleChange(e)} value = 'B'>B</button>
            <button onClick = {(e) => handleChange(e)} value = 'C'>C</button>
            <button onClick = {(e) => handleChange(e)} value = 'D'>D</button>
            <button onClick = {(e) => handleChange(e)} value = 'E'>E</button>
            <button onClick = {(e) => handleChange(e)} value = 'F'>F</button>
            <button onClick = {(e) => handleChange(e)} value = 'G'>G</button>
        </div>
    );
};

export default Keys;