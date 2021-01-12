import "./FormEntry.css";
import React from "react";
function FormEntry({ title }) {
  const defaultInput = [{ value: "" }];
  const [inputState, setInputState] = React.useState({
    entries: defaultInput,
  });
  //uses currying operation to update the state of the available entries
  const updateEntry = (index) => (event) => {
    //   console.log(inputState.entries.map((entry) => entry))
    const newEntrys = inputState.entries.map((entry, entryIndex) =>
    
      //if the value isnt new, keep it the same, else change the entry to the new value
      index !== entryIndex ? entry : { ...entry, value: event.target.value }
    );
    setInputState(newEntrys);
  };

  const handleSubmit = (event) =>
    alert(
      `This form for ${title} now has ${inputState.entries.length} entries`
    );

  const handleAddEntry = () =>
    setInputState({ entries: inputState.entries.concat(defaultInput) });

  const handleRemoveEntry = (index) => () =>
    setInputState({
      entries: inputState.entries.filter(
        (entry, entryIndex) => index !== entryIndex
      ),
    });
console.log(inputState.entries);
  const EntryFields = inputState.entries.map((entry, index) => (
    <div className="entry" key={index}>
      <input
        type="text"
        placeholder={`entry #${index + 1} name`}
        value={entry.value}
        onChange={updateEntry(index)}
      />
      <button
        type="button"
        onClick={handleRemoveEntry(index)}
        className="small"
      >
        -
      </button>
    </div>
  ));
  return (
    <form onSubmit={handleSubmit}>
      <h4>{title}</h4>
      {EntryFields}

      <button type="button" onClick={handleAddEntry} className="small">
        Add entry
      </button>
      <button>Submit</button>
    </form>
  );
}
export default FormEntry;
