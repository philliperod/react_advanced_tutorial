import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  return <h2>useEffect Basics</h2>;
};

export default UseEffectBasics;

// UseEffect is allows you to do the side effect
// side effect is any work outside of the component
// which could be signing up for subscription, fetching data, setting up an eventListener
// just like useState, you will need to import useEffect
// by default, useEffect will run after every re-render of a component
