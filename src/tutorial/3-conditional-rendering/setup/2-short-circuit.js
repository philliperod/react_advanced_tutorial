import React, { useState } from 'react';

const ShortCircuit = () => {
  const [text, setText] = useState('k');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      <h1>{firstValue}</h1>
      <h2>value: {secondValue}</h2>
    </>
  );
};

export default ShortCircuit;

// short-circuit evaluation
// ternary operator

// firstValue returns second argument because the first argument is false (empty string from the useState default value)
// secondValue returns nothing as both arguments are not true
