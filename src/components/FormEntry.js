import "./FormEntry.css";
import React from "react";
import SubmitButton from "./SubmitButton";

const FormEntry = ({
  title,
  onSubmit,
  submitTitle,
  entryButtonTitle,
  onInputBlur,
}) => {
  const defaultInput = "";
  const [inputState, setInputState] = React.useState({
    entries: [defaultInput],
  });

  const updateEntry = (index, event) => {
    //   console.log(inputState.entries.map((entry) => entry))
    const newEntrys = inputState.entries.map((entry, entryIndex) => {
      //if the value isnt new, keep it the same, else change the entry to the new value
      return index !== entryIndex
        ? entry
        : event.target.value ;
    });
    setInputState({ ...inputState, entries: newEntrys });
  };

  const handleAddEntry = () =>
    setInputState({ entries: inputState.entries.concat(defaultInput) });

  const handleRemoveEntry = (index) => {
    setInputState({
      entries: inputState.entries.filter(
        (entry, entryIndex) => index !== entryIndex
      ),
    });
  };

  //this needs to be called as a function, instead of written as a JSX component, or else the entire component will rerender on each input
  const EntryFields = () => {
    return inputState.entries.map((entry, index) => (
      <div className="entry" key={index}>
        <input
          key={index}
          onBlur={(event) => {
            if (onInputBlur) onInputBlur(inputState, event);
          }}
          type="text"
          placeholder={`custom #${index + 1}`}
          value={entry}
          onChange={(event) => updateEntry(index, event)}
        />
        <button
          key={index + 1}
          type="button"
          onMouseDown={(event) => handleRemoveEntry(index, event)}
          className="small"
        >
          -
        </button>
      </div>
    ));
  };

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit ? onSubmit(inputState, event) : alert("submit");
      }}
    >
      <h4>{title}</h4>

      {EntryFields()}

      <button type="button" onMouseDown={handleAddEntry} className="small">
        {entryButtonTitle || "add entry"}
      </button>
      <SubmitButton title={submitTitle} />
    </form>
  );
};
export default FormEntry;
