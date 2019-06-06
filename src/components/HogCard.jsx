import React, { Component } from 'react'

export default class HogCard extends Component {
  state = {
    withDetails: false
  }

  toggle = () => {
    this.setState({
      withDetails: !this.state.withDetails
    })
  }

  render() {
    const { hog } = this.props
    const picUrl = require('../hog-imgs/' + hog.name.toLowerCase().replace(/ /gi, '_') + '.jpg')
    const ratio = hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    return (
      <div className="ui raised card" onClick={this.toggle}>
        <div className="image">
          <img src={picUrl} alt={hog.name} />
        </div>
        <div className="content">
          <a className="header">{hog.name}</a>
        </div>
        {
          this.state.withDetails &&
          <div className='extra content'>
            <div className="text-bold">Medal: {hog['highest medal achieved']}</div>
            <hr />
            <div>Weight ratio to some random fridge: {ratio}</div>
            <hr />
            <div>{hog.greased ? 'Greased' : 'Not greased'}</div>
          </div>
        }
      </div>
    )
  }
}
