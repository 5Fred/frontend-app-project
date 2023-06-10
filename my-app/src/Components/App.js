import React from 'react';
import Header from './header';
import Booker from './booker';
import Author from './authors';


const App = () => {
  // Your component code here
  return (
    <div>
      <Header />
      <Booker />
      <h1>authors and their emails</h1>
      <Author />
    </div>
  );
};

export default App;
