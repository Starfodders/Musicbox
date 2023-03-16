import "./NoteInput.scss"
import {useState, useEffect} from "react";

const NoteInput = ({current, chord, getNote}) => {

    const [receivedNote, setReceivedNote] = useState(current)

    function handleSubmit(e) {
        e.preventDefault();
        const note = `${receivedNote} ${chord}`
        getNote(note)
    }

    useEffect(() => {
        setReceivedNote(current);
    },[current])

    return (
        <form className = "note-form" onSubmit = {(e) => {handleSubmit(e)}}>
            <input className = "note-form__input" value = {`${receivedNote} ${chord}`}/>
            <button className = "note-form__button">Add Note</button>
        </form>
    );
};

export default NoteInput;

//on form submission, add the value and the chord together to form the note