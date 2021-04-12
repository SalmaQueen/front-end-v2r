import React, { Component } from 'react'
import AddLists from './AddLists'
import EnterCode from './EnterCode'
import HomePage from './HomePage'

// import { Helmet } from 'react-helmet';

import {
    Switch,
    Route
  } from "react-router-dom";

export default class Main extends Component {
    render() {
        return (
            <div>
              
                {/* <Helmet>
                <style type="text/css">{`
                .btn-m{
                  height: 50px;
                  width: 100%;
                  border-radius:30px;
                  background: #ff5e14;
                  white-space: nowrap;
                
                  font-size: 20px;
                  color: white;
                  transition: all .2s ease-out, color .2s ease-out;
                  border: 0;
                  cursor: pointer;
                  font-weight: 400;
                  font-family: 'Poppins', sans-serif;
                  
                }

              

   
                  `}</style>
                    </Helmet> */}


                
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark">
          <ul className="navbar-nav m-auto mb-2 ">
          
            <li className="nav-item active">

              <Link className="nav-link btn btn-m mr-3" to="/make_listing">Add Lists</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link btn btn-m " to="/v2r_code">Enter V2R code</Link>
            </li>
           
          </ul>
        </nav> */}



                <Switch>
                <Route exact  path="/make_listing" component={AddLists}/>
          
          <Route  exact path="/v2r_code">
            <EnterCode />
          </Route>
        
        
        </Switch>


          
       <HomePage/>
            </div>
        )
    }
}
