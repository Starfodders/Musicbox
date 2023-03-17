import React, { useEffect, useState } from "react";
import * as Tone from "tone";
import Button from "../Button/Button";

const SequencerExample = () => {

    //sequencer run state
    const [isRunning, setIsRunning] = useState(false);

    //activeChordArray
    const [activeChords, setActiveChords] = useState([]);
    const [chordToAdd, setChordToAdd] = useState([]);

    const addChordClickHandler = (note) => {
        setChordToAdd(note)
        console.log(chordToAdd)
    }

    //chord variables
    const notes = {
      0: 'C',
      1: 'Db',
      2: 'D',
      3: 'Eb',
      4: 'E',
      5: 'F',
      6: 'Gb',
      7: 'G',
      8: 'Ab',
      9: 'A',
      10: 'Bb',
      11: 'B'
    }

    const chordQuality = {
        0: 'M',
        1: 'm',
        2: 'M7',
        3: 'm7',
        4: 'v7'
    }

    const generateChords = () => {

        const chordObj = {}
        
        for (let note in notes) {
          note = Number(note)
          chordObj[note + Object.keys(chordQuality)[0]] = [notes[note]+'3', notes[(note + 7) % 12]+'4', notes[(note + 4) % 12]+'5', notes[note]+'5']
          chordObj[note + Object.keys(chordQuality)[1]] = [notes[note]+'3', notes[(note + 7) % 12]+'4', notes[(note + 3) % 12]+'5', notes[note]+'5']
          chordObj[note + Object.keys(chordQuality)[2]] = [notes[note]+'3', notes[(note + 7) % 12]+'4', notes[(note + 4) % 12]+'5', notes[(note + 11) % 12]+'5']
          chordObj[note + Object.keys(chordQuality)[3]] = [notes[note]+'3', notes[(note + 7) % 12]+'4', notes[(note + 3) % 12]+'5', notes[(note + 10) % 12]+'5']
          chordObj[note + Object.keys(chordQuality)[4]] = [notes[note]+'3', notes[(note + 7) % 12]+'4', notes[(note + 4) % 12]+'5', notes[(note + 10) % 12]+'5']
        }
      
        return chordObj
      
    }
      
    const chords = generateChords()

    //bass patterns

    const generateBass = () => {

        const bassObj = {}

        for (let note in notes) {
            note = Number(note)
            bassObj[note] = [notes[note]+'2', notes[(note + 7) % 12]+'2']
        }

        return bassObj

    }

    const bassPatterns = generateBass();

    //states for sequencer notes
    const [bassNote, setBassNote] = useState(["A2", "E2"]);
    const [chord, setChord] = useState(chords[92]);

    //callback functions for changing notes
    const changeSounds = (arp, bass) => {
        setChord(arp);
        setBassNote(bass);
    }
    
    //SYNTHS
    //chord
    const chordSynth = new Tone.PolySynth().toDestination();
    chordSynth.set({
        envelope: {
            // attack: 0.5,
            release: 0.5
        },
        oscillator: {
            type: "sine"
        }
    })

    console.log(chordSynth.get())

    //normal
    const synth = new Tone.PolySynth().toDestination();

        //states for synth
    const [synthAttack, setSynthAttack] = useState(0.5);
    const [synthRelease, setSynthRelease] = useState(0.5);

    synth.set({
        oscillator: {
            modulationType: "sine",
            type: "amsawtooth2"
        },
        envelope: {
            attack: synthAttack,
            release: synthRelease
        },
    })

    //bass
    const bassSynth = new Tone.PolySynth({
      oscilator: {
        type: "sine",
      }
    }).toDestination();

    //single events
    const playChord = (chord) => {
        chordSynth.triggerAttackRelease(chord, "1m");
    };

    //useEffect for bass
    useEffect(() => {
        //sequence that plays bass note
        const bassSequence = new Tone.Sequence((time, note) => {
            bassSynth.triggerAttackRelease(note, "2n", time)
        }, bassNote, '2n').start(0);

        // Set the loop points
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = "1m";
        Tone.Transport.loop = true;

        return () => {
            bassSequence.dispose();
        };

    }, [bassNote])


    //useEffect for the arpegiator
    useEffect(() => {

        // sequence that plays arpeggiated notes in chord
        const sequence = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, "8n", time);
        }, chord).start(0);


        // Set the loop points
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = "1m";
        Tone.Transport.loop = true;

        return () => {
            sequence.dispose();
        };

    }, [chord, synthAttack]);

    const handleToggleSequencer = () => {
        if (isRunning) {
            Tone.Transport.stop();
            setIsRunning(false);
        } else {
            // Start the audio context on user interaction
            Tone.start().then(() => {
                Tone.Transport.start();
                setIsRunning(true);
            });
        }
    };

  const startStopButton = isRunning ? "Stop Sequencer" : "Start Sequencer";

  return (
    <>
    <div className="test">
        <button onClick={handleToggleSequencer}>{startStopButton}</button>
        <button onClick={() => {changeSounds(chords[22], bassPatterns[2])}}>{notes[2]+chordQuality[2]}</button>
        <button onClick={() => {changeSounds(chords[44], bassPatterns[4])}}>{notes[4]+chordQuality[4]}</button>
        <button onClick={() => {changeSounds(chords[92], bassPatterns[9])}}>{notes[9]+chordQuality[2]}</button>
    </div>
        <div>
        <h4>arpeggio parameters</h4>
        {/*make inputs components probably*/}
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.1" 
          value={synthAttack} 
          onChange={(e) => {setSynthAttack(e.target.value)}} 
        />
        <p>Attack: {synthAttack}</p>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.1" 
          value={synthRelease} 
          onChange={(e) => {setSynthRelease(e.target.value)}} 
        />
        <p>Release: {synthRelease}</p>
    </div>
    {Object.keys(notes).map((note, i) => {
        return (
            <Button addChordClickHandler={addChordClickHandler} note={note} displayNote={notes[note]} key={i}/>
        )
    })}
    {/* <form>
        <Button setChordToAdd={setChordToAdd} note={note}/>
    </form> */}
    </>
  );
};

export default SequencerExample;
