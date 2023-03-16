import React from "react";
import Keys from "../Keys/Keys";
import NoteInput from "../NoteInput/NoteInput";
import Chords from "../Chords/Chords";
import { useState } from "react";

import "./HomePage.scss";

const HomePage = () => {
  const [currentNote, setCurrentNote] = useState();
  const [currentChord, setCurrentChord] = useState("Major");

  function handleNoteChange(note) {
    setCurrentNote(note);
  }

  function handleChord(chord) {
    setCurrentChord(chord);
    console.log(currentChord);
  }

  return (
    <div className="home">
        <div className = "home__finished">
            Hello
        </div>
      <div className="home__player">
        {<Chords current={currentChord} changeChord={handleChord} />}
        <div className="home__player__right">
          {<NoteInput current={currentNote} chord={currentChord} />}
          {<Keys changeNote={handleNoteChange} />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
