import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { setView } from '../actions'
import '../ReadableApp.js'

class CategoriesBar extends React.Component{
    render(){
        const categoriesToMap = this.props.category
        try{
            if (this.props.category.length > 0){
                return(
                    <div>
                        {categoriesToMap.map((item)=>(
                            <Link
                                key={item.name}
                                to={item.path}
                                className="link-top"
                                onClick={() => this.props.dispatch(
                                    setView({
                                        category: item.path,
                                    })
                                )}
                            >
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