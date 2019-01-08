import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotFound extends Component {
    render() {
        return (
            <div  className="container">
                <p><b>Error 404 - Not found.</b></p>
            </div>
        )
    }
}
function mapStateToProps(toProps){
    return toProps
}
  
export default connect (mapStateToProps)(NotFound);