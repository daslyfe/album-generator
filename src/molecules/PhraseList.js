import modifiers from "../atoms/modifiers.json";
import { ar } from "../atoms/utility";

const { conjunctions } = modifiers;
const { determiners } = modifiers;
const { prepositions } = modifiers;

const PhraseList = ({ wordArray, knobValues }) => {
  //fill an array with the key n amount of times based on the value of they keys knob, than shuffle it and select the first value
  const raffle = Object.keys(knobValues)
    //ignore the max_length knob
    .filter((key) => key !== "max_length")
    .map((key) => {
      const fillAmount = (knobValues[key] * 10) << 0;
      return Array(fillAmount).fill(key);
    })
    .flat();
  ar.shuffle(raffle);
  const phraseLength = (Math.random() * 10 * knobValues.max_length + 1) << 0;
  const randomPick = () => (Math.random() * raffle.length) << 0;

  const selectKey = () => raffle[randomPick()];
//   console.log(
//     `length: ${raffle.length} key: ${randomPick()} raffle: ${raffle}`
//   );
  const typeArray = Array.from({ length: phraseLength }, () => selectKey());
  console.log(typeArray)
  return true;
};

export default PhraseList;
