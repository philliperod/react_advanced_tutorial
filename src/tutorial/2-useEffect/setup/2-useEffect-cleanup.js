import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
  });

  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;

// this example is checking on the size of the window
// default value is (window.innerWidth)
// set the state value inside the <h2> tag to be accessed and displayed on the page
// next we will setup an event listener on the window
// first, setup a function (checkSize) that will take the state function (setSize) when executed which its default value is window.innerWidth
// second, setup an useEffect hook that will add an eventListener to when the window size of the browser changes and runs the checkSize function to display that value
