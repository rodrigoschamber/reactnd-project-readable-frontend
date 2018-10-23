import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import { loadPosts, loadCategory } from './actions'
import CategoriesBar from './components/CategoriesBar'
import MainPostItem from './components/MainPostItem'
import * as ReadableAPI from './utils/ReadableAPI'
import './App.css';
//import MainPostForm from './components/MainPostForm'

class ReadableApp extends Component {
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
      <Router>
        <div className="ReadableApp">
          <h2>Readable App</h2> 
          <CategoriesBar/>
          <Route exact path="/" render={() => (
            <MainPostItem/>
          )}/>
          <Route path="/react" render={() => (
            <h1>1</h1>
          )}/>
          <Route path="/redux" render={() => (
            <h1>2</h1>
          )}/>
          <Route path="/udacity" render={() => (
            <h1>3</h1>
          )}/>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(toProps){
  return toProps
}

export default connect (mapStateToProps)(ReadableApp);
