import React, { useState } from 'react';

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h2>value: {secondValue}</h2> */}
      <h1>{text || 'Phil Rod'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h2>Error...</h2>}
      {isError ? (
        <p>there is an error</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;

// short-circuit evaluation
// ternary operator

// ternary ooeratir - condition ? if true, run this argument : if not, then run this argument
