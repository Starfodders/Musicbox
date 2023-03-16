import React from 'react';
import {useState, useEffect} from "react";

const NoteInput = ({current}) => {
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

//is not currently additive, a new note will overrite the previous one