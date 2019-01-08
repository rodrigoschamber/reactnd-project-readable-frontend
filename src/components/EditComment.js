import React from 'react'
import { connect } from 'react-redux';
import '../ReadableApp.js'
class EditComment extends React.Component{
    render(){
        return (<div>Edit comment.</div>)
    }
}
function mapStateToProps(toProps){
    return toProps
}

export default connect(mapStateToProps)(EditComment);