import React, { Component } from 'react'
import Category from './Category' 
import RecentProperties from './RecentProperties'
import Verify from './Verify'
import Footer from '../Footer'
import Agent from './Agent'
import AboutUs from './AboutUs'

export default class Bedcrump extends Component {
    render() {
        return (
            <>
            
            <Category/>
            <RecentProperties />
            <RecentProperties />
            <RecentProperties />
            <Verify/>
         

            <Agent/>
            <AboutUs/>
            <Footer/>
                
            </>
        )
    }
}
