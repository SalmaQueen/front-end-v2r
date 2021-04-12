import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import {Button} from 'react-bootstrap'

export default class Agent extends Component {
    render() {
        return (
            <div className="mb-2">
             <Helmet>
                <style type="text/css">{`

/* Our Team
-------------------------------------------------------*/

.our-team .team-row {
  margin-left: -40px;
  margin-right: -40px;
}

.our-team .team-wrap {
  padding: 0 40px;
}

.our-team .container-fluid {
  padding: 0 50px;
}

.team-img img {
  -webkit-transition: all .2s ease-in-out;
  -moz-transition: all .2s ease-in-out;
  -o-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  overflow: hidden;
  width: 100%;
}

.team-member,
.team-img {
  position: relative;
  overflow: hidden;
}

.team-title {
  margin: 30px 0 7px;
}

.overlay {
  background: #ff5e14;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all .2s ease-in-out;
  -moz-transition: all .2s ease-in-out;
  -o-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.team-details {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 0;
  padding: 5%;
  overflow: hidden;
  width: 100%;
  z-index: 2;
  -webkit-transition: all .2s ease-in-out;
  -moz-transition: all .2s ease-in-out;
  -o-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}

.team-details p {
  color: #fff;
}

.team-img:hover .team-details {
  opacity: 1;
  margin-top: -80px;
}

.team-img:hover .overlay {
  opacity: 1;
}

.socials a {
  display: inline-block;
  width: 37px;
  height: 37px;
  background-color: transparent;
}

.socials i {
  line-height: 37px;
  color: #616161;
  font-size: 14px;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  text-align: center;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.team-details .socials i {
	color: #fff;
}

.socials a:hover i {
  color: #fff;
  background-color: #355c7d;
}

.img-rounded {
  border-radius: 50%;
  width:50%;
  height:50%;
}
                    

   
                  `}</style>
                    </Helmet>



                    <div className="container">

<div className="row heading">
  <div className="col-md-6 col-md-offset-3">
    <h2 className="text-center bottom-line">Meet Our Team</h2>
    <p className="subheading text-center">Creative Nerds</p>
  </div>
</div>

<div className="row team-row">

  <div className="col-md-4 col-sm-6 team-wrap">
    <div className="team-member text-center">
      <div className="team-img">
        <img src="http://deothemes.com/envato/enigma/html/img/team_1.jpg" className="img-rounded" alt=""/>
        <div className="overlay">
          <div className="team-details text-center">
            <p>
              Our web design team will spend time with our digital marketing team.
            </p>
            <div className="socials mt-20">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-google-plus"></i></a>
              <a href="#"><i className="fa fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
      <h6 className="team-title">John Marshall</h6>
      <span>Designer</span>
    </div>
  </div>
 

  <div className="col-md-4 col-sm-6 team-wrap">
    <div className="team-member text-center">
      <div className="team-img">
        <img src="http://deothemes.com/envato/enigma/html/img/team_2.jpg" className="img-rounded" alt=""/>
        <div className="overlay">
          <div className="team-details text-center">
            <p>
              Our web design team will spend time with our digital marketing team.
            </p>
            <div className="socials mt-20">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-google-plus"></i></a>
              <a href="#"><i className="fa fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
      <h6 className="team-title">Steve Roberts</h6>
      <span>Photographer</span>
    </div>
  </div>


  <div className="col-md-4 col-sm-6 team-wrap">
    <div className="team-member last text-center">
      <div className="team-img">
        <img src="http://deothemes.com/envato/enigma/html/img/team_3.jpg" className="img-rounded" alt=""/>
        <div className="overlay">
          <div className="team-details text-center">
            <p>
              Our web design team will spend time with our digital marketing team.
            </p>
            <div className="socials mt-20">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-google-plus"></i></a>
              <a href="#"><i className="fa fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
      <h6 className="team-title">Michael Cartney</h6>
      <span>Designer</span>
    </div>
  </div>
  

</div>
</div>      
            </div>
        )
    }
}
