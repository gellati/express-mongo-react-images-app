import axios from "axios"

export const FETCH_POSTS = 'FETCH_POSTS'
export const INCREMENT_LIKES = 'INCREMENT_LIKES'

const postUrl = 'http://localhost:3000/posts'

export function fetchPosts() {
  const request = axios.get(postUrl)
  return function (dispatch) {
    request.then(( { data } ) => {
      dispatch({
        type: FETCH_POSTS,
        payload: data.data
      })
    })
  }
}

export function increment(i) {
  return {
    type: INCREMENT_LIKES,
    index: i
  }
}
