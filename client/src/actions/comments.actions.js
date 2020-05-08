import axios from "axios"
import { get } from 'lodash'

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

const commentsUrl = 'http://localhost:3000/comments'

export function fetchComments() {
  const request = axios.get(commentsUrl)
  return function (dispatch) {
    request.then(( { data }) => {
      const payload = get(data, 'data[0]')
      dispatch({
        type: FETCH_COMMENTS,
        payload
      })
    })
  }
}

export function addComment(postId, author, comment) {
  return {
    type: ADD_COMMENT,
    postId,
    author,
    comment
  }
}

export function removeComment(postId, i){
  return {
    type: REMOVE_COMMENT,
    postId,
    i
  }
}
