import React from "react";
import Keys from "../Keys/Keys"
import NoteInput from "../NoteInput/NoteInput";
import {useState} from "react";

import "./HomePage.scss";

const HomePage = () => {
 const [currentNote, setCurrentNote] = useState('')

 function handleNoteChange(note) {
    setCurrentNote(note)
 }

  return (
    <div className="home">
        <div className = "home__player">
            {<NoteInput current = {currentNote}/>}
            {<Keys change = {handleNoteChange}/>}
        </div>
    </div>
  );
};

export default HomePage;
