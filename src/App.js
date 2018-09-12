import React, { Component } from 'react';
import * as ReadableAPI from './ReadableAPI'
import './App.css';

class App extends Component {
  render() {
    try{
      ReadableAPI.getAllCategories().then((categories) => {
        console.log(categories)
      })
      ReadableAPI.getPostsByCat().then((posts) => {
        console.log(posts)
      })
    }
    catch(error){
      console.log(error)
    }
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
