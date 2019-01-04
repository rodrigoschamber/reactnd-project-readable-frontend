import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
import { addComment } from '../actions'
import '../ReadableApp.js'

class CommentForm extends React.Component{
    state = {
        author: "rsscss",
        body: "To add a new comment just click on the submit button.",
        ableToRedirect:"false",
    };
    static propTypes = {
        parentCategory: PropTypes.string.isRequired,
        parentId: PropTypes.string.isRequired,
        parentDeleted: PropTypes.bool.isRequired
    }
    handleChangeAuthor = this.handleChangeAuthor.bind(this);
    handleChangeBody = this.handleChangeBody.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
    handleChangeAuthor(event) {
        this.setState({
            author: event.target.value,
        });
    }
    handleChangeBody(event) {
        this.setState({
            body: event.target.value,
        });
    }
    handleSubmit(event) {
        let newComment = {
            id: Math.random().toString(36).substr(-8),
            parentId: this.props.parentId,
            timestamp: Date.now(),
            body: this.state.body,
            author: this.state.author,
            voteScore: 1,
            deleted: false,
            parentDeleted: this.props.parentDeleted,
        }
        if (this.state.body!==""){
            this.props.dispatch(addComment({commentToAdd: newComment}));
            event.preventDefault();
            this.setState({
                ableToRedirect: true,
            });    
        } else {
            alert('Ooops! There is something missing.');
        }
    }
    render(){
        if (this.state.ableToRedirect===true){
            return <Redirect 
                key={`/${this.props.parentCategory}/${this.props.parentId}`}
                to={`/${this.props.parentCategory}/${this.props.parentId}`}
            />
        }    
        return(
            <div className="container">
                <form id="frmAddComment">
                    <div className="row">
                        <div className="col-25">
                            <label>Author</label>
                        </div>
                        <div className="col-75">
                            <input
                                id="author"
                                name="author"
                                onChange={this.handleChangeAuthor}
                                placeholder="Author's name"
                                type="text"
                                value={this.state.author}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>New Comment</label>
                        </div>
                        <div className="col-75">
                            <textarea
                                id="comment"
                                name="comment"
                                onChange={this.handleChangeBody}
                                placeholder="Type your comment here"
                                type="text"
                                value={this.state.body}
                            />
                            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                        </div>
                    </div>
                </form>
            </div>      
        )
    }
}
function mapStateToProps(toProps){
    return toProps
}

export default connect(mapStateToProps)(CommentForm);