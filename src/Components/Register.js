import React, { Component } from 'react';
// import './Register.scss'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';


class Register extends Component {
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
              img{
                height:100%
              }
              body {
                background-color: rgb(222, 217, 251);
                background-image:url('https://images.pexels.com/photos/333837/pexels-photo-333837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
              }
            .wrapper{
              margin-top:5rem;
              padding:10%;
            }
            
            
              

   
                  `}</style>
                    </Helmet>
                    <div className="container">
                    <div className="row wrapper bg-display text-white">
          <div className="col-md-12 text-center">
            {/* <Link to='/' className="mb-2">
              <Logo width={200}/>
            </Link> */}
          </div>
          <div className="col-md-6 centralize" >
            <img src={'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt="" width="100%" />
          </div>
          <div className="col-md-6 form-wrapper">
            <h2 className="page-title">Register</h2>
            <div className="form-group">
              <label htmlFor="firstName" className="control-label">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="control-label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
               
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="control-label">
                Email Address
              </label>
              <input
                type="text"
                name="email"
               
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="control-label">
                Password
              </label>
              <input
                type="password"
                name="password"
             
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="government_id" className="control-label">
                Government Issued ID
              </label>
              <input
                type="file"
                // name="government_id"
                // value={ government_id }
                // onChange={this.handleFileChange}
                className="form-control"
              />
              <img src={""} alt="" id="image-box" width="150"/>
            </div>

            <button
              className="btn btn-success submit"
             
              
              >
                submit
            </button>
            <Link to="/login" className="text-white ">
              Already registered? Login
            </Link>
          </div>
        </div>
        </div>
          </>
        );
    }
}

export default Register;