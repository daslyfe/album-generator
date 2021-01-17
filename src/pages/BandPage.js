import FormEntry from "../molecules/FormEntry";
import PhraseList from "../molecules/PhraseList";
import Knob from "../atoms/Knob";
import { useState } from "react";

function BandPage() {
  const [knobValues, setKnobValues] = useState({
    conjunctions: 0.5,
    determiners: 0.5,
    prepositions: 0.5,
  });
 
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
      <FormEntry
        title="enter word"
        submitTitle="generate album"
        key="wordenter"
        onSubmit={console.log("submit")}
      />
    </div>
  );
}

export default BandPage;
