import React, { useState } from 'react';

const ControlledInputs = () => {
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
            <input type="text" name="firstName" id="firstName" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" />
          </div>
          <button type="submit">add person</button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;

// there are two ways to have a submit
// 1) add onSubmit onto the main form
// 2) add onClick onto the <button type='submit'>
// now what will happen when you press enter or click on submit?
// Your browser will, first, attempt to submit the form which will reset the form
// 3) object.preventDefault(): prevents the browser from submitting the form rather than submitting through your function
