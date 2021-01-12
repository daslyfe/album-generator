import "./FormEntry.css";
import React from "react";
function FormEntry({ title, onSubmit, submitTitle, entryButtonTitle }) {
  const defaultInput = [{ value: "" }];
  const [inputState, setInputState] = React.useState({
    entries: defaultInput,
  });
  //uses currying operation to update the state of the available entries
  const updateEntry = (index) => (event) => {
    //   console.log(inputState.entries.map((entry) => entry))
    const newEntrys = inputState.entries.map((entry, entryIndex) => {
      console.log(entry);
      //if the value isnt new, keep it the same, else change the entry to the new value
      return index !== entryIndex
        ? entry
        : { ...entry, value: event.target.value };
    });
    console.log(inputState);
    setInputState({ entries: newEntrys });
  };



  const handleAddEntry = () =>
    setInputState({ entries: inputState.entries.concat(defaultInput) });

  const handleRemoveEntry = (index) => () =>
    setInputState({
      entries: inputState.entries.filter(
        (entry, entryIndex) => index !== entryIndex
      ),
    });
  console.log(inputState);
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
        onMouseDown={handleRemoveEntry(index)}
        className="small"
      >
        -
      </button>
    </div>
  ));

  function SubmitButton({title}) {
    return title ? <button>{title}</button> : <></>
  }

  return (
    <form onSubmit={onSubmit}>
      <h4>{title}</h4>
      {EntryFields}

      <button type="button" onMouseDown={handleAddEntry} className="small">
        {entryButtonTitle || "add entry"}
      </button>
      <SubmitButton title={submitTitle}/>
    </form>
  );
}
export default FormEntry;
