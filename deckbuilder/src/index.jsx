
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import {
  fetchCards,
} from './api';

import {
    DeckList,
    SearchBar,
    SearchResults
  } from './components';

  // A component is just a function, and the return value of that function is the JSX template which is used to build the HTML for your page

const App = () => {
  const [results, setResults] = useState([ ]);
  //fetchCards().then(console.log);
  return (
    <div id="app">
        <SearchBar setResults={ setResults } />
        <SearchResults results={ results } />
        <DeckList />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);