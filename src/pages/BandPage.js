import FormEntry from "../molecules/FormEntry";
import PhraseList from "../molecules/PhraseList";
import Knob from "../atoms/Knob";
import { useState } from "react";
import modifiers from "../atoms/modifiers.json";

function BandPage() {
  const [knobValues, setKnobValues] = useState({
    conjunctions: 0.5,
    determiners: 0.5,
    prepositions: 0.5,
    max_length: .5
  });
  const [words, setWords] = useState(modifiers);

  return (
    <div className="App">
      <PhraseList knobValues={knobValues} />
      <Knob
        key="conjunctions"
        initVal={knobValues.conjunctions * 100}
        diameter="120px"
        color="#FFFEFF"
        pointerColor="#CCCCCC"
        action={(midi, val) => {
          setKnobValues({ ...knobValues, conjunctions: val });
        }}
      />
      <Knob
        key="determiners"
        initVal={knobValues.determiners * 100}
        diameter="120px"
        color="green"
        pointerColor="#CCCCCC"
        action={(midi, val) => {
          setKnobValues({ ...knobValues, determiners: val });
        }}
      />
      <Knob
        key="prepositions"
        initVal={knobValues.determiners * 100}
        diameter="120px"
        color="orange"
        pointerColor="#CCCCCC"
        action={(midi, val) => {
          setKnobValues({ ...knobValues, prepositions: val });
        }}
      />
        <Knob
        key="max_length"
        initVal={knobValues.max_length * 100}
        diameter="120px"
        color="yellow"
        pointerColor="#CCCCCC"
        action={(midi, val) => {
          setKnobValues({ ...knobValues, max_length: val });
        }}
      />
      <FormEntry
        title="enter word"
        submitTitle="generate album"
        key="wordenter"
        onSubmit={(inputState) => setWords({...words, custom: inputState.entries})}
      />
    </div>
  );
}

export default BandPage;
