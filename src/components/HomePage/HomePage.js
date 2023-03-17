import React from "react";
import Keys from "../Keys/Keys";
import NoteInput from "../NoteInput/NoteInput";
import Chords from "../Chords/Chords";
import Tracker from "../Tracker/Tracker";
import { useState, useEffect } from "react";

import "./HomePage.scss";
import cat from "../../assets/images/catVibe.gif"

const HomePage = () => {
  const [currentNote, setCurrentNote] = useState('A');
  const [currentChord, setCurrentChord] = useState("Major");
  const [fullNote, setFullNote] = useState()

  function handleNoteChange(note) {
    setCurrentNote(note);
  }

  function handleChord(chord) {
    setCurrentChord(chord);
  }

  //handles the Note + Chord
  function getFullNote(note) {
    setFullNote(note)
  }

  return (
    <div className="home">
        <div className = "home__tracker">
            {<Tracker note = {fullNote} />}
        </div>
      <div className="home__player">
        {<Chords current={currentChord} changeChord={handleChord} />}
        <div className="home__player__right">
          {<NoteInput current={currentNote} chord={currentChord} getNote = {getFullNote}/>}
          {<Keys changeNote={handleNoteChange} />}
        </div>
      </div>
      <h1 className = "cat-speech">Oh shit what a banger</h1>
      <img src = {cat} className = "cat-vibe" alt = "cat-vibing"/>
    </div>
  );
};

export default HomePage;
