import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <div className="top-links">
          <a>RSS</a>
          <a>FAQ</a>
          <a>Back to GitHub</a>
        </div>
      </nav>
    )
  }
}

export default Header
