import React from 'react';
import {data} from '../../../data';

// UseState: Array Example

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <>
      {people.map((person) => {
        console.log(person);
        return 'hello';
      })}
    </>
  );
};
// 1) first, let's setup the useState
// 2) the value is 'people' and the function is 'setPeople'
// 3) another way to invoke useState if not importing React is using React.useState (optional)
// 4) in this example, we'll set the useState default value as data that's imported from data.js"
// 5) now to return the hook which you can put inside React.Fragment (optional is using just the tags with naming it React.Fragment)
// 6) Next, let's focus on the return which you want to iterate over your {data}
// 7) You will use the map() method

export default UseStateArray;
