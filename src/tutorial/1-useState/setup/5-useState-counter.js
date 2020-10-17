import React, { useState } from 'react';

// Simple Counter
// 1) created a heading with a counter value and buttons to increase/descrease/reset that value
// 2) created an inline function for the onClick handler for the increase/decrease button
// 3) create a reference function for the reset button
// side note: this is repetition to show that you can choose inline or reference functions

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
