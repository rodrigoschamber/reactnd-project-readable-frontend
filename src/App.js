import React, { Component } from 'react';
import * as ReadableAPI from './utils/ReadableAPI'
import MainPostItem from './components/MainPostItem'
import MainPostForm from './components/MainPostForm'
import { loadPosts } from './actions'
import './App.css';

class App extends Component {
  state = {
    posts: null,
    comments: null,
    categories: null,
  }
  componentDidMount() {
    const {store}=this.props
    store.subscribe(() => {
      this.setState(() => ({
        posts: store.getState()
      }))
    })
    try{
      ReadableAPI.getAllCategories().then((categoriesToLoad) => {
        console.log(categoriesToLoad)
      })
      ReadableAPI.getAllPosts().then((postsToLoad) => {
        this.props.store.dispatch(loadPosts({
          posts: postsToLoad,
        }))
      })
    }
    catch(error){
      console.log(error)
    }
  }
  render() {
    return (
      <div className="App">
        <MainPostForm></MainPostForm>
        <MainPostItem></MainPostItem>
      </div>
    )
  }
}

export default App;
