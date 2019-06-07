import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogcards from './Hogcards';
import Search from './Search';

class App extends Component {
  state = {
    hogs: hogs,
    onlyGreased: false,
    sortBy: 'none',
  }

  toggleOnlyGreased = () => {
    this.setState({
      onlyGreased: !this.state.onlyGreased
    })
  }

  updateSortBy = (sortBy) => {
    this.setState({
      sortBy
    })
  }

  getFilteredHogs = () => {
    return this.state.onlyGreased
      ? this.state.hogs.filter(hog => hog.greased)
      : this.state.hogs
  }

  sortHogs = (hogs) => {
    const {sortBy} = this.state;
    const hogsCopy = [...hogs]

    if (sortBy === 'name') {
      hogsCopy.sort((a,b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      })
    } else if (sortBy === 'weight') {
      const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
      hogsCopy.sort((a,b) => {
        return a[weight] - b[weight]
      })
    }
    return hogsCopy
  }

  render() {
    const hogs = this.sortHogs(this.getFilteredHogs())
    return (
      <div className="App">
          <Nav />
          <Search
            onlyGreased={this.state.onlyGreased} 
            greasedFilterChangeHandler={this.toggleOnlyGreased}
            updateSortBy={this.updateSortBy}
          />
          <Hogcards hogs={hogs} />
      </div>
    )
  }
}

export default App;
