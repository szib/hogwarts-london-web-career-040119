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
    const picUrl = require('../hog-imgs/' + this.props.hog.name.toLowerCase().replace(/ /gi, '_') + '.jpg')
    return (
      <div className="ui raised card" onClick={this.toggle}>
        <div className="image">
          <img src={picUrl} />
        </div>
        <div className="content">
          <a className="header">{this.props.hog.name}</a>
        </div>
        {
          this.state.withDetails &&
          <div>Medal:{this.props.hog['highest medal achieved']}</div>
        }
      </div>
    )
  }
}
