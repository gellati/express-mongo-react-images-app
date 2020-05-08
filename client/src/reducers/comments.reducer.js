import {
  FETCH_COMMENTS,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "../actions/comments.actions"

export function comments(state = {}, action) {
    switch(action.type) {
      case ADD_COMMENT:
        return {...state,
          [action.postId]: state[action.postId]
            ? state[action.postId].concat({text: action.comment, user: action.author})
            : [{text: action.comment, user: action.author}],
        }
      case REMOVE_COMMENT:
        return {
          ...state,
          [action.postId]: [
            ...state[action.postId].slice(0, action.i),
            ...state[action.postId].slice(action.i + 1)
          ]
        }
      case FETCH_COMMENTS: {
        return action.payload
      }
      default:
        return state;
    }
  }
