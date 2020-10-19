import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('useEffect called');
    if (value > 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log('second useEffect called');
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

// Second parameters in useEffect
// second parameter is called a dependency
// second parameter will equal an empty array
// what will happen is the useEffect will only render initially and not every time the component runs
//
