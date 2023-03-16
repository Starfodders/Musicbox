import React from 'react';

const Chords = ({changeChord}) => {

    function handleChange(e) {
        changeChord(e.target.value)
    }

    return (
        <div>
            <button onClick = {(e) => handleChange(e)} value = 'Major'>MAJOR</button>
            <button onClick = {(e) => handleChange(e)} value = 'Minor'>MINOR</button>
            <button onClick = {(e) => handleChange(e)} value = 'Major7'>MAJ7</button>
            <button onClick = {(e) => handleChange(e)} value = 'Minor7'>MIN7</button>
            <button onClick = {(e) => handleChange(e)} value = 'Five7'>V7</button>
        </div>
    );
};

export default Chords;