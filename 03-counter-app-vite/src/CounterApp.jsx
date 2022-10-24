import { PropTypes } from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value);

  const handleMinus = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);
  const handleAdd = () => setCounter((c) => c + 1);  //Toma el valor actual d counter

  console.log(counter);
  return (
    <>
      <h1> CounterApp </h1>
      <h2> {counter} </h2>
      <button onClick={handleMinus}> -1 </button>
      <button onClick={handleReset}> Reset </button>
      <button onClick={handleAdd}> +1 </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};
