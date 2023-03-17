import "./Chords.scss"
import { useRef, useEffect } from "react";

const Chords = ({ current, changeChord }) => {
  const chordRef = {
    Maj: useRef(),
    Min: useRef(),
    Maj7: useRef(),
    Min7: useRef(),
    V7: useRef()
  }

  function handleChange(e) {
    changeChord(e.target.value)
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case '1':
          changeChord('Major');
          break;
        case '2':
          changeChord('Minor');
          break;
        case '3':
          changeChord('Major7');
          break;
        case '4':
          changeChord('Minor7');
          break;
        case '5':
          changeChord('Five7');
          break;
        default:
          break;
      }
    };
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [changeChord]);

  return (
    <div className="chords">
      <button className={current === 'Major' ? 'chords__button--active' : 'chords__button'} ref={chordRef.Maj} onClick={(e) => handleChange(e)} value='Major'>MAJOR</button>
      <button className={current === 'Minor' ? 'chords__button--active' : 'chords__button'} ref={chordRef.Min} onClick={(e) => handleChange(e)} value='Minor'>MINOR</button>
      <button className={current === 'Major7' ? 'chords__button--active' : 'chords__button'} ref={chordRef.Maj7} onClick={(e) => handleChange(e)} value='Major7'>MAJ7</button>
      <button className={current === 'Minor7' ? 'chords__button--active' : 'chords__button'} ref={chordRef.Min7} onClick={(e) => handleChange(e)} value='Minor7'>MIN7</button>
      <button className={current === 'Five7' ? 'chords__button--active' : 'chords__button'} ref={chordRef.V7} onClick={(e) => handleChange(e)} value='Five7'>V7</button>
    </div>
  );
};

export default Chords;
