import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReadableApp from './ReadableApp';
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import {
  UP_VOTE,
  DOWN_VOTE,
  UP_VOTE_FOR_COMMENTS,
  DOWN_VOTE_FOR_COMMENTS,
  ADD_POST,
  EDIT_POST,
  REMOVE_POST,
  ADD_COMMENT,
  EDIT_COMMENT,
  REMOVE_COMMENT,
} from './actions';
import * as ReadableAPI from './utils/ReadableAPI'

const updateServer = store => next => action => {
  let result = next(action)
  switch (action.type){
    case UP_VOTE:
      try{
        ReadableAPI.postUpVoteScore(action.postToUpdateVoteScore.id).then(alert('Voted!'))
      }
      catch(error){
        console.log(error, store.getState())
      }
    break
    case DOWN_VOTE:
      try{
        ReadableAPI.postDownVoteScore(action.postToUpdateVoteScore.id).then(alert('Voted!'))
      }
      catch(error){
        console.log(error, store.getState())
      }
    break
    case UP_VOTE_FOR_COMMENTS:
      try{
        ReadableAPI.postUpVoteScoreForComments(action.commentToUpdateVoteScore.id).then(alert('Voted!'))
      }
      catch(error){
        console.log(error, store.getState())
      }
    break
    case DOWN_VOTE_FOR_COMMENTS:
      try{
        ReadableAPI.postDownVoteScoreForComments(action.commentToUpdateVoteScore.id).then(alert('Voted!'))
      }
      catch(error){
        console.log(error, store.getState())
      }
    break
    case ADD_POST:
      try{
        ReadableAPI.addPost(action.postToAdd).then(alert('A new post was added successfully!'))
      }
      catch(error){
        console.log(error, store.getState())
      }
    break
    case EDIT_POST:
      try{
        console.log(action.postToEdit)
        //ReadableAPI.editPost(action.postToEdit)
      }
      catch(error){
        console.log(error, store.getState())
      }
    break
    case REMOVE_POST:
      try{
        ReadableAPI.deletePost(action.postToRemove.id).then(alert('Post removed successfully!'))
      }
      catch(error){
        console.log(error, store.getState())
      }
    break
    case ADD_COMMENT:
      try{
        console.log(action.commentToAdd)
        //ReadableAPI.addComment(action.commentToAdd)
      }
      catch(error){
        console.log(error, store.getState())
      }
    break
    case EDIT_COMMENT:
      try{
        console.log(action.commentToEdit)
        //ReadableAPI.editComment(id, action.commentToEdit)
      }
      catch(error){
        console.log(error, store.getState())
      }
    break
    case REMOVE_COMMENT:
      try{
        ReadableAPI.deleteComment(action.commentToRemove.id).then(alert('Comment removed successfully!'))
      }
      catch(error){
        console.log(error, store.getState())
      }
    break
    default:
      return null
  }
  return result
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware( updateServer )
  )
)
ReactDOM.render(
  <Provider store={store}>
    <ReadableApp/>    
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();