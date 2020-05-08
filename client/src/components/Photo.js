import React from 'react'
import { bindActionCreators } from 'redux'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchComments } from '../actions/comments.actions'
import { increment } from '../actions/posts.actions'


class Photo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image: null,
      code: null,
      caption: null,
    }
  }

  componentDidMount() {
    const { post } = this.props
    if(post) {
      this.setState({
        display_src: require(`../../public/images/${post.display_src}`).default,
        code: post.code,
        likes: post.likes,
        caption: post.caption,
      })
    }
  }

  render() {
    const { i, comments } = this.props

    return (
      <>
      <figure key={i} className="grid-figure">
      <div className='grid-photo-wrap'>
      <Link to={`/view/${this.state.code}`}>
        <img className='grid-photo' src={this.state.display_src} alt={this.state.caption} />
      </Link>

        <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {/*
            <span key={this.state.likes} className="likes-heart">{this.state.likes}</span>
          */}
        </CSSTransitionGroup>

        </div>

        <figcaption>
        <p>{this.state.caption}</p>

        <div className="control-buttons">
        <button onClick={this.props.increment.bind(null,i)} className="likes">&hearts; {this.props.post.likes}</button>

        <Link to={`/view/${this.state.code}`} className="button">
        <span className="comment-count">
          <span className="speech-bubble"></span>
          {(comments[this.state.code] ? comments[this.state.code].length : 0)}
        </span>
        </Link>
        </div>

        </figcaption>

        </figure>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: bindActionCreators(fetchComments, dispatch),
    increment: bindActionCreators(increment, dispatch)
  }
}

Photo.propTypes = {
  post: PropTypes.object,
  i: PropTypes.number,
  comments: PropTypes.object,
  increment: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo)