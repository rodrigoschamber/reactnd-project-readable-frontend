import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import { loadPost, loadCategory, setView } from './actions'
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
        this.props.dispatch(loadPost({
          posts: postsToLoad,
        }))
      })
      this.props.dispatch(setView({category:"all"}))
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
            <MainPostItem/>
          )}/>
          <Route path="/redux" render={() => (
            <MainPostItem/>
          )}/>
          <Route path="/udacity" render={() => (
            <MainPostItem/>
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
