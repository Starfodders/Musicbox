import React, { useEffect } from 'react';
import * as Tone from 'tone';

const SequencerExample = () => {
  useEffect(() => {
    // Create a new synth with a sawtooth waveform
    const synth = new Tone.Synth({
      oscillator: {
        type: 'sawtooth',
      },
    }).toDestination();

    // Create a new sequence that plays C, E, G, B in eighth notes
    const sequence = new Tone.Sequence((time, note) => {
      // Calculate the frequency of the note and play it with the synth
      const frequency = Tone.Frequency(note);
      synth.triggerAttackRelease(frequency, '8n', time);
    }, ['C2', 'E2', 'G2', 'B2'], '8n');

    // Start the sequence and transport
    Tone.Transport.start();
    sequence.start(0);

    // Stop the sequence and transport when the component unmounts
    return () => {
      sequence.stop();
      Tone.Transport.stop();
    };
  }, []);

  return <div>Sequencer Example</div>;
};

export default SequencerExample;
