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
      return Object.assign([...state], {[Object.keys(state).length]: action.postToAdd})
    case REMOVE_POST:
      return state.map((postItem) =>
      (postItem.id===action.postToRemove.id)
      ? {...postItem,
        deleted: true,
        }
        : postItem)
    case EDIT_POST:
      return state
    case LOAD_COMMENT:
      return state.map((postItem) => 
        (postItem.id===action.parentId)
        ?{...postItem,
          comments: action.comments,
        }
        :postItem)
    case ADD_COMMENT:
      return state
    case REMOVE_COMMENT:
      return state.map((postItem) =>
      (postItem.id===action.commentToRemove.parentId)
      ? {...postItem,
        comments: postItem.comments.map((commentItem)=>(
          (commentItem.id===action.commentToRemove.id)
          ? {...commentItem,
            deleted: true
          }
          : commentItem
        ))
        }
        : postItem
      ) 
    case EDIT_COMMENT:
      return state
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

export default combineReducers({post, category})