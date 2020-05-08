import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Link } from 'react-router-dom'

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
      </div>
    )
  }
}

export default hot(Main)
