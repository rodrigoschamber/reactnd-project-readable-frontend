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