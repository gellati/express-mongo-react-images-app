import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchComments, removeComment, addComment } from '../actions/comments.actions'

class Comments extends React.Component{
  constructor(props){
    super(props)
    this.author = React.createRef()
    this.commentForm = React.createRef()
    this.comment = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderComment = this.renderComment.bind(this)
  }

  componentDidMount() {
    this.props.fetchComments()
  }

  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={
              () => this.props.removeComment(
                this.props.match.params.postId,
                i
              )
          }
          >
            &times;
          </button>
        </p>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addComment(
      this.props.match.params.postId,
      this.author.current.value,
      this.comment.current.value
    )
  }

  render() {
    const comments = this.props.comments[this.props.match.params.postId] || []
    return (
      <div className="comments">
        {comments.map(this.renderComment)}
        <form onSubmit={this.handleSubmit} ref={this.commentForm} className="comment-form">
          <input type="text" ref={this.author} placeholder="author"/>
          <input type="text" ref={this.comment} placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

Comments.propTypes = {
  comments: PropTypes.object,
  match: PropTypes.object,
  addComment: PropTypes.func,
  removeComment: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
  return {
    fetchComments,
    removeComment: bindActionCreators(removeComment, dispatch),
    addComment: bindActionCreators(addComment, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)