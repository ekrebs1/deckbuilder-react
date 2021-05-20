
import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import {
    DeckList,
    SearchBar,
    SearchResults
  } from './components';

const App = () => {
  return (
    <div id="app">
        <SearchBar />
        <SearchResults />
        <DeckList />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);