import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {FaArrowDown, FaArrowUp, FaEdit, FaEraser, FaPlus} from 'react-icons/fa'
import { upVote, downVote, removePost } from '../actions'
import '../ReadableApp.js'

class MainPostItem extends React.Component{
    static propTypes = {
        setPath: PropTypes.string.isRequired, 
    }
    render(){
        let showingPosts = this.props.post
        let currentView = this.props.setPath
        function milisecToString(toString){
            const converted = new Date(toString)
            return JSON.stringify(converted)
        }
        function sortByVoteScore(toSort){
            let sortedPosts = toSort.sort((a,b)=>{return b.voteScore - a.voteScore})
            return sortedPosts
        }
        function filterByCategory(toFilter, getView){
            if (getView!==""){
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
                                        <div className="tooltip">
                                            <span className="tooltiptext">More info.</span>
                                            <Link to={`/${item.category}/${item.id}`} className="link-top">
                                                <b><label className='link-to-cat'>{item.title}</label></b>
                                            </Link>
                                        </div>
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

export default connect(mapStateToProps)(MainPostItem);