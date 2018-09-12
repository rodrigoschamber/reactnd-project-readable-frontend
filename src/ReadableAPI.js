const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const category = 'react'

export const getAllCategories = () =>
  fetch(`${api}/categories`, {headers:{'Authorization':token}})
    .then(res => res.json())
    .then(data => data.categories)
    console.log(`${api}/categories`)

export const getPostsByCat = () =>
  fetch(`${api}/${category}/posts`, {headers:{'Authorization': token}})
    .then(res => res.json())
    .then(data => data.posts)
    console.log(`${api}/${category}/posts`)  

/*export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)

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