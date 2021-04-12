import React, { Component } from 'react';
// import './Nav.css'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';
// import logo from './Images'

// <img src={logo} width={10}/>

class Navbar extends Component {
    render() {
        return (
          <>

            <Helmet>
            <style type="text/css">{`
             .bg-display{
  
              // overflow: auto;
              background-color: blue;
              color:white;
          
          }
         
           .edit{
             background-color:rgb(248, 103, 6);
             opacity:0.9;
           }
           .btn-w{
            // height: 70px;
            width: 100%;
           
            background: #ff5e14;
            white-space: nowrap;
            border-radius:30px;
            font-size: 20px;
            color: #fff;
            transition: all .2s ease-out, color .2s ease-out;
            border: 0;
            cursor: pointer;
            font-weight: 400;
            font-family: 'Poppins', sans-serif;
          }



              `}</style>
                </Helmet>
              
        

          <nav className="navbar navbar-expand-lg navbar-light bg-display text-white">
          <div className="container">
          <Link className="navbar-brand text-white " to="/">
            
          
            Vacant2Rent</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link text-white " to="/view_listing">View Listing</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-white" to="/list_property">List Property</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-white" to="/blog">Blog</Link>
                </li>
               
                {/* <li className="nav-item">
                <Link className="nav-link text-white" to="/search_property">Search Property</Link>
                </li> */}
                <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact us</Link>
                </li>

                {/* <li className="nav-item">
                <Link className="nav-link text-white" to="/register">Register</Link>
                </li> */}

                <li className="nav-item">
                <Link className="nav-link text-white btn btn-w " to="/login">Sign in</Link>
                </li>
              </ul>

             
            </div>
          </div>
        </nav>
        </>
          
        );
    }
}

export default Navbar;