import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import * as ReadableAPI from './utils/ReadableAPI'
import MainPostItem from './components/MainPostItem'
//import MainPostForm from './components/MainPostForm'
import { loadPosts, loadCategory } from './actions'
import { connect } from 'react-redux';
import './App.css';

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
      <div className="ReadableApp">
        <h2>Readable App </h2>
        <small>{Date()}</small>
        <Route exact path="/" render={() => (
          <MainPostItem/>
        )}/>
      </div>
    )
  }
}

function mapStateToProps(toProps){
  return toProps
}

export default connect (mapStateToProps)(ReadableApp);
