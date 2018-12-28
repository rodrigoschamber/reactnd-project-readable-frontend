import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReadableApp from './ReadableApp';
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import { UP_VOTE, DOWN_VOTE, UP_VOTE_FOR_COMMENTS, DOWN_VOTE_FOR_COMMENTS } from './actions';
import * as ReadableAPI from './utils/ReadableAPI'

const updateServer = store => next => action => {
  let result = next(action)
  switch (action.type){
    case UP_VOTE:
      try{
        ReadableAPI.postUpVoteScore(action.postToUpdateVoteScore.id)
      }
      catch(error){
        console.log(error, store.getState())
      }
    break
    case DOWN_VOTE:
      try{
        ReadableAPI.postDownVoteScore(action.postToUpdateVoteScore.id)
      }
      catch(error){
        console.log(error, store.getState())
      }
    break
    case UP_VOTE_FOR_COMMENTS:
      try{
        ReadableAPI.postUpVoteScoreForComments(action.commentToUpdateVoteScore.id)
      }
      catch(error){
        console.log(error, store.getState())
      }
    break
    case DOWN_VOTE_FOR_COMMENTS:
      try{
        ReadableAPI.postDownVoteScoreForComments(action.commentToUpdateVoteScore.id)
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