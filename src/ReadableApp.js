import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import { loadPost, loadCategory, loadComment } from './actions'
import CategoriesBar from './components/CategoriesBar'
import MainPostItem from './components/MainPostItem'
import MainPostForm from './components/MainPostForm'
import PostItem from './components/PostItem'
import * as ReadableAPI from './utils/ReadableAPI'
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
          <Route exact path={`/new`} render={() => (
                <div><MainPostForm/></div>
          )}/>
          {(this.props.category.length > 0)
            ? this.props.category.map((item) => (
              <Route key={item.name} exact path={`/${item.path}`} render={() => (
                <MainPostItem setPath={item.path}/>
              )}/>
            ))
            : null
          }
          {(this.props.post.length > 0)
          ? this.props.post.map((item) => ( 
            <Route key={`/${item.category}/${item.id}`} exact path={`/${item.category}/${item.id}`} render={() => (
              <PostItem setId={item.id} setCategory={item.category}/>
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
