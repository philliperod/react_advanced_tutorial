import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
  };

  useEffect(() => {
    getUsers();
    // return () => {
    //   cleanup
    // }
    // }, [input])
  });
  return (
    <>
      <h3>github users</h3>
    </>
  );
};

export default UseEffectFetchData;

// 1) setup useState
// 2) setup useEffect; in the callback function you want to perform a fetch request
// you can setup the fetch request as a standalone or create another function
// REMINDER: you cannot make this function async await because it returns a promise; useEffect is looking for a cleanup function and promise does that fulfill that
// you can setup async await within the function inside the call back or write it as a separate function
// 3) create async await as a separate function
// 4) create sync function and within the body, we will look for a response in which you will use fetch and pass the string of the url variable
// 5) you need to run json due to format of the url
// 6) create users that will equal to a response of json
// 7) invoke the getUsers async function to see the objects
