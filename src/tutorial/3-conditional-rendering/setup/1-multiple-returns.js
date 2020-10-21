import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsons';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
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

// the catch error is a promise returned if there is an error with the data itself
// now how you to respond if the issue is a http status 404 or such?
// you can create an if statement within a then()
// you setup the if statement in a range of 200-299 to return the data
// if not within that range, that you change the statue values of isLoading to false and isError to true and javascript will run the conditions you set to output 'Error...'
// this will return Error because in this example we did not import the correct filename (added an 's' on QuincyLarson)
