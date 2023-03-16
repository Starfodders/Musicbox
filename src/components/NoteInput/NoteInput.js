import React from 'react';
import {useState, useEffect} from "react";

const NoteInput = ({current, chord}) => {

    const [receivedNote, setReceivedNote] = useState(current)

    useEffect(() => {
        setReceivedNote(current);
    },[current])

    return (
        <form>
            <input value = {receivedNote}/>
            <button>Add Note</button>
        </form>
    );
};

export default NoteInput;

//on form submission, add the value and the chord together to form the note