import React from 'react';
import { data } from '../../../data';

// Refactoring this final example using the functional approach

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    setPeople((oldValuePeople) => {
      let newValuePeople = oldValuePeople.filter((person) => person.id !== id);
      return newValuePeople;
    });
  };
  // REMEMBER that whatever you pass through the SetPeople parameter function
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
