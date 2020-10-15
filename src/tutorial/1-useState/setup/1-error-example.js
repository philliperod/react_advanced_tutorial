import React from 'react';

// in this example, we want to change the title via button click

const ErrorExample = () => {
  let title = 'This Title';
  const handleClick = () => {
    title = 'New Title';
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

// 1) set a variable for a title
// 2) Use React.Fragment
// React.Fragment: lets you group a list of children without adding extra nodes to DOM
// 3) insert the variable in curly braces within HTML tags to access it
// 4) setup button to handle changing the title
// 5) create a function for the button to change the title
// 6) in order to change the title, you must use UseState; next lesson
export default ErrorExample;
