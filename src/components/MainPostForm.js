import React from 'react'
import { connect } from 'react-redux';
import '../ReadableApp.js'

class MainPostForm extends React.Component{
    render(){
        return(
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-25">
                            <label>Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="title" placeholder="Type a title"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Author</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="name" placeholder="Type your name"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Subject</label>
                        </div>
                        <div className="col-75">
                            <textarea id="subject" name="body" placeholder="Type your post here"></textarea>
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
function mapStateToProps(toProps){
    return toProps
}

export default connect(mapStateToProps)(MainPostForm);

  