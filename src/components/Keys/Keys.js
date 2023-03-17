import "./Keys.scss"
import { useRef, useEffect } from "react";

const Keys = ({changeNote}) => {
    //assign useRef to each key
    const keyRefs = {
        A: useRef(),
        B: useRef(),
        C: useRef(),
        D: useRef(),
        E: useRef(),
        F: useRef(),
        G: useRef(),
    }

    //receives state handler from parent, sets the value to what is pressed
    function handleChange(e) {
        changeNote(e.target.value)
    }

    //if keypress occurs and it matches a CURRENT useRef (false if doesn't exist), will fire click()
    useEffect(() => {
        function handleKeyDown(e) {
            const key = e.key.toUpperCase();
            if (keyRefs[key] && keyRefs[key].current) {
                keyRefs[key].current.click();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [keyRefs])

    return (
        <div className = "keys" >
            <button className = "keys__element" onClick = {(e) => handleChange(e)} value = 'A' ref = {keyRefs.A}>A</button>
            <button className = "keys__element" onClick = {(e) => handleChange(e)} value = 'B' ref = {keyRefs.B}>B</button>
            <button className = "keys__element" onClick = {(e) => handleChange(e)} value = 'C' ref = {keyRefs.C}>C</button>
            <button className = "keys__element" onClick = {(e) => handleChange(e)} value = 'D' ref = {keyRefs.D}>D</button>
            <button className = "keys__element" onClick = {(e) => handleChange(e)} value = 'E' ref = {keyRefs.E}>E</button>
            <button className = "keys__element" onClick = {(e) => handleChange(e)} value = 'F' ref = {keyRefs.F}>F</button>
            <button className = "keys__element" onClick = {(e) => handleChange(e)} value = 'G' ref = {keyRefs.G}>G</button>
        </div>
    );
};

export default Keys;