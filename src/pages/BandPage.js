import FormEntry from "../molecules/FormEntry";
import PhraseList from "../molecules/PhraseList";
import Knob from "../atoms/Knob";
import { useState } from "react";
import modifiers from "../atoms/modifiers.json";

function BandPage() {
  const [knobValues, setKnobValues] = useState({
    conjunction: 0.5,
    determiner: 0.5,
    preposition: 0.5,
    custom: .5,
    max_length: .5
  });
  const [words, setWords] = useState(modifiers);
  console.log(words)

  return (
    <div className="App">
      <PhraseList grammer={true} knobValues={knobValues} dictionary={words}/>
      <Knob
        key="custom"
        initVal={knobValues.custom * 100}
        diameter="120px"
        color="teal"
        pointerColor="white"
        action={(midi, val) => {
          setKnobValues({ ...knobValues, custom: val });
        }}
      />
      <Knob
        key="conjunction"
        initVal={knobValues.conjunction * 100}
        diameter="120px"
        color="#FFFEFF"
        pointerColor="#CCCCCC"
        action={(midi, val) => {
          setKnobValues({ ...knobValues, conjunction: val/2});
        }}
      />
      <Knob
        key="determiner"
        initVal={knobValues.determiner * 100}
        diameter="120px"
        color="green"
        pointerColor="white"
        action={(midi, val) => {
          setKnobValues({ ...knobValues, determiner: val/2 });
        }}
      />
      <Knob
        key="preposition"
        initVal={knobValues.determiner * 100}
        diameter="120px"
        color="orange"
        pointerColor="white"
        action={(midi, val) => {
          setKnobValues({ ...knobValues, preposition: val/2 });
        }}
      />
        <Knob
        key="max_length"
        initVal={knobValues.max_length * 100}
        diameter="120px"
        color="yellow"
        pointerColor="white"
        action={(midi, val) => {
          setKnobValues({ ...knobValues, max_length: val });
        }}
      />
      <FormEntry
        title="enter word"
        submitTitle="generate album"
        key="wordenter"
        onInputBlur={(inputState) => setWords({...words, custom: inputState.entries})}
      />
    </div>
  );
}

export default BandPage;
