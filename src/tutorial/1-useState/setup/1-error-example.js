import React from 'react';

// in this example, we want to change the title via button click

const ErrorExample = () => {
  let title = 'This Title';
  return (
    <React.Fragment>
      <h2>{title}</h2>
    </React.Fragment>
  );
};

// 1) set a variable for a title
// 2) Use React.Fragment
// React.Fragment: lets you group a list of children without adding extra nodes to DOM
// 3) insert the variable in curly braces within HTML tags to access it
export default ErrorExample;
