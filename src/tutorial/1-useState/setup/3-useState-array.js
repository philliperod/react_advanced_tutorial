import React from 'react';
import {data} from '../../../data';

// UseState: Array Example

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <>
      {people.map((person) => {
        const {id, name} = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};
// RECAP:
// use useState hook which has the {data} array as the default value
// invoke the hook: you are getting a default value (people) of what you provide state value which is the state value
// then you have a function (setPeople) that controls it
// your return: you access that variable (default value which is an array) and iterate over that array with the map() method
// then you display every item in a div and show the name in a heading

export default UseStateArray;
