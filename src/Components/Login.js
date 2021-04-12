import React, { Component } from 'react';
// import './Login.scss'
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom'

class Login extends Component {
    render() {
        return (
          <>

                  <Helmet>
                <style type="text/css">{`
               .bg-display{
               background-color:blue;
               color:white;
               opacity:0.8;

              
                
              }
              body {
                background-color: rgb(222, 217, 251);
                background-image:url('https://images.pexels.com/photos/333837/pexels-photo-333837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
              }
            .wrapper{
              margin-top:5rem;
              padding:10%;
            }
            img{
              height:100%
            }
            
            
              

   
                  `}</style>
                    </Helmet>
                       
                      <div className="container">
                    <div className="row wrapper bg-display ">
       
                    <div className="col-md-12 text-center">

{/* 
            <Link to='/' >
              <img width={200} src={'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} className="mb-2"/>
            </Link> */}
          </div>
          <div className="col-md-6 centralize" >
            <img src={'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt="" width="100%" />
          </div>


          <div className="col-md-6 form-wrapper">
            <h2 className="page-title">Login</h2>
            <div className="form-group my-2">
              <label htmlFor="email" className="control-label">
                Email
              </label>
              <input
                type="email"
                name="email"
               
                className="form-control"
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="password" className="control-label">
                Password
              </label>
              <input
                type="password"
                name="password"
           
                className="form-control"
              />
            </div>
            <button
              className="btn btn-success submit my-2"
              
            >
              Sign in
            </button>
            <Link to="/register" id="registration-link" className="text-white">
              No account? Register
            </Link>
          </div>
        </div>
        </div>
          </>
          
        );
    }
}

export default Login;