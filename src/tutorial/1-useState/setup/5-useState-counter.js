import React, { useState } from 'react';

// Functional Update Form

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((previousState) => {
        return previousState + 1;
      });
    }, 2000);
  };
  // new approach is using another function within the parameter of the setValue instead of a direct state value
  // the function will get the current value rather than the old state value
  // the function will need a parameter that accepts the current state value
  // when you click on the complex button multiple times, it will add with each click and add it one by one after the delay
  // so setValue(value + 1) will get the same value and add plus one
  // setValue((previousState) => {return previousState + 1}) will get the current value then add plus one right before the update

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

      <section style={{ margin: '4rem 0' }}>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
