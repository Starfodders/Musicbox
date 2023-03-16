import "./Chords.scss"
// import {useState} from "react"

const Chords = ({current, changeChord}) => {

    // const [currentChord, setCurrentChord] = useState('Major')

    function handleChange(e) {
        changeChord(e.target.value)
    }

    return (
        <div className = "chords">
            <button className = {current === 'Major' ? 'chords__button--active' : 'chords__button'} onClick = {(e) => handleChange(e)} value = 'Major'>MAJOR</button>
            <button className = {current === 'Minor' ? 'chords__button--active' : 'chords__button'} onClick = {(e) => handleChange(e)} value = 'Minor'>MINOR</button>
            <button className = {current === 'Major7' ? 'chords__button--active' : 'chords__button'} onClick = {(e) => handleChange(e)} value = 'Major7'>MAJ7</button>
            <button className = {current === 'Minor7' ? 'chords__button--active' : 'chords__button'} onClick = {(e) => handleChange(e)} value = 'Minor7'>MIN7</button>
            <button className = {current === 'Five7' ? 'chords__button--active' : 'chords__button'} onClick = {(e) => handleChange(e)} value = 'Five7'>V7</button>
        </div>
    );
};

export default Chords;

//if current === value