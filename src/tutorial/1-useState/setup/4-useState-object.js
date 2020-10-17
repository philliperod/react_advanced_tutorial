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
    setPerson({ ...person, message: 'Learned React' });
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
// setPerson({message: 'Learned React}): when you changed the message value in the hook, it erases the other values (name, age)
// so how can you change ONLY the value without erasing everything else?
// use the spread operator
// it will first copy the state values (person) then select whichever value you want to override (in this case, message)

export default UseStateObject;
