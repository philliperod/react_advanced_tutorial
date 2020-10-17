import React, { useState } from 'react';

// UseState: Multiple State Values
// rather than setting up a big object that holds many props/values
// you can setup multiple state values that can target specificity
// you invoke the state function within the function that is making a change
// in your return, rather than using object dot notation, you use state value

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Phil',
    age: 38,
    message: 'Learning React'
  });
  console.log(person);

  const [name, setName] = useState('Phil');
  const [age, setAge] = useState(38);
  const [message, setMessage] = useState('Learning React');

  const changeMessage = () => {
    // setPerson({ ...person, message: 'Learned React' });
    setMessage('Using Multiple State Values');
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
