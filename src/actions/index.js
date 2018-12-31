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

export function editPost ({ posts }) {
  return {
    type: EDIT_POST,
    posts,
  }
}

export function loadComment({comments, parentId}){
  return {
    type: LOAD_COMMENT,
    comments,
    parentId,
  }
}

export function addComment ({ comments }) {
  return {
    type: ADD_COMMENT,
    comments,
  }
}

export function removeComment ({ commentToRemove }) {
  return {
    type: REMOVE_COMMENT,
    commentToRemove,
  }
}

export function editComment ({ comments }) {
  return {
    type: EDIT_COMMENT,
    comments,
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