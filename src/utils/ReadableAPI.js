const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)
  const headers = {
    Accept: "application/json",
    Authorization: token,
    "Content-Type": "application/json"
  }
  const category = 'react'
  
  export const getAllCategories = () =>
    fetch(`${api}/categories`, { headers })
      .then(res => res.json())
  
  export const getPostsByCat = () =>
    fetch(`${api}/${category}/posts`, { headers })
      .then(res => res.json())
  
  export const getAllPosts = () =>
    fetch(`${api}/posts`, { headers })
      .then(res => res.json()) 

  export const getCommentsById = (id) =>
    fetch(`${api}/posts/${id}/comments`, { headers })
      .then(res => res.json())
  
  export const postUpVoteScore = (id) =>
    fetch(`${api}/posts/${id}`, {
      method:'post',
      headers,
      body:JSON.stringify({
        option: 'upVote'
      })
    })
  
  export const postDownVoteScore = (id) =>
    fetch(`${api}/posts/${id}`, {
      method:'post',
      headers,
      body:JSON.stringify({
        option: 'downVote'
      })
    })

  export const postUpVoteScoreForComments = (id) =>
    fetch(`${api}/comments/${id}`, {
      method:'post',
      headers,
      body:JSON.stringify({
        option: 'upVote'
      })
    })
  
  export const postDownVoteScoreForComments = (id) =>
    fetch(`${api}/comments/${id}`, {
      method:'post',
      headers,
      body:JSON.stringify({
        option: 'downVote'
      })
    })
  
  export const addPost = (postToAdd) =>
    fetch(`${api}/posts`, {
      method:'post',
      headers,
      body:JSON.stringify({
        id: postToAdd.id,
        timestamp: postToAdd.timestamp,
        title: postToAdd.title,
        body: postToAdd.body,
        author: postToAdd.author,
        category: postToAdd.category,
      })
    })
  
  export const editPost = (postToEdit) =>
    fetch(`${api}/posts/${postToEdit.id}`, {
      method:'put',
      headers,
      body:JSON.stringify({
        title: postToEdit.title,
        body: postToEdit.body,
      })
    })
  
  export const deletePost = (id) =>
    fetch(`${api}/posts/${id}`, {
      method:'delete',
      headers,
    })
  
  export const addComment = (commentToAdd) =>
    fetch(`${api}/comments`, {
      method:'post',
      headers,
      body:JSON.stringify({
        id: commentToAdd.id,
        timestamp: commentToAdd.timestamp,
        body: commentToAdd.body,
        author: commentToAdd.author,
        parentId: commentToAdd.parentId,
      })
    })
  
  export const editComment = (commentToEdit) =>
    fetch(`${api}/comments/${commentToEdit.id}`, {
      method:'put',
      headers,
      body:JSON.stringify({
        timestamp: commentToEdit.timestamp,
        body: commentToEdit.body,
      })
    })

  export const deleteComment = (id) =>
    fetch(`${api}/comments/${id}`, {
      method:'delete',
      headers,
    })