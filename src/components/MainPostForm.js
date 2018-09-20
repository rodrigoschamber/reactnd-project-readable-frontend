import React from 'react'
//import PropTypes from 'prop-types'
import '../App.js'

export default class MainPostForm extends React.Component{
    static propTypes = { 
        /*author:PropTypes.string.isRequired,
        body:PropTypes.string.isRequired,
        category:PropTypes.string.isRequired,
        commentCount:PropTypes.number.isRequired,
        deleted:PropTypes.bool.isRequired,
        id:PropTypes.string.isRequired,
        timestamp:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        voteScore:PropTypes.number.isRequired,*/       
    }
    
    render(){
        return(
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-25">
                            <label>Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Type a title"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Author</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Type your name"></input>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-25">
                            <label>Subject</label>
                        </div>
                        <div className="col-75">
                            <textarea id="subject" name="subject" placeholder="Type your post here"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit"></input>
                    </div>
                </form>
            </div>      
        )
    }
}