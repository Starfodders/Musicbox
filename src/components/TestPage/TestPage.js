import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';

const SequencerExample = () => {
    const [isRunning, setIsRunning] = useState(false);
    
    const amaj7 = ['A3', 'E4', 'C#5', 'G#5']
    const bmin7 = ['B3', 'F#4', 'A5', 'D5']
    const E7 = ['E3', 'B3', 'D4', 'G#5']
    
    const [bassNote, setBassNote] = useState(['A2'])
    const [chord, setChord] = useState(amaj7);

    const changeChordE7 = () => {
        setChord(E7)
        setBassNote(['E2'])
    }
    const changeChordA7 = () => {
        setChord(amaj7);
        setBassNote(['A2']);
    }
    const changeChordb7 = () => {
        setChord(bmin7);
        setBassNote(['B2'])
    }

    useEffect(() => {
        // Create a new synth with a sawtooth waveform
        const synth = new Tone.PolySynth({
        oscillator: {
            type: 'triangle',
        },
    }).toDestination();

    const bassSynth = new Tone.PolySynth({
        oscilator: {
            type: 'sine'
        },
    }).toDestination();

    // const bassSequence = new Tone.Sequence((time, note) => {
    //     bassSynth.triggerAttackRelease(note, '4n', time);
    // }, bassNote).start(0);

    const newSequence = new Tone.Sequence((time, note) => {
        bassSynth.triggerAttackRelease(note, '4n', time);
    }, bassNote).start(0)

    // Create a new sequence of notes
    const sequence = new Tone.Sequence((time, note) => {
        console.log(time);
        synth.triggerAttackRelease(note, '8n', time);
    }, chord).start(0);

    // Set the loop points
    Tone.Transport.loopStart = 0;
    Tone.Transport.loopEnd = '1m';
    Tone.Transport.loop = true;

    return () => {
      sequence.dispose();
    };
  }, [chord, bassNote]);

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

  const buttonLabel = isRunning ? 'Stop Sequencer' : 'Start Sequencer';

  return (
    <div>
      <button onClick={handleToggleSequencer}>{buttonLabel}</button>
      <button onClick={changeChordA7}>amaj7</button>
      <button onClick={changeChordb7}>bmin7</button>
      <button onClick={changeChordE7}>E7</button>
    </div>
  );
};

export default SequencerExample;


