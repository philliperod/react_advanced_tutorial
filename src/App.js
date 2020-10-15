import React from 'react';
import Setup from './tutorial/1-useState/setup/1-error-example';
import Final from './tutorial/1-useState/final/1-error-example';
// reminder that you can name the import any name you choose
// you just need to make sure you match the name inside your component to use it

function App() {
  return (
    <div className="container">
      <Setup />
      <Final />
    </div>
  );
}

export default App;
