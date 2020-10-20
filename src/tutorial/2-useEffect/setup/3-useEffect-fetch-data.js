import React, { useState, useEffect } from 'react';
import { identifier } from '@babel/types';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;

// UseEffectFetchData is the component which contains two hooks (useState and useEffect), async function, and returns jsx
// useState hook returns a state value and a state function that updates which will be the users
// state value (users) will equal the initial state (which will be disregarded afterwards) during the initial render
// state function (setUsers) will update that state value as it accepts a new state value and queues a re-render
// during subsequent re-renders, setUsers will always be the most recent update after applying updates
// async function is a function that always return a promise
// keyword (await) makes Javascript wait until that promise is settles and returns its results
// basically, await will suspend the async function until it receives the data from the url which is stored in variable response
// then response is resolved by json in an array and stored into users
// users will be set in the parameters of the state fucntion setUsers
// useEffect will run after the render is commited to the screen meaning after every completed render unless otherwise
// useEffect will have a clean-up function that will run before the component is removed from the UI to prevent memory leaks
//  if a component renders multiple times (as they typically do), the previous effect is cleaned up before executing the next effect
// in the second argument, you can pass an empty array; this tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run
// if you pass an empty array, the props and state inside the effect will always have their initial values.
