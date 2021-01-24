import wordData from "../appData/words.json";
import { ar, obj } from "../utility/utility";
let previousType = "";
const PhraseList = ({ dictionary, knobValues, grammer }) => {
  //fill an array with the key n amount of times based on the value of they keys knob, than shuffle it and select the first value
  const modifierTypes = ["preposition", "conjunction", "determiner"];

  const raffle = Object.keys(knobValues)
    //ignore the max_length knob
    .filter((key) => key !== "max_length")
    .map((key) => {
      const fillAmount = (knobValues[key] * 10) << 0;
      return Array(fillAmount).fill(key);
    })
    .flat();
  ar.shuffle(raffle);

  const phraseLength = () =>
    (Math.random() * 10 * knobValues.max_length + 1) << 0;
  const randomPick = () => (Math.random() * raffle.length) << 0;

  const selectType = (phraseArraySize, currentKey) => {
    let selected = raffle[randomPick()];
    const grammerConflict = () => {
      const brokenRules = {
        functionWordsDoubled:
          modifierTypes.some((type) => type === selected) &&
          modifierTypes.some((type) => type === previousType),

        conjunctionNextToPreposition:
          previousType === "preposition" && selected === "conjunction",

        determinerBeforePreposition:
          previousType === "determiner" && selected === "preposition",

        endingInConjunctionOrDeterminer:
          currentKey >= phraseArraySize - 1 &&
          (selected === "conjunction" || selected === "determiner"),
      };

      // console.log(Object.keys(brokenRules).some(
      //   (key) => {
      //     console.log( key + " " + brokenRules[key])
      //   return brokenRules[key] }))
      return Object.keys(brokenRules).some((key) => brokenRules[key]);
    };
    let tries = 0;
    if (grammer) {
      while (grammerConflict() && tries <= 10) {
        selected = raffle[randomPick()];
        tries++;
      }
    }

    previousType = selected;
    return selected;
  };
  //   console.log(
  //     `length: ${raffle.length} key: ${randomPick()} raffle: ${raffle}`
  //   );
  const typeArray = () => {
    const arrayLength = phraseLength();
    return Array.from({ length: arrayLength }, (v, k) => {
      const key = selectType(arrayLength, k);
      return key;
    });
  };
  const allPhrases = Array.from({ length: 10 }, () =>
    typeArray().map((type, key) => obj.randomProperty(dictionary[type]))
  );

  return allPhrases.map((line) => <div>{line.join(" ")}</div>);
};

export default PhraseList;
