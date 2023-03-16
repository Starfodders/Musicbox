import "./NoteInput.scss"
import {useState, useEffect} from "react";

const NoteInput = ({current, chord}) => {

    const [receivedNote, setReceivedNote] = useState(current)

    useEffect(() => {
        setReceivedNote(current);
    },[current])

    return (
        <form className = "note-form">
            <input className = "note-form__input" value = {`${receivedNote} ${chord}`}/>
            <butto className = "note-form__button">Add Note</butto>
        </form>
    );
};

export default NoteInput;

//on form submission, add the value and the chord together to form the note