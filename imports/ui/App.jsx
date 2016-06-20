import React, {Component} from 'react';

import { fortytwo } from '/imports/fortytwo.js';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hi{fortytwo}!!!</h1>
      </div>
    );
  }
}
