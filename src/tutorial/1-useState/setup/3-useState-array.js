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
      <button className="btn" onClick={() => setPeople([])}>
        Clear Name
      </button>
    </>
  );
};
// what if you want to remove the names by clicking on a button?
// you can tackle this by creaeting an inline or reference function with onClick
// you can invoke the setPeople function with the onClick button but it has to be within another function so it does not run when the page refresh
// to clear the items in the array, you just need to return empty brackets
// now when you click on the button, it will clear all of the div's

export default UseStateArray;
