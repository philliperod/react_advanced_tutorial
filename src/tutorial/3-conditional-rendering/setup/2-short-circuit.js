import React, { useState } from 'react';

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h2>value: {secondValue}</h2> */}
      <h1>{text || 'Phil Rod'}</h1>
      {text && <h2>'Rod Phil</h2>}
    </>
  );
};

export default ShortCircuit;

// short-circuit evaluation
// ternary operator

// how to use this in JSX?
// you can use the OR and AND operator within the object in JSX in which you can setup a default value
// since the default value is an empty string, it is a falsy statement
// the first one will return the default value
// the second one will return the first value (empty string)
