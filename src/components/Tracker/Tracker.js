import "./Tracker.scss";
import axios from "axios"

import { useState, useEffect } from "react";

const Tracker = ({ note }) => {
  const [isEnter, setIsEnter] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [noteArray, setNoteArray] = useState([]);

  const [songName, setSongName] = useState("");
  const [yourName, setYourName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/saved', {
        songName,
        yourName
    })
    .then(() => {
        setIsSubmitted(true)
    })
    setSongName('')
    setYourName('')
    setTimeout(() => {
        setIsSubmitted(false)
    }, 2000)
  }

  useEffect(() => {
    //handles initial value which is undefined
    if (!note) {
      return;
    } else {
      setNoteArray([...noteArray, note]);
    }
  }, [note, isEnter]);

  //handles 'Enter' keydown to resolve when notes are the same as previous (won't cause {note} to change, won't activate first useEffect)
  useEffect(() => {
    function handleEnter(e) {
      if (e.key === "Enter") {
        setIsEnter(!isEnter);
      }
    }
    window.addEventListener("keydown", handleEnter);
    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, [isEnter]);


  return (
    <div className="tracker">
      <div className="tracker__container">
        {noteArray.map((note, index) => (
          <p className="tracker__note" key={index}>
            {note}
          </p>
        ))}
      </div>
      <div className="tracker__CTA">
        <button className="tracker__play">Play</button>
        <form className="tracker__form" onSubmit = {handleSubmit}>
          <label className="tracker__form--label" htmlFor="song-name">
            Song Name
          </label>
          <input className="tracker__form--input" name="song-name" onChange={(e) => setSongName(e.target.value)} value = {songName}></input>
          <label className="tracker__form--label" htmlFor="your-name">
            Your Name
          </label>
          <input className="tracker__form--input" name="your-name" onChange={(e) => setYourName(e.target.value)} value = {yourName}></input>
          <button className="tracker__save">Save Song</button>
        </form>
        {isSubmitted ? <div className = "tracker__success">
            <p>Song Saved Successfully!</p>
        </div> : '' }
      </div>
    </div>
  );
};

export default Tracker;

//updates will be pushed into an array to be read
