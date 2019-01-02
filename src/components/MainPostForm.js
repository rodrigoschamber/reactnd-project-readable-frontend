import React from 'react'
import { connect } from 'react-redux';
import { addPost } from '../actions'
import '../ReadableApp.js'

class MainPostForm extends React.Component{
    state = {
        title: "How to add a new post",
        author: "rsscss",
        body: "To add a new post just click on the submit button.",
        category:""
    };
    handleChangeTitle = this.handleChangeTitle.bind(this);
    handleChangeAuthor = this.handleChangeAuthor.bind(this);
    handleChangeBody = this.handleChangeBody.bind(this);
    handleChangeCategory = this.handleChangeCategory.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
    handleChangeTitle(event) {
        this.setState({
            title: event.target.value,
        });
    }
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
    handleChangeCategory(event) {
        this.setState({
            category: event.target.value,
        });
    }
    handleSubmit(event) {
        let newPost = {
            id: Math.random().toString(36).substr(-8),
            timestamp: Date.now(),
            title: this.state.title,
            body: this.state.body,
            author: this.state.author,
            category: this.state.category,
            voteScore: 0,
            deleted: false,
            commentCount: 0,
        }
        if (this.state.category!==""){
            this.props.dispatch(addPost({postToAdd: newPost}));
            alert('A new post was added successfully!');
            event.preventDefault();
        } else {
            alert('Ooops! Please select a category.');
        }
    }
    render(){    
        return(
            <div className="container">
                <form id="frmAddPost">
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
                            <select id="mySelect" onChange={this.handleChangeCategory}>
                                <option value="">Select a category:</option>
                                <option value="react">react</option>
                                <option value="redux">redux</option>
                                <option value="udacity">udacity</option>
                            </select>
                        </div>
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

export default connect(mapStateToProps)(MainPostForm);

  