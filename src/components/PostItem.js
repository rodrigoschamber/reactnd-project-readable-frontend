import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {FaArrowDown, FaArrowUp} from 'react-icons/fa'
import { upVote, upVoteForComments, downVote, downVoteForComments } from '../actions'
import '../ReadableApp.js'
//import * as FontAwesome from 'react-icons/fa'

class PostItem extends React.Component{
    static propTypes = {
        setId: PropTypes.string.isRequired,
        setCategory: PropTypes.string.isRequired,  
    }
    render(){
        let showingPosts = this.props.post.filter((item)=>(item.id===this.props.setId))
        let currentView = this.props.setCategory
        function milisecToString(toString){
            const converted = new Date(toString)
            return JSON.stringify(converted)
        }
        function sortByVoteScore(toSort){
            let sortedPosts = toSort.sort((a,b)=>{return b.voteScore - a.voteScore})
            return sortedPosts
        }
        function filterByCategory(toFilter, getView){
            if (getView!=="all"){
                let filteredPosts = toFilter.filter((item)=>{
                    return item.category===getView
                })
                return filteredPosts
            }
            else {
                let filteredPosts = toFilter.filter((item)=>{
                    return item.category!==""
                })
                return filteredPosts
            }
        }
        try{
            if (this.props.post.length > 0){
                return(
                    <div className="container">
                        <small>All posts are sorted by vote score.</small>
                        {sortByVoteScore(filterByCategory(showingPosts, currentView)).map((item)=>(
                            <form key={item.id}>
                                <hr/>
                                <div className="row">
                                    <div className="col-75">
                                        <b><label>{item.title}</label></b>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-75">
                                        <p><label>{item.body}</label></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-75">
                                        <small><i><label>Written by <u>{item.author}</u> at {milisecToString(item.timestamp)}.</label></i></small>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label><b>{item.commentCount}</b> comment(s).</label>
                                    </div>
                                    <div className="col-25">
                                        <FaArrowDown className='react-icons' onClick={()=>
                                            this.props.dispatch(downVote({
                                                postToUpdateVoteScore: item,
                                            }))
                                        }/>
                                        <b><label><small>{item.voteScore}</small></label></b>
                                        <FaArrowUp className='react-icons' onClick={()=>
                                            this.props.dispatch(upVote({
                                                postToUpdateVoteScore: item,
                                            }))
                                        }/>
                                    </div>
                                </div>
                                <hr/>
                                {(item.comments)
                                    ? item.comments.map((childItem)=>(
                                        <div key={childItem.id} className="row">
                                            <label>{childItem.body}</label>
                                            <div className="row">
                                                <div className="col-75">
                                                    <small><i><label>Written by <u>{childItem.author}</u> at {milisecToString(childItem.timestamp)}</label></i></small>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-25">
                                                    <FaArrowDown className='react-icons' onClick={()=>
                                                        this.props.dispatch(downVoteForComments({
                                                            commentToUpdateVoteScore: childItem,
                                                        }))
                                                    }/>
                                                    <b><label><small>{childItem.voteScore}</small></label></b>
                                                    <FaArrowUp className='react-icons' onClick={()=>
                                                        this.props.dispatch(upVoteForComments({
                                                            commentToUpdateVoteScore: childItem,
                                                        }))
                                                    }/>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
                                    ))
                                    : null
                                }
                            </form>
                        ))}                        
                        <small>Click in the post's title for detailed information.</small>
                    </div>
                )
            }
            else return null
        }
        catch(error){console.log(error)}
    }
}
function mapStateToProps(toProps){
    return toProps
}

export default connect(mapStateToProps)(PostItem);