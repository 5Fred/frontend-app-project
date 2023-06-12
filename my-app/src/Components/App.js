import React from 'react';
import Header from './header';
import Booker from './booker';
import Author from './authors';
const App = () => {
  return (
    <div>
      <Header />
      <h1>Add your favorite book name and year/ publisher</h1>
      <Booker />
      <h1>Add your favorite authors and their emails</h1>
      <p></p>
      <Author />
    </div>
  );
};

export default App;