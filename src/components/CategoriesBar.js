import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import '../ReadableApp.js'

class CategoriesBar extends React.Component{
    render(){
        const categoriesToMap = this.props.category
        try{
            if (this.props.category.length > 0){
                return(
                    <div>
                        <Link to="/" className="link-top">
                            <label className="link-to-cat">| all |</label>
                        </Link>
                        {categoriesToMap.map((item)=>(
                            <Link  key={item.name} to={item.path} className="link-top">
                                <label className="link-to-cat">| {item.name} |</label>
                            </Link>
                        ))}
                    </div>
                )
            }
            else return null
        }
        catch(error){console.log(error)}
    }
}

function mapStateToProps(toProps){
    return toProps
}

export default connect(mapStateToProps)(CategoriesBar);