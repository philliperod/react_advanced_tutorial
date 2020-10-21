import React, { useState } from 'react';

const ShortCircuit = () => {
  const [text, setText] = useState('');
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
