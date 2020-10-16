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
// 8) next, we'll destructure the array within the map() method
// 9) and return a <div> that has a key attribute with the {data} prop id
// 10) the <h4> will contain the {data} prop name

export default UseStateArray;
