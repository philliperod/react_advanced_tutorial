import React, {useState} from 'react';
// in this example, using UseState to change the title back and forth

const UseStateBasics = () => {
  // console.log(useState('I am the default'));
  // const value = useState(1)[0];
  // const handleFunction = useState(1)[1];
  // console.log(value, handleFunction);

  const [text, setText] = useState('UseState Random Title');
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
// 1) now we will create a button that will handle the useState 'setText' function
// 2) reminder that the function inside the HTML tag will need to be in curly braces to access it
// 3) next is to create an if statement to have the title change back and forth

export default UseStateBasics;
