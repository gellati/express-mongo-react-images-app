import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Photo from './Photo'
import Comments from './Comments'

class Single extends React.Component {
  render() {
    const i = this.props.posts.data.findIndex((post) =>
      post.code === this.props.match.params.postId)
    return (
      <div className="single-photo">
        <Photo key={i} i={i} post={this.props.posts.data[i]} {...this.props} />
        <Comments {...this.props} postId={i} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

Single.propTypes = {
  posts: PropTypes.object,
  match: PropTypes.object
}

export default connect(mapStateToProps)(Single)
