import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('useEffect called');
  });
  console.log('component rendered');

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Change Value
      </button>
    </>
  );
};

export default UseEffectBasics;

// a way to use useEffect is to use a callback function in its parameters
// this callback function will run AFTER every render
// in this example, we will try to change the title's value
// create an UseState hook which has a default value of zero
// in the return, setup a button with an onCLick handler that will increase the value by one

// results:
// every time the button is clicked, you invoke the state function (setValue)
// what will happen with the useState? 2 things happen
// 1) preserve the value between the renders
// 2) it triggered re-render; every time you click on the button, useEffect will run after

// side note: in index.js, within the <React.StrictMode>, your App component will render twice; if placed outside, it will run once
