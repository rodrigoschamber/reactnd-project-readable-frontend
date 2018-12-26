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
  UP_VOTE_FOR_COMMENTS,
  DOWN_VOTE_FOR_COMMENTS,
  LOAD_CATEGORY,
  SET_VIEW,
} from '../actions'

function post (state={}, action){
  switch (action.type){
    case UP_VOTE:
      return state.map((postItem) => 
        postItem.id===action.postToUpdateVoteScore.id
        ?{...action.postToUpdateVoteScore,
          voteScore: action.postToUpdateVoteScore.voteScore + 1,
        }
        :postItem
      )
    case DOWN_VOTE:
      return state.map((postItem) => 
        postItem.id===action.postToUpdateVoteScore.id
        ?{...action.postToUpdateVoteScore,
          voteScore: action.postToUpdateVoteScore.voteScore - 1,
        }
        :postItem
      )
    case UP_VOTE_FOR_COMMENTS:
      return state.map((postItem) => 
        (postItem.id===action.commentToUpdateVoteScore.parentId)
        ? {...postItem,
          comments: postItem.comments.map((commentItem)=>(
            (commentItem.id===action.commentToUpdateVoteScore.id)
            ? {...commentItem,
              voteScore: commentItem.voteScore + 1
            }
            : commentItem  
          ))
        }        
        : postItem
      )
    case DOWN_VOTE_FOR_COMMENTS:
      return state.map((postItem) => 
      (postItem.id===action.commentToUpdateVoteScore.parentId)
      ? {...postItem,
        comments: postItem.comments.map((commentItem)=>(
          (commentItem.id===action.commentToUpdateVoteScore.id)
          ? {...commentItem,
            voteScore: commentItem.voteScore - 1
          }
          : commentItem  
        ))
      }        
      : postItem
    )
    case LOAD_POST:
      return action.posts
    case ADD_POST:
      return null
    case REMOVE_POST:
      return null
    case EDIT_POST:
      return null
    case LOAD_COMMENT:
      return state.map((postItem) => 
        (postItem.id===action.parentId)
        ?{...postItem,
          comments: action.comments,
        }
        :postItem)
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
function category (state={}, action){
  switch (action.type){
    case LOAD_CATEGORY:
      return action.category.categories.push({name:"all", path:""}) && 
      action.category.categories.map((categoryItem) =>
        (categoryItem !=="")
        ? {
          ...categoryItem,
        }
        : null
      )  
    default:
      return state
  }
}
function view (state={}, action){
  switch (action.type){
    case SET_VIEW:
      return action.category
    default:
      return state
  }
}
export default combineReducers({post, category, view})