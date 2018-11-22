import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import { loadPost, loadCategory, loadComment, setView } from './actions'
import CategoriesBar from './components/CategoriesBar'
import MainPostItem from './components/MainPostItem'
import PostItem from './components/PostItem'
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
        if(postsToLoad.length > 0){
          postsToLoad.map((item)=>(
            (item.commentCount > 0)
            ?ReadableAPI.getCommentsById(item.id).then((commentsToLoad) => {
              this.props.dispatch(loadComment({
                comments: commentsToLoad,
                parentId: item.id,
              }))
            })
            : null   
          ))
        }
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
            <MainPostItem setPath="all"/>
          )}/>
          {this.props.category.length > 0
            ? this.props.category.map((item)=>(
              <Route path={`/${item.path}`} render={() => (
                <MainPostItem setPath={item.path}/>
              )}/>
            ))
            : null
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps(toProps){
  return toProps
}

export default connect (mapStateToProps)(ReadableApp);
