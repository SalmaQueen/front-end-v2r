import React, { Component } from 'react'
import image from './placeholder.svg'

export default class Image extends Component {
    render() {
        return (
                
    <div className="row">
        <div className="col-md-4 ">
        <img src={image} alt=""/>
        </div>

        <div className="col-md-4 ">
        <img src={image} alt=""/>
        </div>

        <div className="col-md-4 ">
        <img src={image} alt=""/>
        </div>
        

    </div>
        )
    }
}
