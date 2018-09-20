import React from 'react'
//import PropTypes from 'prop-types'
import '../App.js'

export default class MainPostItem extends React.Component{
    static propTypes = { 
        /*author:PropTypes.string.isRequired,
        body:PropTypes.string.isRequired,
        category:PropTypes.string.isRequired,
        commentCount:PropTypes.number.isRequired,
        deleted:PropTypes.bool.isRequired,
        id:PropTypes.string.isRequired,
        /*timestamp:PropTypes.string.isRequired,
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
                            <label>{this.props.title}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Author</label>
                        </div>
                        <div className="col-75">
                            <label>{this.props.author}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Subject</label>
                        </div>
                        <div className="col-75">
                            <label>{this.props.body}</label>
                        </div>
                    </div>
                </form>
            </div>      
        )
    }
}