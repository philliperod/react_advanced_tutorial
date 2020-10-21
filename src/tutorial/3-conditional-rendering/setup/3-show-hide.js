import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>size: </h2>
    </div>
  );
};

export default ShowHide;

// create a hook that has a boolean for a default value
// create your jsx where a button will toggle the state boolean value
// create another component that will display its own jsx
// in the ShowHide component, setup a condition that will toggle between the first argument (state value) and second argument (Item component and its contents)
