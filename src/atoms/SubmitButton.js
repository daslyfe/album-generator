const SubmitButton = ({ title }) => {
  return title ? (
    <div>
      <button>{title}</button>
    </div>
  ) : (
    <></>
  );
};

export default SubmitButton;
