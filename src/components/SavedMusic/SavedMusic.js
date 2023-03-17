import "./SavedMusic.scss";
import axios from "axios";

import { useEffect, useState } from "react";

const SavedMusic = () => {
  const [songArray, setSongArray] = useState([]);

  useEffect(() => {
    const getSaved = async () => {
      try {
        const response = await axios.get("http://localhost:8080/saved");
        setSongArray(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSaved();
  }, []);

  return (
    <div className="saved">
      <div className="saved__container">
        {songArray.map((song) => {
          return (
            <div className="saved__block">
              <div className="saved__block--left">
                <p className = "saved__block--text"><span className = "saved-labels">Name:</span> {song.songName}</p>
                <p className = "saved__block--text"><span className = "saved-labels">Artist:</span> {song.yourName}</p>
                <p className = "saved__block--text"><span className = "saved-labels">Created at:</span> {song.timestamp}</p>
              </div>
              <div className="saved__block--center">
                {song.songFile.map((note) => <p className = "note-element">{note}</p>)}
              </div>
              <div className="saved__block--right">
                <button className = "saved__block--button">Play</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavedMusic;
