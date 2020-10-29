import React, { useState } from 'react';

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (submission) => {
    submission.preventDefault();

    if (firstName && email) {
      const person = { firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
    } else {
      console.log('empty values');
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(submission) => setFirstName(submission.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(submission) => setEmail(submission.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;

// next to add inputs to a list
// create a useState hook that will have the list of people
// next, when the form is submitted then to add those inputs to the people list
// the handleSubmit function will do these actions, but will need a condition set that both inputs must be filled to submit
// and if that condition is true, then we want to submit those values into an object that will go into the people array
// then invoke the state function 'setPeople' and pass tthe current value of the state
// and return all the values using a spread operator and the person onject as well
// after inputting the values into the array, then we want to reset the inputs to empty strings
