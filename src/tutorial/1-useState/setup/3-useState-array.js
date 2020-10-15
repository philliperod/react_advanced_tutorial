import React from 'react';
import {data} from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return <h2>useState array example</h2>;
};
// 1) first, let's setup the useState
// 2) the value is 'people' and the function is 'setPeople'
// 3) another way to invoke useState if not importing React is using React.useState (optional)
// 4) in this example, we'll set the useState default value as data that's imported from data.js

export default UseStateArray;
