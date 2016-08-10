require('./index.html');

import IsolatedScroll from '../src';

import React from 'react';
import { render } from 'react-dom';
import times from 'lodash.times';

const containerStyles = {
  border: '1px solid #888',
  width: '400px',
  height: '200px',
  overflow: 'auto'
};

const List = () => (
  <ul>
    { times(80, i => <li key={i}>List item.</li>) }
  </ul>
);

const App = () => (
  <div>
    <h1>react-isolated-scroll demo</h1>

    <p>With react-isolated-scroll:</p>

    <IsolatedScroll style={containerStyles}>
      <List />
    </IsolatedScroll>

    <p>Without react-isolated-scroll:</p>

    <div style={containerStyles}>
      <List />
    </div>
  </div>
);

const outlet = document.getElementById('outlet');
render(<App />, outlet);
