import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
  const [people, setPeople] = useState([]);

  const handleChange = (eventObject) => {
    const name = eventObject.target.name;
    const value = eventObject.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (eventObject) => {
    eventObject.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '', age: '' });
    }
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;

// refactoring the code to reduce coding
// will have two hooks: one for the submission of the values in the input fields and one to output those values into a container to list out the submission

// create one useState hook that has multiple default name/values pairs: props with an empty string
// the other hook will have an empty array for its default value used to display the submissions into a container
// for the person hook, we'll use {stateValue.prop} to target the specific prop/value for each input field in our JSX attribute

// in handleChange function, we'll create two const variables
// those variables will each target the JSX attribute 'name' and 'value'
// this is creating a dynamic object property that can change
// next, you need to invoke the state function setPerson
// you need to copy the old values first (using spread operator) because it is an object with multiple properties
// then put in the property/value we want to update with that state function
// this can be done dynamically by using the name property and its value property that can be access to change the state value
// we'll set the onChange attribute with the handleChange function

// in handleSubmit, first set {parameter.preventDefault()} to prevent the submit button to refresh the browser after the click
// create a conditional that checks that all three input fields are filled to complete the submission
// create a new variable {newPerson} which we want to copy the initial state values from {person} and want to add it to the id
// we'll use the state function setPeople which will copy the {person} state value and add it into a new array newPerson
// lastly, we want to empty the state values for {person}
