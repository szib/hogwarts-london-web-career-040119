import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogcards from './Hogcards';

class App extends Component {
  state = {
    hogs: hogs,
    onlyGreased: false
  }

  toggleOnlyGreased = () => {
    this.setState({
      onlyGreased: !this.state.onlyGreased
    })
  }

  render() {
    const hogs = this.state.onlyGreased
      ? this.state.hogs.filter(hog => hog.greased)
      : this.state.hogs
    return (
      <div className="App">
          <Nav 
            onlyGreased={this.state.onlyGreased} 
            greasedFilterChangeHandler={this.toggleOnlyGreased}/>
          <Hogcards hogs={hogs} />
      </div>
    )
  }
}

export default App;
