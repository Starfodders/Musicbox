import "./Tracker.scss";

import { useState, useEffect } from "react";

const Tracker = ({ note }) => {
  const [isEnter, setIsEnter] = useState(false);
  const [noteArray, setNoteArray] = useState([]);

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
        <form className = "tracker__form">
            <label className = "tracker__form--label">Song Name</label>
            <input className = "tracker__form--input"></input>
            <label className = "tracker__form--label">Your Name</label>
            <input className = "tracker__form--input"></input>
          <button className="tracker__save">Save Song</button>
        </form>
      </div>
    </div>
  );
};

export default Tracker;

//updates will be pushed into an array to be read
