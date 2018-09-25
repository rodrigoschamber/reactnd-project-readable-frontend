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

/*

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)*/