import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import Photo from './Photo'
import { fetchPosts, increment } from '../actions/posts.actions'
import { fetchComments } from '../actions/comments.actions'

class PhotoGrid extends React.Component {
  constructor(props){
    super(props)
    this.item = React.createRef()
  }

  handleSubmit(e) {
    e.preventDefault()
    // eslint-disable-next-line react/no-string-refs
    this.props.addItem(this.refs.item.value)
  }

  render() {
    const { data } = this.props.posts
    return (
      <div>
        {data &&
          <div className="photo-grid">
          {
            data.map((post,i) =>
              <Photo {...this.props} key={i} i={i} post={post} />
            )
          }
      </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
    fetchComments: bindActionCreators(fetchComments, dispatch),
    increment: bindActionCreators(increment, dispatch)
  }
}

PhotoGrid.propTypes = {
  posts: PropTypes.object,
  addItem: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid)