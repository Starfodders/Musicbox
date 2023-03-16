import "./Tracker.scss";

import {useState, useEffect} from "react";

const Tracker = ({note}) => {

    const [noteArray, setNoteArray] = useState([]);

    useEffect(() => {
        setNoteArray([...noteArray, note])
    }, [note])
    

    return (
        <div className = "tracker">
            <div className = "tracker__container">
                {noteArray.map((note) => (<p className = "tracker__note">{note}</p>))}
            </div>
        </div>
    );
};

export default Tracker;

//updates will be pushed into an array to be read