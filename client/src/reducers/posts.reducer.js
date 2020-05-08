import {
  FETCH_POSTS,
  INCREMENT_LIKES
} from '../actions/posts.actions'

export function posts(state = {data: []}, action) {
  switch (action.type) {
    case INCREMENT_LIKES : {
    const i = action.index
    // return object in order not to change data format
    return { data: [
      ...state.data.slice(0, i),
      {...state.data[i], likes: state.data[i].likes + 1 },
      ...state.data.slice(i + 1)
    ]}
  }
  case FETCH_POSTS: {
      return Object.assign({}, state, { data: action.payload })
  }
  default:
    return state
  }
}
