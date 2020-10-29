import React, { useState } from 'react';

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (submission) => {
    submission.preventDefault();
    console.log('hello everybody');
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
            <input type="text" name="email" id="email" value={email} />
          </div>
          <button type="submit">add person</button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;

// now, how do you access the data from the inputs?
// we'll need to setup state values and add key attributes to the form
// one attribute will be a reference to the state value
// second attribute will be onChange event listener which will fire the callback function every time someone types something in the inputs
// the default values for both hooks will be empty strings
// for both inputs, you setup the value attribute which will equal to the state values
// the onChange handler will have an inline function that will invoke the state function which will pass the event into its state value
