import React, { Component } from 'react';
import * as ReadableAPI from './utils/ReadableAPI'
import MainPostItem from './components/MainPostItem'
import MainPostForm from './components/MainPostForm'
import { loadPosts, loadCategory } from './actions'
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  componentDidMount() {
    try{
      ReadableAPI.getAllCategories().then((categoriesToLoad) => {
        this.props.dispatch(loadCategory({
          category: categoriesToLoad,
        }))
      })
      ReadableAPI.getAllPosts().then((postsToLoad) => {
        this.props.dispatch(loadPosts({
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

function mapStateToProps(toProps){
  return toProps
}

export default connect (mapStateToProps)(App);
