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
  SET_DASHBOARD_TO_ADD_COMMENT,
  SET_DASHBOARD_TO_EDIT_POST,
  SET_DASHBOARD_TO_EDIT_COMMENT,
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
      return action.posts.map((postToLoad) => 
        (postToLoad.id !== "")
          ? (postToLoad.commentCount===0)
            ? {...postToLoad,
                comments:[],
            }
            : {...postToLoad}
          : null
      )
    case ADD_POST:
      return Object.assign([...state], {[Object.keys(state).length]: action.postToAdd})
    case REMOVE_POST:
      return state.filter((postItem) =>
      (postItem.id===action.postToRemove.id)
      ? null
        : postItem)
    case EDIT_POST:
      return state.map((postItem)=>
        (postItem.id===action.postToEdit.id)
          ? {...postItem,
              title: action.postToEdit.title,
              body: action.postToEdit.body,
            }
          : {
            postItem,
          }
      )
    case LOAD_COMMENT:
      return state.map((postItem) => 
        (postItem.id===action.parentId)
          ?{...postItem,
            comments: action.comments,
          }
          :{
            ...postItem,
          }
      )
    case ADD_COMMENT:
      return state.map((postItem) =>
        (postItem.id===action.commentToAdd.parentId)
        ? {...postItem,
          commentCount: postItem.commentCount + 1,
          comments: Object.assign(
            [...postItem.comments], {[Object.keys(postItem.comments).length]: action.commentToAdd}
          ),
        }
        : postItem
      )
    case REMOVE_COMMENT:
      return state.map((postItem) =>
        (postItem.id===action.commentToRemove.parentId)
        ? {...postItem,
          commentCount: postItem.commentCount - 1,
          comments: postItem.comments.filter((commentItem)=>(
            (commentItem.id===action.commentToRemove.id)
            ? null
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
function dashboard (state={}, action){
  switch (action.type){
    case SET_DASHBOARD_TO_EDIT_POST:
      return action.postToEdit
    case SET_DASHBOARD_TO_ADD_COMMENT:
      return action.commentToAdd
    case SET_DASHBOARD_TO_EDIT_COMMENT:
      return action.commentToEdit
    default:
      return state
  }
}

export default combineReducers({post, category, dashboard})