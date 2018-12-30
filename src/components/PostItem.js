import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {FaArrowDown, FaArrowUp, FaEdit, FaEraser, FaPlus} from 'react-icons/fa'
import {
    upVote,
    upVoteForComments,
    downVote,
    downVoteForComments,
    removePost,
    removeComment
} from '../actions'
import '../ReadableApp.js'

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
                        <div className="tooltip">
                            <span className="tooltiptext">New post.</span>
                            <Link to={`/new`} className="link-top">
                                <FaPlus className='react-icons'/>
                            </Link>
                        </div>
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
                                    <div className="col-75">
                                        <label><b>{item.commentCount}</b> comment(s).</label>
                                    </div>
                                    <div className="col-25">
                                        <div className="tooltip">
                                            <span className="tooltiptext">Vote down.</span>
                                            <FaArrowDown className='react-icons' onClick={()=>
                                                this.props.dispatch(downVote({
                                                    postToUpdateVoteScore: item,
                                                }))
                                            }/>
                                        </div>
                                        <b><label><small>{item.voteScore}</small></label></b>
                                        <div className="tooltip">
                                            <span className="tooltiptext">Vote up.</span>
                                            <FaArrowUp className='react-icons' onClick={()=>
                                                this.props.dispatch(upVote({
                                                    postToUpdateVoteScore: item,
                                                }))
                                            }/>
                                        </div>
                                        <div className="tooltip">
                                            <span className="tooltiptext">Edit post.</span>
                                            <FaEdit className='react-icons'/>
                                        </div>
                                        <div className="tooltip">
                                            <span className="tooltiptext">Delete post.</span>
                                            <FaEraser className='react-icons' onClick={()=>
                                                this.props.dispatch(removePost({
                                                    postToRemove: item,
                                                }))
                                            }/>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                {(item.comments)
                                    ? sortByVoteScore(item.comments).map((childItem)=>(
                                        <div key={childItem.id} className="row">
                                            <label>{childItem.body}</label>
                                            <div className="row">
                                                <div className="col-75">
                                                    <small><i><label>Written by <u>{childItem.author}</u> at {milisecToString(childItem.timestamp)}</label></i></small>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-25">
                                                    <div className="tooltip">
                                                        <span className="tooltiptext">Vote down.</span>
                                                        <FaArrowDown className='react-icons' onClick={()=>
                                                            this.props.dispatch(downVoteForComments({
                                                                commentToUpdateVoteScore: childItem,
                                                            }))
                                                        }/>
                                                    </div>
                                                    <b><label><small>{childItem.voteScore}</small></label></b>
                                                    <div className="tooltip">
                                                        <span className="tooltiptext">Vote up.</span>
                                                        <FaArrowUp className='react-icons' onClick={()=>
                                                            this.props.dispatch(upVoteForComments({
                                                                commentToUpdateVoteScore: childItem,
                                                            }))
                                                        }/>
                                                    </div>
                                                    <div className="tooltip">
                                                        <span className="tooltiptext">Edit comment.</span>
                                                        <FaEdit className='react-icons'/>
                                                    </div>
                                                    <div className="tooltip">
                                                        <span className="tooltiptext">Delete comment.</span>
                                                        <FaEraser className='react-icons' onClick={()=>
                                                            this.props.dispatch(removeComment({
                                                                commentToRemove: childItem,
                                                        }))}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
                                    ))
                                    : null
                                }
                            </form>
                        ))}                        
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