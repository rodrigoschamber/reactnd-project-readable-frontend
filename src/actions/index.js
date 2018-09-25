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
export const LOAD_CATEGORY = 'LOAD_CATEGORY'

export function loadPosts({posts}){
  return {
    type: LOAD_POST,
    posts,
  }
}
export function addPost ({ posts }) {
  return {
    type: ADD_POST,
    posts,
  }
}

export function removePost ({ posts }) {
  return {
    type: REMOVE_POST,
    posts,
  }
}

export function editPost ({ posts }) {
  return {
    type: EDIT_POST,
    posts,
  }
}

export function loadComment({comments}){
  return {
    type: LOAD_COMMENT,
    comments,
  }
}

export function addComment ({ comments }) {
  return {
    type: ADD_COMMENT,
    comments,
  }
}

export function removeComment ({ comments }) {
  return {
    type: REMOVE_COMMENT,
    comments,
  }
}

export function editComment ({ comments }) {
  return {
    type: EDIT_COMMENT,
    comments,
  }
}

export function upVote ({ posts }) {
  return {
    type: UP_VOTE,
    posts,
  }
}

export function downVote ({ posts }) {
  return {
    type: DOWN_VOTE,
    posts,
  }
}
export function loadCategory ({ category }) {
  return {
    type: LOAD_CATEGORY,
    category,
  }
}