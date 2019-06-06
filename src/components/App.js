import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogcards from './Hogcards';

class App extends Component {
  state = {
    hogs: hogs
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <Hogcards hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
