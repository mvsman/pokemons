const Buttons = ({ prev, next }) => {
  return (
    <div className="buttons">
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
    </div>
  );
};

export default Buttons;
