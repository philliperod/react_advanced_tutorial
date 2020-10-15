import React, {useState} from 'react';
// General Rules of Hooks
// all hooks will start with the word 'use': useState, useEffect, etc
// the components' name must be uppercase like below UsedStateBasics
// hooks MUST be in the component/function body
// cannot call the hook conditionally
// example of that is: if(hook){}

const UseStateBasics = () => {
  const [text, setText] = useState('UseState Random Title');
  // this hook is located inside the component UseStateBasics
  const handleClick = () => {
    if (text === 'UseState Random Title') {
      setText('New Title Now');
    } else {
      setText('UseState Random Title');
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
