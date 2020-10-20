import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('triggering a re-render');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('clean-up function working');
      window.removeEventListener('resize', setSize);
    };
  });

  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;

// with its current state, it will experience memory leaks (check the event Listeners in the browser)
// so we need to create something that once we exist the hook, it will remove the event listener
// why is this happening?
// the callback function (state function) in checkSize is triggering the re-rendering because the moment we invoke the callback function (state function) it updates the state value
// the useState is preserving the state value and triggering the re-rendering
// each time we invoke the checSize function for every resizing we are also triggering the re-render

// to counter the problem of this memory leak, we will use a clean-up function
// so every time we have an useEffect hook, we can have an option of returning a function
// the clean-up function will be invoked once it exists out of the useEffect
//
