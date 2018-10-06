import React from 'react'
import { connect } from 'react-redux';
import '../ReadableApp.js'
import {FaArrowDown, FaArrowUp, FaCube} from 'react-icons/fa'
//import * as FontAwesome from 'react-icons/fa'
class MainPostItem extends React.Component{
    render(){
        let showingPosts = this.props.post
        function milisecToString(toString){
            const converted = new Date(toString)
            return JSON.stringify(converted)
        }
        function sortByVoteScore(toSort){
            let sortedPosts = toSort.sort((a,b)=>{return b.timestamp - a.timestamp})
            return sortedPosts
        }
        try{
            if (this.props.post.length > 0){
                return(
                    <div className="container">
                        <small>All posts are sorted by timestamp.</small>
                        {sortByVoteScore(showingPosts) && showingPosts.map((item)=>(
                            <form key={item.id}>
                                <hr/>
                                <div className="row">
                                    <div className="col-75">
                                        <FaCube className='react-icons' onClick={null}/><b><label>{item.title}</label></b>
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
                                        <FaArrowDown className='react-icons' onClick={null}/>
                                        <b><label><small>{item.voteScore}</small></label></b>
                                        <FaArrowUp className='react-icons' onClick={null}/>
                                    </div>
                                </div>
                                <hr/>
                            </form>
                        ))}
                        <small>*Click in the post's title for detailed information.</small>
                    </div>
                )
            }
            else {return null}
        }
        catch(error){console.log(error)}
    }
}
function mapStateToProps(toProps){
    return toProps
}

export default connect(mapStateToProps)(MainPostItem);