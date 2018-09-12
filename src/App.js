import React, { Component } from 'react';
import * as ReadableAPI from './utils/ReadableAPI'
import './App.css';

class App extends Component {
  componentDidMount() {
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
  }
  render() {
    return (
      <div className="App">
      </div>
    )
  }
}

export default App;
