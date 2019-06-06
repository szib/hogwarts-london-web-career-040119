import React, { Component } from 'react'

import HogCard from './HogCard'

export default class Hogcards extends Component {
  render() {
    const hogcards = this.props.hogs.map(hog => <HogCard key={hog.name} hog={hog} /> )
    return (
      <div className="ui cards">
        {hogcards}
      </div>
    )
  }
}
