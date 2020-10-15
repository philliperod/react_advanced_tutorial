import React, {useState} from 'react';
// in this example, using UseState to change the title back and forth

const UseStateBasics = () => {
  // console.log(useState('I am the default'));
  // const value = useState(1)[0];
  // const handleFunction = useState(1)[1];
  // console.log(value, handleFunction);

  const [text, setText] = useState('UseState Random Title');

  return (
    <React.Fragment>
      <h2>{text}</h2>
    </React.Fragment>
  );
};
// 1) UseState is a function
// 2) it is a named import from React; must use curly braces in the import
// 3) useState function returns as an array which first value (state value) is undefined and the second value is a function
// 4) the function will control the state value
// 5) when invoking the useState(), you must set a default value which can be anything
// 6) for example, we are going to setup a value and function to see how it is access
// 7) const value will be the default value; the brackets selects the index of that value
// 8) const handleFunction will be the function that controls the value

// 9) you can use destructuring and set it for useState
// 10) you will use brackets instead of curly braces
// 11) the function will have a standard 'set' before the name of the function; should match the value set in the bracket
// 12) inside the parameters of the useState is where you can set the default value
// 13) then using React.Fragment again, inside the html tags you will use {valuu} inbetween

export default UseStateBasics;
