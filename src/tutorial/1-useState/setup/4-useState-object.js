import React, { useState } from 'react';

// UseState Object Example

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Phil',
    age: 38,
    message: 'Learning React'
  });
  console.log(person);

  const changeMessage = () => {
    setPerson({ message: 'Learned React' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};
// 1) create a hook
// 2) person is state value, setPerson is the function that will control that value
// 3) it will equal to the useState in which it will pass an object, variable, or array
// 4) what will happen if you change the state value?
// 5) first, set the return in the React.Fragment (shorthand)
// 6) return a <h3> with each prop within curly braces inbetween the tags
// 7) next, create a button that will change those values in the array
// 8) set the onClick with a function (changeMessage) that will be invoked once clicked
// 9) inside the changeMessage function, you will invoke the state function (setPerson)

export default UseStateObject;
