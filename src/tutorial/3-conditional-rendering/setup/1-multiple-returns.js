import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  }, []);

  if (!isLoading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>error...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;

// next example: setting up a fetch request that will control the conditions in useEffect hook
// fetch(url) sends a GET request and returns a promise with the contents of the url
// then((resp) => resp.json()) will take that content and parse it as JSON
// catch((error) => console.log(error)) is a rejection handler; if any of the promises rejects then this will catch it
// the second argument in the useEffect will clean it up; tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run
