import React from 'react';
import {data} from '../../../data';

// UseState: Array Example

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  // create a new variable (newPeople) which will equal to the state value (people)
  // pass the id, then filter out the array
  // for each and every person that you have, we want to remove the ones that have a matching id

  return (
    <>
      {people.map((person) => {
        const {id, name} = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Clear Single Name</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear All Names
      </button>
    </>
  );
};
// how to remove items individually with a button?
// you'll need to create another function (removeItem) that will look for a specific id tied to the item in the array
// the function will have id as a parameter and have an array.filter() method inside its function

export default UseStateArray;
