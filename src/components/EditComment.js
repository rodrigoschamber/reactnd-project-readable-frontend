import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { editComment } from '../actions';
import '../ReadableApp.js'

class EditComment extends React.Component{
    state = {
        id: this.props.id,
        body: this.props.parentBody,
        parentCategory: this.props.parentCategory,
        parentId: this.props.parentId,
        ableToRedirect:"false",
    };
    static propTypes = {
        id: PropTypes.string.isRequired,
        parentId: PropTypes.string.isRequired,
        parentBody: PropTypes.string.isRequired,
        parentCategory: PropTypes.string.isRequired,  
    }
    handleChangeBody = this.handleChangeBody.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
    componentDidMount() {
        this.setState({
            id: this.props.id,
            parentCategory: this.props.parentCategory,
            parentId: this.props.parentId,
        });
    }
    handleChangeBody(event) {
        this.setState({
            body: event.target.value,
        });
    }
    handleSubmit(event) {
        let editedComment = {
            id: this.state.id,
            body: this.state.body,
            parentId: this.state.parentId,
            timestamp: Date.now(),
        }
        this.props.dispatch(editComment({commentToEdit: editedComment}));
        event.preventDefault();
        this.setState({
            ableToRedirect: true,
        });
    }
    render(){
        if (this.state.ableToRedirect===true){
            return <Redirect 
                key={`/${this.state.parentCategory}/${this.state.parentId}`}
                to={`/${this.state.parentCategory}/${this.state.parentId}`}
            />
        }    
        return(
            <div className="container">
                <form id="frmEditPost">
                    <div className="row">
                        <div className="col-25">
                            <label>Subject</label>
                        </div>
                        <div className="col-75">
                            <textarea
                                id="body"
                                name="body"
                                onChange={this.handleChangeBody}
                                placeholder="Type your comment here"
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

export default connect(mapStateToProps)(EditComment);