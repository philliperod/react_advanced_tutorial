import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
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

// question: after setting up, how can we operate with these values?
// first, you need to understand when you are calling this function
// if you set isLoading right away to true, when do you want to change it? Once you get your data
// what if the user does not exist?
// first, you'll look for the object (login) which comes from the user
// you have two state functions: setIsLoading, setUser
// since the first condition (isLoading) is true then you then you would want to hide it
// first set up setUser and pass the login; looking for the user
// second set up setIsLoading and pass false because you have the data you want instead of the default user
