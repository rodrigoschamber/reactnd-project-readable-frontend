import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { editPost } from '../actions';
import '../ReadableApp.js'

class EditPost extends React.Component{
    state = {
        id: this.props.parentId,
        title: this.props.parentTitle,
        body: this.props.parentBody,
        ableToRedirect:"false",
    };
    static propTypes = {
        parentTitle: PropTypes.string.isRequired,
        parentBody: PropTypes.string.isRequired,  
    }
    handleChangeTitle = this.handleChangeTitle.bind(this);
    handleChangeBody = this.handleChangeBody.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
    componentDidMount() {
        this.setState({
            id: this.props.parentId,
        });
    }
    handleChangeTitle(event) {
        this.setState({
            title: event.target.value,
        });
    }
    handleChangeBody(event) {
        this.setState({
            body: event.target.value,
        });
    }
    handleSubmit(event) {
        let editedPost = {
            id: this.state.id,
            title: this.state.title,
            body: this.state.body,
        }
        this.props.dispatch(editPost({postToEdit: editedPost}));
        event.preventDefault();
        this.setState({
            ableToRedirect: true,
        });
    }
    render(){
        if (this.state.ableToRedirect===true){
            return <Redirect key="/" to='/'/>
        }    
        return(
            <div className="container">
                <form id="frmEditPost">
                    <div className="row">
                        <div className="col-25">
                            <label>Title</label>
                        </div>
                        <div className="col-75">
                            <input
                                id="title"
                                name="title"
                                onChange={this.handleChangeTitle}
                                placeholder="Post's title"
                                type="text"  
                                value={this.state.title}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Subject</label>
                        </div>
                        <div className="col-75">
                            <textarea
                                id="body"
                                name="body"
                                onChange={this.handleChangeBody}
                                placeholder="Type your post here"
                                type="text"
                                value={this.state.body}
                            />
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col-25b">
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

export default connect(mapStateToProps)(EditPost);
