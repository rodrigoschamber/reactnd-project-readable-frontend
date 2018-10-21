import { combineReducers } from 'redux'

import {
  LOAD_POST,
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  LOAD_COMMENT,
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  UP_VOTE,
  DOWN_VOTE,
  LOAD_CATEGORY,
} from '../actions'

function post (state={}, action){
  switch (action.type){
    case LOAD_POST:
      return action.posts
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
    case LOAD_COMMENT:
      return null
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
      return {
        [action.posts.voteScore]: action.posts.voteScore + 1,
        ...state,
      }
    case DOWN_VOTE:
      return {
        [action.posts.voteScore]: action.posts.voteScore - 1,
        ...state
      }
    default:
      return state
  }
}
function category (state={}, action){
  switch (action.type){
    case LOAD_CATEGORY:
      return action.category.categories
    default:
      return state
  }
}
export default combineReducers({post, comment, vote, category})