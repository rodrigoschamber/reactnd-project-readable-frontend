export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const UP_VOTE = 'UP_VOTE'
export const DOWN_VOTE = 'DOWN_VOTE'

export function addPost ({ id, parentid, title, author, date, body, score, deleted, parentdeleted }) {
  return {
    type: ADD_POST,
    id,
    parentid,
    title,
    author,
    date,
    body,
    score,
    deleted,
    parentdeleted,
  }
}

export function removePost ({ id, parentid, deleted, parentdeleted }) {
  return {
    type: REMOVE_POST,
    id,
    parentid,
    deleted,
    parentdeleted,
  }
}

export function editPost ({ id, parentid, date, body, deleted, parentdeleted }) {
  return {
    type: EDIT_POST,
    id,
    parentid,
    date,
    body,
    deleted,
    parentdeleted,
  }
}

export function addComment ({ id, parentid, title, author, date, body, score, deleted, parentdeleted }) {
  return {
    type: ADD_COMMENT,
    id,
    parentid,
    title,
    author,
    date,
    body,
    score,
    deleted,
    parentdeleted,
  }
}

export function removeComment ({ id, parentid, deleted, parentdeleted }) {
  return {
    type: REMOVE_COMMENT,
    id,
    parentid,
    deleted,
    parentdeleted,
  }
}

export function editComment ({ id, parentid, date, body, deleted, parentdeleted }) {
  return {
    type: EDIT_COMMENT,
    id,
    parentid,
    date,
    body,
    deleted,
    parentdeleted,
  }
}

export function upVote ({ id, parentid, score, deleted, parentdeleted }) {
  return {
    type: UP_VOTE,
    id,
    parentid,
    score,
    deleted,
    parentdeleted,
  }
}

export function downVote ({ id, parentid, score, deleted, parentdeleted }) {
  return {
    type: DOWN_VOTE,
    id,
    parentid,
    score,
    deleted,
    parentdeleted,
  }
}