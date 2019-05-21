import React, { Component } from 'react'

class CatClass extends Component {
  render() {
    return (
      <li>
        <img className="image-area" src={this.props.src} />
        <section className="caption">
          <p>{this.props.id}</p>
          <div className="name-pic">
            <p>
              the <em>{this.props.name}</em> by
            </p>
            <img src={this.props.author} />
          </div>
        </section>
      </li>
    )
  }
}

export default CatClass
