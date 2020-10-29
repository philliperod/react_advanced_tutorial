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

// the onChange handler is affecting two things: the state value and input
// the onChange will access the event object and to get the value, it'll look for the event, target, and input value

// REMINDER
// in order to setup controlled inputs:
// 1) you need to setup a value property that reference to state value
// 2) have a onChange event handler that will either reference with a function that looks for an event
// 3) in order to control the state value, you invoke the state function in which you will pass in the event.target (which you are grabbing the input) and get the state value
