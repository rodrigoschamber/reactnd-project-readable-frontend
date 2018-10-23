import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReadableApp from './ReadableApp';
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ReadableApp/>    
    </Provider>
  </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();