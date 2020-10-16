import React, { useState } from 'react';

// UseState Object Example

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Phil',
    age: 38,
    message: 'Learning React'
  });
  console.log(person);

  return <h2>useState object example</h2>;
};
// 1) create a hook
// 2) person is state value, setPerson is the function that will access that value
// 3) it will equal to the useState in which it will pass an object, variable, or array
// 4)

export default UseStateObject;
