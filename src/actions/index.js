export const LOAD_POST = 'LOAD_POST'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const LOAD_COMMENT = 'LOAD_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const UP_VOTE = 'UP_VOTE'
export const DOWN_VOTE = 'DOWN_VOTE'
export const UP_VOTE_FOR_COMMENTS = 'UP_VOTE_FOR_COMMENTS'
export const DOWN_VOTE_FOR_COMMENTS = 'DOWN_VOTE_FOR_COMMENTS'
export const LOAD_CATEGORY = 'LOAD_CATEGORY'
export const SET_DASHBOARD_TO_ADD_COMMENT = 'SET_DASHBOARD_TO_ADD_COMMENT'

export function loadPost({posts}){
  return {
    type: LOAD_POST,
    posts,
  }
}
export function addPost ({ postToAdd }) {
  return {
    type: ADD_POST,
    postToAdd,
  }
}

export function removePost ({ postToRemove }) {
  return {
    type: REMOVE_POST,
    postToRemove,
  }
}

export function editPost ({ postToEdit }) {
  return {
    type: EDIT_POST,
    postToEdit,
  }
}

export function loadComment({comments, parentId}){
  return {
    type: LOAD_COMMENT,
    comments,
    parentId,
  }
}

export function addComment ({ commentToAdd }) {
  return {
    type: ADD_COMMENT,
    commentToAdd,
  }
}

export function removeComment ({ commentToRemove }) {
  return {
    type: REMOVE_COMMENT,
    commentToRemove,
  }
}

export function editComment ({ commentToEdit }) {
  return {
    type: EDIT_COMMENT,
    commentToEdit,
  }
}

export function upVote ({ postToUpdateVoteScore }) {
  return {
    type: UP_VOTE,
    postToUpdateVoteScore,
  }
}

export function downVote ({ postToUpdateVoteScore }) {
  return {
    type: DOWN_VOTE,
    postToUpdateVoteScore,
  }
}

export function upVoteForComments ({ commentToUpdateVoteScore }) {
  return {
    type: UP_VOTE_FOR_COMMENTS,
    commentToUpdateVoteScore,
  }
}

export function downVoteForComments ({ commentToUpdateVoteScore }) {
  return {
    type: DOWN_VOTE_FOR_COMMENTS,
    commentToUpdateVoteScore,
  }
}

export function loadCategory ({ category }) {
  return {
    type: LOAD_CATEGORY,
    category,
  }
}

export function setDashBoardToAddComment({commentToAdd}){
  return {
    type: SET_DASHBOARD_TO_ADD_COMMENT,
    commentToAdd,
  }
}