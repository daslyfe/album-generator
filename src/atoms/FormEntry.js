function FormEntry({ onChange, value, label }) {
  return (
    <label>
      {label}
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default FormEntry;