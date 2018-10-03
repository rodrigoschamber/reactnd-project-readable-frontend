import React from 'react'
import { connect } from 'react-redux';
import '../ReadableApp.js'

class MainPostItem extends React.Component{
    render(){
        let showingPosts = this.props.post
        try{
            if (this.props.post.length > 0){
                return(
                    <div className="container">
                        {showingPosts.map((item)=>(
                            <form key={item.id}>
                                <div className="row">
                                    <div className="col-25">
                                        <label>Title</label>
                                    </div>
                                    <div className="col-75">
                                        <label>{item.title}</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label>Author</label>
                                    </div>
                                    <div className="col-75">
                                        <label>{item.author}</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label>Subject</label>
                                    </div>
                                    <div className="col-75">
                                        <label>{item.body}</label>
                                    </div>
                                </div>
                            </form>
                        ))}
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