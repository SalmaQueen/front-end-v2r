import React, { Component } from 'react';
// import './Footer.css'
import { Helmet } from 'react-helmet';


class Footer extends Component {
    render() {
        return (
            <>
            <Helmet>
            <style type="text/css">{`
            ul {
                margin: 0px;
                padding: 0px;
            }
            .footer-section {
              background: blue;
              position: relative;
              color: white;
            }
            .footer-cta {
              border-bottom: 1px solid #373636;
            }
            .single-cta i {
              color: #ff5e14;
              font-size: 30px;
              float: left;
              margin-top: 8px;
            }
            .cta-text {
              padding-left: 15px;
              display: inline-block;
            }
            .cta-text h4 {
              color: #fff;
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 2px;
            }
            .cta-text span {
              color: #fff;
              font-size: 15px;
            }
            .footer-content {
              position: relative;
              z-index: 2;
            }
            .footer-pattern img {
              position: absolute;
              top: 0;
              left: 0;
              height: 330px;
              background-size: cover;
              background-position: 100% 100%;
            }
            .footer-logo {
              margin-bottom: 30px;
            }
            .footer-logo img {
                max-width: 200px;
            }
            .footer-text p {
              margin-bottom: 14px;
              font-size: 14px;
                  color: #fff;
              line-height: 28px;
            }
            .footer-social-icon span {
              color: #fff;
              display: block;
              font-size: 20px;
              font-weight: 700;
              font-family: 'Poppins', sans-serif;
              margin-bottom: 20px;
            }
            .footer-social-icon a {
              color: #fff;
              font-size: 16px;
              margin-right: 15px;
            }
            .footer-social-icon i {
              height: 40px;
              width: 40px;
              text-align: center;
              line-height: 38px;
              border-radius: 50%;
            }
            .facebook-bg{
              background: #3B5998;
            }
            .twitter-bg{
              background: #55ACEE;
            }
            .google-bg{
              background: #DD4B39;
            }
            .footer-widget-heading h3 {
              color: #fff;
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 40px;
              position: relative;
            }
            .footer-widget-heading h3::before {
              content: "";
              position: absolute;
              left: 0;
              bottom: -15px;
              height: 2px;
              width: 50px;
              background: #ff5e14;
            }
            .footer-widget ul li {
              display: inline-block;
              float: left;
              width: 50%;
              margin-bottom: 12px;
            }
            .footer-widget ul li a:hover{
              color: #ff5e14;
            }
            .footer-widget ul li a {
              color: #fafafa;
              text-transform: capitalize;
            }
            .subscribe-form {
              position: relative;
              overflow: hidden;
            }
            .subscribe-form input {
              width: 100%;
              padding: 14px 28px;
              background: #2E2E2E;
              border: 1px solid #2E2E2E;
              color: #fff;
            }
            .subscribe-form button {
                position: absolute;
                right: 0;
                background: #ff5e14;
                padding: 13px 20px;
                border: 1px solid #ff5e14;
                top: 0;
            }
            .subscribe-form button i {
              color: #fff;
              font-size: 22px;
              transform: rotate(-6deg);
            }
            .copyright-area{
              background: #202020;
              padding: 25px 0;
            }
            .copyright-text p {
              margin: 0;
              font-size: 14px;
              color: #f8fcfc;
            }
            .copyright-text p a{
              color: #ff5e14;
            }
            .footer-menu li {
              display: inline-block;
              margin-left: 20px;
            }
            .footer-menu li:hover a{
              color: #ff5e14;
            }
            .footer-menu li a {
              font-size: 14px;
              color: #f1f5f5;
            }



              `}</style>
                </Helmet>
     
            <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don???t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button className="btn btn-rounded">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2021, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
            
            
            
       
        );
    }
}

export default Footer;