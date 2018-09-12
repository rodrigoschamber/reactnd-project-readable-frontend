import { combineReducers } from 'redux'

import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  UP_VOTE,
  DOWN_VOTE,
} from '../actions'

function post (state={}, action){
  switch (action.type){
    case ADD_POST:
      return null
    case REMOVE_POST:
      return null
    case EDIT_POST:
      return null
    default:
      return state
  }
}
function comment (state={}, action){
  switch (action.type){
    case ADD_COMMENT:
      return null
    case REMOVE_COMMENT:
      return null
    case EDIT_COMMENT:
      return null
    default:
      return state
  }
}
function vote (state={}, action){
  switch (action.type){
    case UP_VOTE:
      return null
    case DOWN_VOTE:
      return null
    default:
      return state
  }
}
export default combineReducers({post, comment, vote})